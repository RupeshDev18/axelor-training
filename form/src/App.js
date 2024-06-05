import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import Option from "./components/Option/Option";

const SERVERS = ["apache", "glassfish", "oracle", "nginx"];
function App() {
  const [credentials, setCredentials] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    const regex = /\d+/;
    const { userName, password } = credentials;
    if (!userName) {
      setErrors((error) => ({ ...error, userName: "username is required" }));
    }
    if (!password || password.length < 8) {
      return setErrors((error) => ({
        ...error,
        password: "Password is too short",
      }));
    }
    if (!regex.test(password)) {
      setErrors({
        ...errors,
        password: "A digit must be present in the password",
      });
    } else {
      setErrors({ ...errors, password: "" });
    }
    return false;
  };

  return (
    <div className="App">
      <div className="container">
        <form action="" method="post" onSubmit={handleSubmit}>
          <div className="items">
            <Input
              label="Username"
              type="text"
              id="userName"
              name="userName"
              onChange={(e) =>
                setCredentials({ ...credentials, userName: e.target.value })
              }
              errors={errors}
            />
          </div>

          <div className="items">
            <Input
              label="Password"
              type="password"
              id="password"
              name="password"
              errors={errors}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>

          <div className="items">
            <Input
              label="City of Employment"
              type="text"
              id="city"
              name="city"
              errors={errors}
            />
          </div>

          <div className="items">
            <label>Web server: </label>
            <select name="server">
              <option value="server">--Choose a server--</option>
              {SERVERS.map((server) => (
                <Option children={server} />
              ))}
            </select>
          </div>

          <div className="check">
            <label>Please specify your role: </label>
            <div className="box">
              <div className="items">
                <input type="radio" name="role" id="adm" />
                <label>Admin</label>
              </div>
              <div className="items">
                <input type="radio" name="role" id="eng" />
                <label>Engineer</label>
              </div>
              <div className="items">
                <input type="radio" name="role" id="Manager" />
                <label>Manager</label>
              </div>
              <div className="items">
                <input type="radio" name="role" id="guest" />
                <label>Guest</label>
              </div>
            </div>
          </div>
          <div className="check">
            <label htmlFor="sign-on"> Single Sign-on to the following: </label>
            <div className="box">
              <div className="items">
                <input type="checkbox" name="admin" id="admin" />
                <label htmlFor="admin">Admin</label>
              </div>
              <div className="items">
                <input type="checkbox" name="Payroll" id="Payroll" />
                <label htmlFor="Payroll">Payroll</label>
              </div>
              <div className="items">
                <input type="checkbox" name="Self-service" id="Self-service" />
                <label htmlFor="Self-service">Self-service</label>
              </div>
            </div>
          </div>
          <div className="btn">
            <Button type="submit">Login</Button>
            <Button type="reset">Reset</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
