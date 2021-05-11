import {Middleware} from '@cfworker/web'

import {ANNOUNCEMENT} from '../plugins/env'

const announcement: Middleware = ({req, res}) => {
    res.body = ANNOUNCEMENT
}

export default announcement
