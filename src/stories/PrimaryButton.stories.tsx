import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import PrimaryButton from '../components/PrimaryButton';
/**
 * meta: 버튼 컴포넌트의 메타 정보를 나타낸다.
 * - title: 경로
 * - component: 스토리를 작성한 컴포넌트
 */
const meta = {
    title: 'Button/PrimaryButton',
    component: PrimaryButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [(story) => <div style={{ width: '360px' }}>{story()}</div>],
    /** 각 props의 설명을 적어줄 수 있다. */
    argTypes: {
        theme: {
            control: 'select',
            options: ['dark', 'light', 'social', 'text'],
            description: '버튼 테마',
        },
        children: { control: 'text', description: '버튼의 텍스트' },
        onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
        isDisabled: { control: 'boolean', description: '버튼 비활성화 여부' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof PrimaryButton>; // PrimaryButton의 prop들을 정의하는 부분

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        children: 'Button',
        theme: 'dark',
        isDisabled: false,
    },
};

export const Light: Story = {
    args: {
        children: 'Button',
        theme: 'light',
        isDisabled: false,
    },
};

export const Social: Story = {
    args: {
        children: 'Button',
        theme: 'social',
        isDisabled: false,
    },
};

export const Text: Story = {
    args: {
        children: 'Button',
        theme: 'text',
        isDisabled: false,
    },
};
