// "use client"

// import Link from "next/link"

// import { AnimatedBeam } from "@/components/magicui/animated-beam"
// import { MagicCard, MagicContainer } from "@/components/magicui/magic-card"
// import SparklesText from "@/components/magicui/sparkles-text"

// export default function TemplatePage() {
//   // Function to handle video play
//   const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
//     const video = e.currentTarget.querySelector("video")
//     if (video) video.play()
//   }

//   // Function to handle video pause
//   const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
//     const video = e.currentTarget.querySelector("video")
//     if (video) video.pause()
//   }

//   const renderPaidBadge = () => (
//     <div className="absolute right-2 top-2 rounded-full bg-green-500 px-2 py-1 text-xs font-bold text-white">
//       PAID
//     </div>
//   )


//   return (
//     <MagicContainer className="flex h-auto min-h-[500px] w-full flex-wrap gap-4 px-3 lg:px-10 sm:px-2 md:px-10 mt-10 justify-center items-center pb-0 lg:pb-10 md:pb-20 sm:pb-20 mb-10">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full text-center item-center justify-center">
//         {/* <Link href="/ez-tmp"> */}
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-tmp")}
//           onMouseEnter={handleMouseEnter} // Add this line
//           onMouseLeave={handleMouseLeave} // And this line
//         >
//            {renderPaidBadge()}
//           <img
//             src="/eztmp1-img.png"
//             alt="Easy Template"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Template
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Template suitable for SaaS Products
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/designfast")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {/* <div className="sm:hidden">
//             <img src="/designfast-img.png" alt="Designfast" className="w-full h-auto" />
//           </div>
//           <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
//             <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/designfast.mp4" type="video/mp4" />
//           </video> */}
//           <img
//             src="/designfast-img.png"
//             alt="Designfast"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Designfast
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Minimal template designed for Service business
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/quotesai")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {/* <div className="sm:hidden">
//             <img src="/quotesai-img.png" alt="QuotesAI" className="w-full h-auto" />
//           </div>
//           <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
//             <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/quotesai.mp4" type="video/mp4" />
//           </video> */}
//           <img
//             src="/quotesai-img.png"
//             alt="QuotesAI"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             QuotesAI
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Ready-to-use Micro SaaS template with NextAuth built-in. Stripe
//             Coming soon.
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/retro")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {/* <div className="sm:hidden">
//             <img src="/retro.png" alt="QuotesAI" className="w-full h-auto" />
//           </div> */}
//           {/* <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
//             <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/retro.mp4" type="video/mp4" />
//           </video> */}
//           <img src="/retro.png" alt="QuotesAI" className="w-full h-auto" />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Retro
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Retro themed Template
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-waitlist")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {/* <div className="sm:hidden">
//             <img src="/easy-waitlist.png" alt="EasyWaitlist" className="w-full h-auto" />
//           </div>
//           <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
//             <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-waitlist.mp4" type="video/mp4" />
//           </video> */}
//           <img
//             src="/easy-waitlist.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Waitlist
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Waitlist Page for pre-launching product or to find PMF
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-chatbot")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {/* <div className="sm:hidden">
//             <img src="/easy-chatbot.png" alt="EasyWaitlist" className="w-full h-auto" />
//           </div>
//           <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
//             <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-chatbot.mp4" type="video/mp4" />
//           </video> */}
//           <img
//             src="/easy-chatbot.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Chatbot
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Ready-to-integrate Chatbot Template
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-docs")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {/* <div className="sm:hidden">
//             <img src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/Screenshot%202024-07-16%20at%2010.13.43%E2%80%AFAM.png" alt="EasyWaitlist" className="w-full h-auto" />
//           </div>
//           <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
//             <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/EasyDocs.mp4" type="video/mp4" />
//           </video> */}
//           <img
//             src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/Screenshot%202024-07-16%20at%2010.13.43%E2%80%AFAM.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Docs
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Simplest implementation of Fumadocs
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-nextui")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {/* <div className="sm:hidden">
//             <img src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/Screenshot%202024-07-18%20at%201.35.27%E2%80%AFPM.png" alt="EasyWaitlist" className="w-full h-auto" />
//           </div>
//           <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
//             <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-nextui.mp4" type="video/mp4" />
//           </video> */}
//           <img
//             src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/Screenshot%202024-07-18%20at%201.35.27%E2%80%AFPM.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy NextUI
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Landing page built using NextUI
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-portfolio")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//             {renderPaidBadge()}
//           {/* <div className="sm:hidden">
//             <img src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/Screenshot%202024-07-19%20at%203.33.40%E2%80%AFAM.png" alt="EasyWaitlist" className="w-full h-auto" />
//           </div>
//           <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
//             <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-portfolio.mp4" type="video/mp4" />
//           </video> */}
//           <img
//             src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/Screenshot%202024-07-19%20at%203.33.40%E2%80%AFAM.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Portfolio
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Portfolio template with Blog
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-landing-docs")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//             {renderPaidBadge()}
//           {/* <div className="sm:hidden">
//             <img src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-landing-docs.png" alt="EasyWaitlist" className="w-full h-auto" />
//           </div>
//           <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
//             <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-landing-docs.mp4" type="video/mp4" />
//           </video> */}
//           <img
//             src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-landing-docs.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Landing Docs
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Landing page with docs
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-dashboard")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {/* <div className="sm:hidden">
//             <img src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-dashboard.png" alt="EasyWaitlist" className="w-full h-auto" />
//           </div>
//           <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
//             <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-dashboard.mp4" type="video/mp4" />
//           </video> */}
//           <img
//             src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-dashboard.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Dashboard UI
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Dashboard UI built using Shadcn Charts
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-blog")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//             {renderPaidBadge()}
//           {/* <div className="sm:hidden">
//             <img src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-blog.png" alt="EasyWaitlist" className="w-full h-auto" />
//           </div>
//           <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
//             <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-blog.mp4" type="video/mp4" />
//           </video> */}
//           <img
//             src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-blog.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Blog
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Lightweight blog built using contentlayer
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-shots")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <img
//             src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-shots.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Shots
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Create Beautiful Images from your Screenshots
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-tmp2")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <img
//             src="/ez-tmp2.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Template 2
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Easy Shadcn Landing Page Template
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-tmp3")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//             {renderPaidBadge()}
//           <img
//             src="/ez-tmp3.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Template 3
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Easy Aceternity UI Landing Page Template
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-design")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <img
//             src="/ez-design.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Design
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Easy Design Landing Page Template
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-grids")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//             {renderPaidBadge()}
//           <img
//             src="/ez-grids.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Grids
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Easy Grids Template for Grid Lovers
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-story")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//             {renderPaidBadge()}
//           <img
//             src="/ez-story.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Story
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Easy Template for Telling a Small Story
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-newsletter")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//             {renderPaidBadge()}
//           <img
//             src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-newsletter.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Newsletter
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Easy Template for Newsletter Landing
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-notes")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//             {renderPaidBadge()}
//           <img
//             src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-notes.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Notes
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Easy Landing Page template for Notes + Mini Notion Themed Editor
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-marketplace")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <img
//             src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-marketplace.png"
//             alt="EasyWaitlist"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Marketplace
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Easy Template for building E-commerce Websites
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-tmp4")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//             {renderPaidBadge()}
//           <img
//             src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-tmp4.png"
//             alt="EasyTemplate4"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Template 4
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Easy Template for building high converting SaaS Landing Page
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-tmp5")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <img
//             src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-tmp5.png"
//             alt="EasyTemplate5"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Template 5
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Easy Template for building high quality Landing Page
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"
//           onClick={() => (window.location.href = "/ez-red")}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <img
//             src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-red.png"
//             alt="EasyRed"
//             className="w-full h-auto"
//           />
//           <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
//             Easy Red
//           </h2>
//           <p className="text-base text-gray-600 dark:text-gray-400">
//             Ready-to-launch Easy Micro-SaaS Template
//           </p>
//         </MagicCard>
//         <MagicCard
//           className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-10 shadow-2xl"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div className="flex flex-col items-center justify-center h-full">
//             <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
//               <SparklesText text="Expected 50+" />
//             </h2>
//             <p className="text-xl text-center sm:text-left text-gray-600 dark:text-gray-400">
//               new high quality templates
//             </p>
//           </div>
//         </MagicCard>
//       </div>
//     </MagicContainer>
//   )
// }


