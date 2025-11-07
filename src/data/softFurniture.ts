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
  title: "Кресла на заказ в Алматы",
  highlight: "от 7 дней",
  subtitle: "Удобство начинается с первого шага — выберите кресло, которое создано именно для вас.",
  benefits: [
    {
      icon: "Phone",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Бесплатный замер",
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
  buttonText: "Оставить заявку на мебель на заказ",
  buttonHref: "#form",
  imageSrc: "/images/home/soft-furniture.webp",
};

// Константы для Services компонента
export const servicesData: ServicesData = {
  title: "О компании",
  subtitle: "Более 10 лет опыта в создании мебели на заказ — от уютных кресел до сложных интерьерных решений.\n\nКаждый проект строится на точности, честности и понимании задач клиента. Контроль на всех этапах гарантирует клиентам не только мебель, но и уверенность, что всё будет сделано так, как задумано.",
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
  title: "Наши преимущества в изготовлении мягкой мебели",
  advantages: [
    {
      title: "Чистота, как часть сервиса",
      text: "Мы уважаем ваш дом — заносим только упакованные детали, работаем аккуратно и уходим, оставляя после себя идеальный порядок. Вы получаете не просто мягкую мебель на заказ в Алматы, а спокойствие без лишних забот.",
    },
    {
      title: "Производство, которому доверяют",
      text: "14 лет создаём комфорт и стиль — от раскроя ткани до финальной строчки. Наше производство мягкой мебели в Алматы оснащено профессиональным оборудованием — результат всегда безупречный.",
    },
    {
      title: "Оплата — только за уверенность",
      text: "Мы начинаем изготовление мягкой мебели на заказ с минимальной предоплатой 50%. Остальное оплачиваете, когда видите результат своими глазами — честно, прозрачно и без риска.",
    },
    {
      title: "3D-проект, который оживляет идею",
      text: "Перед стартом вы видите, как будет выглядеть ваша мебель — с реальными материалами, цветами и размерами. Это помогает сразу понять, что подходит именно вам, и исключает разочарования после установки.",
    },
  ],
  ctaButton: {
    text: "Заказать кресло",
    href: "#form",
  },
};

// Константы для HowItWorks компонента
export const howItWorksData: HowItWorksData = {
  title: "8 шагов — как проходит изготовление мебели на заказ?",
  subtitle: "Комфорт начинается с заявки — действуйте прямо сейчас. Комфорт не ждёт — закажите мебель, созданную именно для вас.",
  gridCols: 2,
  steps: [
    {
      step: "1",
      title: "Контакт",
      text: "Вы оставляете заявку или звоните напрямую.",
      icon: "Phone",
      bg: "from-rose-400 to-pink-500",
    },
    {
      step: "2",
      title: "Замер",
      text: "Мастер выезжает, делает замер и советует материалы.",
      icon: "Users",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      step: "3",
      title: "Договор",
      text: "Фиксируем сроки, цену и тип мебели.",
      icon: "FileText",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      step: "4",
      title: "Предоплата",
      text: "Вносите 50%, запускаем проект в работу.",
      icon: "Percent",
      bg: "from-green-400 to-teal-500",
    },
    {
      step: "5",
      title: "Выполнение",
      text: "Закупаем материалы, изготавливаем мебель по замерам.",
      icon: "Hammer",
      bg: "from-amber-400 to-orange-500",
    },
    {
      step: "6",
      title: "Установка",
      text: "Доставляем, собираем, проверяем каждую деталь.",
      icon: "Truck",
      bg: "from-teal-400 to-cyan-500",
    },
    {
      step: "7",
      title: "Приём работы",
      text: "Вы оцениваете результат и подтверждаете качество.",
      icon: "CheckCircle",
      bg: "from-violet-400 to-purple-500",
    },
    {
      step: "8",
      title: "Расчёт",
      text: "После приёмки вносите оставшиеся 50%.",
      icon: "Calculator",
      bg: "from-indigo-400 to-blue-500",
    },
  ],
  ctaButton: {
    text: "Заказать кресло",
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
  title: "Таблица сравнения: индивидуальное изготовление мягкой мебели, которое говорит само за себя",
  subtitle: "Когда выбираешь комфорт — не хочется гадать, как будет на деле. Мы делаем производство мягкой мебели на заказ понятным и честным: вы знаете, за что платите, и видите результат, который совпадает с ожиданиями.",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "ourCompany", header: "Наша компания" },
      { key: "otherCompanies", header: "Другие производители" },
    ],
    rows: [
      {
        criterion: "Срок изготовления",
        ourCompany: "От 7 до 14 дней — реальные сроки без переносов и «ожидания ткани» для мебели",
        otherCompanies: "30–45 дней, часто с задержками и пересчётом стоимости",
      },
      {
        criterion: "Гарантия на каркас",
        ourCompany: "Пожизненная — уверены в каждом шве мебели и соединении",
        otherCompanies: "1–2 года, после чего остаётесь без поддержки",
      },
      {
        criterion: "Материалы каркаса",
        ourCompany: "Массив бука и сталь — надёжная основа для мягкой мебели по индивидуальным размерам",
        otherCompanies: "ЛДСП, фанера, сосна — со временем теряют форму и устойчивость",
      },
      {
        criterion: "Замер и визуализация",
        ourCompany: "Бесплатный выезд + 3D-проект с подбором тканей, фото и точным расчётом",
        otherCompanies: "Платный замер или эскиз «от руки» без визуализации будущей мебели",
      },
      {
        criterion: "Примерка чехлов",
        ourCompany: "Две примерки в процессе, чтобы мягкая мебель на заказ в Алматы выглядела идеально, как на фото и ценах из каталога",
        otherCompanies: "Без примерок, всё «по факту»",
      },
    ],
  },
};
 
