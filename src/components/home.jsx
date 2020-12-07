import React from "react";
import Header from "./header";
import Poster from ".././images/nykaaposter.jpg";
import Carsoul from "./carsoul";
import LookingFor from "./lookingfor";
import Categories from "./categories";
import Images, { spotLight } from "./imagesStore";
import SharedCode from "./renderProps";
import Disclaimer from './disclaimer';
const Home = () => {
  return (
    <>
      <Header />
      <img src={Poster} height="350px" width="100%" alt="poster" />
      <Carsoul />
      <LookingFor />
      <SharedCode images={spotLight.img} head={spotLight.head} />
      <Categories />
      {Images.map((data, index) => (
        <SharedCode key={index} images={data.img} head={data.head} />
      ))}
      <Disclaimer />
    </>
  );
};

export default Home;
