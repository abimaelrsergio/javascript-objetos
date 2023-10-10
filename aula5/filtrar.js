const clientes = require('./clientes.json');

function filtrarApartamentosSemDomplemento(lista){
    return lista.filter((item) => {
        return (item.endereco.apartamento && !item.endereco.hasOwnProperty('complemento'));
    });
}

const filtrados = filtrarApartamentosSemDomplemento(clientes);
console.log(filtrados);