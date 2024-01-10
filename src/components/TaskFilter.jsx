import React from 'react';
import MySelect from "../UI/select/MySelect";
import MyInput from "../UI/input/MyInput";

const TaskFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput placeholder="Search..." value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})}/>
            <MySelect
                defaultValue="Sort By"
                value={filter.sort}
                onChange={sortType => setFilter({...filter, sort: sortType})}
                options={[
                    {value: "title", name: "By name"},
                    {value: "body", name: "By description"}
                ]}
            />
        </div>
    );
};

export default TaskFilter;