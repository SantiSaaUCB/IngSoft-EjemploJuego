function calcular_puntaje(puntaje_1, puntaje_2) {
     const puntuaciones = ["0", "15", "30", "40"];
     
     let marcador_1 = puntuaciones[puntaje_1];
     let marcador_2 = puntuaciones[puntaje_2];
     if(puntaje_1 == 0 && puntaje_2 == 0){
          marcador_1 = "Love";
          marcador_2 = "Love";
     }
     return `${marcador_1} - ${marcador_2}`;
 }
 
 export default calcular_puntaje;
 