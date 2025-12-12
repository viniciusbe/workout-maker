import { useSortable } from "@dnd-kit/react/sortable";

interface ItemProps {
	id: number;
	index: number;
	column: string;
}
export function Item({ id, index, column }: ItemProps) {
	const { ref } = useSortable({
		id,
		index,
		group: column,
		type: "item",
		accept: ["item"],
	});

	return <div ref={ref}>Exercicio :{id} </div>;
}
