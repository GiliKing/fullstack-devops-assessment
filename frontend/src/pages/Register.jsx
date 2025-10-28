import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Form, Input, Typography, message } from "antd";
import { setToken } from "../store/authSlice";
import { registerUser } from "../api/auth";

const { Title } = Typography;

export default function Register() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);

      const response = await registerUser(values);

      dispatch(setToken(response.data.token));
      message.success("Account created successfully!");

      window.location.href = "/builder";
    } catch (error) {
      message.error(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#F5F7FA"
      }}
    >
      <Card style={{ width: 400, padding: 24 }}>
        <Title level={3} style={{ textAlign: "center" }}>
          Create Account
        </Title>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email is required" }]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            style={{ marginTop: 12 }}
          >
            Register
          </Button>
        </Form>
      </Card>
    </div>
  );
}
