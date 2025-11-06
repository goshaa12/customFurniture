// Импорт всех иконок из @lucide/astro
import {
  CalendarCheck,
  CheckCircle,
  Clock,
  Target,
  Calculator,
  Phone,
  PartyPopper,
  Star,
  Heart,
  MessageCircleMore,
  FileText,
  Users,
  Lightbulb,
  Workflow,
  Truck,
  ShieldCheck,
  Percent,
  Calendar,
  Compass,
  Box,
  Settings,
  Zap,
  Layers,
  Building2,
  User,
  Hammer,
} from "@lucide/astro";

// Централизованный маппинг всех иконок
export const iconMap: Record<string, any> = {
  CalendarCheck,
  CheckCircle,
  Clock,
  Target,
  Calculator,
  Phone,
  PartyPopper,
  Star,
  Heart,
  MessageCircleMore,
  FileText,
  Users,
  Lightbulb,
  Workflow,
  Truck,
  ShieldCheck,
  Percent,
  Calendar,
  Compass,
  Box,
  Settings,
  Zap,
  Layers,
  Building2,
  User,
  Hammer,
};

// Типы данных для Hero компонента

export interface BenefitData {
  icon: string; // название иконки из @lucide/astro
  iconClass?: string;
  bgClass?: string;
  text: string;
}

export interface HeroData {
  title: string;
  highlight?: string;
  subtitle: string;
  benefits: BenefitData[];
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  secondaryButtonVariant?: string;
  thirdTitleText?: string;
}

// Типы данных для Services компонента

export interface ServiceItem {
  name: string;
}

export interface ServicesData {
  title: string;
  subtitle?: string;
  items: ServiceItem[];
}

// Типы данных для WhyUs компонента

export interface AdvantageItem {
  title: string;
  text: string;
}

export interface ComparisonTableRow {
  criterion: string;
  ourCompany: string;
  otherCompanies: string;
}

export interface WhyUsData {
  title: string;
  subtitle?: string;
  advantages: AdvantageItem[];
  comparisonTable?: {
    header: {
      criterion: string;
      ourCompany: string;
      otherCompanies: string;
    };
    rows: ComparisonTableRow[];
  };
  ctaButton: {
    text: string;
    href: string;
  };
}

// Типы данных для HowItWorks компонента

export interface WorkStep {
  step: string;
  title: string;
  text: string;
  icon: string; // название иконки из @lucide/astro
  bg: string; // градиент для фона (например, "from-rose-400 to-pink-500")
}

export interface HowItWorksData {
  title: string;
  subtitle?: string;
  steps: WorkStep[];
  gridCols?: number; // количество колонок в grid (по умолчанию 3)
  ctaButton: {
    text: string;
    href: string;
  };
}

// Типы данных для Promotions компонента

export interface PromotionItem {
  icon: string; // название иконки из @lucide/astro
  gradient: string; // градиент для фона (например, "from-rose-400 to-pink-500")
  text: string;
  highlightText?: string; // выделенный текст (например, "скидка 10%")
  highlightColor?: string; // цвет выделения (например, "text-rose-600")
}

export interface PromotionsData {
  title: string;
  subtitle?: string;
  items: PromotionItem[];
  additionalText?: string;
  ctaButton: {
    text: string;
    href: string;
  };
}

// Типы данных для WhatImportant компонента

export interface ImportantItem {
  title: string;
  text: string;
  icon: string; // название иконки из @lucide/astro
  bg: string; // градиент для фона (например, "from-rose-400 to-pink-500")
}

export interface WhatImportantData {
  title: string;
  subtitle?: string;
  items: ImportantItem[];
}

// Типы данных для CustomFurniture компонента

export interface CustomFurnitureSection {
  title: string;
  items: string[];
}

export interface CustomFurnitureData {
  title: string;
  subtitle: string;
  sections: CustomFurnitureSection[];
}

// Типы данных для Companys компонента

export interface CompanyBrand {
  name: string;
  logo: string;
  alt: string;
}

