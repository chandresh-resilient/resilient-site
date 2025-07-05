"use client";
import { useEffect, useState } from "react";

const technologies = [
  { name: "Mendix", logo: "/logos/mendix.png" },
  { name: "OutSystems", logo: "/logos/outsystem.png" },
  { name: "React", logo: "/logos/react.png" },
  { name: "Documentum", logo: "/logos/documentum.png" },
  { name: "Java", logo: "/logos/java.png" },
  { name: "Node.js", logo: "/logos/nodejs.png" },
  { name: "Angular", logo: "/logos/angular.png" },
  { name: "Vue.js", logo: "/logos/vuejs.png" },
  { name: "Kotlin", logo: "/logos/kotlin.png" },
  { name: "Caspio", logo: "/logos/caspio.png" },
  { name: "PowerApps", logo: "/logos/powerapps.png" },
  { name: "Docker", logo: "/logos/docker.png" },
  { name: "Kubernetes", logo: "/logos/kubernetes.png" },
  { name: "PostgreSQL", logo: "/logos/postgresql.png" },
  { name: "MySQL", logo: "/logos/mysql.png" },
  { name: "MongoDB", logo: "/logos/mongodb.png" },
];

type Position = {
  top: number;
  left: number;
};

const ICON_SIZE = 80;
const MIN_SPACING = 100;

function isOverlapping(pos1: Position, pos2: Position) {
  const dx = pos1.left - pos2.left;
  const dy = pos1.top - pos2.top;
  return Math.sqrt(dx * dx + dy * dy) < MIN_SPACING;
}

export default function Technologies() {
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    const newPositions: Position[] = [];

    for (let i = 0; i < technologies.length; i++) {
      let safe = false;
      let attempts = 0;
      let pos: Position = { top: 0, left: 0 };

      while (!safe && attempts < 200) {
        const top = Math.floor(Math.random() * 400) + 50; // Y: 50px - 450px
        const left = Math.floor(Math.random() * 1000) + 50; // X: 50px - 1050px

        pos = { top, left };
        safe = newPositions.every((p) => !isOverlapping(p, pos));
        attempts++;
      }

      newPositions.push(pos);
    }

    setPositions(newPositions);
  }, []);

  return (
    <section className="relative py-15 bg-amber-400" id="technologies">
      <div className="absolute inset-0 bg-gradient-to-r from-[#964f4f] to-[#838281] opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black relative z-10 mb-20">
          Technologies We Specialize In
        </h2>

        <div className="relative w-full h-[600px] overflow-visible">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="absolute transition-transform hover:scale-125 cursor-pointer duration-300 ease-in-out text-center"
              style={{
                top: `${positions[index]?.top}px`,
                left: `${positions[index]?.left}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-20 h-auto object-contain p-1"
                // style={{
                //   filter: "drop-shadow(0 0 6px rgba(0,0,0,0.4))",
                // }}
              />
              <p className="text-sm text-black font-medium mt-2">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
