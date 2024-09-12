import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd'; // Ant Design Form and Input

const ContactMe = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Handle form submission (you could send an email or store the message in a database)
    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: 'Message Sent',
        description: 'Thank you for reaching out! I will get back to you soon.',
      });
      form.resetFields();
    }, 1000); // Mock API call
  };

  return (
    <section id="contact" className="p-10 bg-slate-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-300">Contact Me</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <Form.Item 
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input className='bg-inherit' placeholder="Your Name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input className='bg-inherit' placeholder="Your Email" />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Please enter your message' }]}
        >
          <Input.TextArea className='bg-inherit' rows={5} placeholder="Your Message" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default ContactMe;
