import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-8">
      {/* Left button */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-full p-2 transition"
      >
        <ChevronLeft />
      </button>

      {/* Right button */}
      <button
        onClick={() => scroll("right")}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-full p-2 transition"
      >
        <ChevronRight />
      </button>

      {/* Images */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-2 snap-x snap-proximity"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Producto"
            className="h-448px w-90 flex-shrink-0 rounded-xl object-contain hover:scale-[1.03] transition snap-start"
          />
        ))}
      </div>
    </div>
  );
}
