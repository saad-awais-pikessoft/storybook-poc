import Login from "./Login";

// More on default export: https://storybook.js.org/docs/writing-stories/#default-export
export default {
  component: Login,
  // decorators: [withDesign],
  title: "POC/Home page",
};

// export const Example = () => <Login />;

export const Example = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9bZsd7QNZtxycjxjIsyEjv/Atomix-Inventory-System-%F0%9F%93%A6-(Copy)?node-id=91-5644&t=LKNVhpN56sHXcmmL-1",
    },
  },
};
