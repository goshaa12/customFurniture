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
  items?: ServiceItem[];
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

// Типы данных для FeaturesCards компонента

export interface FeatureCard {
  title: string;
  text: string;
  icon: string; // название иконки из @lucide/astro
  bg: string; // градиент для фона (например, "from-rose-400 to-pink-500")
  iconBg?: string; // цвет фона иконки (например, "bg-rose-100")
  iconColor?: string; // цвет иконки (например, "text-rose-600")
}

export interface FeaturesCardsData {
  title: string;
  subtitle?: string;
  items: FeatureCard[];
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

// Типы данных для ContactForm компонента

export interface ContactFormData {
  title: string;
  subtitle?: string;
  description?: string;
  nameLabel?: string;
  phoneLabel?: string;
  buttonText: string;
  whatsappButton?: {
    text: string;
    href: string;
  };
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
  furnitureTypes?: CalculatorOption[];
  materials?: CalculatorOption[];
  hardwareOptions?: CalculatorRadioOption[];
  configurations?: CalculatorOption[];
  additionalOptions?: CalculatorCheckboxOption[];
  deadlineOptions?: CalculatorOption[];
  wardrobeTypes?: CalculatorOption[];
  additionalElements?: CalculatorCheckboxOption[];
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
    width?: string;
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
  title: "Распашные шкафы на заказ в Алматы",
  highlight: "от 3 дней",
  subtitle: "Проектируем шкафы, которые точно подойдут вашему интерьеру. Оставьте заявку и узнайте стоимость мгновенно!",
  benefits: [
    {
      icon: "Phone",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Бесплатный выезд на замер",
    },
    {
      icon: "ShieldCheck",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Гарантия 12 месяцев",
    },
    {
      icon: "Layers",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Более 2000 фактур и цветов",
    },
    {
      icon: "Percent",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Рассрочка 0%, на 6 месяцев",
    },
  ],
  buttonText: "Оставить заявку",
  buttonHref: "#form",
  imageSrc: "/images/home/hinged-wardrobes.webp",
};

export const servicesData: ServicesData = {
  title: "О компании",
  subtitle: "С 2011 года создаются распашные шкафы на заказ, продуманные до каждой детали. Учтены размеры пространства, стиль интерьера и пожелания клиента, чтобы комната оставалась функциональной и гармоничной.\n\nКаждый проект сопровождается поддержкой и консультациями, обеспечивая уверенность в сроках и надежности. Результат — удобный и долговечный шкаф, который приносит порядок, комфорт и спокойствие в дом.",
};

export const servicesData2: ServicesData = {
  title: "Новости",
  subtitle: "Читайте наши материалы о распашных шкафах и узнайте, как сделать правильный выбор, избежать ошибок при заказе и спланировать интерьер с максимальной пользой.",
  items: [
    { name: "Как выбрать распашной шкаф под нестандартное пространство" },
    { name: "Лучшие материалы и фурнитура для долговечных распашных шкафов" },
    { name: "Ошибки при проектировании шкафа, которые дорого обходятся" },
    { name: "Идеи наполнения распашного шкафа для упорядоченного хранения" },
  ],
};

// Константы для WhyUs компонента
export const whyUsData: WhyUsData = {
  title: "Преимущества",
  advantages: [
    {
      title: "Работаем чисто",
      text: "Доставляем шкаф аккуратно и в полной упаковке. Сборка проходит чисто, а за собой мы не оставляем ни пылинки. Вы получаете готовый шкаф без стресса.",
    },
    {
      title: "Собственное производство",
      text: "14 лет мы создаём мебель, используя профессиональное оборудование и технологии. Каждый шкаф проверяется на всех этапах, чтобы вы получили идеальный результат.",
    },
    {
      title: "Минимальная предоплата",
      text: "Вы оплачиваете всего 50% при заказе, а остальное после установки или доставки. Так мы делаем процесс безопасным и комфортным для вашего бюджета.",
    },
    {
      title: "Бесплатный 3D проект",
      text: "Получите детальный 3D проект вашего распашного шкафа с точными размерами. Вы сможете увидеть, как шкаф впишется в интерьер ещё до производства.",
    },
  ],
  ctaButton: {
    text: "Заказать мебель",
    href: "#calculator",
  },
};

// Константы для HowItWorks компонента
export const howItWorksData: HowItWorksData = {
  title: "8 шагов, как создаём ваш распашной шкаф",
  subtitle: "Закажите шкаф мечты и сделайте пространство удобным мгновенно!",
  gridCols: 2,
  steps: [
    {
      step: "1",
      title: "Контакт",
      text: "Вы оставляете заявку или звоните, мы назначаем замер и обсуждаем все детали будущего шкафа.",
      icon: "Phone",
      bg: "from-rose-400 to-pink-500",
    },
    {
      step: "2",
      title: "Замер",
      text: "Мастер делает точный замер и даёт рекомендации по материалам и функциональным решениям.",
      icon: "Users",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      step: "3",
      title: "Договор",
      text: "Заключаем договор с прозрачными условиями и сроками, чтобы вы были уверены в результате.",
      icon: "FileText",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      step: "4",
      title: "Предоплата",
      text: "Вы вносите 50% от стоимости заказа, остальное оплачивается после установки.",
      icon: "Percent",
      bg: "from-green-400 to-teal-500",
    },
    {
      step: "5",
      title: "Выполнение работ",
      text: "Закупка материалов, распил, подготовка и упаковка деталей выполняются с профессиональным контролем.",
      icon: "Hammer",
      bg: "from-amber-400 to-orange-500",
    },
    {
      step: "6",
      title: "Установка",
      text: "Доставляем шкаф и собираем его на объекте, проверяя точное соответствие размеров и качества сборки.",
      icon: "Truck",
      bg: "from-teal-400 to-cyan-500",
    },
    {
      step: "7",
      title: "Приём работы",
      text: "Вы проверяете шкаф, оцениваете качество и функциональность, принимаете готовый проект.",
      icon: "CheckCircle",
      bg: "from-violet-400 to-purple-500",
    },
    {
      step: "8",
      title: "Расчёт",
      text: "Вносите оставшиеся 50% стоимости, и шкаф полностью становится вашим, без скрытых платежей.",
      icon: "Calculator",
      bg: "from-indigo-400 to-blue-500",
    },
  ],
  ctaButton: {
    text: "Заказать шкаф",
    href: "#form",
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
  title: "Материалы, которые мы используем",
  subtitle: "Мы подбираем материалы так, чтобы ваш распашной шкаф был не просто красивым, а прочным, безопасным и долговечным. Всё — от основы до фурнитуры — проверено временем и качеством.",
  items: [
    {
      title: "ЛДСП и МДФ",
      text: "Европейские и казахстанские панели класса эмиссии E1 с прочным ламинированием. Материалы устойчивы к влаге, царапинам и перепадам температуры, сохраняя внешний вид долгие годы.",
      icon: "Box",
      bg: "from-rose-400 to-pink-500",
    },
    {
      title: "Фасады",
      text: "Зеркала, матовое и глянцевое стекло, шпон, эмаль, комбинированные панели. Реализуем любое оформление — от лаконичного минимализма до утончённой классики без ограничений в стиле.",
      icon: "Layers",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      title: "Профиль и раздвижная система",
      text: "Алюминиевый или стальной профиль в цветах: чёрный, белый, хром, шампань и другие. Используем надёжные направляющие — створки двигаются плавно, тихо и без люфта.",
      icon: "Settings",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      title: "Фурнитура",
      text: "Blum, Hettich, Boyard — премиальные механизмы, доводчики и направляющие полного выдвижения. Всё продумано для комфорта, удобства и безупречной работы шкафа долгие годы.",
      icon: "Zap",
      bg: "from-green-400 to-teal-500",
    },
    {
      title: "Кромка",
      text: "ABS 2 мм или ПВХ — аккуратно закрывает торцы, защищает от влаги и сколов. Продлевает срок службы мебели и сохраняет безупречный внешний вид даже при ежедневной эксплуатации.",
      icon: "Target",
      bg: "from-amber-400 to-orange-500",
    },
  ],
};

// Константы для ReUsableTable компонента
export const reUsableTableData: ReUsableTableData = {
  title: "Что отличает нас от других производителей",
  subtitle: "Создаём распашные шкафы, которые полностью соответствуют вашему интерьеру и образу жизни. Сравните с другими — только у нас внимание к деталям и надёжность на каждый день.",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "ourCompany", header: "Мы" },
      { key: "otherCompanies", header: "Другие" },
    ],
    rows: [
      {
        criterion: "Срок изготовления",
        ourCompany: "7–14 дней",
        otherCompanies: "14–30 дней",
      },
      {
        criterion: "Замер",
        ourCompany: "Бесплатно, в день заявки",
        otherCompanies: "Платно или через 2–3 дня",
      },
      {
        criterion: "Проект",
        ourCompany: "3D-визуализация бесплатно",
        otherCompanies: "Эскиз от руки или платно",
      },
      {
        criterion: "Материалы",
        ourCompany: "Европа и Россия, с сертификатами",
        otherCompanies: "Часто Китай без документов",
      },
      {
        criterion: "Монтаж",
        ourCompany: "Собственные бригады, опыт 5+ лет",
        otherCompanies: "Наемные работники",
      },
    ],
  },
};
 