// New Design Code

// 'use client'

// import { useState, useEffect } from 'react'
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Menu, FileText, MessageSquare, LayoutDashboard, Palette, Book, Grid, Rocket, ShoppingCart, Mail, Box, Briefcase, Zap, Camera, BookOpen, List, Clock, Quote, ChevronRight, StickyNoteIcon } from 'lucide-react';
// import EzBlog from '../(docs)/ez-blog/page';
// import EzChatbot from '../(docs)/ez-chatbot/page';
// import EzDocs from '../(docs)/ez-dashboard/page';
// import DesignPage from '../(docs)/ez-design/page';
// import GridsPage from '../(docs)/ez-grids/page';
// import EzNextUI from '../(docs)/ez-landing-docs/page';
// import MarketplacePage from '../(docs)/ez-marketplace/page';
// import StoryPage from '../(docs)/ez-newsletter/page';
// import NotesPage from '../(docs)/ez-notes/page';
// import EzPortfolio from '../(docs)/ez-portfolio/page';
// import EzRed from '../(docs)/ez-red/page';
// import EzShots from '../(docs)/ez-shots/page';
// import EzPage from '../(docs)/ez-tmp/page';
// import EzPage2 from '../(docs)/ez-tmp2/page';
// import EzPage3 from '../(docs)/ez-tmp3/page';
// import EzPage4 from '../(docs)/ez-tmp4/page';
// import EzPage5 from '../(docs)/ez-tmp5/page';
// import EzWaitlist from '../(docs)/ez-waitlist/page';
// import QuotesAI from '../(docs)/quotesai/page';
// import EzLandingDocs from '../(docs)/ez-landing-docs/page';
// import EzNextUII from '../(docs)/ez-nextui/page';
// import IntroductionPage from '../(docs)/introduction/page';


