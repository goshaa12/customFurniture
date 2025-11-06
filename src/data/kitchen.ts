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
  items: ServiceItem[];
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
  title: "Кухни на заказ в Алматы за 10 дней",
  highlight: "от 90 000 тг/м²",
  subtitle: "Не откладывайте расчёт — узнайте точную стоимость прямо сейчас.",
  benefits: [
    {
      icon: "Lightbulb",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Разработка персонального дизайна",
    },
    {
      icon: "Users",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Бесплатный выезд мастера для снятия замеров",
    },
    {
      icon: "PartyPopper",
      iconClass: "w-4 h-4 text-yellow-600",
      bgClass: "bg-yellow-100",
      text: "Каменная мойка в подарок при заказе",
    },
  ],
  buttonText: "Рассчитать стоимость кухни на заказ",
  buttonHref: "#calculator",
  imageSrc: "/images/home/kitchen-hero.webp",
};

// Константы для Services компонента
export const servicesData: ServicesData = {
  title: "О нас",
  subtitle: "Ваш кухонный гарнитур — это долгосрочная инвестиция в уют.",
  items: [
    { name: "Создаём кухни, в которых хочется жить, мечтать, вдохновляться, а не просто готовить." },
    { name: "Вы называете бюджет — мы подбираем варианты без переплат и компромиссов по качеству." },
    { name: "От первого замера до последнего шурупа — идеальный результат «под ключ», без стрессов и переделок." },
  ],
};

// Константы для WhyUs компонента
export const whyUsData: WhyUsData = {
  title: "Почему клиенты заказывают кухни у нас?",
  advantages: [
    {
      title: "10 лет создаём кухни в Алматы на заказ",
      text: "Мы производим кухонную мебель на заказ с 2011 года. За это время реализовали сотни проектов в Алматы — от небольших кухонь в студиях до просторных гарнитуров для частных домов.",
    },
    {
      title: "Более 20 моделей — выберите кухню под свой стиль",
      text: "В каталоге представлены десятки вариантов: модерн, классика, минимализм, лофт и хай-тек. Вы можете заказать кухню в Алматы с индивидуальной планировкой и цветом под интерьер.",
    },
    {
      title: "Бесплатный замер и дизайн до заказа кухни",
      text: "Замер, 3D-визуализация и расчёт выполняются бесплатно. Вы заранее видите, как будет выглядеть кухня, и можете скорректировать проект до подписания договора.",
    },
    {
      title: "Гарантия 12 месяцев на каждую кухню",
      text: "Каждый кухонный гарнитур на заказ проходит контроль качества и установку по стандартам фабрики. Гарантия на год подтверждает нашу ответственность и надёжность.",
    },
    {
      title: "Договор и прозрачность на каждом этапе",
      text: "Мы работаем официально, оформляем двухсторонний договор с точными сроками и стоимостью. Кухни в Алматы на заказ выполняются строго по проекту, без скрытых платежей и задержек.",
    },
    {
      title: "Эко-материалы и монтаж без лишней суеты",
      text: "Используем сертифицированные материалы и проверенную фурнитуру. Установка проходит аккуратно: кухня монтируется быстро, без шума, пыли и повреждений вашего ремонта.",
    },
  ],
  ctaButton: {
    text: "Заказать кухню",
    href: "#form",
  },
};

