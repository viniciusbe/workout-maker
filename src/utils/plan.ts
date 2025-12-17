import { flushSync } from "react-dom";

export const getItemPosition = (columns: WeeklyPlan, itemName: string) => {
	let itemIndex = 0;

	const columnIndex = columns.findIndex((col) => {
		itemIndex = col.exercises.findIndex((w) => w.name === itemName);
		return itemIndex >= 0;
	});

	return [columnIndex, itemIndex];
};

export const animateItemAction = (cbFunction: () => void) => {
	document.startViewTransition(() => flushSync(cbFunction));
};
