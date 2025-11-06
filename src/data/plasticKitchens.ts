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
  title: "Кухни из пластика на заказ в Алматы",
  highlight: "за 10 дней",
  subtitle: "Хватит терпеть неудобную кухню — оставьте заявку, и мы установим новую за неделю.",
  benefits: [
    {
      icon: "Lightbulb",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "От 90 000 тенге за метр",
    },
    {
      icon: "Users",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Индивидуальный дизайн-проект",
    },
    {
      icon: "FileText",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Бесплатный выезд на замер",
    },
    {
      icon: "PartyPopper",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Каменная мойка в подарок",
    },
  ],
  buttonText: "Рассчитать стоимость",
  buttonHref: "#calculator",
  imageSrc: "/images/home/plastic-kitchens.webp",
};

// Константы для Services компонента
export const servicesData: ServicesData = {
  title: "О нас",
  subtitle: "С 2011 года в Алматы — одна из специализаций: кухня из пластика на заказ с аккуратной установкой и честной оплатой. Каждый проект ведёт персональный менеджер: замер, 3D-проект, подбор комплектующих и контроль сроков — отсюда уверенность и предсказуемый результат.",
};

// Константы для WhyUs компонента
export const whyUsData: WhyUsData = {
  title: "Преимущества",
  advantages: [
    {
      title: "Опыт, который экономит ваши деньги",
      text: "С 2011 года знаем подводные камни и бережём ваш бюджет: подскажем, где сократить расходы, чтобы кухня из пластика на заказ служила долго.",
    },
    {
      title: "Стиль, который живёт с вами",
      text: "20+ решений: классика, модерн, хай-тек — под ваши привычки и технику. Пластиковая кухня проектируется под размеры квартиры и рост клиента.",
    },
    {
      title: "Чёткая цена до подписи",
      text: "Замер, 3D-визуализация и расчёт. Вы видите финальную сумму заранее: кухня из пластика на заказ без скрытых доплат, без сюрпризов.",
    },
    {
      title: "Гарантия спокойствия — 12 месяцев",
      text: "Официальная гарантия на работы и материалы защищает от форс-мажоров; в случае дефектов всё исправим быстро и без споров.",
    },
    {
      title: "Экологично и аккуратно у вас дома",
      text: "Используем безопасные материалы и сертифицированные кромки. Доставка и сборка проходят чисто: без пыли и мусора.",
    },
    {
      title: "Юридическая прозрачность и ответственность",
      text: "Двухсторонний договор со сроками и обязательствами. Изготовление для частных клиентов и компаний — одинаково аккуратно и предсказуемо.",
    },
  ],
  ctaButton: {
    text: "Заказать кухню",
    href: "#form",
  },
};

// Константы для HowItWorks компонента
export const howItWorksData: HowItWorksData = {
  title: "Как проходит изготовление кухонь из пластика",
  subtitle: "Оставьте заявку — запускаем производство и монтируем кухню без задержек.",
  gridCols: 2,
  steps: [
    {
      step: "1",
      title: "Заявка и точный замер",
      text: "Оставляете контакты и удобное время — приезжаем с образцами и снимаем размеры под пластиковые кухни на заказ.",
      icon: "FileText",
      bg: "from-rose-400 to-pink-500",
    },
    {
      step: "2",
      title: "Проект и смета",
      text: "Готовим 3D-проект, показываем, где можно сэкономить. Так изготовление кухни из пластика становится предсказуемым.",
      icon: "Users",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      step: "3",
      title: "Договор и производство",
      text: "Подписываем договор. Запускаем цех и присылаем фото-апдейты — кухня из пластика на заказ идёт по графику.",
      icon: "Lightbulb",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      step: "4",
      title: "Доставка, монтаж, гарантия",
      text: "Привозим аккуратно упакованные модули. Вы принимаете работу по чек-листу — кухня из пластика готова к жизни сегодня.",
      icon: "Truck",
      bg: "from-green-400 to-teal-500",
    },
  ],
  ctaButton: {
    text: "Заказать замер и смету",
    href: "#calculator",
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
  title: "Пластиковые кухни на заказ без нервов — смотрите, где реально удобно",
  subtitle: "Устали от обещаний и сюрпризов в смете? Сравните, как мы делаем кухни из пластика на заказ: чёткие расчёты, контроль на каждом этапе и финал — чистая, установленная кухня.",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "ourCompany", header: "Мы" },
      { key: "otherCompanies", header: "Другие компании" },
    ],
    rows: [
      {
        criterion: "Подбор материалов",
        ourCompany: "Привозим образцы фасадов и столешниц на замер, примеряем к свету и технике",
        otherCompanies: "Показывают картинки на сайте — реальный цвет и фактуру ищите сами",
      },
      {
        criterion: "Контроль на всех этапах",
        ourCompany: "Личный менеджер, отчёты по срокам и фото цеха",
        otherCompanies: "После оплаты связь рвётся: «ожидайте, перезвоним»",
      },
      {
        criterion: "Комплектующие",
        ourCompany: "Ставим проверенные бренды, фиксируем артикулы в договоре",
        otherCompanies: "Экономят на механизмах — через сезон люфт и перекос",
      },
      {
        criterion: "Сборка и монтаж",
        ourCompany: "Своя бригада, монтаж за 1 день, убираем за собой; кухня сразу готова к жизни",
        otherCompanies: "Приезжают подрядчики, растягивают на 2–3 дня, мусор и царапины",
      },
      {
        criterion: "После установки",
        ourCompany: "12 месяцев гарантии и поддержка",
        otherCompanies: "«Поставили и исчезли»: доработки — за отдельные деньги",
      },
      {
        criterion: "Цена и смета",
        ourCompany: "Финальная сумма известна до договора",
        otherCompanies: "Итог вырастает после предоплаты: доплаты за выезд/доставку/сборку",
      },
    ],
  },
};
 
