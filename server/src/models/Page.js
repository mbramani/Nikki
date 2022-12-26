import { Schema, model, Types } from 'mongoose'

const PageSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    data: {
      type: String,
    },
  },
  { timestamps: true }
)

export default model('Page', PageSchema)
