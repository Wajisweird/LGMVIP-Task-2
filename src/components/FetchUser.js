import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const FetchUser = () => {
  const [userData, setUserData] = useState(null);
  const [loader, setLoader] = useState(false);
  const Getdata = () => {
    setLoader(true);
    axios.get("https://reqres.in/api/users?page=1")
      .then((response) => response.data)
      .then((data) => {
        setUserData(data);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoader(false);
      });
  };

  return (
    <div className="container">
      <nav className="nav">
        <h1>ALPHA</h1>
        <button onClick={Getdata}>Get Data</button>
      </nav>

      <div className="mapp">
        {loader ? (
          <p className="loader">Loading...</p>
        ) : (
          userData && (
            <div className="maps">
              {userData.data.map((user) => (
                <div key={user.id} className="map">
                  <img src={user.avatar} alt="User Avatar" />
                  <h3>{`${user.first_name} ${user.last_name}`}</h3>

                  <p>{user.email}</p>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FetchUser;