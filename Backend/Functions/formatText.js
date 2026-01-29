export const replaceVariables = (variables, paragraph) => {
  const constants = {
    name: "Dipak",
    address: "Pokhara",
    country: "Nepal",
  };
  let updatedParagraph = paragraph;

  variables.forEach((variable) => {
    const value = constants[variable];
    if (value) {
      const regex = new RegExp(`\\{${variable}\\}`, "g");
      updatedParagraph = updatedParagraph.replace(regex, value);
    }
  });

  return updatedParagraph;
};

const formatText = (text, variables) => {
  let replaced = replaceVariables(variables, text);

  return replaced.replace(/\n/g, "<br />");
};
export default formatText;
