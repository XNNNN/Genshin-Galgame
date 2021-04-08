export const map = [
    {
        key: '0', 
        videoPath: '', // 视频路径
        title: '', // 选项内容
        options: [ // 下个选项所有
            {
                title: '', // 项标题
                nextKey: '1' // 下个选项的key
            },
            {
                title: '',
                nextKey: '2'
            }
        ]
    },
    {
        key: '1', 
        videoPath: '',
        title: '',
        options: [
            {
                title: '',
                nextKey: '1-1'
            },
            {
                title: '',
                nextKey: '1-2'
            }
        ]
    },
    {
        key: '2', 
        videoPath: '',
        title: '',
        options: [ 
            {
                title: '',
                nextKey: '2-1'
            }
        ]
    },
    {
        key: '1-1', 
        endImg: '', // 结束图片
        title: ''
    },
    {
        key: '1-2', 
        videoPath: '',
        title: '',
        options: [ 
            {
                title: '',
                nextKey: '2-1-1'
            }
        ]
    },
    {
        key: '2-1', 
        videoPath: '',
        title: '',
        options: [ 
            {
                title: '',
                nextKey: '2-1-1'
            }
        ]
    },
]