// importamos a função explicitando a extensão .js
// o que Anular ou React fazem automaticamente
// por meio do Webpack
import {log} from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import {notasService as service} from './nota/service.js';

const sumItems = notas => notas
.$flatMap(nota => nota.itens)
.filter(item => item.codigo == '2143')
.reduce((total, item) => total + item.valor, 0);

document
.querySelector('#myButton')
.onclick = () => 
    service 
    .sumItems('2143')
    .then(log)
    .catch(log);
