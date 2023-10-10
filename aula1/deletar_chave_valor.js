const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}

console.log(objPersonagem);

// DELETANDO usando ponto
delete objPersonagem.aliado;

console.log(objPersonagem);
console.log(objPersonagem.aliado);

// DELETANDO usando colchetes
delete objPersonagem['status'];
console.log(objPersonagem);
console.log(objPersonagem.status);

// O valor de retorno do operador delete é um booleano, ou seja, 
//retorna sempre true ou false para cada operação. Porém, é importante 
//notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto:
const delProp = delete objPersonagem.classe;
const delPropInexistente = delete objPersonagem.numeroPassagem;
console.log(delProp); // true
console.log(delPropInexistente); // true - ele não retorna false se tentarmos remover uma propriedade que não existe

