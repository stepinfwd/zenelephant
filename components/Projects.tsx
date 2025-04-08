import Image from "next/image";
import CardDemo from "./cards-demo-1";

export default function Projects() {
  return (
    <section className="bg-zinc-50 py-32 md:p-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl mb-8">
            Our Projects
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl mt-4">
        <div className="mx-auto grid gap-4 lg:grid-cols-3">
          <CardDemo />
          <CardDemo />
          <CardDemo />
        </div>
      </div>
    </section>
  );
}
