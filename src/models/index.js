import mongoose from 'mongoose';

import Product from './product';
import Feature from './feature';
import Styles from './styles';
import Image from './image';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Product, Feature, Styles, Image };

export { connectDb };

export default models;
