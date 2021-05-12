import {Middleware} from '@cfworker/web'

const asset = 'https://cdn.jsdelivr.net/gh/zayabighead/office-user-auto-create@static/bundle/index.html'

const root: Middleware = async ({req, res}) => {
    const response = await fetch(asset)
    res.body = response.text()
}

export default root
