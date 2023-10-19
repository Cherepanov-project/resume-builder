// type HeaderStyle = {
//     backgroundColor
// }

// type Header = {
//     isPresented: boolean;
//     headerStyle: []
// }

// interface IStyle {
//     header: Header;
// }

/* Описание объекта */

/*

** - обязательно

-- HEADER (boolean) --

Если HEADER есть, то 

Header может быть
    -- цветным 
    -- бесцветным (default)


В header размещается 
    - имя + фамилия ** 
    - наименование должности, на которую устраиваишься **

    - адрес 
    - контакты
        -- веб-сайт
        -- телефон
        -- почта

    - фотография
        -- квадртная
        -- круглая 

-- BODY --

Body может быть разделен
    - на одну колонку (default)
    - на 2 колонки 

    Если 2 колонки, то 
        -- колонка №1 - общая информация
            -- цветная 
            -- бесцветная (default)
        -- колонка №2 - конкретная информция 
            -- опыт работы
            -- образование 
            -- хобби
    

-- FOOTER --

пока не используется 

*/

// export const createTemplatePdfCV = (style: IStyle): React.ReactNode => {
//   return (
//     <div>
//       <p>jd</p>
//       <p>hd</p>
//       {style}
//     </div>
//   );
// };
