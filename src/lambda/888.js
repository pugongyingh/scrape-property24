const axios = require('axios');
const cheerio = require('cheerio');

exports.handler = function (event, context, callback) {

    const url = 'http://202.118.167.76/ksap/all.asp';
    const query = {
        url,
        method: 'POST',
        data: `keyword=${stuid}&ok=%B2%E9%D5%D2`,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'text/html'
    };

    let result;

    result = await axios.request(query);
    
     send(result.data);
    


    // get data from url
    // then send it


    // send response
    // note data is passed in response body
    // note also headers 
    const send = data => {
        callback(null, {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            body: data
        });
    }

    // can restrict HTTP method here
    //if (event.httpMethod === 'GET') {        
    
    //}

} // exports.handler
