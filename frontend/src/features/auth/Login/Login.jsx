import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {useLoginMutation } from '../Login/authApi'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Use RTK Query hook for login mutation
  const [login, { isLoading, error: apiError }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when login begins
    setError(""); // Reset error state
    setSuccess(""); // Reset success state

    try {
      const credentials = { email, password };
      const response = await login(credentials).unwrap(); // Execute login mutation

      // If login is successful, store the token and navigate
      localStorage.setItem("authToken", response.token);
      setSuccess("Login successful! Redirecting...");
      setTimeout(() => navigate("/CourseMain"), 1500); // Redirect after delay
    } catch (err) {
      setError(apiError?.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false); // Set loading to false when login is done
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            disabled={isLoading} // Disable the button while loading
          >
            {isLoading ? (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> {/* Loader */}
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
