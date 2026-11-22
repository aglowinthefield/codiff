import complineDarkTheme from '../themes/compline-dark.json' with { type: 'json' };
import complineLightTheme from '../themes/compline-light.json' with { type: 'json' };
import dunkelTheme from '../themes/dunkel.json' with { type: 'json' };
import gruvboxDarkTheme from '../themes/gruvbox-dark.json' with { type: 'json' };
import gruvboxLightTheme from '../themes/gruvbox-light.json' with { type: 'json' };
import lichtTheme from '../themes/licht.json' with { type: 'json' };
import type { CodiffColorTheme } from '../types.ts';

// Each color theme pairs a light and a dark Zed syntax theme. The interface
// colors for the same palette live in App.css under `data-color-theme`.
export const syntaxThemes: Readonly<
  Record<CodiffColorTheme, Readonly<{ dark: string; light: string }>>
> = {
  compline: { dark: complineDarkTheme.name, light: complineLightTheme.name },
  default: { dark: dunkelTheme.name, light: lichtTheme.name },
  gruvbox: { dark: gruvboxDarkTheme.name, light: gruvboxLightTheme.name },
};

export const syntaxThemeDefinitions = [
  lichtTheme,
  dunkelTheme,
  complineLightTheme,
  complineDarkTheme,
  gruvboxLightTheme,
  gruvboxDarkTheme,
] as const;

export const getSyntaxTheme = (colorTheme: CodiffColorTheme | undefined) =>
  syntaxThemes[colorTheme ?? 'default'] ?? syntaxThemes.default;
