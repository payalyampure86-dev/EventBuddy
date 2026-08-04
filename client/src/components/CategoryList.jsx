import React from "react";
import "./CategoryList.css";

function CategoryList() {

  const categories = [

    { id: 1, icon: "💻", name: "Technology" },
    { id: 2, icon: "🎵", name: "Music" },
    { id: 3, icon: "⚽", name: "Sports" },
    { id: 4, icon: "🎭", name: "Cultural" },
    { id: 5, icon: "💼", name: "Business" },
    { id: 6, icon: "🎨", name: "Art & Design" }

  ];

  return (

    <section className="category-section">

      <h2>Browse Categories</h2>

      <p>
        Explore events from different categories.
      </p>

      <div className="category-grid">

        {categories.map((category) => (

          <div className="category-card" key={category.id}>

            <div className="category-icon">
              {category.icon}
            </div>

            <h3>{category.name}</h3>

          </div>

        ))}

      </div>

    </section>

  );

}

export default CategoryList;