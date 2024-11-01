import { SchoolTemplateOption } from '../type';

export const schoolTemplates: SchoolTemplateOption[] = [
    {
    id: 'gradeReport',
    title: '成績表',
    description: '生徒の成績を記録するためのテンプレート',
    icon: 'BarChart',
    fields: [
        {
        id: 'studentName',
        label: '生徒名',
        type: 'text',
        required: true
        },
        {
        id: 'gradeLevel',
        label: '学年',
        type: 'text',
        required: true
        },
        {
        id: 'subject',
        label: '教科',
        type: 'text',
        required: true
        },
        {
        id: 'score',
        label: '得点',
        type: 'number',
        required: true
        },
        {
        id: 'remarks',
        label: '備考',
        type: 'textarea',
        placeholder: '成績に関するコメントやアドバイスを記入してください'
        }
    ]
    },
    {
    id: 'attendanceSheet',
    title: '出席簿',
    description: '生徒の出席状況を記録するためのテンプレート',
    icon: 'CheckSquare',
    fields: [
        {
        id: 'studentName',
        label: '生徒名',
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
        id: 'attendanceStatus',
        label: '出席状況',
        type: 'select',
        options: ['出席', '欠席', '遅刻', '早退'],
        required: true
        },
        {
        id: 'notes',
        label: '備考',
        type: 'textarea',
        placeholder: '出欠に関する追加情報を記入してください'
        }
    ]
    },
    {
    id: 'classNewsletter',
    title: '学級通信',
    description: '学級の活動を報告するためのテンプレート',
    icon: 'Mail',
    fields: [
        {
        id: 'date',
        label: '発行日',
        type: 'date',
        required: true
        },
        {
        id: 'classEvents',
        label: '活動内容',
        type: 'textarea',
        required: true,
        placeholder: '学級の活動内容やニュースを記入してください'
        },
        {
        id: 'teacherRemarks',
        label: '教師からのコメント',
        type: 'textarea',
        placeholder: '保護者や生徒へのメッセージを記入してください'
        },
        {
        id: 'upcomingEvents',
        label: '今後の予定',
        type: 'textarea',
        placeholder: '次回の活動やイベントの予定を記入してください'
        }
    ]
    }
];
