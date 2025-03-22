import { cn } from "@/lib/utils"
import CallToAction from "./call-to-action"
import { BentoGridDemo } from "./blog"

export default function GridBackgroundDemo() {
    return (
        <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black mt-10">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
            </div>
            <div className="relative z-20">
                {/* <BentoGridDemo /> */}


                <CallToAction /></div>


        </div>
    )
}

