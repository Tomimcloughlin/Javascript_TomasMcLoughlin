
let clave = 'carlitos12';
let cantIntentos = 1;
let dolar_blue = 290;
let dolar_oficial = 152;
let dolar_solidario = 269;
let respuesta=prompt('Ingrese');
let cantPesos;
while(cantIntentos  < 3 && respuesta != clave){
    alert('Te quedan '+(3 - cantIntentos));
    respuesta = prompt('Ingrese ');
    cantIntentos++;
   
}
if(respuesta === clave){
    alert('BienVenido.');
    switch(cantIntentos){
        case 1: alert('acertaste al primer intento');
            break;
        case 2: alert('acertaste al segundo intento');
            break;
        case 3:
            alert('acertaste al tercer intento');
    }
    cantPesos = prompt('Ingrese la cantidad de pesos que dispone');
    tipoDolar=parseInt(prompt('1-Dólar Oficial \n2-Dólar Solidario\n3-Dólar Blue'));
    while(!(tipoDolar == 1 || tipoDolar == 2 || tipoDolar == 3)) {
        tipoDolar=parseInt(prompt('1-Dólar Oficial \n2-Dólar Solidario\n3-Dólar Blue'));
        
    }
    switch(tipoDolar){
        case 1: alert ('La cantidad de dolares es ' + Math.round((cantPesos/dolar_oficial)*100) / 100);
        break;
        case 2: alert ('La cantidad de dolares es ' + Math.round((cantPesos/dolar_solidario)*100)/100);
        break;
        case 3: alert ('La cantidad de dolares es ' +Math.round((cantPesos/dolar_blue)*100)/100);
        break;
    }

}else{
    alert('lola');
}
