import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PATIENT_PROFILES_URL } from "../constants/api";

const PatientProfiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios
      .get(PATIENT_PROFILES_URL)
      .then((response) => setProfiles(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="mx-auto">
          <h2>Patient Profiles</h2>
        </div>
        {profiles.length ? (
          <>
            <ul>
              {profiles.map((profile) => (
                <li key={profile.id}>
                  <Link to={`/${profile.id}`}>
                    {profile.first_name} {profile.last_name}
                  </Link>
                </li>
              ))}
            </ul>
            <li><Link to="/create">Add a profile</Link></li>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default PatientProfiles;
