const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 定义文件的路径
const RECORD_FILE = path.join(__dirname, 'record.json');

// 定义server的默认端口
app.set('port', (process.env.PORT || 4000));

// 定义项目的main entry
app.use('/', express.static(path.join(__dirname, 'public')));

// 使用express中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/record', function(req, res) {
    fs.readFile(RECORD_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.setHeader('Cache-Control', 'no-cache');
        res.json(JSON.parse(data));
    });
});

app.post('/api/record', function(req, res) {
    fs.readFile(RECORD_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        var taskRecords = JSON.parse(data);
        // NOTE: In a real implementation, we would likely rely on a database or
        // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
        // treat Date.now() as unique-enough for our purposes.
        var newTaskRecord = {
            id: Date.now(),
            submitter: req.body.contributor,
            amount: req.body.amount,
            comment: req.body.comment
        };

        // TODO
        // 写一个map, 把post进来的所有内容进行整理，写到newTaskRecord里。


        donations.push(newDonation);
        fs.writeFile(DONATIONS_FILE, JSON.stringify(donations, null, 4), function(err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.setHeader('Cache-Control', 'no-cache');
            res.json(donations);
        });
    });
});


app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

function helloLint() {

}