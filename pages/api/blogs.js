import * as fs from 'fs';

export default async function handler(req, res) {
    console.log(req.query.count);
    let data = await fs.promises.readdir(`blogdata`);
    data = data.slice(0, req.query.count);
    let myFile;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        // console.log(item)
        myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
            // console.log(myFile);
        allBlogs.push(JSON.parse(myFile));
    }
    res.status(200).json(allBlogs);
}


// fs.promises.readdir('blogdata', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     let allBlogs = []; 
//     data.forEach(file => {
//         fs.readFile(`blogdata/${file}`, 'utf8', (err, data) => {
//             allBlogs = allBlogs.push(data);
//             // if (err) throw err;
//             // console.log(file);
//             // res.status(200).json(data)
//         });
//     });
//     res.status(200).json(allBlogs)
// });