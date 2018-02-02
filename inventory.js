var inventory = [];
var cart = [];
var inventoryState = true; // if false, we're in sales mode


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
      //alert( 'Added to inventory!' );
    }); //end addButton on click
    $('#searchButton').on('click', function(){
      var matches = [];
      // loop through inventory and find Matches
      for(i = 0; i < inventory.length; i++){
        // if both size and color are a match, push into matches array
        if(inventory[i].size === $('#sizeSearchIn').val() && inventory[i].color ===   $('#colorSearchIn').val()){
          console.log(inventory[i]);
          // push into matches
          matches.push(inventory[i]);
        } // end match found
      }// end for loop
      displayMatches(matches);
    });
    $('#matchesOut').on('click', '.addToCartButton', function(){
      for (var i = 0; i < inventory.length; i++) {
        if(inventory[i].description === $(this).data('description')){
          // splice inventory[i] from inventory and push to cart
          cart.push(inventory.splice(i, 1)[0]);
        }
      }
      updateCart();
    }); // end matchesOut on click of .addToCartButton
    $('.toggleState').on('click', function(){
      // switch inventory state between true and false
      inventoryState = !inventoryState;
      console.log(inventoryState);
      updateUI();
    }); // $('.toggleState').on('click'

    updateUI();
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

function displayMatches(matchesArray){
  var matchesOutput = $('#matchesOut');
  matchesOutput.empty();
  if(matchesArray.length > 0){
    for (var i = 0; i < matchesArray.length; i++) {
      var outputString = '<li>';
      outputString += matchesArray[i].description;
      outputString += ' <button class="addToCartButton" data-description="'+matchesArray[i].description+'">Add To Cart</button></li>';
      matchesOutput.append(outputString);
    }
  } else {
    matchesOutput.append('<li>NONE</li>');
  }
}

function updateCart(){
  var output = $('#cartOut');
  output.empty();
  for (var i = 0; i < cart.length; i++) {
    output.append('<li>'+cart[i].description+'</li>');
  }
}

function updateUI(){
  if(inventoryState){
    $('#addToInventory').show();
    $('#searchInventory').hide();
    $('#shoppingcart').hide();
  } else {
    $('#addToInventory').hide();
    $('#searchInventory').show();
    $('#shoppingcart').show();
  }
}
