const personagem = {
    nome: 'Gandalf',
    classe: 'Mago',
    nivel: '20'
}

// Cópia por referência, é o mesmo objeto
const personagem2 = personagem;
personagem2.nome = 'Homem Aranha';
console.log(personagem.nome);
console.log(personagem2.nome);

console.log('\n-----------------------------\n');

// Cópia por valor realizada com Object.create(), ou seja, O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. 
const personagem3 = Object.create(personagem);
personagem3.nome = 'Mulher maravilha';
console.log(personagem.nome);
console.log(personagem3.nome);