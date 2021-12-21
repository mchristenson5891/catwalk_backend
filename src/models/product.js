import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    _id: Number,
    name: String,
    description: String,
    category: String,
    default_price: String,
    features: [{ feature: String, value: String }],
  },
  { _id: false }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
