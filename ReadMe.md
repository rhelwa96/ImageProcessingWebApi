## Image processing API
1) Resize any jpg image by adding its filename , width and height in  parameters of the URL as query. e.g http://localhost:3000/api/?filename=encenadaport&width=200&height=100
2) Thumbnail image will be then as original final name with width and height.

### To run this project
- Run ```npm install```

### Run developer server
- Run ```npm run start```
- The project includes nodemon so any change made to a file and saved will restart the server

### Build the project
- Run ```npm run build```
-http://localhost:3000/api/?filename=encenadaport&width=200&height=100
- Resized image will appear in the browser, and will save under ```Images/thumbnails```

### Testing used Jasmine
- Run ```npm run test``` to run the tests  over ```indexSpec``` file

### to Run Prettier/ ESLint
- Run ```npm run format``` 

