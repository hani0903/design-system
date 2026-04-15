import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import TagButton from '../components/TagButton';
/**
 * meta: 버튼 컴포넌트의 메타 정보를 나타낸다.
 * - title: 경로
 * - component: 스토리를 작성한 컴포넌트
 */
const meta = {
    title: 'Button/TagButton',
    component: TagButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    /** 각 props의 설명을 적어줄 수 있다. */
    argTypes: {
        children: { control: 'text', description: '버튼의 텍스트' },
        onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
    },
    args: { onClick: fn(), children: '태그 버튼' },
} satisfies Meta<typeof TagButton>; // TagButton의 prop들을 정의하는 부분

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: '태그 버튼',
    },
};
