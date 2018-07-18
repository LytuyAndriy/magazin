var mongoose=require('mongoose');
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test1990@ds227481.mlab.com:27481/shopangularjs');
console.log("mongodb connect...")
module.exports=mongoose;