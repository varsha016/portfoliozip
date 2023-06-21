const { registerUser } = require("../controllers/userCotroller")



const router = require("express").Router()
router
    .post("/add", registerUser)
module.exports = router