export interface CompanysData {
  title: string;
  subtitle: string;
  brands: CompanyBrand[];
}

// Типы данных для AboutUs компонента

export interface AboutUsSection {
  title: string;
  content: string;
  icon: string; // название иконки из @lucide/astro
}

export interface AboutUsData {
  title: string;
  sections: AboutUsSection[];
}

// Типы данных для Reviews компонента

export interface Review {
  author: string;
  text: string;
  rating?: number; // по умолчанию 5
  borderColor?: string; // цвет границы слева
  avatarColor?: string; // цвет аватара
  avatarInitial?: string; // первая буква имени для аватара
}

export interface ReviewsData {
  title: string;
  subtitle?: string;
  reviews: Review[];
}

// Типы данных для Calculator компонента

export interface CalculatorOption {
  value: string;
  label: string;
}

export interface CalculatorRadioOption {
  value: string;
  label: string;
}

export interface CalculatorCheckboxOption {
  value: string;
  label: string;
}

export interface CalculatorData {
  title: string;
  subtitle: string;
  furnitureTypes: CalculatorOption[];
  materials: CalculatorOption[];
  hardwareOptions: CalculatorRadioOption[];
  configurations: CalculatorOption[];
  additionalOptions: CalculatorCheckboxOption[];
  deadlineOptions: CalculatorOption[];
  buttonText: string;
  additionalText?: string;
  contactFields: {
    name: string;
    phone: string;
    email?: string;
    emailLabel?: string;
  };
  dimensionsLabels?: {
    length?: string;
    height?: string;
    depth?: string;
  };
}

// Типы данных для ReUsableTable компонента

export interface ReUsableTableColumn {
  key: string;
  header: string;
  isButton?: boolean; // если true, то значение будет отображаться как кнопка
  linkKey?: string; // ключ для ссылки в строке данных
}

export interface ReUsableTableRow {
  [key: string]: string | number | undefined; // динамические ключи для колонок
}

export interface ReUsableTableData {
  title: string;
  subtitle?: string;
  table: {
    columns: ReUsableTableColumn[];
    rows: ReUsableTableRow[];
  };
  additionalText?: string;
  ctaButton?: {
    text: string;
    href: string;
  };
}

// Константы для Hero компонента (главная страница)
export const heroData: HeroData = {
  title: "Изготовление мебели на заказ в Алматы —",
  highlight: "от эскиза до установки за 7 дней",
  subtitle: "Узнайте точную стоимость прямо сейчас — это бесплатно!",
  benefits: [
    {
      icon: "CalendarCheck",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Замер и расчёт — в день заявки",
    },
    {
      icon: "CheckCircle",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Гарантия 3 года на всю мебель",
    },
    {
      icon: "Clock",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Доставка и установка — бесплатно",
    },
    {
      icon: "Target",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Любые материалы: ЛДСП, МДФ, массив",
    },
  ],
  buttonText: "Рассчитать стоимость мебели",
  buttonHref: "#calculator",
  imageSrc: "/images/home/hero-img.webp",
};

// Константы для Services компонента
export const servicesData: ServicesData = {
  title: "Преимущества сотрудничества с нами",
  subtitle: "Наши клиенты выбирают нас, потому что мы предлагаем:",
  items: [
    { name: "Гарантийное обслуживание мебели и фурнитуры сроком до 3 лет." },
    { name: "Бесплатный выезд на замер и разработка 3D-дизайна." },
    { name: "Возможность оформить беспроцентную рассрочку на срок до года." },
  ],
};

