import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { scenes } from '../data/scenes';
import { nursingTemplates } from '../data/nursingTemplates';
import { constructionTemplates } from '../data/constructionTemplates';
import { daycareTemplates } from '../data/daycareTemplates';
import { schoolTemplates } from '../data/schoolTemplates';
import { eventTemplates } from '../data/eventTemplates';
import { FormField } from '../type';
import { Template } from '../type'; 

export const TemplateInput: React.FC = () => {
  const navigate = useNavigate();
  const selectedScene = useStore((state) => state.selectedScene);
  const selectedTemplate = useStore((state) => state.selectedTemplate);
  const setFormData = useStore((state) => state.setFormData);
  
  const scene = scenes.find((s) => s.id === selectedScene);

  const getTemplates = (): Template[] => { // 戻り値の型を指定
    switch (selectedScene) {
      case 'nursing':
        return nursingTemplates;
      case 'construction':
        return constructionTemplates;
      case 'daycare':
        return daycareTemplates;
      case 'school':
        return schoolTemplates;
      case 'event':
        return eventTemplates;
      default:
        return [];
    }
  };

  const template = selectedTemplate && getTemplates().find((t) => t.id === String(selectedTemplate));

  console.log('Selected template:', template); // デバッグ用

  if (!scene || !template) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [key, value instanceof File ? value.name : value])
    );
    setFormData(data); // ここでデータを設定
    navigate('/preview'); // プレビュー画面に遷移
  };

  const renderField = (field: FormField) => {
    const commonProps = {
      id: field.id,
      name: field.id,
      required: field.required,
      className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    };

    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            {...commonProps}
            rows={4}
            placeholder={field.placeholder}
          />
        );
      case 'select':
        return (
          <select {...commonProps}>
            <option value="">選択してください</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'number':
        return (
          <input
            {...commonProps}
            type="number"
            step="0.1"
          />
        );
      default:
        return (
          <input
            {...commonProps}
            type={field.type}
            placeholder={field.placeholder}
          />
        );
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{template.title}</h1>
        <p className="text-gray-600">{template.description}</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {template.fields.map((field: FormField) => ( // FormField型を指定
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                {renderField(field)}
              </div>
            ))}
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
