import Post from "../../../models/Post";
import dbConnect from "../../../utils/connectMongo";

const handler = async(req, res) => {
    const { method } = req;

    await dbConnect();

    if (method === 'GET') {
        try {
            const blog = await Post.find();
            res.status(200).json(blog);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === 'POST') {
        try {
            const blog = await Post.create(req.body);
            res.status(201).json(blog);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

export default handler;