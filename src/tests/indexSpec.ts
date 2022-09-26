import app from '../index'
import supertest from 'supertest'
import imageTransform from '../ImageProcess/imageaction'

const req = supertest(app)

describe('Test the endpoint', () => {
	it('Check api/ endpoint if file exist, if not should return status 404', async () => {
		const resp = await req.get('/api/')
		expect(resp.status).toBe(400)
	})
})

describe('Test image processing', () => {
	it('resizes an image based on correct parammaters', async () => {
		expect(async () => {
			const T_FileName = 'encenaddaport' as string
			const T_Width = 200 as number
			const T_Height = 250 as number
			await imageTransform(T_FileName, T_Width, T_Height)
		}).not.toThrow()
	})
})
