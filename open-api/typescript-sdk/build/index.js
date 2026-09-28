import { defaults } from './fetch-client.js';
export * from './fetch-client.js';
export * from './fetch-errors.js';
export const init = ({ baseUrl, apiKey }) => {
    setBaseUrl(baseUrl);
    setApiKey(apiKey);
};
export const getBaseUrl = () => defaults.baseUrl;
export const setBaseUrl = (baseUrl) => {
    defaults.baseUrl = baseUrl;
};
export const setApiKey = (apiKey) => {
    defaults.headers = defaults.headers || {};
    defaults.headers['x-api-key'] = apiKey;
};
export const getAssetOriginalPath = (id) => `/assets/${id}/original`;
export const getAssetThumbnailPath = (id) => `/assets/${id}/thumbnail`;
export const getAssetPlaybackPath = (id) => `/assets/${id}/video/playback`;
export const getUserProfileImagePath = (userId) => `/users/${userId}/profile-image`;
export const getPeopleThumbnailPath = (personId) => `/people/${personId}/thumbnail`;
