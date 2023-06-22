$(document).ready(function(){
    showMembers();
})

function showMembers(){
///*showMembers hecha con jQuery
    
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


function handleFormSubmit(event){
    event.preventDefault();
    var apellido=document.getElementById('apellido').value
    console.log("apellido ", apellido)
    var nombre=document.getElementById('nombre').value
    var telefono=document.getElementById('telefono').value

    if(!validateInput(apellido, nombre, telefono)){
        return;
    }

    var member={
        apellido: apellido,
        nombre: nombre,
        telefono: telefono
    }

    postMember(member);

}

function validateInput(lastname, name, phone){
    if(lastname.trim()==='' || name.trim()==='' || phone.trim===''){
        alert("Llenar todos los campos por favor");
        return false;
    }

    return true;
}

function postMember(member){
    var endpoint="https://localhost:7136/api/Socio/save"
    var configs={
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            
        },
        body: JSON.stringify(member)
    }

    fetch(endpoint, configs)
    .then((response)=>{
        if(response.ok){
            document.getElementById('success-message').textContent="Se agregó el miembro correctamente"
        }
    })


}

