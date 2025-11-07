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
  description?: string;
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
    taskDescription?: string;
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
  title: "Сборка и монтаж мебели в Алматы от 5000 тг —",
  highlight: " когда ломать нервы дороже, чем вызвать мастера",
  subtitle: "Избавим вас от шума, пыли и нервов. Оставьте заявку — сборка мебели в Алматы без ожидания!",
  benefits: [
    {
      icon: "Hammer",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Опыт мастеров — 7+ лет. Приезжаем со своими инструментами",
    },
    {
      icon: "CheckCircle",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Диагностика — 0 тг. Платите только за результат",
    },
    {
      icon: "Clock",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Выезд за 60 мин. Работаем по всему Алматы",
    },
    {
      icon: "Percent",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Скидка 15% на каждый следующий час работы",
    },
  ],
  buttonText: "Вызвать мастера на дом",
  buttonHref: "#form",
  imageSrc: "/images/home/furniture-assembly-hero.webp",
};

// Константы для Services компонента
export const servicesData: ServicesData = {
  title: "О компании",
  subtitle: "Более 10 лет опыта в создании мебели на заказ — от уютных кресел до сложных интерьерных решений.\n\nКаждый проект строится на точности, честности и понимании задач клиента. Контроль на всех этапах гарантирует клиентам не только мебель, но и уверенность, что всё будет сделано так, как задумано.",
};
 
export const servicesData2: ServicesData = {
  title: "О нас",
  subtitle: "Мы — команда мастеров, работающих по всему Алматы. Мы помогаем клиентам сохранить время и уверенность в результате. Каждый специалист проходит обучение, работает с профессиональным инструментом и соблюдает стандарты. Наши клиенты ценят нас за:",
  items: [
    { name: "Пунктуальность — выезд мастера в течение часа после заявки." },
    { name: "Гарантию качества — предоставляем официальный документ." },
    { name: "Честные цены — без скрытых пунктов и переплат." },
    { name: "Аккуратность — работаем чисто, оставляя после себя порядок." },
    { name: "Ответственный подход — учитываем пожелания клиента." },
    { name: "Мы ценим доверие, точность и уважение к дому клиента — именно это делает нашу работу профессиональной и человеческой одновременно." },
  ],
};

// Константы для WhyUs компонента
export const whyUsData: WhyUsData = {
  title: "Наши преимущества услуги сборки мебели",
  advantages: [
    {
      title: "20000+ собранных единиц мебели — мы знаем о мебели всё",
      text: "Опытный сборщик мебели знает все типы конструкций — сборка точная.",
    },
    {
      title: "1–3 часа на сборку — без задержек и нареканий",
      text: "Услуги по сборке мебели выполняются так, что через пару часов всё готово.",
    },
    {
      title: "Точность до 1 мм — без перекосов и зазоров",
      text: "Лазерное выравнивание гарантирует установку без перекосов и люфта.",
    },
    {
      title: "15 минут на уборку — и помещение снова сияет чистотой",
      text: "Сборщик мебели убирает всё после работы. Комната остаётся чистой.",
    },
    {
      title: "24/7 на связи — просто позвоните, и помощь уже в пути",
      text: "Менеджер контролирует заказ и отвечает на вопросы в любое время.",
    },
    {
      title: "0 скрытых платежей — без «мелкого шрифта»",
      text: "На сборку мебели цена фиксируется заранее. Оплата по факту сдачи сборки.",
    },
  ],
  ctaButton: {
    text: "Вызвать мастера",
    href: "#form",
  },
};