// interface Item {
//   name: string;
//   isNew?: boolean;
//   isPaid?: boolean;
// }

// const components: Item[] = [
//   { name: 'introduction' },
//   { name: 'ez-blog', isNew: true },
//   { name: 'ez-chatbot' },
//   { name: 'ez-dashboard' },
//   { name: 'ez-design' },
//   { name: 'ez-docs' },
//   { name: 'ez-grids', isNew: true },
//   { name: 'ez-landing-docs', isNew: true },
//   { name: 'ez-marketplace' },
//   { name: 'ez-newsletter', isNew: true },
//   { name: 'ez-nextui' },
//   { name: 'ez-notes', isNew: true },
//   { name: 'ez-portfolio', isNew: true },
//   { name: 'ez-red' },
//   { name: 'ez-shots' },
//   { name: 'ez-story', isNew: true },
//   { name: 'ez-tmp', isNew: true },
//   { name: 'ez-tmp2' },
//   { name: 'ez-tmp3', isNew: true },
//   { name: 'ez-tmp4', isNew: true },
//   { name: 'ez-tmp5' },
//   { name: 'ez-waitlist' },
//   { name: 'quotesai' },
// ]

// export default function TemplatePage() {
//   const [selectedItem, setSelectedItem] = useState<string | null>('introduction')
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  

//   useEffect(() => {
//     // setIsSidebarOpen(isLargeScreen)
//     const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches
//     // setIsSidebarOpen(isLargeScreen);
//   }, [])

