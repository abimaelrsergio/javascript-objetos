const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@gmail.com',
    telefone: ['1155654566', '119080987']
}
console.log(cliente);

cliente.endereco = {
    rua: 'R. Joseph Smith',
    numero: 135,
    apartamento: true,
    complemento: 'ap 934'
}

console.log(cliente);

console.log(cliente.endereco);

console.log(cliente['endereco']);

console.log(typeof(cliente));