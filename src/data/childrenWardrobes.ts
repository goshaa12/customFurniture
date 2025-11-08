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
  title: "Детские шкафы на заказ в Алматы",
  subtitle: "Когда вещи ребёнка постоянно лежат на виду и шкаф не справляется — решение только одно: система хранения, продуманная именно под вашу комнату и возраст ребёнка.",
  benefits: [
    {
      icon: "Tag",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "от 80 000 тг",
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
  imageSrc: "/images/home/children-wardrobes.webp",
};

// Константы для Services компонента
export const servicesData: ServicesData = {
  title: "О нас",
  subtitle: "С 2011 года у нас создаются детские шкафы на заказ, которые учитывают не только размеры комнаты, но и возраст ребёнка, его привычки и ритм жизни. Родители ценят уверенность, когда заранее понятно, как шкаф будет выглядеть и насколько он удобен в быту. В процессе учитываются безопасность, эргономика хранения и визуальный комфорт для ребёнка. Итог — функциональное и продуманное пространство, в котором легко поддерживать порядок без усилий.",
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
  title: "Почему родители выбирают наши детские шкафы?",
  advantages: [
    {
      title: "Работаем с 2011 года",
      text: "Более десяти лет проектируем детские шкафы на заказ, понимая, как реально живёт ребёнок в своей комнате. Родители ценят не просто мебель — а спокойствие, порядок и безопасность без ежедневного хаоса.",
    },
    {
      title: "20+ моделей на выбор",
      text: "Широкий ассортимент: кровати, шкафы, столы для детских комнат в разных стилях — от классики до современного дизайна. Изготавливаем мебель на собственной фабрике с контролем качества на каждом этапе.",
    },
    {
      title: "Бесплатные услуги до договора",
      text: "Замер, подбор материалов и 3D-проект — бесплатно, прежде чем вы вообще что-либо оплачиваете. Это позволяет заранее увидеть, как шкаф будет выглядеть в комнате, и избежать ошибок.",
    },
    {
      title: "12 месяцев гарантии",
      text: "Гарантия действует не на слова, а по договору — на фурнитуру, корпус и сборку. Если что-то пойдёт не так — спокойно решим вопрос, без споров и «докажите, что это не вы сломали».",
    },
    {
      title: "Работаем по двухстороннему договору",
      text: "Формально и прозрачно — ответственность за качество фиксируется документально. С нами работают семьи, дизайнеры и детские учреждения — потому что всё официально.",
    },
    {
      title: "Эко-материалы и аккуратная сборка",
      text: "Используются только безопасные материалы — без запаха, острых кромок и визуального шума. Сборка аккуратная: после установки комната остаётся чистой и готовой к жизни ребёнка.",
    },
  ],
  ctaButton: {
    text: "Заказать детский шкаф",
    href: "#form",
  },
};

// Константы для HowItWorks компонента
export const howItWorksData: HowItWorksData = {
  title: "Этапы работы",
  subtitle: "Если вы боитесь ошибиться с выбором или переплатить — первый шаг ничего не обязывает. Просто оформите замер.",
  gridCols: 2,
  steps: [
    {
      step: "1",
      title: "Шаг 1. Оставляете заявку и согласовываете замер",
      text: "Оставляете заявку любым удобным способом — мы уточняем время выезда замерщика и сразу подстраиваемся под ваш график.",
      icon: "Phone",
      bg: "from-rose-400 to-pink-500",
    },
    {
      step: "2",
      title: "Шаг 2. Замер, обсуждение и дизайн-проект",
      text: "Специалист точно замеряет помещение, узнаёт ваши пожелания и показывает, как будет выглядеть детский шкаф в 3D-визуализации.",
      icon: "Users",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      step: "3",
      title: "Шаг 3. Подписание договора и производство",
      text: "После утверждения проекта фиксируем стоимость договором и запускаем изготовление детского шкафа на заказ на нашем производстве.",
      icon: "FileText",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      step: "4",
      title: "Шаг 4. Доставка, сборка и гарантия",
      text: "Привозим шкаф, аккуратно собираем его на месте и сразу оформляем гарантию — готовая мебель сразу пригодна к использованию.",
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
  title: "Преимущества наших детских шкафов",
  items: [
    {
      title: "Продумано до мелочей",
      text: "Шкаф учитывает возраст ребёнка, рост и сценарий использования — вещи находятся ровно на нужной высоте.",
      icon: "Target",
      bg: "from-rose-400 to-pink-500",
    },
    {
      title: "Много места для хранения",
      text: "Полки и ящики распределены логично — ребёнок легко поддерживает порядок без помощи взрослых.",
      icon: "Package",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      title: "Закруглённые углы",
      text: "Кромки безопасно обработаны — ребёнок может двигаться рядом без риска ушибов.",
      icon: "ShieldCheck",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      title: "Долговечность",
      text: "Шкаф рассчитан на ежедневное использование детьми и остаётся устойчивым, не разбалтывается и не теряет внешний вид со временем.",
      icon: "CheckCircle",
      bg: "from-teal-400 to-cyan-500",
    },
    {
      title: "Яркий и современный дизайн",
      text: "Дизайн подбирается под интерьер и настроение ребёнка — без перегруза и визуального давления.",
      icon: "Palette",
      bg: "from-amber-400 to-yellow-500",
    },
    {
      title: "Индивидуальные размеры",
      text: "Шкаф создаётся строго по параметрам комнаты — без пустых зон и лишних выступов.",
      icon: "Ruler",
      bg: "from-green-400 to-emerald-500",
    },
    {
      title: "Удобство для игр и творчества",
      text: "Можно предусмотреть открытые секции внизу — игрушки и книги всегда в зоне доступа ребёнка.",
      icon: "Sparkles",
      bg: "from-indigo-400 to-blue-500",
    },
  ],
};

// Константы для ReUsableTable компонента
export const reUsableTableData: ReUsableTableData = {
  title: "Сравните, как мы работаем — и почему клиенты возвращаются к нам снова",
  subtitle: "Когда речь идёт о детских шкафах на заказ, родители не хотят рисковать ни с качеством, ни с безопасностью, ни с организацией пространства. Ниже — честное сравнение, которое сразу показывает, как отличается реальный подход к работам.",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "ourCompany", header: "Мы" },
      { key: "otherCompanies", header: "Другие компании" },
    ],
    rows: [
      {
        criterion: "Подбор материалов",
        ourCompany: "Привозим реальные образцы фасадов, текстур и цветов прямо на замер",
        otherCompanies: "Показывают только картинки из каталога на сайте",
      },
      {
        criterion: "Контроль на всех этапах",
        ourCompany: "Личный менеджер ведёт заказ от идеи до готового шкафа в детской комнате",
        otherCompanies: "После предоплаты общение чаще всего исчезает",
      },
      {
        criterion: "Фурнитура и безопасность",
        ourCompany: "Используем сертифицированную фурнитуру, рассчитанную на детей и активную эксплуатацию",
        otherCompanies: "Дешёвые крепления и направляющие без подтверждённого ресурса",
      },
      {
        criterion: "Сборка и установка",
        ourCompany: "Делают штатные мастера — спокойно, без шума и следов после монтажа",
        otherCompanies: "На объект отправляют случайных сборщиков без ответственности",
      },
      {
        criterion: "Поддержка после установки",
        ourCompany: "Всегда остаёмся на связи — помогаем, если нужно отрегулировать полки или довести систему хранения",
        otherCompanies: "После установки найти специалистов почти невозможно",
      },
    ],
  },
};
 
