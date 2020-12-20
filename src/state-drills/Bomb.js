import React, {Component} from 'react';


class Bomb extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({
                count:this.state.count + 1
            })
        }, 1000);
    }

    componentWillUnmount(){
        this.interval = clearInterval(this.interval)
    }

    renderDisplay(){
        const {count} = this.state
        if(count >= 8){
            clearInterval(this.interval)
            return 'Boom!!'
        }
        else if(count % 2 === 0){
            return 'tick'
        }
        else{
            return 'tock'
        }
    }

    render(){
        return(
            <div className='Bomb'>
                <p>{this.renderDisplay()}</p>
            </div>
        )
    }
}

export default Bomb;