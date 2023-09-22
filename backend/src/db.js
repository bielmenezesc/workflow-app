// banco de dados
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// URL de conexão com o banco de dados local (por padrão, o MongoDB roda na porta 27017)
const dbURL = 'mongodb://localhost:27017/workflows';

// Conecte-se ao banco de dados
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

// Verifique a conexão
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB!');
});

module.exports = db;