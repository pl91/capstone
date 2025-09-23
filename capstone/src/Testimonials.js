export default function Testimonials() {
  return (
    <section className="Testimonials ll-bg-dark-green py-5">
      <div className="container">
        {/* Section Title */}
        <div className="row mb-4">
          <div className="col text-center">
            <h2 className="display-5 ll-text-yellow">Testimonials</h2>
          </div>
        </div>
        {/* Testimonial Cards */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-3">
            <div className="card h-100 p-3">
              <div className="d-flex align-items-center mb-3">
                <img src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="User" className="rounded-circle me-3" width="50" height="50" />
                <div>
                  <h6 className="mb-0">Jane Doe</h6>
                  <small className="text-muted">Aug 12, 2025</small>
                </div>
              </div>
              <div className="mb-2">
                {/* Star Rating */}
                <span className="text-warning">★★★★★</span>
              </div>
              <p className="card-text">
                “Absolutely loved the food and the cozy atmosphere. Will definitely come back!”
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-3">
            <div className="card h-100 p-3">
              <div className="d-flex align-items-center mb-3">
                <img src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="User" className="rounded-circle me-3" width="50" height="50" />

                <div>
                  <h6 className="mb-0">Mark Smith</h6>
                  <small className="text-muted">Sep 3, 2025</small>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-warning">★★★★☆</span>
              </div>
              <p className="card-text">
                “Great service and fresh ingredients. The lemon dessert was a highlight.”
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-md-3">
            <div className="card h-100 p-3">
              <div className="d-flex align-items-center mb-3">
                <img src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="User" className="rounded-circle me-3" width="50" height="50" />

                <div>
                  <h6 className="mb-0">Emily Chen</h6>
                  <small className="text-muted">Sep 15, 2025</small>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-warning">★★★★★</span>
              </div>
              <p className="card-text">
                “A hidden gem! The bruschetta was perfect and the staff were so welcoming.”
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="col-md-3">
            <div className="card h-100 p-3">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
                  alt="User 4"
                  className="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <div>
                  <h6 className="mb-0">Daniel Reyes</h6>
                  <small className="text-muted">Oct 2, 2025</small>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-warning">★★★★★</span>
              </div>
              <p className="card-text">
                “The staff were attentive, the food was phenomenal, and the vibe was just right. Highly recommend!”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}