// Константы для WhyUs компонента
export const whyUsData: WhyUsData = {
  title: "Почему выбирают нас?",
  subtitle: "Мебель на заказ создаётся с учётом всех ваших потребностей. Она обеспечивает удобство использования и оптимальное хранение вещей. Такой подход экономит время и деньги, исключает лишние переделки. Мы изготавливаем мебель под любой бюджет в Алматы.",
  advantages: [
    {
      title: "Изготовление от 7 до 14 дней",
      text: "Мы запускаем производство сразу после замера и утверждения. Вы получаете готовую мебель без долгого ожидания.",
    },
    {
      title: "500+ реализованных проектов в Алматы",
      text: "Наши работы установлены в квартирах, домах и офисах по всему городу Алматы. Опыт подтверждён делом, не словами.",
    },
    {
      title: "Фиксируем цену в договоре",
      text: "Мы работаем без скрытых доплат. Итоговая сумма не меняется после утверждения и сметы.",
    },
    {
      title: "Гарантия на мебель 3 года",
      text: "Мы уверены в качестве материалов и сборки. При поломке или дефекте всё устраняем бесплатно.",
    },
    {
      title: "Бесплатный замер и 3D-дизайн за 1 день",
      text: "Вы видите, как всё будет выглядеть в вашем интерьере, до начала производства. Это исключает ошибки.",
    },
    {
      title: "Монтаж за пару часов без грязи и шума",
      text: "Сборка выполняется профессиональной бригадой. Используем пылесосы и защиту пола. После нас не остаётся мусора.",
    },
  ],
  ctaButton: {
    text: "Заказать мебель",
    href: "#calculator",
  },
};

// Константы для HowItWorks компонента
export const howItWorksData: HowItWorksData = {
  title: "Как мы работаем?",
  subtitle: "Процесс изготовления вашей мебели на заказ максимально прозрачен и удобен. Все этапы работы — от первого звонка до финальной установки — занимают минимум времени.",
  gridCols: 3,
  steps: [
    {
      step: "1",
      title: "Обращение и консультация",
      text: "Вы можете оставить запрос через форму на сайте или позвонить нам напрямую. Наш менеджер свяжется с вами, чтобы узнать о ваших пожеланиях, типе нужной мебели. Также мы согласуем удобное время для визита замерщика в Алматы.",
      icon: "FileText",
      bg: "from-rose-400 to-pink-500",
    },
    {
      step: "2",
      title: "Бесплатный визит и точный расчёт",
      text: "Наш эксперт прибудет в согласованное время. С собой он привезет каталоги материалов и образцы фурнитуры. Специалист выполнит все необходимые замеры с высокой точностью. Он также поможет вам выбрать оптимальные решения для вашего интерьера. На месте будет озвучена предварительная стоимость вашего проекта.",
      icon: "Users",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      step: "3",
      title: "Разработка дизайн-проекта и сметы",
      text: "Дизайнер создаёт 3D-визуализацию будущей мебели. Вы можете увидеть результат заранее. После согласования макета фиксируется окончательная цена и сроки в договоре.",
      icon: "Lightbulb",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      step: "4",
      title: "Производство мебели",
      text: "Мебель изготавливается на нашем собственном производстве в Алматы. Используется современное оборудование. Каждый этап, от распила до покраски и сборки, проходит строгий контроль качества.",
      icon: "Workflow",
      bg: "from-green-400 to-teal-500",
    },
    {
      step: "5",
      title: "Доставка и установка",
      text: "Мы доставляем по Алматы и области. Аккуратно поднимаем и устанавливаем в тот же день. Монтаж проходит без шума, пыли и лишних хлопот. После себя мы убираем весь мусор.",
      icon: "Truck",
      bg: "from-orange-400 to-red-500",
    },
    {
      step: "6",
      title: "Гарантия и постсервис",
      text: "После установки вы получаете гарантию на мебель и фурнитуру до 3 лет. При необходимости наши мастера оперативно приедут для регулировки или мелкого ремонта.",
      icon: "ShieldCheck",
      bg: "from-pink-400 to-rose-500",
    },
  ],
  ctaButton: {
    text: "Оставить заявку",
    href: "#calculator",
  },
};

