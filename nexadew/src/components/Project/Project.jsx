import React from "react";
import Card from "../Card/Card";

function Projects() {
  return (
    <section className="py-20 px-4 text-center bg-black min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-white">Our Work</h2>
      <div className="flex flex-col gap-8 items-center">
        <Card
          variant="project"
          title="Blog Page Design"
          subtitle="React App"
          text="Blog Page"
          liveLink="https://blog-figma-y65j.vercel.app/"
          codeLink="https://github.com/NexaDew/Blog-figma"
        />
        <Card
          variant="project"
          title="Payment Infrastructure Design"
          subtitle="React App"
          text="Payment Infrastructure"
          liveLink="https://react-profile-e3d3.vercel.app/"
          codeLink="https://github.com/NexaDew/Payment-Infra"
        />
      </div>
    </section>
  );
}

export default Projects;
