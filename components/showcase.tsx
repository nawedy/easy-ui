// import Link from "next/link"
// import { ChevronRightIcon } from "@radix-ui/react-icons"

// import Marquee from "./magicui/marquee"

// export interface ShowcaseCardProps {
//   title: string
//   image: string
//   href: string
//   affiliation?: string
// }
// export function ShowcaseCard({
//   title,
//   image,
//   href,
//   affiliation,
// }: ShowcaseCardProps) {
//   return (
//     <Link
//       href={href}
//       className="flex flex-col gap-2 group relative overflow-hidden cursor-pointer"
//     >
//       <img
//         src={image}
//         alt={title}
//         width={500}
//         height={300}
//         className="size-full object-cover max-h-[300px] rounded-xl"
//       />

//       <div className="flex flex-col">
//         <div className="group inline-flex cursor-pointer items-center justify-start gap-1 duration-200 hover:text-neutral-700 dark:hover:text-neutral-200 text-xl font-semibold text-neutral-700 dark:text-neutral-300">
//           {title}
//           <ChevronRightIcon className="size-4 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
//         </div>
//         <p className="text-neutral-400 text-sm">{affiliation}</p>
//       </div>
//     </Link>
//   )
// }

// export default function Showcase() {
//   const manualShowcases = [
//     {
//       title: "Easy Chatbot",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-chatbot.png",
//       href: "https://www.easyui.pro/ez-tmp",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Designfast",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-designfast.png",
//       href: "https://www.easyui.pro/designfast",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Docs",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-docs.png",
//       href: "https://www.easyui.pro/ez-docs",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Nextui",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-nextui.png",
//       href: "https://www.easyui.pro/ez-nextui",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Portfolio",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-portfolio.png",
//       href: "https://www.easyui.pro/ez-portfolio",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Quotes",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-quotes.png",
//       href: "https://www.easyui.pro/quotesai",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Retro",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-retro.png",
//       href: "https://www.easyui.pro/retro",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Template",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-template.png",
//       href: "https://www.easyui.pro/ez-tmp",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Waitlist",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-waitlist.png",
//       href: "https://www.easyui.pro/ez-waitlist",
//       affiliation: "Easy UI",
//     },
//   ]

//   return (
//     <section id="showcase" className="py-20 w-full hidden lg:block md:block">
//       <h2 className="mb-2 text-center text-3xl font-bold leading-[1.2] tracking-tighter text-foreground">
//         Showcase
//       </h2>
//       <p className="mx-auto mb-8 text-muted-foreground text-center text-lg font-medium tracking-tight sm:text-lg sm:leading-7">
//         Companies choose Easy UI to build their landing pages.
//       </p>
//       <div className="relative flex flex-col ">
//         <Marquee className="[--duration:40s]">
//           {manualShowcases.map((showcase, idx) => (
//             <ShowcaseCard key={idx} {...showcase} href={showcase.href} />
//           ))}
//         </Marquee>
//         <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-[1.2%] bg-gradient-to-r from-background"></div>
//         <div className="pointer-events-none absolute inset-y-0 right-0 h-full  w-[1.2%] bg-gradient-to-l from-background"></div>
//       </div>
//     </section>
//   )
// }

// Fav Showcase
// import { ArrowUpRight } from 'lucide-react'
// import Image from 'next/image'

// export default function Component() {
//   return (
//     <div className="bg-gray-100 p-8 rounded-xl shadow-lg max-w-7xl mx-auto my-12">
//       <div className="flex flex-col lg:flex-row gap-8">
//         <div className="lg:w-1/3 space-y-6">
//           <h2 className="text-4xl font-bold">Neon</h2>
//           <p className="text-gray-600">
//             Shine a spotlight on your next startup idea with this elegant landing page template.
//           </p>
//           <div className="flex gap-4">
//             <Image src="/placeholder.svg?height=24&width=24" alt="HTML5" width={24} height={24} />
//             <Image src="/placeholder.svg?height=24&width=24" alt="Next.js" width={24} height={24} />
//             <Image src="/placeholder.svg?height=24&width=24" alt="Vue" width={24} height={24} />
//             <Image src="/placeholder.svg?height=24&width=24" alt="Figma" width={24} height={24} />
//           </div>
//           <div className="flex gap-4">
//             <button className="px-4 py-2 bg-white text-gray-800 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors">
//               Live Demo
//               <ArrowUpRight className="w-4 h-4" />
//             </button>
//             <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
//               Buy Now - $49
//             </button>
//           </div>
//         </div>
//         <div className="lg:w-2/3">
//           <div className="bg-white p-4 rounded-xl shadow-md">
//             <div className="flex gap-2">
//               <div className="w-1/2 h-96 overflow-hidden rounded-lg">
//                 <Image
//                   src="/ez-nextui.png"
//                   alt="Neon Template Preview 1"
//                   width={400}
//                   height={600}
//                   className="w-full h-full object-cover object-top"
//                 />
//               </div>
//               <div className="w-1/2 h-96 overflow-hidden rounded-lg">
//                 <Image
//                   src="/ez-nextui.png"
//                   alt="Neon Template Preview 2"
//                   width={400}
//                   height={600}
//                   className="w-full h-full object-cover object-bottom"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// #2nd fav design

