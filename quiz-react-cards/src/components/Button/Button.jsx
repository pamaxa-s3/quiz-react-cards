import cls from './Button.module.css';

export const Button = ({ children, onClick, isPrimary, isActive , isDisabled }) => {
	return (
		<button
			className={`${cls.button} ${isPrimary && cls.primary} ${isActive && cls.active} ${isDisabled && cls.disabled}`}
			onClick={onClick}
			disabled={isDisabled}
		>
			{children}
		</button>
	);
};
