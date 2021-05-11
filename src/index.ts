import {Application} from '@cfworker/web'

import router from './router'
import cors from './plugins/cors'

new Application()
    // cors setup
    .use(cors)
    // router setup
    .use(router.middleware)
    .listen()
