const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: '9098098098',
    email: 'andre@dominio.com'
}

console.log(cliente);
console.log(`Nome: ${cliente.nome}, e a idade é: ${cliente.idade}`);
console.log(`Nome: ${cliente['nome']}, e a idade é: ${cliente['idade']}`);
console.log(`Os três primeiros digitos do cpf são ${cliente.cpf.substring(0, 3)}`);
console.log(`Os três primeiros digitos do cpf são ${cliente['cpf'].substring(0, 3)}`);