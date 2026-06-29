const authService = require("../services/auth.service");
const { registerSchema, loginSchema } = require("../validators/auth.validator");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const register = async (req, res) => {
  const data = registerSchema.parse(req.body);
  const result = await authService.registerUser(data);
  res.status(201).json(new ApiResponse(201,result,"User registered successfully"));
};

const login = async (req, res) => {
 
    const data = loginSchema.parse(req.body);

    const result = await authService.loginUser(data);

    res.status(200).json(new ApiResponse(201,result,"Login Successfully"));
};

module.exports = {
  register,
  login,
};
