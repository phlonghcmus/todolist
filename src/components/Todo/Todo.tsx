import { Row, Checkbox, Tag } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
type todoProps = {
  name: string;
  priority: string;
};
const Todo: React.FC<todoProps> = (props: todoProps) => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  let tagColor = '';
  if (props.priority === 'High') tagColor = 'red';
  else if (props.priority === 'Medium') tagColor = 'yellow';
  else tagColor = 'green';
  return (
    <Row justify={'space-between'}>
      <Checkbox onChange={onChange}>{props.name}</Checkbox>
      <Tag style={{ borderRadius: 0 }} color={tagColor}>
        {props.priority}
      </Tag>
    </Row>
  );
};
export default Todo;
