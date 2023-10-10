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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para o telefone comercial ${telefoneComercial}`);
    console.log(`Ligando para o telefone residencial ${telefoneResidencial}`);
}

//ligaParaCliente(cliente.telefone[0], cliente.telefone[1])
ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
};

console.log(encomenda);