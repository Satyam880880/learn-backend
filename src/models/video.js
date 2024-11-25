import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const userSchema = new Schema(
    {
       
  VideoFile :{
    type: String,
    require : true
  },
  thumbnail: {
    type: String,
    required : true
  },
  tittle: {
    type: String,
    required : true
  },
  description: {
    type: String,
    required : true
  },
  duretion: {
    type: Number,
    required : true
  },
  view: {
    type: Number,
    default : 0
  },
  isPublished: {
    type: Boolean,
    required : true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
  
},
{
    timestamps : true
}
)

videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model("Video", videoSchema)
