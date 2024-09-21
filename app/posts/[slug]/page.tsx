// import { format, parseISO } from 'date-fns'
// import { allPosts } from 'contentlayer/generated'
// import { getMDXComponent } from 'next-contentlayer/hooks'

// export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

// export const generateMetadata = ({ params }) => {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
//   return { title: post.title }
// }

// const PostLayout = ({ params }: { params: { slug: string } }) => {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

//   const Content = getMDXComponent(post.body.code)

//   return (
//     <article className="py-8 mx-auto max-w-xl">
//       <div className="mb-8 text-center">
//         <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
//           {format(parseISO(post.date), 'LLLL d, yyyy')}
//         </time>
//         <h1>{post.title}</h1>
//       </div>
//       <Content />
//     </article>
//   )
// }

// export default PostLayout



// import { format, parseISO } from 'date-fns'
// import { allPosts } from 'contentlayer/generated'
// import { getMDXComponent } from 'next-contentlayer/hooks'
// import { notFound } from 'next/navigation'
// import { estimateReadingTime } from '@/lib/blog-utils'
// import PostBody from './PostBody'
// import RelatedPosts from './RelatedPosts'
// import ShareButtons from '@/components/ShareButtons'
// import MDXImage from '@/components/MDXImage'

// export const generateStaticParams = async () => 
//   allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

// export const generateMetadata = ({ params }) => {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
//   if (!post) return {}

//   return { 
//     title: post.title,
//     description: post.description,
//     openGraph: {
//       title: post.title,
//       description: post.description,
//       type: 'article',
//       publishedTime: post.date,
//       url: `https://easyui.pro/posts/${params.slug}`,
//       images: [{ url: post.coverImage || '/eztmp1-img.png' }],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: post.title,
//       description: post.description,
//       images: [post.coverImage || '/eztmp1-img.png'],
//     },
//   }
// }

// export default function PostPage({ params }: { params: { slug: string } }) {
//   console.log('Params:', params);
//   console.log('All posts:', allPosts);
  
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
//   console.log('Found post:', post);
  
//   if (!post) {
//     console.log('Post not found, returning 404');
//     notFound()
//   }

//   const Content = getMDXComponent(post.body.code)

//   const components = {
//     img: MDXImage as any,
//     // You can add other custom components here
//   }

//   return (
//     <article className="py-8 mx-auto max-w-xl">
//       <div className="mb-8 text-center">
//         <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
//           {format(parseISO(post.date), 'LLLL d, yyyy')}
//         </time>
//         <h1>{post.title}</h1>
//         <p>Estimated reading time: {estimateReadingTime(post.body.raw)} minutes</p>
//       </div>
//       <PostBody>
//         <Content components={components} />
//       </PostBody>
//       <ShareButtons post={post} />
//       <RelatedPosts currentPost={post} />
//     </article>
//   )
// }






// import { format, parseISO } from 'date-fns'
// import { allPosts } from 'contentlayer/generated'
// import { getMDXComponent } from 'next-contentlayer/hooks'
// import { notFound } from 'next/navigation'
// import { estimateReadingTime } from '@/lib/blog-utils'
// import Image from 'next/image'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// // import { Separator } from "@/components/ui/separator"
// import { Clock, Calendar, Share2 } from 'lucide-react'
// import ShareButtons from '@/components/ShareButtons'
// import { Separator } from '@/components/ui/separator'

// export const generateStaticParams = async () => 
//   allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

// // @ts-ignore
// export const generateMetadata = ({ params }) => {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
//   if (!post) return {}

//   return { 
//     title: post.title,
//     description: post.description,
//     openGraph: {
//       title: post.title,
//       description: post.description,
//       type: 'article',
//       publishedTime: post.date,
//       url: `https://easyui.pro/posts/${params.slug}`,
//       images: [{ url: post.coverImage || '/eztmp1-img.png' }],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: post.title,
//       description: post.description,
//       images: [post.coverImage || '/eztmp1-img.png'],
//     },
//   }
// }

// export default function PostPage({ params }: { params: { slug: string } }) {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  
//   if (!post) {
//     notFound()
//   }

//   const Content = getMDXComponent(post.body.code)

//   const shareUrl = `https://easyui.pro/posts/${post._raw.flattenedPath}`

