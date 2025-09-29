import {asyncHandler} from "../utils/asyncHandler.js";

// controllers/user.controller.js
 const registerUser = asyncHandler(async(req, res) => {
  res.status(200).json({
    message: "ok"
  })
 })

export {registerUser}