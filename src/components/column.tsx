import { CollisionPriority } from "@dnd-kit/abstract";
import { closestCenter } from "@dnd-kit/collision";
import { useDroppable } from "@dnd-kit/react";

interface ColumnProps {
	children: React.ReactNode;
	id: string;
}
export function Column({ children, id }: ColumnProps) {
	const { ref } = useDroppable({
		id,
		type: "column",
		accept: ["item"],
		collisionPriority: CollisionPriority.Low,
		collisionDetector: closestCenter,
	});

	return (
		<div
			className=" rounded-lg border flex flex-1 flex-col items-center text-amber-100 p-5"
			ref={ref}
		>
			{children}
		</div>
	);
}
