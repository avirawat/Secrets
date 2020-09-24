const mongoose= require('mongoose');


exports.db= mongoose
.connect("mongodb://localhost/secret_DB", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
})
.then(() => console.log("db connected"))
.catch((err) => console.log(err));
