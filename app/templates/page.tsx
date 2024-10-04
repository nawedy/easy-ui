'use client'

import { useState, useEffect } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu, FileText, MessageSquare, LayoutDashboard, Palette, Book, Grid, Rocket, ShoppingCart, Mail, Box, Briefcase, Zap, Camera, BookOpen, List, Clock, Quote, ChevronRight, StickyNoteIcon, PaintBucketIcon, PuzzleIcon, Airplay, CloudMoonRain } from 'lucide-react'
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
import EzBeautiful from '../(docs)/ez-beautiful/page'
import { ShadowInnerIcon } from '@radix-ui/react-icons'
import EzIndigo from '../(docs)/ez-indigo/page'

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
  { name: 'ez-beautiful', isNew: true},
  { name: 'ez-indigo', isNew: true},
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
      case 'ez-beautiful':
          return <EzBeautiful />
      case 'ez-indigo':
          return <EzIndigo />
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
      case 'ez-beautiful': return <ShadowInnerIcon className="mr-2 h-4 w-4" />
      case 'ez-indigo': return <CloudMoonRain className="mr-2 h-4 w-4" />
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