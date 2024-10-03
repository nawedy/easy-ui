"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FlipHorizontal2, FlipHorizontalIcon } from "lucide-react"
import { useTheme } from "next-themes"

interface EasyHeroProps {
  title: string
  subtext: string
}

// @ts-ignore
const EasyHero: React.FC<EasyHeroProps> = ({ title, subtext, heroimage }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setIsFlipping(true)
    setTimeout(() => {
      setIsFlipping(false)
      setTheme(theme === "dark" ? "light" : "dark")
    }, 1000) // Wait for flip animation to finish before toggling theme
  }

  const flipVariant = {
    flipped: {
      rotateY: 90,
      scale: [0.4, 0.4, 0.4, 0.4],
      boxShadow: [
        "none",
        "1.8px 50.7px 51.4px -3.2px hsl(0 0% 0% / 0.32)",
        "1.8px 50.7px 51.4px -3.2px hsl(0 0% 0% / 0.32)",
        "none",
      ],
      transition: { duration: 0.8 },
    },
    notFlipped: {
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <>
      <motion.div
        className="absolute inset-0 size-full"
        style={{
          backgroundImage:
            theme === "dark"
              ? "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)" // gray-900 for dark mode
              : "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)", // light gray for light mode
          backgroundSize: "24px 24px",
        }}
        animate={
          isFlipping ? { opacity: 1, scale: 1.5 } : { opacity: 0.5, scale: 1 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <motion.div
        className="min-h-auto before:mask-[image:radial-gradient(ellipse_50%_50%_at_50%_50%,_#000_60%,_transparent_100%)] relative flex flex-col items-center justify-center bg-white px-2 text-gray-900 before:absolute before:inset-0 before:bg-[radial-gradient(#e5e7eb_1px,_transparent_1px)] before:bg-[length:16px_16px] dark:bg-black dark:text-white dark:before:bg-[radial-gradient(#1a202c_1px,_transparent_1px)]"
        variants={flipVariant}
        animate={isFlipping ? "flipped" : "notFlipped"}
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center "
          style={{
            backgroundImage: `url(${
              theme === "dark" ? "dark-theme-bg.jpg" : "light-theme-bg.jpg"
            })`,
          }}
        ></div>
        <main className="max-w-6xl justify-center mx-auto text-center py-2 relative z-10 flex flex-col items-center px-7">
          <motion.img src="/star-dark.svg" alt="Star" className="size-20 absolute -bottom-20 left-0 hidden lg:block" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} />
          <motion.img src="/star-dark.svg" alt="Star" className="size-20 absolute -top-20 right-0 hidden lg:block" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} />

          {theme === "dark" && (
            <>
              <motion.img src="/star-light.svg" alt="Star" className="size-20 absolute -bottom-20 left-0 hidden lg:block" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} />
              <motion.img src="/star-light.svg" alt="Star" className="size-20 absolute -top-20 right-0 hidden lg:block" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} />
            </>
          )}

          <header className="mb-8 text-center">
            <h1 className="relative mx-0 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-[63.5rem] text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40">
              {title}
            </h1>
            <div className="absolute -top-20 right-5 lg:left-2 ml-3  p-2 rounded-md dark:bg-transparent hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-50 w-[40px] hidden lg:block">
          <button onClick={toggleTheme} className="flex items-center justify-center">
            {theme === "dark" ? (
              <FlipHorizontalIcon className="size-6" />
            ) : (
              <FlipHorizontal2 className="size-6" />
            )}
            <span className="sr-only">Toggle Theme</span>
          </button>
        </div>  
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="size-24 absolute -left-0 lg:-left-8 -top-9  transform rotate-39 fill-current ml-10 lg:ml-10 md:ml-12 hidden lg:block "
            >
              <g>
                <path
                  d="M17.418.016c.036.004.071.005.107.011.979.13 1.738.959 1.738 1.973v9.704a2 2 0 0 1-4 0V6.385c-4.224 4.317-6.945 9.85-7.78 15.943-1.029 7.506.929 14.955 5.508 20.987A28.2 28.2 0 0 0 27.42 53.316c1.111-8.229 5.362-16.031 12.483-21.437 10.258-7.788 18.323-6.538 22.112-3.101 3.889 3.527 4.116 9.518.581 15.262-1.712 2.782-4.223 5.44-7.464 7.9-6.883 5.225-15.387 7.457-23.949 6.285l-.055-.007a28.202 28.202 0 0 0 5.754 16.57c4.579 6.031 11.232 9.919 18.734 10.946 7.503 1.027 14.956-.929 20.987-5.507l.001-.001c2.845-2.159 5.024-4.451 6.476-6.811a2 2 0 0 1 3.406 2.096c-1.712 2.783-4.223 5.441-7.464 7.901l-.004.003c-6.882 5.223-15.385 7.453-23.944 6.281-8.561-1.172-16.153-5.608-21.377-12.49-4.491-5.915-6.659-12.896-6.57-19.798-6.889-1.848-12.939-5.9-17.321-11.673-4.316-5.685-6.59-12.477-6.59-19.492 0-1.478.101-2.967.305-4.456C4.447 15.02 7.419 8.865 12.019 4h-4.46a2 2 0 0 1 0-4h9.704c.053 0 .103.012.155.016zm35.295 48.738c2.845-2.16 5.024-4.451 6.476-6.81 1.283-2.085 1.925-4.122 1.925-5.911 0-1.721-.595-3.212-1.787-4.293-2.864-2.598-9.233-2.577-17.008 3.324-6.339 4.812-10.082 11.791-10.983 19.128 7.31 1.103 15.039-.627 21.377-5.438z"
                  transform="matrix(2.81 0 0 2.81 1.407 1.407)"
                />
              </g>
            </svg>
           
          </header>
          <p className="mb-4 leading-7 tracking-tight font-semibold max-w-full sm:max-w-xl md:max-w-[27.5rem] lg:max-w-[31.5rem] text-black dark:text-white text-xl">
            {subtext}
          </p>
        </main>
        {/* <div className="absolute top-5 right-5 lg:right-20 p-2 rounded-md dark:bg-black hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-50">
          <button onClick={toggleTheme} className="flex items-center justify-center">
            {theme === "dark" ? (
              <FlipHorizontalIcon className="h-6 w-6" />
            ) : (
              <FlipHorizontal2 className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle Theme</span>
          </button>
        </div> */}
      </motion.div>
    </>
  )
}
export default EasyHero
