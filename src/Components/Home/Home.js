import React from "react";
import Sidebar from "../../utils/sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';
const Home = () => {
  const {state} = useLocation();
  const { user } = state; 
  const [val,setval] = useState();
  const [users, setusers] = useState([]);
    const [mer, setmer] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(async () => {
       if({user} !=  null || {user} != undefined)
       {
         const url = user == "Singhtek Users" ? "SinghTek/merchants" : "Merchant/users";
       await axios.get(`https://payout-justpay.onrender.com/${url}`, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('_auth')}`
            },
        })
            .then(function (response) {
                console.log(response);
                setusers(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });}
            else{
              setval({user});
            }
    }, [val]);

   // console.log({user});
  return (
    <div>
      <Sidebar />

      <div className="card  table-outer">
                <div className="card-body">
                    <div className="table-responsive">
                        <table id="example2" className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Marchant Id</th>
                                    <th>Beneficiary Name</th>
                                    <th>Beneficiary Branch Code</th>
                                    <th>Amount</th>
                                    <th>Credit Account no.</th>
                                    <th>Remark</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    users.map(item => (
                                        <tr>
                                            <td>  {item.merchant_id} </td>
                                            {/* <td>  {item.sr_number} </td> */}
                                            <td>  {item.beneficiary_name} </td>
                                            <td>  {item.beneficiary_branch_code} </td>
                                            <td>  {item.amount} </td>
                                            <td>  {item.credit_account_no} </td>
                                            <td>  {item.remarks} </td>
                                            <div class="col">
                                                <div class="dropdown">
                                                    <button class="btn  btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Pending</button>
                                                    <ul class="dropdown-menu">
                                                        <li>
                                                            <button type="button" class="btn btns btn-light">Allow</button>
                                                        </li>
                                                        <li>    <button type="button" class="btn btn-light">Cancel</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </tr>
                                    )
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
  );
  };

export default Home;
