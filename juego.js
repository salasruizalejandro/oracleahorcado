
document.addEventListener("DOMContentLoaded", function() {


});


/*variables para todos las funciones */

var palabras = ['MORADO','AMARILLO','VERDE','CELESTE','PURPURA'];
var tablero = document.getElementById('ahorcado').getContext('2d');
var letras = [];
var palabraCorrecta = "";
var errores = 9; 
var palabrasNuevas = [];
var palabraNueva;
var palabra;
var apoyo ;
var errosLeft;
let guardarArray= [];
var cuenta;
var palabraSecreta; 

function ingresarPalabra(){
    let cincoPalabras = document.getElementById('cincoPalabras').value;
    cincoPalabrasNueva = palabrasNuevas.push(cincoPalabras);
    document.getElementById('cincoPalabras').value = "";
    console.log(palabrasNuevas);
}

function anadir5Palabras(){ 

    if (palabrasNuevas.length <=4){
        ingresarPalabra()
        cincoPalabras.focus()
    }else 
    alert("Tiene permitido 5 palabras por favor de Guardar y empezar")
    document.getElementById('cincoPalabras').value = "";
}

/* botones*/
function btnGuardaryEmpezar(){
    location.href=("http://127.0.0.1:5500/juego.html");
    console.log(palabrasNuevas.join());
}

function btnCancelar(){
    location.href=("http://127.0.0.1:5500/juego.html");
}



function escojerPalabraSecreta(){

    if(palabrasNuevas.length == 5){
        palabraNueva = palabrasNuevas[Math.floor(Math.random()*palabrasNuevas.length)]
        palabraSecreta = palabraNueva;
        palabraSecreta = palabraSecreta.toUpperCase();           
        console.log(palabraSecreta)
         
        return palabraSecreta;        
    } if(palabrasNuevas.length <=4){
        palabra = palabras[Math.floor(Math.random()*palabras.length)];
        palabraSecreta = palabra;
        console.log(palabraSecreta)
        return palabraSecreta;
    }
}

function LimpiarPalabras(){
    palabrasNuevas = [];
    console.log(palabrasNuevas)
}

function vaciarespacio(){
    letras = [];
    errosLeft;
    palabraCorrecta = [''];
    guardarArray=[];
    palabraSecreta = 0;
    //console.log(palabraSecreta.length)
}
         
    

function dibujarLineas(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "darkblue";
    tablero.beginPath();
        
    var ancho=600/palabraSecreta.length;
    for( let i = 0 ; i < palabraSecreta.length; i++){
        tablero.moveTo(500+(ancho*i), 640);
        tablero.lineTo(550+(ancho*i), 640);
    }
    tablero.stroke();
    tablero.closePath();
} 

function escribirLetraConcreta(index){ 
    tablero.font = "bold 52px Montserrat";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "darkblue";
    tablero.beginPath();

    var ancho =600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 505 +(ancho*index), 620);
    console.log(palabraSecreta)
    console.log(palabraSecreta[index]) 

    cuenta =  guardarArray.push(palabraSecreta[index]);    
}

