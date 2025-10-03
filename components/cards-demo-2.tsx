"use client";
import { cn } from "@/lib/utils";

export default function CardComingSoon() {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-center items-center p-4 border border-transparent dark:border-neutral-800",
          "bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100",
          "after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-30",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50 text-center">
          <h1 className="font-bold text-3xl md:text-4xl text-white relative drop-shadow-lg mb-4">
            Coming Soon
          </h1>
          <p className="font-normal text-base text-white relative drop-shadow-md opacity-80">
            Stay tuned for our next exciting XR experience
          </p>
        </div>
      </div>
    </div>
  );
}
