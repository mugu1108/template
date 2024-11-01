import React from 'react';
import { useStore } from '../store';
import jsPDF from 'jspdf';
import { fileFormats } from '../data/fileFormats';
import { Scene } from '../type';

// シーンごとのテンプレートを動的にインポート
const getTemplates = async (scene: Scene) => {
  try {
    const module = await import(`../data/${scene}Templates.ts`);
    return module[`${scene}Templates`];
  } catch (error) {
    console.error(`Failed to load templates for scene: ${scene}`, error);
    return [];
  }
};

interface Template {
  fields: {
    id: string;
    label: string;
  }[];
}

export const Preview: React.FC = () => {
  const formData = useStore((state) => state.formData);
  const selectedFormat = useStore((state) => state.selectedFormat);
  const selectedScene = useStore((state) => state.selectedScene);
  const [templates, setTemplates] = React.useState<Template[]>([]);

  // 選択されたフォーマットの情報を取得
  const selectedFormatInfo = fileFormats.find(format => format.id === selectedFormat);

  // シーンに応じたテンプレートを読み込む
  React.useEffect(() => {
    if (selectedScene) {
      getTemplates(selectedScene).then(loadedTemplates => {
        setTemplates(loadedTemplates || []);
      });
    }
  }, [selectedScene]);

  // フィールドIDからラベルを取得する関数
  const getLabelForField = (fieldId: string): string => {
    // 現在のテンプレートを取得
    const currentTemplate = templates.find(
      template => template.fields.some((field: { id: string }) => field.id === fieldId)
    );

    if (!currentTemplate) return fieldId;

    const field = currentTemplate.fields.find((f: { id: string }) => f.id === fieldId);
    return field ? field.label : fieldId;
  };

  // PDFダウンロードの処理
  const handleDownloadPDF = () => {
    if (!selectedFormatInfo) return;
    
    const doc = new jsPDF();
    doc.setFontSize(12);
    
    Object.entries(formData).forEach(([key, value], index) => {
      const yPosition = 20 + (index * 10);
      const label = getLabelForField(key);
      doc.text(`${label}: ${value}`, 10, yPosition);
    });
    
    doc.save(`document-${selectedFormatInfo.title}.pdf`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">プレビュー</h1>
      <p className="text-gray-600 mb-8">
        {selectedFormatInfo?.title}形式でのプレビューです
      </p>
      
      <div className="bg-white rounded-lg shadow p-6">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.entries(formData).map(([key, value]) => (
              <tr key={key}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {getLabelForField(key)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-8">
        <button
          className="btn btn-secondary"
          onClick={() => window.history.back()}
        >
          戻る
        </button>
        <button
          className="btn btn-primary"
          onClick={handleDownloadPDF}
        >
          {selectedFormatInfo?.title}ダウンロード
        </button>
      </div>
    </div>
  );
};