import "./ishler.scss"

function Ishler(props) {
    return ( 
        <>
            <div className="ish-img">
                <img src={props.src} alt=""/>
                <p>{props.ad}</p>
            </div>
        </>
     );
}

export default Ishler;