interface IMSObj {
  plus: (prevActiveStep: number) => number;
  minus: (prevActiveStep: number) => number;
  reset: number;
}

const msObj: IMSObj = {
  plus: (prevActiveStep: number) => prevActiveStep + 1,
  minus: (prevActiveStep: number) => prevActiveStep - 1,
  reset: 0,
};

export default msObj;
