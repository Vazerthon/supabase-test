import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function useAuth() {
  const [loading, setLoading] = useState(false);
  const [{ email, password }, setCredentials] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
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

  const signout = () => supabase.auth.signOut();

  return {
    loading,
    email,
    password,
    setCredentials,
    login,
    signout,
  };
}