export const reUsableTableData2: ReUsableTableData = {
  title: "Цены",
  subtitle: "Когда родители выбирают детские шкафы на заказ, большинство боится переплатить или ошибиться с конфигурацией. Чтобы не было сюрпризов, мы заранее показываем прозрачную стоимость под разные типы решений.",
  table: {
    columns: [
      { key: "type", header: "Тип изделия" },
      { key: "price", header: "Цена" },
      { key: "duration", header: "Срок изготовления" },
    ],
    rows: [
      {
        type: "Прямой шкаф-купе",
        price: "80 000 тг / пог. м",
        duration: "7–10 дней",
      },
      {
        type: "Угловой шкаф для детской",
        price: "90 000 тг / пог. м",
        duration: "10–14 дней",
      },
      {
        type: "Шкаф-купе с фотопечатью или витриной",
        price: "100 000 тг / пог. м",
        duration: "12–16 дней",
      },
      {
        type: "Встроенный шкаф по индивидуальным нишам",
        price: "105 000 тг / пог. м",
        duration: "12–18 дней",
      },
    ],
  },
  additionalText: "Если вы боитесь переплатить или заказать «не то», просто получите расчёт под вашу комнату до принятия решения — это бесплатно и ни к чему не обязывает.",
  ctaButton: {
    text: "Рассчитать стоимость",
    href: "#calculator",
  },
};
 
