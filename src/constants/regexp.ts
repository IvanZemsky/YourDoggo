export const textWithoutForbiddenHTML =
   /^(?!.*&lt;\/?(?!b&gt;|\/b&gt;|img[^&]*?\/?&gt;)[a-zA-Z][^&]*?&gt;).*$|(&lt;b&gt;|&lt;\/b&gt;|&lt;img[^&]*?\/?&gt;)/i
