import cls from './Badge.module.css';

export const Badge = ({ children, level = 1, completed = false }) => {
	function levelStyle(level) {
		if (level === 1) return 'success';
		if (level === 2) return 'warn';
		if (level === 3) return 'alarm';
		return '';
	}

	function completedStyle(completed) {
		if (completed) return 'completed';
		return '';
	}

	return (
		<div
			className={`${cls.badge} ${levelStyle()} ${
				completed && cls.completed
			}`}
		>
			{children}
		</div>
	);
};
