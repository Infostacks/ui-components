// import React from "react";
// import Box from "/src/Components/Box/box";

function HInputFeild(props) {
    return (
        <input
            type={props.type}
            style={{
                width: '100%',
                padding: '10px',
                margin: '10px',
                ...props.styles
            }}
            className="ui-component-hinput-feild"
            value={props.value}
            onClick={props.onClick}
            onChange={props.onChange}
        />
    )
}

const Box = ({label}) => {
    return (
        <div
            style={{
                width: '300px',
                height: '300px',
                background: 'red',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '30px',
                fontWeight: 'bold'
            }}
        >
            {label}
        </div>
    )
}

const Container = () => {
    return (
        <div>
            <Box label={"GG"}/>
            <HInputFeild 
                styles={{
                    width: '50%',
                }}
            />
        </div>
    )
}

ReactDOM.render(
    React.createElement(Container),
    document.getElementById('root')
  );