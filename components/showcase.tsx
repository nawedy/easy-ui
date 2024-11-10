import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"

const showcaseItems = [
  {
    title: "Easy Designfast",
    description:
      "Streamline your design workflow with our rapid prototyping and design system tool. Create beautiful interfaces in minutes.",
    image:
      "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-designfast.png",
    href: "https://www.easyui.pro/designfast",
    affiliation: "Easy UI",
  },
  {
    title: "Easy Docs",
    description:
      "Create and manage beautiful documentation with our intuitive documentation platform. Features live editing and version control.",
    image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-docs.png",
    href: "https://www.easyui.pro/ez-docs",
    affiliation: "Easy UI",
  },
  {
    title: "Easy Nextui",
    description:
      "A comprehensive UI component library for Next.js applications. Build modern web interfaces with pre-built, customizable components.",
    image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-nextui.png",
    href: "https://www.easyui.pro/ez-nextui",
    affiliation: "Easy UI",
  },
  {
    title: "Easy Portfolio",
    description:
      "Showcase your work with our professional portfolio templates. Perfect for designers, developers, and creative professionals.",
    image:
      "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-portfolio.png",
    href: "https://www.easyui.pro/ez-portfolio",
    affiliation: "Easy UI",
  },
  {
    title: "Easy Quotes",
    description:
      "Generate and manage quotes for your business with our intuitive quote management system. Streamline your sales process.",
    image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-quotes.png",
    href: "https://www.easyui.pro/quotesai",
    affiliation: "Easy UI",
  },
  {
    title: "Easy Retro",
    description:
      "Create stunning retro-styled designs with our collection of vintage-inspired UI components and templates.",
    image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-retro.png",
    href: "https://www.easyui.pro/retro",
    affiliation: "Easy UI",
  },
  {
    title: "Easy Template",
    description:
      "Jump-start your web projects with our collection of professionally designed templates and layouts.",
    image:
      "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-template.png",
    href: "https://www.easyui.pro/ez-tmp",
    affiliation: "Easy UI",
  },
  {
    title: "Easy Waitlist",
    description:
      "Manage your product launch waitlist effectively with our waitlist management solution. Build anticipation for your upcoming release.",
    image:
      "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-waitlist.png",
    href: "https://www.easyui.pro/ez-waitlist",
    affiliation: "Easy UI",
  },
  {
    title: "Easy Chatbot",
    description:
      "Build intelligent conversational interfaces quickly with our customizable chatbot solution. Perfect for customer support and automated interactions.",
    image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-chatbot.png",
    href: "https://www.easyui.pro/ez-tmp",
    affiliation: "Easy UI",
  },
]

export default function ShowcaseGrid() {
  return (
    <div className="container mx-auto px-4 py-5 lg:py-20 md:py-10 ">
      <h2 className="mb-2 text-center text-3xl font-bold leading-[1.2] tracking-tighter text-foreground ">
        Showcase
      </h2>
      <p className="mx-auto mb-8 text-muted-foreground text-center text-lg font-medium tracking-tight sm:text-lg sm:leading-7 pb-4">
        Companies choose Easy UI to build their landing pages.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {showcaseItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="block "
          >
            <Card className="h-full overflow-hidden border-gray-100 rounded-2xl dark:border-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center justify-between leading-7 tracking-tight font-semibold text-lg">
                  {item.title}
                  <Badge variant="secondary">{item.affiliation}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative aspect-video rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </CardContent>
              {/* <CardFooter className="flex mx-auto justify-center items-center align-center text-center text-sm text-blue-600 dark:text-blue-400">
                Learn more →
              </CardFooter> */}

                <a
          
              className={cn(
                buttonVariants({
                  size: "sm",
                  variant: "outline",
                }),
                "align-center mx-auto mb-5 flex max-w-[50%] items-center justify-center gap-2 whitespace-pre text-center md:flex",
                "group relative overflow-hidden rounded-full text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out hover:ring-2 hover:ring-neutral-300 hover:ring-offset-2 hover:ring-offset-inherit dark:hover:ring-black dark:hover:ring-offset-black "
              )}
            >
             Learn More
              <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </a>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}


