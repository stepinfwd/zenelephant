import CardDemo from "./cards-demo-1";
import { BlurFade } from "./magicui/blur-fade";

export default function Projects() {
  return (
    <section
      className="bg-zinc-50 py-32 md:p-32 dark:bg-transparent"
      id="products"
    >
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-bold lg:text-5xl mb-8">
            Our Products
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl mt-4">
        <div className="mx-auto grid gap-4 lg:grid-cols-3">
          <BlurFade delay={0.25} inView>
            <CardDemo />
          </BlurFade>
          <BlurFade delay={0.45} inView>
            <CardDemo />
          </BlurFade>
          <BlurFade delay={0.65} inView>
            <CardDemo />
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
