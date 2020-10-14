var gtts = require('node-gtts')('vi');
const fs = require('fs');

for (var i = 2128; i < 2257; i++) {
	let data = readData(i);

	gtts.save(`./audio/${i}.mp3`, data, function() {
	  console.log('save done');
	})
}

function readData(chap) {
	let duLieu = fs.readFileSync(`chap/${chap}.txt`, 'utf-8')

	return duLieu;
}
