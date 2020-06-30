const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//Map
const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

//Filter
const funcionarios = usuarios.filter(
    usuario => usuario.empresa === 'Rocketseat' && usuario.idade >= 18
);
console.log(funcionarios);

//Find
const empresa = usuarios.find(usuario => usuario.empresa === 'Google');
console.log(empresa);

const calculo = usuarios
    .map(usuario => ({...usuario, idade: usuario.idade * 2 }))
    .filter(usuario => usuario.idade <= 50);

console.log(calculo);