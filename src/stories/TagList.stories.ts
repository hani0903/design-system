import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import TagList from '../components/TagList';
/**
 * meta: 버튼 컴포넌트의 메타 정보를 나타낸다.
 * - title: 경로
 * - component: 스토리를 작성한 컴포넌트
 */
const meta = {
    title: 'Button/TagList',
    component: TagList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    /** 각 props의 설명을 적어줄 수 있다. */
    argTypes: {
        onTagClick: { action: 'clicked', description: '태그 클릭 이벤트' },
        selectedTag: { control: 'text', description: '선택된 태그' },
        tagList: { control: 'radio', description: '태그 목록' },
    },
    args: { onTagClick: fn(), tagList: ['태그 1', '태그 2', '태그 3'], selectedTag: '태그 1' },
} satisfies Meta<typeof TagList>; // TagList의 prop들을 정의하는 부분

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: '태그 버튼',
    },
};
