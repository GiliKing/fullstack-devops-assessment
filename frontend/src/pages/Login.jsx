import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Form, Input, Typography, message } from "antd";
import { setToken } from "../store/authSlice";
import { loginUser } from "../api/auth"; // Use the service

const { Title } = Typography;

export default function Login() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);

      const res = await loginUser(values);

      dispatch(setToken(res.data.token || res.data.access_token));
      message.success("Login successful!");

      window.location.href = "/builder";
    } catch (error) {
      message.error(error?.message || "Authentication failed");
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
        background: "#F5F7FA",
      }}
    >
      <Card style={{ width: 400, padding: 24 }}>
        <Title level={3} style={{ textAlign: "center" }}>
          Sign In
        </Title>

        <Form layout="vertical" onFinish={onFinish}>
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
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}
