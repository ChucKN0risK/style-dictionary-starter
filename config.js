import StyleDictionary from "style-dictionary";

import {
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from "style-dictionary/enums";

const myStyleDictionary = new StyleDictionary({
  log: {
    warnings: logWarningLevels.warn, // 'warn' | 'error' | 'disabled'
    verbosity: logVerbosityLevels.verbose, // 'default' | 'silent' | 'verbose'
    errors: {
      brokenReferences: logBrokenReferenceLevels.throw, // 'throw' | 'console'
    },
  },
  source: ["output/tokens/**/*.json"],
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/kebab",
        "time/seconds",
        "size/px",
        "color/css",
      ],
      buildPath: "build/",
      files: [
        {
          destination: "web/colors.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
          filter: {
            attributes: {
              category: "color",
            },
          },
        },
        {
          destination: "web/dimensions.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
          filter: {
            attributes: {
              category: "size",
            },
          },
        },
      ],
    },
    android: {
      transformGroup: "android",
      buildPath: "build/android/",
      files: [
        {
          destination: "font_dimens.xml",
          format: "android/fontDimens",
        },
        {
          destination: "colors.xml",
          format: "android/colors",
        },
      ],
    },
    compose: {
      transformGroup: "compose",
      buildPath: "build/compose/",
      files: [
        {
          destination: "StyleDictionaryColor.kt",
          format: "compose/object",
          className: "MediumColorPalette",
          packageName: "com.medium.android.design.theme",
          filter: {
            attributes: {
              category: "color",
            },
          },
        },
        {
          destination: "StyleDictionarySize.kt",
          format: "compose/object",
          className: "StyleDictionarySize",
          packageName: "StyleDictionarySize",
          type: "float",
          filter: {
            attributes: {
              category: "size",
            },
          },
        },
      ],
    },
    ios: {
      transformGroup: "ios",
      buildPath: "build/ios/",
      files: [
        {
          destination: "StyleDictionaryColor.h",
          format: "ios/colors.h",
          className: "StyleDictionaryColor",
          type: "StyleDictionaryColorName",
          filter: {
            attributes: {
              category: "color",
            },
          },
        },
        {
          destination: "StyleDictionaryColor.m",
          format: "ios/colors.m",
          className: "StyleDictionaryColor",
          type: "StyleDictionaryColorName",
          filter: {
            attributes: {
              category: "color",
            },
          },
        },
        {
          destination: "StyleDictionarySize.h",
          format: "ios/static.h",
          className: "StyleDictionarySize",
          type: "float",
          filter: {
            attributes: {
              category: "size",
            },
          },
        },
        {
          destination: "StyleDictionarySize.m",
          format: "ios/static.m",
          className: "StyleDictionarySize",
          type: "float",
          filter: {
            attributes: {
              category: "size",
            },
          },
        },
      ],
    },
    "ios-swift": {
      transformGroup: "ios-swift",
      buildPath: "build/ios-swift/",
      files: [
        {
          destination: "StyleDictionary+Class.swift",
          format: "ios-swift/class.swift",
          className: "StyleDictionaryClass",
          filter: {},
        },
        {
          destination: "StyleDictionary+Enum.swift",
          format: "ios-swift/enum.swift",
          className: "StyleDictionaryEnum",
          filter: {},
        },
        {
          destination: "StyleDictionary+Struct.swift",
          format: "ios-swift/any.swift",
          className: "StyleDictionaryStruct",
          filter: {},
          options: {
            imports: "SwiftUI",
            objectType: "struct",
            accessControl: "internal",
          },
        },
      ],
    },
    "ios-swift-separate-enums": {
      transformGroup: "ios-swift-separate",
      buildPath: "build/ios-swift/",
      files: [
        {
          destination: "StyleDictionaryColor.swift",
          format: "ios-swift/enum.swift",
          className: "StyleDictionaryColor",
          filter: {
            attributes: {
              category: "color",
            },
          },
        },
        {
          destination: "StyleDictionarySize.swift",
          format: "ios-swift/enum.swift",
          className: "StyleDictionarySize",
          filter: {
            attributes: {
              category: "size",
            },
          },
        },
      ],
    },
    "flutter-separate": {
      basePxFontSize: 1,
      transforms: [
        "attribute/cti",
        "name/camel",
        "color/hex8flutter",
        "size/flutter/remToDouble",
        "content/flutter/literal",
        "time/seconds",
      ],
      buildPath: "build/flutter/design_tokens/dark/",
      files: [
        {
          destination: "style_dictionary_color_dark.g.dart",
          format: "flutter/class.dart",
          className: "StyleDictionaryColorDark",
          type: "color",
          filter: {
            attributes: {
              category: "color",
            },
          },
        },
        {
          destination: "style_dictionary_size_dark.g.dart",
          format: "flutter/class.dart",
          className: "StyleDictionarySizeDark",
          type: "float",
          filter: {
            attributes: {
              category: "size",
            },
          },
        },
      ],
    },
  },
});

await myStyleDictionary.buildAllPlatforms();
