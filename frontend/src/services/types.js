/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 */

/**
 * @typedef {Object} Recipe
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} prepTime
 * @property {string} cookTime
 * @property {number} servings
 * @property {string[]} ingredients
 * @property {string} instructions
 * @property {string} photoUrl
 * @property {string} authorId
 * @property {User} [author] - Included via relationship query
 */
