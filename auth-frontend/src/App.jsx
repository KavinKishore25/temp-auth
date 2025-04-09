import { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';

function App() {
  const [token, setToken] = useState('');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Auth App</h1>
      <Signup />
      <hr />
      <Login setToken={setToken} />
      <hr />
      <Profile token={token} />
    </div>
  );
}

export default App;
