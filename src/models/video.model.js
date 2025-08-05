import mongoose , {Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const videosSchema= new Schema(
    {
        videoFile:{
            type:String,
            required:true,

        },
        thumbnail:{
            type:String,
            required:true,

        },
        title:{
            type:String,
            required:true,

        },
        description:{
            type:String,
            required:true,

        },
        duration:{
            type:Number,//cloudnary se aayega 
            required:true,

        },
        view:{
            type:Number,
            default:0,
            
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }


    },
    {timeStamps:true}
)

videosSchema.plugin(mongooseAggregatePaginate)


export const Video=mongoose.model("Video", videosSchema)