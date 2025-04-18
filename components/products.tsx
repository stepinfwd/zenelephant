import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Factory,
  Stethoscope,
  Building,
  BookOpen,
  Gamepad2,
  Shield,
} from "lucide-react";
import { ReactNode } from "react";
import { SparklesText } from "./magicui/sparkles-text";

export default function Features() {
  return (
    <section
      className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent"
      id="features"
    >
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            <SparklesText text=" Our Expertise In Immersive Experiences" />
          </h2>
          <p className="mt-4">
            Crafting next-gen VR/AR solutions across industries to train,
            engage, and inspire.
          </p>
        </div>
        <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center ">
          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Factory className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Industry</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                We create realistic VR simulations for safe skill practice,
                boosting compliance, cutting training costs, and scaling
                workforce efficiency.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Stethoscope className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Medical</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Immersive VR/AR healthcare training ensures risk-free practice
                of complex procedures, boosting skill levels and patient safety.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Building className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Real Estate</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Revolutionize property showcasing with interactive VR tours and
                high-fidelity 3D visuals, streamlining decisions and elevating
                client engagement.
              </p>
            </CardContent>
          </div>
        </Card>
        <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto  grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center">
          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <BookOpen className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Interactive Storytelling</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                We blend dynamic animation and interactive narratives, inviting
                users to participate in immersive tales for an unforgettable
                AR/VR adventure.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Gamepad2 className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">
                Game Story Writing/Art Direction
              </h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                We craft immersive narratives, design compelling characters, and
                shape striking visuals to elevate your game's storytelling and
                audience appeal.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Shield className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Military</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Harness advanced VR/AR for strategic simulations and combat
                drills, enabling risk-free, repeatable training that hones
                soldier readiness and mission success.
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
