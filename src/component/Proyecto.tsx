

import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { Button, Form, Input } from 'antd';
import { useState } from "react";
interface FormValues {
    items: {
        name: string;
        type: string;
    }[];
}
export const Proyecto = ({ }: FormValues) => {
    const [showAdditionalField, setShowAdditionalField] = useState(false);

    const { control, handleSubmit, watch } = useForm();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'conferencias',
    });
    const onSubmit = (data: any) => {
        console.log(data);

    };

    const selectedConferencia = watch('selectedConferencia');
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Selecciona una conferencia:</label>
                    <Controller
                        control={control}
                        name="selectedConferencia"
                        render={({ field }) => (
                            <select {...field}>
                                <option value="">Selecciona una conferencia</option>
                                <option value="conferencia1">Conferencia 1</option>
                                <option value="conferencia2">Conferencia 2</option>
                                {/* Agrega más opciones de conferencia según sea necesario */}
                            </select>
                        )}
                    />
                </div>
                {selectedConferencia && (
                    <div>
                        <h3>Detalles de la conferencia {selectedConferencia}</h3>
                        {fields.map((item, index) => (
                            <div key={item.id}>
                                <Controller
                                    control={control}
                                    name={`conferencias[${index}].nombre`}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            placeholder="Nombre"
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name={`conferencias[${index}].fecha`}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            placeholder="Fecha ed"
                                        />
                                    )}
                                />
                                <button type="button" onClick={() => remove(index)}>
                                    Eliminar
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => append({})}
                        >
                            Agregar conferencia
                        </button>
                    </div>
                )}

                <button type="submit">Enviar</button>

            </form>


        </>
    )
}
