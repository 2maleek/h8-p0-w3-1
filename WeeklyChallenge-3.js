/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * Step adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan.
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 * Output wajib berurutan mulai dari copper, silver, gold, lalu terakhir diamond.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf
 *
 */

 /**
  * 
  * read mine
  * read langkah = steps
  * read tampung = [[0 , 'cooper'],[0 , 'silver'],[0 , 'gold'],[0 , 'diamond']]
  * FOR LOOP i = 0 , i < mine.length , i ++
  * 	FOR LOOP j = 0 , j < mine[i].length , j ++
  * 		IF langkah === 0 then
  * 			break
  * 		END IF
  * 		IF mine[i][j] === 'c' then
  * 			tampung[0][0]++
  * 			langkah --
  * 		END IF
  * 		ELSE IF mine[i][j] === 's' then
  * 			tampung[1][0]++
  * 			langkah --
  * 		END IF
  *  		ELSE IF mine[i][j] === 'g' then
  * 			tampung[2][0]++
  * 			langkah --
  * 		END IF
  *   		ELSE IF mine[i][j] === 'd' then
  * 			tampung[3][0]++
  * 			langkah --
  * 		END IF
  * 		ELSE 
  * 			langkah --
  * 		END IF
  * 	END FOR
  * END FOR
  * //eleminasi 0
  * read hasil = []
  * FOR LOOP i = 0 , i < tampung.length , i ++
  * 	IF tampung[i][0] !== 0 then
  * 		hasil.push(tampung[i])
  * 	END IF
  * END FOR
  * RETURN hasil
  * 
  */
function mineCraft(mine, steps) {
	var tampung = [[0 , 'cooper'],[0 , 'silver'],[0 , 'gold'],[0 , 'diamond']];
	var langkah = steps;
	for(var i = 0 ; i < mine.length ; i ++){
		for(var j = 0 ; j < mine[i].length ; j ++){
			if(langkah === 0){
				break;
			}
			if(mine[i][j] === 'c'){
				tampung[0][0]++;
				langkah --;
			}
			else if(mine[i][j] === 's'){
				tampung[1][0]++;
				langkah --;
			}
			else if(mine[i][j] === 'g'){
				tampung[2][0]++;
				langkah --;
			}
			else if(mine[i][j] === 'd'){
				tampung[3][0]++;
				langkah --;
			}
			else{
				langkah--;
			}
		}
	}

	//eleminasi 0
	var hasil = [];
	for(var i = 0 ; i < tampung.length ; i ++){
		if(tampung[i][0] !== 0){
			hasil.push(tampung[i]);
		}
	}
	return hasil;
}
var mine1 = [
	['#', 'h', 's', '#', '#', '#', 'g'],
	['u', '#', 'c', '#', 'd', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineCraft(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]
var mine2 = [
	['#', '#', '#', '#', '#', 'w', '#'],
	['r', '#', 'c', '#', 'd', '#', '#'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineCraft(mine2, 20));
// [[2, copper], [1, diamond]]
var mine3 = [
	['d', 'c', '#', 's', '#', 'w', '#'],
	['r', 'b', 'c', '#', '#', '#', 'g'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineCraft(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]