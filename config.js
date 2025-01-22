import StyleDictionary from "style-dictionary";
import {
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from "style-dictionary/enums";

function getStyleDictionaryConfig(theme) {
  return {
    log: {
      warnings: logWarningLevels.warn, // 'warn' | 'error' | 'disabled'
      verbosity: logVerbosityLevels.verbose, // 'default' | 'silent' | 'verbose'
      errors: {
        brokenReferences: logBrokenReferenceLevels.throw, // 'throw' | 'console'
      },
    },
    source: [
      `output/tokens/themes/${theme}/**/*.json`,
      "output/tokens/globals/**/*.json",
    ],
    platforms: {
      css: {
        transforms: [
          "attribute/cti",
          "name/kebab",
          "time/seconds",
          "size/px",
          "color/css",
        ],
        buildPath: `build/`,
        files: [
          {
            destination: `${theme}/colors.css`,
            format: "css/variables",
            options: {
              outputReferences: true,
              selector: `[data-theme="${theme}"]`,
            },
            filter: {
              attributes: {
                category: "color",
              },
            },
          },
          {
            destination: "dimensions.css",
            format: "css/variables",
            options: {
              outputReferences: true,
              selector: ".my-breakpoint",
            },
            filter: {
              attributes: {
                category: "dimensions",
              },
            },
          },
        ],
      },
    },
  };
}

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFERENT THEMES

["light", "dark"].map(function (theme) {
  console.log("\n==============================================");
  console.log(`\nProcessing: ${theme}`);

  const myStyleDictionary = new StyleDictionary(
    getStyleDictionaryConfig(theme)
  );

  // StyleDictionary.buildPlatform(platform);
  myStyleDictionary.buildAllPlatforms();

  console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");
