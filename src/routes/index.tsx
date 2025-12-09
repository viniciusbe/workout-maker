import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

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
				<div className="flex gap-1.5">
					{workout.map((col) => (
						<div
							key={col.day}
							className=" rounded-lg border flex flex-1 flex-col items-center text-amber-100 p-5"
						>
							<h1>{col.day}</h1>

							<div className="flex flex-col gap-1">
								{col.exercises.map(({ id, name }) => (
									<div key={id}>{name} </div>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
