"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import AdBanner from "@/components/ad-banner"
import { Icons } from "@/components/icons"

function StoryPage() {
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-10">
     <div className="w-full sm:w-1/2 p-4 space-y-4 mt-0 lg:mt-5 md:lg-5">
        <CardTitle className="text-4xl">Easy Story</CardTitle>
        <CardDescription className="text-lg">
          Easy Template for Telling a Small Story
        </CardDescription>
      </div>
      
      <div className="w-full sm:w-1/2 p-4 border rounded-lg ">
        <video muted loop className="w-full h-auto" autoPlay>
          <source
            src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-story.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="sm:w-1/2 p-4">
        <div className="flex justify-between">
        <Button
            className="w-1/2 px-4 py-4 mr-2 group"
            type="submit"
            onClick={() => window.open("https://premium.easyui.pro/pricing-section", "_blank")}
          >
            Buy Now <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide ml-1 lucide-arrow-right size-4 transition-all duration-300 ease-out group-hover:translate-x-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Button>
          <Button
            className="w-1/2 px-4 py-4 border shadow-sm ml-2 hover:bg-accent hover:text-accent-foreground "
            variant="outline"
            type="submit"
            onClick={() =>
              window.open("https://easy-story.vercel.app/", "_blank")
            }
          >
            Live Preview
            <Icons.externalLink className="ml-1 p-1" />{" "}
          </Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold pt-10">
            Why Should I Use This Template?
          </h2>
          <p>
            Looking for a simple yet powerful website template to tell a small
            story? Our template is designed with the latest tech stack, offering
            a sleek, modern design that’s easy to use and configure. Here’s why
            this template is perfect for you:
          </p>
          <ul className="list-disc pl-5 space-y-2 ">
            <li>✅ Save 100+ hours of work </li>
            <li>✅ No need to learn advanced animations</li>
            <li>✅ Easy to configure and change</li>
            <li>✅ 1-click download and setup</li>
            <li>✅ 5 minutes to update the text and images</li>
            <li>✅ Deploy live to Vercel</li>
          </ul>
          <h3 className="text-xl font-semibold">Features</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Header Section</li>
            <li>Hero Section</li>
            <li>Pricing Section</li>
            <li>Testimonial Section</li>
            <li>Call To Action Section</li>
            <li>Footer Section</li>
            <li>Mobile Responsive Navbar</li>
          </ul>
          <h3 className="text-xl font-semibold">Tech Stack</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Shadcn UI</li>
          </ul>
          <h3 className="text-xl font-semibold">Quick Setup</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              1-Click Download and Setup: Get started instantly with our easy
              setup process.
            </li>
            <li>
              5 Minutes to Update: Quickly update text and images to match your
              brand.
            </li>
            <li>
              Deploy to Vercel: Easily deploy your site live with Vercel’s
              seamless integration.
            </li>
          </ul>
          <p>
            Get started today and bring your website to life with minimal effort
            and maximum impact!
          </p>
        </div>
      </div>
    </div>
  )
}

export default StoryPage