export const reUsableTableData3: ReUsableTableData = {
  title: "Материалы, которые мы используем",
  subtitle: "При выборе детского шкафа на заказ важно понимать, что речь идёт не только о красоте, но и о здоровье ребёнка. Поэтому используются только материалы, сертифицированные для ежедневного использования — без запахов, аллергенов и риска травм.",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "description", header: "Описание" },
    ],
    rows: [
      {
        criterion: "Материалы ЛДСП и МДФ",
        description: "Экологичные панели Egger и Kronospan, класс эмиссии E1 — без токсинов, устойчивы к влаге и царапинам.",
      },
      {
        criterion: "Кромка",
        description: "ПВХ или ABS 2 мм — надёжно защищает углы и исключает риск травм при активной игре.",
      },
      {
        criterion: "Фурнитура",
        description: "Blum, Hettich, Boyard — доводчики, ограничители и плавное открывание безопасны даже для малышей.",
      },
      {
        criterion: "Обивка и текстиль",
        description: "Гипоаллергенные ткани, которые легко чистятся и не боятся пролитого напитка или фломастеров.",
      },
      {
        criterion: "Покрытия",
        description: "Сертифицированные краски и лаки без запаха — стойкие к влаге и безопасные при контакте с кожей.",
      },
      {
        criterion: "Выбор материалов",
        description: "Образцы привозим на замер — можно выбрать фактуру, цвет и тактильное ощущение прямо в комнате ребёнка.",
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
  subtitle: "Реальные отзывы и короткие видео от клиентов с оценкой качества, фото \"до/после\". Хотите посмотреть, как другие родители решили похожие задачи и что они говорят после установки?",
  reviews: [
    {
      author: "Айгерим Н., Алматы",
      text: "«У дочки вещи постоянно лежали по комнате — обычные шкафы были либо огромные, либо неудобные. Заказали шкаф на заказ, теперь она сама достаёт одежду, и в комнате наконец порядок».",
      rating: 5,
      borderColor: "border-pink-400",
      avatarColor: "from-pink-100 to-rose-200",
      avatarInitial: "А",
    },
    {
      author: "Сергей М., Астана",
      text: "«Нужен был шкаф-купе для двух детей и разные зоны хранения. Сделали компактный угловой шкаф по размерам комнаты — ничего не торчит, всё аккуратно и логично продумано. Очень доволен».",
      rating: 5,
      borderColor: "border-blue-400",
      avatarColor: "from-blue-100 to-cyan-200",
      avatarInitial: "С",
    },
    {
      author: "Динара К., Алматы",
      text: "«Главное для меня было — безопасность. У многих шкафов в магазинах острые кромки и запах. Здесь показали материалы заранее, шкаф получился без запаха, с мягким закрыванием — идеально для ребёнка».",
      rating: 5,
      borderColor: "border-purple-400",
      avatarColor: "from-purple-100 to-indigo-200",
      avatarInitial: "Д",
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
  subtitle: "Если не уверены, с чего начать — просто оставьте контакт. Мы спокойно уточним детали и подскажем лучшее решение для вашей детской.",
  description: "",
  nameLabel: "Имя",
  phoneLabel: "Телефон",
  buttonText: "Оставить заявку",
  whatsappButton: {
    text: "Написать в WhatsApp",
    href: "https://wa.me/77001234567",
  },
};

// Константы для FeaturesCards компонента
export const featuresCardsData: FeaturesCardsData = {
  title: "Почему всё больше родителей выбирают детские шкафы на заказ?",
  subtitle: "В типовых шкафах не учитываются реальные потребности ребёнка — доступ к вещам, удобство хранения и безопасность. Детские шкафы на заказ создаются сразу под конкретную семью и образ жизни, а не по каталогу.",
  items: [
    {
      title: "Шкаф должен меняться вместе с ребёнком, а не устаревать через год",
      text: "Конструкция проектируется с расчётом на изменение возраста — регулируемые полки, сменные секции, готовность к школе и дальнейшему росту ребёнка.",
      icon: "Repeat",
      bg: "from-rose-400 to-pink-500",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      title: "Организация хранения — это не просто полки, а сценарий поведения ребёнка",
      text: "Когда вещи находятся в зоне доступа, ребёнок быстрее учится самостоятельности и привыкает к порядку. Шкаф не просто хранит — он формирует поведение.",
      icon: "LayoutGrid",
      bg: "from-blue-400 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Мебель влияет не только на удобство, но и на восприятие пространства ребёнком",
      text: "Даже в маленькой детской шкаф может выглядеть лёгко, если правильно распределить визуальный вес, глубину и пропорции, а не просто «втиснуть мебель».",
      icon: "Eye",
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
 
