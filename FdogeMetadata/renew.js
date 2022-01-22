var fs = require('fs');
const { finished } = require('stream');
 


// "name": "Solana FishDoggie",
// "description": "A Cute FishDoge, Can do nothing",
// "image": "https://ru19wu06.github.io/FishDoge_FDOGE/MetadataFF/2x/test.jpg",





for(var a=1;a<=200;a++){

    var fileName = String(a);

    var ran = Math.floor(Math.random() * 53)+1;
    
    if(ran<=42){
        
        
        var names = 'A Fish Doge ';
        var description = 'A Fishdoggie that can do nothing';
        var image = 'https://ru19wu06.github.io/NftMetadata/30set/';

        image = image+'common/F'+Math.round(ran/2)+'.png' 

        var dsc = [
            {
                trait_type:"Level",
                value:1
            }
        ];

    }else if(ran>42 && ran<=51){
        ran = ran - 42;
        var names = 'A Special Fish Doge ';
        var description = 'A Fishdoggie that can do something';
        var image = 'https://ru19wu06.github.io/NftMetadata/30set/';
        image = image+'uncommon/S'+ran+'.png' 

        var dsc = [
            {
                trait_type:"Level",
                value:2
            }
        ];

    }else if(ran == 52){

        var names = 'A Solana Fish Doge ';
        var description = 'A Solana Fishdoggie that can do everything';
        var image = 'https://ru19wu06.github.io/NftMetadata/30set/rare/Solana.png';

        var dsc = [
            {
                trait_type:"Level",
                value:4
            }
        ];

    }else if(ran ==53){
        var names = 'A Rich Fish Doge ';
        var description = 'A Rich Fishdoggie that can do everything';
        var image = 'https://ru19wu06.github.io/NftMetadata/30set/rare/rich.png';

        var dsc = [
            {
                trait_type:"Level",
                value:3
            }
        ];
    }



    //F+num
    //S+num
    //Rich solana
    
    

    

    var obj = {
        name:names,
        description:description,
        image:image,
        attributes:dsc
    };


    
  
    
fs.writeFile('./Data/'+fileName,  JSON.stringify(obj), function (err) {
    if (err)
        console.log(err);
    else
        console.log('Write operation complete.');
});

//console.log(JSON.stringify(obj));

}
