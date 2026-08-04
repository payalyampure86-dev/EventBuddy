import React, {useState} from "react";
import AdminSidebar from "../components/AdminSidebar";
import "./ManageRegistrations.css";


function ManageRegistrations(){

const [registrations,setRegistrations]=useState([

{
id:1,
user:"Payal Yampure",
event:"AI Workshop",
date:"25 Aug 2026",
status:"Confirmed"
},

{
id:2,
user:"Rahul Patil",
event:"Music Festival",
date:"10 Sep 2026",
status:"Pending"
}

]);


const deleteRegistration=(id)=>{

setRegistrations(
registrations.filter(
item=>item.id!==id
)
);

};



return(

<div className="manage-registration-layout">


<AdminSidebar/>


<div className="manage-registration-page">


<h1>
📝 Manage Registrations
</h1>


<p>
View all event registrations.
</p>



<div className="registration-table">


<table>

<thead>

<tr>

<th>User</th>
<th>Event</th>
<th>Date</th>
<th>Status</th>
<th>Action</th>

</tr>

</thead>


<tbody>


{
registrations.map(item=>(

<tr key={item.id}>


<td>{item.user}</td>

<td>{item.event}</td>

<td>{item.date}</td>


<td>

<span className="status">
{item.status}
</span>

</td>


<td>

<button
className="delete-btn"
onClick={()=>deleteRegistration(item.id)}
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


export default ManageRegistrations;