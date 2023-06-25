import { useState, type FormEvent } from "react";
import { supabase } from "./supabaseClient";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [{ email, password }, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          required={true}
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Your password"
          value={password}
          required={true}
          onChange={(e) =>
            setCredentials((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <button disabled={loading}>
          {loading ? <span>Loading</span> : <span>Login</span>}
        </button>
      </div>
    </form>
  );
}