export const reUsableTableData2: ReUsableTableData = {
  title: "Цены на кухни из пластика",
  subtitle: "Когда заказ кухни из пластика превращается в бесконечные переносы — это выматывает. Ниже — наши расценки, чтобы понять бюджет до замера.",
  table: {
    columns: [
      { key: "position", header: "Позиция" },
      { key: "includes", header: "Что входит" },
      { key: "price", header: "Цена, тенге" },
    ],
    rows: [
      {
        position: "Кухни из пластика — линейная 3 м",
        includes: "Корпус ЛДСП, МДФ-фасады с пластиком (глянец/мат), базовая комплектация",
        price: "450 000–810 000",
      },
      {
        position: "Пластиковая кухня — за погонный метр",
        includes: "Фасады пластик/акрил, стандартная комплектация",
        price: "150 000–300 000 / п.м.",
      },
      {
        position: "Кухня из пластика  — акрил премиум (3 м)",
        includes: "Акрил (глянец/мат), усиленная кромка, улучшенные механизмы",
        price: "610 000–810 000",
      },
    ],
  },
  additionalText: "Не хотите снова попасть на неожиданную цену без учёта сборки? Закройте вопрос сейчас — получите точный расчёт и срок одним звонком.",
  ctaButton: {
    text: "Рассчитать стоимость",
    href: "#calculator",
  },
};
 
