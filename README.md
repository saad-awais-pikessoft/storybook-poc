# Storybook POC

## Overview

This project showcases a Proof of Concept (POC) for using [Storybook](https://storybook.js.org/) with our UI components. Storybook is an open-source tool for developing and testing UI components in isolation, providing a dedicated environment for building and iterating on components.

The deployed Storybook application demonstrates the development of **4 different components** and their integration into a **Home Page component**. This POC is designed to illustrate how Storybook can be used to build, test, and document UI components.

## Deployed Application

You can view the deployed Storybook application at:

🔗 **[Storybook POC - View Here](https://storybook-saad-poc.vercel.app/)** 🔗

## Features

- **Component Isolation**: Develop and test UI components independently from the main application.
- **Enhanced Documentation**: Automatically generated documentation with component descriptions, usage examples, and various states.
- **Visual Testing**: Interactive visual testing to catch regressions and inconsistencies early.
- **Design Systems**: Create and maintain a library of reusable components to ensure consistency across the application.
- **Interactive UI Development**: Test and refine component behavior in a live environment.
- **Integration with Testing Tools**: Compatibility with testing tools like Jest and Chromatic for automated testing.

## Components

The following components are included in this POC:

1. **Component 1**: Button - It contains for different states of the button. You can pass on the background color, size, disabled as a boolean ,label and the variant as a prop. It also receives the onClick event as a prop.

2. **Component 2**: Header - It contains the header of the page. It has a logo on the left side and a Welcome {username} on the right side with a Login, Logout and Sign up button. The documentation contains 2 states for the header. One with the username logged in and other as a logged out state.

3. **Component 3**: Page - It contains the page of the application that has the content of the page.

4. **Component 4**: Sidebar - It contains the sidebar of the page. It has 2 states as well. One that demonstrates the sidebar with the long list of menu items and the other one being empty. It received the list of menu and the onClick event, that logs the menu item clicked, as a prop.

### Home Page Component

The **Home Page component** integrates the above components to demonstrate their usage together on a single page.

## Getting Started

To run Storybook locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/saad-awais-pikessoft/storybook-poc.git
   cd your-repository

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the Storybook Server**

   ```bash
   npm run storybook
   ```

   Storybook will start on http://localhost:6006 by default.

## Building Storybook

To build the static files for deployment:



```bash
npm run build-storybook
```

This will create a static build of the Storybook application in the `storybook-static` directory.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. For any questions or feedback or to request a demo, please reach out to the [author](https://github.com/saad-awais-pikessoft)