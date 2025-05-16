import letterConstructor from '@assets/images/letterConstructorPage/konstruktor-pisem.jpg'
import stepOne from '@assets/images/letterConstructorPage/frame.svg'
import stepTwo from '@assets/images/letterConstructorPage/2-shag.svg'
import stepThree from '@assets/images/letterConstructorPage/3-shag.svg'
import tryYourSelf from '@assets/images/letterConstructorPage/poprobuite-sami.png'
import useOwnBlocks from '@assets/images/letterConstructorPage/ispolzuyte-svoi-bloki.png'
import saveParts from '@assets/images/letterConstructorPage/sohranyayte-lyubye-chasti-email-kak-shablony.png'
import addVideo from '@assets/images/letterConstructorPage/dobavte-video-i-animaciyu.png'
import makeInterractive from '@assets/images/letterConstructorPage/sdelayte-pismo-interaktivnym.png'
import configVidjets from '@assets/images/letterConstructorPage/nastroyte-vidzhety-socsetey2.png'
import realiseIdea from '@assets/images/letterConstructorPage/realizuyte-smelye-zadumki.png'
import freeImage from '@assets/images/letterConstructorPage/500-000-besplatnyh-kartinok.svg'
import adaptiveDesign from '@assets/images/letterConstructorPage/adaptivnyy-dizayn.svg'
import preview from '@assets/images/letterConstructorPage/predvaritelnyy-prosmotr.svg'
import complete from '@assets/images/letterConstructorPage/48-gotovyh-integraciy.svg'
import secure from '@assets/images/letterConstructorPage/bezopasnost.svg'
import support from '@assets/images/letterConstructorPage/tehpodderzhka.svg'
import features from '@assets/images/letterConstructorPage/group-3073.png'
import design from '@assets/images/letterConstructorPage/group-3074.png'
import makeBeutiful from '@assets/images/letterConstructorPage/group-3075.png'
import makeEasy from '@assets/images/letterConstructorPage/delat-krasivye-pisma-s-unisender-prosto-i-bystro-ubedites-sami.png'

