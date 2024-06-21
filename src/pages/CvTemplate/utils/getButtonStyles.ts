interface Style {
  [key: string]: string;
}

const getButtonStyles = (index: number, activeStep: number): Style => {
  if (index === activeStep) {
    return {
      color: '#462174',
      backgroundColor: 'white',
      border: '2px solid #462174',
    };
  }

  if (index < activeStep) {
    return {
      color: 'white',
      backgroundColor: '#462174',
      border: '#462174',
    };
  }

  return {
    color: '#4E4D4D',
    backgroundColor: '#dddbdb',
    border: '2px solid #4E4D4D',
  };
};

export default getButtonStyles;
