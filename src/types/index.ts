export type Scene = 'nursing' | 'daycare' | 'school' | 'construction' | 'event';
export type FileFormat = 'pdf' | 'excel' | 'word';

export interface SceneOption {
  id: Scene;
  title: string;
  description: string;
  icon: string;
}

export interface FileFormatOption {
  id: FileFormat;
  title: string;
  description: string;
  icon: string;
}

export interface FormData {
  [key: string]: string;
}

export interface AppState {
  selectedScene: Scene | null;
  setSelectedScene: (scene: Scene | null) => void;
  formData: FormData;
  setFormData: (data: FormData) => void;
  selectedFormat: FileFormat | null;
  setSelectedFormat: (format: FileFormat | null) => void;
}