import dynamic from "next/dynamic"
import { useDispatch } from "react-redux";
import { setData } from "../state/slice/landingSlice";

const Page = dynamic(()=> import("../sources/Home"),{
  loading : ()=><div>Loading...</div>
});

export default function Home(props) {
  
  const dsp = useDispatch();
  
  if(props.landingData){
    dsp(setData(props.landingData))
  }

  return (
    <Page {...props}/>
    )
}

export const getStaticProps = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL_API}landing-page`)
              .then((res)=>res.json())
  
  return{
    props :  {
      landingData : res
    }
  }
}
