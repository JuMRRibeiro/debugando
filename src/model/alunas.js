const mongoose = require('mongoose');

const AlunasSchema = new mongoose.Schema({
    nome: { type: String },
    dateOfBirth: { type: String },
    nasceuEmSp: { type: String },
    livros: [{
        titulo: String,
        leu: String,
    }]
    
},{versionkey:false})

/*var sampleSchema = new Schema ({ nome: { type: String, required: true}});*/

const Alunas = mongoose.model('Alunas', AlunasSchema)

module.exports = Alunas