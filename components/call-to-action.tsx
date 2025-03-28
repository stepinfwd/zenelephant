import { Button } from '@/components/ui/button'
import { Mail, SendHorizonal } from 'lucide-react'
import { HyperText } from "@/components/magicui/hyper-text";

export default function CallToAction() {

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl"> <HyperText startOnView={true}>Unlock the Future of Immersive Experiences!</HyperText> </h2>
                    <p className="mt-4">Join our AR/VR platform today and step into a world where reality meets imagination. Create, explore, and interact like never before.

                        🚀 Sign up now and be part of the future!.</p>



                    <form action="" className="mx-auto mt-10 max-w-sm lg:mt-12">
                        <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                            <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                            <input placeholder="Your mail address" className="h-14 w-full bg-transparent pl-12 focus:outline-none" type="email" />
                            {/* zenelephantxr@gmail.com */}
                            <div className="md:pr-1.5 lg:pr-0">
                                <Button aria-label="submit" className="rounded-(--radius)">
                                    <span className="hidden md:block">Get Started</span>
                                    <SendHorizonal className="relative mx-auto size-5 md:hidden" strokeWidth={2} />
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
