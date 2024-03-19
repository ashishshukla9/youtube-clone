import React from 'react'
import './Recommended'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
const Recommended = () => {
    return (
        <div className='recommended'>
            <div className='side-video-list'>
                <img src={thumbnail1} alt="" />
                <div className='vid-info'>
                    <h4>Best channel that help you to be a web developer https://www.youtube.com/watch?v=Zb1zVeXLUf8&t=32s</h4>
                </div>
            </div>
        </div>
    )
}

export default Recommended
