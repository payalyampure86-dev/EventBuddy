import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Profile.css";

function Profile(){
const [editing, setEditing] = useState(false);

  return(

    <div className="profile-layout">

      <Sidebar />


      <div className="profile-page">


        <div className="profile-header">

          <h1>
            My Profile
          </h1>

          <p>
            Manage your EventBuddy account information
          </p>

        </div>




        <div className="profile-card">


          <div className="profile-top">


            <img
              src="https://i.pravatar.cc/150"
              alt="profile"
            />


            <div>

             {editing ? (
  <input type="text" defaultValue="Payal Yampure" />
) : (
  <h2>Payal Yampure</h2>
)}


              <p className="role">
                IT Student | Event Enthusiast
              </p>


             <button onClick={() => setEditing(!editing)}>
  {editing ? "Save Profile" : "Edit Profile"}
</button>

            </div>


          </div>





          <div className="profile-details">


            <div className="detail-box">

              <h3>
                📧 Email
              </h3>

              <p>
                payal@example.com
              </p>

            </div>



            <div className="detail-box">

              <h3>
                📍 Location
              </h3>

              <p>
                Maharashtra, India
              </p>

            </div>



            <div className="detail-box">

              <h3>
                💻 Skills
              </h3>

              <p>
                React | Node.js | MongoDB
              </p>

            </div>



            <div className="detail-box">

              <h3>
                🎯 Interests
              </h3>

              <p>
                Technology Events, Workshops
              </p>

            </div>


          </div>



        </div>


      </div>


    </div>

  );

}

export default Profile;