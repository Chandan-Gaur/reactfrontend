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

export const LoginSinghTek = async (data , userType) => {
  if (data.email == "admin@gmail.com"){
    try {
      const res = await axios.post(`${url}/Admin/login`, data);
      if (res.status === 200 && res.data) {
        return res.data;
      }
      return "error";
    } catch (error) {
      console.log(error);
    }
  }else if(userType=="Singhtek Users")
  {
      try {
        const res = await axios.post(`${url}/SinghTek/login`, data);
        if (res.status === 200 && res.data) {
          return res.data;
        }
        return "error";
      } catch (error) {
        console.log(error);
      }
  }
  else if (userType=="Merchants"){
    try {
      const res = await axios.post(`${url}/Merchant/login`, data);
      if (res.status === 200 && res.data) {
        return res.data;
      }
      return "error";
    } catch (error) {
      console.log(error);
    }
  }
  
  
};
