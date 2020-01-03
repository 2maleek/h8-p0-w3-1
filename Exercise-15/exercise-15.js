function groupAnimals(animals) {
  
    var sort = animals;
    for(var i = 0 ; i < sort.length ; i ++){
        for(var j = 0 ; j < sort.length ; j ++){
            if(sort[j] > sort[j+1]){
                var tmp = sort[j];
                sort[j] = sort[j+1];
                sort[j+1] = tmp;
            }
        }
    }

    var hasil = [];
    var tampungHuruf = [];
    var sementara = [];
    var huruf = sort[0][0];
    var check = true;
    for(var i = 0 ; i < sort.length ; i ++){
        for(var j = 0 ; j < tampungHuruf.length ; j ++){
            if(sort[i][0] === tampungHuruf[j]){
                check = false;
            }
        }
        if(check === true){
            huruf = sort[i][0];
            tampungHuruf.push(huruf);
            for(var k = 0 ; k < sort.length ; k ++){
                if(sort[k][0] === huruf){
                    sementara.push(sort[k]);
                }
            }
            
            hasil.push(sementara);
        }
        
        sementara = [];
        check = true;
    }

    return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]