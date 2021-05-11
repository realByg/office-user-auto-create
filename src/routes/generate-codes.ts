import {Middleware} from '@cfworker/web'

import code from '../core/code'

const generateCodes: Middleware = async ({req, res}) => {
    const amount = req.params?.amount
    if (!/^[1-9][1-9]?$/.test(amount)) {
        res.body = {
            error: 'Invalid amount',
        }
        res.status = 400
        return
    }

    res.body = await code.generate(Number(amount))
}

export default generateCodes
