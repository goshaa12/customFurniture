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
  wardrobeFormat?: CalculatorOption[];
  facadeFinish?: CalculatorOption[];
  buttonText: string;
  additionalText?: string;
  whatsappButton?: {
    text: string;
    href: string;
  };
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
  title: "Шкафы в спальню на заказ в Алматы ",
  highlight: "за 7 дней",
  subtitle: "Создайте спальню, в которой всё на своём месте. Начните с расчёта шкафа, который идеально впишется в пространство и подчеркнёт ваш стиль.",
  benefits: [
    {
      icon: "Tag",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Стоимость от 100 000 тенге",
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
  imageSrc: "/images/home/bedroom-wardrobes.webp",
};

// Константы для Services компонента
export const servicesData: ServicesData = {
  title: "О нас",
  subtitle: "Мы работаем с 2011 года, создавая мебель на заказ, которая подстраивается под пространство, а не наоборот. Мы ценим комфорт и надёжность, которые чувствуются каждый день. Главный акцент — на удобстве, точности и долговечности.",
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
  title: "Наши преимущества в изготовлении шкафов на заказ",
  subtitle: " ",
  advantages: [
    {
      title: "10 лет создаём комфорт и порядок в спальнях",
      text: "С 2011 года мы проектируем и устанавливаем шкафы купе на заказ в спальню — удобные, продуманные и долговечные. Каждый проект создаётся под конкретное пространство, чтобы интерьер выглядел гармонично.",
    },
    {
      title: "Шкаф, который идеально впишется в вашу спальню",
      text: "Забудьте о стандартных решениях — вы выбираете форму, глубину, количество полок и дверей. Мы разрабатываем встроенный или угловой шкаф под ваш стиль, делая хранение красивым и функциональным.",
    },
    {
      title: "3D-проект бесплатно — всё видно заранее",
      text: "Перед производством вы увидите шкаф в объёме и сможете внести правки. Замер, проект и консультация ничего не стоят — вы избегаете ошибок и получаете точный результат.",
    },
    {
      title: "Гарантия уверенности и спокойствия",
      text: "Если что-то случится, мы быстро исправим. 12 месяцев гарантии покрывают все нюансы сборки и механики, чтобы вы наслаждались порядком, а не переживали о поломках.",
    },
    {
      title: "Честность на каждом шаге",
      text: "Цена фиксируется в договоре до начала работ — без «мелкого шрифта» и внезапных доплат. Мы ценим доверие и строим работу прозрачно, чтобы вы чувствовали уверенность в каждом этапе.",
    },
    {
      title: "Материалы, которые вдохновляют",
      text: "Древесные плиты, шпон, стекло и зеркала подбираются по вашему вкусу и бюджету. Все материалы экологичны, а сборка — аккуратная и чистая: шкаф устанавливается за день и сразу готов к использованию.",
    },
  ],
  ctaButton: {
    text: "Заказать мебель для детской",
    href: "#form",
  },
};

// Константы для HowItWorks компонента
export const howItWorksData: HowItWorksData = {
  title: "Этапы изготовления шкафа на заказ",
  subtitle: "Создайте шкаф, который идеально впишется в вашу спальню и сделает пространство гармоничным.",
  gridCols: 2,
  steps: [
    {
      step: "1",
      title: "Заявка и согласование выезда",
      text: "Вы оставляете заявку онлайн или по телефону — мы уточняем детали и назначаем удобное время для приезда замерщика.",
      icon: "Phone",
      bg: "from-rose-400 to-pink-500",
    },
    {
      step: "2",
      title: "Замер и разработка 3D-проекта",
      text: "Мастер делает замер, затем создаёт детальный 3D-проект будущего шкафа, чтобы вы сразу увидели результат.",
      icon: "Users",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      step: "3",
      title: "Договор и изготовление",
      text: "После утверждения проекта фиксируем цену и материалы в договоре. Производство запускается сразу, без задержек и переплат.",
      icon: "FileText",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      step: "4",
      title: "Доставка, сборка и передача с гарантией",
      text: "Шкаф доставляется, собирается и устанавливается на месте. Мы оформляем акт приёма и выдаём гарантию для вашего спокойствия.",
      icon: "Truck",
      bg: "from-teal-400 to-cyan-500",
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
  title: "Шкаф для спальни на заказ — когда важен результат без разочарований",
  subtitle: "Выбирая зеркальный шкаф купе в спальню, хочется, чтобы он выглядел стильно. Но на деле часто всё иначе — перекошенные двери, громкие направляющие, недочёты после сборки. Мы работаем иначе — сравните сами!",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "ourCompany", header: "Мы" },
      { key: "otherCompanies", header: "Другие компании" },
    ],
    rows: [
      {
        criterion: "Подбор дизайна и материалов",
        ourCompany: "Привозим образцы фасадов, ручек и оттенков зеркал прямо на замер. Можно потрогать, сравнить и сразу выбрать то, что подходит именно вашей спальне.",
        otherCompanies: "Предлагают смотреть фото на сайте — итог часто не совпадает с ожиданием.",
      },
      {
        criterion: "Ведение заказа",
        ourCompany: "Менеджер остаётся с вами от первого звонка до финальной установки. Всё согласуется пошагово — без путаницы и «исчезнувших исполнителей».",
        otherCompanies: "После оплаты связь теряется: приходится дозваниваться и переделывать за свой счёт.",
      },
      {
        criterion: "Фурнитура и механика",
        ourCompany: "Используем фурнитуру премиум-класс — плавное скольжение, надёжные доводчики и тихие направляющие.",
        otherCompanies: "Устанавливают дешёвые аналоги — ящики заедают, двери скрипят уже через месяц.",
      },
      {
        criterion: "Монтаж и чистота",
        ourCompany: "Сборка за 1 день, без пыли и мусора. Мастера выравнивают шкаф по уровню и сразу готовы к проверке результата.",
        otherCompanies: "Привлекают временных сборщиков, часто оставляют следы и не проверяют геометрию.",
      },
      {
        criterion: "Гарантия и поддержка",
        ourCompany: "12 месяцев официальной гарантии + постгарантийная помощь: регулировка дверей, замена мелких деталей, консультации.",
        otherCompanies: "После установки — никаких гарантий и ответственности, даже если что-то пошло не так.",
      },
      {
        criterion: "Стоимость",
        ourCompany: "Цены фиксируются заранее, без скрытых пунктов. Можно заказать шкаф в спальню недорого, выбрав оптимальные материалы и фурнитуру.",
        otherCompanies: "Итоговая сумма растёт по мере выполнения — «доплаты за то, что не обсуждали».",
      },
    ],
  },
};
 
