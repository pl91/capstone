import card1 from "./assets/icons_assets/greek salad.jpg";
import card2 from "./assets/icons_assets/bruchetta.svg";
import card3 from "./assets/icons_assets/lemon dessert.jpg";

export default function Highlights() {
  return (
    <section className="Highlights py-5 my-5">
      <div className="container">
        {/* Heading + Button Row */}
        <div className="row align-items-center justify-content-between g-3">
          <div className="col-auto">
            <h2 className="display-4 mb-0">Specials</h2>
          </div>
          <div className="col-auto">
            <button className="button-primary">Reserve a Table</button>
          </div>
        </div>

        {/* Specials Cards Row */}
        <div className="row g-4 mt-4">
          <div className="col-md-4">
            <div className="card">
              <img src={card1} className="card-img-top" alt="Greek Salad" />
              <div className="card-body d-flex flex-column justify-content-between">
                {/* Title + Price Row */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title mb-0">Greek Salad</h5>
                  <p className="ll-text-yellow fw-bold mb-0">$7.99</p>
                </div>

                {/* Description + CTA */}
                <p className="card-text">
                  Crisp lettuce, olives, and feta tossed in a refreshing lemon
                  vinaigrette.
                </p>
                <div className="d-flex">
                  <button className="button-primary w-auto">Order now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={card2} className="card-img-top" alt="Bruschetta" />
              <div className="card-body d-flex flex-column justify-content-between">
                {/* Title + Price Row */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title mb-0">Bruschetta</h5>
                  <p className="ll-text-yellow fw-bold mb-0">$5.99</p>
                </div>

                {/* Description + CTA */}
                <p className="card-text">
                  Grilled bread topped with garlic, tomatoes, olive oil, and
                  fresh basil.
                </p>
                <div className="d-flex">
                  <button className="button-primary w-auto">Order now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={card3} className="card-img-top" alt="Lemon Dessert" />
              <div className="card-body d-flex flex-column justify-content-between">
                {/* Title + Price Row */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title mb-0">Lemon Dessert</h5>
                  <p className="ll-text-yellow fw-bold mb-0">$4.99</p>
                </div>

                {/* Description + CTA */}
                <p className="card-text">
                  A sweet and tangy lemon treat with a light, creamy texture and
                  golden crust.
                </p>
                <div className="d-flex">
                  <button className="button-primary w-auto">Order now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
