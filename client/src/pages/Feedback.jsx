import React,{useState} from "react";
import AdminSidebar from "../components/AdminSidebar";
import "./CommonPage.css";


function Feedback(){

const [feedback,setFeedback]=useState("");


return(

<div className="common-layout">

<AdminSidebar />


<div className="common-page">


<h1>⭐ Feedback</h1>


<div className="common-card">


<textarea

placeholder="Write your feedback..."

value={feedback}

onChange={(e)=>setFeedback(e.target.value)}

/>


<button>
Submit Feedback
</button>


</div>


</div>


</div>

)

}

export default Feedback;