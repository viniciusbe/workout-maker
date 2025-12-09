type Exercise = {
	id: number;
	name: string;
	sets: number;
	reps: number;
	rest: number; // em segundos
};

type WorkoutDay = {
	day: string;
	exercises: Exercise[];
};

// biome-ignore lint/correctness/noUnusedVariables: false positive
type WeeklyWorkout = WorkoutDay[];
