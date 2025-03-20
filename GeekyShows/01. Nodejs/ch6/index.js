// File System -- Promise API
import { appendFile } from 'fs';
import * as fs from 'fs/promises';

// try {
// 	await fs.mkdir('F:\\Backend\\Backend-Learning\\GeekyShows\\ch6\\demo');
// 	console.log('Dirtory created ...');
// } catch (error) {
// 	console.log(error);
// }

// File System -- if path is not required to be there
// try {
// 	await fs.mkdir('F:\\Backend\\Backend-Learning\\GeekyShows\\ch6\\demo\\text', {
// 		recursive: true,
// 	});
// 	console.log('Dirtory created ...');
// } catch (error) {
// 	console.log(error);
// }

// File System -- Read content of directory
// try {
// 	const files = await fs.readdir(
// 		'F:\\Backend\\Backend-Learning\\GeekyShows\\ch6\\demo'
// 	);
// 	for (const file of files) {
// 		console.log(file);
// 	}
// } catch (error) {
// 	console.log(error);
// }

// File System -- Remove Dirctory ( Dirctory should be empty)
// try {
// 	await fs.rmdir('F:\\Backend\\Backend-Learning\\GeekyShows\\ch6\\demo\\text');
// 	console.log('Dirctory removed .....');
// } catch (error) {
// 	console.log(error);
// }

// Create and Write File

// Create

// try {
// 	await fs.writeFile('readme.txt', 'Hello Node js');
// } catch (error) {
// 	console.log(error);
// }

// Read

// try {
// 	console.log(await fs.readFile('readme.txt'));
// } catch (error) {
// 	console.log(error);
// }

// try {
// 	console.log(await fs.readFile('readme.txt', 'utf-8'));
// } catch (error) {
// 	console.log(error);
// }

// appendFile

try {
	await fs.appendFile('readme.txt', 'Hello Dears');
} catch (error) {
	console.log(error);
}
