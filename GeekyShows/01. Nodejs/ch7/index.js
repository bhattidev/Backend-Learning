// File System-- Callback API

import { error } from 'console';
import * as fs from 'fs/promises';

// Creating Dirctory Path should be there
// fs.mkdir(
// 	'F:\\Backend\\Backend-Learning\\GeekyShows\\ch7\\test\\demo',
// 	{ recursive: true },
// 	(error) => {
// 		if (error) throw error;
// 		console.log('Dirtory Created .....');
// 	}
// );

fs.readdir('F:\\Backend\\Backend-Learning\\GeekyShows\\ch7', (error, files) => {
	if (error) throw error;
	for (const file of files) {
		console.log(file);
	}
});
