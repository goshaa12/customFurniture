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
  title: "Комоды на заказ в Алматы",
  highlight: "за 5-7 дней",
  subtitle: "Создайте комод, который идеально впишется в ваш интерьер. Закажите сейчас и получите индивидуальный расчёт уже сегодня.",
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
  imageSrc: "/images/home/commode.webp",
};

// Константы для Services компонента
export const servicesData: ServicesData = {
  title: "О нас",
  subtitle: "Работаем с 2011 года, превращая обычные комнаты в уютные. Делаем мебель, которая решает конкретные задачи — экономит место, добавляет комфорта, подчёркивает стиль. Замер, доставка и гарантия включены, чтобы процесс был простым и спокойным.",
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
  title: "Наши преимущества в изготовлении комодов на заказ",
  advantages: [
    {
      title: "10 лет опыта, превращённого в мастерство",
      text: "Мы знаем, как создать комод на заказ в Алматы, который идеально подойдёт вашему дому. Каждая деталь просчитана и выверена — от плавности ящиков до текстуры фасадов.",
    },
    {
      title: "Ваши размеры — наши решения",
      text: "Хотите заказать комод по своим размерам? Мы создаём конструкцию, подстраиваясь под вас. Любое количество ящиков, полок и ниш — чтобы каждая вещь нашла своё место.",
    },
    {
      title: "Видите результат ещё до изготовления",
      text: "Перед началом работ создаём 3D-проект и делаем точный замер. Вы заранее понимаете, как купить комод на заказ и избежать лишних расходов. Каждая линия продумана — от формы ручек до цвета корпуса.",
    },
    {
      title: "Гарантия уверенности на целый год",
      text: "Даём до 12 месяцев гарантии, чтобы вы чувствовали спокойствие. Если что-то пойдёт не так — всё исправим без лишних разговоров. Ваш комод на заказ прослужит годами, сохранив внешний вид и прочность.",
    },
    {
      title: "Честные условия без сюрпризов",
      text: "Работаем по официальному договору — всё прозрачно и понятно. Вы знаете стоимость заранее и получаете именно то, что согласовано. С нами купить комод на заказ — значит исключить любые риски.",
    },
    {
      title: "Качество, которое видно с первого взгляда",
      text: "Используем сертифицированные эко-материалы и проверенные комплектующие. Мастера собирают аккуратно, без пыли и лишней суеты. Даже комод на заказ недорого выглядит дорого и служит долго.",
    },
  ],
  ctaButton: {
    text: "Заказать комод",
    href: "#form",
  },
};

