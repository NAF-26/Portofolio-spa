import { useEffect } from "react";
import Typed from "typed.js";
import profilePic from "../assets/pp.jpg";

export default function Home() {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Web Designer", "Game Developer"],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-img">
        <img src={profilePic} alt="Profile" />
      </div>
      <div className="home-content">
        <h3>Hai, Aku</h3>
        <h1>Naufal Ghaly</h1>
        <h3>
          Dan Aku Calon <span className="multiple-text"></span>
        </h3>
        <p>Web ini akan menjelaskan tentang saya</p>
      </div>
    </section>
  );
}
