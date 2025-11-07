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
  Tag,
  Palette,
  Gift,
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
  Tag,
  Palette,
  Gift,
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
  title: "Угловые кухни на заказ в Алматы",
  highlight: "за 10 дней",
  subtitle: "Узнайте, сколько будет стоить ваша угловая кухня уже сегодня.",
  benefits: [
    {
      icon: "Tag",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "от 90 000 тенге за метр",
    },
    {
      icon: "Phone",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Выезд замерщика — бесплатно",
    },
    {
      icon: "Palette",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Индивидуальный дизайн-проект",
    },
    {
      icon: "Gift",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Бонус к заказу — каменная мойка",
    },
  ],
  buttonText: "Рассчитать стоимость",
  buttonHref: "#calculator",
  secondaryButtonVariant: "secondary",
  secondaryButtonText: "Заказать кухню угловую",
  secondaryButtonHref: "#form",
  imageSrc: "/images/home/corner-kitchens-hero.webp",
};

// Константы для Services компонента
export const servicesData: ServicesData = {
  title: "О нас",
  subtitle: "Создаём кухни, в которых комфорт сочетается с эстетикой, а качество видно в каждой детали.",
  items: [
    { name: "10+ лет опыта в производстве." },
    { name: "Проектируем под размеры, стиль и бюджет." },
    { name: "Полный цикл — от замера до установки." },
  ],
};
 
export const servicesData2: ServicesData = {
  title: "Новости",
  subtitle: "Рассказываем, чем живёт наша мастерская, что нового появляется и почему клиенты к нам возвращаются.",
  items: [
    { name: "Сроки стали короче — запустили новое оборудование" },
    { name: "Пополнение каталога — добавили итальянские ткани и металлические ножки" },
    { name: "Антистресс для родителей и хозяев котов: у нас появились ткани, которые не боятся ни когтей, ни пятен" },
  ],
};

// Константы для WhyUs компонента
export const whyUsData: WhyUsData = {
  title: "Преимущества при заказе угловой кухни от нас",
  advantages: [
    {
      title: "Работаем с 2011 года — опыт, проверенный сотнями довольных клиентов",
      text: "За это время реализовали сотни проектов в Алматы — от просторных домов до компактных квартир. Опыт позволяет нам точно понимать, как сделать красивую кухню под ваши нужды.",
    },
    {
      title: "20+ моделей на выбор — найдётся та, о которой вы мечтали",
      text: "Закажите кухню мечты — от компактных угловых до просторных П-образных моделей. Более 20 современных дизайнов на выбор. Производим на собственной фабрике — гарантируем качество и точность каждой детали.",
    },
    {
      title: "Что вы получаете бесплатно ещё до подписания договора?",
      text: "Ещё до начала работ вы точно знаете, как будет выглядеть ваша кухня и во сколько она обойдётся. Мы делаем замер, 3D-дизайн и расчёт цены — бесплатно и заранее. Всё, чтобы кухня подошла по стилю и планировке.",
    },
    {
      title: "12 месяцев гарантии — уверенность на каждый день",
      text: "Каждое изделие проходит контроль качества, а гарантия 12 месяцев подтверждает нашу уверенность в результате. Гарнитур сохраняет безупречный внешний вид даже при ежедневном использовании.",
    },
    {
      title: "Работаем по двухстороннему договору — вы защищены на каждом этапе",
      text: "Все условия прозрачны и закреплены документально. Изготовление угловых кухонь проходит точно по срокам, с учётом особенностей помещения. Мы сотрудничаем с частными клиентами, застройщиками и дизайнерами.",
    },
    {
      title: "Эко-материалы и аккуратный монтаж — кухня, которую приятно установить и ещё приятнее использовать",
      text: "Для малогабаритных и угловых кухонь мы используем только экологичные материалы — без запаха и вредных примесей. Монтаж проходит без пыли, шума и следов работ. После установки можно сразу наслаждаться кухней.",
    },
  ],
  ctaButton: {
    text: "Заказать угловую кухню",
    href: "#form",
  },
};

