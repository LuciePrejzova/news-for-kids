import "./Register.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (step === 3) {
      const timeout = setTimeout(() => {
        navigate("/login");
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [step, navigate]);

  const formSubmit = (event) => {
    event.preventDefault();
    if (!password || !confirmPassword) {
      setStep(2);
      return;
    }

    if (password !== confirmPassword) {
      setError("Hesla se neshoduji");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some((user) => user.email === email);
    if (userExists) {
      setError("Uzivatel s timto e-mailem jiz existuje.");
      return;
    }

    const newUser = { email, password, favorites: [] };
    const updatedUsers = [...existingUsers, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    console.log(localStorage.getItem("users"));

    setStep(3);
  };

  return (
    <div className="register-container">
      <h1>Neomezené čtení zpráv</h1>
      <p>Pro vytvoření profilu zadejte e-mail.</p>

      {step === 1 && (
        <form onSubmit={formSubmit}>
          <input
            type="email"
            placeholder="E-mailová adresa"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button>Začít</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={formSubmit}>
          <input type="email" value={email} readOnly />
          <input
            type="password"
            placeholder="create a password"
            value={password}
            onChange={(event) => {
              const value = event.target.value;
              setPassword(value);

              setPasswordError(
                value.length < 8 ? "Heslo musí mít alespoň 8 znaků" : ""
              );

              setConfirmError(
                confirmPassword && value !== confirmPassword
                  ? "Hesla se neshodují"
                  : ""
              );
            }}
          />

          <input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(event) => {
              const value = event.target.value;
              setConfirmPassword(value);

              if (password && password !== value) {
                setConfirmError("Hesla se neshodují");
              } else {
                setConfirmError("");
              }
            }}
          />
          {passwordError && <p className="error">{passwordError}</p>}
          {confirmError && <p className="error">{confirmError}</p>}
          {error && <p>{error}</p>}
          <button disabled={passwordError || confirmError}>Dokončit</button>
        </form>
      )}
      {step === 3 && (
        <div className="register-success">Registrace probehla uspesne</div>
      )}
    </div>
  );
};

export default Register;
