import { create } from 'zustand';
import { AppState, Scene, FormData, FileFormat, NursingTemplateOption, DaycareTemplateOption, ConstructionTemplateOption, SchoolTemplateOption, EventTemplateOption } from './type';

export const useStore = create<AppState>((set) => ({
    selectedScene: null,
    setSelectedScene: (scene: Scene | null) => set({ selectedScene: scene }),
    selectedTemplate: null,
    setSelectedTemplate: (template: NursingTemplateOption | DaycareTemplateOption | ConstructionTemplateOption | SchoolTemplateOption | EventTemplateOption | null | undefined) => set({ selectedTemplate: template }),
    formData: {},
    setFormData: (data: FormData) => set({ formData: data }),
    selectedFormat: null,
    setSelectedFormat: (format: FileFormat | null) => set({ selectedFormat: format }),
  }));