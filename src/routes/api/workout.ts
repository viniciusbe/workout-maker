import { createFileRoute } from "@tanstack/react-router";

const workout = [
	{
		day: "Monday",
		exercises: [
			{ id: 1, name: "bench press", sets: 3, reps: 10, rest: 60 },
			{ id: 2, name: "incline dumbbell press", sets: 3, reps: 12, rest: 60 },
			{ id: 3, name: "triceps pushdown", sets: 3, reps: 12, rest: 45 },
		],
	},
	{
		day: "Tuesday",
		exercises: [
			{ id: 4, name: "squat", sets: 4, reps: 8, rest: 90 },
			{ id: 5, name: "leg press", sets: 3, reps: 12, rest: 75 },
			{ id: 6, name: "leg curl", sets: 3, reps: 12, rest: 60 },
		],
	},
	{
		day: "Thursday",
		exercises: [
			{ id: 7, name: "pull up", sets: 3, reps: 8, rest: 75 },
			{ id: 8, name: "barbell row", sets: 3, reps: 10, rest: 75 },
			{ id: 9, name: "biceps curl", sets: 3, reps: 12, rest: 45 },
		],
	},
	{
		day: "Friday",
		exercises: [
			{ id: 10, name: "shoulder press", sets: 3, reps: 10, rest: 60 },
			{ id: 11, name: "lateral raise", sets: 3, reps: 15, rest: 45 },
			{ id: 12, name: "front raise", sets: 3, reps: 12, rest: 45 },
		],
	},
	{
		day: "Saturday",
		exercises: [
			{ id: 13, name: "romanian deadlift", sets: 3, reps: 10, rest: 90 },
			{ id: 14, name: "walking lunges", sets: 3, reps: 12, rest: 60 },
			{ id: 15, name: "calf raises", sets: 4, reps: 15, rest: 45 },
		],
	},
	{
		day: "Sunday",
		exercises: [
			{ id: 16, name: "plank", sets: 3, reps: 30, rest: 30 },
			{ id: 17, name: "crunches", sets: 3, reps: 20, rest: 30 },
			{ id: 18, name: "leg raises", sets: 3, reps: 15, rest: 30 },
		],
	},
];

export const Route = createFileRoute("/api/workout")({
	server: {
		handlers: {
			GET: () => {
				return Response.json(workout);
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
