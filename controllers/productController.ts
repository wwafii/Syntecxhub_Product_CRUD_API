import { Request, Response } from 'express';
import Product from '../models/product';

// Create product
export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Get list of products with filter and pagination
export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { category, minPrice, maxPrice, page = '1', limit = '10' } = req.query;

    const filter: any = {};
    if (category) filter.category = category;
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const pageNumber = parseInt(page as string, 10) || 1;
    const limitNumber = parseInt(limit as string, 10) || 10;

    const products = await Product.find(filter)
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);

    const total = await Product.countDocuments(filter);

    res.json({ total, page: pageNumber, limit: limitNumber, products });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Get single product by ID
export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Update product by ID
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Delete product by ID
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
