import Post from "../../../models/Post";
import dbConnect from "../../../utils/connectMongo";

const handler = async(req, res) => {
    const { method, query: { id } } = req;

    await dbConnect();

    if (method === 'GET') {
        try {
            const blog = await Post.findById(id);
            res.status(200).json(blog);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    if (method === 'PUT') {
        try {
            const blog = await Post.findByIdAndUpdate(id, req.body, { new: true });
            res.status(201).json(blog);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    if (method === 'DELETE') {
        try {
            const blog = await Post.findByIdAndDelete(id);
            res.status(200).json("The post is Deleted!");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default handler;