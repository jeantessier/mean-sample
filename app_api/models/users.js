const mongoose = require('mongoose')
var timestamps = require('mongoose-timestamp')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
})
userSchema.plugin(timestamps)

userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex')
    this.hash = this.hashPassword(password)
}

userSchema.methods.validPassword = function(password) {
    const hash = this.hashPassword(password)
    return this.hash === hash
}

userSchema.methods.generateJwt = function() {
    const expiry = new Date()
    expiry.setDate(expiry.getDate() + 7)
    return jwt.sign({
        sub: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000),
    }, process.env.JWT_SECRET)
}

userSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex')
}

mongoose.model('User', userSchema)