// Константы для Promotions компонента
export const promotionsData: PromotionsData = {
  title: "Акция — скидка до 15% на кухни на заказ!",
  subtitle: "Прямо сейчас действует специальное предложение на кухни на заказ:",
  items: [
    {
      icon: "Percent",
      gradient: "from-rose-400 to-pink-500",
      text: "При заказе кухни от 3 погонных метров вы получаете",
      highlightText: "скидка 10%",
      highlightColor: "text-rose-600",
    },
    {
      icon: "Percent",
      gradient: "from-purple-400 to-indigo-500",
      text: "При заказе от 5 метров",
      highlightText: "скидка 15%",
      highlightColor: "text-indigo-600",
    },
    {
      icon: "Calendar",
      gradient: "from-green-400 to-emerald-500",
      text: "выезд замерщика в день обращения.",
      highlightText: "Бонус:",
      highlightColor: "text-green-600",
    },
  ],
  additionalText: "Акция распространяется на все материалы: ЛДСП, МДФ, шпон и массив. Количество заказов по акции ограничено!\n\nМечтаете о кухне, где всё продумано до мелочей?\n\nМы создадим проект, идеально подходящий под ваш интерьер и образ жизни.",
  ctaButton: {
    text: "Заказать кухню",
    href: "#calculator",
  },
};

// Константы для WhatImportant компонента
export const whatImportantData: WhatImportantData = {
  title: "Что влияет на стоимость мебели?",
  subtitle: "Цена формируется индивидуально. Она зависит от материалов, комплектации и сложности проекта. Ниже указаны основные факторы, которые влияют на итоговую стоимость.",
  items: [
    {
      title: "1. Материалы и фурнитура",
      text: `Выбор между ЛДСП, МДФ, шпоном или массивом дерева сильно влияет на цену. Фурнитура от Blum, Hettich или Boyard повышает комфорт и срок службы мебели. Это немного увеличивает стоимость.`,
      icon: "Box",
      bg: "from-rose-400 to-pink-500",
    },
    {
      title: "2. Сложность конструкции и планировка",
      text: `Прямая кухня или шкаф будет стоить дешевле. Угловая или П-образная обойдётся дороже. К трудоёмким и дорогим вариантам относятся радиусные фасады, встроенные элементы, скрытые ящики.`,
      icon: "Settings",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      title: "3. Наличие встроенной техники и подсветки",
      text: `Интеграция техники требует точных расчётов. Также нужны дополнительные комплектующие. Подсветка и электрика увеличивают стоимость. Но они добавляют комфорта и эстетики.`,
      icon: "Zap",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      title: "4. Дизайн и габариты помещения",
      text: `Индивидуальный дизайн-проект требует больше времени и материалов. Сюда входят 3D-визуализация мебели, нестандартная геометрия или сложный декор. Большие помещения подразумевают больше мебели.`,
      icon: "Layers",
      bg: "from-green-400 to-teal-500",
    },
  ],
};

