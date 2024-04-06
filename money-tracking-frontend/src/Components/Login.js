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
import "../App.css";
import { Typography } from "antd";
import { useTransition, animated } from '@react-spring/web'
import React, { useState, useCallback, useRef, useEffect } from 'react'//bunlara ayrı ayrı bak
const { Title } = Typography;
const { Option } = Select;

const Login = () => {


    const ref = useRef([]);
    const [items, set] = useState([]);
    const transitions = useTransition(items, {
        from: {
            opacity: 0,
            height: 0,
            innerHeight: 0,
            transform: 'perspective(600px) rotateX(0deg)',
            color: '#8fa5b6',
        },
        enter: [
            { opacity: 1, height: 80, innerHeight: 80 },
            { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#28b4d7' },
    });

    const reset = () => {
        ref.current.forEach(clearTimeout);
        ref.current = [];
        set([]);
        ref.current.push(setTimeout(() => set(['Apples', 'Oranges', 'Kiwis']), 2000));
        ref.current.push(setTimeout(() => set(['Apples', 'Kiwis']), 5000));
        ref.current.push(setTimeout(() => set(['Apples', 'Bananas', 'Kiwis']), 8000));
    };
    useEffect(() => {
        reset()
        return () => ref.current.forEach(clearTimeout)
    }, [])

    const [form] = Form.useForm();//buna bak ant designın default kodu mu

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
            <div className="LoginRegisterCard">

                <Title level={2} style={{
                    display: "flex", justifyContent: "center",
                    color: "white", background: "#278664",
                    margin: "0px", borderTopLeftRadius: '2vw',
                    borderTopRightRadius: '2vw', height: "7vh",
                    alignItems: "center"

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
                        padding: "10vh"

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

                {transitions(({ innerHeight, ...rest }, item) => (
                    <animated.div  style={rest} onClick={reset}>
                        <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                    </animated.div>
                ))} 

        </div>
    );
};
export default Login;