import "./Login.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      login(foundUser);
      navigate("/");
    } else {
      setError("Neplatny e-mail nebo heslo.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Prihlasit se</h1>
        <form onSubmit={handleSubmit}>
          <label>
            E-mail
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Heslo
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          {error && <p>{error}</p>}
          <button>Prihlasit se</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