export const reUsableTableData3: ReUsableTableData = {
  title: "Материалы для пластиковых кухонь, которые мы используем",
  subtitle: "Когда изготовление пластиковых кухонь превращается в лотерею из «аналогов», страдает долговечность. Ниже — простыми словами о деталях, из-за которых кухни из пластика на заказ получаются прочными и удобными в быту.",
  table: {
    columns: [
      { key: "category", header: "Категория" },
      { key: "description", header: "Описание" },
    ],
    rows: [
      {
        category: "Фасады из пластика",
        description: "Глубокий глянец/мат, стойкость к влаге и бытовой химии; пластиковая поверхность легко протирается.",
      },
      {
        category: "Кромка ABS/PMMA",
        description: "Герметичная кромка защищает торцы; соединение стойко к теплу и влаге — фасады не «раздувает».",
      },
      {
        category: "Столешница HPL (постформинг)",
        description: "Ударо- и износостойкая поверхность; плавные края без швов — удобно в быту.",
      },
      {
        category: "Фурнитура",
        description: "Blum, Hettich, Boyard — долговечные механизмы с доводчиками и плавным закрыванием.",
      },
      {
        category: "Уход и долговечность",
        description: "Ежедневно — влажная салфетка; агрессивная химия не нужна, особенно для камня и глянца.",
      },
    ],
  },
  additionalText: "Устали от красивых слов и слабых материалов? Получите честную спецификацию и прайс на пластиковые кухни на заказ — подберём решения под ваш быт и бюджет.",
  ctaButton: {
    text: "Получить спецификацию и прайс",
    href: "#calculator",
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
  title: "Отзывы",
  reviews: [
    {
      author: "Марина К., Алматы",
      text: "«Долго сомневалась: прошлый мастер тянул сроки. Здесь оформила кухню из пластика на заказ — замер по делу, понятный 3D-проект, цену зафиксировали. Итог: аккуратная сборка за день, тихие доводчики, готовлю с удовольствием — спасибо!»",
      rating: 5,
      borderColor: "border-pink-400",
      avatarColor: "from-pink-100 to-rose-200",
      avatarInitial: "М",
    },
    {
      author: "Тимур А., Астана",
      text: "«Кухня крошечная, вечный бардак. Выбрали пластиковую с умным хранением — подсказали материалы, всё вписали до миллиметра. Сейчас порядок, готовить удобно вдвоём — рекомендую!»",
      rating: 5,
      borderColor: "border-blue-400",
      avatarColor: "from-blue-100 to-cyan-200",
      avatarInitial: "Т",
    },
    {
      author: "Ольга П., Каскелен",
      text: "«Боялась ухода и следов от детей. Заказала пластиковую кухню: показали образцы, рассказали, чем мыть, поставили мягкое закрывание. Теперь протёр — и чисто, фасады как новые».",
      rating: 5,
      borderColor: "border-purple-400",
      avatarColor: "from-purple-100 to-indigo-200",
      avatarInitial: "О",
    },
  ],
};

// Константы для ContactForm компонента
export const contactFormData: ContactFormData = {
  title: "Оставить заявку",
  subtitle: "Оставьте контакты — перезвоним в удобное время. Подберём материалы и бюджет без сюрпризов. Сделаем всё за вас: замер, проект, ответы на вопросы.",
  description: " ",
  nameLabel: "Имя",
  phoneLabel: "Телефон",
  buttonText: "Запланировать звонок",
};

// Константы для FeaturesCards компонента
export const featuresCardsData: FeaturesCardsData = {
  title: "Пластиковые кухни на заказ в Алматы — стиль, который живёт дольше ремонта",
  items: [
    {
      title: "Глянцевый вау-эффект и износостойкость",
      text: "Современный акрил держит цвет и блеск, не тускнеет при ежедневной готовке. Непористая поверхность легко протирается влажной салфеткой — пластиковая отделка экономит время на уборке.",
      icon: "Sparkles",
      bg: "from-rose-400 to-pink-500",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      title: "Практичный HPL: спокойствие за столешницу и фасады",
      text: "Ламинированная HPL-поверхность выдерживает удары, царапины и повседневный износ. Пар и сухое тепло ей не страшны — надёжный вариант для семейной кухни.",
      icon: "Shield",
      bg: "from-blue-400 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Механизмы, которые не сдаются",
      text: "Петли и направляющие рассчитаны на десятки тысяч циклов. Точная регулировка и мягкое закрывание сохраняют геометрию — пластиковая поверхность не страдает от «ударов» дверцами.",
      icon: "Cog",
      bg: "from-purple-400 to-indigo-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Кромка, которая не пускает влагу",
      text: "ABS/PMMA-кромки герметизируют торцы и выдерживают бытовую «химию». Подбор в тон — фасады выглядят монолитом, а кухня — аккуратно. Для зон у мойки и варочной поверхности рекомендуем нуль-шов.",
      icon: "Droplet",
      bg: "from-green-400 to-emerald-500",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Плёнки PET и PVC: выбираем разумно",
      text: "PVC — гибкая и доступная база, PET — прочнее и терпимее к нагреву. Для экономии берите PVC-решения, для стойкости к теплу — PET. В любом случае пластиковая облицовка остаётся практичной.",
      icon: "Film",
      bg: "from-amber-400 to-orange-500",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      title: "Бюджет без сюрпризов — как считать честно",
      text: "Итог зависит от метража, класса механизмов и отделки (акрил/HPL/плёнки). Делим смету по модулям: база, доп-механизмы, кромка, столешница — видно каждую позицию.",
      icon: "Calculator",
      bg: "from-teal-400 to-cyan-500",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      title: "Уход за пластиком: 3 движения вместо генеральной",
      text: "На каждый день — тёплая вода + капля мыла и мягкая микрофибра. Абразивы не используем, особенно на глянцевом акриле. Пластиковая кухня отвечает блеском и чистотой.",
      icon: "Sparkle",
      bg: "from-violet-400 to-purple-500",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
    },
  ],
};
 
