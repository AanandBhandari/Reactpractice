import React from 'react';
import Title from './CardTitle';
import InputField from './InputField';
import Add from './Add';
function Trello({data}) {
    return (
        <div className="Container">
            <Title/>
            <InputField data={data} />
            <Add/>
        </div>
    );
}

export default Trello;
