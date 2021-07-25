// Ir pusheando el repo cada tanto por si surge algun problema con la computadora.
// Tomarse un tiempo de descanso entre cada ejercicio.
// Estar tranquilos es clave, tienen las homeworks como guia.
// Si se traban con uno, pasar al siguiente.
// Esto es un simulacro, puede que este repaso sea mas dificil o mas facil que el propio Checkpoint!!!
// Amigarse del console.log() es clave para saber que nos va devolviendo cada variable y/o funcion.
// Leer lo que nos llega por consola!! Tanto errores como console.log() para darse cuenta que esta bien o que esta mal.

// Importamos las clases:
const { Queue, LinkedList, BinarySearchTree } = require('./DataStructures.js');

// Se incluyen los siguientes metodos para las estructuras de datos importadas.
// QUEUE -- enqueue -- dequeue -- size -- isEmpty
// LINKED LIST -- add -- remove -- print
// BINARY SEARCH TREE -- insert -- size -- contains -- breadthFirstForEach

/*****************************************************************/
/************************** Linked List **************************/
/*****************************************************************/

// Ejercicio A.
// Implementar los siguientes metodos para una linked list ya implementada.
// Ejemplo: head -> 12 -> 15 -> 16 -> 10 -> 2 -> null
// getHead() ---> Devuelve el primer nodo de la linkd list.
// myLinkedList.getHead() ---> devuelve 12.
// getTail() ---> Devuelve el ultimo nodo de la linked list.
// myLinkedList.getTail() ---> devuelve 2.
// search(value) ---> Devuelve la posicion del nodo con el valor recibido por parametro, contando desde 0.
// myLinkedList.search(16) ---> devuelve 2.
//const { Queue, LinkedList, BinarySearchTree } = require('./DataStructures.js');
LinkedList.prototype.getHead = function () {
    if(this.head!=null){
        return this.head.value
    }
    
};
//  let linkedList= new LinkedList();
//      linkedList.add(15);
//      linkedList.add(30);
//      linkedList.add(22);
//      linkedList.add(100);
// console.log(linkedList.getHead())
//console.log(linkedList)
//console.log(linkedList.head)

LinkedList.prototype.getTail = function () {
    let current=this.head;
    let prevValue
    while(current.next){
        prevValue=current.next.value;
        current=current.next
    }
    return prevValue

   
};
//console.log(linkedList.getTail())

LinkedList.prototype.search = function (value) {
    let current=this.head;
    let posicion=0
    while(current){
        if(current.value===value)return posicion;
        posicion++
        current=current.next
    }


  
};

/*****************************************************************/
/*************************** Recursion ***************************/
/*****************************************************************/

// Ejercicio B.
// Implementar una funcion que retorne true o false si el numero pasado por parametro es palindromo.
// Controlar que el numero pasado por parametro tengas mas de tres cifras, si el nro pasado tiene 2 o menos cifras
// o es negativo devolver null.
// Palindromo es una expresion que se lee igual de derecha a izquierda o viceversa.
// Ejemplo de numeros palindromos: 1001, 252, 2002, 2222, 9889.

function isPalindrome(number) {
    if(number < 99 || number <0)return null;
    if(String(number)===String(number).split('').reverse().join(''))return true;
    return false
    

    
}
//console.log(isPalindrome(2005))



/*****************************************************************/
/*********************** Recursion y Stack ***********************/
/*****************************************************************/

// Ejercicio C.
// Implementar una funcion que revierta los valores de una stack (pila).
// Ejemplo:
// 1 <- TOP
// 2
// 3
// 4
//
// Resultado:
// 4 <- TOP
// 3
// 2
// 1
//const { Queue, LinkedList, BinarySearchTree } = require('./DataStructures.js');
Queue.prototype.reverseStack = function () {
    

    return  this.array=this.array.reverse()

};
//  let queue= new Queue();

// queue.enqueue(12);
// queue.enqueue(33);
// queue.enqueue(22);
// queue.enqueue(4);
// console.log(queue.reverseStack()[0])
// console.log(queue.reverseStack()[1])
// console.log(queue.reverseStack()[2])
// console.log(queue.reverseStack()[3])



/*****************************************************************/
/**************************** Closures ***************************/
/*****************************************************************/

