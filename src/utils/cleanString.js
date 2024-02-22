export default function cleanString(text) {
  var noSpaces = text.replace(/\s+/g, "");
  var noTags = noSpaces.replace(/<[^>]*>/g, "");
  return noTags;
}
