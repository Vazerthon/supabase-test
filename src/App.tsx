import { useState, useEffect } from "react";
import { type Session } from "@supabase/supabase-js";
import { ChakraProvider } from "@chakra-ui/react";
import { supabase } from "./supabaseClient";
import Auth from "./Auth";
import Account from "./Account";

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <ChakraProvider>
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </ChakraProvider>
  );
}

export default App;