// Ejercicio D.

// Implementar una funcion usando closures
// Pepe tiene 28 años. Se quiere crear una funcion que incremente la edad de Pepe en un año
// y muestre por consola la nueva edad de Pepe.
// Por ejemplo, si llamo a la funcion growUp(), deberia devolver "Pepe tiene ahora 29 años."
// Si vuelvo a llamar a growUp(), deberia devolver "Pepe tiene ahora 30 años."
// Y asi consecutivamente...

function growUp() {
    var edad
    return function(){
        
        console.log(`Pepe tiene ahora ${edad=28} años`)
        edad++
    }();
}
growUp();
growUp()
//no pudo hacer que sume 
/*****************************************************************/
/****************************** BST ******************************/
/*****************************************************************/

// Ejercicio E.

// Dado un Binary Search Tree, devolver las hojas de ese arbol en un array
// ordenado de menor a mayor.
// Si se nos presenta un arbol como el que se encuentra en el archivo BST.png
// la funcion deberia retornar [1, 5, 14].
//const { Queue, LinkedList, BinarySearchTree } = require('./DataStructures.js');

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array=[]){

    if(this.left !== null){
      array.push(this.left);
    }
  
    if(this.right !== null){
      array.push(this.right);
    }
  
    cb(this.value);
  
    if(array.length > 0){
      array.shift().breadthFirstForEach(cb, array);
    }
    
};
BinarySearchTree.prototype.getLeafs = function () {
    let depth=[];
    this.breadthFirstForEach(function(val){ depth.push(val)});
    function compareNumbers(a, b) {
        return a - b;
      }
    return depth.sort(compareNumbers)
    
};

// let bst= new BinarySearchTree(0);
// bst.insert(1);
// bst.insert(5);
// bst.insert(14);
// console.log(bst.getLeafs());


                


/*****************************************************************/
/***************************** QUEUE *****************************/
/*****************************************************************/

// Ejercicio F.

// Dada una Queue, implementar una funcion que vacie dicha queue.
// Es decir que remueva todos los elementos uno por uno de la queue.
// Por ejemplo: [1, 2, 3, 4, 5, 6] --> [];
// HINT: usar el metodo .isEmpty() de la clase Queue ya implementada.
const { Queue, LinkedList, BinarySearchTree } = require('./DataStructures.js');
Queue.prototype.clearAll = function () {
    while(this.array.length>0){
        this.dequeue()
    }
};
let queue= new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue)
queue.clearAll();
console.log(queue)
    
/*****************************************************************/
/***************************** SORT ******************************/
/*****************************************************************/

// Ejercicio G.

// Ordenar un array de objetos segun DNI de mayor a menor (descendente).
// Ejemplo:
// objetoPersonas = [
//     {
//         dni: 40607080,
//         nombre: 'Carlitos',
//         apellido: 'Fulano',
//         edad: 22,
//         email: 'carlosfulano123@gmail.com',
//         username: 'xXElCrackXx',
//     },
//     {
//         dni: 23242526,
//         nombre: 'Maria',
//         apellido: 'Gonzalez',
//         edad: 48,
//         email: 'mary.gon@hotmail.com',
//         username: 'marymary321',
//     },
//     {
//         dni: 90919293,
//         nombre: 'Bartolomeo',
//         apellido: 'Simpson',
//         edad: 10,
//         email: 'bartsimpson@gmail.com',
//         username: 'elBarto',
//     },
//     {
//         dni: 76757473,
//         nombre: 'Doge',
//         apellido: 'De Hoz',
//         edad: 5,
//         email: 'soyelperrofavorito@yahoo.com.ar',
//         username: 'dogeOfficial',
//     },
// ];

// Resultado: [
//     {
//         dni: 90919293,
//         nombre: 'Bartolomeo',
//         apellido: 'Simpson',
//         edad: 10,
//         email: 'bartsimpson@gmail.com',
//         username: 'elBarto',
//     },
//     {
//         dni: 76757473,
//         nombre: 'Doge',
//         apellido: 'De Hoz',
//         edad: 5,
//         email: 'soyelperrofavorito@yahoo.com.ar',
//         username: 'dogeOfficial',
//     },
//     {
//         dni: 40607080,
//         nombre: 'Carlitos',
//         apellido: 'Fulano',
//         edad: 22,
//         email: 'carlosfulano123@gmail.com',
//         username: 'xXElCrackXx',
//     },
//     {
//         dni: 23242526,
//         nombre: 'Maria',
//         apellido: 'Gonzalez',
//         edad: 48,
//         email: 'mary.gon@hotmail.com',
//         username: 'marymary321',
//     },
// ];

