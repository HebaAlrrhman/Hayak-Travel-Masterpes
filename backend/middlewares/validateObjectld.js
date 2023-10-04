const mongoose = require("mongoose");

module.exports = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: "invalid id" })
    }
    next()

}
//If the ID is not valid, it will respond with a 400 status and a message, preventing the route handler from executing.