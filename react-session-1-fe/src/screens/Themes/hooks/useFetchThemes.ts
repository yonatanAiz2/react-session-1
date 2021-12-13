import { useQuery } from "react-query";
import axiosInstance from "../../../utils/axiosInstance";

export const useFetchThemes = () => {
  const getThemes = async () => {
    const { data } = await axiosInstance.get<{ data: ThemeEntity[] }>("themes");

    return data.data.map((theme) => ({
      id: theme.id,
      ...theme.attributes,
    })) as Theme[];
  };

  return useQuery("themes", getThemes);
};
