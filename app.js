//jshint esversion:6

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/myDB", {useNewUrlParser: true, useUnifiedTopology: true});

const mySchema = new my.Schema({
  name: String,
  rating: number,
  review: String

})

const my = mongoose.model("my" ,mySchema);

const My = new my ({
  name: "Apple",
  rating: 5,
  review: "Best Choice"
});

Mysave();

const personSchema = new person.Schema({
  name: String,
  rating: number,
  review: String

})

const person = mongoose.model("Person" ,mySchema);

const Person = new person ({
  name: "john",
  rating: 5,
  review: "Best Choice"
});

person.Save();

const findDocuments = function(db, callback){

}
