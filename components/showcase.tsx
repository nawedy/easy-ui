import Link from "next/link"
import { ChevronRightIcon } from "@radix-ui/react-icons"

import Marquee from "./magicui/marquee"

export interface ShowcaseCardProps {
  title: string
  image: string
  href: string
  affiliation?: string
}
export function ShowcaseCard({
  title,
  image,
  href,
  affiliation,
}: ShowcaseCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-2 group relative overflow-hidden cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        width={500}
        height={300}
        className="size-full object-cover max-h-[300px] rounded-xl"
      />

      <div className="flex flex-col">
        <div className="group inline-flex cursor-pointer items-center justify-start gap-1 duration-200 hover:text-neutral-700 dark:hover:text-neutral-200 text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          {title}
          <ChevronRightIcon className="size-4 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
        </div>
        <p className="text-neutral-400 text-sm">{affiliation}</p>
      </div>
    </Link>
  )
}

export default function Showcase() {
  const manualShowcases = [
    {
      title: "Easy Chatbot",
      image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-chatbot.png",
      href: "https://www.easyui.pro/ez-tmp",
      affiliation: "Easy UI",
    },
    {
      title: "Easy Designfast",
      image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-designfast.png",
      href: "https://www.easyui.pro/designfast",
      affiliation: "Easy UI",
    },
    {
      title: "Easy Docs",
      image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-docs.png",
      href: "https://www.easyui.pro/ez-docs",
      affiliation: "Easy UI",
    },
    {
      title: "Easy Nextui",
      image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-nextui.png",
      href: "https://www.easyui.pro/ez-nextui",
      affiliation: "Easy UI",
    },
    {
      title: "Easy Portfolio",
      image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-portfolio.png",
      href: "https://www.easyui.pro/ez-portfolio",
      affiliation: "Easy UI",
    },
    {
      title: "Easy Quotes",
      image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-quotes.png",
      href: "https://www.easyui.pro/quotesai",
      affiliation: "Easy UI",
    },
    {
      title: "Easy Retro",
      image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-retro.png",
      href: "https://www.easyui.pro/retro",
      affiliation: "Easy UI",
    },
    {
      title: "Easy Template",
      image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-template.png",
      href: "https://www.easyui.pro/ez-tmp",
      affiliation: "Easy UI",
    },
    {
      title: "Easy Waitlist",
      image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-waitlist.png",
      href: "https://www.easyui.pro/ez-waitlist",
      affiliation: "Easy UI",
    },
  ]

  return (
    <section id="showcase" className="py-20 w-full hidden lg:block md:block">
      <h2 className="mb-2 text-center text-3xl font-bold leading-[1.2] tracking-tighter text-foreground">
        Showcase
      </h2>
      <p className="mx-auto mb-8 text-muted-foreground text-center text-lg font-medium tracking-tight sm:text-lg sm:leading-7">     
        Companies choose Easy UI to build their landing pages.
      </p>
      <div className="relative flex flex-col ">
        <Marquee className="[--duration:40s]">
          {manualShowcases.map((showcase, idx) => (
            <ShowcaseCard key={idx} {...showcase} href={showcase.href} />
          ))}
        </Marquee>     
        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-[1.2%] bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 h-full  w-[1.2%] bg-gradient-to-l from-background"></div>  
      </div>
    </section>
  )
}
