"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import AdBanner from "@/components/ad-banner"
import { BellRing, ClipboardList, Flag, Folder, StickyNote, Trophy } from "lucide-react"
import CreateNewComponent from "@/components/easyui/create-new"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { RotateCcw } from "lucide-react"
import { CopyIcon } from "@radix-ui/react-icons"
import LaunchPad from "@/components/easyui/launchpad"
import KeyButton from "@/components/easyui/key-button"
import SparkleButton from "@/components/easyui/sparkle-button"
import GlitchText from "@/components/easyui/glitch-text"
  
function GlitchTextComponent() {
  const [key, setKey] = React.useState(0); // State to trigger re-render

  return (
    <div className="flex flex-wrap justify-start gap-4 pb-10 max-w-full min-w-full px-0 lg:px-20">
      <div className="w-full sm:w-1/2 p-2 mt-3 space-y-4 lg:mt-5 md:lg-5">
        <CardTitle className="text-3xl tracking-tight leading-7">Glitch Text</CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">Glitch text animation with typing effect.</CardDescription>
      </div>
      
      <Tabs defaultValue="preview" className="relative mr-auto w-full z-50">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none  bg-transparent p-0 z-50">
            <TabsTrigger value="preview" className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none">
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none">
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="relative rounded-md" key={key}>
          <div className="flex items-center justify-center max-w-full mx-auto px-4 py-0.5 border rounded-lg h-[400px]">
            <Button onClick={() => setKey((prev) => prev + 1)} className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1" variant="ghost">
              <RotateCcw size={16} />
            </Button>
            {/* @ts-ignore */}
            <GlitchText text='Easy UI is Awesome' textSize='40px' fontWeight="600" />
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="flex flex-col space-y-4 ml-3 lg:ml-4 md:lg-3">
            <h2 className="font-semibold mt-12 scroll-m-20 border-b pb-2 text-2xl tracking-tight first:mt-0 leading-7">
              Installation
            </h2>
            <p className="font-semibold mt-5 tracking-tight leading-7">Step 1: Copy and paste the following code into your<span className="font-normal italic"> components/glitch-text.tsx</span></p>
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-sm">
              <button onClick={() => { 
                      const codeElement = document.getElementById('codeBlock');
                      const codeToCopy = codeElement ? codeElement.textContent : '';
                      // @ts-ignore
                      navigator.clipboard.writeText(codeToCopy).then(() => {
                        alert('Code copied to clipboard!');
                      });
                    }}
                    className="absolute right-0 top-0 z-10 m-4 flex items-center rounded-lg px-3 py-1 text-white" title="Copy code to clipboard">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 5C6.895 5 6 5.895 6 7v10c0 1.105.895 2 2 2h8c1.105 0 2-.895 2-2V7c0-1.105-.895-2-2-2H8zm0 0V3c0-1.105.895-2 2-2h4c1.105 0 2 .895 2 2v2m-6 4h4" />
                    </svg> */}
                    <CopyIcon className="text-black hover:text-gray-400 active:text-blue-700 h-4 dark:text-white" style={{ backdropFilter: 'blur(20px)' }} />
              </button>
              <pre className={`ml-2 py-2 pb-2 pl-2 font-sm min-h-[600px] lg:min-h-[600px] sm:min-h-[300px]`}>
  <code id="codeBlock" className="text-left language-js text-sm">
    {`"use client"

import React, { useEffect, useState } from "react"

interface GlitchTextProps {
  text: string;
  textSize: string;
  className?: string;
  fontWeight?: React.CSSProperties["fontWeight"];
}

export default function GlitchText({
  text,
  textSize,
  className = "",
  fontWeight = "normal",
}: GlitchTextProps) {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let currentIndex = 0;
    const fullText = text;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <div
      className={\`glitch-wrapper \${className} dark:text-white text-black\`}
      style={{ fontSize: textSize, fontWeight }}
    >
      <div className="glitch" data-text={displayedText}>
        {displayedText}
      </div>
      <style jsx>{\`
        .glitch-wrapper {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: transparent;
        }
        .glitch {
          position: relative;
          letter-spacing: 3px;
          z-index: 1;
        }
        .glitch:before,
        .glitch:after {
          display: block;
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.8;
        }
        .glitch:before {
          animation: glitch-it 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
            infinite;
          color: #00ffff;
          z-index: -1;
        }
        .glitch:after {
          animation: glitch-it 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
            both infinite;
          color: #ff00ff;
          z-index: -2;
        }
        @keyframes glitch-it {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          to {
            transform: translate(0);
          }
        }
      \`}</style>
    </div>
  )
}`}
  </code>
</pre>
                </div>
              </div>

              <div className="flex flex-col space-y-4 ml-3 lg:ml-4 md:lg-3">
              <p className="font-semibold mt-5 tracking-tight leading-7">Step 2: Update the import paths and run this code.</p>
                <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
               
                <button onClick={() => { 
                      const codeElement = document.getElementById('codeBlock2');
                      const copycode2 = codeElement ? codeElement.textContent : '';
                      if (copycode2) {
                        navigator.clipboard.writeText(copycode2).then(() => {
                          alert('Code copied to clipboard!');
                        });
                      }
                    }}
                    className="absolute right-0 top-0 z-10 m-4 flex items-center rounded-lg bg-transparent px-3 py-1 text-white" title="Copy code to clipboard">
                    <CopyIcon className="text-black hover:text-gray-400 active:text-blue-700 h-4 dark:text-white" />
              </button>
                 
                  <pre className="ml-2 py-2 pb-2 pl-2 font-sm"><code id="codeBlock2" className="text-left language-js text-sm"> 
{`
import GlitchEffect from '@/components/easyui/glitch-effect';
import React from 'react'

function Home() {
  return (
    <GlitchEffect text='Easy UI is Awesome' textSize='100px' fontWeight="500" />
  )
}

export default Home
`}
            {/* </div> */}
            </code></pre>
            </div>
          </div>

          

          {/* <div className="mt-5 px-4 ml-3 lg:ml-1 md:lg-3"> */}
      {/* <h2 className="text-2xl font-semibold mb-5 tracking-tight leading-7 border-b dark:border-gray-700 pb-2 scroll-m-20">Props</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
      <thead>
        <tr className="bg-gray-100 dark:bg-gray-900">
          <th className="border border-gray-300 px-4 py-2 dark:border-gray-700">Prop Name</th>
          <th className="border border-gray-300 px-4 py-2 dark:border-gray-700">Type</th>
          <th className="border border-gray-300 px-4 py-2 dark:border-gray-700">Description</th>
          <th className="border border-gray-300 px-4 py-2 dark:border-gray-700">Default Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">id</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">Number</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
            Unique identifier for each application.
          </td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">-</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">name</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">String</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
            Name of the application.
          </td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">-</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">icon</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">String</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
            URL or path to the application&apos;s icon image.
          </td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">-</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">category</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">String</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
            Category to which the application belongs.
          </td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">-</td>
        </tr>
      </tbody>
    </table> */}
    {/* </div> */}
        
        
        </TabsContent>
      </Tabs>
      
    {/* <div className="py-10 ml-3">
    <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">Credits</h2>
    <p className="leading-7 [&:not(:first-child)]:mt-6 tracking tight">Credit to <a href="https://github.com/vaunblu/lab/blob/main/src/app/create-new/page.tsx" className="underline italic font-semibold" target="_blank" rel="noopener noreferrer">@vaunblu</a> for the inspiration behind this component.</p>
    </div> */}
    </div>
  )
}

export default GlitchTextComponent
