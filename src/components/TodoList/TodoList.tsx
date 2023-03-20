import { Col, Row, Input, Button, Select, Tag, Space } from 'antd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { selectToDoRemaning } from '../../redux/slices/reSelect';
import { selectTodos, todoAdded } from '../../redux/slices/todosSlice/todos';
import { ITodo } from '../../share/types';
import Todo from '../Todo/Todo';

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectToDoRemaning);
  const [todoName, setTodoName] = useState<string>('');
  const [todoPriority, setTodoPriority] = useState<string>('High');
  const handleAddButtonClick = () => {
    dispatch(
      todoAdded({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: todoPriority,
      })
    );
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
  };
  const handleChangePriority = (value: string) => {
    setTodoPriority(value);
  };
  return (
    <>
      <Row style={{ height: '100%', overflowY: 'auto', marginBottom: '8px' }}>
        <Col span={24} style={{ height: '100%' }}>
          {todos.map((todo: ITodo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Space.Compact style={{ display: 'flex' }}>
            <Input value={todoName} onChange={handleChangeInput} />
            <Select defaultValue="High" onChange={handleChangePriority}>
              <Select.Option value="High">
                <Tag color="red">High</Tag>
              </Select.Option>
              <Select.Option value="Medium">
                <Tag color="blue">Medium</Tag>
              </Select.Option>
              <Select.Option value="Low">
                <Tag color="gray">Low</Tag>
              </Select.Option>
            </Select>
            <Button type="primary" onClick={handleAddButtonClick}>
              Add
            </Button>
          </Space.Compact>
        </Col>
      </Row>
    </>
  );
};
export default TodoList;