// import { ArrowUpRight } from 'lucide-react'
// import Image from 'next/image'

// export default function Showcase() {
//   const showcases = [
//     {
//       title: "Easy Chatbot",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-chatbot.png",
//       href: "https://www.easyui.pro/ez-tmp",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Designfast",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-designfast.png",
//       href: "https://www.easyui.pro/designfast",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Docs",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-docs.png",
//       href: "https://www.easyui.pro/ez-docs",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Nextui",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-nextui.png",
//       href: "https://www.easyui.pro/ez-nextui",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Portfolio",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-portfolio.png",
//       href: "https://www.easyui.pro/ez-portfolio",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Quotes",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-quotes.png",
//       href: "https://www.easyui.pro/quotesai",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Retro",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-retro.png",
//       href: "https://www.easyui.pro/retro",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Template",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-template.png",
//       href: "https://www.easyui.pro/ez-tmp",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Waitlist",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-waitlist.png",
//       href: "https://www.easyui.pro/ez-waitlist",
//       affiliation: "Easy UI",
//     },
//   ]

//   return (
//     <div className="bg-gray-100 p-8 rounded-xl shadow-lg max-w-7xl mx-auto my-12">
//       <h2 className="text-4xl font-bold text-center mb-8">Showcase</h2>
//       <div className="flex flex-wrap gap-8 justify-center">
//         {showcases.map((showcase, index) => (
//           <div key={index} className="bg-white p-6 rounded-xl shadow-md max-w-xs w-full">
//             <div className="w-full h-60 overflow-hidden rounded-lg">
//               <Image
//                 src={showcase.image}
//                 alt={showcase.title}
//                 width={400}
//                 height={300}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="mt-4 space-y-2">
//               <h3 className="text-2xl font-bold">{showcase.title}</h3>
//               <p className="text-gray-600">{showcase.affiliation}</p>
//               <a href={showcase.href} className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-600">
//                 Live Demo
//                 <ArrowUpRight className="w-4 h-4" />
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// // Final showcase

// import Image from "next/image"
// import Link from "next/link"
// import { ArrowUpRight } from "lucide-react"

// interface ShowcaseCardProps {
//   title: string
//   image: string
//   href: string
//   affiliation: string
// }

// function ShowcaseCard({ title, image, href, affiliation }: ShowcaseCardProps) {
//   return (
//     <div className="bg-gray-100 dark:bg-black rounded-xl shadow-lg overflow-hidden transition-colors duration-200 border dark:border-gray-800">
//       <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
//         <div className="lg:w-1/3 space-y-4 lg:space-y-6 p-4 lg:p-8">
//           <h2 className="text-2xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-7 tracking-tight justify-start align-left items-left flex">{title}</h2>
//           <p className="text-gray-600 dark:text-gray-300 leading-7 tracking-tight justify-start align-left items-left flex">{affiliation}</p>
//           <div className="flex gap-4 items-center">
//             <Image
//               src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
//               alt="React"
//               className="h-8 lg:h-10 w-auto dark:filter dark:brightness-90"
//               width={34}
//               height={24}
//             />
//             <Image
//               src="https://magicui.design/icon.png"
//               alt="Magic UI"
//               className="h-8 lg:h-10 w-auto dark:filter dark:brightness-90"
//               width={40}
//               height={27}
//             />
//             <Image
//               src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
//               alt="Tailwind CSS"
//               className="h-6 lg:h-7 w-auto dark:filter dark:brightness-90"
//               width={34}
//               height={24}
//             />
//           </div>
//           <div className="flex flex-col sm:flex-row gap-2">
//             <Link
//               href={href}
//               className="px-4 py-2 bg-white border dark:bg-gray-700 text-gray-800 dark:text-white rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
//             >
//               Live Demo
//               <ArrowUpRight className="w-4 h-4" />
//             </Link>
//             <Link
//               href={href}
//               className="px-4 py-2 bg-gray-900 dark:bg-gray-950 text-white rounded-md text-center hover:bg-gray-800 dark:hover:bg-gray-900 transition-colors"
//             >
//               Buy Now - $49
//             </Link>
//           </div>
//         </div>
//         <div className="lg:w-2/3 p-4 lg:p-8 lg:pl-0">
//           <div className="h-48 sm:h-64 lg:h-96 rounded-lg overflow-hidden">
//             <Image
//               src={image}
//               alt={`${title} Template Preview`}
//               width={800}
//               height={600}
//               className="w-full h-full object-cover rounded-xl dark:filter dark:brightness-90"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function Showcase() {
//   const showcaseItems = [
//     {
//       title: "Easy Chatbot",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-chatbot.png",
//       href: "https://www.easyui.pro/ez-tmp",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Designfast",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-designfast.png",
//       href: "https://www.easyui.pro/designfast",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Docs",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-docs.png",
//       href: "https://www.easyui.pro/ez-docs",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Nextui",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-nextui.png",
//       href: "https://www.easyui.pro/ez-nextui",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Portfolio",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-portfolio.png",
//       href: "https://www.easyui.pro/ez-portfolio",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Quotes",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-quotes.png",
//       href: "https://www.easyui.pro/quotesai",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Retro",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-retro.png",
//       href: "https://www.easyui.pro/retro",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Template",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-template.png",
//       href: "https://www.easyui.pro/ez-tmp",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Waitlist",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-waitlist.png",
//       href: "https://www.easyui.pro/ez-waitlist",
//       affiliation: "Easy UI",
//     },
//   ]

