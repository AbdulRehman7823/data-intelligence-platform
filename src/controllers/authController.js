const authService = require("../services/authServices");

async function register(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "email and password are required"
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        error: "password must be at least 8 characters"
      });
    }

    const user = await authService.register(
      email,
      password
    );

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "email and password are required"
      });
    }

    const result = await authService.login(
      email,
      password
    );

    res.json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login
};