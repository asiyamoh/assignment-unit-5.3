console.log('***** Music Collection *****')

//an empty array that is called collection
let collection=[];

function addToCollection(title,artist,yearPublished){
    //create an object having the above properties
    let collectionObject ={
        title:title,
        artist:artist,
        yearPublished:yearPublished
    }//end collectionObject
    //Add the new object to the end of the collection array
    collection.push(collectionObject);
    //Return the newly created object
    return collection;
}//end addToCollection

//test the function
console.log('My collection is:', collection);
addToCollection('Phone Numbers','Dominic Fike',2019);
addToCollection('3 Nights','Dominic Fike',2018);
addToCollection('Babydoll','Dominic Fike',2018);
addToCollection('Chicken Tendies','Clinton Kane',2022);
addToCollection('Fix it to break it','Clinton Kane',2020);
addToCollection('Avo Toast','Clinton Kane',2022);
console.log('My collection is now:', collection);


function showCollection(array){
    //Console log the number of items in the array.
    console.log('The number of items in the array is:', array.length);
    for(let i=0; i<array.length; i++){
        //log each album's information formatted like: 
        //TITLE by ARTIST, published in YEAR.
        let result = array[i].title + ' by ' +  array[i].artist + ', published in ' 
        + array[i].yearPublished;
        console.log(result);
    }//end for loop
}//end showCollection

//test the function 
showCollection(collection);

function findByArtist(artist){
    console.log('inside  the function');
    //Create an array to hold any results, empty to start
    let array=[];
        //add any objects with a matching artist to the array.
        if(array.artist == artist){
            console.log('inside the if loop');
            array += artist;
        }//end match
        //if no results are found, return an empty array.
        else{
            console.log('inside the else loop');
            array=[];
        }//end not a match
    return array;
}//end findByArtist

//test the function
console.log(findByArtist('Dominic Fike'));