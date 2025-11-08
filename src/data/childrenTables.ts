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
  ctaButton?: {
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
  title: "Детские столы на заказ в Алматы. Ребёнку неудобно за взрослым столом?",
  subtitle: " ",
  highlight: "Сделаем удобный и безопасный под него.",
  benefits: [
    {
      icon: "Tag",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "от 30 000 тг",
    },
    {
      icon: "Palette",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Индивидуальный дизайн-проект",
    },
    {
      icon: "ShieldCheck",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Гарантия до 12 месяцев",
    },
    {
      icon: "Phone",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Бесплатный выезд на замер",
    },
  ],
  buttonText: "Рассчитать стоимость",
  buttonHref: "#calculator",
  imageSrc: "/images/home/children-tables.webp",
};

// Константы для Services компонента
export const servicesData: ServicesData = {
  title: "О нас",
  subtitle: "С 2011 года мы изготавливаем детскую мебель на заказ, которая сочетает комфорт, безопасность и стиль. Каждое изделие создаётся под рост, интерьер и привычки ребёнка — будь то письменный стол для школьника или творческое место для малыша. Мы продумываем всё до мелочей: материалы, фурнитуру и эргономику, чтобы ребёнку было удобно, а вам спокойно.",
};
 
export const servicesData2: ServicesData = {
  title: "Что мы изготавливаем на заказ?",
  items: [
    { name: "Детский стол для творчества" },
    { name: "Детский стол компьютерный" },
    { name: "Детский стол комбинированный" },
    { name: "Детский стол с тумбой" },
  ],
};

// Константы для WhyUs компонента
export const whyUsData: WhyUsData = {
  title: "Почему выбирают нас",
  subtitle: " ",
  advantages: [
    {
      title: "Опыт, которому доверяют родители",
      text: "С 2014 года создаём детские столы на заказ под рост и привычки. Знаем все нюансы эргономики и безопасности.",
    },
    {
      title: "Индивидуальный дизайн под ребёнка",
      text: "Пишем проект с учётом роста, освещения и стиля комнаты. Наши письменные места для школьников на заказ — уникальны.",
    },
    {
      title: "20+ моделей на выбор",
      text: "Классика, сканди, минимализм — выберите свой стиль. Все детали — цвет, ящики, полки — подбираем вместе.",
    },
    {
      title: "Бесплатный замер и 3D-дизайн",
      text: "До договора делаем выезд, визуализацию и расчёт. Вы видите будущее рабочее место и итоговую цену заранее.",
    },
    {
      title: "12 месяцев гарантии на мебель",
      text: "Каждый стол для школьника на заказ защищён договором. Отвечаем за качество и долговечность.",
    },
    {
      title: "Безопасные материалы и аккуратная сборка",
      text: "Только сертифицированные эко-материалы без запаха. Монтаж аккуратный — без пыли и мусора.",
    },
  ],
  ctaButton: {
    text: "Заказать детский стол",
    href: "#form",
  },
};

