// id,productId,name,sale_price,original_price,default_style

import mongoose from 'mongoose';

const stylesSchema = new mongoose.Schema(
  {
    id: Number,
    productId: Number,
    name: String,
    sale_price: Number,
    original_price: Number,
    default_price: String,
    default_style: Number,
  },
  { _id: false }
);

const Styles = mongoose.model('Styles', stylesSchema);

export default Styles;
