interface Colors {
  primary: string;
  secondary: string;
  text: string;
  background: string;
}

interface Theme extends Colors {
  id: number;
  title: string;
}

interface ThemeAttributes extends Omit<Theme, "id"> {
  createdAt: Date;
  publishedAt: Date;
}

interface ThemeEntity {
  attributes: ThemeAttributes;
  id: number;
}

interface ThemeResponse {
  data: ThemeEntity[];
}

interface ThemeCreateResponse {
  data: ThemeEntity;
}
