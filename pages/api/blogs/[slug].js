import Post from "../../../models/Post";
import dbConnect from "../../../utils/connectMongo";

const handler = async(req, res) => {
    const { method, query: { slug } } = req;

    await dbConnect();

    //enable cors
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    if (method === 'GET') {
        try {
            const post = await Post.findOne({ slug });
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    if (method === 'PUT') {
        try {
            const post = await Post.findOneAndUpdate({ slug }, req.body);
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    if (method === 'DELETE') {
        try {
            const post = await Post.findOneAndDelete({ slug });
            res.status(200).json({ message: 'Post deleted' });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default handler;