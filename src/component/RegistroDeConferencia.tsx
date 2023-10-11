
import React from 'react';
import { Button, Form, Input, Col, Row } from 'antd';

import { useForm, Controller, useFieldArray } from 'react-hook-form';

type FieldType = {
  name?: string;
  lasNamer?: string;
  email?: string;
  Dirección?: string;
};


export const RegistroDeConferencia = () => {
  // section de antd

  // section the react hook from
  const { control, handleSubmit, formState: { errors } } = useForm<FieldType>({
    defaultValues: {
      name: '',
      lasNamer: '',
      Dirección: ''

    },
  });



  const onSubmit = (data: FieldType) => {
    console.log('Data submitted:', data);

  };


  return (
    <>
      <br></br>
      <div className="container-for">

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => <Input {...field} />}
            />

          </Form.Item>
          <Form.Item<FieldType>
            label="last name"
            rules={[{ required: true, message: 'Please input your email' }
            ]}
          >
            <Controller
              name="lasNamer"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
          <Form.Item<FieldType>
            label="Email"
            rules={[{ required: true, message: 'Please input your password!' }]}

          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => <Input.Password {...field} />}
            />

          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            rules={[{ required: true, message: 'Please input your password!' }]}

          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => <Input.Password {...field} />}
            />

          </Form.Item>


          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

  ;


