import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary Login
    if (
      email === "admin@bouquethouse.com" &&
      password === "123456"
    ) {
      localStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      alert("Wrong Email or Password");
    }
  };

  return (
    <section className="max-w-md mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">
        Admin Login
      </h1>

      <form onSubmit={handleLogin} className="space-y-5">
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-xl p-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-xl p-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-pink-600 text-white py-4 rounded-xl hover:bg-pink-700"
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;