// metodo extraido de https://nodejs.dev/learn/reading-files-with-nodejs para leer archivos
const fs = require('fs');

fs.readFile('archivo_a_leer.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`F(${data}) = ${F(data)}`);
});

function F(n){

    if (n == 0){

        return 0;
    }

    else if (n == 1){

        return 1;
    }

    else{

        return F(n-1) + F(n-2)
    }
}