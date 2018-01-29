var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]; 

var addElementToBeginningOfArray = function(array, element){
<<<<<<< HEAD
 var n = [element, ...array]
 return n; 
=======
 var n = array; 
  n.unshift(element); 
  return n; 
>>>>>>> 2c78ef0d2cb176e6a94dba14717c1084067f0a3d
}


var destructivelyAddElementToBeginningOfArray = function(array, element){
array.unshift(element); 
return array; 
}

var addElementToEndOfArray = function(array, element){
<<<<<<< HEAD
  var n = [...array, element]; 
=======
  var n = array; 
  n.push(element); 
>>>>>>> 2c78ef0d2cb176e6a94dba14717c1084067f0a3d
  return n; 
}
  
var destructivelyAddElementToEndOfArray = function(array, element){
  array.push(element);
  return array; 
}

var accessElementInArray = function(array, index){
  return array[index]; 
}

var destructivelyRemoveElementFromBeginningOfArray = function(array){
  array.shift(); 
  return array; 
}

var removeElementFromBeginningOfArray = function(array){
<<<<<<< HEAD
 var n = array.slice(1);
 return n; 
=======
  var n = array; 
  n.shift(); 
  return n; 
>>>>>>> 2c78ef0d2cb176e6a94dba14717c1084067f0a3d
}

var destructivelyRemoveElementFromEndOfArray = function(array){
  array.pop(); 
  return array; 
}

var removeElementFromEndOfArray = function(array){
<<<<<<< HEAD
   
  var n = array.slice(0, array.length - 1); 
=======
  var n = array; 
  n.slice(0, n.length - 1); 
>>>>>>> 2c78ef0d2cb176e6a94dba14717c1084067f0a3d
  return n; 
}


