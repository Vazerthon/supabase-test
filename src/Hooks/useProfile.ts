import { useState, useEffect, type FormEvent } from "react";
import { supabase } from "../supabaseClient";
import { type Session } from "@supabase/supabase-js";

type Props = {
  session: Session;
};

export default function useProfile({ session }: Props) {
  const [loading, setLoading] = useState(true);
  const [fullName, setFullname] = useState<string>("");

  useEffect(() => {
    async function getProfile() {
      setLoading(true);
      const { user } = session;

      const { data, error } = await supabase
        .from("profiles")
        .select(`full_name`)
        .eq("id", user.id)
        .single();

      if (error) {
        console.warn(error);
      } else if (data) {
        setFullname(data.full_name);
      }

      setLoading(false);
    }

    getProfile();
  }, [session]);

  async function updateProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    const { user } = session;

    const updates = {
      id: user.id,
      full_name: fullName,
      updated_at: new Date(),
    };

    const { error } = await supabase.from("profiles").upsert(updates);

    if (error) {
      alert(error.message);
    }
    setLoading(false);
  }

  return {
    loading,
    fullName,
    setFullname,
    updateProfile,
  };
}
