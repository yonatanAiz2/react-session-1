import axios from "axios";
import { useState, useEffect } from "react";
import { themesMock } from "../../../utils/test-utils/mocks/themes";

export const useFetchThemes = () => {
  const status: StateStatus = "idle";
  const themes: Theme[] = [];

  const getThemes = async () => {
    try {
      const { data } = { data: themesMock }; // will be API call;
      const fetchedThemes: Theme[] = data.map((theme) => ({
        id: theme.id,
        ...theme.attributes,
      }));
    } catch (e) {}
  };

  return { themes, status };
};
