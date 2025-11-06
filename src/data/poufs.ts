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
  title: "Пуфы и банкетки на заказ в Алматы",
  highlight: "от 7 дней",
  subtitle: "Выберите свой идеальный пуф или создайте дизайн на заказ!",
  benefits: [
    {
      icon: "CheckCircle",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Съёмные чехлы — легко ухаживать",
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
      text: "2000+ фактур и цветов",
    },
    {
      icon: "Percent",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Рассрочка 0% на 6 месяцев",
    },
  ],
  buttonText: "Оставить заявку",
  buttonHref: "#form",
  imageSrc: "/images/home/poufs.webp",
};

// Константы для Services компонента
export const servicesData: ServicesData = {
  title: "О компании",
  subtitle: "За годы работы реализовали сотни проектов разной сложности на промышленном оборудовании с точностью до миллиметра. Работаем с надёжными материалами, современным оборудованием и проверенными поставщиками. \n\n Мы ценим результат, в котором сочетаются удобство, долговечность, а стоимость формируется заранее и остаётся неизменной.",
};
 
export const servicesData2: ServicesData = {
  title: "Новости",
  subtitle: "Следите за обновлениями — мы регулярно делимся выгодными предложениями, идеями оформления для заказа мебели.",
  items: [
    { name: "Сезонные скидки до 20% на изготовление пуфов" },
    { name: "Новая коллекция тканей пуфов и оттенков в топе 2026 года" },
    { name: "Быстрая доставка по всему Казахстану — теперь привозим всего за 1–2 дня после сборки" },
  ],
};

// Константы для WhyUs компонента
export const whyUsData: WhyUsData = {
  title: "Наши преимущества в изготовлении пуфов на заказ",
  advantages: [
    {
      title: "300+ вариантов обивки под ваш интерьер",
      text: "Велюр, шенилл, экокожа или антивандальные ткани — банкетка на заказ или пуф идеально впишутся в интерьер и подчеркнут уют комнаты — практичны в уходе и устойчивы к износу.",
    },
    {
      title: "12 месяцев гарантии без формальностей",
      text: "Мы отвечаем за качество каждого шва пуфов и детали изделия. Если появится дефект — заменим или отремонтируем без ожиданий. Ваша банкетка и пуф прослужат долгие годы без проблем.",
    },
    {
      title: "Чистая и аккуратная сборка",
      text: "Мастера привозят упакованные детали и собирают банкетки и пуфы на месте. Работаем без пыли, грязи и лишнего шума. После установки остаётся только готовая банкетка на заказ.",
    },
    {
      title: "Собственное производство с полным контролем",
      text: "14 лет создаём мебель заказ на профессиональном оборудовании. Каждый этап — от замера до упаковки пуфов и банкетов — под нашим контролем. Вы получаете изготовление без посредников.",
    },
    {
      title: "Предоплата 50% — остальное после установки",
      text: "Оплачиваете только половину стоимости перед началом. Оставшуюся часть — после сборки и утверждения результата. Мы фиксируем все условия заранее, чтобы не было неожиданных затрат.",
    },
    {
      title: "Бесплатный 3D-проект перед началом работ",
      text: "Покажем, как будет выглядеть банкетка или пуф в вашем интерьере. Вы выбираете форму, ткань и размеры заранее. Так результат совпадёт с ожиданиями до мелочей.",
    },
  ],
  ctaButton: {
    text: "Заказать пуф",
    href: "#form",
  },
};

