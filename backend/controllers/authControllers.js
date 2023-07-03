const register = (req, res) => {
  res.send("This is REGISTER controller.");
};
const login = (req, res) => {
  res.send("This is LOGIN controller.");
};
const logout = (req, res) => {
  res.send("This is LOGOUT controller.");
};

export { register, login, logout };
