import LetterBuilderLeftSide from '@/components/organisms/LetterBuilderLeftSide';
import LetterConstructorWorkspace from '../../components/organisms/LetterConstructorWorkspace/LetterConstructorWorkspace';
import LetterBuilderHeader from '@/components/molecules/LetterBuilderHeader';

import classes from './LetterBuilderPage.module.scss'

const LetterBuilderPage = () => {
  return (
    <>
      <LetterBuilderHeader />
      <section className={classes['main']}>
        <LetterBuilderLeftSide />
        <LetterConstructorWorkspace />
      </section>
    </>
  )
}

export default LetterBuilderPage