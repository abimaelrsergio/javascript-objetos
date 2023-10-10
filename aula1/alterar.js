const pessoa = {
    nome: 'Abimael',
    profissao: 'Software Engineer'
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.telefone);

pessoa.telefone = 123432432;

console.log(pessoa.telefone);

pessoa['email'] = 'sergio@gmail.com';

console.log(pessoa.email);

console.log(pessoa);

pessoa.nome = 'Rodrigues Sergio';

console.log(pessoa);

// isso não é permitido (reatribuir um objeto declarado como const):
const novaPessoa = {
    nome: 'Pedro'
}
pessoa = novaPessoa;