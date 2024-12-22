import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import {NavLink} from "react-router-dom";

const ChristmasPage=()=>{
return (
    <div className="christmas-page">
        <div style={{ display:"flex", justifyContent:"center" ,alignItems:"start" ,position:"absolute",top:0,left:0,width:'100vw'}}>
            <div style={{ display: "inline-block",marginLeft:'-300px'}}>
                <DotLottieReact style={{width: '500px'}}
                                src="https://lottie.host/ab0d5198-6138-422b-8e15-1ee47175ac96/30pGKi0BeA.lottie"
                                loop
                                autoplay
                />
            </div>
            <div style={{ display: "inline-block", marginLeft: "-300px"}}>
                <DotLottieReact style={{width: '500px'}}
                                src="https://lottie.host/ab0d5198-6138-422b-8e15-1ee47175ac96/30pGKi0BeA.lottie"
                                loop
                                autoplay
                />
            </div>
            <div style={{ display: "inline-block", marginLeft: "-300px"}}>
                <DotLottieReact style={{width: '500px'}}
                                src="https://lottie.host/ab0d5198-6138-422b-8e15-1ee47175ac96/30pGKi0BeA.lottie"
                                loop
                                autoplay
                />
            </div>
            <div style={{ display: "inline-block", marginLeft: "-300px"}}>
                <DotLottieReact style={{width: '500px'}}
                                src="https://lottie.host/ab0d5198-6138-422b-8e15-1ee47175ac96/30pGKi0BeA.lottie"
                                loop
                                autoplay
                />
            </div><div style={{ display: "inline-block", marginLeft: "-300px"}}>
            <DotLottieReact style={{width: '500px'}}
                            src="https://lottie.host/ab0d5198-6138-422b-8e15-1ee47175ac96/30pGKi0BeA.lottie"
                            loop
                            autoplay
            />
        </div><div style={{ display: "inline-block", marginLeft: "-300px"}}>
            <DotLottieReact style={{width: '500px'}}
                            src="https://lottie.host/ab0d5198-6138-422b-8e15-1ee47175ac96/30pGKi0BeA.lottie"
                            loop
                            autoplay
            />
        </div><div style={{ display: "inline-block", marginLeft: "-300px"}}>
            <DotLottieReact style={{width: '500px'}}
                            src="https://lottie.host/ab0d5198-6138-422b-8e15-1ee47175ac96/30pGKi0BeA.lottie"
                            loop
                            autoplay
            />
        </div><div style={{ display: "inline-block", marginLeft: "-300px"}}>
            <DotLottieReact style={{width: '500px'}}
                            src="https://lottie.host/ab0d5198-6138-422b-8e15-1ee47175ac96/30pGKi0BeA.lottie"
                            loop
                            autoplay
            />
        </div><div style={{ display: "inline-block", marginLeft: "-300px"}}>
            <DotLottieReact style={{width: '500px'}}
                            src="https://lottie.host/ab0d5198-6138-422b-8e15-1ee47175ac96/30pGKi0BeA.lottie"
                            loop
                            autoplay
            />
        </div><div style={{ display: "inline-block", marginLeft: "-300px"}}>
            <DotLottieReact style={{width: '500px'}}
                            src="https://lottie.host/ab0d5198-6138-422b-8e15-1ee47175ac96/30pGKi0BeA.lottie"
                            loop
                            autoplay
            />
        </div><div style={{ display: "inline-block", marginLeft: "-300px"}}>
            <DotLottieReact style={{width: '500px'}}
                            src="https://lottie.host/ab0d5198-6138-422b-8e15-1ee47175ac96/30pGKi0BeA.lottie"
                            loop
                            autoplay
            />
        </div>
            {/*<h1><NavLink href="christmas.jsx">Do you know how special is today?</NavLink></h1>*/}

        </div>
        <div style={{width:'75vw',position:'absolute',bottom:'0', left:'50%',translate:'-50%'}}>

            <NavLink to="/secondpage" style={{zIndex:100,position:"absolute",top:10,padding:'50px',border:'1px solid',left:'50%',translate:'-50%',opacity:0}}>Reveal Real</NavLink>
            <DotLottieReact style={{width:'100%'}}
                            src="https://lottie.host/b9324c1a-75b3-4587-85ed-379c0ddddcdb/AIq45zUYoL.lottie"
                            loop
                            autoplay
            />
        </div>
        <h1>Merry Christmas</h1>
        <h4 style={{position:'absolute',bottom:10,right:10}}>Find the real surprise</h4>
        <div>
        </div>
    </div>
)
}

export  default  ChristmasPage