import posed from 'react-pose';



export const FriendlyMessage = posed.div({
    init: { opacity: 0 },
    open:{
        opacity: 1,
        transition:{
            duration: 200,
        }
    },
    closed:{
        opacity: 0,
        transition:{
            duration:200,
        }
    }
})
export const FadeDelay = posed.div({
    open: {
        opacity: 0,
        transition:{
            delay: 3000,
        },
    }
})
export const HoverScale = posed.div({
    hoverable: true,
    init: { scale: 1 },
    hover:{
        scale: 1.05,
    },
    pressable: true,
    press: { 
        scale: 0.95,
    }
})
export const StaggerChildrenContent = posed.div({
    open:{
        staggerChildren: 30,
        delayChildren:100,
    }
})

export const StaggerPauseThenQuick = posed.div({
    open:{
        staggerChildren: 100,
        delayChildren: 250
    }
});
export const StaggerRemaining = posed.div({
    open: {
        staggerChildren: 50,
        delayChildren: 100
    }
});
export const StaggerChildren = posed.div({
    open: {
        staggerChildren: 250,
        delayChildren: 100
    }
});
export const LoadFade = posed.div({
    open: {
        opacity: 1,
        y: '0px',
        transition: {
            duration: 400,
        }
    },
    closed: {
        opacity: 0,
        y: '30px',
    }
});


export const PopFromNothing = posed.div({
    open: {
        scale: 1,
        y: "0px",
        transition: {
            duration: 300,
        }
    },
    closed: {
        scale: 0,
        y: "50vh",
        transition: {
            duration: 300,
        }
    }
});

export const Popout = posed.div({
    open: {
        x: '0px',
        delay: 50,
        transition: {
            duration: 350,
        }
    },
    closed: {
        x: '-230px',
        delay: 200,
        transition: {
            duration: 350,
        }
    },
});
export const SwapVisible = posed.div({
    open: {
        x: '0px',
        transition: {
            duration: 300,
        }
    },
    closed: {
        x: '-200px',
        transition: {
            duration: 300,
        }
    }
});

export const OpenCloseButton = posed.div(
    {
        open: {
            x: '170px',
            transition: {
                delay:50,
                duration: 300,
            }
        },
        closed: {
            x: '-200px',
            transition: {
                delay:200,
                duration: 300,
            }
        }
    }
);

export const Fade = posed.div({
    open: {
        opacity: 1,
        transition: {
            duration: 300,
        },
        delayChildren: 300
    },
    closed: {
        opacity: 0,
        transition: {
            duration: 300,
        },
    }
});
export const HideOnToggle = posed.div({
    open: {
        opacity: 1,
        x:'0px',
        transition: {
            delay: 200,
            duration: 300,
        },
        delayChildren: 300
    },
    closed: {
        opacity: 0,
        x:'250px',
        transition: {
            duration: 300,
        },
    }
})