// Константы для HowItWorks компонента
export const howItWorksData: HowItWorksData = {
  title: "Как проходит изготовление кухни на заказ?",
  subtitle: "Хотите угловые кухни заказать в Алматы, но не знаете, с чего начать? Мы берём всё на себя — от замера до готового гарнитура. Быстро, чисто и с учётом ваших пожеланий. Сделайте первый шаг к мечте!",
  gridCols: 2,
  steps: [
    {
      step: "1",
      title: "Оставляете заявку и выбираете удобное время для замера",
      text: "Мы сразу связываемся, уточняем детали и назначаем визит мастера — всё быстро и без ожидания.",
      icon: "Phone",
      bg: "from-rose-400 to-pink-500",
    },
    {
      step: "2",
      title: "Проводим замер и создаём 3D-проект",
      text: "Специалист точно снимает размеры, помогает определиться со стилем и материалами. Вы знаете, как будет выглядеть будущая кухня.",
      icon: "Users",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      step: "3",
      title: "Заключаем договор и запускаем производство",
      text: "После согласования макета и стоимости мы официально оформляем заказ и начинаем изготовление. Так вы уверены в сроках и результате.",
      icon: "FileText",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      step: "4",
      title: "Доставляем, устанавливаем и предоставляем гарантию",
      text: "Монтаж проходит чисто и аккуратно, без пыли и повреждений. После установки подписываем акт и выдаём гарантию на изделие.",
      icon: "Truck",
      bg: "from-teal-400 to-cyan-500",
    },
  ],
  ctaButton: {
    text: "Заказать кухню угловую",
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
  title: "Наши механизмы для кухонь",
  items: [
    {
      title: "Tandembox от производства Blum — комфорт в каждом движении",
      text: `Современная система направляющих обеспечивает плавное открывание и мягкое закрытие ящиков. Благодаря износостойким валикам, конструкция выдерживает нагрузку до 65 кг, а технология BLUMOTION делает движение бесшумным — гарнитур работает так же идеально, как выглядит.`,
      icon: "Settings",
      bg: "from-rose-400 to-pink-500",
    },
    {
      title: "AVENTOS HF от Blum — лёгкость и эргономика для верхних шкафов",
      text: `Механизм для фасадов кухонь, которые открываются вверх и остаются в нужном положении без усилий. Даже высокие дверцы поднимаются плавно и надёжно фиксируются, освобождая пространство.`,
      icon: "Cog",
      bg: "from-blue-400 to-cyan-500",
    },
  ],
};

// Константы для ReUsableTable компонента
export const reUsableTableData: ReUsableTableData = {
  title: "Почему выбирают нас — доверие, заслуженное годами работы",
  subtitle: "Сравните, как мы работаем — и вы поймёте, почему клиенты рекомендуют нас друзьям.",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "ourCompany", header: "Мы" },
      { key: "otherCompanies", header: "Другие компании" },
    ],
    rows: [
      {
        criterion: "Подбор материалов",
        ourCompany: "На замере показываем реальные образцы фасадов и столешниц, чтобы вы сразу увидели, как будет выглядеть ваш кухонный гарнитур угловой на заказ.",
        otherCompanies: "Предлагают выбрать только по картинкам из каталога — без живых образцов и фактуры.",
      },
      {
        criterion: "Контроль на всех этапах",
        ourCompany: "За проектом закрепляется персональный менеджер, который ведёт заказ от эскиза до готовой установки.",
        otherCompanies: "После внесения оплаты клиент остаётся без поддержки и обратной связи.",
      },
      {
        criterion: "Фурнитура и комплектующие",
        ourCompany: "Используем надёжные бренды Blum, Hettich, Boyard — механизмы работают мягко и служат годами.",
        otherCompanies: "Ставят дешёвую фурнитуру, которая быстро выходит из строя.",
      },
      {
        criterion: "Сборка и монтаж",
        ourCompany: "Установку выполняют мастера с опытом, аккуратно и чисто — за один день, без мусора и повреждений.",
        otherCompanies: "Привлекают случайных сборщиков, часто оставляют беспорядок после монтажа.",
      },
      {
        criterion: "Послепродажное обслуживание",
        ourCompany: "Мы остаёмся на связи и оперативно решаем любые вопросы. Так клиенты уверенно возвращаются, чтобы угловые кухни заказать снова.",
        otherCompanies: "После сдачи объекта связь обрывается, гарантийные вопросы игнорируются.",
      },
    ],
  },
};
 
