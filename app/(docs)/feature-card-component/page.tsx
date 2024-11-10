"use client"

import React, { useState } from "react"
import { Check, Copy, RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import FeatureCard from "@/components/easyui/feature-card"

export default function FeatureCardComponent() {
  const [key, setKey] = useState(0)
  const [copied1, setCopied1] = useState(false)
  const [copied2, setCopied2] = useState(false)

  const handleCopy = (
    id: string,
    setCopied: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const codeElement = document.getElementById(id)
    const codeToCopy = codeElement ? codeElement.textContent : ""
    if (codeToCopy) {
      navigator.clipboard.writeText(codeToCopy).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }
  }


//   const props = [
//     {
//       name: "initialName",
//       type: "string",
//       default: '""',
//       description: "The initial name to be displayed in the signature field.",
//     },
//     {
//       name: "fontFamilies",
//       type: "FontFamily[]",
//       default: "defaultFontFamilies",
//       description: "An array of font family options for the signature.",
//     },
//     {
//       name: "signatureStyles",
//       type: "SignatureStyle[]",
//       default: "defaultSignatureStyles",
//       description: "An array of signature style options.",
//     },
//     {
//       name: "colors",
//       type: "string[]",
//       default: "defaultColors",
//       description: "An array of color options for the signature.",
//     },
//     {
//       name: "initialFontFamily",
//       type: "string",
//       default: "defaultFontFamilies[0].value",
//       description: "The initial font family to be used for the signature.",
//     },
//     {
//       name: "initialSignatureStyle",
//       type: "string",
//       default: "defaultSignatureStyles[0].value",
//       description: "The initial signature style to be applied.",
//     },
//     {
//       name: "initialColor",
//       type: "string",
//       default: "defaultColors[1]",
//       description: "The initial color to be used for the signature.",
//     },
//     {
//       name: "initialSize",
//       type: "number",
//       default: "48",
//       description: "The initial size of the signature text.",
//     },
//     {
//       name: "minSize",
//       type: "number",
//       default: "24",
//       description: "The minimum allowed size for the signature text.",
//     },
//     {
//       name: "maxSize",
//       type: "number",
//       default: "72",
//       description: "The maximum allowed size for the signature text.",
//     },
//     {
//       name: "placeholder",
//       type: "string",
//       default: '"Enter your name"',
//       description: "The placeholder text for the signature input field.",
//     },
//     {
//       name: "signButtonText",
//       type: "string",
//       default: '"SIGN"',
//       description: "The text to be displayed on the sign button.",
//     },
//     {
//       name: "copiedText",
//       type: "string",
//       default: '"Copied!"',
//       description: "The text to be displayed when the signature is copied.",
//     },
//     {
//       name: "copyText",
//       type: "string",
//       default: '"Copy Signature"',
//       description: "The text to be displayed on the copy button.",
//     },
//     {
//       name: "signedByText",
//       type: "string",
//       default: '"SIGNED BY,"',
//       description: "The text to be displayed above the signature.",
//     },
//     {
//       name: "onSign",
//       type: "(signature: string) => void",
//       default: "undefined",
//       description: "A callback function to be called when the signature is created.",
//     },
//     {
//       name: "onCopy",
//       type: "(signature: string) => void",
//       default: "undefined",
//       description: "A callback function to be called when the signature is copied.",
//     },
//     {
//       name: "className",
//       type: "string",
//       default: '""',
//       description: "Additional CSS classes to be applied to the component.",
//     },
//     {
//       name: "showControls",
//       type: "boolean",
//       default: "true",
//       description: "Whether to show the control buttons (undo, redo, etc.).",
//     },
//     {
//       name: "showColorPalette",
//       type: "boolean",
//       default: "true",
//       description: "Whether to show the color palette for signature customization.",
//     },
//     {
//       name: "showFontSelector",
//       type: "boolean",
//       default: "true",
//       description: "Whether to show the font selector for signature customization.",
//     },
//     {
//       name: "showStyleSelector",
//       type: "boolean",
//       default: "true",
//       description: "Whether to show the style selector for signature customization.",
//     },
//     {
//       name: "showSizeSlider",
//       type: "boolean",
//       default: "true",
//       description: "Whether to show the size slider for signature customization.",
//     },
//     {
//       name: "animationDuration",
//       type: "number",
//       default: "2000",
//       description: "The duration of the signature animation in milliseconds.",
//     },
//     {
//       name: "undoLimit",
//       type: "number",
//       default: "10",
//       description: "The maximum number of undo steps allowed.",
//     },
//     {
//       name: "backgroundColor",
//       type: "string",
//       default: '"transparent"',
//       description: "The background color of the signature component.",
//     },
//     {
//       name: "signButtonColor",
//       type: "string",
//       default: '"black"',
//       description: "The color of the sign button.",
//     },
//     {
//       name: "signButtonTextColor",
//       type: "string",
//       default: '"white"',
//       description: "The color of the text on the sign button.",
//     },
//   ]


  const codeString = `export default function FeatureCard() {
    return (
      <div className="mx-auto flex h-[399px] w-full max-w-[343px] flex-col overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow-md sm:h-[310px] sm:max-w-[510px]">
        <div className="flex grow flex-col p-4 sm:p-6">
          <div className="mb-4 grid grow grid-cols-1 gap-4 sm:mb-4 sm:grid-cols-3 sm:gap-6">
            {/* Card 1 */}
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-transparent sm:-rotate-2">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl bg-white  dark:bg-black p-3 transition-colors duration-300 group-hover:bg-opacity-90 sm:p-4">
                <div className="size-10 rounded-full bg-gradient-to-r from-green-300 to-yellow-300 sm:size-14" />
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="h-1.5 w-20 rounded-full bg-gray-300 sm:h-2 sm:w-24" />
                  <div className="h-1.5 w-24 rounded-full bg-gray-100 sm:h-2 sm:w-28" />
                </div>
              </div>
            </div>
  
            {/* Card 2 */}
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white dark:bg-black dark:border-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-transparent">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue-400 via-teal-500 to-green-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl bg-white dark:bg-black p-3 transition-colors duration-300 group-hover:bg-opacity-90 sm:p-4">
                <div className="size-10 rounded-full bg-gradient-to-r from-green-300 to-orange-300 sm:size-14" />
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="h-1.5 w-20 rounded-full bg-gray-300 sm:h-2 sm:w-24" />
                  <div className="h-1.5 w-24 rounded-full bg-gray-100 sm:h-2 sm:w-28" />
                </div>
              </div>
            </div>
  
            {/* Card 3 */}
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white dark:bg-black dark:border-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-transparent sm:rotate-2">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl bg-white dark:bg-black p-3 transition-colors duration-300 group-hover:bg-opacity-90 sm:p-4">
                <div className="size-10 rounded-full bg-gradient-to-r from-pink-300 to-yellow-300 sm:size-14" />
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="h-1.5 w-20 rounded-full bg-gray-300 sm:h-2 sm:w-24" />
                  <div className="h-1.5 w-24 rounded-full bg-gray-100 sm:h-2 sm:w-28" />
                </div>
              </div>
            </div>
          </div>
  
          <div className="border-t border-gray-200 dark:border-gray-700">
            <h2 className=" text-lg font-bold sm:mt-2 sm:text-xl ">Social</h2>
            <p className="text-xs text-gray-500 sm:text-sm">Write once, share with your friends</p>
          </div>
        </div>
      </div>
    )
}
`

  return (
    <div className="flex flex-wrap justify-start gap-4 pb-10 max-w-full min-w-full px-0 lg:px-20">
      <div className="w-full sm:w-1/2 p-2 mt-3 space-y-4 lg:mt-5 md:lg-5">
        <CardTitle className="text-3xl tracking-tight leading-7">
          Feature Card
        </CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">
            A sleek, responsive feature card showcasing interactive features with hover effects and gradient accents.
        </CardDescription>
      </div>

      <Tabs defaultValue="preview" className="relative mr-auto w-full z-0">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none bg-transparent p-0 z-50">
            <TabsTrigger
              value="preview"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="relative rounded-md" key={key}>
          <div className="flex items-center justify-center max-w-full mx-auto px-4 py-0.5 border rounded-lg h-auto p-20">
            <Button
              onClick={() => setKey((prev) => prev + 1)}
              className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1"
              variant="ghost"
            >
              <RotateCcw size={16} />
            </Button>
            <div className="p-5">
              <FeatureCard />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="flex flex-col space-y-4 ml-3 lg:ml-4 md:lg-3">
            <h2 className="font-semibold mt-12 scroll-m-20 border-b pb-2 text-2xl tracking-tight first:mt-0 leading-7">
              Installation
            </h2>
            <p className="font-semibold mt-5 tracking-tight leading-7">
              Step 1: Copy and paste the following code into your
              <span className="font-normal italic">
                {" "}
                components/easyui/feature-card.tsx
              </span>
            </p>
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-sm">
              <button
                onClick={() => handleCopy("codeBlock", setCopied1)}
                className="absolute right-0 top-0 z-10 m-4 flex items-center rounded-lg px-3 py-1 text-white"
                title="Copy code to clipboard"
              >
                {copied1 ? (
                  <Check className="text-green-500 h-4 w-4" />
                ) : (
                  <Copy className="text-black hover:text-gray-400 active:text-blue-700 h-4 w-4 dark:text-white" />
                )}
              </button>
              <pre className="ml-2 py-2 pb-2 pl-2 font-sm min-h-[600px] lg:min-h-[600px] sm:min-h-[300px]">
                <code id="codeBlock" className="text-left language-js text-sm">
                  {codeString}
                </code>
              </pre>
            </div>
          </div>

          <div className="flex flex-col space-y-4 ml-3 lg:ml-4 md:lg-3">
            <p className="font-semibold mt-5 tracking-tight leading-7">
              Step 2: Use the FireflyButton component in your desired page or
              component:
            </p>
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => handleCopy("codeBlock2", setCopied2)}
                className="absolute right-0 top-0 z-10 m-4 flex items-center rounded-lg bg-transparent px-3 py-1 text-white"
                title="Copy code to clipboard"
              >
                {copied2 ? (
                  <Check className="text-green-500 h-4 w-4" />
                ) : (
                  <Copy className="text-black hover:text-gray-400 active:text-blue-700 h-4 w-4 dark:text-white" />
                )}
              </button>

              <pre className="ml-2 py-2 pb-2 pl-2 font-sm">
                <code id="codeBlock2" className="text-left language-js text-sm">
                  {`import FeatureCard from '@/components/easyui/feature-card';
import React from 'react'

function MyComponent() {

  return (
    <FeatureCard />
  )
}

export default MyComponent
`}
                </code>
              </pre>
            </div>
          </div>
        </TabsContent>
        {/* <TabsContent value="props" className="relative rounded-md">
          <div className="w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Default</TableHead>
                  <TableHead className="min-w-[300px]">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {props.map((prop) => (
                  <TableRow key={prop.name}>
                    <TableCell className="font-medium">{prop.name}</TableCell>
                    <TableCell>{prop.type}</TableCell>
                    <TableCell>{prop.default}</TableCell>
                    <TableCell>{prop.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent> */}
      </Tabs>
    </div>
  )
}
