import React from "react";
import macbook from "../assets/images/macbook.png";

export default function HomePage() {
  return (
    <div className="home-page-wrapper">
      <div className="main-content">
        <h1>
          Unleash your gaming potential And <br />
          Conquer the virtual realm with us!
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
      </div>
      <img src={macbook} alt="Banner" />
    </div>
  );
}
