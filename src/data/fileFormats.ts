import { FileFormatOption } from '../types';

export const fileFormats: FileFormatOption[] = [
  {
    id: 'pdf',
    title: 'PDF形式',
    description: '印刷や共有に適した固定レイアウトのドキュメント形式',
    icon: 'FileText'
  },
  {
    id: 'excel',
    title: 'Excel形式',
    description: 'データの編集や計算が可能なスプレッドシート形式',
    icon: 'Table'
  },
  {
    id: 'word',
    title: 'Word形式',
    description: '文書の編集が可能なワープロ文書形式',
    icon: 'FileEdit'
  }
];