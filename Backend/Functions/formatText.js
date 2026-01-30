export const replaceVariables = (variables, paragraph, constants) => {
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

const formatText = (text, variables, apiVariables) => {
  let replaced = replaceVariables(variables, text, apiVariables);
  return replaced.replace(/\n/g, "<br />");
};
export default formatText;
