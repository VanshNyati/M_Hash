import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('/api/user/details', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUserDetails(response.data);
      } catch (err) {
        console.error('Error fetching user details:', err);
      }
    };

    fetchUserDetails();
  }, []);

  if (!userDetails) return <div>Loading...</div>;

  return (
    <div>
      <h2>Your Details</h2>
      <p>Business Name: {userDetails.businessName}</p>
      <p>Email: {userDetails.email}</p>
      <p>Phone: {userDetails.phone}</p>
      <p>Business Address: {userDetails.businessAddress}</p>
      <p>Postal Code: {userDetails.postalCode}</p>
    </div>
  );
};

export default UserDetails;
