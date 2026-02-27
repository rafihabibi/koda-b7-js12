function lowerCaseManual(teksKecil){
  let hurufKecil = "";
  for(let i = 0;i < teksKecil.length;i++) {
    let kodeAngka =teksKecil.charCodeAt(i);
    
    if (kodeAngka >= 65 && kodeAngka <= 90) {
      hurufKecil += String.fromCharCode(kodeAngka + 32);
    } else {
      hurufKecil += teksKecil[i];
    } 
  }
  return hurufKecil;
}