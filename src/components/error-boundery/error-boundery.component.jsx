
import React from 'react';

class ErrorBoundery extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            hasError:false
        }
    }
    
    static getDerivedStateFromProps(error){

        if (!error) {
            return {hasError:true}    
        }
        return;
        
    }
    
    componentDidCatch(error,info){
        console.log(info);
    }

    render() { 
        if (this.state.hasError) {
            return (<div>Something went wrong</div>)
        }

        return this.props.children
    }
}

export default ErrorBoundery;