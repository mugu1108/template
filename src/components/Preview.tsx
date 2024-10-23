import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Download, ArrowLeft } from 'lucide-react';
import { useStore } from '../store';
import { scenes } from '../data/scenes';
import { fileFormats } from '../data/fileFormats';

export const Preview: React.FC = () => {
  const navigate = useNavigate();
  const selectedScene = useStore((state) => state.selectedScene);
  const selectedFormat = useStore((state) => state.selectedFormat);
  const formData = useStore((state) => state.formData);

  const scene = scenes.find((s) => s.id === selectedScene);
  const format = fileFormats.find((f) => f.id === selectedFormat);

  if (!scene || !format || !formData) return null;

  const handleDownload = () => {
    // In a real application, this would trigger the actual file download
    console.log('Downloading file...', { scene, format, formData });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">プレビュー</h1>
        <p className="text-gray-600">
          生成されたドキュメントをご確認ください。
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <FileText className="text-blue-500" size={24} />
            <div>
              <h2 className="text-lg font-semibold">{formData.title}</h2>
              <p className="text-sm text-gray-600">
                {format.title} • {scene.title}
              </p>
            </div>
          </div>
          <span className="text-sm text-gray-500">{formData.date}</span>
        </div>

        <div className="border rounded-lg p-4 mb-6 min-h-[200px] bg-gray-50">
          <pre className="whitespace-pre-wrap text-gray-700">{formData.content}</pre>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate('/format')}
            className="btn btn-secondary flex items-center space-x-2"
          >
            <ArrowLeft size={20} />
            <span>戻る</span>
          </button>
          <button
            onClick={handleDownload}
            className="btn btn-primary flex items-center space-x-2"
          >
            <Download size={20} />
            <span>ダウンロード</span>
          </button>
        </div>
      </div>
    </div>
  );
};