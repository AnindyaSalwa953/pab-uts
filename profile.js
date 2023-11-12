import { Heading, Center } from "native-base";
import { Header } from "../components";

const Profile = () => {
  return (
    <>
      <Header title={"Profile"} />
      <Center flex={4}>
        <Heading>Profile</Heading>
      </Center>
    </>
  );
};

export default Profile;