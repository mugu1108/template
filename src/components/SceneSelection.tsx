import React from 'react';
import { useNavigate } from 'react-router-dom';
import { scenes } from '../data/scenes';
import { SceneCard } from './SceneCard';
import { useStore } from '../store';

export const SceneSelection: React.FC = () => {
  const navigate = useNavigate();
  const selectedScene = useStore((state) => state.selectedScene);

  const handleNext = () => {
    if (selectedScene) {
      navigate('/template');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          テンプレートを選択
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          業種に合わせた最適なテンプレートを選択してください。
          各テンプレートは業界のベストプラクティスに基づいて設計されています。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {scenes.map((scene) => (
          <SceneCard
            key={scene.id}
            scene={scene}
            isSelected={selectedScene === scene.id}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={handleNext}
          disabled={!selectedScene}
          className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
            selectedScene
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