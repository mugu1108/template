import React from 'react';
import { useStore } from '../store';
import jsPDF from 'jspdf';

export const Preview: React.FC = () => {
  const formData = useStore((state) => state.formData);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text(`利用者名: ${formData.residentName}`, 10, 20);
    doc.text(`居室番号: ${formData.roomNumber}`, 10, 30);
    doc.text(`記録日: ${formData.careDate}`, 10, 40);
    doc.text(`食事摂取状況: ${formData.mealStatus}`, 10, 50);
    doc.text(`活動状況: ${formData.activityLevel}`, 10, 60);
    doc.text(`特記事項: ${formData.notes}`, 10, 70);
    doc.save('document.pdf');
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">プレビュー</h1>
      <p className="text-gray-600 mb-8">生成されたドキュメントをご確認ください。</p>
      <div className="bg-white rounded-lg shadow p-6">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">利用者名</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formData.residentName}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">居室番号</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formData.roomNumber}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">記録日</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formData.careDate}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">食事摂取状況</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formData.mealStatus}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">活動状況</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formData.activityLevel}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">特記事項</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formData.notes}</td>
            </tr>
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
          PDFダウンロード
        </button>
      </div>
    </div>
  );
};