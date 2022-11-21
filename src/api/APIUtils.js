import axios from "axios";

export const API = () => {
  const fetchOccupationsAndStates = async () => {
    try {
      const res = await axios.get(
        "https://frontend-take-home.fetchrewards.com/form"
      );
      const data = res.data;

      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const postUser = async (newUser) => {
    try {
      const resp = await axios.post(
        "https://frontend-take-home.fetchrewards.com/form",
        newUser
      );

      return resp;
    } catch (e) {
      console.log(e);
    }
  };

  return [fetchOccupationsAndStates, postUser];
};