export const reUsableTableData2: ReUsableTableData = {
  title: "Цены на изготовление мягкой мебели",
  subtitle: "Когда выбираешь комфорт, не хочется переплачивать за имя бренда — хочется платить за качество, за ощущение «моё». Именно поэтому изготовление мягкой мебели по индивидуальному заказу — это не про роскошь, а про здравый смысл. Вы платите только за то, что действительно нужно: удобство, надёжность и дизайн, который живёт вместе с вами.",
  table: {
    columns: [
      { key: "product", header: "Изделие" },
      { key: "description", header: "Описание" },
      { key: "price", header: "Цена от, тг" },
    ],
    rows: [
      {
        product: "Диван на заказ",
        description: "Изготавливается мебель по вашим размерам и стилю, под любую планировку",
        price: "290 000",
      },
      {
        product: "Кресло на заказ",
        description: "Индивидуальный крой, ткани премиум-класса, удобная посадка в мебели",
        price: "150 000",
      },
      {
        product: "Угловой диван",
        description: "Просторное решение для гостиной, трансформируется под зону отдыха",
        price: "370 000",
      },
      {
        product: "Пуф или банкетка",
        description: "Завершает композицию, добавляя уюта и функциональности мебели",
        price: "85 000",
      },
      {
        product: "Комплект диван + кресло",
        description: "Идеальный баланс между комфортом и стилем в мебели",
        price: "420 000",
      },
    ],
  },
  additionalText: "Не ждите, пока старый диван напомнит о себе скрипом или провалом сидений — пора заменить неудобство на комфорт, созданный именно для вас.",
  ctaButton: {
    text: "Заказать кресло",
    href: "#form",
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
  title: "Отзывы наших клиентов",
  reviews: [
    {
      author: "Айжан Т., Талгар",
      text: "«Долго искала, где заказать диван нестандартного размера — магазины не подходили по габаритам. Обратилась сюда на изготовление мягкой мебели по индивидуальному заказу, всё обсудили за один день. Сделали именно так, как хотела, без навязанных 'улучшений'. Теперь гостиная выглядит идеально».",
      rating: 5,
      borderColor: "border-pink-400",
      avatarColor: "from-pink-100 to-rose-200",
      avatarInitial: "А",
    },
    {
      author: "Дмитрий К., Алматы",
      text: "«После переезда решили полностью обновить мебель. Хотелось что-то современное, но при этом удобное. Команда предложила индивидуальное изготовление мягкой мебели с 3D-проектом — я сразу понял, как всё будет выглядеть. Получилось стильно и точно в срок».",
      rating: 5,
      borderColor: "border-blue-400",
      avatarColor: "from-blue-100 to-cyan-200",
      avatarInitial: "Д",
    },
    {
      author: "Сабина Р., Каскелен",
      text: "«У меня маленькая квартира-студия, и готовая мебель просто не подходила. Заказала мягкую мебель на заказ в Алматы — помогли с дизайном и материалами. Всё вышло идеально по размеру и цвету, как будто проектировали вместе со мной. Очень довольна результатом».",
      rating: 5,
      borderColor: "border-purple-400",
      avatarColor: "from-purple-100 to-indigo-200",
      avatarInitial: "С",
    },
  ],
};

// Константы для ContactForm компонента
export const contactFormData: ContactFormData = {
  title: "Оставьте заявку!",
  subtitle: "Бесплатно сделаем замер и рассчитаем стоимость мягкой мебели на заказ.",
  description: "В 99% случаев предварительный расчёт совпадает с итоговой стоимостью — без каких-либо сюрпризов.",
  nameLabel: "Имя",
  phoneLabel: "Телефон",
  buttonText: "Заказать кресло",
  whatsappButton: {
    text: "Написать в WhatsApp",
    href: "https://wa.me/",
  },
};

// Константы для FeaturesCards компонента
export const featuresCardsData: FeaturesCardsData = {
  title: "Мягкая мебель по индивидуальным размерам — когда комфорт создаётся под вас",
  subtitle: "Современные интерьеры больше не терпят случайных деталей. Люди всё чаще выбирают мягкую мебель по индивидуальным размерам, потому что устали мириться с компромиссами: слишком короткий диван, неподходящая ткань, не та глубина посадки. Мы создаём мебель, в которой учтено всё — от привычек до привычных движений, от света в комнате до цвета стен.",
  items: [
    {
      title: "Комфорт не покупают — его создают",
      text: "Каждый проект начинается с понимания, как вы живёте и отдыхаете. Производство мягкой мебели на заказ — это ремесло, где важно всё: линии, стежки, пропорции. Мы изготавливаем мебель вручную, сохраняя баланс эстетики и надёжности. Так рождается уют, который не теряет форму ни через год, ни через десять.",
      icon: "Heart",
      bg: "from-rose-400 to-pink-500",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      title: "Премиум — это внимание к деталям, а не цена",
      text: "Настоящее качество видно без слов — в ткани, швах, посадке и ощущении. Мы используем крепкий каркас в мебели, поролон высокой плотности и ткани из Европы. Мягкая мебель и её производство — это процесс, где важна не скорость, а точность. Вы просто садитесь и чувствуете: это сделано именно для вас, с вниманием, любовью и мастерством.",
      icon: "Star",
      bg: "from-blue-400 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Мягкая мебель производство — сочетание технологий и ручной работы",
      text: "Каждое изделие проходит через несколько этапов: 3D-проект, шаблон, пошив мебели и сборку. Мягкая мебель на производстве строится на точности — от выкройки ткани до натяжения стежков. Мы используем немецкое оборудование для резки и итальянские машинки для обивки мебели. Но финальную отделку делает мастер вручную, проверяя швы.",
      icon: "Hammer",
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
 
