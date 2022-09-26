import express, { Response, Request } from 'express'
import util from '../ImageProcess/imageaction'
import fs from 'fs'

const routes = express.Router()

routes.get('/', async (req: Request, res: Response) => {
	// Collect Inputh through query
	const filename = req.query.filename
	const width = Number(req.query.width)
	const height = Number(req.query.height)

	if (fs.existsSync('Images/' + filename + '.jpg')) {
		//Check the image filename exists under Image Directory or not
		try {
			const thumbnail = await util(filename as string, width, height)
			res.status(200).end(thumbnail)
		} catch (err) {
			console.error(err)
			res.status(400).end('Error')
		}
	} else {
		res.status(400).end('Image FileName doesnt exist , Width is not number or height is not number')
	}
})

export default routes
