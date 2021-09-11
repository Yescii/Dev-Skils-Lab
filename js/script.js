
$('#submit-btn').on('click', function(evt){
    var $addList = $("#input").val();
    console.log($addList);
    const template = `
    <tr>
    <td><button>X</button></td>
    <td><span class="listColor">${$addList}</span></td>
   </tr>`;

    $('#table tbody').append(template);
    
    $("#input").val("");
});

$('#table tbody').on('click', 'button', function(evt){

    $(this).closest('tr').fadeOut(300), function (){
        $(this).remove();
    };
    
});