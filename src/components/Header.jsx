import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="pt-6">
      <div className="container">
        <div className="flex justify-between items-center   rounded-full  py-6 px-5 border-gray-500 border-2 border-solid">
          <figure className="max-w-28 w-full">
            <img src="pp.png" alt="" />
          </figure>
          <Navigation />
          <div className="flex gap-5">
            <a href="" className="btn btn-secondary">
              Login
            </a>
            <a href="" className="btn btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
