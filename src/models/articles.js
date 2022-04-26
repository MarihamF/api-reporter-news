const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs =  require('bcryptjs')
const jwt =  require('jsonwebtoken')

const articleschema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    reporter:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    image:{
        type:Buffer
    }
})

articleschema.methods.toJSON = function(){
    const article = this
    const articleOject = article.toObject()
    return articleOject
}

const Article = mongoose.model('Article', articleschema)

module.exports = Article 