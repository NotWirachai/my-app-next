import Test from "../test"

export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug && <Test id={params.slug}/>}</div>
  }