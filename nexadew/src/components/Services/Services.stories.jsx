// src/components/Services.stories.jsx

import React from "react";
import Services from "./Services";

export default {
  title: "Components/Services",
  component: Services,
};

const Template = (args) => <Services {...args} />;

export const Default = Template.bind({});
Default.args = {};