// Константы для HowItWorks компонента
export const howItWorksData: HowItWorksData = {
  title: "Как проходит изготовление мебели для детской на заказ?",
  subtitle: "Создайте пространство, где всё продумано под вашего ребёнка.",
  gridCols: 2,
  steps: [
    {
      step: "1",
      title: "Шаг 1. Оставляете заявку — и мы берём всё на себя",
      text: "Оставьте заявку или позвоните. Менеджер уточнит детали, подберёт материалы и согласует время визита.",
      icon: "Phone",
      bg: "from-rose-400 to-pink-500",
    },
    {
      step: "2",
      title: "Шаг 2. Замер и создание дизайн-проекта",
      text: "Специалист приедет с образцами, сделает точные замеры и предложит планировку. Вы получите 3D-проект с цветами и расположением мебели.",
      icon: "Users",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      step: "3",
      title: "Шаг 3. Договор и производство",
      text: "После согласования подписываем договор и запускаем изготовление. Каждый этап контролирует менеджер — от цеха до готовности.",
      icon: "FileText",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      step: "4",
      title: "Шаг 4. Доставка, сборка и гарантия",
      text: "Мебель доставляем в упаковке, аккуратно собираем и проверяем. После установки выдаём акт приёмки и гарантию качества.",
      icon: "Truck",
      bg: "from-teal-400 to-cyan-500",
    },
  ],
  ctaButton: {
    text: "Оставить заявку на проект",
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
  title: "Преимущества наших детских столов",
  subtitle: "",
  items: [
    {
      title: "Безопасность для детей",
      text: "Без острых углов и выступов. Все поверхности гладкие, фурнитура безопасная. Можно не переживать, когда ребёнок играет рядом.",
      icon: "ShieldCheck",
      bg: "from-rose-400 to-pink-500",
    },
    {
      title: "Прочная столешница",
      text: "Выдерживает ежедневные занятия и нагрузку. Не боится фломастеров, красок и воды.",
      icon: "Shield",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      title: "Устойчивость без шаткости",
      text: "Широкие ножки и усиленные крепления держат стол надёжно. Даже при активном использовании он не шатается.",
      icon: "CheckCircle",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      title: "Удобное хранение",
      text: "Вместительные ящики и полки помогают поддерживать порядок. Всё нужное всегда под рукой.",
      icon: "Package",
      bg: "from-teal-400 to-cyan-500",
    },
    {
      title: "Тихие механизмы",
      text: "Ящики открываются плавно и бесшумно. Никаких скрипов — комфорт даже вечером.",
      icon: "Settings",
      bg: "from-amber-400 to-yellow-500",
    },
    {
      title: "Лёгкий уход",
      text: "Поверхность гладкая и устойчивая к загрязнениям. Любые следы легко стереть салфеткой.",
      icon: "Droplet",
      bg: "from-green-400 to-emerald-500",
    },
    {
      title: "Продуманные детали",
      text: "Отверстие под розетку — удобно для лампы и зарядки. Шнуры не мешают и не портят вид комнаты.",
      icon: "Lightbulb",
      bg: "from-indigo-400 to-blue-500",
    },
    {
      title: "Универсальный дизайн",
      text: "Лаконичный стиль подходит под любой интерьер. Стол впишется в детскую и будет актуален годами.",
      icon: "Palette",
      bg: "from-pink-400 to-rose-500",
    },
  ],
};

// Константы для ReUsableTable компонента
export const reUsableTableData: ReUsableTableData = {
  title: "Чем мы отличаемся от других мебельных компаний",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "ourCompany", header: "Мы" },
      { key: "otherCompanies", header: "Другие компании" },
    ],
    rows: [
      {
        criterion: "Подбор материалов",
        ourCompany: "Предлагаем образцы фасадов, столов и тканей на замере",
        otherCompanies: "",
      },
      {
        criterion: "Контроль на всех этапах",
        ourCompany: "Менеджер сопровождает заказ от проекта до установки мебели в детской",
        otherCompanies: "",
      },
      {
        criterion: "Фурнитура и комплектующие",
        ourCompany: "Используем качественные безопасные крепления и направляющие",
        otherCompanies: "",
      },
      {
        criterion: "Сборка и монтаж",
        ourCompany: "Опытные мастера, аккуратная установка без мусора",
        otherCompanies: "",
      },
      {
        criterion: "Послепродажное обслуживание",
        ourCompany: "Всегда на связи, помогаем при мелких доработках или регулировке",
        otherCompanies: "",
      },
    ],
  },
};
 
