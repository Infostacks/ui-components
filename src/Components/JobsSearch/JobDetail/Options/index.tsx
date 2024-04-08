import React from "react";
import Button from '@mui/material/Button';
import figmaIcons from "../../../../Utils/Icons/figma";

export default function JobOptions({ }) {

    const copyClipboard = () => {
        // Copy the text inside the text field
        // navigator.clipboard.writeText();
    }

    return (
        <>
            <Button
                onClick={copyClipboard}
            >{figmaIcons.shareIcon()}</Button>
            <Button>{figmaIcons.bookmarkIcon()}</Button>
            <Button>{figmaIcons.moreHorizontalIcon()}</Button>
        </>
    )
}