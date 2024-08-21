import { LetterConstructorPageSection, LetterConstructorPageGroup } from '../../components/molecules/LetterConstructorPageSection/LetterConstructorPageSection'
import ScrollToTop from 'react-scroll-up'

import classes from './LetterConstructorPage.module.scss'

import imageConstructor from '../../assets/images/letterConstructorPage/konstruktor-pisem.jpg'
import tryYourSelf from '../../assets/images/letterConstructorPage/poprobuite-sami.png'
import useOwnBlocks from '../../assets/images/letterConstructorPage/ispolzuyte-svoi-bloki.png'
import saveSomeParts from '../../assets/images/letterConstructorPage/sohranyayte-lyubye-chasti-email-kak-shablony.png'
import addVideo from '../../assets/images/letterConstructorPage/dobavte-video-i-animaciyu.png'
import makeItInteractive from '../../assets/images/letterConstructorPage/sdelayte-pismo-interaktivnym.png'
import realiseIdea from '../../assets/images/letterConstructorPage/realizuyte-smelye-zadumki.png'
import configVidget from '../../assets/images/letterConstructorPage/nastroyte-vidzhety-socsetey2.png'
import stepOne from '../../assets/images/letterConstructorPage/frame.svg'
import stepTwo from '../../assets/images/letterConstructorPage/2-shag.svg'
import stepThree from '../../assets/images/letterConstructorPage/3-shag.svg'
import freeImages from '../../assets/images/letterConstructorPage/500-000-besplatnyh-kartinok.svg'
import adaptiveDesign from '../../assets/images/letterConstructorPage/adaptivnyy-dizayn.svg'
import preview from '../../assets/images/letterConstructorPage/predvaritelnyy-prosmotr.svg'
import completeIntegrations from '../../assets/images/letterConstructorPage/48-gotovyh-integraciy.svg'
import security from '../../assets/images/letterConstructorPage/bezopasnost.svg'
import support from '../../assets/images/letterConstructorPage/tehpodderzhka.svg'
import tenFeatures from '../../assets/images/letterConstructorPage/group-3073.png'
import design from '../../assets/images/letterConstructorPage/group-3074.png'
import howMakeBeutiful from '../../assets/images/letterConstructorPage/group-3075.png'
import imageFooter from '../../assets/images/letterConstructorPage/delat-krasivye-pisma-s-unisender-prosto-i-bystro-ubedites-sami.png'

