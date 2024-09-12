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
    domains: ['dev-to-uploads.s3.amazonaws.com'],
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withContentlayer(nextConfig);
