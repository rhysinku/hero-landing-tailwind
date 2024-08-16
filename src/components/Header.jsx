import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between items-center">
          <figure className="max-w-60 w-full">
            <img src="pp.png" alt="" />
          </figure>
          <Navigation />
          <div>
            <a href="" className="btn">
              Login
            </a>
            <a href="" className="btn">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
