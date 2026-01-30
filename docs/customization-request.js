// --- 核心配置与状态 ---
const config = {
  currentLang: localStorage.getItem("lamipak-lang") || "zh",
  isDark: localStorage.getItem("lamipak-theme") === "dark",
  selectedPackage: null,
};

// --- 包材数据 ---
const packageTypes = [
  {
    id: "brick",
    nameZh: "无菌砖包",
    nameEn: "Aseptic Brick",
    descZh: "经典砖型，适合牛奶、果汁等长保质期产品",
    descEn: "Classic brick shape for milk and juice with long shelf life",
    image:
      "https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?w=400&h=300&fit=crop",
    specs: ["125ml", "200ml", "250ml", "500ml", "1000ml"],
    features: ["无菌灌装", "常温保存", "环保材料"],
  },
  {
    id: "pillow",
    nameZh: "无菌枕包",
    nameEn: "Aseptic Pillow",
    descZh: "柔性包装，成本优化，适合大批量生产",
    descEn: "Flexible packaging, cost-optimized for mass production",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
    specs: ["200ml", "250ml", "500ml"],
    features: ["轻量化", "节省空间", "快速灌装"],
  },
  {
    id: "eco",
    nameZh: "植物基环保包",
    nameEn: "Plant-based Eco Pack",
    descZh: "采用甘蔗提取物涂层，可再生材料占比高达85%",
    descEn: "Sugarcane-based coating, up to 85% renewable materials",
    image:
      "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=400&h=300&fit=crop",
    specs: ["250ml", "500ml", "1000ml"],
    features: ["可持续", "碳中和", "FSC认证"],
  },
  {
    id: "custom",
    nameZh: "异形定制包",
    nameEn: "Custom Shape",
    descZh: "特殊形状、节日主题、金属质感印刷",
    descEn: "Special shapes, seasonal themes, metallic printing",
    image:
      "https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=400&h=300&fit=crop",
    specs: ["定制规格"],
    features: ["个性化", "小批量", "快速交付"],
  },
];

