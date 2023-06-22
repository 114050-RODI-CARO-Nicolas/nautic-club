$(document).ready(function(){
    showMembers();
})

function showMembers(){

    
    $.ajax({
        url: 'https://localhost:7136/api/Socio/get',
        type: 'GET',
        success: function(data){
            $("#table-body").empty();
            $.each(data, function(idx, item){
               var row= '<tr>'+
                        '<td>'+item.id+'</td>'+
                        '<td>'+item.apellido+'</td>'+
                        '<td>'+item.nombre+'</td>'+
                        '<td>'+item.telefono+'</td>'+
                        +'</tr>'
            
                $('#table-body').append(row);
            })
        },
        error: function(request, msg, error){
            alert("Error!")
        }
    });

    
}

