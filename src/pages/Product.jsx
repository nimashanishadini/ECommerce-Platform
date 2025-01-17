import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Check, AlertCircle } from 'lucide-react';

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Sample product data
  const product = {
    name: "Professional Developer Laptop Pro",
    price: 1499.99,
    rating: 4.8,
    reviews: 128,
    stock: 10,
    description: "High-performance laptop perfect for development and professional work. Features the latest processor, ample RAM, and fast SSD storage.",
    specifications: [
      { name: "Processor", value: "Intel Core i7-12700H" },
      { name: "RAM", value: "32GB DDR4" },
      { name: "Storage", value: "1TB NVMe SSD" },
      { name: "Display", value: "15.6\" 4K OLED" },
      { name: "Graphics", value: "NVIDIA RTX 3060 6GB" }
    ],
    images: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400"
    ],
    features: [
      "High-performance processor",
      "Professional-grade graphics",
      "Ultra-fast storage",
      "Premium build quality",
      "Extended battery life"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-gray-500">
          <a href="/" className="hover:text-gray-900">Home</a>
          <span className="mx-2">/</span>
          <a href="/products" className="hover:text-gray-900">Products</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Product section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Images */}
          <div className="flex flex-col">
            <div className="mb-4 aspect-w-3 aspect-h-2">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-center object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-center object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product details */}
          <div className="mt-10 lg:mt-0 lg:ml-8">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            
            {/* Price and rating */}
            <div className="mt-4">
              <p className="text-3xl text-gray-900">${product.price}</p>
              <div className="mt-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Stock status */}
            <div className="mt-4 flex items-center">
              {product.stock > 0 ? (
                <>
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-2 text-sm text-green-500">
                    In stock ({product.stock} available)
                  </span>
                </>
              ) : (
                <>
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <span className="ml-2 text-sm text-red-500">Out of stock</span>
                </>
              )}
            </div>

            {/* Add to cart section */}
            <div className="mt-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 border-r hover:bg-gray-50"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 border-l hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
                <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
                <button className="p-3 border rounded-md hover:bg-gray-50">
                  <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Description</h2>
              <p className="mt-4 text-gray-600">{product.description}</p>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Key Features</h2>
              <ul className="mt-4 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Specifications</h2>
              <div className="mt-4">
                {product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex py-3 ${
                      index !== 0 ? 'border-t border-gray-200' : ''
                    }`}
                  >
                    <span className="font-medium text-gray-900 w-1/3">{spec.name}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;