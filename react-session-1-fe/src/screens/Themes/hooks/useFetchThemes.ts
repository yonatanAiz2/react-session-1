import { useState, useEffect } from "react";
import axiosInstance from "../../../utils/axiosInstance";

export const useFetchThemes = () => {
  const [status, setStatus] = useState<StateStatus>("idle");
  const [themes, setThemes] = useState<Theme[]>([]);

  const getThemes = async () => {
    setStatus("loading");
    try {
      const { data } = await axiosInstance.get<{ data: ThemeEntity[] }>(
        "themes"
      );
      const fetchedThemes: Theme[] = data.data.map((theme) => ({
        id: theme.id,
        ...theme.attributes,
      }));

      setThemes(fetchedThemes);
      setStatus("success");
    } catch (e) {
      setStatus("rejected");
    }
  };
  useEffect(() => {
    getThemes();
  }, []);

  return { themes, status };
};
