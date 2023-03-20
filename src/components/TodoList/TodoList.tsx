import { Col, Row, Input, Button, Select, Tag } from 'antd';

import Todo from '../Todo/Todo';

const TodoList: React.FC = () => {
  return (
    <>
      <Row style={{ height: '100%', overflowY: 'auto', marginBottom: '8px' }}>
        <Col span={24} style={{ height: '100%' }}>
          <Todo name="Learn Redux" priority="High" />
          <Todo name="Learn Redux" priority="High" />
          <Todo name="Learn Redux" priority="High" />
          <Todo name="Learn Redux" priority="High" />
          <Todo name="Learn Redux" priority="High" />
          <Todo name="Learn Redux" priority="High" />
          <Todo name="Learn Redux" priority="High" />
          <Todo name="Learn Redux" priority="High" />
          <Todo name="Learn Redux" priority="High" />
          <Todo name="Learn Redux" priority="High" />
          <Todo name="Learn Redux" priority="High" />
          <Todo name="Learn Redux" priority="High" />
          <Todo name="Learn Redux" priority="High" />
        </Col>
      </Row>
      <Row>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input />
          <Select defaultValue="Medium">
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary">Add</Button>
        </Input.Group>
      </Row>
    </>
    /* <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input />
          <Select defaultValue="Medium">
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary">Add</Button>
        </Input.Group>
      </Col> */
  );
};
export default TodoList;
