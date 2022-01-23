import { useRouter } from "next/router";
import PropTypes from "prop-types";

const { createContext, useState, useEffect } = require("react");

var initialState = {
  userData: null,
  logout:false,
  setUserProfile: (user) => {},
};
const UserContext = createContext(initialState);

function getLocalStorage(key, initialValue) {
  try {
    const value = window.localStorage.getItem(key);
    if (value) return JSON.parse(value);
    // return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    return initialValue;
  }
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => getLocalStorage("user", initialState));
  const [logout, setLogout] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (user) {
      window.localStorage.setItem("user", JSON.stringify(user));
      setLogout(true);
    }
  }, [user]);
  const setUserProfileHandler = (user) => {
    if (user) {
      setUser({ ...user });
      setLogout(true);
    } else {
      window.localStorage.removeItem("user");
      setLogout(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userData: user,
        setUserProfile: setUserProfileHandler,
        logout:logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// UserContext.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
// };
export default UserContext;
