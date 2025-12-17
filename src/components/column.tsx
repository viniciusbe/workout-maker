import { CollisionPriority } from "@dnd-kit/abstract";
import { closestCenter } from "@dnd-kit/collision";
import { useDroppable } from "@dnd-kit/react";
import { useDailyPlan } from "@/store/hooks";
import { Item } from "./item";

interface ColumnProps {
	id: DayOfWeek;
}
export function Column({ id }: ColumnProps) {
	const { ref } = useDroppable({
		id,
		type: "column",
		accept: ["item"],
		collisionPriority: CollisionPriority.Low,
		collisionDetector: closestCenter,
	});

	const exercises = useDailyPlan(id);

	return (
		<div
			className="rounded-lg border flex flex-1 flex-col items-center text-amber-100 p-3 gap-3"
			ref={ref}
		>
			<h1>{id}</h1>

			<div className="flex flex-col gap-2">
				{exercises.map((exercise, index) => (
					<Item key={id} column={id} index={index} {...exercise} />
				))}
			</div>
		</div>
	);
}
