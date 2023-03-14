import React from 'react'
import { img_tools } from '../../../Assets/AdminPanel'
import './Heading.scss'
function Heading({ mainHeading, secondHeading, className, mode, color, width, bg, subColor }) {
    return (
        <>
            <div className={className}>
                <div className={`p-4 heading_box ${mode} ${mode !== 'center' && 'me-auto ms-0 '}`} style={{ border: '2px solid #fab700' }}>
                    <img src={img_tools} alt="" className='img-fluid' style={{
                        left: `${mode !== 'center' ? '15%' : '50%'}`,
                        background: !color ? '#fff' : color,
                    }} />
                    <h1 className='m-0 bg-white' style={{ textAlign: mode, color: color ? '#fff' : color }}>{mainHeading}</h1>
                    <span className={`text-${mode}`} style={{
                        width: width ? width : `${'100%'}`,
                        left: `${mode !== 'center' ? '50%' : '50%'}`,
                        bottom: `${mode !== 'center' ? '-20%' : '-35%'}`,
                        background: !bg ? 'rgb(255, 255, 255,0.5)' : bg,
                        wordWrap: 'normal',
                        color: subColor ? subColor : 'black',
                        fontSize: '15px',
                    }}  >{secondHeading}</span>
                </div>
            </div>
        </>
    )
}

export default Heading