// Константы для HowItWorks компонента
export const howItWorksData: HowItWorksData = {
  title: "Этапы изготовления комода на заказ",
  subtitle: "Создайте комод, который идеально подойдёт вашему дому — по стилю, размеру и настроению.",
  gridCols: 2,
  steps: [
    {
      step: "1",
      title: "Заявка и замер",
      text: "Вы оставляете заявку на сайте или по телефону, и мы подбираем удобное время для приезда мастера. Замерщик приезжает точно в срок и помогает определиться с параметрами будущего комода.",
      icon: "Phone",
      bg: "from-rose-400 to-pink-500",
    },
    {
      step: "2",
      title: "Обсуждение деталей и создание проекта",
      text: "На месте специалист фиксирует размеры, помогает выбрать материалы, фурнитуру и стиль. После этого вы получаете 3D-визуализацию — будущий комод можно увидеть ещё до производства.",
      icon: "Users",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      step: "3",
      title: "Договор и запуск производства",
      text: "Когда всё утверждено, подписываем договор и начинаем изготовление. Каждый этап контролируется, чтобы готовый комод полностью совпадал с проектом и ожиданиями.",
      icon: "FileText",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      step: "4",
      title: "Доставка, установка и гарантия",
      text: "Комод доставляем в срок, аккуратно собираем и проверяем качество. После установки подписываем акт приёма и выдаём гарантию — всё официально и без лишней бюрократии.",
      icon: "Truck",
      bg: "from-teal-400 to-cyan-500",
    },
  ],
  ctaButton: {
    text: "Заказать комод",
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
  title: "Преимущества заказа комода по индивидуальным размерам",
  items: [
    {
      title: "Комод, созданный под ваше пространство",
      text: "Проектируем комод точно по замерам, чтобы он идеально вписался в интерьер. Ни лишних зазоров, ни потери места — всё чётко и аккуратно.",
      icon: "Target",
      bg: "from-rose-400 to-pink-500",
    },
    {
      title: "Дизайн, который отражает ваш стиль",
      text: "Вы выбираете форму, цвет, материал и фурнитуру. Мы создаём комод, который выглядит не как мебель, а как часть вашего характера.",
      icon: "Palette",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      title: "Удобство в каждой детали",
      text: "Количество ящиков, глубина и ниши подбираются под ваши привычки. Всё продумано, чтобы хранение стало простым и комфортным.",
      icon: "CheckCircle",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      title: "Качество, которое не подведёт",
      text: "Используем надёжные материалы и фурнитуру. Комод служит годами, не теряя внешний вид и лёгкость в использовании.",
      icon: "ShieldCheck",
      bg: "from-teal-400 to-cyan-500",
    },
  ],
};

// Константы для ReUsableTable компонента
export const reUsableTableData: ReUsableTableData = {
  title: "Комод на заказ по своим размерам: почувствуйте разницу в подходе",
  subtitle: "Бывает, заказываешь комод — и начинаются нервы: не тот оттенок, задержки, недосказанность. Мы не допускаем подобного отношения к клиентам. Здесь результат не нужно переделывать: комод приезжает таким, каким вы его задумали.",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "ourCompany", header: "Мы" },
      { key: "otherCompanies", header: "Другие компании" },
    ],
    rows: [
      {
        criterion: "Подбор материалов и дизайна",
        ourCompany: "Привозим образцы фасадов, ручек и покрытий прямо на замер. Вы сразу видите, каким будет комод по индивидуальным размерам.",
        otherCompanies: "Предлагают выбрать по каталогу, где реальный цвет и текстура сильно отличаются от фото.",
      },
      {
        criterion: "Контроль на каждом этапе",
        ourCompany: "Личный менеджер сопровождает заказ — от идеи до установки. Все изменения фиксируются, чтобы заказать комод было просто и спокойно.",
        otherCompanies: "После оплаты связь обрывается: не отвечают на сообщения, не дают точных сроков.",
      },
      {
        criterion: "Фурнитура и качество сборки",
        ourCompany: "Используем Blum, Hettich и Boyard — фурнитуру, которая работает плавно и тихо. Каждый комод в спальню на заказ собирается без зазоров и перекосов.",
        otherCompanies: "Экономят на комплектующих: ящики заедают, ручки расшатываются через пару месяцев.",
      },
      {
        criterion: "Монтаж и чистота работы",
        ourCompany: "Наши мастера приезжают вовремя, работают аккуратно, без шума и мусора. Готовый комод по индивидуальным размерам стоит идеально — как в проекте.",
        otherCompanies: "Привлекают случайных сборщиков, оставляют пыль, царапины и торчащие саморезы.",
      },
      {
        criterion: "Сервис после установки",
        ourCompany: "Мы остаёмся на связи: при необходимости бесплатно регулируем ящики и петли. Клиенты возвращаются, чтобы заказать комод для других комнат.",
        otherCompanies: "После установки перестают отвечать — даже на простые вопросы по уходу.",
      },
    ],
  },
};
 
export const reUsableTableData2: ReUsableTableData = {
  title: "Комод на заказ: цена и типы",
  subtitle: "Мы не гадаем на словах — показываем реальные цифры ещё до начала работы. Стоимость зависит от размера, материала и дизайна, но всегда остаётся справедливой.",
  table: {
    columns: [
      { key: "type", header: "Тип комода" },
      { key: "material", header: "Материал" },
      { key: "price", header: "Цена от, тенге" },
    ],
    rows: [
      {
        type: "Комод для спальни",
        material: "ЛДСП",
        price: "от 100 000",
      },
      {
        type: "Комод для гостиной",
        material: "МДФ, шпон",
        price: "от 120 000",
      },
      {
        type: "Комод с ящиками и нишами",
        material: "ЛДСП, металл",
        price: "от 130 000",
      },
      {
        type: "Угловой или встроенный комод",
        material: "ЛДСП, МДФ",
        price: "от 140 000",
      },
    ],
  },
  additionalText: "Узнайте точную стоимость комода на заказ по своим размерам уже сейчас!",
  ctaButton: {
    text: "Рассчитать стоимость",
    href: "#calculator",
  },
};
 
