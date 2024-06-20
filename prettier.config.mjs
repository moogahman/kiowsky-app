/** @type {import("prettier").Config} */

const config = {
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'as-needed',
    trailingComma: 'es5',
    bracketSameLine: true,
    arrowParens: 'avoid',
    proseWrap: 'preserve',
    htmlWhitespaceSensitivity: 'css',
    endOfLine: 'lf',
    embeddedLanguageFormatting: 'auto',
    singleAttributePerLine: false,
};

export default config;
