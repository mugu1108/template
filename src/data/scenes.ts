import { SceneOption } from '../type';

export const scenes: SceneOption[] = [
  {
    id: 'nursing',
    title: '介護施設',
    description: '日々の介護記録、バイタルチェック、服薬管理などの記録を作成',
    icon: 'Heart',
  },
  {
    id: 'daycare',
    title: '保育園',
    description: '園児の活動記録、健康チェック、お便り帳などの書類を作成',
    icon: 'Baby',
  },
  {
    id: 'school',
    title: '学校',
    description: '成績表、出席簿、学級通信などの教育関連書類を作成',
    icon: 'GraduationCap',
  },
  {
    id: 'construction',
    title: '工事現場',
    description: '作業報告書、安全チェックリスト、進捗報告書などを作成',
    icon: 'HardHat',
  },
  {
    id: 'event',
    title: 'イベント運営',
    description: 'イベントスケジュール、参加者リスト、予算管理表などを作成',
    icon: 'Calendar',
  },
];
