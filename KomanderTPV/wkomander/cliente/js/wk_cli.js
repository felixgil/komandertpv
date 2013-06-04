 $(document).ready(function(){
                   
                g_comanda();  
                g_info_comanda();   
                g_familias_comanda(0);
                
                $(".qwerty").keyboard({
                    position:{
                        at: 'center bottom'
                    }
                });
                   
                   
                  $('#dialogBorraLinea').hide();
                  $('#dialogTexto').hide();
                 
                			
                   $('#dialog').dialog({
                            autoOpen: false,
                            width: 600,
                            buttons: {
                                    "OK": function() { 
                                                eliminar();
                                    }, 
                                    "Cancel": function() { 
                                            $(this).dialog("close"); 
                                    } 
                            }
                    });

                    // Dialog Link
                    $('#bEliminar').click(function(){
                            $('#dialog').dialog('open');
                            return false;
                    });
                    
                    
           
        });    





function g_info_comanda(){

        $.ajax({
                            url: "../phps/g_info_comanda.php",
                            type: "POST",
                            data: "",
                            success: function(datos){
                              $("#tabla_info").remove();
                              $("#container_info").append(datos);
                              
                             }
                    });



    }
    
      function g_comanda(){

        $.ajax({
                            url: "../phps/g_comanda.php",
                            type: "POST",
                            data: "",
                            success: function(datos){
                              $("#td_comanda").html("");
                              $("#td_comanda").append(datos);
                              
                             }
                    });



    }
    
    function g_familias_comanda(padre){

        $.ajax({
                            url: "../phps/g_familias_comanda.php",
                            type: "POST",
                            data: "padre="+padre,
                            success: function(datos){
                              $("#articulos").html("");
                              $("#articulos").append(datos);
//                                set_padre(padre);
                                g_articulos_comanda(padre);
                             }
                    });



    }
    
   function g_articulos_comanda(padre){

      $.ajax({
                            url: "../phps/g_articulos_comanda.php",
                            type: "POST",
                            data: "padre="+padre,
                            success: function(datos){
//                              $("#articulos").html("");

                              $("#articulos").append(datos);
//                              alert(datos);  
                             }
                            
       });



    }
    
    


function padre0(){
    g_familias_comanda(0);
}

function sube1(familia){
    
    
    $.ajax({
                url: "../phps/g_padre.php",
                type: "POST",
                data: "familia="+familia,
                success: function(datos){

                   
                    g_familias_comanda(datos.trim());
                }
       });
}


function sin_stock(art){
    alert("SIN EXISTENCIAS:\n\n" + art);
}


function pte(){    
        location.href="pte.php";        
}


function borralinea2(idlinea, enviado){
    location.href="borralinea.php?enviado="+enviado+"&idlinea="+idlinea;
}


function gobservlinea(id){

        $.ajax({
                    url: "../g_observ_linea.php",
                    type: "GET",
                    data: "idhist="+id,
                    success: function(datos){

                    texto_libre.value = datos;



                    }
            });



}

function iobservlinea(id, ob){

                $.ajax({
                        url: "../i_observ_linea.php",
                        type: "GET",
                        data: "idhist="+id+"&observ="+ob,
                        success: function(datos){

                         }
                });



}

function textolibre(id){
    gobservlinea(id);
    $("#dialogTexto").dialog({
                    autoOpen: false,
                    width: 600,
                    buttons: {

                            "OK": function() { 

                                    iobservlinea(id, texto_libre.value);
                                     $(this).dialog("close");    
                            }, 
                            "Cancel": function() { 
                                    $(this).dialog("close"); 
                            } 
                    }
            });
    $("#dialogTexto").dialog("open");

}

        function a_historial(mods, articulo, idarticulo, msg){
               var  temp = window.confirm(msg + "\n\n" + articulo.replace(/%20/g, " "));
              if (temp){
                   if (mods=="S"){
                             location.href="mods.php?i="+idarticulo+"&a="+articulo;
                   }else{


                                $.ajax({
                                    url: "../comanda_i_historial.php",
                                    type: "POST",
                                    data: "articulo="+articulo+"&idarticulo="+idarticulo,
                                    success: function(datos){

                                         g_comanda();
                                         g_info_comanda();

                                    }
                                 });
                    }

                  g_comanda();
              
              }
        }
        