
var names = ['Ariel','Bella','Cenicienta','BlancaNieves'];
/*var comida = ['pan','leche','agua','arroz'];

comida.forEach(function(item){
 console.log('forEach', item);
});

names.forEach(function(name){
console.log('forEach', name);
});

names.forEach((name)=> {
console.log('arrowFunc',name);
});

names.forEach((name)=> console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Andrew'));


 addStatement = (a,b) => (a+b);

addExpression = (a,b) =>{
return a+b;
}

console.log(addStatement(3,3));
addExpression(4,4);
*/

var person ={
name:'Andrew',
greet: function(){
 names.forEach(function(name){
   console.log(this.name+' Says hi to' + name)
    });
  }
};


person.greet();


var person ={
name:'Andrew',
greet: function(){
 names.forEach((name)=> {
   console.log(this.name+' Says hi to ' + name)
    });
  }
};



person.greet();
