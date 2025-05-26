import React from "react";
import { Plus } from "lucide-react";
import { SushiItem } from "../types";
import { getDiscountedPrice } from "../utils/data";

interface SushiCardProps {
  item: SushiItem;
  onAddToCart: (item: SushiItem) => void;
  onItemClick: (item: SushiItem) => void;
}

const SushiCard: React.FC<SushiCardProps> = ({
  item,
  onAddToCart,
  onItemClick,
}) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(item);
  };

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
      onClick={() => onItemClick(item)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {item.isNew && (
            <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
              Новинка
            </span>
          )}
          {item.isVegetarian && (
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              Вегетарианское
            </span>
          )}
          {item.isSpicy && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              Острое
            </span>
          )}
          {item.discount && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
              Скидка {item.discount}%
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 text-gray-800">
          {item.name}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2 h-10">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            {item.discount ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-red-600">
                  {getDiscountedPrice(item)} сом
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {item.price} сом
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-800">
                {item.price} сом
              </span>
            )}
            <div className="text-gray-500 text-sm">{item.weight} г</div>
          </div>

          <button
            className="bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors duration-300"
            onClick={handleAddToCart}
            aria-label="Добавить в корзину"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SushiCard;
