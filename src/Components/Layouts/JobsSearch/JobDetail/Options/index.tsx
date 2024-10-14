import React from "react";
import Button from '@mui/material/Button';
import figmaIcons from "../../../../../Utils/Icons/figma";

export interface JobOptionsProps{
    save?:boolean
    handleSave?:()=>void
    handleShare?:()=>void
}

export default function JobOptions({save=false,handleSave ,handleShare}:JobOptionsProps) {

    const copyClipboard = () => {
        // Copy the text inside the text field
        // navigator.clipboard.writeText();
        handleShare && handleShare()
    }

    return (
        <>
            <Button
                onClick={copyClipboard}
            >{figmaIcons.shareIcon()}</Button>
            <Button onClick={handleSave}>{figmaIcons.bookmarkIcon(save?'fill':'')}</Button>
            <Button>{figmaIcons.moreHorizontalIcon()}</Button>
        </>
    )
}