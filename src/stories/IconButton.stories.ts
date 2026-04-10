import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import IconButton from '../components/IconButton';
import deleteIcon from '../assets/ic-assets-delete-dark.svg';
/**
 * meta: 버튼 컴포넌트의 메타 정보를 나타낸다.
 * - title: 경로
 * - component: 스토리를 작성한 컴포넌트
 */
const meta = {
    title: 'Button/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    /** 각 props의 설명을 적어줄 수 있다. */
    argTypes: {
        alt: { control: 'text', description: '이미지의 alt 속성' },
        iconPath: { control: 'text', description: '이미지의 경로' },
        onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
    },
    args: { onClick: fn(), alt: '아이콘', iconPath: '/icons/default.svg' },
} satisfies Meta<typeof IconButton>; // IconButton의 prop들을 정의하는 부분

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        alt: 'icon',
        iconPath: deleteIcon,
    },
};
