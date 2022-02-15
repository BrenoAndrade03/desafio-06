//criando objeto com 3 propriedades sobre min:

const eu={
    nome: 'Breno Pereira',
    idade: 18,
    interesses: 'animações',
}

//adicionando uma nova propriedade sem alterar o objeto inicial:

eu.gosto_musical='gospel',
console.log(eu);

//removendo uma propriedade do objeto.

delete eu.idade
console.log(eu);

//exibindo todas as propriedades do objeto:

Object.values(eu)
console.log(eu);

//criando array com 5 objetos:

const cadastro=[{},{},{},{},{}]

//nomeando as propriedades:

cadastro[0].nome='Breno'
cadastro[0].idade=18
cadastro[0].telefone= '99937-9227'
cadastro[0].amigos= []

cadastro[1].nome='Jaiderson'
cadastro[1].idade=18
cadastro[1].telefone= '98846-3624'
cadastro[1].amigos=[]

cadastro[2].nome='Livia'
cadastro[2].idade=18
cadastro[2].telefone= '99890-1927'
cadastro[2].amigos= []

cadastro[3].nome='Amanda'
cadastro[3].idade=18
cadastro[3].telefone= '98846-3626'
cadastro[3].amigos=[]

cadastro[4].nome='Natáliia'
cadastro[4].idade=18
cadastro[4].telefone= '99946-0527'
cadastro[4].amigos=[]
//adicionando 4 itens na propriedade amigos:

cadastro[0].amigos=['Mayara','Bia','Julia','Nicolas']
cadastro[1].amigos=['Bruno','Mariana','Giovana','Vitor']
cadastro[2].amigos=['Sofia','Alice','Natanael','Sloan']
cadastro[3].amigos=['Breno','Luis','Neusa','Gabriel']
cadastro[4].amigos=['Rebeca','Asafe','Rafael','Leony']

console.log(cadastro);

//mostrando o nome de um amigo de cada lista:

console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[2])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[1])
console.log(cadastro[4].amigos[3])