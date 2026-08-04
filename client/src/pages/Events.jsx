import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import "./Events.css";



function Events() {


  const [events, setEvents] = useState([]);

  const navigate = useNavigate();



  // Fetch Events

  useEffect(() => {

    fetchEvents();

  }, []);




  const fetchEvents = async()=>{

    try{

      const res = await axios.get(
        "http://localhost:5000/api/events"
      );


      setEvents(res.data);


    }catch(error){

      console.log(error);

    }

  };





  // Like

  const likeEvent=(id)=>{

    setEvents(

      events.map((event)=>

        event._id === id

        ?

        {
          ...event,
          likes:(event.likes || 0)+1
        }

        :

        event

      )

    );

  };





  // Register

const registerEvent = async (eventId) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    const res = await axios.post(
      "http://localhost:5000/api/registrations",
      {
        userId: user.id,
        eventId: eventId,
      }
    );

    alert(res.data.message);

    setEvents(
      events.map((event) =>
        event._id === eventId
          ? { ...event, registered: true }
          : event
      )
    );

  } catch (error) {
    console.log("Registration Error:", error.response?.data || error);
    alert(error.response?.data?.message || "Registration Failed");
  }
};
  // Delete

  const deleteEvent=async(id)=>{


    const confirmDelete = window.confirm(
      "Are you sure you want to delete?"
    );


    if(!confirmDelete)
      return;



    try{


      await axios.delete(
        `http://localhost:5000/api/events/${id}`
      );



      setEvents(

        events.filter(
          (event)=>event._id !== id
        )

      );


      alert("Event Deleted 🗑️");



    }catch(error){

      console.log(error);

    }


  };





  // Edit

  const editEvent=(event)=>{

    navigate(
      `/edit-event/${event._id}`
    );

  };






  return (


    <div className="events-layout">


      <Sidebar />



      <div className="events-page">


        <div className="events-header">

          <h1>
            🎉 Explore Events
          </h1>


          <p>
            Find and join amazing events.
          </p>


        </div>





        <div className="event-list">


        {
          events.length === 0

          ?

          <h2>
            No Events Found
          </h2>


          :


          events.map((event)=>(


            <div 
              className="event-card"
              key={event._id}
            >


              <h2>
                {event.title}
              </h2>


              <p>
                📂 {event.category}
              </p>


              <p>
                📅 {event.date}
              </p>


              <p>
                ⏰ {event.time}
              </p>


              <p>
                📍 {event.location}
              </p>


              <p>
                👤 {event.organizer}
              </p>


              <p>
                📝 {event.description}
              </p>




              <div className="event-actions">


                <button
                  className="like-btn"
                  onClick={()=>likeEvent(event._id)}
                >
                  ❤️ {event.likes || 0}
                </button>





                <button
                  className="register-btn"
                  onClick={()=>registerEvent(event._id)}
                >

                  {
                    event.registered
                    ?
                    "Registered ✅"
                    :
                    "Register"
                  }

                </button>





                <button
                  className="edit-btn"
                  onClick={()=>editEvent(event)}
                >
                  ✏️ Edit
                </button>





                <button
                  className="delete-btn"
                  onClick={()=>deleteEvent(event._id)}
                >
                  🗑️ Delete
                </button>



              </div>



            </div>


          ))

        }


        </div>



      </div>



    </div>


  );


}


export default Events;