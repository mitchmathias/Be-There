const express = require('express')
const router = express.Router()
const User = require('../../controllers/volunteersController');
const passport = require('../passport')



router.post('/', (req, res) => {

    const { username, password, email, firstName, lastName } = req.body

    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User post error: ', err)
        } else if (user) {
            res.json({
                error: `${username} is already taken`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
                email: email,
                firstName: firstName,
                lastName: lastName
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('/login route ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('get user')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'log out' })
    } else {
        res.send({ msg: 'not logged in' })
    }
})

module.exports = router