const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

try {
  mongoose.connect(uri, options).then(console.log("\n✔ Successfully connected to database!"));
} catch(err) {
  console.log(err);
}

mongoose.connection.on("error", (err) => {
  console.log(err);
});