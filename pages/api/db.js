import connectMongo from "../../utils/connectMongo";
import User from "../../models/User";


export default async function db(req, res) {
    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');
    
        console.log('CREATING DOCUMENT');
        const user = await User.create(req.body);
        console.log('CREATED DOCUMENT');
    
        res.json({ user });
      } catch (error) {
        console.log(error);
        res.json({ error });
      }
}