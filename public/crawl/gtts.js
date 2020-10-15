var gtts = require('node-gtts')('vi');
const fs = require('fs');

let a = 240;
for (var i = 2140 + a; i < 2150 + a; i++) {
	let data = readData(i);

	gtts.save(`./audio/${i}.mp3`, data, function () {
		console.log('save done');
	})
}

function readData(chap) {
	let duLieu = fs.readFileSync(`chap/${chap}.txt`, 'utf-8')

	return duLieu;
}