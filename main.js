const Pessoa = require(`./classes/Pessoa`)

//método construtor instanciando objeto
let pessoa1 = new Pessoa(`Maria`, 18);
let pessoa2 = new Pessoa(`João`, 67);

// acessando atributos
console.log(`A idade de ${pessoa1.nome} é ${pessoa1.idade}`);
console.log(`A idade de ${pessoa2.nome} é ${pessoa2.idade}`);

//acessando métodos
console.log(pessoa1);
console.log(pessoa2);

console.log(pessoa1.seApresentar());
console.log(pessoa2.seApresentar());