import { useLocation } from "react-router-dom";
import CommentMain from "./CommentMain";
import Location from "./Location"
// import FieldMain from "./FieldMain";
// import Field  from "./Field";
import Info from "./info";


export default function Detail(){
    const location = useLocation();
    const {data} =  location.state
    return(
        <>
        
        {/* <FieldMain/>
        <Field/> */}
        <Info data={data}/>
        <Location/>
        <CommentMain data={data}/>
        </>
    );
}

