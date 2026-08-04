import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import "./ManageUsers.css";


function ManageUsers(){

const [users,setUsers] = useState([
    {
        id:1,
        name:"Payal Yampure",
        email:"payal@gmail.com",
        role:"User"
    },
    {
        id:2,
        name:"Admin",
        email:"admin@gmail.com",
        role:"Admin"
    }
]);


const deleteUser = (id)=>{

    setUsers(
        users.filter(
            user=>user.id !== id
        )
    );

};



return(

<div className="manage-layout">


<AdminSidebar/>


<div className="manage-users-page">


<h1>
👥 Manage Users
</h1>


<p>
View and manage all registered users.
</p>



<div className="user-table">


<table>

<thead>

<tr>

<th>Name</th>

<th>Email</th>

<th>Role</th>

<th>Action</th>

</tr>

</thead>



<tbody>


{
users.map(user=>(

<tr key={user.id}>


<td>
{user.name}
</td>


<td>
{user.email}
</td>


<td>

<span className="role">
{user.role}
</span>

</td>



<td>

<button
className="delete-btn"
onClick={()=>deleteUser(user.id)}
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


export default ManageUsers;