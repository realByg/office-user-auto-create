import {Router} from '@cfworker/web'

import root from './routes/root'
import announcement from './routes/announcement'
import generateCodes from './routes/generate-codes'
import getOffice from './routes/get-office'
import getOfficeConfig from './routes/get-office-config'

import {GENERATE_CODES_SECRET_PATH} from './plugins/env'

const router = new Router()

router.get('/', root)
router.get('/announcement', announcement)
router.get('/getOfficeConfig', getOfficeConfig)
router.post('/getOffice', getOffice)
router.get(`${GENERATE_CODES_SECRET_PATH}/:amount`, generateCodes)

export default router