export const reUsableTableData2: ReUsableTableData = {
  title: "Цены на изготовление угловых кухонь",
  table: {
    columns: [
      { key: "package", header: "Комплектация" },
      { key: "description", header: "Описание" },
      { key: "duration", header: "Срок изготовления" },
      { key: "price", header: "Цена за метр, тг" },
    ],
    rows: [
      {
        package: "Базовая",
        description: "Угловая кухня на заказ из ЛДСП с надёжной фурнитурой Boyard и стандартной столешницей.",
        duration: "до 10 дней",
        price: "от 90 000",
      },
      {
        package: "Стандарт",
        description: "Фасады из МДФ, доводчики Blum, усиленные крепления и аккуратная сборка.",
        duration: "10–12 дней",
        price: "от 120 000",
      },
      {
        package: "Премиум",
        description: "Крашеный МДФ или шпон, встроенная подсветка, фурнитура Hettich, техника под проект.",
        duration: "12–14 дней",
        price: "от 160 000",
      },
      {
        package: "Малогабаритная",
        description: "Рациональное решение для студий и небольших помещений.",
        duration: "до 9 дней",
        price: "от 95 000",
      },
      {
        package: "Под застройщика",
        description: "Серийное изготовление угловых кухонь для жилых комплексов и новостроек.",
        duration: "по договорённости",
        price: "от 100 000",
      },
    ],
  },
};
 
