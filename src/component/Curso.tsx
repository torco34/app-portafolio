import React from 'react'
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { Proyecto } from './Proyecto';

type FormValues = {
    cart: {
        name: string;
        price: number;
        quantity: number;
    }[];
};
export const Curso = ({ }: FormValues) => {
    const { control, handleSubmit } = useForm();
    const { fields, append, update } = useFieldArray({
        control,
        name: 'array'
    });



    return (
        <div>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                {fields.map((field, index) => (
                    <Edit
                        key={field.id}
                        control={control}
                        update={update}
                        index={index}
                        value={field}
                    />
                ))}

                <button
                    type="button"
                    onClick={() => {
                        append({ firstName: "" });
                    }}
                >
                    append
                </button>
                <input type="submit" />
            </form>

           
        </div>
    )
}

const Display = ({ control, index }: any) => {
    const data = useWatch({
        control,
        name: `array.${index}`
    });
    return <p>{data?.firstName}</p>;
};
const Edit = ({ update, index, value, control }: any) => {
    const { register, handleSubmit } = useForm({
        defaultValues: value
    });

    return (
        <div>
            <Display control={control} index={index} />

            <input
                placeholder="first name"
                {...register(`firstName`, { required: true })}
            />

            <button
                type="button"
                onClick={handleSubmit((data) => update(index, data))}
            >
                Submit
            </button>
        </div>
    );
};