//   return (
//     <section className="py-6 lg:py-12 bg-white dark:bg-black transition-colors duration-200 ">
//       <div className="container mx-auto px-4 py-20  ">
//       <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-3xl font-bold sm:max-w-[85%] max-w-[85%] lg:max-w-[100%] md:max-w-[100%] ">
//           Showcase
//         </h2>
//         <p className="text-muted-foreground sm:max-w-[85%] max-w-[85%] lg:max-w-[100%] md:max-w-[100%] pb-10 leading-normal sm:text-lg sm:leading-7 pt-4">
//         Companies choose <span className="font-bold"> Easy UI </span> to build their landing pages.
//                   </p>
//         <div className="space-y-6 lg:space-y-12">
//           {showcaseItems.map((item, index) => (
//             <ShowcaseCard key={index} {...item} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// import Image from "next/image"
// import Link from "next/link"
// import { ArrowUpRight } from "lucide-react"

// interface ShowcaseCardProps {
//   title: string
//   image: string
//   href: string
//   affiliation: string
// }

// function ShowcaseCard({ title, image, href, affiliation }: ShowcaseCardProps) {
//   return (
//     <div className="bg-gray-100 dark:bg-black rounded-xl shadow-lg overflow-hidden transition-colors duration-200 border dark:border-gray-800">
//       <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
//         <div className="lg:w-1/3 space-y-4 lg:space-y-6 p-4 lg:p-8">
//           <h2 className="text-2xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-7 tracking-tight justify-start align-left items-left flex">{title}</h2>
//           <p className="text-gray-600 dark:text-gray-300 leading-7 tracking-tight justify-start align-left items-left flex">{affiliation}</p>
//           <div className="flex gap-4 items-center">
//             <Image
//               src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
//               alt="React"
//               className="h-8 lg:h-10 w-auto dark:filter dark:brightness-90"
//               width={34}
//               height={24}
//             />
//             <Image
//               src="https://magicui.design/icon.png"
//               alt="Magic UI"
//               className="h-8 lg:h-10 w-auto dark:filter dark:brightness-90"
//               width={40}
//               height={27}
//             />
//             <Image
//               src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
//               alt="Tailwind CSS"
//               className="h-6 lg:h-7 w-auto dark:filter dark:brightness-90"
//               width={34}
//               height={24}
//             />
//           </div>
//           <div className="flex flex-col sm:flex-row gap-3">
//             <Link
//               href={href}
//               className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-md flex items-center justify-center gap-2 hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
//             >
//               Live Demo
//               <ArrowUpRight className="w-4 h-4" />
//             </Link>
//             <Link
//               href={href}
//               className="px-4 py-2 bg-gray-900 dark:bg-gray-950 text-white rounded-md text-center hover:bg-gray-800 dark:hover:bg-gray-900 transition-colors"
//             >
//               Buy Now - $49
//             </Link>
//           </div>
//         </div>
//         <div className="lg:w-2/3 p-4 lg:p-8 lg:pl-0">
//           <div className="h-48 sm:h-64 lg:h-96 rounded-lg overflow-hidden">
//             <Image
//               src={image}
//               alt={`${title} Template Preview`}
//               width={800}
//               height={600}
//               className="w-full h-full object-cover rounded-xl dark:filter dark:brightness-90"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function Showcase() {
//   const showcaseItems = [
//     {
//       title: "Easy Chatbot",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-chatbot.png",
//       href: "https://www.easyui.pro/ez-tmp",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Designfast",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-designfast.png",
//       href: "https://www.easyui.pro/designfast",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Docs",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-docs.png",
//       href: "https://www.easyui.pro/ez-docs",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Nextui",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-nextui.png",
//       href: "https://www.easyui.pro/ez-nextui",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Portfolio",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-portfolio.png",
//       href: "https://www.easyui.pro/ez-portfolio",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Quotes",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-quotes.png",
//       href: "https://www.easyui.pro/quotesai",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Retro",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-retro.png",
//       href: "https://www.easyui.pro/retro",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Template",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-template.png",
//       href: "https://www.easyui.pro/ez-tmp",
//       affiliation: "Easy UI",
//     },
//     {
//       title: "Easy Waitlist",
//       image: "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-waitlist.png",
//       href: "https://www.easyui.pro/ez-waitlist",
//       affiliation: "Easy UI",
//     },
//   ]

