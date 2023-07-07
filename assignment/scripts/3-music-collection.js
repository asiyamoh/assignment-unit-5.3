console.log('***** Music Collection *****')

//an empty array that is called collection
let collection=[];

function addToCollection(title,artist,yearPublished){
    //create an object having the above properties
    console.log('I am inside the function');
    let collectionObject ={
        titleObject:title,
        artistObject:artist,
        yearPublishedObject:yearPublished
    }//end collectionObject
    //Add the new object to the end of the collection array
    collection.push(collectionObject);
    //Return the newly created object
    return collection;
}//end addToCollection

//test the function
console.log('My collection is:', collection);
console.log('Adding to my collection', addToCollection('Asiya','Mohamed',2019));
console.log('My collection is now:', collection);