// --- 多语言翻译 ---
const translations = {
  zh: {
    custom_page_title: "客制化需求提交 - 乐美包装",
    brand_name: "乐美包装",
    brand_full: "乐美包装 Lamipak Packaging",
    back_home: "返回首页",
    custom_tag: "定制服务",
    custom_title: "提交您的客制化需求",
    custom_subtitle:
      "选择包材类型、配方需求，我们将为您免费提供专业小样（试用装）",
    step1_title: "选择包材类型",
    step2_title: "配方需求",
    step3_title: "小样申请信息",

    // 配方相关
    formula_product_type: "产品类型",
    formula_capacity: "容量规格 (ml)",
    formula_shelf_life: "保质期要求",
    formula_special: "特殊要求",
    formula_details: "配方详细说明",
    formula_details_placeholder:
      "请详细描述您的配方需求，包括成分、口味、浓度等...",

    select_placeholder: "请选择",
    product_milk: "牛奶/乳制品",
    product_juice: "果汁/饮料",
    product_tea: "茶饮",
    product_water: "饮用水",
    product_other: "其他",

    capacity_custom: "自定义",

    shelf_7days: "7天（冷藏）",
    shelf_30days: "30天（冷藏）",
    shelf_90days: "90天（常温）",
    shelf_180days: "180天（常温）",
    shelf_365days: "365天（常温）",

    special_organic: "有机认证",
    special_sugarfree: "无糖",
    special_lowfat: "低脂",

    // 联系信息
    contact_company: "公司名称 *",
    contact_company_placeholder: "请输入公司名称",
    contact_name: "联系人 *",
    contact_name_placeholder: "请输入联系人姓名",
    contact_phone: "联系电话 *",
    contact_phone_placeholder: "请输入联系电话",
    contact_email: "电子邮箱 *",
    contact_email_placeholder: "请输入电子邮箱",
    contact_address: "收货地址 *",
    contact_address_placeholder: "请输入详细收货地址",
    contact_notes: "备注",
    contact_notes_placeholder: "其他需要说明的信息...",

    sample_quantity: "小样数量",
    estimated_volume: "预计年用量",

    volume_10k: "1万以下",
    volume_50k: "1-5万",
    volume_100k: "5-10万",
    volume_500k: "10-50万",
    volume_1m: "50万以上",

    submit_request: "提交需求",
    submit_note: "提交后，我们的专家团队将在24小时内与您联系",

    // 包材卡片
    select_package: "选择",
    selected: "已选择",
    specs: "规格",
    features: "特性",

    // 提交反馈
    submit_success: "提交成功！",
    submit_success_msg: "感谢您的提交！我们的专家团队将在24小时内与您联系。",
    submit_error: "提交失败",
    submit_error_msg: "请检查您的网络连接后重试。",
    validation_error: "请填写所有必填项",
    validation_package: "请选择包材类型",
  },
  en: {
    custom_page_title: "Customization Request - Lamipak",
    brand_name: "Lamipak",
    brand_full: "Lamipak Packaging",
    back_home: "Back to Home",
    custom_tag: "CUSTOMIZATION",
    custom_title: "Submit Your Customization Request",
    custom_subtitle:
      "Select package type and formula requirements, we'll provide free professional samples",
    step1_title: "Select Package Type",
    step2_title: "Formula Requirements",
    step3_title: "Sample Request Information",

    formula_product_type: "Product Type",
    formula_capacity: "Capacity (ml)",
    formula_shelf_life: "Shelf Life",
    formula_special: "Special Requirements",
    formula_details: "Formula Details",
    formula_details_placeholder:
      "Please describe your formula requirements in detail, including ingredients, flavor, concentration, etc...",

    select_placeholder: "Please select",
    product_milk: "Milk/Dairy",
    product_juice: "Juice/Beverage",
    product_tea: "Tea",
    product_water: "Water",
    product_other: "Other",

    capacity_custom: "Custom",

    shelf_7days: "7 days (Refrigerated)",
    shelf_30days: "30 days (Refrigerated)",
    shelf_90days: "90 days (Ambient)",
    shelf_180days: "180 days (Ambient)",
    shelf_365days: "365 days (Ambient)",

    special_organic: "Organic Certified",
    special_sugarfree: "Sugar Free",
    special_lowfat: "Low Fat",

    contact_company: "Company Name *",
    contact_company_placeholder: "Enter company name",
    contact_name: "Contact Person *",
    contact_name_placeholder: "Enter contact name",
    contact_phone: "Phone *",
    contact_phone_placeholder: "Enter phone number",
    contact_email: "Email *",
    contact_email_placeholder: "Enter email address",
    contact_address: "Shipping Address *",
    contact_address_placeholder: "Enter detailed shipping address",
    contact_notes: "Notes",
    contact_notes_placeholder: "Additional information...",

    sample_quantity: "Sample Quantity",
    estimated_volume: "Estimated Annual Volume",

    volume_10k: "Under 10k",
    volume_50k: "10k-50k",
    volume_100k: "50k-100k",
    volume_500k: "100k-500k",
    volume_1m: "Over 500k",

    submit_request: "Submit Request",
    submit_note:
      "Our expert team will contact you within 24 hours after submission",

    select_package: "Select",
    selected: "Selected",
    specs: "Specs",
    features: "Features",

    submit_success: "Success!",
    submit_success_msg:
      "Thank you for your submission! Our expert team will contact you within 24 hours.",
    submit_error: "Submission Failed",
    submit_error_msg: "Please check your network connection and try again.",
    validation_error: "Please fill in all required fields",
    validation_package: "Please select a package type",
  },
};

// --- 功能实现 ---

