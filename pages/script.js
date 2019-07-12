function color(){
    var estado = ["zacatecas","chihuahua","campeche","chiapas","tabasco",
    "oaxaca","guerrero","veracruz","puebla","tlaxcala","morelos","df","hidalgo",
    "toluca","bajaCaliforniaS","bajaCalifornia","sonora","coahuila","tamaulipas",
    "nLeon","sinaloa","durango","nayarit","sanLuisP","queretaro","aguascalientes",
    "guanajuato","jalisco","michoacan","colima","quintanaRoo","yucatan"];
    var itaee = [5,0,-1];
      for (var i =0;i<estado.length;i++){
        if (itaee[i] < 0){
          document.getElementById(estado[i]).style.fill = "#ffae00";
          console.log("bajo");
        }else if((itaee[i]  >= 0)&&(itaee[i] <=2)){
          document.getElementById(estado[i]).style.fill = "#f05d08";
          console.log("medio");
        }else if((itaee[i] >= 3)&&(itaee[i] <=4)){
          document.getElementById(estado[i]).style.fill = "#f73b02";
          console.log("alto");
        }else if(itaee[i] >=5 ){
          document.getElementById(estado[i]).style.fill = "#e40202";
          console.log("muy alto");
        }
      }
  
    }
    

