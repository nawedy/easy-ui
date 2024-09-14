
'use client'

import { useState, useEffect } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu, FileText, MessageSquare, LayoutDashboard, Palette, Book, Grid, Rocket, ShoppingCart, Mail, Box, Briefcase, Zap, Camera, BookOpen, List, Clock, Quote, ChevronRight, StickyNoteIcon, PaintBucketIcon, PuzzleIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

import EzBlog from '../(docs)/ez-blog/page'
import IntroductionPage from '../(docs)/introduction/page'
import CreateNewComponentt from '../(docs)/create-new-component/page'

interface Item {
  name: string;
  isNew?: boolean;
  isPaid?: boolean;
}

const components: Item[] = [
  { name: 'introduction' },
  { name: 'create-new', isNew: true },
]

export default function TemplatePage() {
  const [selectedItem, setSelectedItem] = useState('create-new')
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
      case 'create-new':
        return <CreateNewComponentt />
    //   case 'ez-chatbot':
    //     return <EzChatbot />
    //   case 'ez-dashboard':
    //     return <EzDocs />
    //   case 'ez-design':
    //     return <DesignPage />
    //   case 'ez-docs':
    //     return <EzDocs />
    //   case 'ez-grids':
    //     return <GridsPage />
    //   case 'ez-landing-docs':
    //     return <EzLandingDocs />
    //   case 'ez-marketplace':
    //     return <MarketplacePage />
    //   case 'ez-newsletter':
    //     return <NewsletterPage />
    //   case 'ez-nextui':
    //     return <EzNextUII />
    //   case 'ez-notes':
    //     return <NotesPage />
    //   case 'ez-portfolio':
    //     return <EzPortfolio />
    //   case 'ez-red':
    //     return <EzRed />
    //   case 'ez-shots':
    //     return <EzShots />
    //   case 'ez-story':
    //     return <EasyStory />
    //   case 'ez-tmp':
    //     return <EzPage />
    //   case 'ez-tmp2':
    //     return <EzPage2 />
    //   case 'ez-tmp3':
    //     return <EzPage3 />
    //   case 'ez-tmp4':
    //     return <EzPage4 />
    //   case 'ez-tmp5':
    //     return <EzPage5 />
    //   case 'ez-waitlist':
    //     return <EzWaitlist />
    //   case 'quotesai':
    //     return <QuotesAI />
    //   case 'designfast':
    //     return <DesignfastPage />
    //   case 'retro':
    //     return <Retro />
      default:
        return <div>Component not found</div>
    }
  }

  const getIcon = (name: string) => {
    switch (name) {
      case 'create-new': return <FileText className="mr-2 h-4 w-4" />
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
    </div>
  )
}