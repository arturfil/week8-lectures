const bcrypt =  require('bcrypt');
const User =  require("../models/User");

const signUpUser = async (req, res) => {
  const { email } = req.body;
  const testEmail = await User.findOne({email});
  if (testEmail) {
    return res.status(500).json({message: "Couldn't create user"});
  }
  const user = new User(req.body);
  try {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(req.body.password, salt);
    user.save();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({message: "Couldn't create user"});
  }
}

const loginUser = async (req, res) => {
  return;
}

module.exports = {
  signUpUser
}