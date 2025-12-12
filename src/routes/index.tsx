import { DragDropProvider } from "@dnd-kit/react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Column } from "@/components/column";
import { Item } from "@/components/item";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const { data: workout } = useQuery<WeeklyWorkout>({
		queryKey: ["workout"],
		queryFn: async () => {
			const res = await fetch("/api/workout");
			return res.json();
		},
		initialData: [],
	});

	return (
		<div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
			<section className="relative py-20 px-6 overflow-hidden flex  items-center justify-center">
				<DragDropProvider
					onDragOver={(event) => {
						// setItems((items) => move(items, event));
					}}
				>
					<div className="flex gap-1.5">
						{workout.map((col) => (
							<Column key={col.day} id={col.day}>
								<h1>{col.day}</h1>

								<div className="flex flex-col gap-1">
									{col.exercises.map(({ id, name }, index) => (
										<Item key={id} id={id} column={col.day} index={index} />
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
