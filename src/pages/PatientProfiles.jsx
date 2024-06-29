import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PatientProfiles = () => {
    const [profiles, setProfiles] = useState([]);
    console.log(profiles);

    useEffect(() => {
        const response = axios.get("http://127.0.0.1:8000/api/patient-profile/")
        console.log(response.json);
        setProfiles(response.data)
    })

  return (
    <>
    <div className='w-full'>
        <div className='mx-auto'>
            <h2>Patient Profiles</h2>
        </div>
        {profiles ? (
            <ul>
                {profiles.map((profile) => {
                    <li key={profile.id}>{profile.name}</li>
                })}
            </ul>
        ) : (
            <h1>Loading</h1>
        )}
    </div>
    </>
  )
}

export default PatientProfiles