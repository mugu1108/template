import { FileFormatOption } from '../type';

export const fileFormats: FileFormatOption[] = [
  {
    id: 'pdf',
    title: 'PDF形式',
    description: '印刷や共有に適した固定レイアウトのドキュメント形式',
    icon: 'FileText',
    displayFields: [
      'residentName',
      'roomNumber',
      'careDate',
      'mealStatus',
      'activityLevel',
      'notes'
    ]
  },
  {
    id: 'word',
    title: 'Word形式',
    description: '文書の編集が可能なワープロ文書形式',
    icon: 'FileEdit',
    displayFields: [
      'residentName',
      'roomNumber',
      'careDate',
      'mealStatus',
      'activityLevel',
      'notes',
      'additionalNotes'
    ]
  }
];