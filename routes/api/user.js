const express = require('express')
const router = express.Router()
const User = require('../../controllers/volunteersController');
const passport = require('../../Passport');
const UserModel = require('../../models/user')
router.post('/', User.create);

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
            username: req.user.username,
            id: req.user.id,
            token: req.user.token
        };
        res.send(userInfo);
    }
)

router.get(
    '/logout',
    function(req,res){
        req.logout()
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
router.get('/me', (req, res)=>{
    console.log(req.user._id , "<=======>>>>>")
    if(!req.user) return res.sendStatus(403)
    UserModel.findById(req.user._id, (err, user)=>{
        user.password = "";
        return res.json(user)
    })
    
})

module.exports = router