// Константы для HowItWorks компонента
export const howItWorksData: HowItWorksData = {
  title: "Как проходит процесс сборки?",
  subtitle: "Хватит превращать выходные в стройплощадку — упростите себе жизнь!",
  gridCols: 2,
  steps: [
    {
      step: "1",
      title: "Оставляете заявку",
      text: "Позвоните нам или заполните короткую форму — укажите адрес и удобное время.",
      icon: "Phone",
      bg: "from-rose-400 to-pink-500",
    },
    {
      step: "2",
      title: "Уточняем детали",
      text: "Менеджер перезвонит, чтобы согласовать нюансы и назначить специалиста под задачу.",
      icon: "Users",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      step: "3",
      title: "Приезжает мастер",
      text: "Сборщик прибывает к назначенному часу, со необходимым инструментом и опытом.",
      icon: "Truck",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      step: "4",
      title: "Подготавливает и собирает конструкцию",
      text: "Проверяет комплектность, подгоняет детали, фиксирует всё без перекосов и шума.",
      icon: "Hammer",
      bg: "from-green-400 to-teal-500",
    },
    {
      step: "5",
      title: "Проверяет результат и убирает за собой",
      text: "После завершения всё проверяется, мусор и упаковка вывозятся — комната в порядке.",
      icon: "CheckCircle",
      bg: "from-amber-400 to-orange-500",
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
  title: "Материалы, которые мы используем",
  items: [
    {
      title: "Каркас",
      text: `Натуральное дерево, фанера и ЛДСП — прочные и устойчивые к нагрузкам конструкции. Они держат форму годами и не теряют надёжности даже при ежедневной эксплуатации.`,
      icon: "Box",
      bg: "from-rose-400 to-pink-500",
    },
    {
      title: "Наполнители",
      text: `Пенополиуретан высокой плотности, независимые пружинные блоки, холлофайбер, синтепух, латекс. Материалы безопасны, не вызывают аллергию и сохраняют упругость без проседания.`,
      icon: "Package",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      title: "Ткань",
      text: `Велюр, рогожка, микровелюр, шенилл, экокожа, замша — всё проходит тест на износостойкость. Ткани не боятся пятен и влаги, легко чистятся и долго сохраняют насыщенность цвета.`,
      icon: "Layers",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      title: "Механизмы трансформации",
      text: `Еврокнижка, дельфин, тик-так, пантограф, аккордеон — надёжные системы, рассчитанные на ежедневное использование. Раскладываются плавно, без скрипов и усилий.`,
      icon: "Cog",
      bg: "from-green-400 to-emerald-500",
    },
    {
      title: "Фурнитура",
      text: `Металлические ножки, скрытые опоры, подлокотники с нишами и встроенные USB-порты. Можно добавить ящики для белья или выбрать регулируемые подголовники.`,
      icon: "Settings",
      bg: "from-amber-400 to-orange-500",
    },
  ],
};

// Константы для ReUsableTable компонента
export const reUsableTableData: ReUsableTableData = {
  title: "Услуги по сборке мебели",
  subtitle: "Пытаетесь собрать мебель сами — а детали не сходятся, полки перекошены, и на всё уходит целый день? Знакомо? Мы берём на себя сборку, установку и разборку мебели любой сложности!",
  table: {
    columns: [
      { key: "service", header: "Услуга" },
      { key: "description", header: "Описание" },
    ],
    rows: [
      {
        service: "Сборка корпусной мебели",
        description: "Опытный сборщик мебели быстро соберёт шкафы, тумбы и гардеробы с точной подгонкой и прочными креплениями.",
      },
      {
        service: "Сборка мягкой мебели",
        description: "Аккуратная сборка диванов и кресел без перекосов и скрипов. Всё выглядит как в салоне.",
      },
      {
        service: "Сборка мебели для спальни",
        description: "Сборщик мебели соберёт кровать, комод и тумбы с гарантией устойчивости и плавности ящиков.",
      },
      {
        service: "Сборка и установка кухонной мебели",
        description: "Полный комплекс работ: сборка и установка мебели, навеска фасадов и монтаж столешницы.",
      },
      {
        service: "Сборка детской мебели",
        description: "Безопасная сборка кроватей и шкафчиков с надёжной фиксацией всех элементов.",
      },
      {
        service: "Сборка столов и стульев",
        description: "Быстрая сборка и разборка мебели любых моделей — удобно при переездах и обновлении интерьера.",
      },
      {
        service: "Сборка полок и стеллажей",
        description: "Точная установка полок и стеллажей с идеальной геометрией и надёжным креплением.",
      },
      {
        service: "Сборка мебели для ванной комнаты",
        description: "Сборщик мебели установит тумбы и зеркала с влагостойкой фиксацией.",
      },
      {
        service: "Сборка садовой и дачной мебели",
        description: "Сборка мебели для отдыха: столы, лавки, шезлонги — прочно и аккуратно.",
      },
      {
        service: "Сборка офисной мебели под ключ",
        description: "Быстрая установка рабочих мест и шкафов без простоев и лишнего шума.",
      },
      {
        service: "Сборка мебели по брендам",
        description: "Сборщик мебели работает с IKEA, Hoff, Lerom и другими марками по оригинальным схемам.",
      },
    ],
  },
};
 
export const reUsableTableData2: ReUsableTableData = {
  title: "Честное сравнение: как мы работаем и почему результат лучше",
  subtitle: "Иногда после дешёвой «помощи» мебель трещит, петли провисают, а цена внезапно вырастает. Мы делаем иначе: прозрачные услуги по сборке мебели, точная сборка и разборка мебели, никакой спешки. Сравните качество сами!",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "ourCompany", header: "Наша компания" },
      { key: "otherCompanies", header: "Другие исполнители" },
    ],
    rows: [
      {
        criterion: "Скорость приезда мастера",
        ourCompany: "Выезд в течение часа после заявки",
        otherCompanies: "Ожидание от полдня до суток",
      },
      {
        criterion: "Стоимость услуг",
        ourCompany: "Фиксированная цена, без скрытых доплат",
        otherCompanies: "Часто меняется на месте",
      },
      {
        criterion: "Квалификация",
        ourCompany: "Работают проверенные специалисты",
        otherCompanies: "Возможны случайные исполнители",
      },
      {
        criterion: "Качество сборки",
        ourCompany: "Ровно, надёжно, без скрипов",
        otherCompanies: "Возможны ошибки и перекосы",
      },
      {
        criterion: "Чистота после работы",
        ourCompany: "Убираем мусор, порядок на месте",
        otherCompanies: "Оставляют грязь и упаковку",
      },
    ],
  },
};
 
