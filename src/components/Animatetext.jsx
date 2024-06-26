import { TypeAnimation } from "react-type-animation";

const Animatetext = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Welcome to our Store",
        1000,
        "Lets Buy Some Best Stuff",
        1000,
        "Enjoy Your Shopping",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block", color: "white", padding: "25px", fontWeight: "bold" }}
      repeat={Infinity}
    />
  );
};

export default Animatetext;
