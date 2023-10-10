const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: '9098098098',
    email: 'andre@dominio.com'
}

console.log(cliente);
console.log(`Nome: ${cliente['nome']}, e a idade é: ${cliente['idade']}`);
console.log(`Os três primeiros digitos do cpf são ${cliente['cpf'].substring(0, 3)}`);
console.log('\n------------------------\n');
// Imagine que só se tem as chaves, então usamos os colchetes
const chaves = ['nome', 'idade', 'cpf', 'email', 'altura'];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});