//   const handleItemClick = (item: string) => {
//     setSelectedItem(item)
//   }

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen)
//   }

//   const renderComponent = (componentName: string) => {
//     switch (componentName) {
//       case 'introduction':
//         return <IntroductionPage />
//       case 'ez-blog':
//         return <EzBlog />
//       case 'ez-chatbot':
//         return <EzChatbot />
//       case 'ez-dashboard':
//         return <EzDocs />
//       case 'ez-design':
//         return <DesignPage />
//       case 'ez-docs':
//         return <EzDocs />
//       case 'ez-grids':
//         return <GridsPage />
//       case 'ez-landing-docs':
//         return <EzLandingDocs />
//       case 'ez-marketplace':
//         return <MarketplacePage />
//       case 'ez-newsletter':
//         return <StoryPage />
//       case 'ez-nextui':
//         return <EzNextUII />
//       case 'ez-notes':
//         return <NotesPage />
//       case 'ez-portfolio':
//         return <EzPortfolio />
//       case 'ez-red':
//         return <EzRed />
//       case 'ez-shots':
//         return <EzShots />
//       case 'ez-story':
//         return <StoryPage />
//       case 'ez-tmp':
//         return <EzPage />
//       case 'ez-tmp2':
//         return <EzPage2 />
//       case 'ez-tmp3':
//         return <EzPage3 />
//       case 'ez-tmp4':
//         return <EzPage4 />
//       case 'ez-tmp5':
//         return <EzPage5 />
//       case 'ez-waitlist':
//         return <EzWaitlist />
//       case 'quotesai':
//         return <QuotesAI />    
//       default:
//         return <div>Component not found</div>
//     }
//   }

//   return (
//     <div className="flex h-screen bg-white text-gray-800 dark:bg-black dark:text-white ">
//       {/* Sidebar */}
//       <div className={`${isSidebarOpen ? 'w-64 lg:w-70' : 'w-16'} bg-white transition-all duration-300 ease-in-out dark:bg-black dark:text-white px-0 dark:border-r dark:border-gray-900`}>
//         <div className="flex items-center justify-between p-4">
//           <h1 className={`text-md font-bold text-primary ${isSidebarOpen ? '' : 'hidden'}`}>Getting Started</h1>
//           <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
//             <Menu className="w-5 h-5 text-gray-600" />
//           </button>
//         </div>
//         <ScrollArea className="h-[calc(100vh-4rem)] dark:text-white">
//           <div className="p-2 dark:text-white">
//             <SidebarSection title="" items={components} selectedItem={selectedItem} onItemClick={handleItemClick} isOpen={isSidebarOpen} />
//           </div>
//         </ScrollArea>
//       </div>

//       {/* Main content area */}
//       <div className="flex-1 overflow-auto mx-auto justify-center dark:text-white dark:bg-black">
        
//         {selectedItem ? (
//           <div className='px-1 lg:px-0 md:px-0'>
//             {renderComponent(selectedItem)}
            
//           </div>
//         ) : (
//           <p className="text-lg text-gray-600">Select a component from the sidebar.</p>
//         )}
//       </div>
//     </div>
//   )
// }

