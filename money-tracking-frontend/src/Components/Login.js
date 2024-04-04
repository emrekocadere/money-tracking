import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
} from 'antd';
import { useState } from 'react';
import { Typography } from "antd";
const { Title } = Typography;       

const { Option } = Select;


const Login = () => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);

    };


    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));
    return (
        <div style={{ background: "#278664 ", display: 'flex', alignItems: 'center', height: '100vh' }}>
            <Form

                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    prefix: '+90',
                }}
                style={{

                    paddingInline: '2vw',
                    paddingBlock: "4vh",
                    paddingTop:"1vh",
                    backgroundColor: 'white',
                    borderRadius: '2vw',
                    margin: "10vw"

                }}
                scrollToFirstError
            >

                <Title level={2} style={{marginBottom:"4vh", display:"flex",justifyContent:"center"}}>Login</Title>
                <Form.Item
                    name="username"
                    label="Username"
                    tooltip="What do you want others to call you?"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your nickname!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>



                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

               

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>


            </Form>
        </div>
    );
};
export default Login;