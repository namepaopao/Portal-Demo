// --- 核心配置与状态 ---
const config = {
  currentLang: localStorage.getItem("lamipak-lang") || "zh",
};

console.log("App Initialized. Config:", config);

const translations = {
  zh: {
    title: "乐美包装 Lamipak Packaging - 智能包装解决方案",
    brand_name: "乐美包装",
    brand_full: "乐美包装 Lamipak Packaging",
    nav_home: "首页",
    nav_trace: "一包一码",
    nav_custom: "定制服务",
    nav_about: "关于我们",
    nav_contact: "联系我们",
    about_tag: "公司概况",
    about_title: "乐美包装（昆山）有限公司",
    about_intro:
      "1986年，乐美包装在芬兰成立，隶属于世界第二大的制浆造纸企业——APP集团，是全球三大拥有独立知识产权的纸质无菌液体包装的企业之一，独一无二的纸质圆柱形液体包装方案，使其在众多的液体包装中脱颖而出。",
    about_history_title: "发展历程",
    about_history_desc:
      "2007年APP集团斥资6亿元建立乐美包装昆山生产基地，厂房占地面积约2.5万平方米，拥有员工500余人。",
    about_facility_title: "一流设施",
    about_facility_desc:
      "厂房符合GMP标准，配置了先进的空气净化系统、防虫系统、无菌级消毒系统，获得了HACCP食品安全体系认证及QS认证。",
    about_equipment_title: "先进设备",
    about_equipment_desc:
      "配备世界一流全自动无菌包装生产设备，年产能可达50亿包。",
    about_products_title: "主营产品",
    about_products_desc:
      "利美无菌砖包、利美无菌枕包、利美罐产品、纸杯、淋膜纸、复合纸及利美罐灌装机等。",
    hero_title_1: "重新定义",
    hero_title_accent: "智能与可持续",
    hero_title_2: "的未来包装",
    hero_subtitle:
      "乐美包装致力于为全球客户提供“一包一码”数字化解决方案与高端客制化包装服务，保护产品，连接消费者。",
    hero_btn_custom: "探索定制方案",
    hero_btn_trace: "体验智能溯源",
    trace_tag: "核心技术",
    trace_title: "一包一码 · 数字化链接",
    trace_desc:
      "赋予每一个包装唯一的“数字身份证”，实现全链路追溯、防伪营销与消费者互动。",
    btn_view_details: "查看详情",
    trace_input_hint: "输入模拟码（如：LAMIPAK2024）体验溯源",
    trace_input_placeholder: "请输入包装上的代码",
    trace_btn_query: "查询",
    trace_loading: "正在查询区块链数据...",
    trace_success: "验证通过：正品乐美包装",
    trace_batch: "批次",
    trace_type: "定制类型",
    trace_type_val: "250ml 钻石包",
    adv_1_title: "全程溯源",
    adv_1_desc: "从原材料到消费者手中的每一步都清晰可见，建立品牌信任。",
    adv_2_title: "渠道管控",
    adv_2_desc: "有效防止窜货，实时监控库存与物流动态，优化供应链效率。",
    adv_3_title: "精准营销",
    adv_3_desc: "扫码领红包、积分会员体系，直接触达终端消费者。",
    sol_tag: "解决方案",
    sol_title: "高端客制化 & 柔性定制",
    sol_desc:
      "无论您需要传统的利乐砖、钻石包，还是异形创意包装，我们都能按需生产。",
    card_1_tag: "经典",
    card_1_title: "无菌砖系列",
    card_1_desc:
      "经典的砖型包装，适合牛奶、果汁等长保质期产品。支持 125ml - 1000ml 多规格定制。",
    card_2_tag: "环保",
    card_2_title: "植物基环保包",
    card_2_desc:
      "采用甘蔗提取物涂层，可再生材料占比高达85%。展示企业社会责任的最佳选择。",
    card_3_tag: "个性化",
    card_3_title: "异形与节日定制",
    card_3_desc:
      "为春节、中秋等节点提供特殊形状 or 金属质感印刷效果。小批量起订，快速交付。",
    card_btn_more: "查看参数",
    card_btn_design: "开始设计",
    cta_title: "准备好升级您的产品包装了吗？",
    cta_desc: "联系乐美包装专家团队，获取免费样品与技术咨询。",
    cta_btn_sales: "联系销售",
    cta_btn_manual: "下载产品手册",
    footer_slogan: "致力于创新的包装技术，守护品质，连接未来。",
    footer_col_1: "解决方案",
    footer_col_2: "公司",
    footer_col_3: "联系方式",
    footer_link_aseptic: "无菌包装",
    footer_link_machine: "灌装设备",
    footer_link_about: "关于我们",
    footer_link_sustain: "可持续发展",
    footer_link_news: "新闻中心",
    contact_tel: "电话",
    contact_email: "邮箱",
    contact_addr: "地址",
  },
  en: {
    title: "Lamipak Packaging - Smart Packaging Solutions",
    brand_name: "Lamipak",
    brand_full: "Lamipak Packaging",
    nav_home: "Home",
    nav_trace: "Smart Trace",
    nav_custom: "Solutions",
    nav_about: "About Us",
    nav_contact: "Contact",
    about_tag: "WHO WE ARE",
    about_title: "Lamipak Packaging (Kunshan) Co., Ltd.",
    about_intro:
      "Founded in 1986 in Finland and part of the APP Group (the world's second-largest pulp and paper enterprise), Lamipak Packaging is one of the top three companies globally with independent intellectual property rights for aseptic liquid paper packaging.",
    about_history_title: "Development",
    about_history_desc:
      "In 2007, APP Group invested 600 million RMB to establish the Kunshan production base, covering 25,000 sqm with 500+ employees.",
    about_facility_title: "Elite Facility",
    about_facility_desc:
      "GMP-standard plant with advanced air purification, pest control, and sterilization systems. Certified with HACCP and QS.",
    about_equipment_title: "Advanced Tech",
    about_equipment_desc:
      "Equipped with world-class automated production lines, reaching an annual capacity of 5 billion packs.",
    about_products_title: "Our Products",
    about_products_desc:
      "Aseptic bricks, pillows, cans, paper cups, coated paper, filling machines, and more.",
    hero_title_1: "Redefining",
    hero_title_accent: "Smart & Sustainable",
    hero_title_2: "Packaging Future",
    hero_subtitle:
      "Dedicated to providing unique 'One Pack, One Code' digital solutions and premium customized packaging services worldwide.",
    hero_btn_custom: "Explore Solutions",
    hero_btn_trace: "Try Smart Trace",
    trace_tag: "CORE TECHNOLOGY",
    trace_title: "One Pack, One Code",
    trace_desc:
      "Giving every package a unique 'Digital ID' for full traceability, anti-counterfeiting, and consumer engagement.",
    btn_view_details: "View Details",
    trace_input_hint: "Enter code (e.g., LAMIPAK2024) to trace",
    trace_input_placeholder: "Enter the code on package",
    trace_btn_query: "Query",
    trace_loading: "Querying blockchain data...",
    trace_success: "Verified: GENUINE LAMIPAK PRODUCT",
    trace_batch: "Batch",
    trace_type: "Spec",
    trace_type_val: "250ml Diamond Pack",
    adv_1_title: "Full Traceability",
    adv_1_desc:
      "Visible journey from raw materials to consumers, building brand trust.",
    adv_2_title: "Channel Control",
    adv_2_desc:
      "Prevent gray market distribution and optimize supply chain efficiency.",
    adv_3_title: "Precision Marketing",
    adv_3_desc:
      "Direct consumer engagement via digital rewards and membership systems.",
    sol_tag: "OUR SOLUTIONS",
    sol_title: "Premium & Flexible Customization",
    sol_desc:
      "From traditional aseptic bricks to creative shapes, we produce on demand.",
    card_1_tag: "Classic",
    card_1_title: "Aseptic Brick Series",
    card_1_desc:
      "Standard brick packaging for milk and juice. 125ml to 1000ml specifications available.",
    card_2_tag: "Eco-friendly",
    card_2_title: "Plant-based Eco Pack",
    card_2_desc:
      "Using sugarcane-based coating, up to 85% renewable materials. Best choice for CSR.",
    card_3_tag: "Personalized",
    card_3_title: "Creative & Seasonal",
    card_3_desc:
      "Special shapes or metallic effects for festivals. Small batch support, fast delivery.",
    card_btn_more: "Details",
    card_btn_design: "Start Design",
    cta_title: "Ready to Upgrade Your Packaging?",
    cta_desc:
      "Contact our expert team for free samples and technical consultation.",
    cta_btn_sales: "Contact Sales",
    cta_btn_manual: "Download Manual",
    footer_slogan:
      "Innovative packaging technology, protecting quality, connecting future.",
    footer_col_1: "Solutions",
    footer_col_2: "Company",
    footer_col_3: "Contact",
    footer_link_aseptic: "Aseptic Pack",
    footer_link_machine: "Filling Machine",
    footer_link_about: "About Us",
    footer_link_sustain: "Sustainability",
    footer_link_news: "News Center",
    contact_tel: "Tel",
    contact_email: "Email",
    contact_addr: "Addr",
  },
};

