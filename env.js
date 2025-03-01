// env.js
const devEnv = {
  apiUrl: 'http://47.103.73.26/api'
};
const prodEnv = {
  apiUrl: 'http://47.103.73.26/api'
};

export const env = process.env.NODE_ENV === 'development' ? devEnv : prodEnv;