export const reUsableTableData2: ReUsableTableData = {
  title: "Цены на детские столы в Алматы",
  subtitle: "",
  table: {
    columns: [
      { key: "type", header: "Вид стола" },
      { key: "description", header: "Описание" },
      { key: "price", header: "Цена от (тг)" },
    ],
    rows: [
      {
        type: "Для творчества",
        description: "Лёгкий и прочный стол с широкой поверхностью для рисования и лепки. Идеален для дошкольников и младших школьников.",
        price: "30 000 тг",
      },
      {
        type: "Компьютерный",
        description: "Продуманное место для ноутбука и техники. Эргономичный дизайн, безопасная фурнитура и удобное расположение проводов.",
        price: "40 000 тг",
      },
      {
        type: "Комбинированный",
        description: "Универсальное решение: зона для учёбы и хранения. Полки, ящики и надстройка — всё под рукой.",
        price: "45 000 тг",
      },
      {
        type: "С тумбой",
        description: "Практичная модель для школьников. Вместительная тумба для учебников и канцелярии, устойчивая конструкция.",
        price: "42 000 тг",
      },
    ],
  },
  additionalText: "Хватит мириться с неудобством — закажите детский стол, идеально подходящий вашему ребёнку.",
  ctaButton: {
    text: "Рассчитать стоимость",
    href: "#calculator",
  },
};
 
export const reUsableTableData3: ReUsableTableData = {
  title: "Как выбрать высоту детского стола",
  subtitle: "Правильная высота стола — основа здоровой осанки и комфорта детей. Подбирайте мебель не по возрасту, а по росту — ведь дети растут по-разному, и разница в несколько сантиметров уже влияет на посадку и осанку.",
  table: {
    columns: [
      { key: "height", header: "Рост ребёнка (см)" },
      { key: "tableHeight", header: "Оптимальная высота (см)" },
    ],
    rows: [
      {
        height: "100–115",
        tableHeight: "46",
      },
      {
        height: "115–130",
        tableHeight: "52",
      },
      {
        height: "130–145",
        tableHeight: "58",
      },
      {
        height: "145–160",
        tableHeight: "64",
      },
      {
        height: "160–175",
        tableHeight: "70",
      },
    ],
  },
  additionalText: "Комфорт начинается с точного подбора.",
  ctaButton: {
    text: "Заказать стол по росту ребёнка",
    href: "#form",
  },
};
 
export const reUsableTableData4: ReUsableTableData = {
  title: "Материалы, из которых мы изготавливаем детские столы",
  subtitle: "Для детских столов на заказ мы используем только сертифицированные материалы, безопасные для ребёнка и рассчитанные на ежедневное использование.",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "description", header: "Описание" },
    ],
    rows: [
      {
        criterion: "Столешница из ЛДСП и МДФ",
        description: "Прочные и экологичные плиты класса эмиссии E1 — без токсинов и запаха. Поверхность устойчива к влаге, царапинам и краскам.",
      },
      {
        criterion: "Кромка",
        description: "ПВХ или ABS 2 мм защищает края от сколов и делает изделие полностью безопасным для детей.",
      },
      {
        criterion: "Фурнитура",
        description: "Blum, Hettich, Boyard — надёжные механизмы с доводчиками и ограничителями. Ящики открываются плавно и бесшумно.",
      },
      {
        criterion: "Покрытия",
        description: "Безопасные лакокрасочные составы без запаха. Стойкие к истиранию и лёгкие в уходе.",
      },
      {
        criterion: "Дополнительные элементы",
        description: "При желании добавляем надстройки, тумбы, отверстие под розетку и полки для хранения.",
      },
      {
        criterion: "Подбор материалов",
        description: "При замере мастер показывает образцы и помогает выбрать цвет, фактуру и тип покрытия под интерьер детской.",
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
  subtitle: "Рассчитайте стоимость своего комода всего за 5 шагов — быстро, удобно и без ожидания.",
  materials: [
    { value: "ldsp", label: "ЛДСП" },
    { value: "acrylic_mdf", label: "Акриловый МДФ" },
    { value: "film_mdf", label: "МДФ с плёнкой" },
    { value: "painted_mdf", label: "Окрашенный МДФ" },
    { value: "veneer_mdf", label: "Шпонированный МДФ" },
  ],
  hardwareOptions: [
    { value: "boyard", label: "Стандарт (Boyard)" },
    { value: "blum", label: "Премиум-класс (Blum)" },
  ],
  configurations: [
    { value: "with_drawers", label: "С выдвижными ящиками" },
    { value: "without_drawers", label: "Без ящиков" },
  ],
  buttonText: "Хочу узнать",
  additionalText: "Укажите параметры ниже, чтобы получить предварительный расчёт прямо сейчас.",
  contactFields: {
    name: "Имя",
    phone: "Телефон",
  },
  dimensionsLabels: {
    length: "Ширина (в см)",
    depth: "Глубина (в см)",
    height: "Высота комода (в см)",
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
      author: "Айдос К., Алматы",
      text: "«Долго не мог найти подходящий детский стол на заказ — всё либо неудобное, либо не подходило по размеру. Здесь сразу предложили проект под рост сына и показали 3D-дизайн. Столик получился удобный, красивый и прочный. Спасибо за внимательное отношение и честность».",
      rating: 5,
      borderColor: "border-pink-400",
      avatarColor: "from-pink-100 to-rose-200",
      avatarInitial: "А",
    },
    {
      author: "Сергей Л., Шымкент",
      text: "«Заказывали письменный стол для школьника на заказ — в магазине ничего похожего не нашли. Ребёнок высокий, стандартные модели низкие. Мастер всё замерил, подобрал материалы и собрал без единой задержки. Теперь сын делает уроки с удовольствием, а я спокоен за его осанку».",
      rating: 5,
      borderColor: "border-blue-400",
      avatarColor: "from-blue-100 to-cyan-200",
      avatarInitial: "С",
    },
    {
      author: "Айгуль Т., Астана",
      text: "«У нас двое детей и мало места, поэтому решили сделать рабочее место для двоих детей на заказ. Ребята предложили отличный вариант с двумя рабочими зонами и общими полками. Всё аккуратно, безопасно и очень удобно. Спасибо, что учли каждую мелочь».",
      rating: 5,
      borderColor: "border-purple-400",
      avatarColor: "from-purple-100 to-indigo-200",
      avatarInitial: "А",
    },
  ],
  ctaButton: {
    text: "Смотреть ещё отзывы",
    href: "#reviews",
  },
};

