import React from "react";
import { withThemesProvider } from "themeprovider-storybook";
import light from "../src/theme/light";
import dark from "../src/theme/dark";
import ResetCSS from "../src/ResetCSS";
import { ModalProvider } from "../src/widgets/Modal";

const globalDecorator = (StoryFn) => (
  <ModalProvider>
    <ResetCSS />
    <StoryFn />
  </ModalProvider>
);

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
    },
  },
};


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const parameters = {
  controls: { expanded: true },
};


export const parameters = {
  controls: {
    presetColors: [
      { color: '#0000b8', title: 'Coral' },
      'rgba(0, 159, 183, 1)',
      '#fe4a49',
    ]
  },
};

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};


const withThemeProvider=(Story,context)=>{
  const theme = getTheme(context.globals.theme);
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}



const themes = [
  {
    name: "Light",
    backgroundColor: light.colors.background,
    ...light,
  },
  {
    name: "Dark",
    backgroundColor: dark.colors.background,
    ...dark,
  },
];

export const decorators = [withThemeProvider];
export const decorators = [globalDecorator, withThemesProvider(themes)];
