import { type FormEvent } from "react";
import Page from "./Page";
import { Button } from "@chakra-ui/react";
import LabelledInput from "../Components/LabelledInput";
import useAuth from "../Hooks/useAuth";

export default function Auth() {
  const { loading, setCredentials, email, password, login } = useAuth();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login();
  };

  return (
    <Page title="Welcome! Please log in">
      <form onSubmit={handleLogin}>
        <LabelledInput
          label="Email"
          type="email"
          placeholder="Your email"
          value={email}
          isRequired
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <LabelledInput
          label="Password"
          type="password"
          placeholder="Your password"
          value={password}
          isRequired
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Loading" : "Login"}
        </Button>
      </form>
    </Page>
  );
}
