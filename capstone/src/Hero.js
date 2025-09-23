import hero from "./assets/icons_assets/restaurant.jpg";

export default function Hero() {
  return (
    <section className="Hero py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md order-2 order-md-1">
            <div className="hero-text">
              <h1 className="display-1 mb-0 ll-text-yellow">Little Lemon</h1>
              <h3 className="h2 mb-4 text-white">Chicago</h3>
              <p className="mb-3 text-white">
                Welcome to Little Lemon, where bold Mediterranean flavors meet
                heartfelt hospitality. From sun-kissed ingredients to recipes
                passed down through generations, every dish is crafted to
                nourish, delight, and connect.
              </p>
              <button className="button-primary">Reserve a Table</button>
            </div>
          </div>
          <div className="col-12 col-md order-1 order-md-2">
            <img className="w-100 p-4" src={hero} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
