var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

function getEndereco(endereco) {
  return 'O usuário mora em '
    + endereco.cidade + ' / '
    + endereco.uf +', no bairro '
    +endereco.bairro+', na rua '
    +endereco.rua+' "Rua dos Pinheiros" com nº'
    +endereco.numero;
}

console.log(getEndereco(endereco));