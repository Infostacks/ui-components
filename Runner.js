// import React from "react";
// import Box from "/src/Components/Box/box";

// const { Button } = require("@mui/material")

/**
 * Represents the input field
 * @param {string} type - The type of input field (default = 'text')
 * @param {string} value - Value of input field
 * @param {function} onChange 
 * @param {function} onClick
 * @param {string} placeholder
 * @param {string} background - Background color of input field
 * @param {string} svgStart - Starting icon of input feild. Possible strings (user, email, password, check, eyeOpen, eyeClosed)
 * @param {string} svgEnd - Ending icon of input feild. Possible strings (user, email, password, check, eyeOpen, eyeClosed)
 * @param {boolean} required
 * @param {object} styles - Defines the style of input field
 * @param {object} register - React Hook Form
 * @param {boolean} error - Error in this input field
 * @returns 
 */
function HInputFeild({type, value, onChange, onClick, placeholder, background, svgStart, svgEnd, required, styles, register, error}) {
    const SVGS = {
        user: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" stroke="#8F8FC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="#8F8FC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        ,
        email: <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
            <path d="M18.2258 10.6798C18.2257 8.86817 17.6413 7.10852 16.5655 5.68028C15.4898 4.25204 13.9843 3.2371 12.2882 2.79661C10.592 2.35613 8.80248 2.51535 7.20367 3.24901C5.60486 3.98266 4.28846 5.24868 3.46349 6.84604C2.63853 8.44339 2.3523 10.2805 2.65025 12.0657C2.9482 13.8508 3.81326 15.4817 5.10805 16.6993C6.40285 17.9168 8.05316 18.6514 9.79691 18.7862C11.5407 18.921 13.2779 18.4483 14.7328 17.4433L15.8213 19.134C14.0028 20.3903 11.8312 20.9813 9.65149 20.8129C7.47177 20.6445 5.40882 19.7264 3.79024 18.2045C2.17166 16.6826 1.09024 14.6441 0.717711 12.4126C0.345179 10.1812 0.702889 7.88473 1.73404 5.88798C2.76519 3.89123 4.41066 2.30863 6.40917 1.3915C8.40767 0.474367 10.6446 0.275275 12.7648 0.825841C14.885 1.37641 16.7669 2.64507 18.1117 4.43036C19.4564 6.21566 20.1869 8.41524 20.1871 10.6798V12.2038C20.1885 12.9657 19.9536 13.7079 19.5172 14.321C19.0807 14.9342 18.4657 15.3859 17.7627 15.6096C17.0598 15.8333 16.3061 15.8172 15.6127 15.5637C14.9192 15.3101 14.3227 14.8325 13.911 14.2013C13.2562 14.9061 12.4188 15.4 11.4996 15.6236C10.5803 15.8473 9.61834 15.7912 8.72913 15.4621C7.83992 15.133 7.06134 14.5449 6.48693 13.7685C5.91253 12.992 5.56673 12.0602 5.49109 11.0851C5.41545 10.11 5.61319 9.13295 6.06054 8.27142C6.50789 7.4099 7.18583 6.70053 8.0129 6.22854C8.83997 5.75654 9.78099 5.54201 10.7229 5.61071C11.6648 5.67941 12.5675 6.02843 13.3226 6.61582H15.2839V12.2038C15.2839 12.608 15.4389 12.9956 15.7147 13.2815C15.9906 13.5673 16.3648 13.7278 16.7549 13.7278C17.145 13.7278 17.5191 13.5673 17.795 13.2815C18.0709 12.9956 18.2258 12.608 18.2258 12.2038V10.6798ZM10.3807 7.63182C9.79882 7.63182 9.23003 7.81058 8.74623 8.1455C8.26243 8.48042 7.88536 8.95645 7.66269 9.5134C7.44002 10.0704 7.38176 10.6832 7.49528 11.2745C7.60879 11.8657 7.88898 12.4088 8.30042 12.8351C8.71186 13.2614 9.23606 13.5516 9.80674 13.6693C10.3774 13.7869 10.9689 13.7265 11.5065 13.4958C12.0441 13.2651 12.5036 12.8744 12.8268 12.3732C13.1501 11.872 13.3226 11.2827 13.3226 10.6798C13.3226 9.87144 13.0127 9.09617 12.4609 8.52456C11.9092 7.95295 11.1609 7.63182 10.3807 7.63182Z" fill="#231571" fillOpacity="0.47" />
        </svg>
        ,
        password: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <g clipPath="url(#clip0_610_12417)">
                <path d="M12 22.8644C6.477 22.8644 2 18.3158 2 12.7044C2 7.09307 6.477 2.54443 12 2.54443C17.523 2.54443 22 7.09307 22 12.7044C22 18.3158 17.523 22.8644 12 22.8644ZM12 20.8324C14.1217 20.8324 16.1566 19.9761 17.6569 18.4518C19.1571 16.9275 20 14.8601 20 12.7044C20 10.5488 19.1571 8.48137 17.6569 6.95707C16.1566 5.43277 14.1217 4.57643 12 4.57643C9.87827 4.57643 7.84344 5.43277 6.34315 6.95707C4.84285 8.48137 4 10.5488 4 12.7044C4 14.8601 4.84285 16.9275 6.34315 18.4518C7.84344 19.9761 9.87827 20.8324 12 20.8324ZM11 13.5091C10.4736 13.2757 10.0424 12.8652 9.77878 12.3468C9.51521 11.8283 9.43539 11.2334 9.55273 10.6622C9.67008 10.091 9.97744 9.57822 10.4231 9.21015C10.8688 8.84208 11.4256 8.64116 12 8.64116C12.5744 8.64116 13.1312 8.84208 13.5769 9.21015C14.0226 9.57822 14.3299 10.091 14.4473 10.6622C14.5646 11.2334 14.4848 11.8283 14.2212 12.3468C13.9576 12.8652 13.5264 13.2757 13 13.5091V16.7684H11V13.5091Z" fill="#231571" fillOpacity="0.47" />
            </g>
            <defs>
                <clipPath id="clip0_610_12417">
                    <rect width="23.5355" height="24.384" fill="white" transform="translate(0.613281 0.512207)" />
                </clipPath>
            </defs>
        </svg>,
        check: <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none" onClick={onClick}>
            <path d="M8.10913 15.2769C6.92245 15.2769 5.76241 14.9123 4.77571 14.2292C3.78902 13.5462 3.01998 12.5753 2.56586 11.4394C2.11173 10.3036 1.99291 9.05366 2.22442 7.84781C2.45593 6.64197 3.02738 5.53433 3.86649 4.66496C4.70561 3.79559 5.77471 3.20354 6.93859 2.96369C8.10248 2.72383 9.30888 2.84693 10.4052 3.31743C11.5016 3.78793 12.4387 4.58469 13.098 5.60696C13.7572 6.62923 14.1091 7.83109 14.1091 9.06056C14.1091 10.7092 13.477 12.2904 12.3518 13.4562C11.2266 14.6219 9.70043 15.2769 8.10913 15.2769ZM8.10913 14.0336C9.05848 14.0336 9.98652 13.7419 10.7759 13.1955C11.5652 12.6491 12.1805 11.8724 12.5438 10.9637C12.9071 10.055 13.0021 9.05504 12.8169 8.09036C12.6317 7.12569 12.1745 6.23957 11.5032 5.54408C10.832 4.84858 9.97668 4.37495 9.04557 4.18306C8.11446 3.99117 7.14934 4.08966 6.27225 4.46606C5.39517 4.84245 4.64551 5.47986 4.11808 6.29768C3.59065 7.11549 3.30913 8.07698 3.30913 9.06056C3.30913 10.3795 3.81485 11.6444 4.71502 12.577C5.6152 13.5097 6.83609 14.0336 8.10913 14.0336ZM7.50913 11.5471L4.96513 8.90929L5.80913 8.03072L7.50913 9.78579L10.9091 6.27254L11.7581 7.15111L7.50913 11.5471Z" fill="#231571" fillOpacity="0.47" />
        </svg>,
        eyeOpen: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{cursor: 'pointer'}} onClick={onClick}>
            <path d="M10.3866 7.99995C10.3866 9.31995 9.31995 10.3866 7.99995 10.3866C6.67995 10.3866 5.61328 9.31995 5.61328 7.99995C5.61328 6.67995 6.67995 5.61328 7.99995 5.61328C9.31995 5.61328 10.3866 6.67995 10.3866 7.99995Z" stroke="#807EBC" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.00014 13.5133C10.3535 13.5133 12.5468 12.1266 14.0735 9.72665C14.6735 8.78665 14.6735 7.20665 14.0735 6.26665C12.5468 3.86665 10.3535 2.47998 8.00014 2.47998C5.64681 2.47998 3.45347 3.86665 1.92681 6.26665C1.32681 7.20665 1.32681 8.78665 1.92681 9.72665C3.45347 12.1266 5.64681 13.5133 8.00014 13.5133Z" stroke="#807EBC" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        eyeClosed: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{cursor: 'pointer'}} onClick={onClick}>
        <path d="M10.0201 6.3134L6.64678 9.68674C6.21344 9.2534 5.94678 8.66007 5.94678 8.00007C5.94678 6.68007 7.01344 5.6134 8.33344 5.6134C8.99344 5.6134 9.58678 5.88007 10.0201 6.3134Z" stroke="#807EBC" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.2134 3.84669C11.0467 2.96669 9.71339 2.48669 8.33339 2.48669C5.98006 2.48669 3.78673 3.87336 2.26006 6.27336C1.66006 7.21336 1.66006 8.79336 2.26006 9.73336C2.78673 10.56 3.40006 11.2734 4.06673 11.8467" stroke="#807EBC" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.94678 13.0201C6.70678 13.3401 7.51344 13.5134 8.33344 13.5134C10.6868 13.5134 12.8801 12.1267 14.4068 9.72674C15.0068 8.78674 15.0068 7.20674 14.4068 6.26674C14.1868 5.92008 13.9468 5.59341 13.7001 5.28674" stroke="#807EBC" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.6733 8.46667C10.5 9.40667 9.73333 10.1733 8.79333 10.3467" stroke="#807EBC" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.64675 9.68665L1.66675 14.6666" stroke="#807EBC" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 1.33337L10.02 6.31337" stroke="#807EBC" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }

    return (
        <div
            style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: `${error ? '#FFD2D2' : background}`,
                borderRadius: '25px',
                padding: '15px 20px',
                color: '#463F7E',
                border: `1px solid ${background ? background : error ? error : 'grey'}`
            }}
        >
            {
                svgStart &&
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {SVGS[svgStart]}
                    <span
                        style={{
                            margin: '0px 13px'
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="15" viewBox="0 0 2 15" fill="none">
                            <path opacity="0.4" d="M1.0603 0.916016V14.124" stroke="#4950FF" strokeLinecap="round" />
                        </svg>

                    </span>
                </div>
            }


            <input
                type={type ? type : "text"}
                placeholder={placeholder}
                style={{
                    lineHeight: '21px',
                    margin: '7px',
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    color: '#463F74',
                    ...styles
                }}
                className="ui-component-hinput-field"
                value={value}
                onChange={onChange}
                required={required}
                {...register}
            />

            <div style={{width: '16px'}}>
            {
                svgEnd &&
                <div>
                    {SVGS[svgEnd]}
                </div>
            }
            </div>

        </div>
    )
}

const Container = () => {
    const [eye, setEye] = React.useState(true);
    return (
        <div style={{ display: "flex", flexWrap: 'wrap' }}>
            <form >
            <HInputFeild
                placeholder="Full Name"
                svgStart={"user"}
                background={'var(--stratos-100, #D2DBFF)'}
                required
            />

            <HInputFeild 
                placeholder="Email Password"
                svgStart="email"
                svgEnd={"check"}
            />

            <HInputFeild
                placeholder="Password"
                svgStart={"password"}
                onClick={()=>{setEye(!eye)}}
                svgEnd={eye ? "eyeOpen" : 'eyeClosed'}
                error
            />
            <HInputFeild 
                styles={{width: '300px'}}
            />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

ReactDOM.render(
    React.createElement(Container),
    document.getElementById('root')
);