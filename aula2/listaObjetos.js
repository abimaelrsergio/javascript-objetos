const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@gmail.com',
    telefone: ['1155654566', '119080987']
}
console.log(cliente);

cliente.enderecos = [
    {
        rua: 'R. Joseph Smith',
        numero: 135,
        apartamento: true,
        complemento: 'ap 934'
    }
]
cliente.enderecos.push({
    rua: 'R. Manoel Sé',
    numero: 5,
    apartamento: false
})
cliente.enderecos.push({
    rua: 'R. Idalino Manoel',
    numero: 20,
    apartamento: true,
    complemento: 'apt 44'
})
console.log(cliente.enderecos);

const listaApenasApartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true);

console.log(listaApenasApartamentos);
