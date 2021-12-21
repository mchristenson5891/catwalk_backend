import mongoose from 'mongoose';

const featureSchema = new mongoose.Schema(
  {
    // _id,productId,feature, value
    _id: Number,
    productId: Number,
    feature: String,
    value: String,
  },
  // { timestamps: true }
  { _id: false }
);

const Feature = mongoose.model('Feature', featureSchema);

export default Feature;

// id, name, slogan, description, category, default_price;
