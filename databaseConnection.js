const database = require("mongoose");
const is_qoddi = process.env.IS_QODDI || false;
const username = encodeURIComponent("theMongoAdmin");
const password = encodeURIComponent("accidentalLoginSteps");

const qoddiURI = `mongodb+srv://${username}:${password}@cluster0.rnp4igh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const localURI =
  "mongodb://127.0.0.1/lab_example?authSource=admin&retryWrites=true&w=majority";

if (is_qoddi) {
  database.connect(qoddiURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} else {
  database.connect(localURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = database;
