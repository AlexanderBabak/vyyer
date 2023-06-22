import axios from "axios";

import { AUDIENCE, USER_DATA } from "../constants/userData";
import { AuthData } from "../types/data";

export const getAuth = async (data: AuthData) => {
  const response = await axios.post("https://vyyer.us.auth0.com/oauth/token", {
    grant_type: "password",
    username: data.userName,
    password: data.password,
    client_id: USER_DATA.client_id,
    audience: AUDIENCE,
  });

  return response.data.access_token;
};

export const getScans = async (accessToken: string) => {
  const requestData = {
    Page: 1,
    PerPage: 100,
  };

  const headers = {
    "Content-Type": "application/json",
    "X-User-Id": USER_DATA.auth0User,
    "X-Org-Id": USER_DATA.auth0Org,
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await axios.post(
    `${AUDIENCE}/api/v2/scans/get`,
    requestData,
    { headers },
  );

  return response.data.Data;
};

export const getPersons = async (
  accessToken: string,
  identityIDArray: number[],
) => {
  const requestData = {
    IDs: identityIDArray,
  };

  const headers = {
    "Content-Type": "application/json",
    "X-User-Id": USER_DATA.auth0User,
    "X-Org-Id": USER_DATA.auth0Org,
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await axios.post(
    `${AUDIENCE}/api/v2/identities/get`,
    requestData,
    { headers },
  );

  return response.data.Data;
};
