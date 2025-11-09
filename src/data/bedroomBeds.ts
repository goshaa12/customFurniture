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
  CreditCard,
  Banknote,
  CreditCardIcon,
  Wallet,
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
  CreditCard,
  Banknote,
  CreditCardIcon,
  Wallet,
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

// Типы данных для PaymentMethods компонента

export interface PaymentMethodItem {
  title: string;
  description: string;
  icon: string; // название иконки из @lucide/astro
  bg: string;
  iconBg: string;
  iconColor: string;
}

export interface PaymentMethodsData {
  title: string;
  subtitle?: string;
  items: PaymentMethodItem[];
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
  title: "Кровати на заказ в Алматы",
  highlight: "за 7-14 дней",
  subtitle: "Создаём кровати на заказ — с учётом вашего интерьера и пожеланий. Узнайте стоимость кровати, идеально подходящей именно вам!",
  benefits: [
    {
      icon: "Tag",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Стоимость от 80 000 тг",
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
      text: "Гарантия до 24 месяцев",
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
  imageSrc: "/images/home/bedroom-beds.webp",
};

// Константы для Services компонента
export const servicesData: ServicesData = {
  title: "О нас",
  subtitle: "С 2011 года создаются кровати на заказ, в которых продумана каждая деталь — от формы до ощущений комфорта. Опыт и собственное производство в Алматы позволяют точно воплотить идею клиента без лишних компромиссов.\n\nКаждый заказ сопровождается поддержкой на всех этапах — от замера до установки. Результат — мебель, дарящая уверенность, спокойствие и гармонию в спальне.",
};
 
export const servicesData2: ServicesData = {
  title: "Что мы изготавливаем на заказ",
  items: [
    { name: "Детские столы" },
    { name: "Детские кровати" },
    { name: "Детские шкафы" },
  ],
};

// Константы для WhyUs компонента
export const whyUsData: WhyUsData = {
  title: "Преимущества",
  subtitle: " ",
  advantages: [
    {
      title: "14 лет опыта в создании идеальных кроватей",
      text: "Изготавливаем кровати с 2011 года — точно по вашим размерам и стилю. Создаём спальни, в которые приятно возвращаться каждый день.",
    },
    {
      title: "Более 20 моделей под любой интерьер",
      text: "Классика, модерн, минимализм и другие стили. Производим кровати на собственной фабрике — контроль качества на каждом этапе.",
    },
    {
      title: "Бесплатные замеры и расчёт до договора",
      text: "Вы ничего не теряете: снимем размеры, сделаем 3D-дизайн и просчитаем стоимость. Всё — до подписания договора и абсолютно бесплатно.",
    },
    {
      title: "Гарантия 12 месяцев",
      text: "Каждое изделие проходит тщательную проверку перед доставкой. Вы полностью защищены от скрытых дефектов и уверены в качестве.",
    },
    {
      title: "Работаем честно и официально",
      text: "Заключаем двухсторонний договор с частными и корпоративными клиентами. Все условия прозрачны, сроки и стоимость — зафиксированы.",
    },
    {
      title: "Эко-материалы и аккуратный монтаж",
      text: "Используем безопасные материалы и чистую установку. Кровать собирается аккуратно и надёжно — без пыли, мусора и лишних хлопот.",
    },
  ],
  ctaButton: {
    text: "Заказать мебель для детской",
    href: "#form",
  },
};

// Константы для HowItWorks компонента
export const howItWorksData: HowItWorksData = {
  title: "Этапы",
  subtitle: "Создайте идеальную кровать под свой интерьер — начните сейчас!",
  gridCols: 2,
  steps: [
    {
      step: "1",
      title: "Шаг 1. Заявка и подбор времени замера",
      text: "Вы оставляете заявку — онлайн или по телефону. Мы сразу связываемся с вами и подбираем удобное время для выезда замерщика.",
      icon: "Phone",
      bg: "from-rose-400 to-pink-500",
    },
    {
      step: "2",
      title: "Шаг 2. Замер и создание проекта",
      text: "Специалист точно снимает размеры помещения, вы обсуждаете детали, и на основе ваших пожеланий мы разрабатываем 3D-дизайн.",
      icon: "Users",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      step: "3",
      title: "Шаг 3. Согласование и производство",
      text: "После утверждения проекта оформляется договор. Изготовление запускается на современном оборудовании с контролем качества.",
      icon: "FileText",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      step: "4",
      title: "Шаг 4. Доставка, сборка и гарантия",
      text: "Готовую кровать аккуратно доставляем, собираем на месте и проверяем установку. После подписания акта вы получаете гарантию на изделие.",
      icon: "Truck",
      bg: "from-teal-400 to-cyan-500",
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
  title: "Сравните, как мы работаем — и почему клиенты возвращаются к нам снова",
  subtitle: "Мы изготавливаем кровати, где всё продумано до мелочей — от формы до отделки. Разница заметна сразу: профессиональная работа выглядит идеально и надолго сохраняет качество.",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "ourCompany", header: "Мы" },
      { key: "otherCompanies", header: "Другие компании" },
    ],
    rows: [
      {
        criterion: "Подбор материалов",
        ourCompany: "Привозим образцы фасадов, панелей и деталей прямо на замер — вы видите и выбираете лично",
        otherCompanies: "Показывают только каталог с фотографиями",
      },
      {
        criterion: "Контроль на всех этапах",
        ourCompany: "Менеджер ведёт заказ от первого замера до финальной установки",
        otherCompanies: "После оплаты — связь прекращается",
      },
      {
        criterion: "Фурнитура и комплектующие",
        ourCompany: "Используем Blum, Hettich, Boyard — надёжная фурнитура, рассчитанная на долгие годы",
        otherCompanies: "Ставят дешёвые аналоги, которые быстро выходят из строя",
      },
      {
        criterion: "Сборка и монтаж",
        ourCompany: "Постоянная команда мастеров, чистая установка за 1 день без пыли и мусора",
        otherCompanies: "Привлекают случайных сборщиков, оставляют беспорядок",
      },
      {
        criterion: "Послепродажное обслуживание",
        ourCompany: "Остаёмся на связи, оперативно решаем любые вопросы и мелкие доработки",
        otherCompanies: "После установки — ответственных не найти",
      },
    ],
  },
};
 
export const reUsableTableData2: ReUsableTableData = {
  title: "Товары",
  subtitle: "Каждая деталь кровати продумана для вашего комфорта и долговечности. Закажите кровать, которая идеально впишется в интерьер и будет радовать вас годами.",
  table: {
    columns: [
      { key: "product", header: "Вид" },
      { key: "description", header: "Описание" },
    ],
    rows: [
      {
        product: "Одноместные, двухместные, полуторные",
        description: "Классические варианты для любого пространства и стиля.",
      },
      {
        product: "Двухъярусные",
        description: "Удобное решение для детской или небольшой спальни.",
      },
      {
        product: "Кровати-чердаки",
        description: "Комбинируют спальное место и функциональную зону под ним.",
      },
      {
        product: "Для подиумов",
        description: "Встраиваются в интерьер, создавая эффект пространства и уюта.",
      },
      {
        product: "Трёхъярусные",
        description: "Компактное решение для больших семей или гостевых комнат.",
      },
      {
        product: "Шкафы-кровати",
        description: "Экономят место, легко складываются в стену или шкаф.",
      },
      {
        product: "Кровати-трансформеры",
        description: "Многофункциональные модели со складным механизмом.",
      },
      {
        product: "С системами хранения",
        description: "Встроенные ящики и ниши для удобного размещения вещей.",
      },
    ],
  },
};
 
export const reUsableTableData3: ReUsableTableData = {
  title: "Цены",
  subtitle: "Вы заслуживаете кровать, которая подходит именно вам — по стилю, размеру и комфорту. Не переплачивайте за стандартные модели: мы изготовим по вашим параметрам и бюджету.",
  table: {
    columns: [
      { key: "product", header: "Услуга" },
      { key: "price", header: "Стоимость" },
    ],
    rows: [
      {
        product: "Изготовление кровати на заказ",
        price: "от 85 000 тг",
      },
      {
        product: "С подъёмным механизмом",
        price: "от 165 000 тг",
      },
      {
        product: "С системами хранения и выдвижными ящиками",
        price: "от 155 000 тг",
      },
      {
        product: "Индивидуальный проект под интерьер",
        price: "от 190 000 тг",
      },
    ],
  },
};
 
export const reUsableTableData4: ReUsableTableData = {
  title: "Материалы, которые мы используем",
  subtitle: "Выбирая мебель для спальни, важно знать, из чего она сделана. Мы используем только проверенные и долговечные материалы.",
  table: {
    columns: [
      { key: "criterion", header: "Материал" },
      { key: "description", header: "Описание" },
    ],
    rows: [
      {
        criterion: "Фанера, ЛДСП, МДФ",
        description: "Качественные материалы E1-класса от Казахстана и Европы. Влагостойкие, прочные, безопасные для семьи.",
      },
      {
        criterion: "Пластик, акрил, шпон",
        description: "Идеальны для изголовий и декора. Не боятся влаги, солнца и царапин.",
      },
      {
        criterion: "Фурнитура",
        description: "Blum, Hettich, Boyard — надёжные механизмы для ящиков, подъёмных оснований и трансформации.",
      },
      {
        criterion: "Ткань и кожа",
        description: "Экокожа, велюр, рогожка — мягкие, износостойкие и приятные на ощупь.",
      },
      {
        criterion: "Стекло и зеркала",
        description: "Закалённое, матовое или тонированное стекло для эффектных акцентов и лёгкости в дизайне.",
      },
    ],
  },
};

// Константы для CustomFurniture компонента
export const customFurnitureData: CustomFurnitureData = {
  title: "Преимущества кровати на заказ",
  subtitle: "",
  sections: [
    {
      title: "Под интерьер без компромиссов",
      items: [
        "Кровать создаётся под особенности вашего пространства — гармонирует с цветами, формами и стилем комнаты.",
      ],
    },
    {
      title: "Любой размер и конфигурация",
      items: [
        "Односпальная или двуспальная, с мягким или жёстким основанием — подбирается под ваши привычки и комфорт.",
      ],
    },
    {
      title: "Материалы и детали на выбор",
      items: [
        "Вы контролируете всё: текстуру, обивку, изголовье и фурнитуру. Реализуем даже самые нестандартные решения.",
      ],
    },
    {
      title: "Дизайн, отражающий вас",
      items: [
        "Каждая кровать — индивидуальный проект, созданный под ваш вкус, образ жизни и представление об идеальном отдыхе.",
      ],
    },
  ],
};

// Константы для Calculator компонента
export const calculatorData: CalculatorData = {
  title: "Калькулятор",
  subtitle: "Рассчитайте стоимость Вашей кровати за 5 шагов",
  furnitureTypes: [
    { value: "with_commode", label: "С комодом" },
    { value: "without_commode", label: "Без комода" },
  ],
  materials: [
    { value: "ldsp", label: "ЛДСП" },
    { value: "acrylic_mdf", label: "Акриловый мдф" },
    { value: "film_mdf", label: "Плёночный мдф" },
    { value: "painted_mdf", label: "Крашеный мдф" },
    { value: "veneer_mdf", label: "Шпон (мдф)" },
  ],
  hardwareOptions: [
    { value: "boyard", label: "Комфорт (Boyard)" },
    { value: "blum", label: "Премиум (Blum)" },
  ],
  buttonText: "Хочу узнать цену",
  additionalText: "Рассчитайте цену и начните оформление прямо сейчас!",
  contactFields: {
    name: "Имя",
    phone: "Телефон",
  },
  dimensionsLabels: {
    length: "Длина (сколько метров общая длина?)",
    height: "Высота (укажите нужную)",
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
      author: "Екатерина К., Алматы",
      text: "«Долго не могла найти кровать нужного размера — всё в магазинах стандартное. Заказала кровать на заказ, сделали точно под спальню и мои пожелания. Привезли, собрали аккуратно, без шума и суеты. Каждый день радуюсь, что выбрала именно эту компанию».",
      rating: 5,
      borderColor: "border-pink-400",
      avatarColor: "from-pink-100 to-rose-200",
      avatarInitial: "Е",
    },
    {
      author: "Айбек Т., Караганда",
      text: "«Хотел кровать с ящиками для хранения, но боялся, что будет громоздко. Специалисты предложили вариант с подъёмным механизмом — удобно и красиво. Работают быстро, в срок и очень аккуратно. Отличный сервис для тех, кто ценит порядок и комфорт».",
      rating: 5,
      borderColor: "border-blue-400",
      avatarColor: "from-blue-100 to-cyan-200",
      avatarInitial: "А",
    },
    {
      author: "Алина Р., Шымкент",
      text: "«После ремонта искала кровать, которая идеально впишется в интерьер. Подобрали материал, цвет и форму изголовья — всё получилось стильно. Сделали даже раньше, чем обещали, без лишних звонков. Осталась довольна качеством и вниманием к деталям».",
      rating: 5,
      borderColor: "border-purple-400",
      avatarColor: "from-purple-100 to-indigo-200",
      avatarInitial: "А",
    },
  ],
  ctaButton: {
    text: "Смотреть еще отзывы",
    href: "#reviews",
  },
};

