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
  Sparkles,
  Shield,
  Cog,
  Droplet,
  Film,
  Sparkle,
  CornerDownRight,
  Circle,
  Square,
  Armchair,
  Package,
  Archive,
  Repeat,
  Sofa,
  LayoutGrid,
  Minimize,
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
  Sparkles,
  Shield,
  Cog,
  Droplet,
  Film,
  Sparkle,
  CornerDownRight,
  Circle,
  Square,
  Armchair,
  Package,
  Archive,
  Repeat,
  Sofa,
  LayoutGrid,
  Minimize,
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

// Типы данных для TypeOfKitchen компонента

export interface FurnitureTypeItem {
  title: string;
  description: string;
  icon: string; // название иконки из @lucide/astro
  gradient: string; // градиент для фона (например, "from-blue-400 to-cyan-500")
}

export interface TypeOfKitchenData {
  title: string;
  poufsSection: {
    title: string;
    items: FurnitureTypeItem[];
  };
  banquettesSection: {
    title: string;
    items: FurnitureTypeItem[];
  };
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
  furnitureTypes?: CalculatorOption[];
  materials?: CalculatorOption[];
  hardwareOptions?: CalculatorRadioOption[];
  configurations?: CalculatorOption[];
  additionalOptions?: CalculatorCheckboxOption[];
  deadlineOptions?: CalculatorOption[];
  sofaTypes?: CalculatorOption[];
  fabricTypes?: CalculatorOption[];
  mechanisms?: CalculatorOption[];
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
  title: "Диваны на заказ в Алматы",
  highlight: "от 7 дней",
  subtitle: "Закажите диван своей мечты и забудьте о компромиссах.",
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
  imageSrc: "/images/home/sofas.webp",
};

// Константы для Services компонента
export const servicesData: ServicesData = {
  title: "О компании",
  subtitle: "Более 14 лет на рынке изготовления мебели позволяют создавать диваны на заказ с точным соблюдением размеров и материалов. Каждое сотрудничество обеспечивает полное сопровождение — от замера до установки, без лишних хлопот и волнений.\n\nКачество и надёжность работы гарантируют уверенность в результате и долговечность мебели. Поддержка на всех этапах помогает принимать решения легко и спокойно, зная, что каждая деталь продумана.",
};
 
export const servicesData2: ServicesData = {
  title: "Новости",
  subtitle: "Читайте наши новости и узнайте, как выбрать диван на заказ, избежать ошибок при покупке и подобрать оптимальные материалы для долгого срока службы.",
  items: [
    { name: "Как правильно выбрать размер дивана на заказ для вашей гостиной" },
    { name: "Какие ткани для диванов на заказ реально выдерживают детей и животных" },
    { name: "Сравнение механизмов трансформации диванов на заказ" },
    { name: "Как экономить при заказе дивана и не потерять качество" },
  ],
};

// Константы для WhyUs компонента
export const whyUsData: WhyUsData = {
  title: "Преимущества",
  advantages: [
    {
      title: "Огромный выбор обивки",
      text: "Более 300 тканей — премиум, эко и антивандальные. От мягкого велюра до прочного шенилла. Создавайте диван на заказ для вашего интерьера.",
    },
    {
      title: "12 месяцев гарантии",
      text: "Каждый диван проходит строгий контроль качества. Ремонт или замена без лишних вопросов. Купите диван с доставкой и наслаждайтесь комфортом.",
    },
    {
      title: "Чистота и порядок",
      text: "Мы заносим только упакованные детали и собираем аккуратно. Мусор остаётся за нами. С диваном на заказ процесс будет лёгким и комфортным.",
    },
    {
      title: "Профессиональное производство",
      text: "14 лет опыта и собственное производство на современном оборудовании. Контроль на всех этапах. Создаём диваны на заказ под ваш интерьер.",
    },
    {
      title: "Минимальная предоплата",
      text: "Оплачиваете 50% при заказе, остальное после доставки и установки. Без лишних рисков. Покупка дивана с доставкой становится удобной.",
    },
    {
      title: "Бесплатный 3D проект мебели",
      text: "Создаём точный 3D проект с размерами. Вносите правки до производства. Вы получаете полное представление и уверенность в результате.",
    },
  ],
  ctaButton: {
    text: "Заказать диван",
    href: "#form",
  },
};

