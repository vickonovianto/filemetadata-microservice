# File Metadata Microservice

This is the boilerplate for the [File Metadata Microservice project](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice).

# Steps to run the code
1. First copy file `sample.env` and rename it into `.env`, and fill the `PORT=` with intended port where the api  will listen to, for example `PORT=8080`.
2. Open terminal, and navigate to the directory where this code is located, and run `npm install`.
3. After finished installing dependencies, run `npm start`.
4. To test the api, you can use web browser. Access the form at the root location of this code, for example: `http://localhost:8080/`, and then select the file to be uploaded.
5. To stop the api, type `Ctrl+C` in the terminal.

## API Description
This File Metadata Microservice handle API Endpoint at `/api/fileanalyse` which is fired by the form at `index.html`, after the file is uploaded, the API will give response in `JSON` about the file name, file type(MIME Type), and the file size, for example: 
```Javascript
{"name":"sample file.txt","type":"text/plain","size":264}
```
If the file is not selected, but the submit button is selected on the form, then the API will return:
```Javascript
{"error":"No File Uploaded"}
```