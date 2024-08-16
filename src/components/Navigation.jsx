const menu = ["Features", "Solutions", "Resources", "Pricing"];

const Navigation = () => {
  return (
    <>
      <nav>
        <ul className="flex justify-between gap-12">
          {menu.map((item, index) => (
            <li className="font-bold text-xl" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
