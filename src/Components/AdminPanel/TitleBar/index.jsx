import React from 'react'
import tool from '../../../Assets/AdminPanel/tool.svg'
import './TitleBar.scss'

function TitleBar({ mainheding, secondheading, className, mode, color }) {
    return (
        <>
            <div className={className}>
                <div className={`p-4 heding_box ${mode} ${mode !== 'center' && 'me-auto ms-0 '}`} style={{ border: '2px solid #fab700' }}>
                    <img src={tool} alt="" className='img-fluid' style={{
                        left: `${mode !== 'center' ? '15%' : '50%'}`,
                        background: !color ? '#fff' : color,
                    }} />
                    <h1 className='m-0' style={{ textAlign: mode, color: color ? '#fff' : color }}>{mainheding}</h1>
                    <span className={`text-${mode}`} style={{
                        width: `${'100%'}`,
                        left: `${mode !== 'center' ? '50%' : '50%'}`,
                        bottom: `${mode !== 'center' ? '-20%' : '-35%'}`,
                        background: !color ? 'rgb(255, 255, 255,0.5)' : color,
                        wordWrap: 'normal',
                        color: 'red'
                    }}  >{secondheading}</span>
                </div>
            </div>
        </>
    )
}

export default TitleBar