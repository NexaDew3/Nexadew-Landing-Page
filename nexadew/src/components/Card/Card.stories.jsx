import React from "react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["about", "service", "project"],
    },
  },
};

const Template = (args) => <Card {...args} />;

export const About = Template.bind({});
About.args = {
  variant: "about",
  text: "This is an about card.",
};

export const Service = Template.bind({});
Service.args = {
  variant: "service",
  title: "Front-end Web Development",
  text: "React.js, Tailwind-css and more.",
  icon: "</>",
};

export const Project = Template.bind({});
Project.args = {
  variant: "project",
  title: "Project Alpha",
  subtitle: "2025",
  text: "Project details here.",
};
