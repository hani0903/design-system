import type { Meta, StoryObj } from '@storybook/react-vite';
import ErrorMessage from '../components/ErrorMessage';

/**
 * meta: 버튼 컴포넌트의 메타 정보를 나타낸다.
 * - title: 경로
 * - component: 스토리를 작성한 컴포넌트
 */
const meta = {
    title: 'Text/ErrorMessage',
    component: ErrorMessage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    /** 각 props의 설명을 적어줄 수 있다. */
    argTypes: {
        children: { control: 'text', description: 'ErrorMessage의 내용' },
    },
} satisfies Meta<typeof ErrorMessage>; // ErrorMessage의 prop들을 정의하는 부분

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: '에러 메세지를 입력하세요',
    },
};
