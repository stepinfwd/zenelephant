"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, SendHorizonal, CheckCircle2, AlertCircle } from "lucide-react";
import { HyperText } from "@/components/magicui/hyper-text";
import { saveEmailSubscription } from "@/lib/emailSubscription"; // You'll need to create this

export default function CallToAction() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    try {
      setStatus("loading");
      await saveEmailSubscription(email);
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section className="py-16 md:py-32" id="waitlist">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-bold lg:text-5xl">
            <HyperText startOnView={true}>
              Unlock the Future of Immersive Experiences!
            </HyperText>
          </h2>
          <p className="mt-4">
            Join our AR/VR platform today and step into a world where reality
            meets imagination. Create, explore, and interact like never before.
            🚀 Sign up now and be part of the future!
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-sm lg:mt-12"
          >
            <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
              <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

              <input
                placeholder="Your mail address"
                className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
                required
              />

              <div className="md:pr-1.5 lg:pr-0">
                <Button
                  aria-label="submit"
                  className="rounded-(--radius)"
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                >
                  {status === "loading" ? (
                    <span className="hidden md:block">Submitting...</span>
                  ) : status === "success" ? (
                    <span className="hidden md:block">Subscribed!</span>
                  ) : (
                    <span className="hidden md:block">Get Started</span>
                  )}

                  {status === "loading" ? (
                    <span className="relative mx-auto size-5 md:hidden animate-spin">
                      ⏳
                    </span>
                  ) : status === "success" ? (
                    <CheckCircle2
                      className="relative mx-auto size-5 md:hidden text-green-500"
                      strokeWidth={2}
                    />
                  ) : (
                    <SendHorizonal
                      className="relative mx-auto size-5 md:hidden"
                      strokeWidth={2}
                    />
                  )}
                </Button>
              </div>
            </div>

            {status === "success" && (
              <p className="mt-3 text-sm text-green-600 flex items-center justify-center">
                <CheckCircle2 className="mr-1 size-4" />
                Thanks for joining our waitlist!
              </p>
            )}

            {status === "error" && (
              <p className="mt-3 text-sm text-red-600 flex items-center justify-center">
                <AlertCircle className="mr-1 size-4" />
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