// Константы для ContactForm компонента
export const contactFormData: ContactFormData = {
  title: "Оставить заявку на кровать",
  subtitle: "Не знаете, с чего начать? Просто оставьте заявку!",
  description: "Наш специалист бесплатно проконсультирует и рассчитает точную стоимость.\n\nВесь процесс — под ключ, без лишних забот и хлопот.\n\n\n\nЗаполните форму и получите свою кровать с доставкой без переплат.",
  nameLabel: "Имя",
  phoneLabel: "Телефон",
  buttonText: "Рассчитать стоимость",
};

// Константы для FeaturesCards компонента
export const featuresCardsData: FeaturesCardsData = {
  title: "Кровати на заказ в Алматы: комфорт, стиль и точное соответствие вашим ожиданиям",
  subtitle: "Индивидуально изготовленная кровать — это не просто мебель, а отражение вашего вкуса, привычек и ритма жизни. В отличие от стандартных моделей из магазинов, кровати на заказ в Алматы создаются под конкретное пространство. Вы выбираете материалы, цвета, размеры и детали, а мы воплощаем.",
  items: [
    {
      title: "Ваш стиль — наша основа",
      text: "Когда кровать создаётся по вашему замыслу, она идеально вписывается в интерьер и подчёркивает характер хозяина. Мы подбираем решения в любых стилях — от лаконичного скандинавского до роскошного неоклассического. Каждый элемент продуман до мелочей, чтобы спальня выглядела гармонично.",
      icon: "Target",
      bg: "from-rose-400 to-pink-500",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      title: "Комфорт, который чувствуется каждый день",
      text: "Кровать по индивидуальному заказу — это про удобство, которое ощущается с первого взгляда и прикосновения. Мы используем сертифицированные материалы, надёжную фурнитуру и безопасные покрытия. Всё продумано для того, чтобы сон был крепким, а сама кровать служила безупречно долгие годы.",
      icon: "CheckCircle",
      bg: "from-blue-400 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Кровати по индивидуальному заказу — выгодно и надолго",
      text: "Многие считают, что индивидуальное изготовление дороже готовых моделей, но это не так. Благодаря собственному производству в Алматы мы удерживаем оптимальную цену при высоком качестве. Вы получаете кровать, которая выглядит идеально, служит дольше и создаётся именно под ваши параметры.",
      icon: "Star",
      bg: "from-purple-400 to-indigo-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Пространство, где всё на своём месте",
      text: "Функциональные решения превращают кровать в часть современного умного интерьера. Встроенные ящики, подъёмные механизмы и ниши создают дополнительное и удобное место для хранения. Всё организовано аккуратно и продуманно, чтобы спальня оставалась просторной без лишних предметов.",
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

// Константы для PaymentMethods компонента
export const paymentMethodsData: PaymentMethodsData = {
  title: "Способы оплаты",
  subtitle: "Мы сделали оплату простой и комфортной — выберите то, что удобно именно вам:",
  items: [
    {
      title: "Банковский перевод",
      description: "Быстро и официально, по счёту через любой банк.",
      icon: "CreditCard",
      bg: "from-blue-400 to-blue-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Наличные",
      description: "Можно оплатить в офисе, через терминал или в отделении банка.",
      icon: "Banknote",
      bg: "from-emerald-400 to-emerald-600",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      title: "Перевод на карту",
      description: "Принимаем Kaspi и Halyk, мгновенно и без лишних шагов.",
      icon: "CreditCardIcon",
      bg: "from-amber-400 to-amber-600",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      title: "Электронные кошельки",
      description: "Qiwi и другие проверенные сервисы для лёгких онлайн-платежей.",
      icon: "Wallet",
      bg: "from-purple-400 to-purple-600",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ],
};
 
