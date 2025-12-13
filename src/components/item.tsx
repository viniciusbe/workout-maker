import { useSortable } from "@dnd-kit/react/sortable";
import { Button } from "./storybook";

interface ItemProps {
	id: number;
	index: number;
	column: string;
	remove: (day: string, exerciseId: number) => void;
}
export function Item({ id, index, column, remove }: ItemProps) {
	const { ref } = useSortable({
		id,
		index,
		group: column,
		type: "item",
		accept: ["item"],
		feedback: "clone",
	});

	return (
		<div ref={ref} className="border rounded p-2 flex items-center gap-1">
			<div className="shrink-0">Exercicio :{id}</div>
			<Button variant="secondary" onClick={() => remove(column, id)}>
				X
			</Button>
		</div>
	);
}
