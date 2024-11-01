import React from 'react';
import * as Icons from 'lucide-react';
import { SceneOption, Scene } from '../type';
import { useStore } from '../store';

interface SceneCardProps {
  scene: SceneOption;
  isSelected: boolean;
  className?: string;
}

export const SceneCard: React.FC<SceneCardProps> = ({ scene, isSelected, className }) => {
  const setSelectedScene = useStore((state) => state.setSelectedScene);
  const IconComponent = Icons[scene.icon as keyof typeof Icons];

  if (!IconComponent) {
    console.warn(`Icon not found for ${scene.icon}`);
    return null; // アイコンが見つからない場合は何も表示しない
  }

  return (
    <button
      onClick={() => setSelectedScene(scene.id as Scene)}
      className={`w-full p-6 rounded-xl transition-all duration-300 ${
        isSelected
          ? 'bg-blue-50 border-2 border-blue-500 shadow-lg scale-105'
          : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md'
      } ${className}`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`p-3 rounded-lg ${
            isSelected ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'
          }`}
        >
          {React.createElement(IconComponent as unknown as React.ElementType, { size: 24 })}
        </div>
        <div className="text-left">
          <h3 className="text-lg font-semibold text-gray-900">{scene.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{scene.description}</p>
        </div>
      </div>
    </button>
  );
};
