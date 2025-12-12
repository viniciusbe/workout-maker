import {
	Field as BaseField,
	type FieldControlProps,
} from "@base-ui-components/react/field";

export interface FieldProps extends FieldControlProps {
	label: string;
	errorMessage?: string;
	description?: string;
}

export default function Field(props: FieldProps) {
	const { label, errorMessage, description, ...controlProps } = props;

	return (
		<BaseField.Root className="flex w-full max-w-64 flex-col items-start gap-1">
			<BaseField.Label className="text-sm font-medium text-gray-900">
				{label}
			</BaseField.Label>
			<BaseField.Control
				required
				placeholder="Required"
				className="h-10 w-full rounded-md border border-gray-200 pl-3.5 text-base text-gray-900  focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800"
				{...controlProps}
			/>
			<BaseField.Error className="text-sm text-red-800" match="valueMissing">
				{errorMessage}
			</BaseField.Error>

			<BaseField.Description className="text-sm text-gray-600">
				{description}
			</BaseField.Description>
		</BaseField.Root>
	);
}