const LetterConstructorPage = () => {
  return (
    <main className={classes['main']}>
      <LetterConstructorPageSection
        subTitle="Конструктор писем"
        content="Создавайте красивые письма бесплатно без дизайнеров и верстальщиков."
        buttonText="Создать письмо"
        href="/letter-builder-page"
        image={imageConstructor}
        imageAlt="конструктор писем"
        isHead
      />
      <LetterConstructorPageGroup
        title="Соберите HTML-макет письма из готовых блоков за 3 шага"
        arrayCards={[
          {
            id: 1,
            subTitle: "1 ШАГ",
            content: "Создайте структуру рассылки с помощью готовых модулей (строк). Знания HTML не требуются",
            image: stepOne,
            imageAlt: "первый шаг" 
          },
          {
            id: 2,
            subTitle: "2 ШАГ",
            content: "Добавьте текст, картинки, кнопки, разделители и другие элементы, перетащив их в нужные места макета.",
            image: stepTwo,
            imageAlt: "второй шаг" 
          },
          {
            id: 3,
            subTitle: "3 ШАГ",
            content: "Наполните макет вашим контентом. Напишите текст, загрузите изображения, добавьте нужные ссылки.",
            image: stepThree,
            imageAlt: "третий шаг" 
          }
        ]}
        isBorder={false}
        isBigPicture={false}
      />
      <LetterConstructorPageSection 
        subTitle="Попробуйте сами"
        content="Проверьте, насколько удобно создавать рассылки в конструкторе Unisender. Добавляйте блоки, создавайте разделы, загружайте контент."
        image={tryYourSelf}
        imageAlt="попробуйте сами"
      />
      <LetterConstructorPageSection 
        title="Создайте письмо еще быстрее"
        subTitle="Используйте готовые шаблоны писем"
        content="Конструктор писем дополняют 100 адаптивных шаблонов, заточенных под разные сферы бизнеса и инфоповоды. Чтобы отправить рассылку, откройте редактор и добавьте свой контент в понравившийся шаблон."
        buttonText="Посмотреть шаблоны"
        href="/letter-builder-page"
        image={useOwnBlocks}
        imageAlt="используйте готовые шаблоны писем"
      />
      <LetterConstructorPageSection 
        subTitle="Сохраняйте любые части email как шаблоны"
        content="и быстро собирайте из них новые письма. Для начала сохраните футер и шапку, которые повторяются в каждой рассылке."
        image={saveSomeParts}
        imageAlt="cохраняйте любые части email как шаблоны"
      />
      <LetterConstructorPageSection 
        title="Творите без ограничений"
        subTitle="Добавьте видео и анимацию"
        content="Оживите email за пару кликов. Добавьте превью видео из YouTube или Vimeo, а также стикеры и гифки из Giphy в любую часть макета."
        image={addVideo}
        imageAlt="добавьте видео и анимацию"
      />
      <LetterConstructorPageSection 
        subTitle="Сделайте письмо интерактивным"
        content="Взаимодействуйте с подписчиками через рассылки. В HTML-конструкторе писем есть готовые блоки, которые поддерживают технологию AMP."
        image={makeItInteractive}
        imageAlt="cделайте письмо интерактивным"
      />
      <LetterConstructorPageSection 
        subTitle="Настройте виджеты соцсетей"
        content="Добавьте кнопки всех нужных соцсетей за пару кликов. Придумайте хороший призыв, чтобы подписчики прямо из рассылки шли в Telegram, ВКонтакте, Twitter за новой порцией общения с вашим брендом."
        image={configVidget}
        imageAlt="настройте виджеты соцсетей"
      />
      <LetterConstructorPageSection 
        subTitle="Реализуйте смелые задумки"
        content="Добавьте свой HTML-код в любую часть письма прямо в онлайн-конструкторе. Если нужно что-то исправить в коде, используйте html-редактор."
        buttonText="Начать"
        href="/letter-builder-page"
        image={realiseIdea}
        imageAlt="реализуйте смелые задумки"
      />
      <LetterConstructorPageGroup
        title="Создавайте красивые email для ПК и мобильных"
        arrayCards={[
          {
            id: 1,
            subTitle: "500 000 бесплатных картинок",
            content: "Ищите нужные изображения на Unsplash, Pexels, Pixabay. Поиск встроен в конструктор.",
            image: freeImages,
            imageAlt: "500 000 бесплатных картинок" 
          },
          {
            id: 2,
            subTitle: "Адаптивный дизайн",
            content: "Создавайте адаптивные письма, которые будет удобно читать на мобильных устройствах. Редактор позволяет настраивать отображение блоков для смартфонов.",
            image: adaptiveDesign,
            imageAlt: "адаптивный дизайн" 
          },
          {
            id: 3,
            subTitle: "Предварительный просмотр",
            content: "Проверяйте, как выглядит созданный HTML-макет перед отправкой. Сервис имитирует экраны разных устройств.",
            image: preview,
            imageAlt: "предварительный просмотр" 
          }
        ]}
        isBorder={false}
        isBigPicture={false}
      />
      <LetterConstructorPageGroup
        title="Запускайте рассылки, мы позаботимся об остальном"
        arrayCards={[
          {
            id: 1,
            subTitle: "48 готовых интеграций",
            content: "Собираем информацию о клиентах из CRM и CMS, чтобы вы могли реагировать на каждое их действие.",
            image: completeIntegrations,
            imageAlt: "48 готовых интеграций" 
          },
          {
            id: 2,
            subTitle: "Безопасность",
            content: "Размещаем ваши базы в сертифицированных дата-центрах, чтобы только вы имели к ним доступ.",
            image: security,
            imageAlt: "безопасность" 
          },
          {
            id: 3,
            subTitle: "Техподдержка",
            content: "Бесплатно помогаем с рассылками в любое время дня и ночи. Пишите, звоните, отправляйте письма.",
            image: support,
            imageAlt: "техподдержка" 
          }
        ]}
        isBorder={true}
        isBigPicture={false}
      />
      <LetterConstructorPageGroup
        title="Хотите научиться создавать красивые письма? — Читайте"
        arrayCards={[
          {
            id: 1,
            subTitle: "Конструктор писем Unisender: 10 фишек, которые упростят email-вёрстку",
            image: tenFeatures,
            imageAlt: "10 фишек, которые упростят email-вёрстку", 
            buttonText: "Узнать подробности",
            href: "#"
          },
          {
            id: 2,
            subTitle: "Дизайн и верстка. Подборка статей",
            image: design,
            imageAlt: "дизайн и верстка",
            buttonText: "Узнать подробности",
            href: "#" 
          },
          {
            id: 3,
            subTitle: "Как создать красивое письмо",
            image: howMakeBeutiful,
            imageAlt: "как создать красивое письмо",
            buttonText: "Узнать подробности",
            href: "#" 
          }
        ]}
        isBorder={false}
        isBigPicture={true}
      />
      <LetterConstructorPageSection
        subTitle="Делать красивые письма просто и быстро. Убедитесь сами"
        content="Для доступа к конструктору нужен только email"
        buttonText="Создать письмо"
        href="/letter-builder-page"
        image={imageFooter}
        imageAlt="конструктор писем"
        isFooter={true}
      />
      <ScrollToTop showUnder={160}>
        <div className={classes['scroll-to-top']}>
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.92005 11.17C1.82617 11.2647 1.69837 11.3179 1.56505 11.3179C1.43174 11.3179 1.30394 11.2647 1.21005 11.17L0.150054 10.11C0.0533766 10.0193 -0.00146484 9.89259 -0.00146484 9.76C-0.00146484 9.62741 0.0533766 9.50073 0.150054 9.41L9.34005 0.22C9.48057 0.0793075 9.67121 0.000175052 9.87005 0H10.1301C10.3289 0.000175052 10.5195 0.0793075 10.6601 0.22L19.8501 9.41C19.9467 9.50073 20.0016 9.62741 20.0016 9.76C20.0016 9.89259 19.9467 10.0193 19.8501 10.11L18.7901 11.17C18.6962 11.2647 18.5684 11.3179 18.4351 11.3179C18.3017 11.3179 18.1739 11.2647 18.0801 11.17L10.0001 3.09L1.92005 11.17Z"></path>
          </svg>
        </div>
      </ScrollToTop>
    </main>
  )
}

export default LetterConstructorPage