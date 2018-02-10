import React, { Component } from 'react';
import { Form, Input, Icon, Button, Row, Col } from 'antd';
import propTypes from 'prop-types';

const FormItem = Form.Item;
const { TextArea } = Input;

class ContactForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row gutter={16}>
          <Col span={6}>
            <FormItem>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your name!' }],
              })(<Input prefix={<Icon type="user" />} placeholder="Name" />)}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }],
              })(<Input prefix={<Icon type="mail" />} placeholder="Email" />)}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <FormItem>
              {getFieldDecorator('message', {
                rules: [{ required: true, message: 'Please input your message!' }],
              })(<TextArea rows={4} placeholder="Message" />)}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  form: propTypes.object.isRequired,
};

export default Form.create()(ContactForm);
