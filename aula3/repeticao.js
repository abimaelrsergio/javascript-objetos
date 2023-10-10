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

for (const chave in cliente) {
    //console.log(cliente[chave]);
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}