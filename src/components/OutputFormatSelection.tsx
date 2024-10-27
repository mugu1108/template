import React from 'react';
import { useStore } from '../store';

// FileFormat 型を定義
type FileFormat = 'pdf' | 'word';

export const OutputFormatSelection: React.FC = () => {
  const selectedFormat = useStore((state) => state.selectedFormat);
  const setSelectedFormat = useStore((state) => state.setSelectedFormat);

  const formats = [
    { id: 'pdf', title: 'PDF形式', description: '印刷や共有に適した固定レイアウトのドキュメント形式' },
    { id: 'word', title: 'Word形式', description: '文書の編集が可能なワープロ文書形式' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">出力形式を選択</h1>
      <p className="text-gray-600 mb-8">ドキュメントの用途に合わせて最適な出力形式を選択してください。</p>
      <div className="grid gap-6 md:grid-cols-2">
        {formats.map((format) => (
          <button
            key={format.id}
            onClick={() => setSelectedFormat(format.id as FileFormat)}
            className={`w-full p-6 rounded-xl transition-all duration-300 ${
              selectedFormat === format.id
                ? 'bg-blue-50 border-2 border-blue-500 shadow-lg scale-105'
                : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md'
            }`}
          >
            <h3 className="text-lg font-semibold text-gray-900">{format.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{format.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