// function SidebarSection({ title, items, selectedItem, onItemClick, isOpen }: {
//   title: string;
//   items: Item[];
//   selectedItem: string | null;
//   onItemClick: (item: string) => void;
//   isOpen: boolean;
// }) {
//   const getIcon = (name: string) => {
//     switch (name) {
//       case 'ez-blog': return <FileText className="w-5 h-5" />
//       case 'ez-chatbot': return <MessageSquare className="w-5 h-5" />
//       case 'ez-dashboard': return <LayoutDashboard className="w-5 h-5" />
//       case 'ez-design': return <Palette className="w-5 h-5" />
//       case 'ez-docs': return <Book className="w-5 h-5" />
//       case 'ez-grids': return <Grid className="w-5 h-5" />
//       case 'ez-landing-docs': return <Rocket className="w-5 h-5" />
//       case 'ez-marketplace': return <ShoppingCart className="w-5 h-5" />
//       case 'ez-newsletter': return <Mail className="w-5 h-5" />
//       case 'ez-nextui': return <Box className="w-5 h-5" />
//       case 'ez-notes': return <StickyNoteIcon className="w-5 h-5" />
//       case 'ez-portfolio': return <Briefcase className="w-5 h-5" />
//       case 'ez-red': return <Zap className="w-5 h-5" />
//       case 'ez-shots': return <Camera className="w-5 h-5" />
//       case 'ez-story': return <BookOpen className="w-5 h-5" />
//       case 'ez-tmp': return <List className="w-5 h-5" />
//       case 'ez-tmp2': return <List className="w-5 h-5" />
//       case 'ez-tmp3': return <List className="w-5 h-5" />
//       case 'ez-tmp4': return <List className="w-5 h-5" />
//       case 'ez-tmp5': return <List className="w-5 h-5" />
//       case 'ez-waitlist': return <Clock className="w-5 h-5" />
//       case 'quotesai': return <Quote className="w-5 h-5" />
//       case 'introduction': return <StickyNoteIcon className="w-5 h-5" />
//       default: return <ChevronRight className="w-5 h-5" />
//     }

//     // Function to render a badge for paid items
   
// }
// const renderPaidBadge = (isNew?: boolean) => {
//   if (isNew) {
//     return <span className="ml-2 bg-green-500 text-white text-[11px] font-semibold px-2 py-1 rounded-full">New</span>;
//   }
//   return null;


//   }

//   return (
//     <div className="mb-6">
//       <h2 className={`text-sm font-semibold text-gray-600 dark:text-white mb-2 ${isOpen ? '' : 'hidden'}`}>{title}</h2>
//       <nav>
//         {items.map((item) => (
//           <button
//             key={item.name}
//             onClick={() => onItemClick(item.name)}
//             className={`flex items-center w-full text-left px-3 py-2 rounded-lg transition-colors ${
//               selectedItem === item.name
//                 ? 'bg-primary text-primary-foreground'
//                 : 'text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800'
//             } ${isOpen ? '' : 'justify-center'}`}
//           >
//             {getIcon(item.name)}
           
//             <span className={`${isOpen ? 'ml-3' : 'hidden'} flex-grow`}>{item.name}</span> 
//             <span className={`${isOpen ? '' : 'hidden'}`}>{renderPaidBadge(item.isNew)}</span>
//           </button>
//         ))}
//       </nav>
//     </div>
//   )
// }










'use client'

import { useState, useEffect } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu, FileText, MessageSquare, LayoutDashboard, Palette, Book, Grid, Rocket, ShoppingCart, Mail, Box, Briefcase, Zap, Camera, BookOpen, List, Clock, Quote, ChevronRight, StickyNoteIcon, PaintBucketIcon, PuzzleIcon, Airplay } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

import EzBlog from '../(docs)/ez-blog/page'
import EzChatbot from '../(docs)/ez-chatbot/page'
import EzDocs from '../(docs)/ez-dashboard/page'
import DesignPage from '../(docs)/ez-design/page'
import GridsPage from '../(docs)/ez-grids/page'
import EzNextUI from '../(docs)/ez-landing-docs/page'
import MarketplacePage from '../(docs)/ez-marketplace/page'
import StoryPage from '../(docs)/ez-newsletter/page'
import NotesPage from '../(docs)/ez-notes/page'
import EzPortfolio from '../(docs)/ez-portfolio/page'
import EzRed from '../(docs)/ez-red/page'
import EzShots from '../(docs)/ez-shots/page'
import EzPage from '../(docs)/ez-tmp/page'
import EzPage2 from '../(docs)/ez-tmp2/page'
import EzPage3 from '../(docs)/ez-tmp3/page'
import EzPage4 from '../(docs)/ez-tmp4/page'
import EzPage5 from '../(docs)/ez-tmp5/page'
import EzWaitlist from '../(docs)/ez-waitlist/page'
import QuotesAI from '../(docs)/quotesai/page'
import EzLandingDocs from '../(docs)/ez-landing-docs/page'
import EzNextUII from '../(docs)/ez-nextui/page'
import IntroductionPage from '../(docs)/introduction/page'
import DesignfastPage from '../(docs)/designfast/page'
import Retro from '../(docs)/retro/page'
import NewsletterPage from '../(docs)/ez-newsletter/page'
import EasyStory from '../(docs)/ez-story/page'
import EzDashboard from '../(docs)/ez-dashboard/page'
import EzDocss from '../(docs)/ez-docs/page'
import EzAI from '../(docs)/ez-ai/page'