export const reUsableTableData2: ReUsableTableData = {
  title: "Цены на шкафы для спальни на заказ",
  subtitle: "Идеальный шкаф не обязательно должен стоить дорого — важно, чтобы он подходил именно вам.\n\n Мы подбираем материалы и фурнитуру под ваш бюджет, сохраняя качество и эстетику.",
  table: {
    columns: [
      { key: "product", header: "Тип шкафа" },
      { key: "description", header: "Описание" },
      { key: "price", header: "Цена от, тенге" },
    ],
    rows: [
      {
        product: "Прямой шкаф-купе",
        description: "Классический вариант с раздвижными дверями, подходит для любой спальни.",
        price: "от 100 000",
      },
      {
        product: "Угловой шкаф",
        description: "Компактное решение, идеально использует пространство даже в небольшой комнате.",
        price: "от 110 000",
      },
      {
        product: "Встроенный шкаф",
        description: "Устанавливается в нишу и выглядит как часть стены — без зазоров и выступов.",
        price: "от 120 000",
      },
      {
        product: "Шкаф с зеркальными фасадами",
        description: "Добавляет света и визуально расширяет спальню, выглядит современно и легко.",
        price: "от 130 000",
      },
      {
        product: "Индивидуальный проект",
        description: "Разработка шкафа под ваш стиль, материалы и планировку комнаты.",
        price: "от 150 000",
      },
    ],
  },
  additionalText: "Выберите вариант, который подходит вам, и получите бесплатную консультацию.",
  ctaButton: {
    text: "Рассчитать стоимость",
    href: "#calculator",
  },
};
 
