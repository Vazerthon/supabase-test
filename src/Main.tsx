import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { type Session } from "@supabase/supabase-js";
import { supabase } from "./supabaseClient";
import theme from "./theme.ts";
import Auth from "./Pages/Auth";
import Account from "./Pages/Account";

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
    <>
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