//   return (
//     <section className="py-6 lg:py-12 bg-white dark:bg-black transition-colors duration-200 ">
//       <div className="container mx-auto px-4 py-20  ">
//       <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-3xl font-bold sm:max-w-[85%] max-w-[85%] lg:max-w-[100%] md:max-w-[100%] ">
//           Showcase
//         </h2>
//         <p className="text-muted-foreground sm:max-w-[85%] max-w-[85%] lg:max-w-[100%] md:max-w-[100%] pb-10 leading-normal sm:text-lg sm:leading-7 pt-4">
//         Companies choose <span className="font-bold"> Easy UI </span> to build their landing pages.
//                   </p>
//         <div className="space-y-6 lg:space-y-12">
//           {showcaseItems.map((item, index) => (
//             <ShowcaseCard key={index} {...item} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// import { ArrowRight } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// export default function TemplateHero() {
//   return (
//     <div className="min-h-screen bg-white dark:bg-black">
//       <div className="container mx-auto px-4 md:px-6 pt-20 pb-16">
//         <div className="flex flex-col lg:flex-row gap-12 items-start">
//           {/* Left Column */}
//           <div className="w-full lg:w-1/2 space-y-8">
//             <div className="space-y-2">
//               <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">
//                 Template
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
//                 SaaS Template
//               </h1>
//               <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mt-4">
//                 Create a stunning landing page for your startup or product with our professionally designed template. Includes customizable sections, responsive design, and optimized for conversions.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 href="#"
//                 className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 group"
//               >
//                 Get Access - $49 USD
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
//               </Link>
//               <Link
//                 href="#"
//                 className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
//               >
//                 Live Preview
//                 <svg
//                   className="ml-2 h-4 w-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                   />
//                 </svg>
//               </Link>
//             </div>

//             <div className="flex items-center gap-4 pt-4">
//               {/* Technology Icons */}
//               <div className="flex gap-4 items-center">
//                 <div className="w-10 h-10 flex items-center justify-center bg-black dark:bg-white rounded-full">
//                   <span className="text-white dark:text-black font-bold">N</span>
//                 </div>
//                 <Image
//                   src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
//                   alt="React"
//                   width={40}
//                   height={40}
//                   className="dark:filter dark:brightness-90"
//                 />
//                 <div className="w-10 h-10 flex items-center justify-center">
//                   <span className="text-2xl font-bold text-blue-600">Ts</span>
//                 </div>
//                 <Image
//                   src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
//                   alt="Tailwind CSS"
//                   width={40}
//                   height={40}
//                   className="dark:filter dark:brightness-90"
//                 />
//                 <div className="w-10 h-10 flex items-center justify-center">
//                   <span className="text-xl font-bold">/</span>
//                 </div>
//               </div>
//             </div>

//             {/* Recent Purchase Banner */}
//             <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 max-w-md mt-8">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
//                   <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">JL</span>
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm text-gray-700 dark:text-gray-300">
//                     <span className="text-blue-600 dark:text-blue-400">Justin L.</span> from{" "}
//                     <span className="text-blue-600 dark:text-blue-400">FL, United States</span> paid
//                   </p>
//                   <div className="flex items-center gap-2 mt-1">
//                     <p className="text-xs text-gray-500 dark:text-gray-400">15 hours ago</p>
//                     <div className="flex items-center gap-1">
//                       <div className="w-4 h-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
//                         <svg
//                           className="w-3 h-3 text-blue-600 dark:text-blue-400"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                       <span className="text-xs text-gray-500 dark:text-gray-400">Verified</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Preview Image */}
//           <div className="w-full lg:w-1/2">
//             <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
//               <Image
//                 src="/api/placeholder/1200/900"
//                 alt="Template Preview"
//                 width={1200}
//                 height={900}
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

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
