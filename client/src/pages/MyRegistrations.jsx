import React, {useEffect, useState} from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "./MyRegistrations.css";

function MyRegistrations(){

const [events,setEvents]=useState([]);

const user = JSON.parse(localStorage.getItem("user"));

useEffect(()=>{

if(user?._id){
fetchRegistrations();
}
else{
console.log("User id not found");
}

},[]);


const fetchRegistrations = async()=>{

try{
const res = await axios.get(
`http://localhost:5000/api/registrations/${user?._id}`
);

setEvents(res.data);

}
catch(error){

console.log(error);

}

};


return(
<div className="registration-layout">

<Sidebar/>

<div className="registration-page">

<h1>📝 My Registrations</h1>

<div className="registration-list">

{
events.length===0 ?

<h2>No Registered Events</h2>

:

events.map(event=>(

<div className="registration-card" key={event._id}>

<h2>{event.title}</h2>

<p>📅 {event.date}</p>

<p>📍 {event.location}</p>

</div>

))

}

</div>

</div>

</div>
)

}

export default MyRegistrations;