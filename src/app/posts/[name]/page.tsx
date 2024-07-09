
export default function PostDetails({params}:{params: {name: string}}) {
  return (
    <div>this post belongs to {params.name}</div>
  )
}
