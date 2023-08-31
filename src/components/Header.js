import { useState } from "react";

export const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT"
      alt="logo"
    />
  </a>
);

const Header = () => {
  const [title, setTitle] = useState("Food Villa");

  return (
    <div className="header">
      <Title />
      <div className="nav_items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contct</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
