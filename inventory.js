var inventory = [];

$( document ).ready( function(){
    $( '#addButton' ).on( 'click', function(){
      console.log( 'in addButton on click' );
      // get user input
      var newObject = {
        size: $( '#sizeIn' ).val(),
        color: $( '#colorIn' ).val(),
        description: $( '#descriptionIn' ).val()
      }; // end newObject
      console.log( 'adding:', newObject );
      // push into an array
      inventory.push( newObject );
      // update DOM
      displayInventory();
      // display a success alert
      alert( 'Added to inventory!' );
    }); //end addButton on click
}); // end doc ready

function displayInventory(){
  console.log( 'in displayInventory' );
  // stored the ul elemet in an array
  var outputList = $( '#inventoryOut' );
  // empty ul
  outputList.empty();
  //loop through inventory array
  for( var i=0; i<inventory.length; i++ ){
    // append each item to the ul element
    var stringToAppend = '<li>';
    stringToAppend += inventory[ i ].size + ' ';
    stringToAppend += inventory[ i ].color + ' ';
    stringToAppend += inventory[ i ].description;
    stringToAppend += '</li>';
    outputList.append( stringToAppend );
  } // end for
} // end displayInventory
