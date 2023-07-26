import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Sider/Slider";
function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Slider />
      <Footer />
    </div>
  );
}

export default Home;
