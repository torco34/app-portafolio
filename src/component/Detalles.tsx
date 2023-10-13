
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { Button, Form, Input, Select, } from 'antd';

const { Option } = Select;
import "../assets/css/registro.css"
interface FormValues {
  items: {
    name: string;
    type: string;
  }[];
}
export const Detalles = ({ }: FormValues) => {
  const { control, handleSubmit, watch } = useForm();

  const { } = useFieldArray({
    control,
    name: 'conferencias',
  });
  const onSubmit = (data: any) => {
    console.log(data);

  };
  const detallesConferencia  = watch('detallesConferencia');
  
  return <div className="container container-form">
    <h2>Bienvenidos a la conferencia</h2>
    <p>seleccione  tipo de conferencia para registrarse </p>
    <form onSubmit={handleSubmit(onSubmit)}>
      
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Controller
            control={control}
            name="detallesConferencia"
            render={({ field }) => (
              <Select {...field}
              >
                <Option value="">Selecciona una conferencia</Option>
                <Option value="Digital">Conferencia digital</Option>
                <Option value="de Salud">Conferencia salud</Option>

              </Select>
            )}
          />
        </Form.Item>
  

      <Button type="primary" htmlType="submit"> Submit</Button>
    </form>


  </div>;
};
