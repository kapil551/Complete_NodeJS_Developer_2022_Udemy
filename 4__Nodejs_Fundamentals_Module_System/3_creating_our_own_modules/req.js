// This is the req module


// This encrypt function encrypts the data
function encrypt(data) {

    return 'encrypted data ####@@@@$$%%%';
}

// This send function sends encrpted data to the url
function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}

module.exports = {
    send,
}