export const reUsableTableData3: ReUsableTableData = {
  title: "Сборка-разборка мебели: цена",
  subtitle: "Мы предлагаем фиксированные цены.",
  table: {
    columns: [
      { key: "workType", header: "Вид работ" },
      { key: "description", header: "Описание услуги" },
      { key: "price", header: "Цена от, тг" },
    ],
    rows: [
      {
        workType: "Сборка шкафа-купе",
        description: "Полная работа с регулировкой дверей и направляющих",
        price: "10 000",
      },
      {
        workType: "Монтаж кровати",
        description: "Установка основания и фиксация элементов без перекосов",
        price: "8 000",
      },
      {
        workType: "Сбор комода",
        description: "Подгонка корпуса и направляющих с проверкой прочности",
        price: "6 000",
      },
      {
        workType: "Сборка стола/письменного стола",
        description: "Крепление столешницы и ножек, надёжная фиксация",
        price: "5 000",
      },
      {
        workType: "Кухонный гарнитур под ключ",
        description: "Полная сборка и установка мебели с выравниванием модулей",
        price: "15 000",
      },
      {
        workType: "Детская мебель",
        description: "Безопасная подгонка кроваток, шкафов и парт",
        price: "7 000",
      },
      {
        workType: "Офисная мебель",
        description: "Монтаж рабочих мест, шкафов и перегородок",
        price: "9 000",
      },
      {
        workType: "Сборка и разборка мебели при переезде",
        description: "Демонтаж и повторная установка без повреждений",
        price: "12 000",
      },
      {
        workType: "Полки и стеллажи",
        description: "Разметка, крепление и проверка уровня",
        price: "5 000",
      },
      {
        workType: "Зеркала и навесные модули",
        description: "Аккуратная фиксация и контроль надёжности",
        price: "4 000",
      },
    ],
  },
};
 
