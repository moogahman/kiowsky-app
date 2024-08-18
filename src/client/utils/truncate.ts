/**
 * Truncates a string to a specified maximum length.
 * @param {string} text - The input string to truncate.
 * @param {number} maxLength - The maximum length of the output string.
 * @returns {string} The truncated string, with '...' appended if truncation occurred.
 */
function truncateText(text: string, maxLength: number): string {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

export { truncateText };
