const { User } = require('../models/user')

//TODO use in controller
const authenticate = async (req, res, next) => {
    const token = req.header('x-auth')

    try {
        const user = await User.findByToken(token)
        if (!user) {
            res.status(401).send();
        }
        req.user = user
        req.token = token
        next()
    } catch (e) {
        res.status(401).send();
    }
}

module.exports = { authenticate };