import React, { useState } from "react";
import "./Reviews.css";

function Reviews() {

  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "Payal Yampure",
      event: "AI Workshop",
      rating: 5,
      review: "Excellent workshop with practical sessions.",
    },
    {
      id: 2,
      user: "Rahul Patil",
      event: "Hackathon",
      rating: 4,
      review: "Very good event and well organized.",
    },
    {
      id: 3,
      user: "Sneha Sharma",
      event: "Music Fest",
      rating: 5,
      review: "Amazing experience!",
    },
  ]);

  const deleteReview = (id) => {
    if (window.confirm("Delete this review?")) {
      setReviews(reviews.filter((review) => review.id !== id));
    }
  };

  return (
    <div className="reviews-container">

      <div className="reviews-header">
        <h1>Reviews & Ratings</h1>
      </div>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Event</th>
            <th>Rating</th>
            <th>Review</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {reviews.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.user}</td>

              <td>{item.event}</td>

              <td>{"⭐".repeat(item.rating)}</td>

              <td>{item.review}</td>

              <td>

                <button
                  className="delete-btn"
                  onClick={() => deleteReview(item.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Reviews;