// Константы для ContactForm компонента
export const contactFormData: ContactFormData = {
  title: "Оставьте заявку",
  subtitle: "Хотите узнать, какое рабочее место подойдёт вашему ребёнку?",
  description: "Оставьте заявку, и мастер бесплатно подберёт оптимальную модель и рассчитает стоимость детского стола на заказ по вашим параметрам.",
  nameLabel: "Имя",
  phoneLabel: "Телефон",
  buttonText: "Заказать стол",
};

// Константы для FeaturesCards компонента
export const featuresCardsData: FeaturesCardsData = {
  title: "Детские столы на заказ в Алматы — под рост, интерьер и характер вашего ребёнка",
  items: [
    {
      title: "Почему детские столы на заказ лучше готовых решений",
      text: "Типовые модели часто неудобны и быстро становятся малы. Заказной стол адаптирован под ребёнка и пространство, где он живёт. Вы сами выбираете размеры, материалы, цвет и дополнительные зоны хранения.",
      icon: "Target",
      bg: "from-rose-400 to-pink-500",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      title: "Эргономика, дизайн и безопасность — три опоры хорошего стола",
      text: "Мы проектируем письменную поверхность на заказ так, чтобы ребёнку было удобно сидеть и двигаться. Скруглённые углы, регулируемая высота и правильное освещение создают комфортную зону для учёбы. Всё продумано до мелочей — от формы ножек до покрытия столешницы.",
      icon: "CheckCircle",
      bg: "from-blue-400 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Письменный стол для школьника на заказ: решение на годы вперёд",
      text: "Когда место для занятий подстроено под ребёнка, он служит дольше и сохраняет интерес к учёбе. Наши модели растут вместе с учеником: можно менять высоту, добавлять полки и модули. Это инвестиция в здоровье и порядок в комнате.",
      icon: "Star",
      bg: "from-purple-400 to-indigo-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Совместное пространство: письменный стол для двоих детей на заказ",
      text: "Для семьи с двумя школьниками мы создаём продуманные двойные столы. Каждый ребёнок получает личное место и удобное разделение пространства. Это экономит место, убирает споры и формирует привычку к самостоятельности.",
      icon: "Users",
      bg: "from-teal-400 to-cyan-500",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
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
 
