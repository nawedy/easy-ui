import dynamic from 'next/dynamic'

const DisqusComments = dynamic(() => import('@/components/DisqusComments'), {
  ssr: false,
})

// @ts-ignore
export default function Comments({ post }) {
  return (
    <DisqusComments
      url={`https://easyui.pro/posts/${post._raw.flattenedPath}`}
      identifier={post._id}
      title={post.title}
    />
  )
}