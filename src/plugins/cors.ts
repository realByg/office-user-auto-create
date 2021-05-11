import {Middleware} from '@cfworker/web'

const cors: Middleware = async ({res}, next) => {
    res.headers.set('access-control-allow-origin', '*')
    await next()
}

export default cors
