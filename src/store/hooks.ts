import { useShallow } from "zustand/shallow";

import { usePlanStore } from "./planStore";

export const useHydrated = () => usePlanStore((state) => state.hydrated);

export const useColumnsIds = () =>
	usePlanStore(useShallow((state) => state.weeklyPlan.map((col) => col.day)));

export const useDailyPlan = (day: DayOfWeek) =>
	usePlanStore(
		useShallow(
			(state) =>
				state.weeklyPlan.find((col) => col.day === day)?.exercises || [],
		),
	);

export const usePlanActions = () => {
	return usePlanStore(
		useShallow(({ hydrateExercises, getExercises }) => ({
			hydrateExercises,
			getExercises,
		})),
	);
};

export const useExerciseActions = () => {
	return usePlanStore(
		useShallow(({ moveExercise, addExercise, removeExercise }) => ({
			moveExercise,
			addExercise,
			removeExercise,
		})),
	);
};

export const useExercisesNamesInPlan = () => {
	return usePlanStore(
		useShallow(({ getExercisesNamesInPlan }) => getExercisesNamesInPlan()),
	);
};