export const reUsableTableData2: ReUsableTableData = {
  title: "Цены",
  subtitle: "Цены на распашные шкафы понятные и честные — вы платите только за продуманный дизайн, удобство и надёжность. Каждый сантиметр учитывается, а бюджет остаётся под контролем.",
  table: {
    columns: [
      { key: "type", header: "Тип шкафа" },
      { key: "size", header: "Размеры" },
      { key: "price", header: "Стоимость" },
    ],
    rows: [
      {
        type: "Малый",
        size: "100×60×220 см",
        price: "от 90 000 тг",
      },
      {
        type: "Средний",
        size: "150×70×220 см",
        price: "от 140 000 тг",
      },
      {
        type: "Большой",
        size: "180×80×220 см",
        price: "от 190 000 тг",
      },
      {
        type: "Премиум",
        size: "200×100×240 см",
        price: "от 240 000 тг",
      },
    ],
  },
  additionalText: "Забудьте о компромиссах и переплатах — закажите распашной шкаф, который подходит именно вам.",
  ctaButton: {
    text: "Заказать шкаф",
    href: "#form",
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

export const featuresCardsData: FeaturesCardsData = {
  title: "Распашной шкаф на заказ — гармония формы, стиля и удобства",
  subtitle: "Создайте шкаф, который станет частью вашего интерьера. Каждый элемент продуман до мелочей, материалы выбраны с заботой о надёжности, а дизайн подчеркивает индивидуальность и комфорт вашего пространства.",
  items: [
    {
      title: "Идеальный дизайн под ваши размеры",
      text: "Каждый распашной шкаф на заказ создаётся с учётом особенностей комнаты, высоты потолков и выступов. Проект адаптируется под любые ниши, обеспечивая удобство использования и максимальную функциональность.",
      icon: "Compass",
      bg: "from-rose-400 to-pink-500",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      title: "Материалы, проверенные временем",
      text: "Для изготовления используются ЛДСП, МДФ, массив дерева и стекло высокого качества. Правильно подобранная фурнитура и механизмы обеспечивают плавное открытие дверей, практичность на каждый день.",
      icon: "Box",
      bg: "from-blue-400 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Внутреннее наполнение по вашим нуждам",
      text: "Полки, выдвижные ящики, отделения для обуви и аксессуаров проектируются индивидуально. Всё пространство используется рационально, хранение становится удобным и интуитивно понятным.",
      icon: "Layers",
      bg: "from-purple-400 to-indigo-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Простая установка и полная поддержка",
      text: "Монтаж выполняют опытные мастера с учётом особенностей помещения. После установки предоставляется гарантия, а при необходимости возможна настройка механизмов, регулировка дверей и консультации.",
      icon: "ShieldCheck",
      bg: "from-green-400 to-teal-500",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ],
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
  title: "Калькулятор",
  subtitle: "Узнайте стоимость вашего шкафа за минуты — просто заполните параметры и получите точный расчёт без ожидания.",
  wardrobeTypes: [
    { value: "hinged", label: "Распашной" },
    { value: "sliding", label: "Купе" },
    { value: "corner", label: "Угловой" },
    { value: "built-in", label: "Встроенный" },
    { value: "other", label: "Другое" },
  ],
  materials: [
    { value: "ldsp", label: "ЛДСП" },
    { value: "mdf", label: "МДФ" },
    { value: "solid", label: "Массив дерева" },
    { value: "glass", label: "Стекло" },
    { value: "combined", label: "Комбинированный" },
  ],
  hardwareOptions: [
    { value: "basic", label: "Базовая фурнитура" },
    { value: "blum", label: "Blum" },
    { value: "hettich", label: "Hettich" },
    { value: "boyard", label: "Boyard" },
    { value: "premium", label: "Премиум (Grass, Hafele)" },
  ],
  additionalElements: [
    { value: "lighting", label: "Подсветка" },
    { value: "mirror", label: "Зеркало" },
    { value: "drawers", label: "Выдвижные ящики" },
    { value: "shelves", label: "Полки" },
    { value: "shoe-rack", label: "Обувница" },
    { value: "soft-close", label: "Плавное закрытие" },
  ],
  buttonText: "Рассчитать стоимость",
  additionalText: "Определите цену всего за пару кликов!",
  contactFields: {
    name: "Имя",
    phone: "Телефон",
  },
  dimensionsLabels: {
    length: "Длина (см)",
    width: "Ширина (см)",
    height: "Высота (см)",
  },
};

// Константы для Companys компонента
export const companysData: CompanysData = {
  title: "Материалы и фурнитура",
  subtitle: "Компании и бренды выбирают шкафы за качество, надёжность и точное исполнение.",
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
  title: "Отзывы",
  reviews: [
    {
      author: "Анна П., Алматы",
      text: "«Долго искала шкаф, который вместит всю одежду и при этом не займёт слишком много места. Распашной шкаф идеально вписался в мою спальню, всё рассчитано до сантиметра. Очень довольна результатом и качеством!»",
      rating: 5,
      borderColor: "border-pink-400",
      avatarColor: "from-pink-100 to-rose-200",
      avatarInitial: "А",
    },
    {
      author: "Диас С., Астана",
      text: "«Нужен был шкаф для гостиной с большим количеством полок и ящиков. Заказал распашной шкаф на заказ — замерщик учёл все нюансы, монтаж прошёл быстро. Теперь всё на своих местах, и интерьер стал аккуратнее».",
      rating: 5,
      borderColor: "border-blue-400",
      avatarColor: "from-blue-100 to-cyan-200",
      avatarInitial: "Д",
    },
    {
      author: "Гульмира М., Шымкент",
      text: "«Стандартные шкафы не подходили по размерам, а распашной шкаф на заказ решили все проблемы. Получилось красиво, функционально и надёжно. Рада, что обратилась именно сюда — результат превзошёл ожидания!»",
      rating: 5,
      borderColor: "border-purple-400",
      avatarColor: "from-purple-100 to-indigo-200",
      avatarInitial: "Г",
    },
  ],
};

// Константы для ContactForm компонента
export const contactFormData: ContactFormData = {
  title: "Оставьте заявку",
  subtitle: "Бесплатно приедем на замер и рассчитаем точную стоимость вашей корпусной мебели на заказ.",
  description: "В 99% случаев итоговая сумма полностью совпадает с предварительным расчётом — никаких скрытых расходов.",
  nameLabel: "Имя",
  phoneLabel: "Телефон",
  buttonText: "Заказать шкаф",
  whatsappButton: {
    text: "Написать в WhatsApp",
    href: "https://wa.me/",
  },
};
 