function escribirLetraIncorrecta(letra, errosLeft){
    tablero.font = "bold 40px Montserrat";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "darkblue";
    tablero.beginPath();

    tablero.fillText(letra, 535+(40*(10-errosLeft)), 710,40);

        if(errosLeft==8){
        tablero.beginPath();
        tablero.strokeStyle= "blue";
        tablero.lineWidth = 6;
        tablero.moveTo(50,600);
        tablero.lineTo(300,600);
        tablero.stroke(); 
        
    }if(errosLeft==7){
        tablero.beginPath();
        tablero.strokeStyle= "blue";
        tablero.lineWidth = 6;
        tablero.moveTo(125,600);
        tablero.lineTo(125,300);
        tablero.stroke(); 
            
    }if(errosLeft==6){
        tablero.beginPath();
        tablero.strokeStyle= "blue";
        tablero.lineWidth = 6;
        tablero.moveTo(125,600);
        tablero.lineTo(125,300);
        tablero.stroke();  
    
        tablero.beginPath();
        tablero.strokeStyle= "blue";
        tablero.lineWidth = 6;
        tablero.moveTo(125,300);
        tablero.lineTo(300,300);
        tablero.stroke(); 
    }if(errosLeft==5){
        tablero.beginPath();
        tablero.strokeStyle= "blue";
        tablero.lineWidth = 6;
        tablero.moveTo(125,600);
        tablero.lineTo(125,300);
        tablero.stroke();  
        
        tablero.beginPath();
        tablero.strokeStyle= "blue";
        tablero.lineWidth = 6;
        tablero.moveTo(125,300);
        tablero.lineTo(300,300);
        tablero.stroke(); 
        
        tablero.beginPath();
        tablero.strokeStyle= "blue";
        tablero.lineWidth = 6;
        tablero.moveTo(300,300);
        tablero.lineTo(300,350);
        tablero.stroke();
    }if(errosLeft==4){
        tablero.beginPath();
        tablero.fillStyle = 'blue';
        tablero.lineWidth = 2;
        tablero.arc(300, 380, 30, 0, 2 * Math.PI, false);
        tablero.fill();
        tablero.stroke();
    
        tablero.beginPath();
        tablero.strokeStyle= "blue";
        tablero.lineWidth = 6;
        tablero.moveTo(300,380);
        tablero.lineTo(300,500);
        tablero.stroke();    
    }if(errosLeft==3){
        tablero.beginPath();
        tablero.strokeStyle= "blue";
        tablero.lineWidth = 6;
        tablero.moveTo(300,500);
        tablero.lineTo(330,530);
        tablero.stroke();    
    
        tablero.beginPath();
        tablero.strokeStyle= "blue";
        tablero.lineWidth = 6;
        tablero.moveTo(300,500);
        tablero.lineTo(270,530);
        tablero.stroke(); 
    }if(errosLeft==2){
        tablero.beginPath();
        tablero.strokeStyle= "blue";
        tablero.lineWidth = 6;
        tablero.moveTo(300,450);
        tablero.lineTo(330,420);
        tablero.stroke(); 
    
        tablero.beginPath();
        tablero.strokeStyle= "blue";
        tablero.lineWidth = 6;
        tablero.moveTo(300,450);
        tablero.lineTo(270,420);
        tablero.stroke(); 
    }if(errosLeft==1){
        alert("Desiste y Busca otra palabra.")
        tablero.clearRect(0, 0, ahorcado.width, ahorcado.height);
        return errores = +9;
        
    }    
}

function verificarLetraClicada(key){
    if ( letras.length<1 || letras.indexOf(key)<0 ){
        letras.push(key)
        return false;
    }
    else{
        letras.push(key)
        return true;
    }
}

function adicionarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase()
}
    
    

function adicionarLetraIncorrecta(letter){
    if( palabraSecreta.indexOf(letter)<=0){
        errores-=1
    }
}

function ponerLineayNombre(){
    
    dibujarLineas(escojerPalabraSecreta());
    document.onkeydown = (e) => {
        let letra=e.key.toUpperCase()
        if (!verificarLetraClicada(e.key)){
            if(palabraSecreta.includes(letra)){
                adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
                for (let i= 0 ; i<palabraSecreta.length;i++){
                     if (palabraSecreta[i]===letra){
                        escribirLetraConcreta(i)
                    }if (palabraSecreta.length === cuenta){
                        console.log(cuenta)
                        
                            console.log(cuenta)
                            alert("Has ganado")
                        }
                    }
                }                            
                else{           
                    if (!verificarLetraClicada(e.key)) return
                    adicionarLetraIncorrecta(letra)
                    escribirLetraIncorrecta(letra,errores)
                }
            }
        }
    }
                 
function borrar(){
tablero.clearRect(0, 0, ahorcado.width, ahorcado.height);
}

function nuevoJuego(){
    ponerLineayNombre()
}

function desistir(){
    vaciarespacio()   
    borrar();
}
        