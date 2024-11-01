import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { scenes } from '../data/scenes';
import { nursingTemplates } from '../data/nursingTemplates';
import { constructionTemplates } from '../data/constructionTemplates';
import { daycareTemplates } from '../data/daycareTemplates';
import { schoolTemplates } from '../data/schoolTemplates';
import { eventTemplates } from '../data/eventTemplates';
import { SceneCard } from './SceneCard';
import { TemplateCard } from './TemplateCard';
import { useStore } from '../store';
import { NursingTemplateOption } from '../type'; // NursingTemplateOptionをインポート
import { ConstructionTemplateOption } from '../type'; // ConstructionTemplateOptionをインポート
import { DaycareTemplateOption } from '../type'; // DaycareTemplateOptionをインポート
import { EventTemplateOption } from '../type'; // EventTemplateOptionをインポート
import { SchoolTemplateOption } from '../type'; // DaycareTemplateOptionをインポート
import { TemplateOption } from '../type'; // TemplateOptionをインポート

export const SceneSelection: React.FC = () => {
  const navigate = useNavigate();
  const selectedScene = useStore((state) => state.selectedScene);
  const selectedTemplate = useStore((state) => state.selectedTemplate);
  //const setSelectedScene = useStore((state) => state.setSelectedScene);
  const setSelectedTemplate = useStore((state) => state.setSelectedTemplate);

  useEffect(() => {
    setSelectedTemplate(null);
  }, [selectedScene, setSelectedTemplate]);

  const handleNext = () => {
    if (selectedScene && selectedTemplate) {
      navigate('/template');
    }
  };

  const getTemplates = <T extends NursingTemplateOption | ConstructionTemplateOption | DaycareTemplateOption | SchoolTemplateOption | EventTemplateOption>(): T[] => {
    switch (selectedScene) {
      case 'nursing':
        return nursingTemplates as T[];
      case 'construction':
        return constructionTemplates as T[];
      case 'daycare':
        return daycareTemplates as T[];
      case 'school':
        return schoolTemplates as T[];
      case 'event':
        return eventTemplates as T[];
      default:
        return [];
    }
  };

  const handleTemplateSelect = (templateId: string) => {
    console.log('Template selected:', templateId); // デバッグ用
    setSelectedTemplate(templateId as unknown as TemplateOption);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          テンプレートを選択
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          業種に合わせた最適なテンプレートを選択してください。<br />
          各テンプレートは業界のベストプラクティスに基づいて設計されています。
        </p>
      </div>

      <div 
        role="radiogroup"
        aria-label="テンプレート選択"
        className="grid gap-3 md:grid-cols-3"
      >
        {scenes.map((scene) => (
          <SceneCard
            key={scene.id}
            scene={scene}
            isSelected={selectedScene === scene.id}
            className={scene.id === 'construction' || scene.id === 'event' ? 'move-right' : ''}
          />
        ))}
      </div>

      {selectedScene && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            記録テンプレートを選択
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {getTemplates<NursingTemplateOption>().map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                isSelected={selectedTemplate !== null && selectedTemplate === (template.id as unknown as TemplateOption)}
                onSelect={() => handleTemplateSelect(template.id)}
              />
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 text-center">
        <button
          onClick={handleNext}
          disabled={!selectedScene || !selectedTemplate}
          className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            selectedScene && selectedTemplate
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          次へ進む
        </button>
      </div>
    </div>
  );
};
