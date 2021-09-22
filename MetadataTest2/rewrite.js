var fs = require('fs');
const { finished } = require('stream');
 


// "name": "Solana FishDoggie",
// "description": "A Cute FishDoge, Can do nothing",
// "image": "https://ru19wu06.github.io/FishDoge_FDOGE/MetadataFF/2x/test.jpg",





for(var a=1;a<=10;a++){

    var fileName = String(a);
    var names = 'test'+a;
    var description = 'a fsfs';
    var image = 'https://ru19wu06.github.io/NftMetadata/MetadataTest2/www.jpg';
    

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

//https://ru19wu06.github.io/FishDoge_FDOGE/Metadata_test/