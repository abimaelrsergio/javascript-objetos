// String em arquivo para objeto
const dados = require('./cliente.json');
console.log(dados);
console.log(typeof dados);

// Objeto para String
const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString);

// String em variável para objeto
const cliente = JSON.parse(clienteEmString);
console.log(cliente);
console.log(typeof cliente);