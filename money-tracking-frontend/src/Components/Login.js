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

    //278664
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
        <div style={{ background: "#f2f2f2 ", display: 'flex', height: '100vh', alignItems: "center" }}>
            <div style={{


                marginLeft: "10vw",
                backgroundColor: 'white',
                borderRadius: '2vw',

            }}>
                <Title level={2} style={{
                    display: "flex", justifyContent: "center",
                    color: "white", background: "#278664",
                    margin: "0px", borderTopLeftRadius: '2vw',
                    borderTopRightRadius: '2vw',height:"7vh",
                    alignItems:"center",justifyContent:"center"
                    
                }}>
                    Login
                </Title>

                <Form

                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        prefix: '+90',
                    }}
                    style={{
                        padding:"10vh"

                    }}
                    scrollToFirstError
                >


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
                        <Button type="primary" htmlType="submit" style={{ background: "#278664" }}>
                            Login
                        </Button>
                        <a style={{ color: "#278664" }}>Continue Without Acoount</a>
                    </Form.Item>


                </Form>
            </div>


        </div>
    );
};
export default Login;