interface Item {
  name: string;
  isNew?: boolean;
  isPaid?: boolean;
}

const components: Item[] = [
  { name: 'introduction' },
  { name: 'ez-blog', isNew: true },
  { name: 'ez-chatbot' },
  { name: 'ez-dashboard' },
  { name: 'ez-design' },
  { name: 'ez-docs' },
  { name: 'ez-grids', isNew: true },
  { name: 'ez-landing-docs', isNew: true },
  { name: 'ez-marketplace' },
  { name: 'ez-newsletter', isNew: true },
  { name: 'ez-nextui' },
  { name: 'ez-notes', isNew: true },
  { name: 'ez-portfolio', isNew: true },
  { name: 'ez-red' },
  { name: 'ez-shots' },
  { name: 'ez-story', isNew: true },
  { name: 'ez-tmp', isNew: true },
  { name: 'ez-tmp2' },
  { name: 'ez-tmp3', isNew: true },
  { name: 'ez-tmp4', isNew: true },
  { name: 'ez-tmp5' },
  { name: 'ez-waitlist' },
  { name: 'quotesai' },
  { name: 'designfast'},
  { name: 'retro'},
  { name: 'ez-ai', isNew: true},
]

export default function TemplatePage() {
  const [selectedItem, setSelectedItem] = useState('introduction')
  const [isLargeScreen, setIsLargeScreen] = useState(true)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const handleItemClick = (item: string) => {
    setSelectedItem(item)
  }

  const renderComponent = (componentName: string) => {
    switch (componentName) {
      case 'introduction':
        return <IntroductionPage />
      case 'ez-blog':
        return <EzBlog />
      case 'ez-chatbot':
        return <EzChatbot />
      case 'ez-dashboard':
        return <EzDashboard />
      case 'ez-design':
        return <DesignPage />
      case 'ez-docs':
        return <EzDocss />
      case 'ez-grids':
        return <GridsPage />
      case 'ez-landing-docs':
        return <EzLandingDocs />
      case 'ez-marketplace':
        return <MarketplacePage />
      case 'ez-newsletter':
        return <NewsletterPage />
      case 'ez-nextui':
        return <EzNextUII />
      case 'ez-notes':
        return <NotesPage />
      case 'ez-portfolio':
        return <EzPortfolio />
      case 'ez-red':
        return <EzRed />
      case 'ez-shots':
        return <EzShots />
      case 'ez-story':
        return <EasyStory />
      case 'ez-tmp':
        return <EzPage />
      case 'ez-tmp2':
        return <EzPage2 />
      case 'ez-tmp3':
        return <EzPage3 />
      case 'ez-tmp4':
        return <EzPage4 />
      case 'ez-tmp5':
        return <EzPage5 />
      case 'ez-waitlist':
        return <EzWaitlist />
      case 'quotesai':
        return <QuotesAI />
      case 'designfast':
        return <DesignfastPage />
      case 'retro':
        return <Retro />
      case 'ez-ai':
          return <EzAI />
      default:
        return <div>Component not found</div>
    }
  }

  const getIcon = (name: string) => {
    switch (name) {
      case 'ez-blog': return <FileText className="mr-2 h-4 w-4" />
      case 'ez-chatbot': return <MessageSquare className="mr-2 h-4 w-4" />
      case 'ez-dashboard': return <LayoutDashboard className="mr-2 h-4 w-4" />
      case 'ez-design': return <Palette className="mr-2 h-4 w-4" />
      case 'ez-docs': return <Book className="mr-2 h-4 w-4" />
      case 'ez-grids': return <Grid className="mr-2 h-4 w-4" />
      case 'ez-landing-docs': return <Rocket className="mr-2 h-4 w-4" />
      case 'ez-marketplace': return <ShoppingCart className="mr-2 h-4 w-4" />
      case 'ez-newsletter': return <Mail className="mr-2 h-4 w-4" />
      case 'ez-nextui': return <Box className="mr-2 h-4 w-4" />
      case 'ez-notes': return <StickyNoteIcon className="mr-2 h-4 w-4" />
      case 'ez-portfolio': return <Briefcase className="mr-2 h-4 w-4" />
      case 'ez-red': return <Zap className="mr-2 h-4 w-4" />
      case 'ez-shots': return <Camera className="mr-2 h-4 w-4" />
      case 'ez-story': return <BookOpen className="mr-2 h-4 w-4" />
      case 'ez-tmp': return <List className="mr-2 h-4 w-4" />
      case 'ez-tmp2': return <List className="mr-2 h-4 w-4" />
      case 'ez-tmp3': return <List className="mr-2 h-4 w-4" />
      case 'ez-tmp4': return <List className="mr-2 h-4 w-4" />
      case 'ez-tmp5': return <List className="mr-2 h-4 w-4" />
      case 'ez-waitlist': return <Clock className="mr-2 h-4 w-4" />
      case 'quotesai': return <Quote className="mr-2 h-4 w-4" />
      case 'introduction': return <ChevronRight className="mr-2 h-4 w-4" />
      case 'designfast': return <PaintBucketIcon className="mr-2 h-4 w-4" />
      case 'retro': return <PuzzleIcon className="mr-2 h-4 w-4" />
      case 'ez-ai': return <Airplay className="mr-2 h-4 w-4" />
      default: return <ChevronRight className="mr-2 h-4 w-4" />
    }
  }

  const renderPaidBadge = (isNew?: boolean) => {
    if (isNew) {
      return <span className="ml-2 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">New</span>
    }
    return null
  }

  return (
    <div className="flex flex h-screen">
      {isLargeScreen ? (
        <>
       <ScrollArea className="w-64">
       <div className="p-4">
         <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
           Getting Started
         </h2>
         {components.map((item) => (
           <Button
             key={item.name}
             variant={selectedItem === item.name ? 'secondary' : 'ghost'}
             className="w-full justify-start"
             onClick={() => handleItemClick(item.name)}
           >
             {getIcon(item.name)}
             {item.name}
             {renderPaidBadge(item.isNew)}
           </Button>
         ))}
       </div>
     </ScrollArea>
     <div className="flex-1 overflow-auto">
       {renderComponent(selectedItem)}
     </div>
     </>
      ) : (
        <div className="flex flex-col flex-1 overflow-auto h-screen">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between px-4 py-2">
                <span className="flex items-center">
                  {getIcon(selectedItem)}
                  {selectedItem}
                </span>
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-screen max-h-[calc(100vh-200px)] overflow-auto h-screen">
              {components.map((item) => (
                <DropdownMenuItem key={item.name} onSelect={() => handleItemClick(item.name)}>
                  <span className="flex items-center w-full">
                    {getIcon(item.name)}
                    {item.name}
                    {renderPaidBadge(item.isNew)}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex-1 px-1 overflow-auto">
            {renderComponent(selectedItem)}
          </div>
        </div>
      )}
      {/* <footer className="py-4 px-6 bg-gray-100 dark:bg-gray-800">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          © 2024 Your Company. All rights reserved.
        </p>
      </footer> */}
    </div>
  )
}