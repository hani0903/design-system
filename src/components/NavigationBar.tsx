import IconButton from './IconButton';

interface INavigationBarProps {
    isDark: boolean;
    showBackButton: boolean;
    showCloseButton: boolean;
    showTitle: boolean;
    title?: string;
    onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
    onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
    showBackButton,
    showCloseButton,
    showTitle,
    title = '',
    isDark,
    onBackButtonClick = () => {},
    onCloseButtonClick = () => {},
}: INavigationBarProps) {
    return (
        <div className={`flex items-center justify-between h-16 px-4 w-full ${isDark ? 'bg-primary' : 'bg-white'}`}>
            <div className="navigation-title-wrapper flex items-center">
                {/** 뒤로가기 버튼 */}
                {showBackButton && (
                    <IconButton
                        alt="back-arrow"
                        iconPath={`/icons/ic-assets-back-arrow${isDark ? '-white' : ''}.svg`}
                        onClick={onBackButtonClick}
                    />
                )}
                {/** 페이지 이름 */}
                {showTitle && <h1 className={`text-2xl ${isDark ? 'text-white' : 'text-primary'}`}>{title}</h1>}
            </div>
            {/** 닫기 버튼 */}
            {showCloseButton && (
                <IconButton
                    alt="close"
                    iconPath={`/icons/ic-assets-close${isDark ? '-white' : ''}.svg`}
                    onClick={onCloseButtonClick}
                />
            )}
        </div>
    );
}
