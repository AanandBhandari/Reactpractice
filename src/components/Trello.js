import React from 'react';
import Title from './CardTitle';
import InputField from './InputField';
import Add from './Add';
import Parent from './state'
function Trello({data}) {
    return (
        <div className="Container">
            <Title/>
            <InputField data={data} />
            <Add/>
            <Parent/>
        </div>
    );
}

export default Trello;
