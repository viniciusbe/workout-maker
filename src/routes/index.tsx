import { DragDropProvider } from "@dnd-kit/react";
import { createFileRoute } from "@tanstack/react-router";
import { Column } from "@/components/column";
import { useColumnsIds, useExerciseActions } from "@/store/hooks";

export const Route = createFileRoute("/")({ component: App });

function App() {
	// const { data: workout } = useQuery<WeeklyWorkout>({
	// 	queryKey: ["workout"],
	// 	queryFn: async () => {
	// 		const res = await fetch("/api/workout");
	// 		return res.json();
	// 	},
	// 	initialData: [],
	// });

	const columns = useColumnsIds();
	const { moveExercise } = useExerciseActions();

	return (
		<div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
			<section className="relative py-20 px-6 overflow-hidden flex  items-center justify-center">
				<DragDropProvider
					onDragOver={(event) => {
						console.log(event.operation.target?.type);
						// moveExercise()
						// setWorkout((workout) => move(workout, event));
					}}
				>
					<div className="flex gap-3">
						{columns.map((col) => (
							<Column key={col} id={col} />
						))}
					</div>
				</DragDropProvider>
			</section>
		</div>
	);
}
