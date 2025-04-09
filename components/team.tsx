import Link from "next/link";
import { BlurFade } from "./magicui/blur-fade";

const members = [
  {
    name: "Pranav Suresh ",
    role: "Founder - CTO",
    avatar: "/assets/pranav.jpeg", // Local path from public folder
    link: "https://www.linkedin.com/in/pranav-suresh-7bbb7a141/",
  },
  {
    name: "Yadhu",
    role: "Co-Founder - CEO",
    avatar: "/assets/oya.jpeg", // Local path from public folder
    link: "https://www.linkedin.com/in/pranav-suresh-7bbb7a141/",
  },
];

export default function TeamSection() {
  return (
    <section
      className="bg-gray-50 pb-16 md:pb-32 dark:bg-transparent"
      id="team"
    >
      <div className="mx-auto max-w-5xl border-t px-6">
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
          Team
        </span>
        <div className="mt-4 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-3/5">
            <h2 className="text-balance text-4xl font-bold lg:text-5xl">
              Our Dream Team
            </h2>
          </div>
        </div>
        <div className="mt-4 md:mt-8">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <BlurFade delay={0.25 + index * 0.25} inView>
                  <img
                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                    src={member.avatar}
                    alt="team member"
                    width="826"
                    height="1239"
                  />
                  <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                    <div className="flex justify-between">
                      <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                        {member.name}
                      </h3>
                      <span className="text-xs">_0{index + 1}</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {member.role}
                      </span>
                      <Link
                        href={member.link}
                        className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        Linkedin
                      </Link>
                    </div>
                  </div>
                </BlurFade>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
