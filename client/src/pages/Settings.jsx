import React from "react";
import Sidebar from "../components/Sidebar";
import "./Settings.css";

function Settings(){

  return(

    <div className="settings-layout">

      <Sidebar />


      <div className="settings-page">


        <div className="settings-header">

          <h1>
            Settings
          </h1>

          <p>
            Manage your account preferences and privacy
          </p>

        </div>



        <div className="settings-card">


          <div className="setting-box">

            <div>
              <h3>
                👤 Profile Information
              </h3>

              <p>
                Update your personal details and profile information.
              </p>
            </div>

            <button>
              Edit
            </button>

          </div>




          <div className="setting-box">

            <div>
              <h3>
                🔐 Change Password
              </h3>

              <p>
                Keep your account secure by changing password.
              </p>
            </div>

            <button>
              Change
            </button>

          </div>





          <div className="setting-box">

            <div>
              <h3>
                🔔 Notifications
              </h3>

              <p>
                Receive updates about events and registrations.
              </p>
            </div>


            <label className="toggle">

              <input type="checkbox"/>

              <span></span>

            </label>


          </div>





          <div className="setting-box">

            <div>
              <h3>
                🔒 Privacy Settings
              </h3>

              <p>
                Control profile visibility and privacy options.
              </p>
            </div>


            <button>
              Manage
            </button>


          </div>



        </div>


      </div>


    </div>

  );

}


export default Settings;