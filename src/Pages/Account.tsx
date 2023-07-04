import Page from "./Page";
import { Button, VStack } from "@chakra-ui/react";
import { type Session } from "@supabase/supabase-js";
import useProfile from "../Hooks/useProfile";
import useAuth from "../Hooks/useAuth";
import LabelledInput from "../Components/LabelledInput";

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
          <LabelledInput
            label="Email"
            type="email"
            isDisabled
            value={session.user.email}
          />

          <LabelledInput
            label="Name"
            type="text"
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
            isRequired
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
