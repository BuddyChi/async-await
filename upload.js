const Fs = require('fs');
const Needle = require('needle');
const API_UPLOAD     = 'http://10.152.31.111:5080/subwaycitytest/subwayUpload/json,pack';
const BufferObj = Fs.readFileSync('/Users/buddy/project/ci/.tmp/b18178e5c83ef2f9e4ea9511a03e8035_51857519/zip/wuhan.zip');
const Data = {
    zip_file: {
        buffer: BufferObj,
        filename: 'wuhan.zip',
        content_type: 'application/json;charset=GBK'
    }
};

Needle.post(API_UPLOAD, Data, {
    multipart: true
}, function (err, resp) {
    console.log(resp);
    console.log(err);
})