import React, { useEffect, useState } from "react";
import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import "./content.css";

interface DataType {
  key: number;
  id: number;
  name: string;
  description: string;
}

interface Props {
  handleEdit: Function;
}

const Content: React.FC<Props> = (props: Props) => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user");
        setData(response.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8000/user/${id}`);

      const response = await axios.get("http://localhost:8000/user");
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => props.handleEdit(true)} className="edit-btn">
            Update
          </Button>
          <Button onClick={() => handleDelete(record.id)} className="delete-btn">
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table className="table-content" columns={columns} dataSource={data} loading={loading} />
    </div>
  );
};

export default Content;
