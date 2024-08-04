import React, { useEffect, useRef, useState, createContext, useImperativeHandle, forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = forwardRef(({ items, initialScroll = 0 }, ref) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useImperativeHandle(ref, () => ({
    scrollLeft: () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth / 2, behavior: "smooth" });
      }
    },
    scrollRight: () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth / 2, behavior: "smooth" });
      }
    },
  }));

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth < 768 ? 160 : window.innerWidth < 1024 ? 240 : 320;
      const gap = window.innerWidth < 768 ? 16 : window.innerWidth < 1024 ? 24 : 32;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div className="flex w-full overflow-x-scroll scroll-smooth [scrollbar-width:none]" ref={carouselRef} onScroll={checkScrollability}>
          <div className={cn("absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l")}></div>
          <div className={cn("flex flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8", "max-w-7xl")}>
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * index, ease: "easeOut", once: true } }}
                key={index}
                className="last:pr-[5%] sm:last:pr-[10%] md:last:pr-[20%] lg:last:pr-[33%] rounded-xl sm:rounded-2xl md:rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
});

export const Card = ({ card, layout = false }) => {
  const [visible, setVisible] = useState(false);

  return (
    <motion.button
      layoutId={layout ? `card-${card.title}` : undefined}
      onMouseOver={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="cursor-pointer hover:scale-95 transition-all ease-in-out duration-500 w-40 sm:w-44 md:w-52 lg:w-52 xl:w-44 overflow-hidden flex flex-col items-start justify-start relative z-10"
    >
      <div className='w-full aspect-square flex justify-center items-end py-1 sm:py-2 md:py-3 border-2 border-black border-opacity-30 font-semibold font-[Helvetica] text-xs sm:text-sm md:text-base lg:text-lg'>
        {card}
      </div>
    </motion.button>
  );
};