export const reUsableTableData3: ReUsableTableData = {
  title: "Материалы, которые мы используем",
  subtitle: "Качество комода начинается с выбора правильных материалов.",
  table: {
    columns: [
      { key: "material", header: "Материал / Элемент" },
      { key: "description", header: "Описание" },
    ],
    rows: [
      {
        material: "МДФ (мелкодисперсная фракция)",
        description: "Прочный и устойчивый материал, идеально подходит для нестандартных форм и сложной отделки. Делает комод визуально лёгким и современным.",
      },
      {
        material: "ДСП (древесно-стружечная плита)",
        description: "Практичный вариант для доступных моделей. Современное ламинирование защищает поверхность от влаги, царапин и выгорания.",
      },
      {
        material: "Натуральное дерево",
        description: "Классика, проверенная временем. Комоды из массива создают ощущение тепла и уюта, наполняют интерьер благородством.",
      },
      {
        material: "Фурнитура",
        description: "Используем направляющие Blum, Hettich, Boyard. Они обеспечивают мягкое, бесшумное закрытие и надёжную фиксацию ящиков.",
      },
      {
        material: "Декоративные элементы",
        description: "Акрил, пластик, шпон — стойкие к влаге и солнечному свету материалы, которые придают фасадам выразительность и глубину.",
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
  subtitle: "Убедитесь лично — прочитайте другие отзывы.",
  reviews: [
    {
      author: "Ольга Н., Алматы",
      text: "«Нужно было закрыть неудобную нишу в спальне — в магазинах ничего не подходило. Замерщик приехал быстро, помог определиться с материалом и оттенком. Готовый комод оказался вместительным и аккуратным, всё сделали без задержек».",
      rating: 5,
      borderColor: "border-pink-400",
      avatarColor: "from-pink-100 to-rose-200",
      avatarInitial: "О",
    },
    {
      author: "Руслан Т., Шымкент",
      text: "«Искал качественный комод без переплат и лишней беготни. Замер, производство и установка — всё чётко по срокам. Рад, что обратился именно сюда: мебель собрана аккуратно, пользоваться одно удовольствие».",
      rating: 5,
      borderColor: "border-blue-400",
      avatarColor: "from-blue-100 to-cyan-200",
      avatarInitial: "Р",
    },
    {
      author: "Айнур С., Астана",
      text: "«Мне хотелось что-то своё — не магазинный вариант, а комод, который будет смотреться как часть спальни. Команда предложила дизайн с мягкими линиями и необычными ручками, о которых я даже не думала. Теперь этот комод стал главным акцентом комнаты — каждый раз радуюсь, глядя на него».",
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
  title: "Оставьте заявку!",
  subtitle: "Не знаете, какой комод подойдёт именно вам? Просто оставьте заявку — и мы всё подскажем.",
  description: "Специалист бесплатно проконсультирует, поможет выбрать дизайн, материалы и рассчитает точную стоимость под ключ.",
  nameLabel: "Имя",
  phoneLabel: "Телефон",
  buttonText: "Рассчитать стоимость",
  whatsappButton: {
    text: "Написать в WhatsApp",
    href: "https://wa.me/77001234567",
  },
};

// Константы для FeaturesCards компонента
export const featuresCardsData: FeaturesCardsData = {
  title: "Купить комод на заказ — когда мебель становится частью характера",
  subtitle: "Современный комод на заказ в Алматы — это не просто предмет интерьера, а отражение вкуса, привычек и стиля жизни. Мы создаем мебель, которая не просто вписывается в пространство, а живет вместе с вами: хранит порядок, подчеркивает эстетику и делает дом по-настоящему вашим.",
  items: [
    {
      title: "Комод, который подстраивается под вас",
      text: "Вы можете заказать комод по своим размерам, выбрав количество ящиков, глубину и высоту. Мы проектируем так, чтобы конструкция экономила место и оставалась удобной каждый день. Такой комод становится не просто мебелью, а частью продуманного пространства, где все на своем месте.",
      icon: "Target",
      bg: "from-rose-400 to-pink-500",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      title: "Изготовление комодов на заказ без ожидания и нервов",
      text: "Мы ценим время клиента, поэтому действуем быстро и четко. Замер, 3D-проект, утверждение дизайна и производство занимают всего несколько дней. Изготовление комодов на заказ у нас — это контроль на каждом этапе, предсказуемый результат и уверенность в качестве.",
      icon: "Clock",
      bg: "from-blue-400 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Комод в спальню на заказ — уют, который чувствуешь",
      text: "Для спальни важно не только удобство, но и настроение. Мы подбираем материалы — шпон, МДФ, ЛДСП с теплой текстурой, чтобы мебель выглядела гармонично и не уставала визуально. Комод в спальню на заказ создает ощущение уюта, когда в комнате все дышит спокойствием.",
      icon: "Heart",
      bg: "from-purple-400 to-indigo-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Когда каждая деталь имеет значение",
      text: "Мы обращаем внимание даже на мелочи — ровность кромок, плавность выдвижения ящиков, точность стыков. Такие детали превращают мебель в удовольствие. Поэтому купить комод на заказ у нас — это вложение в комфорт, эстетику и долговечность.",
      icon: "Sparkles",
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
 
