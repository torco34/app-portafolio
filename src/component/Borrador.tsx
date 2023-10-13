
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { Button, Form, Input, Select, } from 'antd';

const { Option } = Select;
import "../assets/css/registro.css"
interface FormValues {
  items: {
    name: string;
    name2?: string;
    type: string;
  }[];
}
export const Borrador = ({ }: FormValues) => {
  const { control, handleSubmit, watch } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'conferencias',
    
  });
  const onSubmit = (data: any) => {
    console.log(data);

  };
  const selectedConferencia = watch('selectedConferencia');
  const selectedHotel = watch("selectedHotel")
  return <div className="container container-form">
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
          <Button type="primary" onClick={() => append({})}>
            Registrarse  en la conferencia  {selectedConferencia}
          </Button>
        </div>
      )}
      <div>
        <Form.Item wrapperCol={{ offset: 12, span: 10 }}>
          <Controller
            control={control}
            name="selectedHotel"
            render={({ field }) => (
              <Select {...field}
              >
                <Option value="">Ninguno</Option>
                <Option value="Conferencia completa">Conferencia Completa</Option>
                <Option value="Pase Diario">Pase Diario</Option>

              </Select>
            )}
          />
        </Form.Item>
      </div>
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
          {/* {selectedHotel} */}
          Registrarse
        </Button>
      </div>)}

      <Button type="primary" htmlType="submit"> Submit</Button>
    </form>


  </div>;
};
