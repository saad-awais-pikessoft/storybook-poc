import { fn } from "@storybook/test";
import Sidebar from "./Sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  args: {
    menus: ["Home", "About", "Services", "Contact"], // Example menu items
    onMenuClick: fn(),
  },
};

export const LongMenuList = {
  args: {
    menus: Array.from({ length: 10 }, (_, i) => `Menu Item ${i + 1}`), // Generate 10 menu items
    onMenuClick: fn(),
  },
};

export const Empty = {
  args: {
    menus: [],
    onMenuClick: fn(),
  },
};
