// const puppeteer = require('puppeteer');
// const fs = require('fs');

// (async () => {
// 	const browser = await puppeteer.launch({ headless: true });
// 	const page = await browser.newPage();

// 	let i = 2384
// 	await page.goto('http://truyentranhaudio.online/manga-slug/vldp-audio/chuong-'+ i);
// 	const chap = await page.evaluate(()=>{
// 		let text = document.querySelectorAll('.text-left>table>tbody>tr>td>span');

// 		let chapter = '';

// 		text.forEach((e)=> {
// 			chapter += e.innerHTML + ' ';	
// 		})

// 		return chapter;
// 	})
		
	

// 	let a = chap.replace('<strong>','').replace('</strong>','');

// 	fs.writeFile(`chap/${i}.txt`, a , function (err) {
// 		if (err) throw err;
// 		console.log('Saved!');
// 	});

//     await browser.close();
// })();
let a = 2128
for (let i = 0; i < 256; i++) {
	console.log(`<div class="col-2"><a href="#" class="btn-primary">${i+a}</a></div>`)
}