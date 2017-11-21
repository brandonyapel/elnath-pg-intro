console.log('client.js has been loaded');

$(document).ready(function(){
    console.log('jQuery has been loaded');
    getShoes();
    //eventlistener
    $('#addNewAirs').on('click',addNewAirs);
    $(document).on('click','.deleteButton',removeShoe);


    
})


function getShoes () {
    $('table').html('');
    $.ajax({
        method: 'GET',
        url: '/shoes',
        success: function(response){
            console.log('response', response);
            var appendItem = '';
            for (let responseIndex = 0; responseIndex < response.length; responseIndex++) {
                appendItem = ''
                appendItem +='<tr>';
                appendItem +='<td>'+response[responseIndex].name+'</td>';
                appendItem +='<td>'+response[responseIndex].cost+'</td>';
                appendItem +='<td>'+'<button class = "deleteButton" data-id = '+response[responseIndex].id+'>Delete</button>'+'</td>';
                appendItem +='</tr>';
                $('table').append(appendItem);
            }//end for
        }//end success
    })//end ajax
}

function addNewAirs () {
    $.ajax({
        method: 'POST',
        url: '/shoes',
        data: {
            name: 'Nike Air Jordan',
            cost: '110'
        },
        success: function(response){
            console.log('response', response);
            getShoes()
        }
    })
}//end add New Airs

function removeShoe(){
    console.log($(this).data());
    var shoeIDToRemove = $(this).data().id
    console.log('remove shoe was clicked! The shoe id was', shoeIDToRemove)

    $.ajax({
        method: 'DELETE',
        url: '/shoes/'+shoeIDToRemove,
        success: function(response){
            getShoes();
        }
    })
};//