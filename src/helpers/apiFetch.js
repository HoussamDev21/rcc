/**
 * @param {string} endpoint - endpoint
 * @param {RequestInit} options - options
 */
export default function apiFetch(endpoint, options) {
    if (endpoint.includes('://')) {
        return fetch(endpoint, options)
    }
    return fetch(`https://pokeapi.co/api/v2${endpoint}`, options)
}