// Константы для HowItWorks компонента
export const howItWorksData: HowItWorksData = {
  title: "8 шагов работы над вашим заказом",
  subtitle: "Пройдите все шаги легко — оформите заказ прямо сейчас!",
  gridCols: 2,
  steps: [
    {
      step: "1",
      title: "Контакт",
      text: "Оставьте заявку или позвоните, мы согласуем удобное время для замера.",
      icon: "Phone",
      bg: "from-rose-400 to-pink-500",
    },
    {
      step: "2",
      title: "Замер",
      text: "Мастер снимает размеры и консультирует по выбору материалов.",
      icon: "Users",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      step: "3",
      title: "Договор",
      text: "Подписываем с вами договор, фиксируем все детали заказа.",
      icon: "FileText",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      step: "4",
      title: "Предоплата",
      text: "Вносите 50% от общей суммы для старта производства.",
      icon: "Percent",
      bg: "from-green-400 to-teal-500",
    },
    {
      step: "5",
      title: "Выполнение работ",
      text: "Закупка материалов, распил и подготовка деталей для сборки.",
      icon: "Hammer",
      bg: "from-amber-400 to-orange-500",
    },
    {
      step: "6",
      title: "Установка",
      text: "Доставляем на объект и собираем мебель аккуратно и быстро.",
      icon: "Truck",
      bg: "from-teal-400 to-cyan-500",
    },
    {
      step: "7",
      title: "Прием работы",
      text: "Вы проверяете готовый диван и подтверждаете качество.",
      icon: "CheckCircle",
      bg: "from-violet-400 to-purple-500",
    },
    {
      step: "8",
      title: "Расчёт",
      text: "После приёма работы оплачиваете остаток 50% от суммы заказа.",
      icon: "Calculator",
      bg: "from-indigo-400 to-blue-500",
    },
  ],
  ctaButton: {
    text: "Перейти в WhatsApp",
    href: "https://wa.me/",
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
  items: [
    {
      title: "Каркас",
      text: `Натуральное дерево, фанера, ЛДСП — прочные конструкции, рассчитанные на долгие годы эксплуатации. Надёжность и устойчивость гарантируют, что изделие прослужит без проблем.`,
      icon: "Box",
      bg: "from-rose-400 to-pink-500",
    },
    {
      title: "Наполнители",
      text: `Пенополиуретан высокой плотности, пружинные блоки (зависимые и независимые), холлофайбер, синтепух. Все материалы гипоаллергенны и сохраняют форму при эксплуатации.`,
      icon: "Package",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      title: "Ткань",
      text: `Велюр, рогожка, экокожа, микровелюр, шенилл, замша. Устойчивы к истиранию и загрязнениям, легко чистятся. Каждая ткань проверена на износ и экологичность.`,
      icon: "Layers",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      title: "Механизмы трансформации",
      text: `Еврокнижка, дельфин, тик-так, пантограф, аккордеон — системы, обеспечивающие плавное раскладывание. Надёжность подтверждена многолетним опытом.`,
      icon: "Cog",
      bg: "from-green-400 to-emerald-500",
    },
    {
      title: "Фурнитура",
      text: `Металлические ножки, скрытые опоры, подголовники и подлокотники с нишами. Возможна комплектация с ящиками для белья или встроенными USB-портами для комфорта.`,
      icon: "Settings",
      bg: "from-amber-400 to-orange-500",
    },
  ],
};

// Константы для ReUsableTable компонента
export const reUsableTableData: ReUsableTableData = {
  title: "Сравнение с конкурентами",
  subtitle: "Сравните, почему наши диваны на заказ выгоднее и удобнее других производителей.",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "ourCompany", header: "Мы" },
      { key: "otherCompanies", header: "Другие" },
    ],
    rows: [
      {
        criterion: "Срок изготовления",
        ourCompany: "7-14 дней",
        otherCompanies: "30-45 дней",
      },
      {
        criterion: "Гарантия на каркас",
        ourCompany: "Пожизненная",
        otherCompanies: "1-2 года",
      },
      {
        criterion: "Материалы",
        ourCompany: "Массив бука, сталь",
        otherCompanies: "ЛДСП, фанера, сосна",
      },
      {
        criterion: "Замер",
        ourCompany: "Бесплатно + 3D-визуализация",
        otherCompanies: "Платно или эскиз от руки",
      },
      {
        criterion: "Примерка чехлов",
        ourCompany: "2 примерки в процессе пошива",
        otherCompanies: "Без примерок",
      },
    ],
  },
};
 
