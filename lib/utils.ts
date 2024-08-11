/**
 * Validates if the given option is one of the correct answers.
 *
 * @param {string[]} answers - The list of correct answers.
 * @param {string} option - The option to validate against the correct answers.
 * @returns {boolean} - Returns `true` if the option is a correct answer, otherwise `false`.
 */
export const validateOption = (answers: string[], option: string) => answers.includes(option);
