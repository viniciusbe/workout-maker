import { createFileRoute } from "@tanstack/react-router";

export const workoutApi: WeeklyPlan = [
	{
		day: "MONDAY",
		exercises: [
			{ id: "bench_press", name: "bench press", sets: 3 },
			{ id: "incline_dumbbell_press", name: "incline dumbbell press", sets: 3 },
			{ id: "triceps_pushdown", name: "triceps pushdown", sets: 3 },
		],
	},
	{
		day: "TUESDAY",
		exercises: [
			{ id: "squat", name: "squat", sets: 4 },
			{ id: "leg_press", name: "leg press", sets: 3 },
			{ id: "leg_curl", name: "leg curl", sets: 3 },
		],
	},
	{
		day: "THURSDAY",
		exercises: [
			{ id: "pull_up", name: "pull up", sets: 3 },
			{ id: "barbell_row", name: "barbell row", sets: 3 },
			{ id: "biceps_curl", name: "biceps curl", sets: 3 },
		],
	},
	{
		day: "FRIDAY",
		exercises: [
			{ id: "shoulder_press", name: "shoulder press", sets: 3 },
			{ id: "lateral_raise", name: "lateral raise", sets: 3 },
			{ id: "front_raise", name: "front raise", sets: 3 },
		],
	},
	{
		day: "SATURDAY",
		exercises: [
			{ id: "romanian_deadlift", name: "romanian deadlift", sets: 3 },
			{ id: "walking_lunges", name: "walking lunges", sets: 3 },
			{ id: "calf_raises", name: "calf raises", sets: 4 },
		],
	},
	{
		day: "SUNDAY",
		exercises: [
			{ id: "plank", name: "plank", sets: 3 },
			{ id: "crunches", name: "crunches", sets: 3 },
			{ id: "leg_raises", name: "leg raises", sets: 3 },
		],
	},
];

export const Route = createFileRoute("/api/workout")({
	server: {
		handlers: {
			GET: () => {
				return Response.json(workoutApi);
			},
			// POST: async ({ request }) => {
			// 	const name = await request.json();
			// 	const todo = {
			// 		id: todos.length + 1,
			// 		name,
			// 	}
			// 	todos.push(todo);
			// 	return Response.json(todo);
			// },
		},
	},
});
