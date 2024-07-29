import { LetterConstructorPageSection, LetterConstructorPageGroup } from '../../components/molecules/LetterConstructorPageSection/LetterConstructorPageSection'
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

const LetterConstructorPage = () => {
  return (
    <main className={classes['main']}>
      <LetterConstructorPageSection
        subTitle="Конструктор писем"
        content="Создавайте красивые письма бесплатно без дизайнеров и верстальщиков."
        buttonText="Создать письмо"
        href="#"
        image={imageConstructor}
        imageAlt="конструктор писем"
        isHead
      />
      <LetterConstructorPageGroup
        title="Соберите HTML-макет письма из готовых блоков за 3 шага"
        arrayCards={[
          {
            subTitle: "1 ШАГ",
            content: "Создайте структуру рассылки с помощью готовых модулей (строк). Знания HTML не требуются",
            image: stepOne,
            imageAlt: "первый шаг" 
          },
          {
            subTitle: "2 ШАГ",
            content: "Добавьте текст, картинки, кнопки, разделители и другие элементы, перетащив их в нужные места макета.",
            image: stepTwo,
            imageAlt: "второй шаг" 
          },
          {
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
        href="#"
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
        href="#"
        image={realiseIdea}
        imageAlt="реализуйте смелые задумки"
      />
      <LetterConstructorPageGroup
        title="Создавайте красивые email для ПК и мобильных"
        arrayCards={[
          {
            subTitle: "500 000 бесплатных картинок",
            content: "Ищите нужные изображения на Unsplash, Pexels, Pixabay. Поиск встроен в конструктор.",
            image: freeImages,
            imageAlt: "500 000 бесплатных картинок" 
          },
          {
            subTitle: "Адаптивный дизайн",
            content: "Создавайте адаптивные письма, которые будет удобно читать на мобильных устройствах. Редактор позволяет настраивать отображение блоков для смартфонов.",
            image: adaptiveDesign,
            imageAlt: "адаптивный дизайн" 
          },
          {
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
            subTitle: "48 готовых интеграций",
            content: "Собираем информацию о клиентах из CRM и CMS, чтобы вы могли реагировать на каждое их действие.",
            image: completeIntegrations,
            imageAlt: "48 готовых интеграций" 
          },
          {
            subTitle: "Безопасность",
            content: "Размещаем ваши базы в сертифицированных дата-центрах, чтобы только вы имели к ним доступ.",
            image: security,
            imageAlt: "безопасность" 
          },
          {
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
            subTitle: "Конструктор писем Unisender: 10 фишек, которые упростят email-вёрстку",
            image: tenFeatures,
            imageAlt: "10 фишек, которые упростят email-вёрстку", 
            buttonText: "Узнать подробности",
            href: "#"
          },
          {
            subTitle: "Дизайн и верстка. Подборка статей",
            image: design,
            imageAlt: "дизайн и верстка",
            buttonText: "Узнать подробности",
            href: "#" 
          },
          {
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
    </main>
  )
}

export default LetterConstructorPage