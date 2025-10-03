"use client";
import { cn } from "@/lib/utils";

export default function CardDemo() {
  const handleClick = () => {
    window.open('https://www.meta.com/en-gb/experiences/gridtsugi/24299528839684715/', '_blank');
  };

  return (
    <div className="max-w-xs w-full">
      <div
        onClick={handleClick}
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url('/assets/gridtsugi.jpeg')] bg-cover bg-center",
          "after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-50",
          "hover:after:opacity-70",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-white relative drop-shadow-lg">
            Grid Tsugi
          </h1>
          <p className="font-normal text-base text-white relative my-4 drop-shadow-md">
          A magical twist on classic logic puzzles! GridTsugi brings brain bending bridge building into your living room with immersive mixed reality gameplay.
          </p>
        </div>
      </div>
    </div>
  );
}
