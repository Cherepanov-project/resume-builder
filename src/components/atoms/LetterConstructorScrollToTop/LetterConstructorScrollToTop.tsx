import ScrollToTop from "react-scroll-up"
import classes from '@components/atoms/LetterConstructorScrollToTop/ScrollToTop.module.scss'

const LetterConstructorScrollToTop = () => {
  return (
    <ScrollToTop showUnder={160}>
      <div className={classes['scroll-to-top']}>
        <svg 
          width="20" 
          height="12" 
          viewBox="0 0 20 12" 
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes['scroll-to-top__arrow']}
        >
          <path d="M1.92005 11.17C1.82617 11.2647 1.69837 11.3179 1.56505 11.3179C1.43174 11.3179 1.30394 11.2647 1.21005 11.17L0.150054 10.11C0.0533766 10.0193 -0.00146484 9.89259 -0.00146484 9.76C-0.00146484 9.62741 0.0533766 9.50073 0.150054 9.41L9.34005 0.22C9.48057 0.0793075 9.67121 0.000175052 9.87005 0H10.1301C10.3289 0.000175052 10.5195 0.0793075 10.6601 0.22L19.8501 9.41C19.9467 9.50073 20.0016 9.62741 20.0016 9.76C20.0016 9.89259 19.9467 10.0193 19.8501 10.11L18.7901 11.17C18.6962 11.2647 18.5684 11.3179 18.4351 11.3179C18.3017 11.3179 18.1739 11.2647 18.0801 11.17L10.0001 3.09L1.92005 11.17Z"></path>
        </svg>
      </div>
    </ScrollToTop>
  )
}

export default LetterConstructorScrollToTop