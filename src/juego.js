function calcular_puntaje(puntaje_1, puntaje_2) {
     let marcador;
 
     switch (`${puntaje_1}-${puntaje_2}`) {
         case "1-0":
             marcador = "15 - 0";
             break;
         case "2-0":
             marcador = "30 - 0";
             break;
         case "3-0":
             marcador = "40 - 0";
             break;
         default:
             marcador = "Love - Love";
     }
 
     return marcador;
 }
 
 export default calcular_puntaje; 