import { useEffect, useState } from 'react';
import axios from 'axios';

function Profile({ token }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(res.data.message);
      } catch (err) {
        setMessage(err.response?.data?.message || 'Failed to load profile');
      }
    };

    if (token) fetchProfile();
  }, [token]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Profile</h2>
      {token ? <p>{message}</p> : <p>Please login to see your profile.</p>}
    </div>
  );
}

export default Profile;
