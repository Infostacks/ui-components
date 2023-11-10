import React from "react";

export interface HInputFeildProps {
    type: string,
    value: string,
    onChange: any | null,
    onClick: any | null,
    styles: any | null,
    others: any | null
}

export default function HInputFeild(props: HInputFeildProps) {
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