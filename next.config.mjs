// import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

// With this:
import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['dev-to-uploads.s3.amazonaws.com', 'pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev', 'magicui.design'],
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withContentlayer(nextConfig);
