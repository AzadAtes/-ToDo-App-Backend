const logger = (req, res, next) => {

    let methodColor = ''

    switch(req.method) {
        case 'GET':
            methodColor = '34'
            break;
        case 'POST':
            methodColor = '32'
            break;
        case 'PATCH':
            methodColor = '33'
            break;
        case 'DELETE':
            methodColor = '31'
            break;
        default:
            methodColor = '97'
    }    
    console.log(`\x1b[${methodColor}m${req.method}\t\x1b[0m ${req.baseUrl + req.url}`)
    next()
}

module.exports = { logger }