export const reUsableTableData3: ReUsableTableData = {
  title: "Материалы, которые мы используем в изготовлении угловых кухонь",
  subtitle: "Всё, что используем, проходит проверку на прочность, влагостойкость и экологическую безопасность. Вы выбираете — мы реализуем.",
  table: {
    columns: [
      { key: "category", header: "Категория" },
      { key: "description", header: "Описание и особенности" },
    ],
    rows: [
      {
        category: "Фасады",
        description: "Пластик, акрил, шпон и эмаль — устойчивы к влаге и солнечному свету, не теряют цвет и блеск со временем. Отличный выбор, если нужна угловая кухня на заказ недорого, но с современным внешним видом.",
      },
      {
        category: "Фурнитура",
        description: "Blum, Hettich, Boyard — механизмы, которые открываются мягко и бесшумно. Такая база гарантирует долгий срок службы для любого кухонного гарнитура углового на заказ.",
      },
      {
        category: "Столешницы",
        description: "Искусственный камень, пластик и кварц — прочные поверхности, выдерживающие жар, влагу и ежедневное использование. Практичное решение для семейной кухни.",
      },
      {
        category: "Стекло и зеркала",
        description: "Закалённое стекло и зеркальные вставки делают кухни на заказ малогабаритные угловые визуально просторнее и добавляют лёгкости интерьеру.",
      },
    ],
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
  title: "Калькулятор стоимости кухни на заказ",
  subtitle: "Рассчитайте цену вашей угловой кухни на заказ в Алматы всего за 5 шагов — быстро, бесплатно и с точностью до метра.",
  materials: [
    { value: "acrylic", label: "Акрил" },
    { value: "ldsp", label: "ЛДСП" },
    { value: "painted_mdf", label: "Крашеный МДФ" },
    { value: "film", label: "Плёночный" },
    { value: "veneer", label: "Шпон" },
  ],
  hardwareOptions: [
    { value: "boyard", label: "Комфорт (Boyard)" },
    { value: "blum", label: "Премиум (Blum)" },
  ],
  configurations: [
    { value: "laminated", label: "Ламинированная (HPL, 38 мм, стандарт)" },
    { value: "composite", label: "Композитный камень" },
  ],
  buttonText: "Хочу узнать стоимость угловой кухни",
  additionalText: "Сделайте первый шаг — узнайте цену прямо сейчас, и мы подскажем оптимальное решение под ваши пожелания.",
  contactFields: {
    name: "Имя",
    phone: "Телефон",
  },
  dimensionsLabels: {
    length: "Длина первой стороны (в метрах)",
    depth: "Длина второй стороны (в метрах)",
    height: "Высота кухни",
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
  subtitle: "Реальные отзывы и короткие видео от клиентов с оценкой качества, фото \"до/после\"",
  reviews: [
    {
      author: "Марина К., Алматы",
      text: "«Долго не могла подобрать кухню под нестандартное помещение — везде говорили, что угол \"не соберётся красиво\". Здесь всё просчитали точно, предложили несколько вариантов дизайна. За десять дней кухня стояла, как будто родная! Каждый день радуюсь, что выбрала вас».",
      rating: 5,
      borderColor: "border-pink-400",
      avatarColor: "from-pink-100 to-rose-200",
      avatarInitial: "М",
    },
    {
      author: "Айгерим С., Казахстан",
      text: "«Мы с мужем искали, где сделать кухню быстро, но чтобы не пострадало качество. Удивило, что всё прошло без нервов: замер, проект, установка — чётко по срокам. Получилась уютная угловая кухня с подсветкой, выглядит дороже, чем стоила. Спасибо за аккуратность и внимание!»",
      rating: 5,
      borderColor: "border-blue-400",
      avatarColor: "from-blue-100 to-cyan-200",
      avatarInitial: "А",
    },
    {
      author: "Сергей П., Алматы",
      text: "«После ремонта бюджет был ограничен, но хотелось практичную кухню, а не временный вариант. Команда помогла подобрать материалы под мой бюджет, сделали расчёт и дизайн за день. Установили чисто, без мусора и суеты. Всё открывается мягко, фурнитура отличная — доволен на 100%!»",
      rating: 5,
      borderColor: "border-purple-400",
      avatarColor: "from-purple-100 to-indigo-200",
      avatarInitial: "С",
    },
  ],
};

// Константы для ContactForm компонента
export const contactFormData: ContactFormData = {
  title: "Оставьте заявку для заказа!",
  subtitle: "Не знаете, с чего начать? Начните с простого шага!",
  description: "Оставьте заявку — и наш специалист подскажет, какой стиль подойдёт вам, подберёт материалы и рассчитает стоимость проекта. Всё прозрачно, быстро и без стресса — от эскиза до монтажа.",
  nameLabel: "Имя",
  phoneLabel: "Телефон",
  buttonText: "Рассчитать стоимость",
};

// Константы для FeaturesCards компонента
export const featuresCardsData: FeaturesCardsData = {
  title: "Почему угловые кухни на заказ — лучший выбор для вашего дома в Алматы",
  subtitle: "Хотите кухню, которая выглядит дорого, но стоит разумно? Мы поможем создать именно то пространство, где приятно начинать утро и собираться всей семьёй.",
  items: [
    {
      title: "Когда каждая деталь на своём месте и с душой",
      text: "Даже небольшая комната может стать функциональной. Маленькие угловые кухни на заказ позволяют использовать каждый сантиметр: раковина и варочная поверхность располагаются удобно, а хранение — рационально.",
      icon: "Heart",
      bg: "from-rose-400 to-pink-500",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      title: "Кухня, созданная под вас до последнего сантиметра",
      text: "Вы сами выбираете сырьё, фурнитуру и цвет — от лаконичного белого до глубоких оттенков дерева. Мы предлагаем угловую кухню на заказ недорого, подстраивая прайс под ваш бюджет без потери качества.",
      icon: "Target",
      bg: "from-blue-400 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Платите только за ежедневное удовольствие и удобство",
      text: "Мы используем фурнитуру Blum, Hettich и Boyard — механизмы служат годами. Когда вы решаете заказать угловой кухонный гарнитур, вы получаете продуманное решение с гарантией и поддержкой после установки.",
      icon: "Tag",
      bg: "from-purple-400 to-indigo-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Получите готовую кухню мечты без шума и беспорядка",
      text: "Мы берём на себя всё. За 10 дней вы получаете готовую кухню, полностью адаптированную под вас. Кухни на заказ угловые подойдут и для просторных домов, и для компактных квартир в Алматы.",
      icon: "CheckCircle",
      bg: "from-amber-400 to-yellow-500",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
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
 
