import React from "react";
import Navlinks from "./Navlinks";

export default {
  title: "Components/Navlinks",
  component: Navlinks,
};

const Template = (args) => <Navlinks {...args} />;

export const Default = Template.bind({});
Default.args = {
  onHomeClick: () => alert("Home clicked"),
  onServicesClick: () => alert("Services clicked"),
  onProjectsClick: () => alert("Projects clicked"),
  onContactClick: () => alert("Contact clicked"),
};