export const reUsableTableData4: ReUsableTableData = {
  title: "Почему профессиональный сборщик мебели всегда выигрывает у «сделай сам»?",
  subtitle: "Кажется просто — пока не попробуешь. А на деле не хватает шурупов, уровень уходит, и целый день превращается в марафон.",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "selfService", header: "Самостоятельно" },
      { key: "professional", header: "Профессиональный сборщик мебели" },
    ],
    rows: [
      {
        criterion: "Время",
        selfService: "Эксперименты и поиск решений — уходит весь выходной",
        professional: "План работ, точные действия — 1–3 часа на стандартный комплект",
      },
      {
        criterion: "Риски",
        selfService: "Перетяжка креплений, сколы ЛДСП, неровные фасады",
        professional: "Контроль затяжки, точная подгонка, ровные зазоры",
      },
      {
        criterion: "Гарантия",
        selfService: "Нет ответственности за результат",
        professional: "Гарантия и бесплатный повторный выезд",
      },
      {
        criterion: "Скрытые расходы",
        selfService: "Покупка инструментов и переделки — итоговая цена растёт",
        professional: "Прозрачная смета, доплаты только при нестандартных задачах",
      },
      {
        criterion: "Срок службы",
        selfService: "Зависит от опыта и везения",
        professional: "Дольше — благодаря профессиональной сборке и разборке мебели",
      },
    ],
  },
};
export const reUsableTableData5: ReUsableTableData = {
  title: "Какие инструменты используют сборщики?",
  subtitle: "Мастер приезжает в полном вооружении, всё под рукой!",
  table: {
    columns: [
      { key: "tool", header: "Инструмент" },
      { key: "advantage", header: "Преимущество" },
    ],
    rows: [
      {
        tool: "Рулетка",
        advantage: "Точные замеры деталей.",
      },
      {
        tool: "Разводной и трубный ключ",
        advantage: "Работа с крепежом и трубами.",
      },
      {
        tool: "Полировочная машинка",
        advantage: "Чистая отделка поверхностей.",
      },
      {
        tool: "Резак",
        advantage: "Подрезка без сколов и заусенцев.",
      },
      {
        tool: "Изолента, скотч, лента",
        advantage: "Защита и фиксация элементов.",
      },
      {
        tool: "Стамески и отвёртки",
        advantage: "Точная подгонка соединений.",
      },
      {
        tool: "Отвес и уровень",
        advantage: "Контроль ровности установки.",
      },
      {
        tool: "Молотки и тиски",
        advantage: "Безопасная фиксация деталей.",
      },
      {
        tool: "Напильники и наждачка",
        advantage: "Шлифовка и сглаживание краёв.",
      },
      {
        tool: "Набор ключей и насадок",
        advantage: "Универсальная сборка элементов.",
      },
      {
        tool: "Штапельный пистолет",
        advantage: "Быстрое крепление материалов.",
      },
      {
        tool: "Перчатки",
        advantage: "Защита рук при работе.",
      },
      {
        tool: "Шпатель",
        advantage: "Нанесение герметика и шпатлёвки.",
      },
      {
        tool: "Перфоратор и дрель",
        advantage: "Сверление и монтаж конструкций.",
      },
      {
        tool: "Подмотка для труб",
        advantage: "Герметизация соединений.",
      },
      {
        tool: "Пистолет для герметика",
        advantage: "Ровное нанесение составов.",
      },
      {
        tool: "Мягкие тапочки",
        advantage: "Чистота в помещении.",
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
  title: "Калькулятор цены сборки",
  subtitle: "Рассчитайте стоимость услуги сборки мебели заранее — это бесплатно и займёт меньше минуты.",
  description: "Введите данные ниже, чтобы получить предварительную цену и выбрать удобное время визита мастера.",
  buttonText: "Рассчитать",
  contactFields: {
    name: "Имя",
    taskDescription: "Кратко опишите задачу",
    phone: "Телефон",
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
  title: "О компании в цифрах",
  sections: [
    {
      title: "7+ лет опыта",
      content: "Работаем спокойно, точно и без спешки, как будто собираем мебель для себя.",
      icon: "CalendarCheck",
    },
    {
      title: "75% клиентов возвращаются и советуют нас друзьям",
      content: "Доверие для нас важнее рекламы.",
      icon: "Heart",
    },
    {
      title: "20% скидка при заказе онлайн",
      content: "Потому что честная работа должна быть доступной каждому.",
      icon: "Percent",
    },
  ],
};

// Константы для Reviews компонента
export const reviewsData: ReviewsData = {
  title: "Отзывы/Видеоотзывы",
  subtitle: "(Реальные отзывы и короткие видео от клиентов с оценкой качества, фото \"до/после\" )",
  reviews: [
    {
      author: "Алия К., Каскелен",
      text: "«После переезда пыталась сама заняться сборкой мебели — думала, сэкономлю. В итоге шкаф даже не закрывался. Вызвала мастера — приехал быстро, всё собрал, выровнял. Теперь мебель стоит как новая, а я поняла, что лучше не экономить на нервах».",
      rating: 5,
      borderColor: "border-pink-400",
      avatarColor: "from-pink-100 to-rose-200",
      avatarInitial: "А",
    },
    {
      author: "Сергей Н., Талдыкорган",
      text: "«Заказывал сборку мебели для домашнего кабинета. Ребята приехали с полным набором, сделали за пару часов огромный комплект. Никаких перекосов и пыли — чисто, ровно. Видно, что сборщик мебели опытный: всё объяснил и показал, как правильно регулировать».",
      rating: 5,
      borderColor: "border-blue-400",
      avatarColor: "from-blue-100 to-cyan-200",
      avatarInitial: "С",
    },
    {
      author: "Динара М., Алматы",
      text: "«После ремонта нужно было собрать детскую мебель, а возиться некому. Оформила заявку онлайн — мастер всё собрал аккуратно и без спешки. Проверил устойчивость и даже помог расставить мебель по комнате. Отличный сервис и вежливый подход — теперь только к вам».",
      rating: 5,
      borderColor: "border-purple-400",
      avatarColor: "from-purple-100 to-indigo-200",
      avatarInitial: "Д",
    },
  ],
};

// Константы для ContactForm компонента
export const contactFormData: ContactFormData = {
  title: "Закажите выезд мастера прямо сейчас!",
  subtitle: "Заполните короткую форму.",
  description: "Менеджер перезвонит в течение 15 минут, уточнит детали и направит специалиста по вашему адресу в Алматы.",
  nameLabel: "Как вас зовут?",
  phoneLabel: "Ваш номер телефона?",
  buttonText: "Оставить заявку на сборку мебели",
  whatsappButton: {
    text: "Написать в WhatsApp",
    href: "https://wa.me/",
  },
};

// Константы для FeaturesCards компонента
export const featuresCardsData: FeaturesCardsData = {
  title: "Удобная сборка мебели без лишних затрат",
  subtitle: "Закажите сборку уже сегодня — и освободите время для того, что действительно важно.",
  items: [
    {
      title: "Сэкономьте время — мы всё сделаем за вас",
      text: "Мы берём на себя весь процесс: от аккуратной распаковки до проверки устойчивости. Вы получаете идеальный результат без шума и стресса.",
      icon: "Clock",
      bg: "from-rose-400 to-pink-500",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      title: "Установка мебели — собираем как конструктор",
      text: "Каждая петля, ручка и фасад выравниваются. Установка мебели с точной подгонкой — ничего не скрипит, не шатается и не перекашивается.",
      icon: "Settings",
      bg: "from-blue-400 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Сборка и разборка мебели при переезде",
      text: "Переезд без хлопот — мы аккуратно демонтируем мебель, упакуем детали и соберём всё на новом месте. Ни царапин, ни путаницы, ни потери времени — только чёткая работа.",
      icon: "Truck",
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
 
