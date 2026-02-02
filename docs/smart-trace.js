// --- 核心配置与状态 ---
const config = {
  currentLang: localStorage.getItem("lamipak-lang") || "zh",
};

const translations = {
  zh: {
    brand_name: "乐美包装",
    brand_full: "乐美包装 Lamipak Packaging",
    back_home: "返回首页",
    trace_tag_header: "One Pack One Code",
    trace_header_title: "智能溯源 链接未来",
    trace_header_desc:
      "通过独一无二的二维码身份证，打通供应链全链路，实现产品防伪、渠道管控与数字化营销。",
    btn_try_demo: "在线演示",

    val_1_title: "正品防伪",
    val_1_desc:
      "基于一物一码技术，赋予每个产品唯一的身份标识，消费者扫码即可查验真伪，有效打击假冒伪劣。",
    val_2_title: "渠道管控",
    val_2_desc:
      "实时监控产品流向，自动预警窜货行为。帮助品牌商掌控各级经销商库存，优化供应链管理。",
    val_3_title: "数字化营销",
    val_3_desc:
      "扫码领红包、积分抽奖等多种互动方式，建立品牌与消费者的直接连接，沉淀私域流量。",

    data_title: "实时数据洞察",
    data_desc:
      "每一次扫码都会转化为有价值的数据资产。通过我们的数据中台，您可以实时查看扫码热力图、消费者画像及库存动态。",
    btn_learn_platform: "了解数据平台",

    // Added translations
    scan_screen_text: "扫描中",
    btn_simulate_scan: "点击模拟扫码",
    result_title: "正品验证通过",
    result_time_label: "查询时间:",
    result_product: "产品名称",
    result_product_val: "乐美无菌砖包 250ml",
    result_batch: "生产批次",
    result_date_prod: "生产日期",
    result_date_exp: "保质期至",
    btn_rescan: "重新扫描",
    label_enterprise_view: "企业端视图",
    stat_geo: "扫码地理位置分布",
    stat_time: "扫码时间段分析",
    stat_repurchase: "复购率统计",
  },
  en: {
    brand_name: "Lamipak",
    brand_full: "Lamipak Packaging",
    back_home: "Back to Home",
    trace_tag_header: "One Pack One Code",
    trace_header_title: "Smart Traceability, Connecting Future",
    trace_header_desc:
      "Connect the entire supply chain through unique QR code identities, enabling anti-counterfeiting, channel control, and digital marketing.",
    btn_try_demo: "Live Demo",

    val_1_title: "Anti-Counterfeiting",
    val_1_desc:
      "Give every product a unique identity. Consumers can verify authenticity by scanning, effectively combating counterfeits.",
    val_2_title: "Channel Control",
    val_2_desc:
      "Monitor product flow in real-time and alert on cross-region sales. Help brands manage distributor inventory and optimize supply chain.",
    val_3_title: "Digital Marketing",
    val_3_desc:
      "Connect directly with consumers through scan-to-win, loyalty points, and other interactive methods to build private domain traffic.",

    data_title: "Real-time Data Insights",
    data_desc:
      "Every scan turns into a valuable data asset. View scan heatmaps, consumer profiles, and inventory dynamics in real-time through our data platform.",
    btn_learn_platform: "Learn Data Platform",

    // Added translations
    scan_screen_text: "Scanning",
    btn_simulate_scan: "Simulate Scan",
    result_title: "Authenticity Verified",
    result_time_label: "Query Time:",
    result_product: "Product Name",
    result_product_val: "Lamipak Aseptic Brick 250ml",
    result_batch: "Batch Number",
    result_date_prod: "Production Date",
    result_date_exp: "Expiration Date",
    btn_rescan: "Scan Again",
    label_enterprise_view: "Enterprise View",
    stat_geo: "Scan Geo-Distribution",
    stat_time: "Scan Time Analysis",
    stat_repurchase: "Repurchase Rate Stats",
  },
};

// --- 功能实现 ---

// 1. 语言切换
function updateLanguage() {
  const lang = config.currentLang;
  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

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

// 3. 模拟扫码演示
function simulateScan() {
  const scanScreen = document.getElementById("scan-screen");
  const resultScreen = document.getElementById("result-screen");

  // 隐藏扫描界面
  scanScreen.style.opacity = "0";
  scanScreen.style.pointerEvents = "none";

  // 显示结果界面
  setTimeout(() => {
    resultScreen.style.opacity = "1";
    resultScreen.style.pointerEvents = "auto";

    // 设置当前时间
    const now = new Date();
    document.getElementById("scan-time").textContent = now.toLocaleString(
      config.currentLang === "zh" ? "zh-CN" : "en-US",
    );
  }, 500);
}

function resetScan() {
  const scanScreen = document.getElementById("scan-screen");
  const resultScreen = document.getElementById("result-screen");

  // 隐藏结果界面
  resultScreen.style.opacity = "0";
  resultScreen.style.pointerEvents = "none";

  // 显示扫描界面
  setTimeout(() => {
    scanScreen.style.opacity = "1";
    scanScreen.style.pointerEvents = "auto";
  }, 500);
}

// 4. 滚动淡入效果
const initAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });
};

// --- 初始化 ---
document.addEventListener("DOMContentLoaded", () => {
  updateLanguage();
  initAnimations();
});
