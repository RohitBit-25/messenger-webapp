'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
    placeholder?: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors
}

const MessageInput: React.FC<MessageInputProps> = ({
    placeholder,
    id,
    type,
    required,
    register,
    errors
}) => {
    return (
        <div className="
        relative w-full
        ">
            <input id={id}
                type={type}
                autoComplete={id}
                {...register(id, { required })}
                placeholder={placeholder}
                className="
                text-volo-text
                font-light
                py-2
                px-4
                bg-volo-bg
                w-full
                rounded-full
                focus:outline-none
                focus:ring-2
                focus:ring-volo-primary
                placeholder-volo-muted
                "


            />
        </div>
    )
}

export default MessageInput;