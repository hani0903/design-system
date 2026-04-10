import type { Meta, StoryObj } from '@storybook/react-vite';
import Label from '../components/Label';

/**
 * meta: 버튼 컴포넌트의 메타 정보를 나타낸다.
 * - title: 경로
 * - component: 스토리를 작성한 컴포넌트
 */
const meta = {
    title: 'Text/Label',
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    /** 각 props의 설명을 적어줄 수 있다. */
    argTypes: {
        htmlFor: { control: 'text', description: 'label의 for 속성' },
        children: { control: 'text', description: 'label의 내용' },
    },
} satisfies Meta<typeof Label>; // Label의 prop들을 정의하는 부분

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        htmlFor: 'username',
        children: '이메일',
    },
};
