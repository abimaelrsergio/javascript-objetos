const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@gmail.com',
    telefone: ['1155654566', '119080987']
}
cliente.enderecos = [
    {
        rua: 'R. Joseph Smith',
        numero: 135,
        apartamento: true,
        complemento: 'ap 934'
    }
]

// mdn: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects
// como obter todas as chaves de um objeto?
const chavesDoObjeto = Object.keys(cliente);

// Não confie na ordem das propriedads no array, pois podem ser alteradas.
console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes('enderecos')) {
    console.error('Erro. É necessário ter um endereço cadastrado.')
}