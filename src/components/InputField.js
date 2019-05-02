import React from 'react';
function InputField({data}) {
    return (
        <div className="form-group">
            {
                data.map(d => (

                    <input key={d.id} type="text" className="form-control input" value={d.title}/>
                )
                )
            }
        </div>
    );
}

export default InputField;
