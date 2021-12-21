// "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
//                     "url"

import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema(
  {
    _id: Number,
    styleId: Number,
    description: String,
    url: String,
    thumbnail_url: String,
  },
  { _id: false }
);

const Image = mongoose.model('Image', imageSchema);

export default Image;
