const authorize = (req, res, next) => {
    const { user } = req.query
    if (user === 'Calvin') {
        req.user = { name: 'Calvin', id:3}
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
//     console.log('Authorize');
//     next()
}

module.exports = authorize