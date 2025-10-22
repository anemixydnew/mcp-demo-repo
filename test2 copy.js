var Circulo = function(nuevoRadio){
  this.radio = nuevoRadio;
  this.area =  function(){
    return Math.pow(this.radio, 2) * Math.PI;
  }
};

a = new Circulo(5.0);
b = new Circulo(2);

console.log("Área de a: "+ a.area());
console.log("Área de b: "+ b.area());