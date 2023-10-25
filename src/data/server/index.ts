import axios from "axios";

export const server = () => {
  const contentURL = process.env.CONTENT_URL;
  const env = process.env.ENVIRONMENT_ID;
  const accessToken = process.env.ACCESS_TOKEN;

  const baseURL = `${contentURL}/${env}`;
  const params = { access_token: accessToken };

  return axios.create({ baseURL, params }).get;
};
