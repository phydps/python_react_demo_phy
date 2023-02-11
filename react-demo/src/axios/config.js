const devBaseUrl = 'http://127.0.0.1:666';
const prodBaseUrl = '';
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseUrl : prodBaseUrl;
export const TIMEOUT = 5000;