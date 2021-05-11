import {Middleware} from '@cfworker/web'

import {
    GET_CODE_LINK,
    OFFICE_DOMAINS,
    OFFICE_SUBSCRIPTIONS,
} from '../plugins/env'

const getOfficeConfig: Middleware = ({req, res}) => {
    res.body = {
        subscriptions: OFFICE_SUBSCRIPTIONS,
        domains: OFFICE_DOMAINS,
        getCodeLink: GET_CODE_LINK,
    }
}

export default getOfficeConfig
