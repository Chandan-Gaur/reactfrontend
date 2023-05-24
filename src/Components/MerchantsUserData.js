import React from 'react'
import Sidebar from './Sidebar'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const MerchantsUserData = () => {
    const [users, setusers] = useState([]);
    const [mer, setmer] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get('http://192.168.91.163:8080/Merchant/users', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDZkZjA4MTU3ZTJhODMxYzM4NDY4ZWIiLCJpYXQiOjE2ODQ5MjkxODB9.t8F8BySoZ697SRL6-Nzt34JAEuKipU3VkrWMHAe7jBc'
            },
        })
            .then(function (response) {
                console.log(response);
                setusers(response.data);
            })
            .catch(function (error) {
                console.log(error);

            });
    }, []);

    // const handle = (item) => {
    //     setmer(true)
    //     axios.get('https://stekpayout.onrender.com/users', {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //             setusers(response.data);
    //             setIsLoading(false);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //             setIsLoading(false);
    //         });
    //     setusers()
    // };
    return (
        <div>
            <Sidebar />
            <div className="card  table-outer">
                {/* <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select Merchants</button>
                    <ul class="dropdown-menu">
                       { users.map( item => (
                            <li><Link class="dropdown-item" onclick={handle(item.id)}>{item.beneficiaryName}</Link>
                        </li>
                                    ))}
                    </ul>
                </div> */}
                <div className="card-body">
                    <div className="table-responsive">
                        <table id="example2" className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Marchant Id</th>
                                    {/* <th>Sr Number</th> */}
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
    )
}

export default MerchantsUserData