export const reUsableTableData2: ReUsableTableData = {
  title: "Какие диваны мы изготавливаем",
  subtitle: "Выбирайте диван, который полностью соответствует вашим ожиданиям.",
  table: {
    columns: [
      { key: "type", header: "Тип" },
      { key: "description", header: "Описание" },
    ],
    rows: [
      {
        type: "Прямой",
        description: "Компактный и универсальный, подходит для любой комнаты",
      },
      {
        type: "Угловой",
        description: "Удобен для больших гостиных и семейных вечеров",
      },
      {
        type: "Модульный",
        description: "Составляется из модулей по вашему желанию и пространству",
      },
      {
        type: "П-образный",
        description: "Максимум комфорта и места для отдыха",
      },
      {
        type: "С оттоманкой",
        description: "Добавляет стиль и функциональность для ног и хранения",
      },
      {
        type: "С открытым краем",
        description: "Современный дизайн и лёгкость интерьера",
      },
    ],
  },
};
 
export const reUsableTableData3: ReUsableTableData = {
  title: "Цены",
  subtitle: "Пройдите все этапы быстро и без лишних забот — от замера до готового дивана.",
  table: {
    columns: [
      { key: "type", header: "Тип" },
      { key: "price", header: "Стоимость" },
    ],
    rows: [
      {
        type: "Прямой",
        price: "120 000 – 250 000 тг",
      },
      {
        type: "Угловой",
        price: "250 000 – 450 000 тг",
      },
      {
        type: "Модульный",
        price: "300 000 – 500 000 тг",
      },
      {
        type: "П-образный",
        price: "400 000 – 600 000 тг",
      },
      {
        type: "С оттоманкой",
        price: "220 000 – 400 000 тг",
      },
      {
        type: "С открытым краем",
        price: "180 000 – 350 000 тг",
      },
    ],
  },
  additionalText: "Закажите свой диван прямо сейчас!",
  ctaButton: {
    text: "Заказать диван",
    href: "#form",
  },
};
 
export const reUsableTableData4: ReUsableTableData = {
  title: "Из чего будет сделан ваш кухонный гарнитур?",
  subtitle: "Чтобы ваш кухонный гарнитур служил десятилетиями, мы используем сертифицированное и износостойкое сырьё. Материалы подбираются с учётом условий эксплуатации.",
  table: {
    columns: [
      { key: "category", header: "Категория" },
      { key: "description", header: "Описание и особенности" },
    ],
    rows: [
      {
        category: "Фасады",
        description: "Пластик, акрил, эмаль, шпон — стойкие к влаге и царапинам.",
      },
      {
        category: "Фурнитура",
        description: "Blum, Hettich, Boyard — доводчики, подъемные и раздвижные механизмы.",
      },
      {
        category: "Столешницы",
        description: "Пластик, искусственный камень, кварц — практичные и термостойкие.",
      },
      {
        category: "Стекло и зеркала",
        description: "Закалённое стекло, фартуки и зеркальные элементы для фасадов.",
      },
    ],
  },
};

// Константы для CustomFurniture компонента
export const customFurnitureData: CustomFurnitureData = {
  title: "Как выгодно заказать кухонный гарнитур в Алматы?",
  subtitle: "Когда речь идёт о изготовлении кухни на заказ, важно не только выбрать красивый дизайн. Хотите купить кухню, которая прослужит долго и будет подходить по стилю? Вы обратились по адресу! Мы создаём кухни, где всё продумано — от высоты столешницы до расположения розеток.",
  sections: [
    {
      title: "Индивидуальный проект под ваши задачи",
      items: [
        "При изготовлении кухни на заказ дизайнер подстраивает проект под особенности помещения: площадь, освещённость, расположение труб и окон. Вы можете выбрать всё — от оттенка фасадов до наполнения ящиков. В итоге получается не просто мебель, а рабочее пространство под вас.",
      ],
    },
    {
      title: "Недорогие кухни на заказ без компромиссов в качестве",
      items: [
        "Доступная цена не означает упрощённый подход. Мы предлагаем недорогие кухни на заказ благодаря собственному производству и закупке материалов напрямую у поставщиков. Это позволяет снизить себестоимость без потери надёжности — гарнитуры остаются прочными, стильными и удобными.",
      ],
    },
    {
      title: "Кухонная мебель на заказ в Алматы с гарантией и сервисом",
      items: [
        "Каждая кухня проходит многоступенчатую проверку качества: от подгонки фасадов до точности установки. Мы даём официальную гарантию и остаёмся на связи даже после монтажа. Кухонная мебель на заказ в Алматы от нашей фабрики — это уверенность, что всё выполнено по договору и в срок.",
      ],
    },
  ],
};

