import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Form, Input, InputNumber } from 'antd';



const AddExpense = ({ onAddExpense }) => {
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {

        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = async (values) => {

        console.log(values);
    };
    return (
        <div>


            <Button type="primary" htmlType="submit" onClick={showModal}>
                Open Modal
            </Button>



            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                footer={[

                ]}
            >
                <Form onFinish={onFinish}>

                <Form.Item
                    label="Amount"
                    name="Amount"
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="Description"
                >
                    <Input />
                </Form.Item>


                <Form.Item >
                    <Button type="primary" htmlType="submit"  >
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </Modal>
            
        </div >
    );

};
export default AddExpense;
















