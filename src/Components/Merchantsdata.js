import React from 'react'
import axios from 'axios'
import Sidebar from '../utils/sidebar/Sidebar'
import { useState, useEffect } from 'react'
import { useDownloadExcel } from 'react-export-table-to-excel'
import { useRef } from 'react'
import { utils, read } from 'xlsx'
import { excel } from 'react-export-table-to-excel/lib/lib'
import Cookies from 'js-cookie';
//--------------------------Axios Api Data Fatch -------------------------------
const Merchantsdata = () => {
    const [ExcelData, setExcelData] = useState([]);
    // const [excelErorr, setexcelErorr] = useState([])
    const [merchants, setmerchants] = useState([]);
    
    useEffect(() => {
      
        axios.get('https://payout-justpay.onrender.com/Singhtek/merchants', {
            headers: {
                'Authorization': `Bearer ${Cookies.get('_auth')}`
            },
        })
            .then(function (response) {
                console.log(response);
                setmerchants(response.data);
            })
            .catch(function (error) {
                console.log(error);

            });
    }, []);

    const tableRef = useRef(null);
    //--------------------------Export Excel Sheet Data -------------------------------
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: "All Merchant Data.xls",
        sheet: "All Merchant Data.xls",
    });

    //--------------------------Import Excel Sheet Data -------------------------------
    const file_type = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    const handlechange = (e) => {
        const selected_file = e.target.files[0];
        if (selected_file) {
            if (selected_file && file_type.includes(selected_file.type)) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    const workbook = read(e.target.result);
                    const sheet = workbook.SheetNames;
                    if (
                        sheet.length
                    ) {
                        const data = utils.sheet_to_json(workbook.Sheets[sheet[0]]);
                        console.log(data)
                        setmerchants(merchants => merchants.concat(data))

                    }
                }
                reader.readAsArrayBuffer(selected_file)
            } else {

                setExcelData([])
            }
        }

    }

    return (
        <div>
            < Sidebar />
            <div className="card  table-outer">
                <div className="card-body">
                    <div className="button-outers d-flex align-item-center">
                        <button className="btn btn-light buttons-excel buttons-html5 export" onClick={onDownload} tabindex="0" aria-controls="example2" type="button"><span>Export Data Excel</span></button>
                        <div className="input-group mb-3 import-excel">
                            <input type="file" className="form-control" id="inputGroupFile02" onChange={handlechange} />
                            <label className="input-group-text" for="inputGroupFile02">import</label>
                        </div> <br />

                    </div>
                    {/* <div class="col">
                        <div class="card radius-10 bg-primary bg-gradient">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <p class="mb-0 text-white">Total Orders</p>
                                        <h4 class="my-1 text-white">845</h4>
                                    </div>
                                    <div class="text-white ms-auto font-35"><i class="bx bx-cart-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <br />
                    <div className="table-responsive">

                        <table id="example2" className="table table-striped table-bordered" ref={tableRef}>


                            <thead>
                                <tr>
                                    <th>Action</th>
                                    {/* <th>id</th> */}
                                    <th>Customer Name</th>
                                    <th>Debit Account No</th>
                                    <th>Product Code</th>
                                    <th>Beneficiary Code</th>
                                    <th>Wallet Amount</th>
                                    <th>Dealer Code</th>
                                    <th>Docs</th>
                                    <th>Status</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    merchants.map(item => (
                                        <tr>
                                            <td><button type="button" class="btn btns btn-light">{item.customer_name} Users Details</button> </td>
                                            {/* <td>  {item.singhtek_id} </td> */}
                                            <td>  {item.customer_name} </td>
                                            <td>  {item.debit_account_no} </td>
                                            <td>  {item.product_code} </td>
                                            <td>  {item.beneficiary_code} </td>
                                            <td>  {item.amount} </td>
                                            <td>  {item.dealer_code} </td>
                                            <td>  {item.docs} </td>
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

export default Merchantsdata