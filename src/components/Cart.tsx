import React, { useState } from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { getDiscountedPrice } from "../utils/data";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } =
    useCart();
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    comment: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Имитация отправки заказа
    setTimeout(() => {
      setOrderSuccess(true);
      clearCart();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Корзина</h2>
          <button
            className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-300"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart items or success message */}
        {orderSuccess ? (
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Заказ оформлен!
            </h3>
            <p className="text-gray-600 mb-6">
              Спасибо за заказ! Мы свяжемся с вами в ближайшее время для
              подтверждения.
            </p>
            <button
              className="px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
              onClick={() => {
                setOrderSuccess(false);
                setIsOrdering(false);
                onClose();
              }}
            >
              Продолжить покупки
            </button>
          </div>
        ) : isOrdering ? (
          <div className="flex-1 overflow-y-auto p-4">
            <form onSubmit={handleSubmitOrder}>
              <h3 className="text-lg font-semibold mb-4">Оформление заказа</h3>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Ваше имя*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Иван Иванов"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Телефон*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="+996 (500) 90-90-90"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Адрес доставки*
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="ул. Примерная, д. 1, кв. 1"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Комментарий
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={form.comment}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Комментарий к заказу"
                ></textarea>
              </div>

              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Сумма заказа:</span>
                  <span className="font-semibold">{totalPrice} сом</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Доставка:</span>
                  <span className="font-semibold">0 сом</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Итого:</span>
                  <span>{totalPrice} сом</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex-1 py-3 text-gray-700 border border-gray-300 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => setIsOrdering(false)}
                >
                  Назад
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
                >
                  Оформить заказ
                </button>
              </div>
            </form>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Корзина пуста
            </h3>
            <p className="text-gray-600 mb-6">
              Добавьте что-нибудь из меню, чтобы сделать заказ
            </p>
            <button
              className="px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
              onClick={onClose}
            >
              Вернуться к меню
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-2">
            {cartItems.map((cartItem) => (
              <div
                key={cartItem.item.id}
                className="flex items-center p-3 border-b last:border-b-0"
              >
                <img
                  src={cartItem.item.imageUrl}
                  alt={cartItem.item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />

                <div className="ml-3 flex-1">
                  <h4 className="font-semibold text-gray-800">
                    {cartItem.item.name}
                  </h4>
                  <div className="text-sm text-gray-500">
                    {cartItem.item.weight} г
                  </div>
                  <div className="font-semibold text-gray-800 mt-1">
                    {cartItem.item.discount
                      ? getDiscountedPrice(cartItem.item)
                      : cartItem.item.price}{" "}
                    сом
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="p-1 text-gray-500 hover:text-gray-700 transition-colors duration-300"
                    onClick={() =>
                      updateQuantity(cartItem.item.id, cartItem.quantity - 1)
                    }
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  <span className="w-8 text-center font-medium">
                    {cartItem.quantity}
                  </span>

                  <button
                    className="p-1 text-gray-500 hover:text-gray-700 transition-colors duration-300"
                    onClick={() =>
                      updateQuantity(cartItem.item.id, cartItem.quantity + 1)
                    }
                  >
                    <Plus className="w-4 h-4" />
                  </button>

                  <button
                    className="ml-2 p-1 text-gray-400 hover:text-red-600 transition-colors duration-300"
                    onClick={() => removeFromCart(cartItem.item.id)}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer with total and checkout button */}
        {!isOrdering && !orderSuccess && cartItems.length > 0 && (
          <div className="p-4 border-t mt-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-600">
                Всего товаров:{" "}
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </div>
              <button
                className="text-sm text-red-600 hover:text-red-700 font-medium"
                onClick={clearCart}
              >
                Очистить корзину
              </button>
            </div>

            <div className="flex justify-between items-center font-bold text-lg mb-4">
              <span>Итого:</span>
              <span>{totalPrice} сом</span>
            </div>

            <button
              className="w-full py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
              onClick={() => setIsOrdering(true)}
            >
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Missing component import
const Check = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default Cart;
