import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { Button, Form, Input, Select, } from 'antd';
import { Conferencia } from './Conferencia';
const { Option } = Select;

interface FormValues {
    items: {
        name: string;
        type: string;
    }[];
}
export const ProyectoFields = () => {
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
        <div className='container'>

            <h2>Bienvenidos a la conferencia</h2>
            <p>seleccione  tipo de conferencia para registrarse </p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Form.Item wrapperCol={{ offset: 12, span: 10 }}>
                        <Controller
                            control={control}
                            name="selectedConferencia"
                            render={({ field }) => (
                                <Select {...field}
                                >
                                    <Option value="">Ninguno</Option>
                                    <Option value="Digital">Conferencia digital</Option>
                                    <Option value="de Salud">Conferencia salud</Option>

                                </Select>
                            )}
                        />
                    </Form.Item>
                </div>
                {selectedConferencia && (
                    <div>
                        <h3 className='' onClick={() => append({})}>  {selectedConferencia}</h3>


                        {fields.map((item, index) => (
                            <div key={item.id} >
                                <Controller
                                    control={control}
                                    name={`conferencias[${index}].nombre`}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            placeholder="Full name"
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name={`conferencias[${index}].email`}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            placeholder="Email"
                                        />
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name={`conferencias[${index}].password`}
                                    render={({ field }) => (
                                        <Input.Password
                                            {...field}
                                            placeholder="Password"

                                        />

                                    )}
                                />

                                <Controller
                                    control={control}
                                    name={`conferencias[${index}].fecha`}
                                    render={({ field }) => (
                                        <Input.Password
                                            {...field}
                                            placeholder="Confirm password"
                                        />
                                    )}
                                />
                                <Button type="link" danger onClick={() => remove(index)}>
                                    Eliminar
                                </Button>
                            </div>
                        ))}
                        <br></br>
                        <Button type="primary" onClick={() => append({})}>
                            Registrarse  en la conferencia  {selectedConferencia}
                        </Button>
                    </div>
                )}
                <Button type="primary" htmlType="submit"> Submit</Button>
            </form>
            <Conferencia />
        </div>
    )
}

