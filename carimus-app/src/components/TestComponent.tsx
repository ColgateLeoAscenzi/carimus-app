import React from "react";
import ReactDOM from 'react-dom';

export interface TestComponentProps{
    name: string;
}

const TestComponent: React.FunctionComponent<TestComponentProps> = (props: TestComponentProps) => {
    
    const names = ["one","two","three"];

    return (
    <>
    
    <div>Hello {props.name}</div>
    
    {names.map((row: string) => {
        return <div>{row}</div>
    })}
    
    <div>Goodbye {props.name}</div>
    
    </>);
}


export default TestComponent;