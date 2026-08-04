import React, {useState} from "react";
import AdminSidebar from "../components/AdminSidebar";
import "./ManageEvents.css";


function ManageEvents(){

const [events,setEvents] = useState([
{
id:1,
title:"AI Workshop",
category:"Technology",
date:"25 Aug 2026",
location:"Pune"
},
{
id:2,
title:"Music Festival",
category:"Music",
date:"10 Sep 2026",
location:"Mumbai"
}
]);


const deleteEvent=(id)=>{

setEvents(
events.filter(
event=>event.id!==id
)
);

};



return(

<div className="manage-event-layout">

<AdminSidebar/>


<div className="manage-event-page">


<h1>
📅 Manage Events
</h1>

<p>
Manage all platform events.
</p>



<div className="event-table">


<table>

<thead>

<tr>

<th>Title</th>
<th>Category</th>
<th>Date</th>
<th>Location</th>
<th>Action</th>

</tr>

</thead>



<tbody>

{
events.map(event=>(

<tr key={event.id}>

<td>{event.title}</td>

<td>{event.category}</td>

<td>{event.date}</td>

<td>{event.location}</td>


<td>

<button className="edit-btn">
Edit
</button>


<button 
className="delete-btn"
onClick={()=>deleteEvent(event.id)}
>
Delete
</button>


</td>


</tr>

))
}


</tbody>

</table>


</div>


</div>


</div>

)

}


export default ManageEvents;