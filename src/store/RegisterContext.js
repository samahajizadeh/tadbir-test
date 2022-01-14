import PropTypes from "prop-types";

const { createContext, useState } = require("react");

const RegisterContext = createContext({
  userInfo: {},
  addUser: (user) => {},
});

export const RgisterContextProvider = ({ children }) => {
  const [addUser, setAddUser] = useState({});
  const addUserHandler = (user) => {
    setAddUser(user);
  };
  const ValuesContext = {
    userInfo: addUser,
    addUser: addUserHandler,
  };
  return (
    <RegisterContext.Provider value={ValuesContext}>
      {children}
    </RegisterContext.Provider>
  );
};

RegisterContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default RegisterContext;