// 1. 渲染包材选项
function renderPackageOptions() {
  const container = document.getElementById("packageOptions");
  const lang = config.currentLang;
  const dict = translations[lang];

  container.innerHTML = packageTypes
    .map(
      (pkg) => `
    <div class="package-option bg-white dark:bg-darkCard rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all ${config.selectedPackage === pkg.id ? "selected" : ""}" 
         onclick="selectPackage('${pkg.id}')">
      <div class="relative h-48 overflow-hidden">
        <img src="${pkg.image}" alt="${lang === "zh" ? pkg.nameZh : pkg.nameEn}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div class="absolute bottom-3 left-3 right-3">
          <h3 class="text-white font-bold text-lg">${lang === "zh" ? pkg.nameZh : pkg.nameEn}</h3>
        </div>
      </div>
      <div class="p-5">
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">${lang === "zh" ? pkg.descZh : pkg.descEn}</p>
        <div class="mb-3">
          <div class="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">${dict.specs}:</div>
          <div class="flex flex-wrap gap-1">
            ${pkg.specs.map((spec) => `<span class="formula-tag bg-lemei-100 dark:bg-lemei-900/30 text-lemei-700 dark:text-lemei-300">${spec}</span>`).join("")}
          </div>
        </div>
        <div>
          <div class="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">${dict.features}:</div>
          <div class="flex flex-wrap gap-1">
            ${pkg.features.map((feature) => `<span class="formula-tag bg-accent/10 text-accent">${feature}</span>`).join("")}
          </div>
        </div>
        <div class="mt-4 text-center">
          <span class="text-sm font-bold ${config.selectedPackage === pkg.id ? "text-lemei-600" : "text-slate-400"}">
            ${config.selectedPackage === pkg.id ? "✓ " + dict.selected : dict.select_package}
          </span>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

// 2. 选择包材
function selectPackage(packageId) {
  config.selectedPackage = packageId;
  renderPackageOptions();
}

// 3. 语言切换
function updateLanguage() {
  const lang = config.currentLang;
  const dict = translations[lang];

  // 更新普通文本
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

  // 更新按钮显示
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.textContent = lang === "zh" ? "EN" : "中文";
  }

  // 更新页面标题
  document.title = dict.custom_page_title;

  // 重新渲染包材选项
  renderPackageOptions();

  localStorage.setItem("lamipak-lang", lang);
}

function toggleLanguage() {
  config.currentLang = config.currentLang === "zh" ? "en" : "zh";
  updateLanguage();
}

// 4. 暗色模式切换
function applyTheme() {
  if (config.isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("lamipak-theme", config.isDark ? "dark" : "light");
}

function toggleDarkMode() {
  config.isDark = !config.isDark;
  applyTheme();
}

// 5. 表单验证
function validateForm() {
  const lang = config.currentLang;
  const dict = translations[lang];

  // 检查是否选择了包材
  if (!config.selectedPackage) {
    alert(dict.validation_package);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  }

  // 检查必填字段
  const requiredFields = [
    "companyName",
    "contactName",
    "contactPhone",
    "contactEmail",
    "shippingAddress",
  ];

  for (let fieldId of requiredFields) {
    const field = document.getElementById(fieldId);
    if (!field.value.trim()) {
      alert(dict.validation_error);
      field.focus();
      return false;
    }
  }

  // 验证邮箱格式
  const email = document.getElementById("contactEmail").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert(
      lang === "zh"
        ? "请输入有效的邮箱地址"
        : "Please enter a valid email address",
    );
    document.getElementById("contactEmail").focus();
    return false;
  }

  return true;
}

// 6. 提交表单
function submitRequest() {
  if (!validateForm()) {
    return;
  }

  const lang = config.currentLang;
  const dict = translations[lang];

  // 收集表单数据
  const formData = {
    packageType: config.selectedPackage,
    productType: document.getElementById("productType").value,
    capacity: document.getElementById("capacity").value,
    shelfLife: document.getElementById("shelfLife").value,
    specialRequirements: Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked'),
    ).map((cb) => cb.value),
    formulaDetails: document.getElementById("formulaDetails").value,
    companyName: document.getElementById("companyName").value,
    contactName: document.getElementById("contactName").value,
    contactPhone: document.getElementById("contactPhone").value,
    contactEmail: document.getElementById("contactEmail").value,
    shippingAddress: document.getElementById("shippingAddress").value,
    sampleQuantity: document.getElementById("sampleQuantity").value,
    estimatedVolume: document.getElementById("estimatedVolume").value,
    notes: document.getElementById("notes").value,
    timestamp: new Date().toISOString(),
    language: lang,
  };

  console.log("提交的表单数据:", formData);

  // 模拟提交（实际项目中应该发送到后端API）
  // 这里使用 setTimeout 模拟异步请求
  const submitButton = event.target;
  submitButton.disabled = true;
  submitButton.innerHTML = lang === "zh" ? "提交中..." : "Submitting...";

  setTimeout(() => {
    // 模拟成功
    alert(`${dict.submit_success}\n\n${dict.submit_success_msg}`);

    // 重置表单
    window.location.href = "index.html";
  }, 1500);

  // 实际使用时的代码示例:
  /*
  fetch('/api/customization-request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    alert(`${dict.submit_success}\n\n${dict.submit_success_msg}`);
    window.location.href = 'index.html';
  })
  .catch(error => {
    console.error('Error:', error);
    alert(`${dict.submit_error}\n\n${dict.submit_error_msg}`);
    submitButton.disabled = false;
    submitButton.innerHTML = dict.submit_request;
  });
  */
}

// 7. 滚动淡入效果
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

// 8. 处理 URL 参数
function handleUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get("type");
  if (type && packageTypes.some((p) => p.id === type)) {
    config.selectedPackage = type;

    // 滚动到包材选择区域
    setTimeout(() => {
      const packageSection = document.getElementById("packageOptions");
      if (packageSection) {
        packageSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 500);
  }
}

// --- 初始化 ---
document.addEventListener("DOMContentLoaded", () => {
  handleUrlParams(); // 先处理URL参数
  updateLanguage();
  applyTheme();
  renderPackageOptions();
  initAnimations();
});
