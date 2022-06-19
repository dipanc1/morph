import { Schema, model, models } from 'mongoose';

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    meta: {
        type: String,
        required: true
    },
    metadesc: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    tags: [{
        type: String,
        required: true
    }],
    image: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
}, {timestamps: true});

const Post = models.Post || model('Post', postSchema);

export default Post;
