'use client';

import clsx from "clsx";
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form';
interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean;
}
const Input: React.FC<InputProps> = ({
    label, id, type, required, register, errors, disabled
}) => {
    return (
        <div>
            <label className="
            block
            text-sm
            font-medium
            leading-6
            text-volo-text" htmlFor={id}>
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    className={clsx(`
                input-volo
                block
                w-full
                sm:text-sm
                sm:leading-6`,
                        errors[id] && "border-rose-500 focus:border-rose-500",
                        disabled && "opacity-50 cursor-default"
                    )}
                />
            </div>
        </div >
    )
}
export default Input;