//   const components = {
//     // @ts-ignore
//     img: (props) => (
//       <Image
//         {...props}
//         width={700}
//         height={350}
//         className="rounded-lg my-8"
//         alt={props.alt || "Blog post image"}
//       />
//     ),
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-950 ">
//       <article className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden dark:text-white dark:bg-black  ">
//       <div className="px-6 py-8 sm:px-8 sm:py-8 ">
//         <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between mb-8">
//             <div className="flex items-center space-x-4">
//               <Avatar className="w-12 h-12 sm:w-14 sm:h-14">
//                 <AvatarImage src="/avatar.png" alt="Author" />
//                 <AvatarFallback>AU</AvatarFallback>
//               </Avatar>
//               <div>
//                 <p className="text-lg font-semibold">John Doe</p>
//                 <p className="text-sm text-gray-500">Author</p>
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-500">
//               <div className="flex items-center mb-2 sm:mb-0">
//                 <Calendar className="w-4 h-4 mr-2" />
//                 <time dateTime={post.date}>
//                   {format(parseISO(post.date), 'LLLL d, yyyy')}
//                 </time>
//               </div>
//               <div className="flex items-center">
//                 <Clock className="w-4 h-4 mr-2" />
//                 <span>{estimateReadingTime(post.body.raw)} min read</span>
//               </div>
//             </div>
//           </div>
//           <h1 className="text-4xl font-bold mb-6 py-5">{post.title}</h1>
//           <div className="flex flex-wrap gap-2 mb-8">
//             {post.tags && post.tags.map((tag) => (
//               <Badge key={tag} variant="secondary">{tag}</Badge>
//             ))}
//           </div>
//           <Separator className="my-8" />
//           <div className="prose prose-lg max-w-none">
//             <Content components={components} />
//           </div>
//           <Separator className="my-8" />
//           <div className="flex justify-between items-center">
//           <ShareButtons title={post.title} url={shareUrl} />
            
//             <div className="flex space-x-4">
//               {/* Add your social media share buttons here */}
//             </div>
//           </div>
//         </div>
//       </article>
//       <Card className="max-w-3xl mx-auto mt-12">
//         <CardContent className="p-6">
//           <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
//           {/* Add your RelatedPosts component here */}
//         </CardContent>
//       </Card>
//     </div>
//   )
// }












import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import { estimateReadingTime } from '@/lib/blog-utils'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'
import { Clock, Calendar, ChevronRight } from 'lucide-react'
import ShareButtons from '@/components/ShareButtons'
import { Button } from '@/components/ui/button'
import PostBody from './PostBody'
import { Mdx } from '@/components/mdx-components'

export const generateStaticParams = async () => 
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) return {}

  return { 
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://easyui.pro/posts/${params.slug}`,
      images: [{ url: post.coverImage || '/eztmp1-img.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.coverImage || '/eztmp1-img.png'],
    },
  }
}

const components = {
  img: (props: any) => (
    <Image
      {...props}
      width={700}
      height={350}
      className="rounded-lg my-8"
      alt={props.alt || "Blog post image"}
    />
  ),
}

function extractHeadings(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2],
      id: match[2].toLowerCase().replace(/\s+/g, '-')
    });
  }

  return headings;
}

const TableOfContents = ({ headings }: { headings: { id: string; text: string; level: number }[] }) => (
  <nav className="space-y-2">
    {headings.map(({ id, text, level }) => (
      <a
        key={id}
        href={`#${id}`}
        className={`block text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200 dark:text-gray-400 dark:hover:text-purple-400 ${
          level === 2 ? 'font-semibold' : 'pl-4'
        }`}
      >
        {text}
      </a>
    ))}
  </nav>
);

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  
  if (!post) {
    notFound()
  }

  const Content = getMDXComponent(post.body.code)
  const shareUrl = `https://easyui.pro/posts/${post._raw.flattenedPath}`
  const headings = extractHeadings(post.body.raw)

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row">
          <main className="w-full md:flex-1">
            <article className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
              <div className="px-6 py-8 sm:px-8 sm:py-8">
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12 sm:w-14 sm:h-14">
                      <AvatarImage src="/avatar.png" alt="Author" />
                      <AvatarFallback className='dark:bg-gray-300 dark:text-black'>KM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-semibold dark:text-white">Kathan Mehta</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Author</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <time dateTime={post.date}>
                        {format(parseISO(post.date), 'LLLL d, yyyy')}
                      </time>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{estimateReadingTime(post.body.raw)} min read</span>
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl font-bold mb-6 py-5 dark:text-white" style={{ letterSpacing: '-0.05em' }}>{post.title}</h1>
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags && post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className='dark:bg-gray-200 text-black'>{tag}</Badge>
                  ))}
                </div>
                <Separator className="my-8" />
                <PostBody>
                  <Content components={components} />
                </PostBody>
                <Separator className="my-8" />
                <div className="flex justify-between items-center">
                  <ShareButtons title={post.title} url={shareUrl} />
                  <div className="flex space-x-4">
                    {/* Add your social media share buttons here */}
                  </div>
                </div>
              </div>
            </article>
          </main>
          <aside className="w-full md:w-1/4 mt-8 md:mt-0 md:pl-8">
            <div className="space-y-8 sticky top-8">
              {/* <Card className="bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Table of Contents</h2>
                  <TableOfContents headings={headings} />
                </CardContent>
              </Card> */}
              <Card className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold mb-4 tracking-tight">Want to save time? Get beautifully designed website templates with Easy UI Premium.</h3>
                  <p className="text-md mb-6 opacity-90 font-normal tracking-tight">30+ beautiful sections and templates built with React, Typescript, Tailwind CSS, and Framer Motion.</p>
                  <a href="https://premium.easyui.pro/pricing-section" target="_blank" rel="noopener noreferrer" className="inline-block group">
                    <Button className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-200 font-bold py-2 px-6 rounded-full shadow-md hover:shadow-lg tracking-tight">
                      Get Started <ChevronRight className="inline ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>  )
}
