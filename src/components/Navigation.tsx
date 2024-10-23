import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const steps = [
    { path: '/', label: 'シーン選択' },
    { path: '/template', label: 'テンプレート入力' },
    { path: '/format', label: 'ファイル形式選択' },
    { path: '/preview', label: 'プレビュー' },
  ];

  const currentStepIndex = steps.findIndex((step) => step.path === location.pathname);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <div className="flex items-center space-x-2">
            {steps.map((step, index) => (
              <React.Fragment key={step.path}>
                {index > 0 && <ChevronRight className="text-gray-400" size={20} />}
                <span
                  className={`text-sm ${
                    index <= currentStepIndex
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-400'
                  }`}
                >
                  {step.label}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};