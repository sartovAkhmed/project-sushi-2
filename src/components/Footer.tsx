import React from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              SUSHI<span className="text-red-600">КАТ</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Доставка традиционных японских блюд, приготовленных с соблюдением
              всех классических рецептов.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">+996 (500) 90-90-90</p>
                  <p className="text-gray-400 text-sm">
                    Бесплатно по Кыргызыстану
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-red-500 flex-shrink-0" />
                <a
                  href="mailto:info@sushikat.ru"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  info@sushikat.ru
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">г. Бишкек, Улица Исакеева, 34/1</p>
                  <p className="text-gray-400 text-sm">
                    10:00 - 23:00, без выходных
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  О компании
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Акции и скидки
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Вакансии
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          {/* Delivery Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Доставка</h3>
            <div className="flex items-start mb-3">
              <Clock className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white">Время доставки</p>
                <p className="text-gray-400">от 30 до 60 минут</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Бесплатная доставка при заказе от 1000 сом
            </p>
            <div className="bg-red-600 text-white p-3 rounded-lg text-center font-semibold hover:bg-red-700 transition-colors duration-300 cursor-pointer">
              Заказать доставку
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© 2025 SUSHIКАТ — Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
