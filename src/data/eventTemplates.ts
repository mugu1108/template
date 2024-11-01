import { EventTemplateOption } from '../type';

export const eventTemplates: EventTemplateOption[] = [
    {
        id: 'schedule',
        title: 'イベントスケジュール',
        description: 'イベントのスケジュールを管理するためのテンプレート',
        icon: 'Calendar',
        fields: [
            {
                id: 'eventName',
                label: 'イベント名',
                type: 'text',
                required: true
            },
            {
                id: 'eventDate',
                label: '開催日',
                type: 'date',
                required: true
            },
            {
                id: 'startTime',
                label: '開始時刻',
                type: 'time',
                required: true
            },
            {
                id: 'endTime',
                label: '終了時刻',
                type: 'time'
            },
            {
                id: 'location',
                label: '開催場所',
                type: 'text',
                required: true
            },
            {
                id: 'notes',
                label: '備考',
                type: 'textarea',
                placeholder: 'イベントの詳細や注意事項を記入してください'
            }
        ]
    },
    {
        id: 'participantList',
        title: '参加者リスト',
        description: 'イベント参加者を記録するためのテンプレート',
        icon: 'Users',
        fields: [
            {
                id: 'participantName',
                label: '参加者名',
                type: 'text',
                required: true
            },
            {
                id: 'contactInfo',
                label: '連絡先',
                type: 'text',
                required: true
            },
            {
                id: 'attendanceStatus',
                label: '出席状況',
                type: 'select',
                options: ['参加', '欠席', '未定'],
                required: true
            },
            {
                id: 'notes',
                label: '備考',
                type: 'textarea'
            }
        ]
    },
    {
        id: 'budgetSheet',
        title: '予算管理表',
        description: 'イベントの予算を管理するためのテンプレート',
        icon: 'DollarSign',
        fields: [
            {
                id: 'expenseItem',
                label: '項目名',
                type: 'text',
                required: true
            },
            {
                id: 'cost',
                label: '金額',
                type: 'number',
                required: true
            },
            {
                id: 'paid',
                label: '支払い状況',
                type: 'select',
                options: ['未払い', '支払い済み'],
                required: true
            },
            {
                id: 'notes',
                label: '備考',
                type: 'textarea',
                placeholder: '詳細や特記事項を記入してください'
            }
        ]
    }
];