export const reUsableTableData3: ReUsableTableData = {
  title: "Материалы, которые мы используем",
  subtitle: "Для создания шкафа мы подбираем только проверенные и долговечные материалы.",
  table: {
    columns: [
      { key: "criterion", header: "Материал / Элемент" },
      { key: "description", header: "Описание" },
    ],
    rows: [
      {
        criterion: "МДФ",
        description: "Идеален для шкафов с нестандартной геометрией. Поверхность легко окрашивается, покрывается плёнкой или шпоном, не коробится и не трескается.",
      },
      {
        criterion: "ЛДСП Egger / Kronospan",
        description: "Практичный вариант для современных шкафов. Плотные панели устойчивы к влаге, сколам и выгоранию, имеют десятки текстур — от дуба до бетона.",
      },
      {
        criterion: "Массив дерева (дуб, ясень, орех)",
        description: "Подходит для премиальных шкафов. Натуральная древесина тёплая на ощупь, создаёт эффект глубины и благородства, служит десятилетиями.",
      },
      {
        criterion: "Фурнитура Blum / Hettich / Boyard",
        description: "Плавное открывание и тихое закрытие. Работают стабильно даже при частом использовании, сохраняя лёгкий ход.",
      },
      {
        criterion: "Декор и вставки",
        description: "Используем стекло, акрил и металл для акцентных элементов. Они придают шкафу лёгкость, объём и современный вид.",
      },
    ],
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
  title: "Как выбрать идеальный шкаф в спальню?",
  subtitle: "",
  sections: [
    {
      title: "Купе или классика — выбираем с умом и стилем",
      items: [
        "Если хотите лёгкости и порядка — шкаф купе на заказ в спальню станет лучшим решением. Его двери скользят плавно, не требуют места для открывания и делают интерьер визуально аккуратным. Для любителей традиций подойдёт вариант с распашными фасадами — тёплый, уютный и домашний.",
      ],
    },
    {
      title: "Зеркальные фасады — игра света и пространства",
      items: [
        "Зеркальный шкаф купе в спальне добавляет света, отражает интерьер и делает комнату глубже. Он придаёт дизайну лёгкость и современный характер, особенно если выбрать встроенную модель с глянцевыми панелями. Зеркала наполняют помещение воздухом и расширяют границы восприятия. Такое решение выглядит дорого, но остаётся доступным по цене.",
      ],
    },
    {
      title: "Встроенный, угловой или корпусный — под ваш ритм жизни",
      items: [
        "Для компактных комнат идеально подойдёт встроенный шкаф купе в спальню — без зазоров и лишних деталей. Если нужно больше места, закажите угловой шкаф в спальню — он рационально использует каждый сантиметр. Корпусная модель подойдёт тем, кто любит менять интерьер и обстановку комнаты.",
      ],
    },
  ],
};

// Константы для Calculator компонента
export const calculatorData: CalculatorData = {
  title: "Калькулятор стоимости шкафа",
  subtitle: "Ответьте на 5 простых вопросов, и мы сразу подготовим персональный расчёт под ваш интерьер и бюджет для заказа шкафа.",
  wardrobeFormat: [
    { value: "swinging_doors", label: "С распашными дверцами" },
    { value: "no_facades", label: "Без фасадов" },
    { value: "combined", label: "Комбинированный вариант" },
  ],
  facadeFinish: [
    { value: "ldsp", label: "Ламинированное ДСП" },
    { value: "glossy_mdf", label: "Глянцевый МДФ" },
    { value: "film_coating", label: "Плёночное покрытие" },
    { value: "painted_mdf", label: "Окрашенный МДФ" },
    { value: "wood_veneer", label: "Шпон натурального дерева" },
  ],
  hardwareOptions: [
    { value: "boyard", label: "Стандарт (Boyard)" },
    { value: "blum", label: "Премиум-класс (Blum)" },
  ],
  buttonText: "Хочу узнать стоимость",
  additionalText: "Узнайте, сколько будет стоить шкаф вашей мечты — быстро, точно и без скрытых платежей.",
  whatsappButton: {
    text: "Написать в WhatsApp",
    href: "https://wa.me/77000000000",
  },
  contactFields: {
    name: "Имя",
    phone: "Телефон",
  },
  dimensionsLabels: {
    width: "Ширина (в см)",
    depth: "Глубина (в см)",
    height: "Высота (в см)",
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
      author: "Ольга Н., Алматы",
      text: "«Нужен был шкаф купе в спальню на заказ — чтобы поместилось всё, но без громоздкости. Дизайнер предложил вариант со светлыми фасадами и зеркалом, и теперь комната выглядит просторнее. Всё сделали точно по срокам и без лишней суеты».",
      rating: 5,
      borderColor: "border-pink-400",
      avatarColor: "from-pink-100 to-rose-200",
      avatarInitial: "О",
    },
    {
      author: "Диана Р., Алматы",
      text: "«Искала, где можно заказать шкаф без нервов и беготни. Здесь всё сделали спокойно — от замера до монтажа. Получился стильный шкаф, будто из журнала, но по нормальной цене».",
      rating: 5,
      borderColor: "border-blue-400",
      avatarColor: "from-blue-100 to-cyan-200",
      avatarInitial: "Д",
    },
    {
      author: "Марат К., Талдыкорган",
      text: "«Давно хотел шкаф купе, но боялся переплатить. Менеджер сразу озвучил финальную цену и помог подобрать».",
      rating: 5,
      borderColor: "border-purple-400",
      avatarColor: "from-purple-100 to-indigo-200",
      avatarInitial: "М",
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
  subtitle: "Не знаете, с чего начать? Просто оставьте заявку — это займёт меньше минуты.",
  description: "Наш специалист свяжется с вами, подберёт оптимальное решение, материалы и стиль шкафа под ваш интерьер.\n\nСделайте первый шаг к шкафу, о котором мечтали — остальное мы возьмём на себя.",
  nameLabel: "Имя",
  phoneLabel: "Телефон",
  buttonText: "Рассчитать стоимость",
};

// Константы для FeaturesCards компонента
export const featuresCardsData: FeaturesCardsData = {
  title: "Шкаф купе в спальню на заказ — стиль, комфорт и порядок без компромиссов",
  subtitle: "Выбирая шкаф купе в спальню на заказ, важно найти не просто мебель, а решение, которое создаёт уют, экономит место и радует глаз каждый день. Мы проектируем и производим шкафы, которые подстраиваются под ваш ритм жизни, размеры комнаты и стиль интерьера.",
  items: [
    {
      title: "Шкаф, который отражает ваш характер",
      text: "Каждый проект — это не шаблон, а продолжение вашего дома. Хотите лаконичные фасады без ручек, матовое стекло или тёплую фактуру дерева? Мы подберём всё под вас, от фурнитуры до оттенков. Заказать встроенный шкаф в спальню можно с любыми деталями — от зеркал до подсветки.",
      icon: "Target",
      bg: "from-rose-400 to-pink-500",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      title: "Пространство, где всё продумано",
      text: "Мы проектируем шкафы, в которых каждая полка, штанга и ящик на своём месте. Даже в небольшой спальне найдётся место для всего — от постельного белья до верхней одежды. Встроенные решения помогают использовать каждый угол, а фасады делают комнату визуально просторнее.",
      icon: "CheckCircle",
      bg: "from-blue-400 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Качество, которое чувствуется каждый день",
      text: "Используем надёжные материалы и механизмы: направляющие Blum, петли Hettich, фасады Egger. Двери скользят плавно, ящики не заедают, а внешний вид остаётся как новый годами. Даже шкаф купе в спальню на заказ недорого у нас не уступает по качеству премиум-моделям.",
      icon: "Star",
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

// Константы для PaymentMethods компонента
export const paymentMethodsData: PaymentMethodsData = {
  title: "Преимущества заказа шкафа в спальню по индивидуальным размерам",
  subtitle: "",
  items: [
    {
      title: "Идеальная подгонка под планировку",
      description: "Шкаф создаётся по точным замерам комнаты, с учётом ниш и углов. Он плотно встаёт в пространство без зазоров и перекосов. Всё выглядит аккуратно и логично, будто шкаф был частью спальни с самого начала.",
      icon: "Target",
      bg: "from-blue-400 to-blue-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Индивидуальный дизайн и стиль",
      description: "Шкаф купе в спальню на заказ — как костюм, сшитый по фигуре: садится идеально и подчёркивает характер пространства. Его линии продолжают архитектуру комнаты, а фактура фасадов перекликается с тоном стен.",
      icon: "Palette",
      bg: "from-purple-400 to-purple-600",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Продуманная функциональность",
      description: "Внутреннее наполнение проектируется под ваши задачи: полки, ящики, ниши, подсветка. Всё размещается удобно и рационально, чтобы хранение не превращалось в хаос. Такой шкаф экономит место и время каждый день.",
      icon: "LayoutGrid",
      bg: "from-emerald-400 to-emerald-600",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      title: "Надёжные материалы и фурнитура",
      description: "Мы используем ЛДСП, МДФ, шпон и фурнитуру Blum, Hettich, Boyard. Механизмы работают мягко, двери не скрипят, фасады сохраняют вид годами. Это не просто шкаф — это вещь, сделанная на совесть.",
      icon: "ShieldCheck",
      bg: "from-amber-400 to-amber-600",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      title: "Простая оценка стоимости",
      description: "Заполните короткую заявку — мы рассчитаем цену шкафа с точностью до сантиметра. Доставка и сборка включены, без скрытых платежей. Всё быстро, честно и удобно для вас.",
      icon: "Calculator",
      bg: "from-rose-400 to-pink-600",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
  ],
};
 