// Константы для Calculator компонента
export const calculatorData: CalculatorData = {
  title: "Калькулятор",
  subtitle: "Узнайте стоимость вашего дивана за минуты — просто заполните параметры и получите точный расчёт без ожидания.",
  sofaTypes: [
    { value: "straight", label: "Прямой" },
    { value: "corner", label: "Угловой" },
  ],
  fabricTypes: [
    { value: "rogozhka", label: "Рогожка" },
    { value: "zhakkard", label: "Жаккард" },
    { value: "leather", label: "Кожа" },
    { value: "flock", label: "Флок" },
  ],
  mechanisms: [
    { value: "eurobook", label: "Еврокнижка" },
    { value: "dolphin", label: "Дельфин" },
    { value: "accordion", label: "Аккордеон" },
  ],
  buttonText: "Рассчитать стоимость",
  additionalText: "Определите цену всего за пару кликов!",
  contactFields: {
    name: "Имя",
    phone: "Телефон",
  },
  dimensionsLabels: {
    length: "Длина (см)",
    depth: "Глубина (см)",
    height: "Высота (см)",
  },
};

// Константы для Companys компонента
export const companysData: CompanysData = {
  title: "Нам доверяют",
  subtitle: "",
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
      author: "Татьяна К., Алматы",
      text: "«Сначала думала, что найти диван на заказ под размеры квартиры невозможно. Здесь сделали точный замер, предложили дизайн и подобрали ткань. В итоге диван идеально вписался, отдыхать стало комфортно и приятно».",
      rating: 5,
      borderColor: "border-pink-400",
      avatarColor: "from-pink-100 to-rose-200",
      avatarInitial: "Т",
    },
    {
      author: "Нурлан П., Астана",
      text: "«Искал диван на заказ для маленькой гостиной, все стандартные варианты не подходили. Консультанты помогли подобрать модель удобную и функциональную. Диван пришёл в срок, пользоваться им легко и удобно».",
      rating: 5,
      borderColor: "border-blue-400",
      avatarColor: "from-blue-100 to-cyan-200",
      avatarInitial: "Н",
    },
    {
      author: "Милана М., Шымкент",
      text: "«Нужен был диван на заказ с местом для хранения, но не знала, с чего начать. Специалисты помогли выбрать материалы и создать проект под моё пространство. Теперь гости довольны, а дом стал аккуратным и уютным».",
      rating: 5,
      borderColor: "border-purple-400",
      avatarColor: "from-purple-100 to-indigo-200",
      avatarInitial: "М",
    },
  ],
};

// Константы для ContactForm компонента
export const contactFormData: ContactFormData = {
  title: "Оставьте заявку!",
  subtitle: "Бесплатно проведём замер и рассчитаем точную стоимость мягкой мебели на заказ. В 99% случаев расчёт полностью совпадает с реальной ценой изготовления.",
  description: "Оформите заявку прямо сейчас и начните процесс изготовления вашего дивана!",
  nameLabel: "Имя",
  phoneLabel: "Телефон",
  buttonText: "Перейти в WhatsApp",
};

