import { useState, useCallback } from 'react';

interface FormValues {
	[key: string]: any;
}

interface FormErrors {
	[key: string]: string;
}

interface Validator {
	[key: string]: (value: any) => void;
}

interface UseFormProps {
	initialValues: FormValues;
	validate?: Validator;
}

export const useForm = ({ initialValues, validate }: UseFormProps) => {
	const [values, setValues] = useState<FormValues>(initialValues);
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = event.target;
			setValues(prevValues => ({ ...prevValues, [name]: value }));
		},
		[]
	);

	const handleSubmit = useCallback(
		(submitCallback: () => void) => {
			return (event: React.FormEvent) => {
				event.preventDefault();
				setIsSubmitting(true);

				if (validate) {
					const validationErrors: FormErrors = {};
					for (const [record, validateFn] of Object.entries(
						validate
					)) {
						try {
							validateFn(values[record]);
						} catch (error) {
							validationErrors[record] = (error as Error).message;
						}
					}
					setErrors(validationErrors);
					if (Object.keys(validationErrors).length > 0) {
						setIsSubmitting(false);
						return;
					}
				}

				submitCallback();
				setIsSubmitting(false);
			};
		},
		[values, validate]
	);

	const resetForm = useCallback(() => {
		setValues(initialValues);
		setErrors({});
	}, [initialValues]);

	return {
		values,
		errors,
		isSubmitting,
		handleChange,
		handleSubmit,
		resetForm,
	};
};
