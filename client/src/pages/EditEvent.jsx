import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./CreateEvent.css";


function EditEvent() {

  const { id } = useParams();
  const navigate = useNavigate();


  const [event, setEvent] = useState({
    title: "",
    category: "",
    date: "",
    time: "",
    location: "",
    organizer: "",
    description: ""
  });



  // Get Event Data
  useEffect(() => {

    fetchEvent();

  }, []);



  const fetchEvent = async () => {

    try {

      const res = await axios.get(
        "https://eventbuddy-backend.onrender.com"
      );


      const selectedEvent = res.data.find(
        (item) => item._id === id
      );


      if (selectedEvent) {
        setEvent(selectedEvent);
      }


    } catch (error) {

      console.log("Fetch Event Error:", error);

    }

  };





  // Input Change
  const handleChange = (e) => {

    setEvent({

      ...event,

      [e.target.name]: e.target.value

    });

  };





  // Update Event
  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      await axios.put(
        `http://localhost:5000/api/events/${id}`,
        event
      );


      alert("Event Updated Successfully ✅");


      navigate("/events");


    } catch (error) {

      console.log("Update Error:", error);

      alert("Failed to update event");

    }

  };





  return (

    <div className="create-layout">


      <Sidebar />


      <div className="create-page">


        <div className="create-header">

          <h1>
            ✏️ Edit Event
          </h1>

          <p>
            Update your event details.
          </p>

        </div>




        <div className="create-card">


          <form onSubmit={handleSubmit}>


            <label>
              Event Title
            </label>

            <input
              type="text"
              name="title"
              value={event.title}
              onChange={handleChange}
              required
            />




            <label>
              Category
            </label>


            <select
              name="category"
              value={event.category}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Category
              </option>

              <option value="Technology">
                Technology
              </option>

              <option value="Music">
                Music
              </option>

              <option value="Business">
                Business
              </option>

              <option value="Workshop">
                Workshop
              </option>

              <option value="Sports">
                Sports
              </option>

              <option value="Art & Culture">
                Art & Culture
              </option>

            </select>





            <label>
              Date
            </label>


            <input
              type="date"
              name="date"
              value={event.date}
              onChange={handleChange}
              required
            />





            <label>
              Time
            </label>


            <input
              type="time"
              name="time"
              value={event.time}
              onChange={handleChange}
              required
            />





            <label>
              Location
            </label>


            <input
              type="text"
              name="location"
              value={event.location}
              onChange={handleChange}
              required
            />





            <label>
              Organizer Name
            </label>


            <input
              type="text"
              name="organizer"
              value={event.organizer}
              onChange={handleChange}
              required
            />





            <label>
              Description
            </label>


            <textarea

              name="description"

              value={event.description}

              onChange={handleChange}

              required

            />





            <button type="submit">

              Update Event 🚀

            </button>



          </form>



        </div>



      </div>



    </div>

  );

}


export default EditEvent;