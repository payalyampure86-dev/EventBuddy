import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import "./UserNotifications.css";


function UserNotifications(){

const [notifications,setNotifications] = useState([

{
id:1,
title:"Registration Confirmed",
message:"Your registration for AI Workshop is confirmed.",
time:"5 min ago"
},

{
id:2,
title:"New Event Added",
message:"Hackathon 2026 event has been added.",
time:"20 min ago"
},

{
id:3,
title:"Certificate Available",
message:"Your event certificate is ready.",
time:"1 hour ago"
}

]);



const deleteNotification=(id)=>{

setNotifications(
notifications.filter(
item=>item.id!==id
)
);

};



return(

<div className="user-notification-layout">


<Sidebar/>


<div className="user-notification-page">


<h1>
🔔 Notifications
</h1>



{
notifications.map(item=>(


<div 
className="user-notification-card"
key={item.id}
>


<h3>
{item.title}
</h3>


<p>
{item.message}
</p>


<span>
{item.time}
</span>


<button
onClick={()=>deleteNotification(item.id)}
>
Delete
</button>


</div>


))
}



</div>


</div>

)

}


export default UserNotifications;