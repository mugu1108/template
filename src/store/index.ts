import { create } from 'zustand';
import { AppState, Scene, FormData, FileFormat } from '../types';

export const useStore = create<AppState>((set) => ({
  selectedScene: null,
  setSelectedScene: (scene: Scene | null) => set({ selectedScene: scene }),
  formData: {},
  setFormData: (data: FormData) => set({ formData: data }),
  selectedFormat: null,
  setSelectedFormat: (format: FileFormat | null) => set({ selectedFormat: format }),
}));