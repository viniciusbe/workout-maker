type Exercise = {
	id: number;
	name: string;
	sets: number;
	reps: number;
	rest: number; // em segundos
};

type WorkoutDay = {
	day:
		| "MONDAY"
		| "TUESDAY"
		| "WEDNESDAY"
		| "THURSDAY"
		| "FRIDAY"
		| "SATURDAY"
		| "SUNDAY";
	exercises: Exercise[];
};

// biome-ignore lint/correctness/noUnusedVariables: false positive
type WeeklyWorkout = WorkoutDay[];
