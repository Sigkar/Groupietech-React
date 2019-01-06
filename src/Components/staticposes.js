import posed from 'react-pose';

export const StaggerRemaining = posed.div({
    open: {
        staggerChildren: 50,
        delayChildren: 750
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
        delay: 50,
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
            x: '150px',
            transition: {
                delay:150,
                duration: 300,
            }
        },
        closed: {
            x: '-200px',
            transition: {
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
            duration: 50,
        },
    }
});