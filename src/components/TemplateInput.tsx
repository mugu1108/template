import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { scenes } from '../data/scenes';

export const TemplateInput: React.FC = () => {
  const navigate = useNavigate();
  const selectedScene = useStore((state) => state.selectedScene);
  const setFormData = useStore((state) => state.setFormData);
  const scene = scenes.find((s) => s.id === selectedScene);

  if (!scene) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    setFormData(data);
    navigate('/format');
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{scene.title}</h1>
        <p className="text-gray-600">{scene.description}</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">テンプレート入力</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                タイトル
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                日付
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                内容
              </label>
              <textarea
                id="content"
                name="content"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => window.history.back()}
            >
              戻る
            </button>
            <button type="submit" className="btn btn-primary">
              次へ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};