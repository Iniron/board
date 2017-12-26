var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//Schema
var userSchema = mongoose.Schema({
  username:{type:String, required:[true,"Username is required!"], unique:true},
  password:{type:String, required:[true,"Password is required!"], select:false},
  name:{type:String, required:[true,"Name is required!"]},
  email:{type:String}
},{
  toObject:{virtuals:true}
});

//Virtuals
userSchema.virtual("passwordConfirmation")
.get(function(){ return this._passwordConfirmation; })
.set(function(value){ this._passwordConfirmation=value; });

userSchema.virtual("originalPassword")
.get(function(){ return this._originalPassword; })
.set(function(value){ this._originalPassword=value; });

userSchema.virtual("currentPassword")
.get(function(){ return this._currentPassword; })
.set(function(value){ this._currentPassword=value; });

userSchema.virtual("newPassword")
.get(function(){ return this._newPassword; })
.set(function(value){ this._newPassword=value; });

//Password Validation
userSchema.path("password").validate(function(v){
  var user = this;
});

module.exports =
