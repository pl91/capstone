import about from "./assets/icons_assets/Mario and Adrian b.jpg";
export default function About() {
  return (
    <section className="About py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md order-2 order-md-1">
            <div className="hero-text ll-text-dark-green">
              <h1 className="display-1 mb-0">Little Lemon</h1>
              <h3 className="h2 mb-4">Chicago</h3>
              <p className="mb-3 text-black">
                Little Lemon is a family-owned Mediterranean restaurant located
                in the heart of Chicago. Founded by Adrian and Mario, two
                passionate chefs with roots in southern Italy, the restaurant
                blends traditional flavors with a modern twist. At Little Lemon,
                every dish is crafted with fresh ingredients, bold spices, and a
                commitment to authenticity. Whether you're savoring our
                signature bruschetta or indulging in a lemon dessert, you'll
                taste the care in every bite.
              </p>
            </div>
          </div>
          <div className="col-12 col-md order-1 order-md-2">
            <img className="w-100 p-4" src={about} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
