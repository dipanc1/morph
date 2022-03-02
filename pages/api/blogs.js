import * as fs from 'fs';

export default function handler(req, res) {

    fs.readdir('blogdata', (err, data) => {
        if (err) throw err;
        console.log(data);
        res.status(200).json(data)
    });

}