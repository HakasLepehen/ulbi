import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

const PostFilter = ({filter, setFilter}) => {
    let [options, setOptions] = useState([
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'}
    ])

    return (
        <div>
            <hr style={{margin: '10px auto 15px auto'}}/>
            <Input
                style={{marginBottom: '15px'}}
                placeholder={'Что Вы ищете?'}
                value={filter.query}
                onChange={e => {
                    setFilter({...filter, query: e.target.value});
                }}
            />
            <hr style={{margin: '10px auto 15px auto'}}/>
                <Select
                    value={filter.sort}
                    defaultValue={'Сортировка'}
                    options={options}
                    onChangeValue={selectedSort => setFilter({...filter, sort: selectedSort})}
                />
        </div>
    );
};

export default PostFilter;