const LetterConstructorPageContent = [
  {
    id: 1,
    title: "Конструктор писем",
    content: "Создавайте красивые письма бесплатно без дизайнеров и верстальщиков.",
    buttonText: "Создать письмо",
    href: "#",
    image: letterConstructor,
    imageAlt: "конструктор писем",
    isGroup: false,
  },
  {
    id: 2,
    title: "Соберите HTML-макет письма из готовых блоков за 3 шага",
    arrayCards: [
      {
        id: 1,
        subTitle: "1 ШАГ",
        content: "Создайте структуру рассылки с помощью готовых модулей (строк). Знания HTML не требуются",
        image: stepOne,
        imageAlt: "первый шаг",
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
    ],
    isBorder: false,
    isBigPicture: false,
    isGroup: true,
  },
  { 
    id: 3,
    subTitle: "Попробуйте сами",
    content: "Проверьте, насколько удобно создавать рассылки в конструкторе Unisender. Добавляйте блоки, создавайте разделы, загружайте контент.",
    image: tryYourSelf,
    imageAlt: "попробуйте сами",
    isGroup: false,
  },
  { 
    id: 4,
    title: "Создайте письмо еще быстрее",
    subTitle: "Используйте готовые шаблоны писем",
    content: "Конструктор писем дополняют 100 адаптивных шаблонов, заточенных под разные сферы бизнеса и инфоповоды. Чтобы отправить рассылку, откройте редактор и добавьте свой контент в понравившийся шаблон.",
    buttonText: "Посмотреть шаблоны",
    href: "#",
    image: useOwnBlocks,
    imageAlt: "используйте готовые шаблоны писем",
    isGroup: false,
  },
  {
    id: 5,
    subTitle: "Сохраняйте любые части email как шаблоны",
    content: "и быстро собирайте из них новые письма. Для начала сохраните футер и шапку, которые повторяются в каждой рассылке.",
    image: saveParts,
    imageAlt: "cохраняйте любые части email как шаблоны",
    isGroup: false,
  },
  { 
    id: 6,
    title: "Творите без ограничений",
    subTitle: "Добавьте видео и анимацию",
    content: "Оживите email за пару кликов. Добавьте превью видео из YouTube или Vimeo, а также стикеры и гифки из Giphy в любую часть макета.",
    image: addVideo,
    imageAlt: "добавьте видео и анимацию",
    isGroup: false,
  },
  {
    id: 7,
    subTitle: "Сделайте письмо интерактивным",
    content: "Взаимодействуйте с подписчиками через рассылки. В HTML-конструкторе писем есть готовые блоки, которые поддерживают технологию AMP.",
    image: makeInterractive,
    imageAlt: "cделайте письмо интерактивным",
    isGroup: false,
  },
  { 
    id: 8,
    subTitle: "Настройте виджеты соцсетей",
    content: "Добавьте кнопки всех нужных соцсетей за пару кликов. Придумайте хороший призыв, чтобы подписчики прямо из рассылки шли в Telegram, ВКонтакте, Twitter за новой порцией общения с вашим брендом.",
    image: configVidjets,
    imageAlt: "настройте виджеты соцсетей",
    isGroup: false,
  },
  {
    id: 9,
    subTitle: "Реализуйте смелые задумки",
    content: "Добавьте свой HTML-код в любую часть письма прямо в онлайн-конструкторе. Если нужно что-то исправить в коде, используйте html-редактор.",
    buttonText: "Начать",
    href: "#",
    image: realiseIdea,
    imageAlt: "реализуйте смелые задумки",
    isGroup: false,
  },
  {
    id: 10,
    title: "Создавайте красивые email для ПК и мобильных",
    arrayCards: [
      {
        id: 1,
        subTitle: "500 000 бесплатных картинок",
        content: "Ищите нужные изображения на Unsplash, Pexels, Pixabay. Поиск встроен в конструктор.",
        image: freeImage,
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
    ],
    isBorder: false,
    isBigPicture: false,
    isGroup: true,
  },
  {
    id: 11,
    title: "Запускайте рассылки, мы позаботимся об остальном",
    arrayCards: [
      {
        id: 1,
        subTitle: "48 готовых интеграций",
        content: "Собираем информацию о клиентах из CRM и CMS, чтобы вы могли реагировать на каждое их действие.",
        image: complete,
        imageAlt: "48 готовых интеграций" 
      },
      {
        id: 2,
        subTitle: "Безопасность",
        content: "Размещаем ваши базы в сертифицированных дата-центрах, чтобы только вы имели к ним доступ.",
        image: secure,
        imageAlt: "безопасность" 
      },
      {
        id: 3,
        subTitle: "Техподдержка",
        content: "Бесплатно помогаем с рассылками в любое время дня и ночи. Пишите, звоните, отправляйте письма.",
        image: support,
        imageAlt: "техподдержка" 
      }
    ],
    isBorder: true,
    isBigPicture: false,
    isGroup: true,
  },
  {
    id: 12,
    title: "Хотите научиться создавать красивые письма? — Читайте",
    arrayCards: [
      {
        id: 1,
        subTitle: "Конструктор писем Unisender: 10 фишек, которые упростят email-вёрстку",
        image: features,
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
        image: makeBeutiful,
        imageAlt: "как создать красивое письмо",
        buttonText: "Узнать подробности",
        href: "#" 
      }
    ],
    isBorder: false,
    isBigPicture: true,
    isGroup: true,
  },
  {
    id: 13,
    title: "Делать красивые письма просто и быстро. Убедитесь сами",
    content: "Для доступа к конструктору нужен только email",
    buttonText: "Создать письмо",
    href: "#",
    image: makeEasy,
    imageAlt: "конструктор писем",
    isGroup: false,
  }
]

export default LetterConstructorPageContent