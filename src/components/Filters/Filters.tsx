import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Typography, Input, Select, Tag } from 'antd';
import { Radio } from 'antd';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);
const optionsPrioprity = [
  { value: 'High' },
  { value: 'Medium' },
  { value: 'Low' },
];
const optionsStatus = [
  { label: 'All', value: 'all' },
  { label: 'Completed', value: 'completed' },
  { label: 'To do', value: 'todo' },
];
const tagRender = (props: CustomTagProps) => {
  const { label, closable, onClose, value } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  let tagColor = '';
  if (label === 'High') tagColor = 'red';
  else if (label === 'Medium') tagColor = 'yellow';
  else tagColor = 'green';
  return (
    <Tag onMouseDown={onPreventMouseDown} closable={closable} onClose={onClose}>
      <Tag style={{ margin: '2px 0px', borderRadius: 0 }} color={tagColor}>
        {label}
      </Tag>
    </Tag>
  );
};

const { Title } = Typography;
const Filters: React.FC = () => {
  const [status, setStatus] = useState<string>('All');
  const onChangeStatus = ({ target: { value } }: RadioChangeEvent) => {
    setStatus(value);
  };
  return (
    <>
      <Title level={5}>Search</Title>
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ width: '100%' }}
      />
      <Title level={5}>Filter By Status </Title>
      <Radio.Group
        options={optionsStatus}
        onChange={onChangeStatus}
        value={status}
      />
      <Title level={5}>Filter By Priority </Title>
      <Select
        mode="multiple"
        showArrow
        tagRender={tagRender}
        defaultValue={['High', 'Medium']}
        style={{ width: '100%' }}
        options={optionsPrioprity}
      />
    </>
  );
};

export default Filters;
