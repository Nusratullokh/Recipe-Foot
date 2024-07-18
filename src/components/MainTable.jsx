import { Table, Select, Button, Popconfirm, message } from 'antd';
import { useDispatch } from 'react-redux';
import {  useState } from 'react'
import { PROMOTE_USER } from '../redux/actions/types';

const MainTable = ({loading, data}) => {
    const dispatch = useDispatch();
    const [tableParams, setTableParams] = useState({
        pagination: {
          current: 1,
          pageSize: 2,
        },
      });
    const confirm = (data) => {
        dispatch({type: PROMOTE_USER, user: data})
        message.success('Click on Yes');
      };
      const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
      };
    const columns = [
        {
          title: 'Image',
          dataIndex: 'avatar',
          render: (item) => <img width={30} src={item}/>
        }, 
        {
          title: 'First name',
          dataIndex: 'first_name',
        },
        {
          title: 'Last name',
          dataIndex: 'last_name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
        },
        {
          title: 'Actions',
          render: (data) => <>
             <Popconfirm
              title="Promote the user"
              description="Are you sure to promote this user?"
              onConfirm={() => confirm(data)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button type='primary'>Promote</Button>
            </Popconfirm>
          </>
        },
      ];
      const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
          pagination,
          filters,
          sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
          sortField: Array.isArray(sorter) ? undefined : sorter.field,
        });
    
        // `dataSource` is useless since `pageSize` changed
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
          setData([]);
        }
      };
    
      const handleChange = (value) => {
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            pageSize: value
          }
        });
    
      };
  return (
    <div>
         <Table loading={loading} columns={columns} dataSource={data.map((item) => ({...item, key: item.id}))} pagination={tableParams.pagination} onChange={handleTableChange} />
      <Select
      defaultValue="2"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: '2',
          label: '2',
        },
        {
          value: '3',
          label: '3',
        },
        {
          value: '6',
          label: '6',
        }
      ]}
    />
    </div>
  )
}

export default MainTable