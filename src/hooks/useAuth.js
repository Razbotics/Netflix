import { useEffect, useState } from "react";

const useAuth = (firebase) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    await firebase.auth().onAuthStateChanged((usr) => setUser(usr));
  };

  useEffect(() => {
    getUser();
  }, [getUser]);

  return { user };
};

export default useAuth;
