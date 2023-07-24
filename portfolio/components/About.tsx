import Image from "next/image";
import React from "react";
import ReactLogo from "../imgs/react.png";
import Profile from "../imgs/profile.jpg";
import Microsoft from "../imgs/microsoft.png";
import Tile from "./Tile";

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-rows-2 grid-cols-3 gap-5 p-[20px] rounded-lg"
    >
      <Tile title="STACK" className="col-start-1 col-end-2">
        <p className="my-6 text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          tempore accusantium voluptates corrupti facere culpa necessitatibus,
        </p>
        <Image
          src={ReactLogo}
          width="200px"
          height="178.95px"
          layout="fixed"
          className="block m-auto"
        />
      </Tile>

      <Tile title="ABOUT" className="col-start-2 col-end-3 row-span-2">
        <p className="text-2xl text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          tempore accusantium voluptates corrupti facere culpa necessitatibus,
        </p>
        <Image
          src={Profile}
          width={400}
          height={400}
          className="object-cover rounded-full"
        />
      </Tile>
      <Tile
        title="REFERENCES"
        className="col-start-3 col-end-4 row-start-1 row-end-2"
      >
        <p className="text-2xl text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          tempore accusantium voluptates corrupti facere culpa necessitatibus,
        </p>
        <Image src={Microsoft} height={300} />
      </Tile>
      <Tile
        title="SERVICES"
        className="col-start-1 col-end-2 row-start-2 row-end-3"
      >
        <p className="text-2xl text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          tempore accusantium voluptates corrupti facere culpa necessitatibus,
        </p>
        <img src="img/cloud.png" alt="" width="300" />
      </Tile>
      <Tile
        title="AWARDS"
        className="col-start-3 col-end-4 row-start-2 row-end-3"
      >
        <p className="text-2xl text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          tempore accusantium voluptates corrupti facere culpa necessitatibus,
          nihil rem sequi deleniti quod repudiandae ratione nemo veniam sint,
          dignissimos a repellendus nisi.
        </p>
        <img src="img/trophy.png" alt="" />
      </Tile>
    </section>
  );
}
