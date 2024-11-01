import { NursingTemplateOption } from '../type';

export const nursingTemplates: NursingTemplateOption[] = [
  {
    id: 'daily',
    title: '日々の介護記録',
    description: '利用者様の日常生活の様子や介護内容を記録',
    icon: 'ClipboardList',
    fields: [
      {
        id: 'residentName',
        label: '利用者名',
        type: 'text',
        required: true
      },
      {
        id: 'roomNumber',
        label: '居室番号',
        type: 'text',
        required: true
      },
      {
        id: 'careDate',
        label: '記録日',
        type: 'date',
        required: true
      },
      {
        id: 'mealStatus',
        label: '食事摂取状況',
        type: 'select',
        options: ['全量摂取', '半分程度', '少量のみ', '未摂取'],
        required: true
      },
      {
        id: 'activityLevel',
        label: '活動状況',
        type: 'select',
        options: ['活発', '普通', '低下', '臥床'],
        required: true
      },
      {
        id: 'notes',
        label: '特記事項',
        type: 'textarea',
        placeholder: '利用者様の様子や変化について記入してください'
      }
    ]
  },
  {
    id: 'vitals',
    title: 'バイタルチェック',
    description: '体温、血圧、脈拍などの測定記録',
    icon: 'Activity',
    fields: [
      {
        id: 'residentName',
        label: '利用者名',
        type: 'text',
        required: true
      },
      {
        id: 'measurementDate',
        label: '測定日時',
        type: 'date',
        required: true
      },
      {
        id: 'measurementTime',
        label: '測定時刻',
        type: 'time',
        required: true
      },
      {
        id: 'temperature',
        label: '体温 (℃)',
        type: 'number',
        required: true
      },
      {
        id: 'bloodPressureHigh',
        label: '血圧（収縮期）',
        type: 'number',
        required: true
      },
      {
        id: 'bloodPressureLow',
        label: '血圧（拡張期）',
        type: 'number',
        required: true
      },
      {
        id: 'pulseRate',
        label: '脈拍（回/分）',
        type: 'number',
        required: true
      },
      {
        id: 'spO2',
        label: 'SpO2 (%)',
        type: 'number'
      },
      {
        id: 'notes',
        label: '特記事項',
        type: 'textarea'
      }
    ]
  },
  {
    id: 'medication',
    title: '服薬管理',
    description: '処方薬の管理と服薬状況の記録',
    icon: 'Pill',
    fields: [
      {
        id: 'residentName',
        label: '利用者名',
        type: 'text',
        required: true
      },
      {
        id: 'medicationDate',
        label: '服薬日',
        type: 'date',
        required: true
      },
      {
        id: 'timing',
        label: '服薬タイミング',
        type: 'select',
        options: ['朝食前', '朝食後', '昼食前', '昼食後', '夕食前', '夕食後', '就寝前'],
        required: true
      },
      {
        id: 'medicationStatus',
        label: '服薬状況',
        type: 'select',
        options: ['完了', '拒否', '一部服用', 'その他'],
        required: true
      },
      {
        id: 'medications',
        label: '薬剤内容',
        type: 'textarea',
        required: true,
        placeholder: '薬剤名、用量を記入してください'
      },
      {
        id: 'administrator',
        label: '投薬担当者',
        type: 'text',
        required: true
      },
      {
        id: 'notes',
        label: '特記事項',
        type: 'textarea'
      }
    ]
  }
];