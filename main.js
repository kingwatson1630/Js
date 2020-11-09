// commentaire

//declaration de variable
var username = "sylvio";
console.log(username)

//array
var friends = ["Justine",24,"Fille"];
console.log(friends[2]);

var dog = {
    name: "Choupette",
    color:"black and white",
    age: 4
};

console.log("my dog is "+ dog.name)

var chien = new Object();
chien.name = "Choupette";
chien.color = "black and white";
chien.age = 5;
console.log("my age dog is "+ chien.age+ " ans")

//fonction constructeur
function Dog(name,color,age){
    this.name = name;
    this.color = color;
    this.age = age;
    this.aboie = function (){
        console.log("Wouaf...");
    }
}

var monChien = new Dog("Mao","white",10);
var monCaniche = new Dog("choupette","black",2);

console.log(monChien);
console.log(monCaniche);
monChien.aboie();