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

    // Code Generation Section
    gen_title: "生产赋码",
    gen_desc:
      "在生产环节为每一个产品赋予定制的唯一身份标识（QR码），确保一包一码。",
    gen_label_product: "选择产品线",
    gen_label_batch: "生产批次",
    gen_btn_generate: "生成一包一码",
    gen_code_label: "当前生成码值",
    gen_product_milk_250: "乐美无菌砖包 250ml",
    gen_product_milk_1000: "乐美无菌砖包 1000ml",

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

    // Code Generation Section
    gen_title: "Trace Code Generation",
    gen_desc:
      "Assign a unique custom identity (QR Code) to each package during production.",
    gen_label_product: "Select Product Line",
    gen_label_batch: "Batch Number",
    gen_btn_generate: "Generate Unique Code",
    gen_code_label: "Generated Code Value",
    gen_product_milk_250: "Lamipak Aseptic 250ml",
    gen_product_milk_1000: "Lamipak Aseptic 1000ml",

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
      // Handle input placeholders
      if (
        el.tagName === "INPUT" ||
        el.tagName === "TEXTAREA" ||
        el.tagName === "SELECT"
      ) {
        // For inputs, we might want to update label or placeholder,
        // but here we are using data-i18n on the LABEL or Header usually.
        // If we want to change options in select:
        if (el.tagName === "OPTION") {
          el.innerText = dict[key];
        }
      } else {
        el.innerHTML = dict[key];
      }
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

// Store generated code details
let lastGeneratedCode = null;

// 2. 模拟赋码生成
function generateCode() {
  const productSelect = document.getElementById("product-select");
  // Get text content of selected option for display
  const productName = productSelect.options[productSelect.selectedIndex].text;
  const batchInput = document.getElementById("batch-input");
  const codeDisplay = document.getElementById("generated-code-display");
  const qrPreview = document.getElementById("qr-preview");

  // Generate random data
  const randomId = Math.random().toString(36).substring(2, 10).toUpperCase();
  const batch = batchInput.value || "BATCH001";
  const uniqueCode = `LAMI-${batch}-${randomId}`;

  // Store data for scanning
  const now = new Date();
  const expDate = new Date(now);
  expDate.setMonth(now.getMonth() + 6); // Assume 6 months shelf life

  lastGeneratedCode = {
    code: uniqueCode,
    product: productName,
    batch: batch,
    prodDate: now
      .toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "."),
    expDate: expDate
      .toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "."),
  };

  // Update Display
  codeDisplay.textContent = uniqueCode;
  codeDisplay.classList.remove("opacity-0");
  codeDisplay.classList.add("animate-pulse");

  // Update QR Code Visual
  qrPreview.style.backgroundImage = `url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${uniqueCode}')`;

  // Simulate updating the visual
  const packageVisual = document.getElementById("package-visual");
  packageVisual.classList.add("scale-105");
  setTimeout(() => packageVisual.classList.remove("scale-105"), 200);

  setTimeout(() => {
    codeDisplay.classList.remove("animate-pulse");
  }, 500);
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

    // Update result with generated code if available, in logic and text
    if (lastGeneratedCode) {
      document.getElementById("result-product-val").textContent =
        lastGeneratedCode.product;
      document.getElementById("result-batch-val").textContent =
        lastGeneratedCode.batch;
      document.getElementById("result-date-prod-val").textContent =
        lastGeneratedCode.prodDate;
      document.getElementById("result-date-exp-val").textContent =
        lastGeneratedCode.expDate;
    }

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
