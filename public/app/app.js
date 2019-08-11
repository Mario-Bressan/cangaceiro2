// importamos a função explicitando a extensão .js
// o que Anular ou React fazem automaticamente
// por meio do Webpack
import {handleStatus} from './utils/promise-helpers.js';

document
.querySelector('#myButton')
.onclick = () => 
fetch('http://localhost:3000/notas')
.then(res => {
    if(res.ok)
        return res.json();
    return Promise.reject(res.statusText);
}).then(notas => console.log(notas))
.catch(console.log);

