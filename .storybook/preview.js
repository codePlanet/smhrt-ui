import {GlobalStyles} from "../src/components/blox/Global";
import {addDecorator} from "@storybook/react";
import {Global} from "@emotion/core";
import React from "react";
import {ThemeProvider} from "emotion-theming";
import theme from "../src/theme";

const EmotionThemeProvider = (storyFn) => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(story => <>
    <Global styles={GlobalStyles}/>
    {story()}
</>);

addDecorator(EmotionThemeProvider);