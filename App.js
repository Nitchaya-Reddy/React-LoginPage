import React from 'react';
import './App.css';
import Logo1 from './Logo1.jpg';

const Logo = () => {
  return (
    <div>
      <img src={Logo1} alt="logo" />
      <h1>Company Name</h1>
    </div>
  );
};

const SignIn = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };
  const handleReset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <div className="signin">
      <Logo />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br><br></br>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br><br></br>
        <button type="reset" onClick={handleReset}>Reset</button>
        <br></br><br></br>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};


function App() {
  return (
      <div className="App">
        <SignIn />
      </div>
  );
}

export default App;