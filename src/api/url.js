const urls = {
    testUrl: '/',
    access_token: '/oauth/2.0/token?' +
        'grant_type=client_credentials' +
        '&client_id=t7X9W7nhlOEA7w5Uv6fD1xYn' +
        '&client_secret=bzqfEGcXT0jQGZC9nlrD9HLeXc6jXMxF&',   //获取access_token
    ecognizerUrl: '/rest/2.0/solution/v1/iocr/recognise/finance?' +
        'access_token='    //iOCR财会票据识别
}

export default urls
