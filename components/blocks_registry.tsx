import { Block } from 'visio-cms';
import NavBar from './blocks/NavBar';
import { AlignCenter, AppWindow, Baseline, Code, Video } from 'lucide-react';
import HomeHero from './blocks/HomeHero';
import HeroDemoVideo from './blocks/HeroDemoVideo';
import Text from './blocks/Text';
import CodeSnippet from './blocks/CodeSnippet';

const registeredBlocks: Block[] = [
  {
    component: NavBar,
    title: 'Nav bar',
    icon: <AppWindow />,
    key: 'navbar',
    defaultInputs: { menus: [] },
    controllers: [
      {
        type: 'list',
        name: 'menus',
        label: 'Menus',
        schema: [
          { name: 'label', type: 'text', label: 'Label' },
          { name: 'link', type: 'link', label: 'Link' },
        ],
        listDisplayedLabels: {
          title: 'label',
          caption: 'link.url',
        },
      },
      {
        type: 'radioGroup',
        name: 'isShowBeta',
        label: 'Show Beta label',
        options: [
          {
            value: 'yes',
            label: 'Yes',
          },
          {
            value: 'no',
            label: 'No',
          },
        ],
      },
    ],
  },
  {
    component: HomeHero,
    title: 'Home Hero',
    icon: <AlignCenter />,
    defaultInputs: {},
    key: 'homeHero',
    controllers: [
      { type: 'spacing', name: 'spacing', label: 'Spacing', allowControls: ['padding'] },
      { type: 'richText', name: 'headline', label: 'Headline' },
      { type: 'text', name: 'subTitle', label: 'subTitle' },
    ],
  },
  {
    component: HeroDemoVideo,
    title: 'Demo video',
    icon: <Video />,
    defaultInputs: {},
    key: 'demoVideo',
    controllers: [
      { type: 'spacing', name: 'spacing', label: 'Spacing', allowControls: ['padding'] },
      { type: 'image', name: 'image', label: 'Cover Image' },
      { type: 'link', name: 'videoUrl', label: 'Video Url' },
    ],
  },
  {
    component: Text,
    title: 'Text',
    icon: <Baseline />,
    defaultInputs: {},
    key: 'text',
    controllers: [
      { type: 'spacing', name: 'spacing', label: 'Spacing', allowControls: ['padding'] },
      { type: 'richText', name: 'text', label: 'Content' },
    ],
  },
  {
    component: CodeSnippet,
    title: 'Code snippet',
    icon: <Code />,
    defaultInputs: {},
    key: 'code',
    controllers: [
      { type: 'spacing', name: 'spacing', label: 'Spacing', allowControls: ['padding'] },
      { type: 'richText', name: 'codeLabel', label: 'Content' },
      { type: 'text', name: 'code', label: 'code' },
    ],
  },
];
export default registeredBlocks;
