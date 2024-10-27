import { create } from 'zustand';
import { AppState, Scene, FormData, FileFormat, NursingTemplate, DaycareTemplate, SchoolTemplate, ConstructionTemplate, EventTemplate } from '../types';

export const useStore = create<AppState>((set) => ({
  selectedScene: null,
  setSelectedScene: (scene: Scene | null) => set({ selectedScene: scene }),
  selectedTemplate: null,
  setSelectedTemplate: (template: NursingTemplate | DaycareTemplate | ConstructionTemplate | null) => set({ selectedTemplate: template }),
  formData: {},
  setFormData: (data: FormData) => set({ formData: data }),
  selectedFormat: null,
  setSelectedFormat: (format: FileFormat | null) => set({ selectedFormat: format }),
}));
