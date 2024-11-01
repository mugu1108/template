import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { useStore } from '../store';
import { fileFormats } from '../data/fileFormats';
import { FileFormat } from '../type';

export const FileFormatSelection: React.FC = () => {
  const navigate = useNavigate();
  const selectedFormat = useStore((state) => state.selectedFormat);
  const setSelectedFormat = useStore((state) => state.setSelectedFormat);

  const handleNext = () => {
    if (selectedFormat) {
      navigate('/preview');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          出力形式を選択
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ドキュメントの用途に合わせて最適な出力形式を選択してください。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {fileFormats.map((format) => {
          const Icon = Icons[format.icon as keyof typeof Icons] as React.ComponentType<{ size: number }>;
          const isSelected = selectedFormat === format.id;

          return (
            <button
              key={format.id}
              onClick={() => setSelectedFormat(format.id as FileFormat)}
              className={`p-6 rounded-xl transition-all duration-300 text-left ${
                isSelected
                  ? 'bg-blue-50 border-2 border-blue-500 shadow-lg'
                  : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <div className={`p-3 rounded-lg inline-block ${
                isSelected ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'
              }`}>
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                {format.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {format.description}
              </p>
            </button>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => window.history.back()}
          className="btn btn-secondary mr-4"
        >
          戻る
        </button>
        <button
          onClick={handleNext}
          disabled={!selectedFormat}
          className={`btn ${
            selectedFormat ? 'btn-primary' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          次へ
        </button>
      </div>
    </div>
  );
};
