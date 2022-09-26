import { promises as fsPromises } from 'fs'
import sharp from 'sharp'
import fs from 'fs'

async function asyncCall(filename: string, width: number, height: number) {
	const thumbnailName = 'Images/thumbnails/' + `${filename}_${width}_${height}.jpg`
	if (!fs.existsSync('Images/thumbnails')) {
		//Check if thumbnail folder is created
		await fs.promises.mkdir('Images/thumbnails', { recursive: true })
	}

	//Caching Image if it exist, return thumb nail right away without resize new immage

	if (fs.existsSync(thumbnailName)) {
		const thumbnailImage = await fsPromises.readFile(thumbnailName)
		console.log('Found a cached image')
		return thumbnailImage
	}

	//Resize Image
	const OriginalImage = await fsPromises.readFile('Images/' + `${filename}.jpg`)
	// Assigning Nameof    Thumbnail
	await sharp(OriginalImage).resize(Number(width), Number(height)).toFile(thumbnailName)
	const thumbnailImage = await fsPromises.readFile(thumbnailName)
	return thumbnailImage
}

export default asyncCall
