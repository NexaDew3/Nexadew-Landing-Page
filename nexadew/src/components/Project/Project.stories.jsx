// src/components/Projects/Projects.stories.jsx

import React from "react";
import Projects from "./Project";

export default {
  title: "Components/Projects",
  component: Projects,
};

const Template = (args) => <Projects {...args} />;

export const Default = Template.bind({});
Default.args = {};
