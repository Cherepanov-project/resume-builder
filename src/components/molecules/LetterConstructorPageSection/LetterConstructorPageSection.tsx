import { Link } from 'react-router-dom' 
import classes from './LetterConstructorPageSection.module.scss'

interface LetterConstructorPageSectionProps {
  title?: string;
  subTitle: string;
  content: string;
  buttonText?: string;
  href?: string;
  image: string;
  imageAlt: string;
  isHead?: boolean;
}

export const LetterConstructorPageSection: React.FC<LetterConstructorPageSectionProps> = ({
  title,
  subTitle,
  content,
  buttonText,
  href,
  image,
  imageAlt,
  isHead = false
}) => {

  const buttonElement: JSX.Element|null = buttonText && href ? <Link className={classes['button']} to={href}>{buttonText}</Link> : null
  const titleElement: JSX.Element|null = title && !isHead ? <h2 className={classes['title']}>{title}</h2> : null
  const subTitleElement: JSX.Element|null = !isHead ? 
    <h3 className={classes['sub-title']}>{subTitle}</h3> :
    <h1 className={classes['title'] + ' ' + classes['title--head']}>{subTitle}</h1> 

  let containerStyle = classes['container']
  containerStyle = isHead ? containerStyle + ' ' + classes['container--head'] : containerStyle

  let wrapperImageStyle = classes['wrapper-image']
  wrapperImageStyle = isHead ? wrapperImageStyle + ' ' + classes['wrapper-image--head'] : wrapperImageStyle

  let wrapperTextStyle = classes['wrapper-text']
  wrapperTextStyle = isHead ? wrapperTextStyle + ' ' + classes['wrapper-text--head'] : wrapperTextStyle

  let sectionWrapperStyle = classes['section-wrapper']
  sectionWrapperStyle = isHead ? sectionWrapperStyle + ' ' + classes['section-wrapper--head'] : sectionWrapperStyle

  let cardStyle = classes['card'] + ' ' + classes['card--large']
  cardStyle = isHead ? cardStyle + ' ' + classes['card--head'] : cardStyle

  return (
    <section className={containerStyle}>
      {titleElement}
      <div className={cardStyle}>
        <div className={sectionWrapperStyle}>
          <div className={wrapperTextStyle}>
            {subTitleElement}
            <p className={classes['description']}>{content}</p>
            {buttonElement}
          </div>
        </div>
        <div className={wrapperImageStyle}>
          <img className={classes['image']} src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  )
}

type card = {
  subTitle: string;
  content?: string;
  buttonText?: string;
  href?: string;
  image?: string;
  imageAlt?: string;
}

interface LetterConstructorPageGroupProps {
  title: string;
  arrayCards: Array<card>;
  isBorder: boolean;
  isBigPicture: boolean;
}

export const LetterConstructorPageGroup: React.FC<LetterConstructorPageGroupProps> = ({
  title,
  arrayCards,
  isBorder,
  isBigPicture
}) => {
  const arrayCardElements: JSX.Element[] = arrayCards.map((card) => {
    const buttonElement: JSX.Element|null = card.buttonText && card.href ? <Link className={classes['link']} to={card.href}>{card.buttonText}</Link> : null
    const imageElement: JSX.Element|null = card.image && card.imageAlt ? <img className={classes['group-image']} src={card.image} alt={card.imageAlt} /> : null

    let itemStyle = classes['item']
    itemStyle = isBorder ? itemStyle + ' ' + classes['item--border'] : itemStyle

    itemStyle = isBigPicture ? itemStyle + ' ' + classes['item--big'] : itemStyle

    let groupWrapperStyle = classes['group-wrapper']
    groupWrapperStyle = isBorder ? groupWrapperStyle + ' ' + classes['group-wrapper--border'] : groupWrapperStyle

    let groupWrapperImageStyle = classes['group-wrapper-image']
    groupWrapperImageStyle = isBorder ? groupWrapperImageStyle + ' ' + classes['group-wrapper-image--border'] : groupWrapperImageStyle

    groupWrapperImageStyle = isBigPicture ? groupWrapperImageStyle + ' ' + classes['group-wrapper-image--big'] : groupWrapperImageStyle
    
    let groupDescriptionStyle = classes['group-description']
    groupDescriptionStyle = isBorder ? groupDescriptionStyle + ' ' + classes['group-description--border'] : groupDescriptionStyle


    return (
      <div className={groupWrapperStyle}>
        <div className={itemStyle}>
          <div className={groupWrapperImageStyle}>
            {imageElement}
          </div>
          <div className={classes['group-wrapper-description']}>
            <h3 className={classes['group-sub-title']}>{card.subTitle}</h3>
            <p className={groupDescriptionStyle}>{card.content}</p>
            {buttonElement}
          </div>
        </div>
      </div>
    )
  })

  return (
    <section className={classes['container']}>
      <h2 className={classes['title']}>{title}</h2>
      <div className={classes['card']}>
        {arrayCardElements}
      </div>
    </section>
  )
}
