import api from "../utils/api";

const fetchUser = async () => {
  const { data } = await api.get(`/get_user`);
  return data || null;
};

export { fetchUser };
