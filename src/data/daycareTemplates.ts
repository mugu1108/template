import { DaycareTemplateOption } from '../type';

export const daycareTemplates: DaycareTemplateOption[] = [
{
    id: 'activityLog',
    title: '活動記録',
    description: '園児の活動を記録するためのテンプレート',
    icon: 'BookOpen',
    fields: [
    {
        id: 'childName',
        label: '園児名',
        type: 'text',
        required: true
    },
    {
        id: 'activityDate',
        label: '活動日',
        type: 'date',
        required: true
    },
    {
        id: 'activityType',
        label: '活動内容',
        type: 'select',
        options: ['屋内遊び', '屋外遊び', '学習活動', 'その他'],
        required: true
    },
    {
        id: 'duration',
        label: '活動時間 (分)',
        type: 'number'
    },
    {
        id: 'observations',
        label: '様子',
        type: 'textarea',
        placeholder: '活動中の園児の様子や気づいたことを記入してください'
    }
    ]
},
{
    id: 'healthCheck',
    title: '健康チェック',
    description: '園児の健康状態を確認するためのテンプレート',
    icon: 'Heart',
    fields: [
    {
        id: 'childName',
        label: '園児名',
        type: 'text',
        required: true
    },
    {
        id: 'checkDate',
        label: 'チェック日',
        type: 'date',
        required: true
    },
    {
        id: 'temperature',
        label: '体温 (℃)',
        type: 'number',
        required: true
    },
    {
        id: 'symptoms',
        label: '症状',
        type: 'select',
        options: ['咳', '鼻水', '発熱', 'なし'],
        required: true
    },
    {
        id: 'notes',
        label: '備考',
        type: 'textarea',
        placeholder: '健康状態について気づいた点を記入してください'
    }
    ]
},
{
    id: 'communicationBook',
    title: 'お便り帳',
    description: '保護者との連絡用お便り帳テンプレート',
    icon: 'MessageSquare',
    fields: [
    {
        id: 'childName',
        label: '園児名',
        type: 'text',
        required: true
    },
    {
        id: 'date',
        label: '日付',
        type: 'date',
        required: true
    },
    {
        id: 'teacherMessage',
        label: '先生からのメッセージ',
        type: 'textarea',
        placeholder: '保護者への伝達事項や園児の様子を記入してください'
    },
    {
        id: 'parentResponse',
        label: '保護者からの返答',
        type: 'textarea',
        placeholder: '保護者の質問やコメントを記入してください'
    }
    ]
}
];
