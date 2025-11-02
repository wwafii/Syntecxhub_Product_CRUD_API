import { Schema, model } from 'mongoose';

interface IProduct {
  name: string;
  price: number;
  description?: string;
  category: string;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String, required: true }
});

export default model<IProduct>('Product', productSchema);
