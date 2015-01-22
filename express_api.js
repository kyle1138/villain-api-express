var express = require('express');
var request = require('request')
var fs = require('fs');
var app = express();
app.use(express.static('public'));

var rander = function(arr){
  index = Math.floor(Math.random() * arr.length);
  console.log(index);
  console.log(arr[index-1]);
  return arr[index];


}


app.get("/" , function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  console.log("request recieved");
  var villain = {
    name:"The " + rander(colors) + " " + rander(names),
    power:rander(powers),
    city:rander(cities)
  };
  res.send(villain);

})


app.get("/villain" , function(req,res){
  fs.readFile(public/randomVillain.html);
  res.end

})

var colors = ["Red" , "Crimson", "Bloody" , "Green" , "Blue","Purple","Black",
"Yellow","Dark", "Deadly" , "Evil" , "Sinister" , "Vile" , "Phantom" , "Creeping",
"Hateful","Notorious" , "Monstrous" , "Malevolent" , "Malificent" , "Baleful" , "Vicious" ,
"Malignant" , "Satanic" , "Murderous"];

var names = ["Rat" , "Blade" , "Killer" , "Dreadnaught" , "Viper" , "Claw" , "Assassin" ,
"Plague" , "Terror" , "Reaver" , "Menace" , "Mortimer" , "Creeper"
, "Monster" , "Reaper"];

var powers = ["Lasers" , "Poison Gas" , "Claws" , "Telekinetic Powers" , "Supernatural Karate",
"Firey Breath" , "Military Ordnance" , "Super Strength" , "Criminal Syndicate" ,
"Bombs" , "Mind Control" , "Criminal Genius" , "Infectious Disease" , "Killer" , "Maniac"
, "Skull", "Ghost"];

var cities = ["Speonk" , "Des Moines" , "Paramus" , "Ronkonkoma" , "Akron" ,
"Yaphank" , "New Rochelle", "Reno" , "Hackensack"];

app.listen(3000);
