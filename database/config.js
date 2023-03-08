const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN_STRING);

    console.log("DB online");
  } catch (error) {
    console.log(error);
    throw new Error("DB Error - Review logs");
  }
};

module.exports = {
  dbConnection,
};
