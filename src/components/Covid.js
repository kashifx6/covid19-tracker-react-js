import React, { useEffect, useState } from "react";
import "./Covid.css";
const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      setData(actualData.statewise[0]);
      console.log(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <p className="text-center text-light shadow">
        {" "}
        <i className="fa-solid fa-circle text-danger"></i> Live
      </p>
      <h1 className="text-center text-light shadow">Covid 19 Tracker</h1>
      <div className="row mt-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card shadow bg-success">
            <div className="card-body">
              <h4 className="card-title text-white text-center">Country</h4>

              <h1 className="card-text text-center shadow text-white mb-2">
                Pakistan
              </h1>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card shadow bg-info">
            <div className="card-body">
              <h4 className="card-title text-white text-center">Recovered</h4>

              <h1 className="card-text text-center shadow text-white mb-2">
                {data.recovered}
              </h1>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card shadow bg-primary">
            <div className="card-body">
              <h4 className="card-title text-white text-center">Updated</h4>

              <h1 className="card-text text-center shadow text-white mb-2">
                {data.lastupdatedtime}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card shadow bg-dark">
            <div className="card-body ">
              <h4 className="card-title text-white text-center">Confirmed</h4>

              <h1 className="card-text text-center shadow text-white mb-2">
                {data.confirmed}
              </h1>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card shadow bg-warning">
            <div className="card-body">
              <h4 className="card-title text-white text-center">Death</h4>

              <h1 className="card-text text-center shadow text-white mb-2">
                {data.deaths}
              </h1>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="card shadow bg-danger">
            <div className="card-body">
              <h4 className="card-title text-white text-center">Active</h4>

              <h1 className="card-text text-center shadow text-white mb-2">
                {data.active}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covid;