// --- 功能实现 ---

// 1. 语言切换
function updateLanguage() {
  const lang = config.currentLang;
  const dict = translations[lang];
  console.log("Update Language:", lang);

  // 更新普通的文本内容
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // 更新 Placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // 更新按钮显示能
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.textContent = lang === "zh" ? "EN" : "中文";
  }
  localStorage.setItem("lamipak-lang", lang);
}

function toggleLanguage() {
  config.currentLang = config.currentLang === "zh" ? "en" : "zh";
  updateLanguage();
}

// 3. 溯源查询逻辑
function checkCode() {
  const input = document.getElementById("traceInput").value.trim();
  const lang = config.currentLang;

  if (input.length > 0) {
    // 跳转到溯源页面并携带参数
    window.location.href = `smart-trace.html?code=${encodeURIComponent(input)}`;
  } else {
    alert(lang === "zh" ? "请输入代码" : "Please enter the code");
  }
}

// --- 初始化与页面效果 ---

// 1. 滚动淡入效果
const initAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });
};

// 2. 页面载入时执行
document.addEventListener("DOMContentLoaded", () => {
  updateLanguage();
  initAnimations();

  const navbar = document.getElementById("navbar");
  const heroBg = document.querySelector(".hero-bg");

  if (navbar) {
    window.addEventListener("scroll", () => {
      // 导航栏滚动效果
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      // 极简视差效果
      if (heroBg) {
        const scrollValue = window.scrollY;
        heroBg.style.transform = `translateY(${scrollValue * 0.15}px)`;
      }
    });
  }
});
