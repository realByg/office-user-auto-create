//@ts-ignore
const ANNOUNCEMENT = typeof _ANNOUNCEMENT === 'undefined' ? null : _ANNOUNCEMENT
//@ts-ignore
const GET_CODE_LINK = typeof _GET_CODE_LINK === 'undefined' ? null : _GET_CODE_LINK
//@ts-ignore
const AAD_CONFIG = typeof _AAD_CONFIG === 'undefined' ? null : JSON.parse(_AAD_CONFIG || null)
//@ts-ignore
const OFFICE_DOMAINS = typeof _OFFICE_DOMAINS === 'undefined' ? null : JSON.parse(_OFFICE_DOMAINS || null)
//@ts-ignore
const OFFICE_SUBSCRIPTIONS = typeof _OFFICE_SUBSCRIPTIONS === 'undefined' ? null : JSON.parse(_OFFICE_SUBSCRIPTIONS || null)
//@ts-ignore
const KV = typeof _KV === 'undefined' ? null : _KV
//@ts-ignore
const GENERATE_CODES_SECRET_PATH = typeof _GENERATE_CODES_SECRET_PATH === 'undefined' ? null : _GENERATE_CODES_SECRET_PATH
//@ts-ignore
const USERNAME_BLACKLIST = typeof _USERNAME_BLACKLIST === 'undefined' ? null : _USERNAME_BLACKLIST

export {
    ANNOUNCEMENT,
    GET_CODE_LINK,
    AAD_CONFIG,
    OFFICE_DOMAINS,
    OFFICE_SUBSCRIPTIONS,
    KV,
    GENERATE_CODES_SECRET_PATH,
    USERNAME_BLACKLIST
}
