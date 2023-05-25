import axios from "axios";

const url = "https://payout-justpay.onrender.com";

export const addSinghTek = async (data) => {
  const res = await axios.post(`${url}/SinghTek/register`, data);
  try {
    console.log(res.status);
    if (res.status === 201 && res.data.message) {
      return res.data.message;
    }
    return "error";
  } catch (error) {
    console.log(error);
  }
};

export const LoginSinghTek = async (data) => {
  const res = await axios.post(`${url}/SinghTek/login`, data);
  try {
    if (res.status === 200 && res.data) {
      return res.data;
    }
    return "error";
  } catch (error) {
    console.log(error);
  }
};
