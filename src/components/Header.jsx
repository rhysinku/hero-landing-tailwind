import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="pt-3">
      <div className="container">
        <div className="flex justify-between items-center  bg-white rounded-2xl  py-6 px-3 border-4 border-red-950">
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
