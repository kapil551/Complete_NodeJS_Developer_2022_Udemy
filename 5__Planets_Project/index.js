const { parse } = require('csv-parse');
const fs = require('fs');

// https://nodejs.org/en/knowledge/advanced/streams/how-to-use-fs-create-read-stream/
// https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fscreatereadstreampath-options

/*
    What exactly are we doing?

    1. We have our kepler_data.csv file, and we read that file as a stream by calling the reateReadStream function and passing in the path to our CSV file.

    2. This stream can then be piped to connect it to another stream.

    3. Now this another readable stream, is the result that we get from calling the parse() function from our csv_parse library, and the result that we're hoping for is a series of processed rows that we can read easily to explore the data in our CSV file, which might take the form of a array of JavaScript objects.

*/

const results = [];

// open the file as a readable stream
fs.createReadStream('kepler_data.csv')
    .on('data', (data) => {

        console.log(data); // this data is raw buffers of bytes, which needs to be parsed using parse() function of csv_parser to convert in into a readable stream.

    })
    .pipe(parse({
        comment: '#',
        columns: true
    }))
    .on('data', (data) => {

        results.push(data); // now this data is a parsed data, in the form of javaScript objects

    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {

        console.log(results);
        console.log("Processing of csv file is completed 💡💡💡💡💡");
    });