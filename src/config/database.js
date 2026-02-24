
const mongoose = require('mongoose');

const coonnectDB = async () => {
    await mongoose.connect(
  "mongodb+srv://KuanrBhai:tapu1234@coderak.xo6cx77.mongodb.net/devTinder"
);
};

module.exports = coonnectDB;