// Константы для FeaturesCards компонента
export const featuresCardsData: FeaturesCardsData = {
  title: "Диваны на заказ от фабрики по изготовлению диванов — индивидуально для вашего интерьера",
  subtitle: "Создайте диван, который идеально впишется в вашу гостиную или спальню. На нашей фабрике по изготовлению диванов учитываются все размеры, материалы и стиль вашего дома. Мы превращаем идеи в готовый продукт, который радует комфортом и дизайном.",
  items: [
    {
      title: "Максимальный комфорт и функциональность",
      text: "Каждый диван на заказ разрабатывается с учётом эргономики и привычек будущих владельцев. Вы получаете не просто мебель, а пространство для отдыха и общения. Фабрика по изготовлению диванов гарантирует точность и долговечность каждой детали.",
      icon: "Sofa",
      bg: "from-rose-400 to-pink-500",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      title: "Широкий выбор материалов и дизайнов",
      text: "Ткани, экокожа, шенилл и премиум обивка — каждый диван создаётся с учётом стиля вашего интерьера. Мы предлагаем уникальные варианты отделки и декоративные элементы. Диваны на заказ становятся не просто мебелью, а акцентом вашего дома.",
      icon: "Layers",
      bg: "from-blue-400 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Контроль качества на каждом этапе",
      text: "От замера и проектирования до сборки и доставки — всё под нашим контролем. Каждый элемент проверяется на прочность и долговечность. Фабрика по изготовлению диванов гарантирует, что вы получите идеальный результат без компромиссов.",
      icon: "ShieldCheck",
      bg: "from-purple-400 to-indigo-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Быстро и удобно для клиента",
      text: "Сроки изготовления минимизированы до 7–14 дней без потери качества. Вы наблюдаете процесс и можете внести корректировки на любом этапе. Диваны на заказ становятся легким и безопасным решением для комфортного интерьера.",
      icon: "Clock",
      bg: "from-green-400 to-emerald-500",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ],
};

// Константы для TypeOfKitchen компонента
export const typeOfKitchenData: TypeOfKitchenData = {
  title: "Какую мебель мы изготавливаем?",
  poufsSection: {
    title: "Виды пуфов",
    items: [
      {
        title: "Угловые модели",
        description: "Практичные пуфы для небольших пространств — компактно становятся в угол или у шкафа. Подходят для пуфика в прихожую на заказ, где важно рационально использовать каждый метр.",
        icon: "CornerDownRight",
        gradient: "from-blue-400 to-cyan-500",
      },
      {
        title: "Цилиндрические пуфы",
        description: "Отличный акцент в спальне или гостиной. Легко перемещаются, устойчивы и служат мягкой подставкой или сиденьем. Изготовление пуфов позволяет выбрать оптимальную высоту и ткань под интерьер.",
        icon: "Circle",
        gradient: "from-purple-400 to-pink-500",
      },
      {
        title: "Квадратные пуфы",
        description: "Выдерживают ежедневные нагрузки и подходят для семьи с детьми. Используются у туалетного столика, в гардеробной или гостиной. Подбирается при изготовлении пуфов на заказ — по размерам.",
        icon: "Square",
        gradient: "from-green-400 to-teal-500",
      },
      {
        title: "Пуф со спинкой",
        description: "Удобны для долгого сидения, особенно в спальнях и детских. Спинка создаёт поддержку и завершённый вид, делая пуф полноценным элементом интерьера.",
        icon: "Armchair",
        gradient: "from-amber-400 to-orange-500",
      },
      {
        title: "Пуфик-тумба",
        description: "Комбинирует место для хранения и мягкое сиденье. При изготовлении банкетки на заказ или пуфика можно добавить отделения под обувь или аксессуары.",
        icon: "Package",
        gradient: "from-rose-400 to-red-500",
      },
      {
        title: "Пуфик-коробка",
        description: "Оснащён съёмной крышкой и глубоким отсеком. Такой пуф помогает поддерживать порядок в прихожей, аккуратно скрывая вещи. Идеален для хранения обуви, аксессуаров и мелких предметов.",
        icon: "Archive",
        gradient: "from-indigo-400 to-blue-500",
      },
      {
        title: "Пуфик-трансформер",
        description: "Меняет форму и высоту — превращается в столик, подставку или полноценное сиденье. Популярное решение при изготовлении пуфиков на заказ для современных квартир.",
        icon: "Repeat",
        gradient: "from-teal-400 to-green-500",
      },
    ],
  },
  banquettesSection: {
    title: "Виды банкеток",
    items: [
      {
        title: "Классические модели",
        description: "Скамьи без спинки — универсальное дополнение спальни или гостиной. При изготовлении банкетки на заказ можно выбрать длину, обивку и высоту под кровать или окно.",
        icon: "Sofa",
        gradient: "from-slate-400 to-gray-500",
      },
      {
        title: "Банкетки под старину",
        description: "Декоративная резьба, мягкое сиденье и устойчивый каркас делают такие банкетки на заказ выразительным акцентом в классических интерьерах.",
        icon: "Building2",
        gradient: "from-amber-500 to-yellow-600",
      },
      {
        title: "Многофункциональные банкетки",
        description: "Содержат встроенные ящики и полки для хранения обуви или сумок. Практичное решение для банкетки в прихожую на заказ, где важна организация пространства.",
        icon: "Layers",
        gradient: "from-violet-400 to-purple-500",
      },
      {
        title: "Банкетки с выдвижной полкой",
        description: "Комфортны в узких коридорах. Нижняя полка — для обуви, верхняя — для сидения. Мы предлагаем изготовление банкеток с разными вариантами отделки и механизмов.",
        icon: "LayoutGrid",
        gradient: "from-cyan-400 to-blue-500",
      },
      {
        title: "Компактные модели",
        description: "Без подлокотников, легко вписываются даже в маленькие помещения. Такие пуфы и банкетки сочетают минимализм, удобство и функциональность.",
        icon: "Minimize",
        gradient: "from-pink-400 to-rose-500",
      },
    ],
  },
};
 
