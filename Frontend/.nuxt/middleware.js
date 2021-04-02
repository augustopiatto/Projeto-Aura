const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['fwdcookies'] = require('../middleware/fwdcookies.js')
middleware['fwdcookies'] = middleware['fwdcookies'].default || middleware['fwdcookies']

middleware['settings'] = require('../middleware/settings.js')
middleware['settings'] = middleware['settings'].default || middleware['settings']

export default middleware
