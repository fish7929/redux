import './index.css';
import React from 'react';
import ReactDOM, {render, unmountComponentAtNode} from 'react-dom';
import App from './components/app';

// const componentInstance = render(<App /> , document.getElementById("app"));
// console.log(<h1>hello world</h1>);
// console.log(App);
// console.log(<App />);
// console.log(componentInstance);

console.log('首次挂载');
let componentInstance = render(<App /> , document.getElementById("app"));

window.renderComponent = () => {
    console.log('挂载');
    componentInstance = render(<App /> , document.getElementById("app"));
};

window.setState = () => {
    console.log('更新');
    componentInstance.setState({foo : 'bar'});
};


window.unmountComponentAtNode = () => {
    console.log('卸载');
    unmountComponentAtNode(document.getElementById("app"));
};


