import * as S from "./AddTheme.style";
import { HexColorPicker } from "react-colorful";
import { colorsArr } from "../../utils/colors.constants";
import { useState } from "react";
import { Input } from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import axiosInstance from "../../utils/axiosInstance";
import { useHistory } from "react-router-dom";

const AddTheme = () => {
  const history = useHistory();
  const [themeName, setThemeName] = useState("");
  const [colorsState, setColorsState] = useState<Colors>({
    background: "#fff",
    text: "#fff",
    secondary: "#fff",
    primary: "#fff",
  });

  const handleColorChange = (color: string, variant: string) => {
    setColorsState((prev) => ({
      ...prev,
      [variant]: color,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axiosInstance.post("themes", {
        data: {
          title: themeName,
          ...colorsState,
        },
      });
      console.log("success");
      history.push("/");
    } catch (e) {}
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
        {colorsArr.map((variant) => (
          <div key={variant}>
            <HexColorPicker
              color={colorsState[variant]}
              onChange={(color) => handleColorChange(color, variant)}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>{variant}</h3>
              <h3 style={{ color: colorsState[variant] }}>
                {colorsState[variant]}
              </h3>
            </div>
          </div>
        ))}
      </S.ColorsContainer>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default AddTheme;
