import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import DefaultTextField from '../components/DefaultTextField';

/**
 * meta: 버튼 컴포넌트의 메타 정보를 나타낸다.
 * - title: 경로
 * - component: 스토리를 작성한 컴포넌트
 */
const meta = {
    title: 'TextFields/DefaultTextField',
    component: DefaultTextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    /** 각 props의 설명을 적어줄 수 있다. */
    argTypes: {
        id: { control: 'text', description: '텍스트 필드의 id' },
        iconAlt: { control: 'text', description: '아이콘 이미지의 alt 속성' },
        errorMessage: { control: 'text', description: '텍스트 필드의 에러 메세지' },
        iconPath: { control: 'text', description: '아이콘 이미지의 경로' },
        value: { control: 'text', description: '텍스트 필드의 값' },
        placeholder: { control: 'text', description: '텍스트 필드의 placeholder' },
        onIconClick: { action: 'click' },
        onChange: { action: 'click' },
        isError: { control: 'boolean', description: '텍스트 필드의 에러 유무' },
    },
    args: {
        id: '',
        iconAlt: 'icon',
        iconPath: '',
        placeholder: '텍스트를 입력해주세요',
        value: '',
        errorMessage: '텍스트를 확인해주세요',
        onChange: fn(),
        onIconClick: fn(),
        isError: false,
    },
} satisfies Meta<typeof DefaultTextField>; // DefaultTextField의 prop들을 정의하는 부분

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: 'email',
        iconAlt: 'icon',
        iconPath: '/icons/ic-assets-delete-dark.svg',
        placeholder: '텍스트를 입력해주세요',
        value: '',
        errorMessage: '텍스트를 확인해주세요',
        isError: false,
    },
};
