type Exercise = {
	id: string;
	name: string;
	sets: number;
};

type DayOfWeek =
	| "MONDAY"
	| "TUESDAY"
	| "WEDNESDAY"
	| "THURSDAY"
	| "FRIDAY"
	| "SATURDAY"
	| "SUNDAY";

type DailyPlan = {
	day: DayOfWeek;
	exercises: Exercise[];
};

// biome-ignore lint/correctness/noUnusedVariables: false positive
type WeeklyPlan = DailyPlan[];
