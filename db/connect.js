const mongoose = require("mongoose");

const connectionString = `mongodb+srv://rockfordgun:nj5KqkDv4wzyAC8n@myapidb.vqa6wdv.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
