import dynamic from "next/dynamic"

const Page = dynamic(()=> import("../sources/Home"),{
  loading : ()=><div>Loading...</div>
});

export default function Home(props) {
  return (
    <Page {...props}/>
  )
}