// Константы для HowItWorks компонента
export const howItWorksData: HowItWorksData = {
  title: "8 шагов — как мы создаём мебель под ваш заказ?",
  gridCols: 2,
  steps: [
    {
      step: "1",
      title: "Контакт",
      text: "Вы оставляете заявку или звоните напрямую. Мы уточняем детали и назначаем удобное время для замера.",
      icon: "Phone",
      bg: "from-rose-400 to-pink-500",
    },
    {
      step: "2",
      title: "Выезд мастера",
      text: "Съём точных размеров проводится прямо на объекте — специалист предлагает пропорции и оптимальные варианты.",
      icon: "Users",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      step: "3",
      title: "Договор",
      text: "Фиксируем все условия: сроки, стоимость и детали заказа. Прозрачно и без скрытых пунктов.",
      icon: "FileText",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      step: "4",
      title: "Предоплата",
      text: "Вы вносите 50% от суммы заказа — после этого запускаем процесс изготовления.",
      icon: "Percent",
      bg: "from-green-400 to-teal-500",
    },
    {
      step: "5",
      title: "Выполнение работ",
      text: "Закупаем материалы, изготавливаем комплектующие и проверяем каждую деталь перед установкой.",
      icon: "Hammer",
      bg: "from-amber-400 to-orange-500",
    },
    {
      step: "6",
      title: "Установка",
      text: "Доставляем изделие на объект, аккуратно собираем и проверяем каждый элемент.",
      icon: "Truck",
      bg: "from-teal-400 to-cyan-500",
    },
    {
      step: "7",
      title: "Приём пуфа или банкетки",
      text: "Вы оцениваете выполненную работу и подтверждаете, что всё соответствует ожиданиям.",
      icon: "CheckCircle",
      bg: "from-violet-400 to-purple-500",
    },
    {
      step: "8",
      title: "Расчёт",
      text: "После приёмки заказа вносите оставшиеся 50%. Мы оставляем вас довольными результатом и новым уютом.",
      icon: "Calculator",
      bg: "from-indigo-400 to-blue-500",
    },
  ],
  ctaButton: {
    text: "Оставить заявку",
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
  title: "Наши механизмы",
  items: [
    {
      title: "TANDEMBOX — универсальная система направляющих",
      text: `Полновыдвижные ящики идут плавно и закрываются мягко. Динамическая грузоподъёмность — 30 кг и 65 кг в зависимости от направляющей — кухня выдержит ежедневный ритм.`,
      icon: "Box",
      bg: "from-rose-400 to-pink-500",
    },
    {
      title: "AVENTOS HF — решение для высоких фасадов",
      text: `Бифолд-механизм для навесных шкафов: створка складывается и уходит вверх, ручка остаётся под рукой; фронт фиксируется в любом положении — пластиковая кухня остаётся безопасной и удобной.`,
      icon: "Zap",
      bg: "from-blue-400 to-cyan-500",
    },
  ],
};

// Константы для ReUsableTable компонента
export const reUsableTableData: ReUsableTableData = {
  title: "Чем наше изготовление пуфов на заказ выгодно отличается от остальных?",
  subtitle: "Многие заказывают пуфы и банкетки и разочаровываются: фото красивое, а в реальности — не тот цвет, не та высота, ткань быстро протирается. Мы делаем иначе — сравните сами!",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "ourCompany", header: "Наша компания" },
      { key: "otherCompanies", header: "Другие производители" },
    ],
    rows: [
      {
        criterion: "Срок изготовления пуфа",
        ourCompany: "7–14 дней — чёткие сроки без задержек.",
        otherCompanies: "30–45 дней, часто с переносами и оправданиями.",
      },
      {
        criterion: "Гарантия на каркас пуфа",
        ourCompany: "На год — мы уверены в качестве и берём ответственность на себя.",
        otherCompanies: "3-6 месяцев, после чего ремонт пуфов за счёт клиента.",
      },
      {
        criterion: "Материалы каркаса пуфа",
        ourCompany: "Массив бука и сталь — надёжно, устойчиво, рассчитаны на годы.",
        otherCompanies: "ЛДСП, фанера, сосна — пуф и банкетки быстро деформируются.",
      },
      {
        criterion: "Замер и проект",
        ourCompany: "Бесплатный выезд мастера для подбора размеров будущего пуфа.",
        otherCompanies: "Платно или по эскизу от руки, без визуального согласования.",
      },
      {
        criterion: "Примерка чехлов",
        ourCompany: "Две примерки в процессе пошива пуфа — посадка ткани идеально подгоняется.",
        otherCompanies: "Примерки нет, результат видите только после готовности пуфа.",
      },
    ],
  },
};
 
