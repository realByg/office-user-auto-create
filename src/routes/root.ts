import {Middleware} from '@cfworker/web'

const root: Middleware = async ({req, res}) => {
    res.body = 'it works'
}

export default root
