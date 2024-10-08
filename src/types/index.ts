type BaseProps = {
  id: string;
  name: string;
};

export type StackProps = BaseProps;
export type PhotosProps = BaseProps;

export type WorksProps = BaseProps & {
  thumbnail: string;
  github: string;
  preview: string;
  description: string;
};

export type NotesProps = BaseProps & {
  thumbnail: string;
  github: string;
  preview: string;
  description: string;
  content: string;
};

export type RoutesProps = BaseProps;
