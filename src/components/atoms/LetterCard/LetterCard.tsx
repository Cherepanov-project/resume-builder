import classes from './LetterCard.module.scss'

interface LetterCardProps {
    icon: JSX.Element
    text: string
}
const LetterCard = ({ icon, text }: LetterCardProps) => {
    return (
        <div className={classes['letter-card']}>
            <div className={classes['letter-card__content']}>
                <div className={classes['letter-card__icon']}>
                    {icon}
                </div>
                <span className={classes['letter-card__text']}>
                    {text}
                </span>
            </div>
        </div>
    )
}

export default LetterCard