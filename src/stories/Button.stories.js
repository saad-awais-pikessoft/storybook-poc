import { fn } from "@storybook/test";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      control: {
        type: "select",
        options: ["Primary", "Secondary", "Large", "Small"],
      },
    },
    size: {
      control: "select",
      description: "Size of the button",
      options: ["large", "small"],
    },
    onClick: {
      action: "button-clicked",
      description: "Click event handler",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state of the button",
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
    onClick: fn(),
    children: "Primary Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
    onClick: fn(),
    children: "Secondary Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
    onClick: fn(),
    children: "Large Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
    onClick: fn(),
    children: "Small Button",
  },
};
