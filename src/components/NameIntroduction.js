import { useState } from 'react';
import useInterval from 'use-interval';

const NameIntroduction = () => {
    const [rotationAngle, setRotationAngle] = useState(0)
    useInterval(()=> {
        setRotationAngle(rotationAngle + 1);
        document.querySelector('#gradient').setAttribute('gradientTransform',`rotate(${rotationAngle})`)
    },100)
    return ( 
        <>
        <svg className='landing__header-container' viewBox='0 -85 100 100' width='100' height='100'>
                <defs>
                    <linearGradient id='gradient' gradientTransform={`rotate(${rotationAngle})`}>
                        <stop offset='0%' stopColor='#833AB4'/>
                        <stop offset='50%' stopColor='#FD1D1D'/>
                        <stop offset='100%' stopColor='#FCB045'/>
                    </linearGradient>
                </defs>
                <text className='landing__header' x='50%'>Thomas Beaupain</text>
            </svg>
            <h2 className='landing__subtitle'>Junior Front-End Web Developper</h2>
        </>
     );
}
 
export default NameIntroduction;