import React from 'react';
class InputField extends React.Component {

    state = {
        data: []
    }

    componentDidMount(){
        this.changeState(this.props.data);
    }       
    
    changeValue = (e, i) =>{
        console.log(i)
        this.props.data[i].data = e.target.value;
        this.changeState(this.props.data);
    }

    changeState = (data) =>{
        this.setState({data})
    }
    render(){
        console.log(this.state)
        return (
            <div className="form-group">
            {
                this.state.data.map((d, i) => {
                   return this.state.data && <input key={d.id} type="text" className="form-control input" value={d.data} onChange={(e)=>this.changeValue(e, i)} name=""/>
                    
                })
            }
        </div>
    );
}
}

export default InputField;
