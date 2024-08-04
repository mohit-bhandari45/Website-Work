"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useImperativeHandle,
  forwardRef,
} from "react";
import {
  IconX,
} from "@tabler/icons-react";
import { cn } from "../lib/utils"
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hook/use-outside-hook"
import { getImage } from "../apis/apis";
import Star from "./LandingPageComp/Subcomps/Star";
import { useBooleanContext } from "../context/context";
import { addToCart, handleFavourites } from "../utils/products";

export const CarouselContext = createContext({
  onCardClose: () => { },
  currentIndex: 0,
})

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
        carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    },
    scrollRight: () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    },
  }));

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => window.innerWidth < 768;

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div className="flex w-full overflow-x-scroll scroll-smooth [scrollbar-width:none]" ref={carouselRef} onScroll={checkScrollability}>
          <div className={cn("absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l")}></div>
          <div className={cn("flex flex-row justify-start gap-4", "max-w-7xl")}>
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 * index, ease: "easeOut", once: true } }}
                key={index}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
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

export const Card = ({
  card,
  layout = false,
  updateWishList
}) => {
  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  // const { onCardClose, currentIndex } = useContext(CarouselContext);
  const [visible, setvisible] = useState(false)
  const { token } = useBooleanContext()

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  //   onCardClose(index);
  // };

  const wishListUpdate = async (e) => {
    await handleFavourites(e, card._id, token)
    updateWishList()
  }


  return (
    <>
      <AnimatePresence>
        {/* {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )} */}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        // onClick={handleOpen}
        onMouseOver={() => { setvisible(true) }} onMouseLeave={() => { setvisible(false) }}
        className="bg-gray-100 cursor-pointer hover:scale-95 transition-all ease-in-out duration-500 dark:bg-neutral-900 h-80 w-56 md:h-[25rem] md:w-80 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="relative z-40 p-4 w-full">
          <div className="icons w-full flex justify-between items-start h-full">
            <div className="off bg-[#ED8A73] px-4 py-1 rounded-md text-white">56%</div>
            <div className="mainicons flex flex-col gap-2 justify-center items-center">
              <div className="love p-2 bg-white rounded-full">
                {!card.favourite || card.favourite === null ? <svg onClick={wishListUpdate} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                  <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg> :
                  <svg onClick={wishListUpdate} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="black">
                    <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  </svg>
                }
              </div>
              <div className="love p-2 bg-white rounded-full"><img src="src/assets/Quick View.png" alt="" /></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center absolute items-center w-full h-full">
          <img
            className={cn(
              "transition duration-300",
              isLoading ? "blur-sm" : "blur-0",
              "object-cover w-[35%] h-[35%]  z-10 inset-0"
            )}
            onLoad={() => setLoading(false)}
            src={`${getImage}/${card.imageUrl}`}
            loading="lazy"
            decoding="async"
            blurDataURL={typeof src === "string" ? src : undefined}
          />
        </div>
        <button onClick={(e) => { addToCart(e, card._id, token) }} className={visible ? "transition-all z-20 duration-700 ease-in-out opacity-100 add absolute bottom-0 bg-black text-white w-full justify-center flex py-4 rounded-b-md text-xl" : "transition-all z-20 duration-700 ease-in-out  add absolute bottom-[-60px] bg-black text-white w-full justify-center flex py-4 rounded-b-md text-xl opacity-0"}>Add to Cart</button>
      </motion.button>
      <div className="tags w-full flex flex-col justify-center items-start gap-1 py-2 relative z-30 bg-white">
        <div onClick={() => navigate(`/productdetails/${itemId}`)} className="title text-lg font-semibold transition-all duration-500 hover:scale-105 ease-in-out cursor-pointer">{card.title}</div>
        <div className="price flex justify-center items-center gap-2 font-medium">
          <div className="main text-[#DB4444]">${card.mainPrice}</div>
          <div className="prev line-through text-gray-600">${card.prevPrice}</div>
        </div>
        <div className="rating flex justify-center items-center gap-3">
          <div className="rates flex justify-center items-center gap-1">
            <Star rating={card.rating} reviews={card.reviews} />
          </div>
          <div className="title text-gray-600">({card.reviews} reviews)</div>
        </div>
      </div>
    </>
  );
};
