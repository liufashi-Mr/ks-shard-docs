interface IConfigItem {
  name: string;
  title: string;
  path?: string;
  children?: IConfigItem[];
}

const gettingStart: IConfigItem = {
  name: 'introduce',
  title: 'Introduce 介绍',
  children: [
    {
      name: 'getting-start',
      title: 'Getting start',
    },
  ],
};

const componentNavs: IConfigItem[] = [
  {
    name: 'base',
    title: 'Base 基础组件',
    children: [
      {
        name: 'icon',
        path: 'components/Base/Icon',
        title: 'Icon 图标',
      },
      {
        name: 'text',
        path: 'components/Base/Text',
        title: 'Text 文本',
      },
      {
        name: 'copy-button',
        path: 'components/Base/CopyButton',
        title: 'CopyButton 复制按钮',
      },
      {
        name: 'bar',
        path: 'components/Base/Bar',
        title: 'Bar 进度条',
      },
      {
        name: 'label',
        path: 'components/Base/Label',
        title: 'Label 标签',
      },
      {
        name: 'panel',
        path: 'components/Base/Panel',
        title: 'Panel 面板',
      },
      {
        name: 'table',
        path: 'components/Base/Table',
        title: 'Table 表格',
      },
      {
        name: 'labels-card',
        path: 'components/LabelsCard',
        title: 'LabelsCard 标签卡片',
      },
      {
        name: 'annotations-card',
        path: 'components/Base/AnnotationsCard',
        title: 'AnnotationsCard 注解卡片',
      },
    ],
  },
  {
    name: 'data-entry',
    title: 'Data entry 数据录入',
    children: [
      {
        name: 'input',
        path: 'components/DataEntry/Input',
        title: 'Input 输入框',
      },
    ],
  },
  {
    name: 'feedback',
    title: 'feedback 反馈',
    children: [
      {
        name: 'confirm',
        path: 'components/Feedback/Confirm',
        title: 'Confirm 对话框',
      },
      {
        name: 'delete-confirm',
        path: 'components/Feedback/DeleteConfirm',
        title: 'DeleteConfirm 对话框',
      },
      {
        name: 'stop-modal',
        path: 'components/Feedback/StopModal',
        title: 'StopModal 对话框',
      },
      {
        name: 'info-confirm-modal',
        path: 'components/Feedback/InfoConfirm',
        title: 'InfoConfirm 信息确认对话框',
      },
      {
        name: 'download-modal',
        path: 'components/Feedback/DownloadModal',
        title: 'DownloadModal 对话框',
      },
      {
        name: 'fullscreen-modal',
        path: 'components/Feedback/FullScreenModal',
        title: 'FullScreenModal 对话框',
      },
      {
        name: 'application-resource-modal',
        path: 'components/Feedback/ApplicationResource',
        title: 'ApplicationResource 应用资源对话框',
      },
      {
        name: 'kube-config-modal',
        path: 'components/Feedback/KubeConfig',
        title: 'KubeConfig Kubernetes配置对话框',
      },
      {
        name: 'kube-ctl-modal',
        path: 'components/Feedback/KubeCtl',
        title: 'KubeCtl Kubernetes命令行对话框',
      },
      {
        name: 'repo-management-modal',
        path: 'components/Feedback/RepoManagementModal',
        title: 'RepoManagementModal 仓库管理对话框',
      },
      {
        name: 'notifyConfirm',
        path: 'components/Feedback/NotifyConfirm',
        title: 'NotifyConfirm 消息确认',
      },
      {
        name: 'custom-tooltip',
        path: 'components/Feedback/CustomTooltip',
        title: 'CustomTooltip 自定义提示',
      },
    ],
  },
  {
    name: 'data-display',
    title: 'Data display 数据展示',
    children: [
      {
        name: 'avatar',
        path: 'components/DataDisplay/Avatar',
        title: 'Avatar 头像',
      },
      {
        name: 'collapse',
        path: 'components/DataDisplay/Collapse',
        title: 'Collapse 折叠面板',
      },
      {
        name: 'markdown',
        title: 'Markdown',
        path: 'components/DataDisplay/Markdown',
      },
      {
        name: 'pagination',
        title: 'Pagination 分页',
        path: 'components/DataDisplay/Pagination',
      },
      {
        name: 'data-table',
        title: 'DataTable 数据表格',
        path: 'components/DataDisplay/DataTable',
      },
      {
        name: 'list',
        title: 'List 列表',
        path: 'components/DataDisplay/List',
      },
      {
        name: 'detail-page',
        title: 'DetailPage 详情页',
        path: 'components/DataDisplay/DetailPage',
      },
      {
        name: 'charts',
        title: 'Charts 图表',
        path: 'components/DataDisplay/Charts',
      },
      {
        name: 'image',
        path: 'components/DataDisplay/Image',
        title: 'Image 图片',
      },
      {
        name: 'light-box',
        title: 'Lightbox 图片查看',
        path: 'components/DataDisplay/Lightbox',
      },
      {
        name: 'text-preview',
        path: 'components/DataDisplay/TextPreview',
        title: 'Text 文本预览',
      },
      {
        name: 'infinite-scroll',
        title: 'InfiniteScroll 无限滚动',
        path: 'components/DataDisplay/InfiniteScroll',
      },
      {
        name: 'test',
        title: 'Test',
        path: 'components/InfiniteScroll',
      },
    ],
  },
  {
    name: 'others',
    title: '其他',
    children: [
      {
        name: 'store',
        path: 'components/Others/Store',
        title: 'Store 存储',
      },
    ],
  },
];

const hookNavs: IConfigItem[] = [];

export const navs = [
  gettingStart,
  { name: 'components', title: 'components 组件', children: componentNavs },
  { name: 'hooks', title: 'hooks 钩子', children: hookNavs },
];

export const routes: IConfigItem[] = componentNavs.reduce((pre, cur) => {
  return pre.concat(cur.children ?? []);
}, [] as IConfigItem[]);
