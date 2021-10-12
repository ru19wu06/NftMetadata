var fruits = [];
for(var a=1;a<=2;a++){
    var jsonStr;



    jsonStr = 
    {
        trait_type:"Base",
        value:"Fish Doggie"
    },
    {
        trait_type:"Level",
        value:6
    },
    {
        trait_type:"Rarity",
        value:2
    };
    
    var newfruits = fruits.push(jsonStr);

    
}

console.log(fruits[0].trait_type);