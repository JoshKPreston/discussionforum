import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: { type: String, required: true },
    question: { type: String, required: true },
    upVote: { type: Number, required: true, default: 0 },
    downVote: { type: Number, required: true, default: 0 },
    imgUrl: { type: String, required: false },
    creatorId: { type: String, required: true },
    // userName: { type: String, required: true, default: 'unknown' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Post.virtual("creator", {
  localField: "creatorId",
  ref: "Profile",
  foreignField: "_id",
  justOne: true
});

// Post.virtual("userName", {
//   localField: "userName",
//   ref: "Profile",
//   foreignField: "name",
//   justOne: true
// });

// Post.virtual("imgUrl", {
//   localField: "imgUrl",
//   ref: "Profile",
//   foreignField: "picture",
//   justOne: true
// });


export default Post;