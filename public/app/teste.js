// Revisando closure
// const funcaoExterna = nome => {
//     const hoje = new Date();
//     return () => console.log(nome, hoje);
// };

// const funcaoInternaRetornada = funcaoExterna('Mario');

// funcaoInternaRetornada();

/* A função interna retornada por funcaoExterna não apenas lembra 
do parâmetro recebido pela função mais externa, 
mas também da variável hoje declarada no contexto da mesma função, 
caracterizando o suporte a closure. */


var funcTestValores = function() {
    const v1 = 1.22;
    const v2 = 1.55;
    const v3 = 0.06;
    const v4 = -1000.01;
    console.log('teste');
    console.log(v1 + v2 + v3 + v4);
}

funcTestValores();


//exemplo de partial application
const ehDivisivel = (divisor, numero) => !(numero % divisor);
console.log(ehDivisivel(2, 10));
console.log(ehDivisivel(2, 15));
console.log(ehDivisivel(2, 20));
//criacao da funcao pacial
const ehDivisivelPorDois = ehDivisivel.bind(null, 2);

console.log(ehDivisivelPorDois(10));
console.log(ehDivisivelPorDois(15));
console.log(ehDivisivelPorDois(20));

//podeos passar quantos parametros quisermos
//assume como parametros 2 e 5 nesta ordem
const fn = ehDivisivel.bind(null, 2, 5);
console.log(fn())
//print: false
