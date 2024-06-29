import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PATIENT_PROFILES_URL } from "../constants/api";

const PatientProfileForm = () => {
  const { profileId } = useParams();
  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: "",
    address: "",
    phone_number: "",
    email: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (profileId) {
      axios
        .get(`${PATIENT_PROFILES_URL}${profileId}`)
        .then((response) => setProfile({
            first_name: response.data.first_name || '',
            last_name: response.data.last_name || '',
            gender: response.data.gender || '',
            date_of_birth: response.data.date_of_birth || '',
            address: response.data.address || '',
            phone_number: response.data.phone_number || '',
            email: response.data.email || ''
        }))
        .catch((error) => console.error(error));
    }
  }, [profileId]);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = profileId ? axios.patch : axios.post;
    const url = profileId
      ? `${PATIENT_PROFILES_URL}${profileId}/`
      : PATIENT_PROFILES_URL;

    request(url, profile)
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Add Patient Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            value={profile.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            value={profile.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            name="gender"
            id="gender"
            value={profile.gender}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date_of_birth">Date of birth:</label>
          <input
            type="date"
            name="date_of_birth"
            id="date_of_birth"
            value={profile.date_of_birth}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            rows={3}
            name="address"
            id="address"
            value={profile.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="number"
            name="phone_number"
            id="phone_number"
            value={profile.phone_number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={profile.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
};

export default PatientProfileForm;
