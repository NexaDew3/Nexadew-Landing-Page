import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
  bgColor: "bg-blue-600",
  textColor: "text-white",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Download",
  icon: "https://cdn-icons-png.flaticon.com/512/271/271228.png",
  bgColor: "bg-green-500",
  textColor: "text-white",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  label: "Full Width",
  width: "w-full",
  height: "h-14",
};
