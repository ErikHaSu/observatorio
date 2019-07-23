$(function(){
  var ajax = $.ajax({
      data: {},
      url: 'getItaee.php',
      type: 'GET',
      success: function(response) {
      var num = JSON.parse(response);
      color(num)
      },
      error: function(response,status,error) {
          alert("Datos no encontrados o error en la conexion")
      }
  })
})

function color(num){
    var estado = ["Aguascalientes","Baja California","Baja California Sur","Campeche","Coahuila",
    "Morelos","Nayarit","Nuevo León","Oaxaca","Guanajuato","Guerrero","Hidalgo","Jalisco",
    "Mexico","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz",
    "Yucatan","Zacatecas","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Colima",
    "Chihuahua","Chiapas","CDMX","Durango","Michoacan","Sinaloa"];
   
      for (var i =0;i<estado.length;i++){
        
        if (num[i] < 0){
          document.getElementById(estado[i]).style.fill = "#ffae00";
          console.log("bajo");
        }else if((num[i]  >= 0)&&(num[i] <=2)){
          document.getElementById(estado[i]).style.fill = "#f05d08";
          console.log("medio");
        }else if((num[i] >= 2.1)&&(num[i] <=4)){
          document.getElementById(estado[i]).style.fill = "#f73b02";
          console.log("alto");
        }else if(num[i] >=4.1 ){
          document.getElementById(estado[i]).style.fill = "#e40202";
          console.log("muy alto");
        }
  }
  
}

    

