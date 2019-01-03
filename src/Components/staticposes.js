import posed from 'react-pose';

export const StaggerRemaining = posed.div({
    open:{
      staggerChildren: 50,
      delayChildren: 750
    }
  });
  export const StaggerChildren = posed.div({
    open:{
      staggerChildren: 250,
      delayChildren: 100
    }
  });
  export const LoadFade = posed.div({
    open: {
      opacity:1,
      y:'0px',
      transition:{
        duration:400,
      }
    },
    closed:{
      opacity:0,
      y:'30px',
    }
  });