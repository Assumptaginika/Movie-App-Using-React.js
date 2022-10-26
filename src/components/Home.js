import Hero from "./Hero";
import Img from "../images/karl.jpg";

const SearchView = () => {
  return (
    <>
      <Hero text="Welcome To Chimek Movie APP" />
      <img
        src={Img}
        alt=""
        className="homeimg"
        style={{ width: "100%", height: "100vh", position: "relative" }}
      />

      <p
        className="lead my-5"
        style={{
          position: "absolute",
          fontSize: "30px",
          bottom: "40px",
          color: "white",
          fontWeight: "bold",
          padding: "10px",
        }}
      >
        Your Home for everything movies
      </p>
    </>
  );
};

export default SearchView;
