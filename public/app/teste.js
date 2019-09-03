// Revisando closure
const funcaoExterna = nome => {
    const hoje = new Date();
    return () => console.log(nome, hoje);
};

const funcaoInternaRetornada = funcaoExterna('Mario');

funcaoInternaRetornada();

/* A função interna retornada por funcaoExterna não apenas lembra 
do parâmetro recebido pela função mais externa, 
mas também da variável hoje declarada no contexto da mesma função, 
caracterizando o suporte a closure. */
