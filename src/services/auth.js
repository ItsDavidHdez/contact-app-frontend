export const handleAuth = () => {
  return !!localStorage.getItem("token");
};
