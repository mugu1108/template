import {ConstructionTemplateOption } from '../type';

export const constructionTemplates: ConstructionTemplateOption[] = [
{
    id: 'safetyReport',
    title: '安全報告書',
    description: '現場の安全状況を記録するためのテンプレート',
    icon: 'Shield',
    fields: [
    {
        id: 'siteName',
        label: '現場名',
        type: 'text',
        required: true
    },
    {
        id: 'reportDate',
        label: '報告日',
        type: 'date',
        required: true
    },
    {
        id: 'inspectorName',
        label: '点検者名',
        type: 'text',
        required: true
    },
    {
        id: 'safetyIssues',
        label: '安全問題',
        type: 'textarea',
        placeholder: '現場での安全問題やリスクについて記入してください'
    },
    {
        id: 'actionTaken',
        label: '対策内容',
        type: 'textarea',
        placeholder: '発見された問題に対する対策を記入してください'
    },
    {
        id: 'additionalNotes',
        label: '備考',
        type: 'textarea'
    }
    ]
},
{
    id: 'progressReport',
    title: '進捗報告書',
    description: 'プロジェクトの進捗を報告するためのテンプレート',
    icon: 'TrendingUp',
    fields: [
    {
        id: 'projectName',
        label: 'プロジェクト名',
        type: 'text',
        required: true
    },
    {
        id: 'reportDate',
        label: '報告日',
        type: 'date',
        required: true
    },
    {
        id: 'currentPhase',
        label: '現在のフェーズ',
        type: 'text',
        required: true
    },
    {
        id: 'completionPercentage',
        label: '完了率 (%)',
        type: 'number',
        required: true
    },
    {
        id: 'challenges',
        label: '課題',
        type: 'textarea',
        placeholder: '進捗中に発生した課題を記入してください'
    },
    {
        id: 'nextSteps',
        label: '次のステップ',
        type: 'textarea',
        placeholder: '次に進めるべき作業や予定を記入してください'
    }
    ]
},
{
    id: 'checklist',
    title: 'チェックリスト',
    description: '作業前の安全確認用チェックリスト',
    icon: 'CheckSquare',
    fields: [
    {
        id: 'siteName',
        label: '現場名',
        type: 'text',
        required: true
    },
    {
        id: 'checkDate',
        label: '点検日',
        type: 'date',
        required: true
    },
    {
        id: 'inspectorName',
        label: '点検者名',
        type: 'text',
        required: true
    },
    {
        id: 'checkItems',
        label: '確認項目',
        type: 'checkboxGroup',
        options: ['装備の点検', '安全標識の確認', '危険エリアの整理', '緊急連絡手段の確認'],
        required: true
    },
    {
        id: 'additionalComments',
        label: '備考',
        type: 'textarea',
        placeholder: '点検内容に関する追加情報を記入してください'
    }
    ]
}
];
