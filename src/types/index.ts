export type Scene = 'nursing' | 'daycare' | 'school' | 'construction' | 'event';
export type FileFormat = 'pdf' | 'word';
export type NursingTemplate = 'daily' | 'vitals' | 'medication';
export type DaycareTemplate = 'activityLog' | 'healthCheck' | 'communicationBook';
export type ConstructionTemplate = 'safetyReport' | 'progressReport' | 'checklist';
export type SchoolTemplate = 'gradeReport' | 'attendanceSheet' | 'classNewsletter';
export type EventTemplate = 'schedule' | 'participantList' | 'budgetSheet';


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

export interface NursingTemplateOption {
  id: NursingTemplate;
  title: string;
  description: string;
  icon: string;
  fields: FormField[];
}

export interface DaycareTemplateOption {
  id: DaycareTemplate;
  title: string;
  description: string;
  icon: string;
  fields: FormField[];
}

export interface ConstructionTemplateOption {
  id: ConstructionTemplate;
  title: string;
  description: string;
  icon: string;
  fields: FormField[];
}

export interface SchoolTemplateOption {
  id: SchoolTemplate;
  title: string;
  description: string;
  icon: string;
  fields: FormField[];
}

export interface EventTemplateOption {
  id: EventTemplate;
  title: string;
  description: string;
  icon: string;
  fields: FormField[];
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'time' | 'date' | 'number' | 'select' | 'checkboxGroup';
  options?: string[];
  required?: boolean;
  placeholder?: string;
}

export interface FormData {
  [key: string]: string;
}

export interface AppState {
  selectedScene: Scene | null;
  setSelectedScene: (scene: Scene | null) => void;
  selectedTemplate: NursingTemplate | DaycareTemplate | ConstructionTemplate | null;
  setSelectedTemplate: (template: NursingTemplate | DaycareTemplate | ConstructionTemplate | null) => void;
  formData: FormData;
  setFormData: (data: FormData) => void;
  selectedFormat: FileFormat | null;
  setSelectedFormat: (format: FileFormat | null) => void;
}
