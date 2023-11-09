import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../component/loading";
import Navigation from "../component/navigation";

export const ProfileComponent = () => {
  const { user } = useAuth0();

  return (
    <div>
        <Navigation />
        { user && <>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{JSON.stringify(user, null, 2)}</p>
            </> 
        }
      </div>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
