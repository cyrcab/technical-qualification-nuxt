import type { Product } from "../../types/product"
import { defineEventHandler } from "h3"


export default defineEventHandler((): Product[] => {
  return [
    {
      id: 1,
      name: 'Écran LED 27"',
      category: 'Electronics',
      price: 299.99,
      inStock: true,
      rating: 4.5
    },
    {
      id: 2,
      name: 'Clavier Mécanique',
      category: 'Electronics',
      price: 89.99,
      inStock: true,
      rating: 4.8
    },
    {
      id: 3,
      name: 'Souris Sans Fil',
      category: 'Electronics',
      price: 29.99,
      inStock: false,
      rating: 4.2
    },
    {
      id: 4,
      name: 'Casque Audio Bluetooth',
      category: 'Audio',
      price: 149.99,
      inStock: true,
      rating: 4.6
    },
    {
      id: 5,
      name: 'Webcam HD 1080p',
      category: 'Electronics',
      price: 79.99,
      inStock: false,
      rating: 4.0
    },
    {
      id: 6,
      name: 'Enceinte Portable',
      category: 'Audio',
      price: 59.99,
      inStock: true,
      rating: 4.3
    },
    {
      id: 7,
      name: 'Microphone USB',
      category: 'Audio',
      price: 119.99,
      inStock: true,
      rating: 4.7
    },
    {
      id: 8,
      name: 'Adaptateur USB-C',
      category: 'Accessories',
      price: 19.99,
      inStock: true,
      rating: 4.1
    }
  ]
})
