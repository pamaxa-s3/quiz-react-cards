import cls from './Badge.module.css';

export const Badge = ({ children, level = 1, completed = false }) => {
	function levelStyle(level) {
		if (level === 1) return 'cls.success';
		if (level === 2) return 'cls.warn';
		if (level === 3) return 'cls.alarm';
		return '';
	}

	function completedStyle(completed) {
		if (completed) return 'cls.completed';
		return '';
	}
	
	return (
		<div
			className={`${
				cls.badge
			} ${levelStyle()} ${completedStyle()}`}
		>
			{children}
		</div>
	);
};
