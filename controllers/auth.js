const User = require('../models/user')

const signUp = (req, res) => {

    res.render('auth/sign-up.ejs', { title: "Sign Up",msg:"test" });


}



const addUser = async (req, res) => {


    console.log(console.log('request body', req.body));
    const userInDatabase = await User.findOne({ username: req.body.username })

    if (userInDatabase) {

        return res.send('Username already taken.')
    }
    const user = await User.create(req.body)
    console.log("new user: ", user)
    user.send();
}
module.exports = {
    signUp,
    addUser,
}