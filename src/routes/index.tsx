import { move } from "@dnd-kit/helpers";
import { DragDropProvider } from "@dnd-kit/react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { flushSync } from "react-dom";
import { Column } from "@/components/column";
import { Item } from "@/components/item";
import { workoutApi } from "./api/workout";

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

	const [workout, setWorkout] = useState(workoutApi);

	const handleRemoveExercise = (day: string, exerciseId: number) => {
		const remove = () => {
			setWorkout((prevWorkout) =>
				prevWorkout.map((col) =>
					col.id === day
						? {
								...col,
								items: col.items.filter((item) => item.id !== exerciseId),
							}
						: col,
				),
			);
		};

		document.startViewTransition(() => flushSync(remove));
	};

	return (
		<div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
			<section className="relative py-20 px-6 overflow-hidden flex  items-center justify-center">
				<DragDropProvider
					onDragOver={(event) => {
						console.log(event.operation.target?.type);
						setWorkout((workout) => move(workout, event));
					}}
				>
					<div className="flex gap-3">
						{workout.map((col) => (
							<Column key={col.id} id={col.id}>
								<h1>{col.id}</h1>

								<div className="flex flex-col gap-2">
									{col.items.map(({ id, name }, index) => (
										<Item
											key={id}
											id={id}
											column={col.id}
											index={index}
											remove={handleRemoveExercise}
										/>
									))}
								</div>
							</Column>
						))}
					</div>
				</DragDropProvider>
			</section>
		</div>
	);
}
