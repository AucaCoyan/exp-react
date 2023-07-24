import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Posts from "../components/Posts";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sitio web con Grid</title>
      </Head>

      <main>
        <section id="menu">
          <div className="tile about-tile">
            <a href="#about" id="boton">
              <div className="front"></div>
              <div className="back">ABOUT</div>
            </a>
          </div>
          <div className="tile projects-tile">
            <a href="#projects">
              <div className="front"></div>
              <div className="back">PROJECTS</div>
            </a>
          </div>
          <div className="tile posts-tile">
            <a href="#posts">
              <div className="front"></div>
              <div className="back">POSTS</div>
            </a>
          </div>
          <div className="tile contact-tile">
            <a href="#contact">
              <div className="front"></div>
              <div className="back">CONTACT</div>
            </a>
          </div>
        </section>

        <About />

        <Projects />

        <Posts />

        <Contact />
      </main>
    </div>
  );
};

export default Home;
