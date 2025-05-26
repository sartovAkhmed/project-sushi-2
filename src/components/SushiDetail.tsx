import React from "react";
import { X, ShoppingCart, Check } from "lucide-react";
import { SushiItem } from "../types";
import { getDiscountedPrice } from "../utils/data";
import { useCart } from "../context/CartContext";

interface SushiDetailProps {
  item: SushiItem;
  onClose: () => void;
}

const SushiDetail: React.FC<SushiDetailProps> = ({ item, onClose }) => {
  const { addToCart, cartItems } = useCart();
  const isInCart = cartItems.some((cartItem) => cartItem.item.id === item.id);

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="md:w-1/2 h-64 md:h-auto relative">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover object-center"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {item.isNew && (
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Новинка
              </span>
            )}
            {item.isVegetarian && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Вегетарианское
              </span>
            )}
            {item.isSpicy && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Острое
              </span>
            )}
          </div>

          {/* Close button */}
          <button
            className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 p-2 rounded-full transition-colors duration-300"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h2>

          {/* Price */}
          <div className="mb-4">
            {item.discount ? (
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-red-600">
                  {getDiscountedPrice(item)} сом
                </span>
                <span className="text-lg text-gray-500 line-through">
                  {item.price} сом
                </span>
                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm font-medium">
                  Скидка {item.discount}%
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-gray-800">
                {item.price} сом
              </span>
            )}
            <div className="text-gray-500">{item.weight} г</div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Описание</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>

          {/* Ingredients */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Состав</h3>
            <ul className="grid grid-cols-2 gap-2">
              {item.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Add to cart button */}
          <button
            className={`w-full py-3 px-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
              isInCart
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-red-600 hover:bg-red-700 text-white"
            }`}
            onClick={handleAddToCart}
          >
            {isInCart ? (
              <>
                <Check className="w-5 h-5" />В корзине
              </>
            ) : (
              <>
                <ShoppingCart className="w-5 h-5" />
                Добавить в корзину
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SushiDetail;
