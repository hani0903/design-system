import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import NavigationBar from '../components/NavigationBar';

/**
 * meta: 버튼 컴포넌트의 메타 정보를 나타낸다.
 * - title: 경로
 * - component: 스토리를 작성한 컴포넌트
 */
const meta = {
    title: 'Navigation/NavigationBar',
    component: NavigationBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    /** 각 props의 설명을 적어줄 수 있다. */
    decorators: [
        (Story) => (
            <div style={{ width: '360px', border: '1px solid #ccc', display: 'flex', alignItems: 'center' }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        showBackButton: { control: 'boolean', description: '뒤로가기 버튼의 표시 여부' },
        showCloseButton: { control: 'boolean', description: '닫기 버튼의 표시 여부' },
        showTitle: { control: 'boolean', description: '페이지 타이틀의 표시 여부' },
        title: { control: 'text', description: '페이지 타이틀' },
        onBackButtonClick: { action: 'click' },
        onCloseButtonClick: { action: 'click' },
    },
    args: {
        showBackButton: true,
        showCloseButton: true,
        showTitle: false,
        title: '타이틀',
        onBackButtonClick: fn(),
        onCloseButtonClick: fn(),
    },
} satisfies Meta<typeof NavigationBar>; // NavigationBar의 prop들을 정의하는 부분

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isDark: false,
        showBackButton: true,
        showCloseButton: true,
        showTitle: true,
        title: '페이지 타이틀',
        onBackButtonClick: fn(),
        onCloseButtonClick: fn(),
    },
};

export const Dark: Story = {
    args: {
        isDark: true,
        showBackButton: true,
        showCloseButton: true,
        showTitle: true,
        title: '페이지 타이틀',
        onBackButtonClick: fn(),
        onCloseButtonClick: fn(),
    },
};
