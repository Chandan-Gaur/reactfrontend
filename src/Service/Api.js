import axios from "axios";

const url = "https://payout-justpay.onrender.com";

export const addSinghTek = async (data) => {
  const res = await axios.post(`${url}/SinghTek/register`, data);
  return res.data;
};

export const LoginSinghTek = async (data) => {
  const res = await axios.post(`${url}/SinghTek/login`, data);
  return res.data;
};
