import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { workoutApi } from "@/routes/api/workout";

interface PlanState {
	weeklyPlan: WeeklyPlan;
	hydrated: boolean;
}

interface DragEventData {
	columnIndex: number;
	itemIndex: number;
	itemName: string;
}

type TargetType = "column" | "item";

interface PlanActions {
	hydrateExercises: (apiPlan: WeeklyPlan) => void;
	getExercises: () => WeeklyPlan;
	moveExercise: (
		source?: DragEventData,
		target?: DragEventData,
		targetType?: TargetType,
	) => void;
	addExercise: (exercise: Exercise, dayOfWeek: DayOfWeek) => void;
	removeExercise: (exerciseId: string, dayOfWeek: DayOfWeek) => void;
	getExercisesNamesInPlan: () => Set<string>;
}

export const usePlanStore = create<PlanState & PlanActions>()(
	immer((set, get) => ({
		weeklyPlan: workoutApi,
		hydrated: false,
		hydrateExercises: (apiPlan: WeeklyPlan) =>
			set((state) => {
				state.weeklyPlan = apiPlan;
				state.hydrated = true;
			}),
		getExercises: () => {
			return get().weeklyPlan;
		},
		moveExercise: (source, target, targetType) =>
			set(({ weeklyPlan: columns }) => {
				if (!source || !target || !targetType) return;
				if (source.itemName === target.itemName) return;

				const sourceColumn = columns[source.columnIndex];
				const [item] = sourceColumn.exercises.splice(source.itemIndex, 1);

				const targetColumn = columns[target.columnIndex];

				if (targetType === "column") {
					targetColumn.exercises.push(item);
				} else {
					targetColumn.exercises.splice(target.itemIndex, 0, item);
				}
			}),

		addExercise: (exercise, dayOfWeek) => set(({ weeklyPlan: columns }) => {}),
		removeExercise: (exerciseId, dayOfWeek) =>
			set(({ weeklyPlan: columns }) => {}),
		getExercisesNamesInPlan: () => {
			const { weeklyPlan: columns } = get();
			const exercisesNames = columns
				.flatMap((column) => column.exercises)
				.map((w) => w.name);

			return new Set(exercisesNames);
		},
	})),
);
