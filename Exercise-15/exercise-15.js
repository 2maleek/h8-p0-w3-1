function groupAnimals(animals) {
  
    var hasil = [];
    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    for(var i = 0 ; i < abjad.length ; i ++){
        var sementara = [];
        for(var j = 0 ; j < animals.length ; j ++){
            if(abjad[i] === animals[j][0]){
                sementara.push(animals[j]);
            }
        }
        if(sementara.length > 0){
            hasil.push(sementara);
        }
    }
    return hasil;

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]