export const reUsableTableData2: ReUsableTableData = {
  title: "Цены на изготовление банкеток и пуфов на заказ",
  subtitle: "Мы фиксируем стоимость заранее — без скрытых наценок и доплат.",
  table: {
    columns: [
      { key: "product", header: "Изделие" },
      { key: "size", header: "Размер (см)" },
      { key: "price", header: "Цена от, тг" },
    ],
    rows: [
      {
        product: "Пуф квадратный стандарт",
        size: "40×40×45",
        price: "от 35 000",
      },
      {
        product: "Пуф цилиндрический",
        size: "Ø40×45",
        price: "от 38 000",
      },
      {
        product: "Пуф с ящиком для хранения",
        size: "45×45×45",
        price: "от 45 000",
      },
      {
        product: "Банкетка классическая без спинки",
        size: "90×40×45",
        price: "от 55 000",
      },
      {
        product: "Банкетка с ящиками и полкой",
        size: "100×40×50",
        price: "от 68 000",
      },
    ],
  },
  additionalText: "Ваш дом заслуживает комфорт, созданный по вашим правилам — закажите пуф или банкетку мечты прямо сейчас.",
  ctaButton: {
    text: "Заказать пуф или банкетку",
    href: "#form",
  },
};
 
export const reUsableTableData3: ReUsableTableData = {
  title: "Материалы, которые мы используем",
  subtitle: "Материалы проверены временем — они не теряют форму и внешний вид годами. Вы видите не просто мебель, а результат внимательной работы мастеров",
  table: {
    columns: [
      { key: "section", header: "Раздел" },
      { key: "description", header: "Описание" },
    ],
    rows: [
      {
        section: "Каркас",
        description: "Основа из бука, берёзы и влагостойкой фанеры. Конструкция выдерживает до 250 кг и сохраняет форму даже при ежедневной эксплуатации пуфа.",
      },
      {
        section: "Наполнители",
        description: "Пенополиуретан высокой плотности и латекс обеспечивают упругость. Для мягких моделей пуфов применяются холлофайбер и синтепух, которые не сбиваются и не проседают.",
      },
      {
        section: "Ткань",
        description: "Велюр, рогожка, микровелюр, экокожа — материалы с антивандальным покрытием и лёгкой очисткой. Обивка пуфа подбирается под освещение и фактуру комнаты.",
      },
      {
        section: "Механизмы трансформации",
        description: "Дельфин, тик-так, аккордеон — проверенные системы, рассчитанные на тысячи циклов. Используются в комбинированных моделях пуфов с подъёмными сиденьями.",
      },
      {
        section: "Фурнитура",
        description: "Металлические ножки, скрытые опоры, петли повышенной прочности. В некоторых моделях пуфов предусмотрены отсеки с амортизаторами и встроенными розетками.",
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
  title: "Калькулятор стоимости кухни",
  subtitle: "Перестаньте тянуть с заказом: бюджет расползается, сроки утекают, а готовить всё так же неудобно. Запустите точный расчёт за 5 шагов — увидите цену, комплектацию и ориентир по срокам до звонка.",
  furnitureTypes: [
    { value: "kitchen", label: "Кухня" },
  ],
  materials: [
    { value: "plastic", label: "Пластик" },
  ],
  hardwareOptions: [
    { value: "comfort", label: "Комфорт" },
    { value: "premium", label: "Премиум" },
  ],
  configurations: [
    { value: "straight", label: "Прямая" },
    { value: "corner", label: "Угловая" },
  ],
  additionalOptions: [
    { value: "postforming", label: "Постформинг 38 мм (стандарт)" },
    { value: "stone", label: "Искусственный камень" },
  ],
  deadlineOptions: [
    { value: "standard", label: "Стандартный (10–15 дней)" },
  ],
  buttonText: "Хочу узнать стоимость кухни из пластика",
  additionalText: "Устали от «сладких» смет? Поставьте точку: получите прозрачную цену и дату монтажа — оформите расчёт сейчас.",
  contactFields: {
    name: "Имя",
    phone: "Телефон",
  },
  dimensionsLabels: {
    length: "Длина кухни (общая длина, м)",
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
  title: "Отзывы наших клиентов",
  reviews: [
    {
      author: "Алия С., Алматы",
      text: "«Долго искала банкетку в прихожую на заказ — в магазинах всё однотипное и не подходило по размеру. Здесь учли все пожелания: подобрали ткань, сделали нужную высоту и доставили в срок. Теперь прихожая выглядит законченной и уютной».",
      rating: 5,
      borderColor: "border-pink-400",
      avatarColor: "from-pink-100 to-rose-200",
      avatarInitial: "А",
    },
    {
      author: "Никита Р., талгар",
      text: "«Решил обновить интерьер спальни и заказал изготовление пуфов. Помогли выбрать ткань под шторы, сделали аккуратно, без перекосов. Очень понравилось, что всё выглядело именно как на 3D-визуализации. Спасибо за внимательность к деталям!»",
      rating: 5,
      borderColor: "border-blue-400",
      avatarColor: "from-blue-100 to-cyan-200",
      avatarInitial: "Н",
    },
    {
      author: "Ирина Т., Шымкент",
      text: "«Нужен был компактный пуф для комнаты — хотелось, чтобы и сидеть удобно, и вещи было куда убрать. Сделали аккуратно, без задержек, получилось даже лучше, чем представляла. Теперь это моя любимая деталь в интерьере».",
      rating: 5,
      borderColor: "border-purple-400",
      avatarColor: "from-purple-100 to-indigo-200",
      avatarInitial: "И",
    },
  ],
};

// Константы для ContactForm компонента
export const contactFormData: ContactFormData = {
  title: "Оставьте заявку!",
  subtitle: "Бесплатно приедем на измерения и рассчитаем стоимость мягкой мебели на заказ.",
  description: "В 99% случаев предварительный расчёт совпадает с итоговой стоимостью изготовления.",
  nameLabel: "Имя",
  phoneLabel: "Телефон",
  buttonText: "Заказать пуф или банкетку",
  whatsappButton: {
    text: "Написать в WhatsApp",
    href: "https://wa.me/",
  },
};

// Константы для FeaturesCards компонента
export const featuresCardsData: FeaturesCardsData = {
  title: "Пуф и банкетка на заказ: мебель, созданная под ваш стиль и пространство",
  subtitle: "Когда интерьер кажется законченным, но хочется добавить индивидуальности — здесь важны детали. Изготовление пуфов и банкеток под заказ помогает подчеркнуть ваш характер и вкус.",
  items: [
    {
      title: "На заказ — значит создано именно для вас",
      text: "Каждая деталь создаётся под размеры и ритм жизни клиента. Мы не копируем шаблоны, а продумываем всё до мелочей. Банкетка на заказ или пуф становятся отражением вашего вкуса.",
      icon: "Target",
      bg: "from-rose-400 to-pink-500",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      title: "Когда дом начинается с того места, где хочется остаться",
      text: "У кровати — мягкий пуф для отдыха, в коридоре — удобная зона с хранением, в гостиной — лёгкий пуф для гостей. Мы подбираем форму и функции под назначение комнаты.",
      icon: "Heart",
      bg: "from-blue-400 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Ткань, с которой начинается спокойствие",
      text: "Каждый материал по-своему передаёт атмосферу. Велюр даёт тепло, рогожка хранит уютную шероховатость, а кожа даёт уверенность в лёгкости при уборке.",
      icon: "Layers",
      bg: "from-purple-400 to-indigo-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
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
 