// Константы для ReUsableTable компонента
export const reUsableTableData: ReUsableTableData = {
  title: "Изготавливаем любую мебель под заказ",
  subtitle: "Мы производим полный спектр мебели под заказ, учитывая размеры, функционал и дизайн вашего интерьера.",
  table: {
    columns: [
      { key: "category", header: "Категория" },
      { key: "description", header: "Описание" },
      { key: "button", header: "Кнопка и ссылка", isButton: true, linkKey: "link" },
    ],
    rows: [
      {
        category: "Кухни на заказ",
        description: "Мебель по индивидуальным размерам — функциональная, удобная и долговечная.",
        button: "Подробнее",
        link: "/kitchen",
      },
      {
        category: "Мебель для гостиной",
        description: "Современная мебель для комфортного отдыха и хранения вещей.",
        button: "Подробнее",
        link: "/2-2",
      },
      {
        category: "Мебель для спальни",
        description: "Практичная мебель для сна и уюта: кровати, шкафы, прикроватные тумбы.",
        button: "Подробнее",
        link: "/bedroomBeds",
      },
      {
        category: "Мебель для детской",
        description: "Безопасная мебель из прочных материалов, рассчитанная на ежедневное использование.",
        button: "Подробнее",
        link: "/childrenFurniture",
      },
      {
        category: "Мебель для ванной комнаты",
        description: "Влагостойкая мебель с надёжной фурнитурой и эргономичной компоновкой.",
        button: "Подробнее",
        link: "/2-5",
      },
      {
        category: "Мягкая мебель",
        description: "Удобные диваны и кресла — основа комфорта и уюта вашего дома.",
        button: "Подробнее",
        link: "/softFurniture",
      },
      {
        category: "Шкафы",
        description: "Корпусная мебель для хранения одежды и аксессуаров, оптимально использующая пространство.",
        button: "Подробнее",
        link: "/HingedWardrobes",
      },
      {
        category: "Гардеробные системы",
        description: "Мебель для организации гардероба: полки, штанги, выдвижные модули.",
        button: "Подробнее",
        link: "/2-8",
      },
      {
        category: "Для прихожей",
        description: "Компактная мебель с зеркалом и обувницей для аккуратного входного пространства.",
        button: "Подробнее",
        link: "/2-9",
      },
      {
        category: "Офисная мебель",
        description: "Эргономичная мебель для рабочих мест и зон переговоров.",
        button: "Подробнее",
        link: "/2-10",
      },
    ],
  },
};
 
export const reUsableTableData2: ReUsableTableData = {
  title: "Преимущества, которые чувствуется с первого заказа",
  subtitle: "Мы понимаем, что при заказе мебели важны сроки, качество и честная цена.\n\nПоэтому вы сразу видите, как мы работаем — без задержек, переплат и лишних обещаний.",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "ourCompany", header: "Наша компания" },
      { key: "otherCompanies", header: "Другие компании" },
    ],
    rows: [
      {
        criterion: "Срок изготовления",
        ourCompany: "От 7 до 14 дней",
        otherCompanies: "От 3 до 6 недель",
      },
      {
        criterion: "Предоплата",
        ourCompany: "Всего 10% перед запуском производства",
        otherCompanies: "50–70% до начала работы",
      },
      {
        criterion: "Замер и дизайн",
        ourCompany: "Бесплатно, в течение 1 дня",
        otherCompanies: "Платно или только после предоплаты",
      },
      {
        criterion: "Гарантия",
        ourCompany: "3 года на все изделия и фурнитуру",
        otherCompanies: "6–12 месяцев, часто без документального подтверждения",
      },
      {
        criterion: "Фурнитура и материалы",
        ourCompany: "Blum, Hettich, Egger — премиум-класс",
        otherCompanies: "Дешёвые аналоги без сертификатов",
      },
      {
        criterion: "Собственное производство",
        ourCompany: "Да, в Алматы",
        otherCompanies: "Нет, заказы передаются подрядчикам",
      },
      {
        criterion: "Контроль сроков и качества",
        ourCompany: "Каждый этап фиксируется и подтверждается фото",
        otherCompanies: "Контроль отсутствует, частые задержки",
      },
      {
        criterion: "Отзывы и портфолио",
        ourCompany: "Более 500 реализованных проектов в Алматы",
        otherCompanies: "Мало реальных примеров и отзывов",
      },
    ],
  },
};
 
export const reUsableTableData3: ReUsableTableData = {
  title: "Цены",
  subtitle: "Мы предлагаем прозрачное ценообразование на изготовление мебели на заказ. Ниже представлен ориентировочный прайс-лист. Точная стоимость рассчитывается после замера и утверждения проекта.",
  table: {
    columns: [
      { key: "service", header: "Услуга" },
      { key: "price", header: "Стоимость (от) тенге за погонный метр" },
    ],
    rows: [
      {
        service: "Кухня из ЛДСП",
        price: "180 000",
      },
      {
        service: "Шкаф-купе",
        price: "120 000",
      },
      {
        service: "Для гостиной (секция)",
        price: "250 000",
      },
      {
        service: "Кровать с мягким изголовьем",
        price: "150 000",
      },
      {
        service: "Гардеробная система",
        price: "80 000",
      },
    ],
  },
  additionalText: "Узнайте точную стоимость и дизайн вашей мебели уже сегодня.",
  ctaButton: {
    text: "Получить бесплатный замер",
    href: "#calculator",
  },
};

