import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../../models/User";
import dbConnect from "../../utils/connectMongo";
import cookie from "cookie";

const KEY = process.env.JWT_KEY;

const handler = async (req, res) => {
    await dbConnect();

    // cors enable
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === "POST") {
        const { username, password } = req.body;
        try {

            const user = await User.findOne({ username });

            if (!user) {
                return res.status(400).json({
                    message: "User not found"
                });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({
                    message: "Invalid credentials"
                });
            }

            const token = jwt.sign({ id: user._id }, KEY);

            res.setHeader("Set-Cookie", cookie.serialize("token", token, {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7,
                sameSite: "strict",
            }));

            res.json({
                message: "Successfully logged in",
                token,
                user: {
                    id: user._id,
                    username: user.username,
                }
            });

        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
}

export default handler;