import {Middleware} from '@cfworker/web'

import Office from '../core/office'
import code from '../core/code'
import randomHex from '../plugins/random-hex'

const getOffice: Middleware = async ({req, res}) => {
    try {
        const data = await req.body.json()

        if (!await code.validate(data?.code)) {
            res.body = {
                error: 'Invalid code'
            }
            res.status = 400
            return
        }

        const skuId = data?.skuId || (() => {throw 'skuId'})()
        const domain = data?.email?.domain || (() => {throw 'domain'})()
        const username = data?.email?.username || (() => {throw 'username'})()

        const email = `${username}@${domain}`
        const password = randomHex(5)

        const office = new Office()
        await office.getAccessToken()
        await office.createUser(username, password, domain)
        await office.assignLicense(email, skuId)

        res.body = {
            account: {
                email,
                password
            }
        }
        res.status = 201

    } catch (e) {
        res.body = String(e)
        res.status = 500
    }
}

export default getOffice