// Константы для HowItWorks компонента
export const howItWorksData: HowItWorksData = {
  title: "Как проходит изготовление кухни на заказ?",
  subtitle: "Не тратьте время на поиски подрядчиков и нервные согласования — закажите кухню у одной команды, которая возьмёт всё под контроль и оставьте заявку!",
  gridCols: 2,
  steps: [
    {
      step: "1",
      title: "Заявка и согласование замера",
      text: "Оставляете заявку онлайн или по телефону — мы подстраиваемся под ваш график и назначаем удобное время для приезда замерщика.",
      icon: "FileText",
      bg: "from-rose-400 to-pink-500",
    },
    {
      step: "2",
      title: "Замер и 3D-проект",
      text: "Специалист точно замеряет помещение, обсуждает будущую кухню и сразу создаёт 3D-визуализацию, чтобы вы увидели, как всё будет выглядеть.",
      icon: "Users",
      bg: "from-purple-400 to-indigo-500",
    },
    {
      step: "3",
      title: "Договор и запуск в производство",
      text: "После утверждения дизайна и материалов подписывается договор, и кухня отправляется в производство на нашей фабрике.",
      icon: "Lightbulb",
      bg: "from-blue-400 to-cyan-500",
    },
    {
      step: "4",
      title: "Доставка, монтаж и гарантия",
      text: "Мы аккуратно доставляем и собираем кухню на объекте, проверяем каждый элемент и предоставляем официальную гарантию.",
      icon: "Truck",
      bg: "from-green-400 to-teal-500",
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
  title: "Надёжность и комфорт: системы, которые делают кухонный гарнитур идеальным",
  items: [
    {
      title: "Tandembox от Blum — комфорт и долговечность в каждой детали кухонного гарнитура на заказ",
      text: `Система TANDEMBOX создана для тех, кто ценит плавность и точность движений. Ящики скользят мягко, без перекосов, даже при полной загрузке до 65 кг — идеальное решение для долговечной эксплуатации и безупречного внешнего вида.`,
      icon: "Box",
      bg: "from-rose-400 to-pink-500",
    },
    {
      title: "AVENTOS HF от Blum — лёгкий подъём фасадов для недорогих кухонь на заказ",
      text: `Механизм AVENTOS HF поднимает даже самые высокие фасады без усилий и фиксирует их в нужном положении. Это решение экономит пространство, делает кухню удобнее и придаёт современный, элегантный стиль без лишних затрат.`,
      icon: "Zap",
      bg: "from-blue-400 to-cyan-500",
    },
  ],
};

// Константы для ReUsableTable компонента
export const reUsableTableData: ReUsableTableData = {
  title: "Какие кухни мы делаем?",
  subtitle: "Мы не работаем по готовым шаблонам. Наша цель — изготовить такую кухню на заказ, которая полностью отражает ваши предпочтения.",
  table: {
    columns: [
      { key: "type", header: "Вид кухни" },
      { key: "description", header: "Описание" },
      { key: "button", header: "Кнопка и ссылка", isButton: true, linkKey: "link" },
    ],
    rows: [
      {
        type: "Прямые кухни",
        description: "Идеальны для небольших помещений: всё располагается вдоль одной стены, удобно и компактно. Отличное решение для квартир-студий.",
        button: "Подробнее",
        link: "#",
      },
      {
        type: "Угловые кухни",
        description: "Практичная планировка в форме «Г», где задействован каждый угол. Позволяет разместить мойку, плиту и рабочую зону максимально рационально.",
        button: "Подробнее",
        link: "#",
      },
      {
        type: "Кухни из ЛДСП",
        description: "Бюджетный вариант: прочные, влагостойкие фасады и десятки оттенков под дерево. Отличный выбор для первой кухни.",
        button: "Подробнее",
        link: "#",
      },
      {
        type: "Кухни из МДФ",
        description: "Универсальный баланс цены и качества. МДФ-фасады выглядят современно, легко очищаются и служат годами.",
        button: "Подробнее",
        link: "#",
      },
      {
        type: "Кухни из пластика",
        description: "Современные глянцевые поверхности, устойчивые к влаге и ударам. Пластиковая кухня сохраняет цвет и блеск долгие годы.",
        button: "Подробнее",
        link: "#",
      },
    ],
  },
};
 
export const reUsableTableData2: ReUsableTableData = {
  title: "Сравните, как мы работаем — и почему клиенты возвращаются к нам снова",
  subtitle: "Мы занимаемся изготовлением кухонной мебели на заказ, где продумана каждая мелочь — от выбора материалов до точной установки. Сравните сами, как отличается работа профессионалов, когда кухня становится не просто красивой, а практичной.",
  table: {
    columns: [
      { key: "criterion", header: "Критерий" },
      { key: "ourCompany", header: "Мы" },
      { key: "otherCompanies", header: "Другие компании" },
    ],
    rows: [
      {
        criterion: "Подбор материалов",
        ourCompany: "Предлагаем образцы прямо на замере, чтобы вы могли выбрать подходящие материалы для своей кухни.",
        otherCompanies: "Ограничиваются только каталогом на сайте, без реальных образцов и примеров будущей кухни.",
      },
      {
        criterion: "Контроль на всех этапах",
        ourCompany: "Менеджер сопровождает изготовление кухни на заказ от первого эскиза до установки, контролируя каждый этап.",
        otherCompanies: "После оплаты связь теряется, процесс установки кухни остаётся без контроля.",
      },
      {
        criterion: "Фурнитура и комплектующие",
        ourCompany: "Используем Blum, Hettich, Boyard — надёжные механизмы, которые продлевают срок службы кухни и делают её удобной.",
        otherCompanies: "Применяют дешёвые комплектующие, которые быстро выходят из строя.",
      },
      {
        criterion: "Сборка и монтаж",
        ourCompany: "Мастера устанавливают кухни аккуратно, без мусора и повреждений, сразу готовые к использованию.",
        otherCompanies: "Часто работают временные сборщики, оставляют следы, пыль и неровности.",
      },
      {
        criterion: "Послепродажное обслуживание",
        ourCompany: "Всегда на связи — помогаем даже при мелких доработках, чтобы ваша кухня долго оставалась в идеальном состоянии.",
        otherCompanies: "После установки контакты теряются, помощь не оказывается.",
      },
    ],
  },
};
 
export const reUsableTableData3: ReUsableTableData = {
  title: "Цены на кухни под заказ",
  subtitle: "Мы верим, что качественный кухонный гарнитур должен быть доступным. Благодаря собственному производству в Алматы и прямым поставкам мы предлагаем оптимальное соотношение стоимости кухни под заказ и качества.",
  table: {
    columns: [
      { key: "category", header: "Категория кухонного гарнитура" },
      { key: "material", header: "Материал фасада" },
      { key: "price", header: "Цена за погонный метр (от) в тенге" },
    ],
    rows: [
      {
        category: "Эконом",
        material: "ЛДСП (российское)",
        price: "90 000",
      },
      {
        category: "Стандарт",
        material: "Плёночный МДФ",
        price: "130 000",
      },
      {
        category: "Оптима",
        material: "Акриловый МДФ",
        price: "160 000",
      },
      {
        category: "Премиум",
        material: "Крашеный МДФ (Эмаль)",
        price: "190 000",
      },
      {
        category: "Люкс",
        material: "Шпон, Пластик HPL",
        price: "220 000",
      },
    ],
  },
  additionalText: "Обратите внимание: стоимость кухонного гарнитура зависит от выбранных комплектующих, столешницы и сложности дизайнерской концепции.",
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
  title: "Рассчитайте стоимость кухни на заказ сейчас!",
  subtitle: "Хватит теряться в догадках! У вас есть возможность узнать цену кухни под заказ всего за пару минут.",
  furnitureTypes: [
    { value: "kitchen", label: "Кухня" },
  ],
  materials: [
    { value: "ldsp", label: "ЛДСП" },
    { value: "acrylic", label: "Акрил" },
    { value: "film", label: "Плёночный" },
    { value: "painted", label: "Крашеный МДФ" },
    { value: "veneer", label: "Шпон" },
  ],
  hardwareOptions: [
    { value: "standard", label: "Стандарт (Boyard)" },
    { value: "premium", label: "Премиум-класс (Blum)" },
  ],
  configurations: [
    { value: "straight", label: "Прямая" },
    { value: "corner", label: "Угловая" },
    { value: "u-shaped", label: "П-образная" },
    { value: "island", label: "С островной зоной" },
  ],
  additionalOptions: [
    { value: "plastic", label: "Пластиковое покрытие 38 мм" },
    { value: "stone", label: "Искусственный камень" },
  ],
  deadlineOptions: [
    { value: "standard", label: "Стандартный (10–15 дней)" },
    { value: "urgent", label: "Ускоренный (5–7 дней)" },
  ],
  buttonText: "Хочу узнать",
  additionalText: "Узнайте точную стоимость и сроки изготовления своей кухни уже сегодня — без ожиданий и лишних звонков.",
  contactFields: {
    name: "Имя",
    phone: "Телефон",
    email: "Email или Telegram",
    emailLabel: "(по желанию) Email или Telegram — чтобы отправить готовый результат и уточнить детали",
  },
  dimensionsLabels: {
    length: "Общая протяжённость кухни (укажите метраж)",
    height: "Желаемая высота гарнитура (введите нужный размер)",
    depth: "Глубина (см)",
  },
};

// Константы для Companys компонента
export const companysData: CompanysData = {
  title: "Нам доверяют",
  subtitle: "За годы работы мы заслужили доверие не только частных клиентов, но и крупных компаний.",
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
  title: "Истории наших клиентов",
  reviews: [
    {
      author: "Айжан Г.",
      text: "«Я очень долго выбирала, где купить кухню под заказ. Ваша 3D-схема сразу покорила! Сделали всего за 15 дней. Сборщики работали очень аккуратно, ни пылинки, ни соринки!»",
      rating: 5,
      borderColor: "border-pink-400",
      avatarColor: "from-pink-100 to-rose-200",
      avatarInitial: "А",
    },
    {
      author: "Данияр А.",
      text: "«Сделали П-образный гарнитур по сложному референсу, жена вручную делала эскиз своей кухни мечты. Всё работает бесшумно. Цена оказалась ниже, чем у конкурентов в Алматы. Мы невероятно довольны».",
      rating: 5,
      borderColor: "border-blue-400",
      avatarColor: "from-blue-100 to-cyan-200",
      avatarInitial: "Д",
    },
    {
      author: "Елена М.",
      text: "«Спасибо за проделанную работу! Заказала прямую кухню с фасадами из акрила. Смотрится стильно и современно. Особенно порадовала каменная мойка в подарок — мелочь, а приятно!»",
      rating: 5,
      borderColor: "border-purple-400",
      avatarColor: "from-purple-100 to-indigo-200",
      avatarInitial: "Е",
    },
  ],
};

// Константы для ContactForm компонента
export const contactFormData: ContactFormData = {
  title: "Хотите оформить заказ? Получите бесплатную консультацию!",
  subtitle: "Не знаете, с какой стороны подступиться к выбору нового кухонного гарнитура на заказ? Просто оставьте заявку на расчёт!",
  description: "Наш специалист бесплатно поможет вам подобрать стиль, материалы и рассчитает стоимость изготовления кухонной мебели в Алматы. Мы берём на себя весь процесс, а для вас — никакой головной боли!",
  nameLabel: "Имя",
  phoneLabel: "Телефон",
  buttonText: "Рассчитать стоимость гарнитура мечты",
};
 
