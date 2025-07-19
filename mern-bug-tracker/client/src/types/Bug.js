
/**
 * @typedef {'open' | 'in-progress' | 'resolved' | 'closed'} BugStatus
 */

/**
 * @typedef {'low' | 'medium' | 'high' | 'critical'} BugPriority
 */

/**
 * @typedef {Object} Bug
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {BugStatus} status
 * @property {BugPriority} priority
 * @property {string} assignee
 * @property {string} reporter
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {Object} BugFormData
 * @property {string} title
 * @property {string} description
 * @property {BugPriority} priority
 * @property {string} assignee
 * @property {string} reporter
 */
