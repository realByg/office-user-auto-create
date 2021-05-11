import {AAD_CONFIG} from '../plugins/env'

class Office {
    token = null

    async getAccessToken() {
        const url = `https://login.microsoftonline.com/${AAD_CONFIG.tenantId}/oauth2/v2.0/token`
        const body = {
            grant_type: 'client_credentials',
            client_id: AAD_CONFIG.clientId,
            client_secret: AAD_CONFIG.clientSecret,
            scope: 'https://graph.microsoft.com/.default',
        }

        const res = await fetch(url, {
            method: 'POST',
            body: new URLSearchParams(body),
        })
        const data = await res.json()
        this.token = data?.access_token || null
    }

    async createUser(username: string, password: string, domain: string) {
        if (this.token === null)
            throw 'Token is null'

        const url = 'https://graph.microsoft.com/v1.0/users'
        const body = {
            accountEnabled: true,
            displayName: username,
            mailNickname: username,
            passwordPolicies: 'DisablePasswordExpiration, DisableStrongPassword',
            passwordProfile: {
                password: password,
                forceChangePasswordNextSignIn: true
            },
            userPrincipalName: `${username}@${domain}`,
            usageLocation: 'CN'
        }

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        const data = await res.json()

        if (res.status !== 201)
            if (data?.error?.message?.includes('userPrincipalName already exists'))
                throw 'Username Exists'
            else
                throw JSON.stringify(data)
    }

    async assignLicense(email: string, skuId: string) {
        if (this.token === null)
            throw 'Token is null'

        const url = `https://graph.microsoft.com/v1.0/users/${email}/assignLicense`
        const body = {
            addLicenses: [
                {
                    disabledPlans: [],
                    skuId: skuId
                },
            ],
            removeLicenses: []
        }
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const data = await res.json()

        if (res.status !== 200)
            throw JSON.stringify(data)
    }

}

export default Office
