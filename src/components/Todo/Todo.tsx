import { Row, Checkbox, Tag } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/hook';
import { toggleCompleted } from '../../redux/slices/todosSlice/todos';
import { ITodo } from '../../share/types';
type TodoProps = {
  key: string;
  todo: ITodo;
};
const Todo: React.FC<TodoProps> = (props: TodoProps) => {
  const dispatch = useAppDispatch();
  const { id, name, priority, completed } = props.todo;
  const [checked, setChecked] = useState<boolean | undefined>(completed);
  const onChange = (e: CheckboxChangeEvent) => {
    setChecked(!checked);
    dispatch(toggleCompleted(id));
  };
  let tagColor = '';
  if (priority === 'High') tagColor = 'red';
  else if (priority === 'Medium') tagColor = 'yellow';
  else tagColor = 'green';
  return (
    <Row
      justify={'space-between'}
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={onChange}>
        {name}
      </Checkbox>
      <Tag style={{ borderRadius: 0 }} color={tagColor}>
        {priority}
      </Tag>
    </Row>
  );
};
export default Todo;
