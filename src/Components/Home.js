import React from "react";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div className="page-wrapper">
        <div className="page-content">
          <div className="card radius-10">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 row-group g-0">
              <div className="col">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0">9526</h5>
                    <div className="ms-auto">
                      <i className="bx bx-cart fs-3 text-white" />
                    </div>
                  </div>
                  <div className="progress my-3" style={{ height: 4 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center text-white">
                    <p className="mb-0">Total Payout Txn..</p>
                    <p className="mb-0 ms-auto">
                      +4.2%
                      <span>
                        <i className="bx bx-up-arrow-alt" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0">$8323</h5>
                    <div className="ms-auto">
                      <i className="bx bx-dollar fs-3 text-white" />
                    </div>
                  </div>
                  <div className="progress my-3" style={{ height: 4 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center text-white">
                    <p className="mb-0">Total Revenue</p>
                    <p className="mb-0 ms-auto">
                      +1.2%
                      <span>
                        <i className="bx bx-up-arrow-alt" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0">6200</h5>
                    <div className="ms-auto">
                      <i className="bx bx-group fs-3 text-white" />
                    </div>
                  </div>
                  <div className="progress my-3" style={{ height: 4 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center text-white">
                    <p className="mb-0">Total Private Revnue</p>
                    <p className="mb-0 ms-auto">
                      +5.2%
                      <span>
                        <i className="bx bx-up-arrow-alt" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0">5630</h5>
                    <div className="ms-auto">
                      <i className="bx bx-envelope fs-3 text-white" />
                    </div>
                  </div>
                  <div className="progress my-3" style={{ height: 4 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center text-white">
                    <p className="mb-0">Faild User</p>
                    <p className="mb-0 ms-auto">
                      +2.2%
                      <span>
                        <i className="bx bx-up-arrow-alt" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
          </div>
          <div className="row">
            <div className="col-12 col-lg-8 col-xl-8 d-flex">
              <div className="card radius-10 w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div>
                      <h5 className="mb-0">Users</h5>
                    </div>
                    <div className="dropdown options ms-auto">
                      <div
                        className="dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown"
                      >
                        <i className="bx bx-dots-horizontal-rounded" />
                      </div>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex align-items-center ms-auto font-13 gap-2 my-3">
                    <span className="border px-1 rounded cursor-pointer">
                      <i className="bx bxs-circle me-1 text-white" />
                      New Users
                    </span>
                    <span className="border px-1 rounded cursor-pointer">
                      <i className="bx bxs-circle me-1 text-light-1" />
                      Old Users
                    </span>
                  </div>
                  <div className="chart-container-1">
                    <canvas id="chart1" />
                  </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-cols-xl-3 g-0 row-group text-center border-top">
                  <div className="col">
                    <div className="p-3">
                      <h5 className="mb-0">45.87M</h5>
                      <small className="mb-0">
                        Overall Visitor{" "}
                        <span>
                          {" "}
                          <i className="bx bx-up-arrow-alt align-middle" />{" "}
                          2.43%
                        </span>
                      </small>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3">
                      <h5 className="mb-0">15:48</h5>
                      <small className="mb-0">
                        Visitor Duration{" "}
                        <span>
                          {" "}
                          <i className="bx bx-up-arrow-alt align-middle" />{" "}
                          12.65%
                        </span>
                      </small>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-3">
                      <h5 className="mb-0">245.65</h5>
                      <small className="mb-0">
                        Pages/Visit{" "}
                        <span>
                          {" "}
                          <i className="bx bx-up-arrow-alt align-middle" />{" "}
                          5.62%
                        </span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-xl-4 d-flex">
              <div className="card radius-10 overflow-hidden w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <div>
                      <h5 className="mb-0">Weekly Users</h5>
                    </div>
                    <div className="dropdown options ms-auto">
                      <div
                        className="dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown"
                      >
                        <i className="bx bx-dots-horizontal-rounded" />
                      </div>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="chart-js-container2">
                    <div className="piechart-legend">
                      <h3 className="mb-1">95K</h3>
                      <h6 className="mb-0">Total Users</h6>
                    </div>
                    <canvas id="chart2" />
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center mb-0">
                    <tbody>
                      <tr className="border-top">
                        <td>
                          <i className="bx bxs-circle text-white me-2" /> Payout
                        </td>
                        <td>$5856</td>
                        <td>+55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="bx bxs-circle text-light-2 me-2" />
                          Affiliate
                        </td>
                        <td>$2602</td>
                        <td>+25%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="bx bxs-circle text-light-3 me-2" />
                          Revnue
                        </td>
                        <td>$1802</td>
                        <td>+15%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/*End Row*/}
          <div className="row row-cols-1 row-cols-lg-3">
            <div className="col">
              <div className="card radius-10">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="w_chart easy-dash-chart1" data-percent={60}>
                      <span className="w_percent" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0">Sales Of Total Payout</h6>
                      <small className="mb-0">
                        22.14%{" "}
                        <i className="bx bxs-up-arrow align-middle me-1" />
                        Since Last Week
                      </small>
                    </div>
                    <div className="ms-auto fs-1 text-white">
                      <i className="bx bxl-facebook" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card radius-10">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="w_chart easy-dash-chart2" data-percent={65}>
                      <span className="w_percent" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0">Twitter Tweets</h6>
                      <small className="mb-0">
                        32.15%{" "}
                        <i className="bx bxs-up-arrow align-middle me-1" />
                        Since Last Week
                      </small>
                    </div>
                    <div className="ms-auto fs-1 text-white">
                      <i className="bx bxl-twitter" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card radius-10">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="w_chart easy-dash-chart3" data-percent={75}>
                      <span className="w_percent" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0">Youtube Subscribers</h6>
                      <small className="mb-0">
                        58.24%{" "}
                        <i className="bx bxs-up-arrow align-middle me-1" />
                        Since Last Week
                      </small>
                    </div>
                    <div className="ms-auto fs-1 text-white">
                      <i className="bx bxl-youtube" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Row*/}
          <div className="row">
            <div className="col-12 col-lg-12 col-xl-6">
              <div className="card radius-10">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div>
                      <h5 className="mb-0">Selling Region</h5>
                    </div>
                    <div className="dropdown options ms-auto">
                      <div
                        className="dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown"
                      >
                        <i className="bx bx-dots-horizontal-rounded" />
                      </div>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="dashboard-map" style={{ height: 335 }} />
                </div>
                <div className="table-responsive">
                  <table className="table table-hover align-items-center mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Country</th>
                        <th>Income</th>
                        <th>Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <i className="flag-icon flag-icon-ca me-2" /> USA
                        </td>
                        <td>$4,586</td>
                        <td>
                          <span id="trendchart1" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="flag-icon flag-icon-us me-2" />
                          Canada
                        </td>
                        <td>$2,089</td>
                        <td>
                          <span id="trendchart2" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="flag-icon flag-icon-in me-2" />
                          India
                        </td>
                        <td>$3,039</td>
                        <td>
                          <span id="trendchart3" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="flag-icon flag-icon-gb me-2" />
                          UK
                        </td>
                        <td>$2,309</td>
                        <td>
                          <span id="trendchart4" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="flag-icon flag-icon-de me-2" />
                          Germany
                        </td>
                        <td>$7,209</td>
                        <td>
                          <span id="trendchart5" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 col-xl-6">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="card radius-10 overflow-hidden">
                    <div className="card-body">
                      <p className="mb-2">Page Views</p>
                      <h4 className="mb-0">
                        8,293{" "}
                        <small className="font-13 text-white">
                          5.2% <i className="bx bx-up-arrow-alt" />
                        </small>
                      </h4>
                    </div>
                    <div className="chart-container-2">
                      <canvas id="chart3" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="card radius-10 overflow-hidden">
                    <div className="card-body">
                      <p className="mb-2">Total Clicks</p>
                      <h4 className="mb-0">
                        7,493{" "}
                        <small className="font-13 text-white">
                          1.4% <i className="bx bx-up-arrow-alt" />
                        </small>
                      </h4>
                    </div>
                    <div className="chart-container-2">
                      <canvas id="chart4" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="card radius-10">
                    <div className="card-body text-center">
                      <p className="mb-4">Total Downloads</p>
                      <input
                        className="knob"
                        data-width={190}
                        data-height={190}
                        data-readonly="true"
                        data-thickness=".15"
                        data-angleoffset={90}
                        data-linecap="round"
                        data-bgcolor="rgba(0, 0, 0, 0.08)"
                        data-fgcolor="#fff"
                        data-max={15000}
                        defaultValue={8550}
                      />
                      <hr />
                      <p className="mb-0 small-font text-center">
                        3.4% <i className="zmdi zmdi-long-arrow-up" /> since
                        yesterday
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="card radius-10">
                    <div className="card-body">
                      <p>Device Storage</p>
                      <h4 className="mb-3">42620/50000</h4>
                      <hr />
                      <div className="progress-wrapper mb-4">
                        <p>
                          Documents <span className="float-end">12GB</span>
                        </p>
                        <div className="progress" style={{ height: 5 }}>
                          <div
                            className="progress-bar bg-white"
                            style={{ width: "80%" }}
                          />
                        </div>
                      </div>
                      <div className="progress-wrapper mb-4">
                        <p>
                          Images <span className="float-end">10GB</span>
                        </p>
                        <div className="progress" style={{ height: 5 }}>
                          <div
                            className="progress-bar bg-white"
                            style={{ width: "60%" }}
                          />
                        </div>
                      </div>
                      <div className="progress-wrapper mb-4">
                        <p>
                          Mails <span className="float-end">5GB</span>
                        </p>
                        <div className="progress" style={{ height: 5 }}>
                          <div
                            className="progress-bar bg-white"
                            style={{ width: "40%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Row*/}
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-4 d-flex">
              <div className="card radius-10 overflow-hidden w-100">
                <div className="card-body">
                  <p>Total Earning</p>
                  <h4 className="mb-0">$287,493</h4>
                  <small>
                    1.4% <i className="bx bx-up-arrow-alt" /> Since Last Month
                  </small>
                  <hr />
                  <p>Total Sales</p>
                  <h4 className="mb-0">$87,493</h4>
                  <small>
                    5.43% <i className="bx bx-up-arrow-alt" /> Since Last Month
                  </small>
                  <div className="mt-5">
                    <div className="chart-container-4">
                      <canvas id="chart5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Row*/}
        </div>
      </div>
    </div>
  );
};

export default Home;
