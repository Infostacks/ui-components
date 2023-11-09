function SaveButton(text, callback, style) {
    return (
        <button
            style={style}
            onClick={callback}
        >
            ${text}
        </button>
    )
}