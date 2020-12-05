const notice = '公告，留空不显示'

const officeConfig = {
	subscriptions: [
		{
			name: 'Office 365 A1 Plus for faculty',
			sku: ''
		},
		{
			name: 'Office 365 A1 Plus for students',
			sku: ''
		},
	],
	domains: ['a1p.us'],
	getCodeLink: 'https://a1p.us',
}

const AADConfig = {
	tenantId: '',
	clientId: '',
	clientSecret: '',
}

const KV = _KV

const genCodesPassword = 'password'
const genCodesAmount = 10


class CreateOfficeUser {

	constructor(u, d, s) {
		this.username = u
		this.domain = d
		this.skuId = s
		this.password = null
		this.accessToken = null
		this.userEmail = this.username + '@' + this.domain
	}

	async create() {
		this.createPassword()
		await this.getAccessToken()
		await this.createUser()
		await this.assignLicense()
		return {
			email: this.userEmail,
			password: this.password
		}
	}

	async getAccessToken() {
		const url = 'https://login.microsoftonline.com/' + AADConfig.tenantId + '/oauth2/v2.0/token'
		const postData = {
			grant_type: 'client_credentials',
			client_id: AADConfig.clientId,
			client_secret: AADConfig.clientSecret,
			scope: 'https://graph.microsoft.com/.default'
		}
		const reqOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: this.enQuery(postData)
		}
		const response = await fetch(url, reqOptions)
		const results = await response.json()
		this.accessToken = results.access_token
	}

	async createUser() {
		const url = 'https://graph.microsoft.com/v1.0/users'
		const postData = {
			accountEnabled: true,
			displayName: this.username,
			mailNickname: this.username,
			passwordPolicies: 'DisablePasswordExpiration, DisableStrongPassword',
			passwordProfile: {
				password: this.password,
				forceChangePasswordNextSignIn: true
			},
			userPrincipalName: this.userEmail,
			usageLocation: 'CN'
		}
		const reqOptions = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'Authorization': 'Bearer ' + this.accessToken
			},
			body: JSON.stringify(postData)
		}
		const response = await fetch(url, reqOptions)
		const results = await response.json()
		if (!!results.error) {
			if (results.error.message ==
				'Another object with the same value for property userPrincipalName already exists.')
				throw '用户名已存在'
			else
				throw JSON.stringify(results.error)
		}
		this.userId = results.id
	}

	async assignLicense() {
		const url = 'https://graph.microsoft.com/v1.0/users/' + this.userEmail + '/assignLicense'
		const postData = {
			addLicenses: [
				{
					disabledPlans: [],
					skuId: this.skuId
        		},
			],
			removeLicenses: []
		}
		const reqOptions = {
			method: 'POST',
			headers: {
				'Authorization': 'Bearer ' + this.accessToken,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postData)
		}
		const response = await fetch(url, reqOptions)
		const results = await response.json()
		if (!!results.error)
			throw JSON.stringify(results.error)
	}

	createPassword() {
		const a = 'ABCDEFGHIJKLMNOPQRSTUVWXTZ'
		const b = 'abcdefghiklmnopqrstuvwxyz'
		const c = '1234567890'

		let p = ''
		for (let i = 0; i < 4; i++) {
			p += a.charAt(Math.floor(Math.random() * (a.length - 0) + 0))
			p += b.charAt(Math.floor(Math.random() * (a.length - 0) + 0))
			p += c.charAt(Math.floor(Math.random() * (a.length - 0) + 0))
		}
		this.password = p
	}

	enQuery(data) {
		const ret = []
		for (let d in data) {
			ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]))
		}
		return ret.join("&")
	}
}



class Code {

	init(c) {
		this.code_k = c.split('@')[0]
		this.code_v = c.split('@')[1]
	}

	async validate() {
		const v = await KV.get(this.code_k)
		if (!!v && v === this.code_v) {
			return true
		} else
			return false
	}

	async delete() {
		await KV.delete(this.code_k)
	}

	async gen() {
		const a = 'ABCDEFGHIJKLMNOPQRSTUVWXTZ'
		const b = 'abcdefghiklmnopqrstuvwxyz'
		const c = '1234567890'
		const s = '@'

		let k = ''
		let v = ''
		k += a.charAt(Math.floor(Math.random() * (a.length - 0) + 0))
		k += a.charAt(Math.floor(Math.random() * (a.length - 0) + 0))
		k += b.charAt(Math.floor(Math.random() * (a.length - 0) + 0))
		k += b.charAt(Math.floor(Math.random() * (a.length - 0) + 0))
		k += c.charAt(Math.floor(Math.random() * (a.length - 0) + 0))

		v += a.charAt(Math.floor(Math.random() * (a.length - 0) + 0))
		v += b.charAt(Math.floor(Math.random() * (a.length - 0) + 0))
		v += a.charAt(Math.floor(Math.random() * (a.length - 0) + 0))

		await KV.put(k, v)
		return k + s + v
	}
}


const handleRequest = async request => {
	const requestUrl = new URL(request.url)
	const requestPath = requestUrl.pathname

	switch (requestPath) {
		case '/':
			const html = await fetch(
				'https://cdn.jsdelivr.net/gh/zayabighead/Office-User-Auto-Create@master/build/index.html'
			)
			return new Response(
				await html.text(), {
					status: 200,
					headers: {
						"Content-Type": "text/html; charset=utf-8"
					}
				}
			)
		case '/' + genCodesPassword:
			let codes = []
			for (let i = 0; i <= genCodesAmount; i++) {
				codes.push(
					await new Code().gen()
				)
			}
			return new Response(codes.join('<br>'), {
				status: 200,
				headers: {
					"Content-Type": "text/html; charset=utf-8"
				}
			})
		case '/getNotice':
			return new Response(notice, {
				status: 200
			})
		case '/getOfficeConfig':
			return new Response(JSON.stringify(officeConfig), {
				status: 200
			})
		case '/getOffice':
			const requestBody = await request.json()
			let response = {}
			const code = new Code()
			code.init(requestBody.code)
			if (await code.validate()) {
				try {
					const createOfficeUser = new CreateOfficeUser(
						requestBody.email.username,
						requestBody.email.domain,
						requestBody.subscription
					)
					const account = await createOfficeUser.create()
					response = {
						success: true,
						msg: '创建成功',
						account: account,
					}
					await code.delete()
				} catch (e) {
					response = {
						success: false,
						msg: e,
					}
				}
			} else {
				response = {
					success: false,
					msg: '激活码无效',
				}
			}
			return new Response(JSON.stringify(response), {
				status: 200
			})
		default:
			return new Response('Path does not exist', {
				status: 200
			})
	}
}