// Константы для CustomFurniture компонента
export const customFurnitureData: CustomFurnitureData = {
  title: "Изготовление мебели на заказ: когда всё идеально под вас",
  subtitle: "Каждый дом — со своим характером, привычками и пространством. Поэтому стандартные решения часто не подходят: то цвет не тот, то размеры «не садятся». Изготовление мебели на заказ — это способ получить именно то, что вам нужно, без компромиссов в удобстве и красоте.",
  sections: [
    {
      title: "Мебель по индивидуальному заказу: ваш стиль в каждой детали",
      items: [
        "Мы создаём мебель, которая подстраивается под вас: размеры, материалы, фурнитура и оттенки — всё выбираете вы.",
        "Команда дизайнеров и мастеров прорабатывает проект до мелочей: от чернового эскиза до финишной установки.",
        "Результат — гармоничное пространство, где каждая деталь продумана для комфорта.",
      ],
    },
    {
      title: "Заказ мебели по чертежам: воплотим любой проект",
      items: [
        "Если у вас уже есть идеи или готовые схемы, мы реализуем их точно по чертежам.",
        "Производство оснащено современным оборудованием, поэтому даже сложные формы и нестандартные конструкции выполняются с точностью до миллиметра.",
        "Так вы получаете мебель, которая идеально соответствует вашим планам и ожиданиям.",
      ],
    },
    {
      title: "Заказ нестандартной мебели: решения без ограничений",
      items: [
        "Сложная планировка, ниша, скос или нестандартная высота? Мы не ищем оправдания — мы ищем решение.",
        "Заказ нестандартной мебели позволяет использовать каждый сантиметр пространства: встроенные шкафы, кухни под углом, оригинальные гардеробные системы.",
        "Функционально, аккуратно и без «мёртвых зон».",
      ],
    },
  ],
};

// Константы для Calculator компонента
export const calculatorData: CalculatorData = {
  title: "Калькулятор расчёта стоимости мебели",
  subtitle: "Рассчитайте примерную стоимость мебели прямо на сайте.",
  furnitureTypes: [
    { value: "kitchen", label: "Кухня" },
    { value: "wardrobe", label: "Шкаф или шкаф-купе" },
    { value: "dressing", label: "Гардеробная зона" },
    { value: "hallway", label: "Прихожая" },
    { value: "children", label: "Детская" },
    { value: "office", label: "Офисная мебель" },
    { value: "other", label: "Другое" },
  ],
  materials: [
    { value: "ldsp", label: "ЛДСП (бюджетный вариант)" },
    { value: "mdf", label: "МДФ (краска / плёнка / шпон)" },
    { value: "solid", label: "Массив дерева (премиум-класс)" },
    { value: "combined", label: "Комбинированное решение" },
  ],
  hardwareOptions: [
    { value: "basic", label: "Базовая" },
    { value: "medium", label: "Средний уровень (Blum, Hettich, Boyard)" },
    { value: "premium", label: "Премиальная (Grass, Hafele, Blumotion)" },
  ],
  configurations: [
    { value: "straight", label: "Прямая" },
    { value: "corner", label: "Угловая (Г-образная)" },
    { value: "u-shaped", label: "П-образная" },
    { value: "custom", label: "Индивидуальный проект" },
  ],
  additionalOptions: [
    { value: "lighting", label: "Подсветка" },
    { value: "appliances", label: "Встроенная техника" },
    { value: "soft-close", label: "Механизмы плавного закрытия" },
    { value: "glass", label: "Стеклянные фасады или витрины" },
    { value: "designer", label: "Выезд дизайнера" },
  ],
  deadlineOptions: [
    { value: "standard", label: "Стандартный (10–15 дней)" },
    { value: "urgent", label: "Ускоренный (5–7 дней)" },
  ],
  buttonText: "Рассчитать за 1 минуту",
  contactFields: {
    name: "Имя",
    phone: "Телефон",
    email: "Email или Telegram",
    emailLabel: "(по желанию) Email или Telegram — чтобы отправить готовый результат и уточнить детали",
  },
};

