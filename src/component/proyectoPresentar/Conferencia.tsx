import React from 'react'
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { Button, Form, Input, Select, } from 'antd';

const { Option } = Select;

interface FormValues {
    items: {
        name: string;
        type: string;
    }[];
}
export const Conferencia = () => {
    const { control, handleSubmit, watch } = useForm();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'conferencias',

    });
    const onSubmit = (data: any) => {
        console.log(data);

    };
    const selectedHotel = watch("selectedHotel")
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>


                {selectedHotel && (<div>
                    <h2>{selectedHotel}</h2>
                    {fields.map((selec: any, index) => (
                        <div key={selec.id}>
                            <Controller
                                control={control}
                                name={`hospedaje[${index}].nombre`}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        placeholder="Full name"
                                    />
                                )}
                            />
                            <Button type="link" danger onClick={() => remove(index)}>
                                Eliminar
                            </Button>

                        </div>


                    ))}
                    <Button type="primary" onClick={() => append({})}>

                        Registrarse
                    </Button>
                </div>)}

                <br>

                </br>

             

            </form>


        </div>
    )
}
