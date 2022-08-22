const mongoose = require("mongoose");

const url = "mongodb+srv://IgorNovaes:123456789EasyWork@cluster1.ai8i8ef.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;
