import Page from "./Page";
import { Button, FormLabel, Input, VStack } from "@chakra-ui/react";
import { type Session } from "@supabase/supabase-js";
import useProfile from "../Hooks/useProfile";
import useAuth from "../Hooks/useAuth";

type Props = {
  session: Session;
};

export default function Account({ session }: Props) {
  const { loading, updateProfile, fullName, setFullname } = useProfile({
    session,
  });
  const { signout } = useAuth();

  return (
    <Page title="Welcome!">
      <form onSubmit={updateProfile}>
        <VStack>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="text" value={session.user.email} disabled />
          <FormLabel htmlFor="username">Name</FormLabel>
          <Input
            id="full_name"
            type="text"
            required
            value={fullName || ""}
            onChange={(e) => setFullname(e.target.value)}
          />

          <Button type="submit" disabled={loading}>
            {loading ? "Loading ..." : "Update"}
          </Button>

          <Button type="button" onClick={signout}>
            Sign Out
          </Button>
        </VStack>
      </form>
    </Page>
  );
}
