import React from 'react';
import * as Icons from 'lucide-react';
import { NursingTemplateOption } from '../type';

interface TemplateCardProps {
  template: NursingTemplateOption;
  isSelected: boolean;
  onSelect: () => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  isSelected,
  onSelect
}) => {
  const Icon = Icons[template.icon as keyof typeof Icons] as React.ElementType;

  return (
    <button
      onClick={onSelect}
      className={`
        w-full p-6 rounded-xl
        transition-all duration-300
        transform hover:-translate-y-1
        ${
          isSelected
            ? 'bg-blue-50 border-2 border-blue-500 shadow-lg'
            : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md'
        }
      `}
    >
      <div className={`p-3 rounded-lg inline-block ${
        isSelected ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'
      }`}>
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mt-4">
        {template.title}
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        {template.description}
      </p>
    </button>
  );
};
