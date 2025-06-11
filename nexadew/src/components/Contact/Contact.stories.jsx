import React from "react";
import Contact from "./Contact";

export default {
  title: "Pages/Contact",
  component: Contact,
};

const Template = (args) => <Contact {...args} />;

export const Default = Template.bind({});
Default.args = {};
