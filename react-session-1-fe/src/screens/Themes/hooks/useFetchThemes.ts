import axios from "axios";
import { useState, useEffect } from "react";
import { themesMock } from "../../../utils/test-utils/mocks/themes";

export const useFetchThemes = () => {
  const [status, setStatus] = useState<StateStatus>("idle");
  const [themes, setThemes] = useState<Theme[]>([]);

  const getThemes = async () => {
    setStatus("loading");
    try {
      const { data } = { data: themesMock }; // will be API call;
      const fetchedThemes: Theme[] = data.map((theme) => ({
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
