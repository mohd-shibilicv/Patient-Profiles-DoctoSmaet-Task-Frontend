import React, { useEffect, useState } from "react";
import { PATIENT_PROFILES_URL } from "../constants/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PatientProfileDetailPage = () => {
  const { profileId } = useParams();
  const [patientDetails, setPatientDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${PATIENT_PROFILES_URL}${profileId}`)
      .then((response) => setPatientDetails(response.data))
      .catch((error) => console.error(error));
  }, [profileId]);

  const handleDelete = () => {
    axios
      .delete(`${PATIENT_PROFILES_URL}${profileId}/`)
      .then(() => navigate("/"))
      .catch(error => console.error(error))
  }

  return (
    <div>
      <h1>
        {patientDetails.first_name} {patientDetails.last_name}
      </h1>
      <p>Gender: {patientDetails.gender}</p>
      <p>Date of Birth: {patientDetails.date_of_birth}</p>
      <p>Address: {patientDetails.address}</p>
      <p>Phone: {patientDetails.phone_number}</p>
      <p>Email: {patientDetails.email}</p>
      <Link to="/">Back to List</Link>
      <br />
      <br />
      <div>
        <button>
          <Link to={`/${profileId}/edit`}>Edit</Link>
        </button>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PatientProfileDetailPage;
