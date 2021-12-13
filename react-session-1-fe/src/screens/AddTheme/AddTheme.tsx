import * as S from "./AddTheme.style";
import { HexColorPicker } from "react-colorful";
import { colorsArr } from "../../utils/colors.constants";
import { useState } from "react";
import { Input } from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import axiosInstance from "../../utils/axiosInstance";
import { useHistory } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";

const useSubmitTheme = () => {
  const history = useHistory();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    "add-theme",
    async ({ title, ...colors }: Omit<Theme, "id">) => {
      const { data } = await axiosInstance.post<{ data: ThemeEntity }>(
        "themes",
        {
          data: {
            title,
            ...colors,
          },
        }
      );

      return data.data;
    },
    {
      onSuccess: (response) => {
        const themes = (queryClient.getQueryData("themes") as Theme[]) || [];
        queryClient.setQueryData("themes", [
          ...themes,
          {
            id: response.id,
            ...response.attributes,
          },
        ]);

        history.push("/");
      },

      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutate;
};

const AddTheme = () => {
  const [themeName, setThemeName] = useState("");
  const [colorsState, setColorsState] = useState<Colors>({
    background: "#fff",
    text: "#fff",
    secondary: "#fff",
    primary: "#fff",
  });
  const handleSubmit = useSubmitTheme();

  const handleColorChange = (color: string, colorType: string) => {
    setColorsState((prev) => ({
      ...prev,
      [colorType]: color,
    }));
  };

  return (
    <div>
      <h1>Create theme</h1>
      <S.InputContainer>
        <label htmlFor="theme-name">theme name</label>
        <Input
          id="theme-name"
          name="theme-name"
          value={themeName}
          onChange={(e) => setThemeName(e.target.value)}
          placeholder="theme name"
        />
      </S.InputContainer>
      <S.ColorsContainer>
        {colorsArr.map((colorType) => (
          <div key={colorType}>
            <HexColorPicker
              color={colorsState[colorType]}
              onChange={(color) => handleColorChange(color, colorType)}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>{colorType}</h3>
              <h3 style={{ color: colorsState[colorType] }}>
                {colorsState[colorType]}
              </h3>
            </div>
          </div>
        ))}
      </S.ColorsContainer>
      <Button
        onClick={() => handleSubmit({ ...colorsState, title: themeName })}
      >
        Submit
      </Button>
    </div>
  );
};

export default AddTheme;
