import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-black to-transparent">
      <div className="absolute inset-0 z-0">
        <img
          src="https://kartinki.pics/uploads/posts/2021-07/thumbs/1625260217_34-kartinkin-com-p-fon-dlya-menyu-sushi-krasivie-foni-48.jpg"
          alt="Суши фон"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Настоящие японские роллы и суши
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Погрузитесь в атмосферу Японии с нашими блюдами, приготовленными по
            традиционным рецептам из свежайших ингредиентов
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition-colors duration-300 group"
            >
              Смотреть меню
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-300 text-center"
            >
              Акции и скидки
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a
          href="#menu"
          className="animate-bounce bg-white/20 backdrop-blur-sm p-2 rounded-full"
        >
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
            className="text-white"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
