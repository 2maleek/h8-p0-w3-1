function hitungJumlahKata(kalimat) {
  var jumlah = 1;
  for(var i = 0 ; i < kalimat.length ; i ++){
    if( kalimat[i] === ' '){
      jumlah ++;
    }
    else if(kalimat === ''){
      jumlah = 0;
    }
  }
  return jumlah;


}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5