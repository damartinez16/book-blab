require("./config/database");
const Book = require('./models/book');

Book.deleteMany({})
.then(function(results) {
    console.log(results);
})
.then(function() {
    process.exit();
});