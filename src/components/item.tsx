import { useSortable } from "@dnd-kit/react/sortable";
import { useExerciseActions } from "@/store/hooks";
import { animateItemAction } from "@/utils/plan";
import { Button } from "./storybook";

interface ItemProps extends Exercise {
	index: number;
	column: string;
}
export function Item({ index, column, ...exercise }: ItemProps) {
	const { id, name, sets } = exercise;
	const { ref } = useSortable({
		id,
		index,
		group: column,
		type: "item",
		accept: ["item"],
		feedback: "clone",
	});

	const { removeExercise } = useExerciseActions();

	const handleRemoveExercise = () => {
		const remove = () => {
			removeExercise(id, column as DayOfWeek);
		};

		animateItemAction(remove);
	};

	return (
		<div ref={ref} className="border rounded p-2 flex items-center gap-1">
			<div className="shrink-0">Exercicio :{name}</div>
			<span>{name}</span>
			<span>{sets} sets</span>
			<Button variant="secondary" onClick={handleRemoveExercise}>
				X
			</Button>
		</div>
	);
}
