// 1 - Pipoca – 10 segundos ;
// 2 - Macarrão – 8 segundos ;
// 3 - Carne – 15 segundos ;
// 4 - Feijão – 12 segundos ;
// 5 - Brigadeiro – 8 segundos ;

function microondas(prato, tempo) {
    let tempoPadrao;
    switch (prato) {
      case 1:
        tempoPadrao = 10;
        break;
      case 2:
        tempoPadrao = 8;
        break;
      case 3:
        tempoPadrao = 15;
        break;
      case 4:
        tempoPadrao = 12;
        break;
      case 5:
        tempoPadrao = 8;
        break;
      default:
        console.log("Prato inexistente.");
    }
  
    if(tempo >= 2*tempoPadrao && tempo < 3*tempoPadrao){
      console.log("A comida queimou!");
    } else if(tempo < tempoPadrao ){
      console.log("Tempo insuficiente.");
    } else if (tempo >= 3*tempoPadrao){
      console.log("KABUUMM!!");
    }
  
    console.log("Bom Apetite!");
}
