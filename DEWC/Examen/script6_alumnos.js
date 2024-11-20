// Array de imágenes para las tarjetas (pares de imágenes)
const images = [
    'f1.jpg',
    'f2.jpg',
    'f3.jpg',
    'f4.jpg',
    'f1.jpg',
    'f2.jpg',
    'f3.jpg',
    'f4.jpg'
];

//1.- Función Barajar 
function shuffle(array) {
    //recorrer el array para barajar aleatoriamente sus elementos
    nuevo=['','','','','','','', ''];
    for(var i=0;i<array.length;i++){
        num=parseInt(Math.random()*array.length-1);
        console.log(num);
        if(nuevo[num]!='' ){
            num=nuevo.indexOf(''); 
        } 

        nuevo[num]=array[i];
    }
    return nuevo;
}
//2.- Llamada a la función shuffle(array)
var array=shuffle(images)

//3.- Crear el tablero
const board = document.getElementById('board');
let firstCard = null; // Primera tarjeta seleccionada
let secondCard = null; // Segunda tarjeta seleccionada
let lockBoard = false; // Evitar múltiples clics durante la comparación

//4.- Recorrer el array images, y para cada imagen del array images: MAKE
for (var i=0; i<array.length;i++){
    document.getElementById('board').innerHTML+= "<div class='card' onclick='ver(this,"+i+")' ><img src='"+array[i] +"'>";
}

function ver(div, i){
    div.classList.add('revealed');
   if(firstCard != null){
        div2=div;
        secondCard=array[i];
        setTimeout(function(){
            comprobar(firstCard, secondCard, div1, div2);
        },500);
        
        
   }else{
    firstCard=array[i];
    div1=div;
   }
}

function comprobar(car1, car2 ,div1,div2){
    if (car1 != car2){
        div1.removeAttribute("class");
		div1.classList.add("card");
        div2.removeAttribute("class");
		div2.classList.add("card");
        
    };
    [firstCard, secondCard] = [null, null];

   


}




// Reiniciar el estado del tablero
function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}