function sortByDni(array) {
   
   
 array.sort( function (a, b) {return a.dni - b.dni;})
 return array
   


}
const objetoPersonas = [
    {
        dni: 40607080,
        nombre: 'Carlitos',
        apellido: 'Fulano',
        edad: 22,
        email: 'carlosfulano123@gmail.com',
        username: 'xXElCrackXx',
    },
    {
        dni: 23242526,
        nombre: 'Maria',
        apellido: 'Gonzalez',
        edad: 48,
        email: 'mary.gon@hotmail.com',
        username: 'marymary321',
    },
    {
        dni: 90919293,
        nombre: 'Bartolomeo',
        apellido: 'Simpson',
        edad: 10,
        email: 'bartsimpson@gmail.com',
        username: 'elBarto',
    },
    {
        dni: 76757473,
        nombre: 'Doge',
        apellido: 'De Hoz',
        edad: 5,
        email: 'soyelperrofavorito@yahoo.com.ar',
        username: 'dogeOfficial',
    },
];
console.log(sortByDni(objetoPersonas))
/*****************************************************************/
/**************************** DESAFIO ****************************/
/*****************************************************************/

// RESOLVER SI TIENEN TIEMPO.
// Implementar una funcion que convierta un numero de decimal a hexadecimal.
// Devolver el numero hexadecimal como String y separar con un espacio cada dos caracteres.
// Ademas verificar que el numero pasado sea entero y mayor que cero. No decimales, no negativos, no cero.
// Ejemplo: decToHex(156555) --> "26 38 B"
// decToHex(16777215) --> "FF FF FF"
// EXTRA:
// Si a la funcion ademas del numero se le pasa otro parametro que diga 'addHashtag' (#).
// Agregar el '#' al principio del string y quitar todos los espacios en blanco.
// Ejemplo: decToHex(16777215, 'addHashtag') --> #FFFFFF

// La base hexadecimal tiene 16 simbolos, como el decimal tiene diez, el binario tiene dos, el octal tiene ocho.
// Estos 16 simbolos van del 0 al 9 y contienen letras de la 'A' a la 'F' (en mayusculas para esta ocasion).
//
// Les dejo una tabla de decimal (DEC) a hexadecimal (HEX).
//
// Para investigar: https://bit.ly/3v8dRqX
//
//
// DEC -------- HEX
//  0            0
//  1            1
//  2            2
//  3            3
//  4            4
//  5            5
//  6            6
//  7            7
//  8            8
//  9            9
//  10           A
//  12           B
//  13           C
//  14           D
//  15           E
//  16           F

function decToHex(number,p,arr=[]) {
    
    if(number%1!==0 || number < 0 ){
        return 'number no valido';
    }
    if(Math.floor(number/16)>=1){
        arr.push(number%16)
        if(Math.floor(number/16)<=16)arr.push(Math.floor(number/16));
        return decToHex(Math.floor(number/16),p,arr)

    }
    
    arr.forEach(function(e,index){
        if(e===10)arr[index]='A';
        if(e===11)arr[index]='B';
        if(e===12)arr[index]='C';
        if(e===13)arr[index]='D';
        if(e===14)arr[index]='E';
        if(e===15)arr[index]='F'
    });
    arr.reverse()
    if(p==='addHashtag'){
        arr.unshift('#')
        return arr.join('')
    }
    


    
    return arr.join('')


}
console.log( decToHex(156555,'addHashtag'))
console.log( decToHex(460))
console.log( decToHex(16777215))








// NO BORRAR NI TOCAR NI AGREGAR NADA DEBAJO DE ESTA LINEA!!!!!
module.exports = {
    Queue,
    LinkedList,
    BinarySearchTree,
    isPalindrome,
    growUp,
    sortByDni,
    decToHex,
};
