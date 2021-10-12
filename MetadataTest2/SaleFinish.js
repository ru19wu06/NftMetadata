var fs = require('fs');
const { finished } = require('stream');
 


// "name": "Solana FishDoggie",
// "description": "A Cute FishDoge, Can do nothing",
// "image": "https://ru19wu06.github.io/FishDoge_FDOGE/MetadataFF/2x/test.jpg",





for(var a=1;a<=6;a++){

    var fileName = String(a);

    var names = 'test'+a;
    var description = 'a fsfs';
    var image = 'https://ru19wu06.github.io/NftMetadata/MetadataTest3/1x/';
    //Fdoggie1.png
    image = image+'Fdoggie'+a+'.png' 

    var obj = {
        name:names,
        description:description,
        image:image
    };


    
  
    
fs.writeFile(fileName,  JSON.stringify(obj), function (err) {
    if (err)
        console.log(err);
    else
        console.log('Write operation complete.');
});

//console.log(JSON.stringify(obj));

}
//setBaseURI('https://ru19wu06.github.io/FishDoge_FDOGE/fdoge_nft/');

//https://ru19wu06.github.io/NftMetadata/MetadataTest2/

//https://ru19wu06.github.io/FishDoge_FDOGE/Metadata_test/