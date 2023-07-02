import { type FormEvent } from "react";
import Page from "./Page";
import { Button, Input } from "@chakra-ui/react";
import useAuth from "../Hooks/useAuth";

export default function Auth() {
  const { loading, setCredentials, email, password, login } = useAuth();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login();
  };

  const inputSx = {
    width: "100%",
    marginBottom: "4",
    borderColor: "midnightBlue.100",
  };

  return (
    <Page title="Welcome! Please log in">
      <form onSubmit={handleLogin}>
        <Input
          sx={inputSx}
          type="email"
          placeholder="Your email"
          value={email}
          required={true}
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <Input
          sx={inputSx}
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
        <Button type="submit" disabled={loading}>
          {loading ? "Loading" : "Login"}
        </Button>
      </form>
    </Page>
  );
}
