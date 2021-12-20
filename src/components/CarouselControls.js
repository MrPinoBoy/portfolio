const CarouselControls = ({ activeBtn, setActiveBtn }) => {

    const previousNextBtn = (x) => {
        if(activeBtn + (x) === 4) {
            setActiveBtn(1)
        } else if (activeBtn + (x) === 0){
            setActiveBtn(3)
        } else {
        setActiveBtn(activeBtn + (x))
        }
    }

    const handle = (e) => {
        if(e.key === 'ArrowRight') {
            previousNextBtn(1)
            console.log(activeBtn)
        } else if (e.key === 'ArrowLeft') {
            previousNextBtn(-1)
            console.log(activeBtn)
        }
    }

    return ( 
        <div className="carousel" onKeyDown={(e)=>handle(e)}>
            
            <svg width="28" height="52" viewBox="0 0 28 52" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => previousNextBtn(-1)}>
                <line x1="1.41414" y1="25.4558" x2="26.87" y2="50.9116" stroke="white" strokeWidth="2"/>
                <line x1="26.1629" y1="0.707107" x2="0.707074" y2="26.163" stroke="white" strokeWidth="2"/>
            </svg>
            <div className="carousel__btn-container">
            <button className={activeBtn === 1 ? 'carousel__btn carousel__btn--active':"carousel__btn"} onClick={() => setActiveBtn(1)}>
                
            </button>
            <button className={activeBtn === 2 ? 'carousel__btn carousel__btn--active':"carousel__btn"} onClick={() => setActiveBtn(2)}>
                
            </button>
            <button className={activeBtn === 3 ? 'carousel__btn carousel__btn--active':"carousel__btn"} onClick={() => setActiveBtn(3)}>

            </button>
            </div>
            <svg width="29" height="52" viewBox="0 0 29 52" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => previousNextBtn(1)}>
                <line x1="26.7489" y1="26.1629" x2="1.2931" y2="0.707104" stroke="white" strokeWidth="2"/>
                <line x1="1.99992" y1="50.9116" x2="27.4558" y2="25.4558" stroke="white" strokeWidth="2"/>
            </svg>

        </div>
     );
}
 
export default CarouselControls;