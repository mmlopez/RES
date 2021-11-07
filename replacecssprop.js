function toReact(string) {
  let cssString = string;
  function replaceAll(str, search, replacement) {
    return str.split(search).join(replacement);
  }

  cssString = replaceAll(cssString, ";", `",`);
  cssString = replaceAll(cssString, ": ", `: "`);

  return cssString.replace(/-([a-z])/g, g => g[1].toUpperCase());
}
