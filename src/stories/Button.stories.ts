import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from '../components/Button';

/**
 * meta: 버튼 컴포넌트의 메타 정보를 나타낸다.
 * - title: 경로
 * - component: 스토리를 작성한 컴포넌트
 */
const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    /** 각 props의 설명을 적어줄 수 있다. */
    argTypes: {
        backgroundColor: { control: 'color', description: '버튼의 배경 컬러' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>; // Button의 prop들을 정의하는 부분

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Button',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Button',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
