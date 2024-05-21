import { UseFormRegister, RegisterOptions } from "react-hook-form"
import { InputContainer, InputLog } from "./styles";

interface InputProps {
    name: string;
    placeholder: string;
    type: string;
    rules?: RegisterOptions;
    register: UseFormRegister<any>;
    error?: string;
}

export const InputLogin = ({ name, placeholder, type, rules, error, register }: InputProps) => {
    return (
        <InputContainer>
            <InputLog
                type={type}
                placeholder={placeholder}
                {...register(name, rules)}
                id={name}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </InputContainer>
    )
}