// Константы для Companys компонента
export const companysData: CompanysData = {
  title: "Материалы и фурнитура",
  subtitle: "Мы используем надёжную фурнитуру от ведущих мировых производителей — она работает безотказно и продлевает срок службы мебели на десятилетия.",
  brands: [
    { name: 'Blum', logo: '/images/home/blum.webp', alt: 'Blum logo' },
    { name: 'Hettich', logo: '/images/home/hettich.webp', alt: 'Hettich logo' },
    { name: 'Egger', logo: '/images/home/eegger.webp', alt: 'Egger logo' },
    { name: 'Kronospan', logo: '/images/home/kronospan.webp', alt: 'Kronospan logo' },
  ],
};

// Константы для AboutUs компонента
export const aboutUsData: AboutUsData = {
  title: "О нас",
  sections: [
    {
      title: "Кто мы",
      content: "Мы — производственная компания по изготовлению мебели на заказ в Алматы с 2012 года. За это время наши мастера создали более 500 интерьеров для квартир, домов и офисов.",
      icon: "Building2",
    },
    {
      title: "Наши ценности",
      content: "Прямые поставки — без посредников, цена ниже на 15–20%.\n\nКонтроль качества на каждом этапе — от замера до установки.\n\nСоблюдение сроков — мебель изготавливается от 10 дней.",
      icon: "Star",
    },
    {
      title: "Наши мастера",
      content: "Наш штат состоит из квалифицированных дизайнеров и профессиональных сборщиков. Каждый из них обладает опытом в мебельной сфере более пяти лет. Мы изготавливаем мебель, идеально вписывающуюся в ваше пространство. Мы обеспечиваем безупречную подгонку габаритов и оптимальный выбор всех комплектующих.",
      icon: "User",
    },
    {
      title: "Наш производственный цех",
      content: "Мы владеем собственным производством в городе Алматы. Цех оборудован современными станками и высокоточным оборудованием. Это позволяет нам создавать изделия с идеальной геометрией, что гарантирует их долговечность.",
      icon: "Hammer",
    },
  ],
};

// Константы для Reviews компонента
export const reviewsData: ReviewsData = {
  title: "Отзывы клиентов",
  reviews: [
    {
      author: "Алия В.",
      text: "«Заказывали кухонную мебель — всё прошло идеально. От замера до установки прошло 10 дней, как и обещали. Специалист учёл все детали и помог с выбором встроенной техники. Мебель установили аккуратно, без мусора и спешки. Цена осталась прежней, без \"сюрпризов\". Результатом довольны — кухня получилась как на визуализации!»",
      rating: 5,
      borderColor: "border-pink-400",
      avatarColor: "from-pink-100 to-rose-200",
      avatarInitial: "А",
    },
    {
      author: "Тимур Х.",
      text: "«Сделали всё точно и без суеты. Приехали вовремя, собрали аккуратно, учли каждую мелочь. Видно, что работают профессионалы.»",
      rating: 5,
      borderColor: "border-blue-400",
      avatarColor: "from-blue-100 to-cyan-200",
      avatarInitial: "Т",
    },
    {
      author: "Сания А.",
      text: "«Заказывали мебель для детской комнаты. Дизайнер предложила практичное и красивое решение — всё разместилось идеально. Стоимость справедливая, предоплата всего 10%. Мебель изготовили и установили за 12 дней. Ребёнок в восторге, а мы благодарны за внимательность и человеческое отношение!»",
      rating: 5,
      borderColor: "border-orange-400",
      avatarColor: "from-orange-100 to-yellow-200",
      avatarInitial: "С",
    },
  ],
};
 
