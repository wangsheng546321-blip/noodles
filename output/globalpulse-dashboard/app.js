(function () {
  const DATA = window.GP_DATA;
  const pages = [
    ["overview", "Overview", "index.html"],
    ["orders", "Orders", "orders.html"],
    ["products", "Products", "products.html"],
    ["logistics", "Logistics", "logistics.html"],
    ["ads", "Ads", "ads.html"],
    ["finance", "Finance", "finance.html"]
  ];
  const orderFilters = ["All", "Paid", "Pending", "Refund review", "Exception"];
  const langStorageKey = "globalpulse-lang";
  const supportedLangs = ["en", "zh"];

  const i18n = {
    en: {
      pages: { overview: "Overview", orders: "Orders", products: "Products", logistics: "Logistics", ads: "Ads", finance: "Finance" },
      shell: {
        navAria: "GlobalPulse navigation",
        brandAria: "GlobalPulse Overview",
        brandSubtitle: "Cross-border command",
        liveMock: "Live mock",
        openNavigation: "Open navigation",
        closeNavigation: "Close navigation",
        languageAria: "Language switcher"
      },
      language: { en: "EN", zh: "中文" },
      actions: { reviewOrders: "Review Orders", checkLogistics: "Check Logistics" },
      charts: {
        salesSignal: "Global Sales Signal",
        gmvTrend: "GMV trend · last 12 periods",
        gmvIndex: "GMV index",
        trendAria: "{label} trend",
        momTag: "+18.4% MoM"
      },
      overview: {
        title: "Operate every market from one signal layer.",
        lead: "GlobalPulse gives sellers a dense executive view of global GMV, orders, fulfillment quality, ad returns and cash movement. Built with high-fidelity mock data for showroom demos.",
        eyebrow: "Overview",
        marketTitle: "Market Performance",
        marketSubtitle: "Top destination markets by GMV",
        regionCount: "5 regions",
        riskTitle: "Risk Radar",
        riskSubtitle: "Operational alerts across logistics, ads and finance"
      },
      orders: {
        title: "Orders control tower for cross-border exceptions.",
        lead: "Search and filter high-fidelity mock orders, then open the order drawer to inspect payment, logistics, SKU, ETA and risk status.",
        eyebrow: "Orders",
        streamTitle: "Order Stream",
        streamSubtitle: "Click any row to open the demo detail drawer",
        count: "{count} orders",
        searchPlaceholder: "Search order, customer, market, SKU...",
        searchAria: "Search orders",
        empty: "No matching orders.",
        table: ["Order", "Customer", "Market", "Channel", "Value", "Status", "Logistics", "Risk"]
      },
      drawer: {
        title: "Order Detail",
        close: "Close",
        orderValue: "Order value",
        paymentStatus: "Payment status",
        logisticsStatus: "Logistics status",
        riskLevel: "Risk level",
        recommended: "Recommended action",
        highAction: "Escalate to logistics owner, notify customer service and pause auto-refund until carrier scan is verified.",
        normalAction: "Keep automated customer update active and monitor next carrier scan."
      },
      products: {
        title: "SKU intelligence for stock, margin and rating.",
        lead: "Track sell-through, margin quality, stock pressure and product health without leaving the merchant command layer.",
        eyebrow: "Products",
        stock: "Stock",
        daysLeft: "Days left",
        margin: "Margin",
        rating: "Rating",
        watchlistTitle: "Inventory Watchlist",
        watchlistSubtitle: "Low stock and high velocity SKUs",
        table: ["SKU", "Name", "Stock", "Days Left", "Sales", "Action"]
      },
      logistics: {
        title: "Fulfillment visibility from warehouse to last mile.",
        lead: "Monitor lane quality, customs drag, carrier exceptions and SLA health across global shipping routes.",
        eyebrow: "Logistics",
        laneTitle: "Lane Performance",
        laneSubtitle: "Carrier SLA and exception volume",
        table: ["Lane", "Carrier", "On-time", "Avg days", "Exceptions", "Status"]
      },
      ads: {
        title: "Ad spend cockpit for ROAS and creative pressure.",
        lead: "A focused campaign view for seller operators balancing growth, payback and channel fatigue.",
        eyebrow: "Ads",
        roasTrend: "ROAS Trend",
        blendedPerformance: "Blended paid performance",
        optimizationTitle: "Optimization Notes",
        optimizationSubtitle: "Suggested media actions",
        spend: "Spend",
        revenue: "Revenue",
        cpa: "CPA"
      },
      finance: {
        title: "Cash, fees and margin in one finance layer.",
        lead: "A compact CFO-style view of revenue, COGS, ad spend, platform fees, payouts and currency exposure.",
        eyebrow: "Finance",
        feeTitle: "Fee Breakdown",
        feeSubtitle: "Cost visibility by category",
        payoutTitle: "Payout Queue",
        payoutSubtitle: "Pending and settled by currency",
        payoutTable: ["Currency", "Pending", "Settled", "ETA"]
      },
      metrics: {
        Fulfillment: { label: "Fulfillment", detail: "Japan lane has customs delay" },
        Orders: { label: "Orders", detail: "US/EU orders are accelerating" },
        GMV: { label: "GMV", detail: "30-day global gross sales" },
        ROAS: { label: "ROAS", detail: "Paid channels blended return" }
      },
      financeSummary: {
        Revenue: { label: "Revenue", sub: "+18.4% MoM" },
        COGS: { label: "COGS", sub: "55.0% of revenue" },
        "Ad Spend": { label: "Ad Spend", sub: "15.4% of revenue" },
        "Net Margin": { label: "Net Margin", sub: "+2.1 pts" }
      },
      riskTypes: { Logistics: "Logistics", Inventory: "Inventory", Ads: "Ads", Finance: "Finance" },
      status: {
        All: "All",
        Paid: "Paid",
        Pending: "Pending",
        "Refund review": "Refund review",
        Exception: "Exception",
        Dispatched: "Dispatched",
        Customs: "Customs",
        Picking: "Picking",
        Delivered: "Delivered",
        "In transit": "In transit",
        Normal: "Normal",
        Watch: "Watch",
        High: "High",
        Medium: "Medium",
        Low: "Low",
        Replenish: "Replenish",
        Escalate: "Escalate",
        Stable: "Stable"
      }
    },
    zh: {
      pages: { overview: "概览", orders: "订单", products: "商品", logistics: "物流", ads: "广告", finance: "财务" },
      shell: {
        navAria: "GlobalPulse 导航",
        brandAria: "GlobalPulse 概览",
        brandSubtitle: "跨境商家中枢",
        liveMock: "实时模拟",
        openNavigation: "打开导航",
        closeNavigation: "关闭导航",
        languageAria: "语言切换"
      },
      language: { en: "EN", zh: "中文" },
      actions: { reviewOrders: "查看订单", checkLogistics: "查看物流" },
      charts: {
        salesSignal: "全球销售信号",
        gmvTrend: "GMV 趋势 · 最近 12 期",
        gmvIndex: "GMV 指数",
        trendAria: "{label} 趋势",
        momTag: "环比 +18.4%"
      },
      overview: {
        title: "用一层信号掌控全球市场。",
        lead: "GlobalPulse 为跨境商家汇总 GMV、订单、履约质量、广告回报与现金流，让全球运营状态在一个后台里快速看清。",
        eyebrow: "概览",
        marketTitle: "市场表现",
        marketSubtitle: "按 GMV 排名的目的国市场",
        regionCount: "5 个市场",
        riskTitle: "风险雷达",
        riskSubtitle: "物流、广告和财务维度的运营提醒"
      },
      orders: {
        title: "跨境异常订单控制塔。",
        lead: "搜索并筛选模拟订单，打开详情抽屉查看支付、物流、SKU、ETA 与风险状态。",
        eyebrow: "订单",
        streamTitle: "订单流",
        streamSubtitle: "点击任意行打开演示详情抽屉",
        count: "{count} 笔订单",
        searchPlaceholder: "搜索订单、客户、市场、SKU...",
        searchAria: "搜索订单",
        empty: "没有匹配的订单。",
        table: ["订单", "客户", "市场", "渠道", "金额", "状态", "物流", "风险"]
      },
      drawer: {
        title: "订单详情",
        close: "关闭",
        orderValue: "订单金额",
        paymentStatus: "支付状态",
        logisticsStatus: "物流状态",
        riskLevel: "风险等级",
        recommended: "建议动作",
        highAction: "升级给物流负责人，同步客服，并在承运商扫描确认前暂停自动退款。",
        normalAction: "保持自动客户通知开启，并继续关注下一次承运商扫描。"
      },
      products: {
        title: "SKU 库存、毛利与评分洞察。",
        lead: "在商家运营中枢内追踪动销、毛利质量、库存压力与商品健康度。",
        eyebrow: "商品",
        stock: "库存",
        daysLeft: "可售天数",
        margin: "毛利率",
        rating: "评分",
        watchlistTitle: "库存关注清单",
        watchlistSubtitle: "低库存与高动销 SKU",
        table: ["SKU", "名称", "库存", "可售天数", "销量", "动作"]
      },
      logistics: {
        title: "从仓库到尾程的履约可视化。",
        lead: "监控跨境线路质量、清关拖延、承运商异常与全球配送 SLA 健康度。",
        eyebrow: "物流",
        laneTitle: "线路表现",
        laneSubtitle: "承运商 SLA 与异常包裹量",
        table: ["线路", "承运商", "准时率", "平均天数", "异常量", "状态"]
      },
      ads: {
        title: "广告花费、ROAS 与素材压力驾驶舱。",
        lead: "帮助卖家运营在增长、回本周期与渠道疲劳之间做投放判断。",
        eyebrow: "广告",
        roasTrend: "ROAS 趋势",
        blendedPerformance: "整体付费投放表现",
        optimizationTitle: "优化建议",
        optimizationSubtitle: "媒体投放动作建议",
        spend: "花费",
        revenue: "收入",
        cpa: "CPA"
      },
      finance: {
        title: "现金、费用与利润的一体化财务层。",
        lead: "以 CFO 视角集中查看收入、COGS、广告花费、平台费用、回款与币种敞口。",
        eyebrow: "财务",
        feeTitle: "费用拆解",
        feeSubtitle: "按类别查看成本结构",
        payoutTitle: "回款队列",
        payoutSubtitle: "按币种查看待结算与已结算金额",
        payoutTable: ["币种", "待回款", "已结算", "ETA"]
      },
      metrics: {
        Fulfillment: { label: "履约率", detail: "日本线路存在清关延迟" },
        Orders: { label: "订单", detail: "美国/欧洲订单增长加速" },
        GMV: { label: "GMV", detail: "近 30 天全球成交总额" },
        ROAS: { label: "ROAS", detail: "付费渠道综合回报" }
      },
      financeSummary: {
        Revenue: { label: "收入", sub: "环比 +18.4%" },
        COGS: { label: "COGS", sub: "占收入 55.0%" },
        "Ad Spend": { label: "广告花费", sub: "占收入 15.4%" },
        "Net Margin": { label: "净利率", sub: "+2.1 个百分点" }
      },
      riskTypes: { Logistics: "物流", Inventory: "库存", Ads: "广告", Finance: "财务" },
      status: {
        All: "全部",
        Paid: "已支付",
        Pending: "待处理",
        "Refund review": "退款审核",
        Exception: "异常",
        Dispatched: "已发出",
        Customs: "清关中",
        Picking: "拣货中",
        Delivered: "已送达",
        "In transit": "运输中",
        Normal: "正常",
        Watch: "关注",
        High: "高风险",
        Medium: "中风险",
        Low: "低风险",
        Replenish: "补货",
        Escalate: "升级处理",
        Stable: "稳定"
      }
    }
  };

  const state = {
    orderFilter: "All",
    orderSearch: "",
    lang: getInitialLang(),
    motionCanvasReady: false
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const page = document.body.dataset.page || "overview";

  function normalizeLang(lang) {
    return supportedLangs.includes(lang) ? lang : "en";
  }

  function getInitialLang() {
    try {
      return normalizeLang(window.localStorage.getItem(langStorageKey));
    } catch (_) {
      return "en";
    }
  }

  function copy() {
    return i18n[state.lang] || i18n.en;
  }

  function t(path, vars = {}) {
    const keys = path.split(".");
    let value = keys.reduce((acc, key) => acc && acc[key], copy());
    if (value == null) value = keys.reduce((acc, key) => acc && acc[key], i18n.en);
    if (typeof value !== "string") return path;
    return value.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? "");
  }

  function pageLabel(id) {
    return copy().pages[id] || i18n.en.pages[id] || id;
  }

  function statusLabel(value) {
    return copy().status[value] || i18n.en.status[value] || value;
  }

  function riskTypeLabel(value) {
    return copy().riskTypes[value] || i18n.en.riskTypes[value] || value;
  }

  function metricLabel(item) {
    return (copy().metrics[item.label] && copy().metrics[item.label].label) || item.label;
  }

  function metricDetail(item) {
    return (copy().metrics[item.label] && copy().metrics[item.label].detail) || item.detail;
  }

  function financeSummaryLabel(item) {
    return (copy().financeSummary[item.label] && copy().financeSummary[item.label].label) || item.label;
  }

  function financeSummarySub(item) {
    return (copy().financeSummary[item.label] && copy().financeSummary[item.label].sub) || item.sub;
  }

  function tableHead(labels) {
    return labels.map(label => `<th>${label}</th>`).join("");
  }

  function setDocumentMeta() {
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.title = `GlobalPulse · ${pageLabel(page)}`;
  }

  function navLinksMarkup(isMobile = false) {
    return pages.map(([id, , href], index) => {
      const delay = isMobile ? ` style="--item-delay:${index * 64}ms"` : "";
      return `<a class="${page === id ? "active" : ""}"${delay} href="${href}">${pageLabel(id)}</a>`;
    }).join("");
  }

  function languageSwitchMarkup() {
    return `<div class="language-switch" role="group" aria-label="${t("shell.languageAria")}">
      ${supportedLangs.map(lang => `<button type="button" data-lang="${lang}" class="${state.lang === lang ? "active" : ""}" aria-pressed="${state.lang === lang ? "true" : "false"}">${t(`language.${lang}`)}</button>`).join("")}
    </div>`;
  }

  function updateShellCopy() {
    setDocumentMeta();
    const nav = $(".nav-links");
    const mobile = $(".mobile-panel");
    if (nav) nav.innerHTML = navLinksMarkup();
    if (mobile) mobile.innerHTML = navLinksMarkup(true);
    const brand = $(".brand");
    if (brand) brand.setAttribute("aria-label", t("shell.brandAria"));
    const brandSubtitle = $("[data-brand-subtitle]");
    if (brandSubtitle) brandSubtitle.textContent = t("shell.brandSubtitle");
    const syncText = $("[data-sync-text]");
    if (syncText) syncText.textContent = `${t("shell.liveMock")} · ${DATA.updatedAt}`;
    const languageSwitch = $(".language-switch");
    if (languageSwitch) languageSwitch.setAttribute("aria-label", t("shell.languageAria"));
    $$("[data-lang]").forEach(btn => {
      const active = btn.dataset.lang === state.lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      btn.textContent = t(`language.${btn.dataset.lang}`);
    });
    const toggle = $(".menu-toggle");
    const panelOpen = mobile && mobile.classList.contains("open");
    if (toggle) toggle.setAttribute("aria-label", panelOpen ? t("shell.closeNavigation") : t("shell.openNavigation"));
  }

  function setLanguage(lang) {
    const nextLang = normalizeLang(lang);
    if (nextLang === state.lang) return;
    state.lang = nextLang;
    try {
      window.localStorage.setItem(langStorageKey, nextLang);
    } catch (_) {
      // localStorage can be unavailable in locked-down preview contexts.
    }
    updateShellCopy();
    renderers[page]();
    runPageMotion();
  }

  function bindLanguageSwitch() {
    $$("[data-lang]").forEach(btn => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });
  }

  function money(value, currency = "$") {
    if (value >= 1000000) return `${currency}${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${currency}${(value / 1000).toFixed(1)}K`;
    return `${currency}${value.toLocaleString()}`;
  }

  function currencyAmount(currency, value) {
    return currency === "JPY" ? `¥${value.toLocaleString()}` : money(value);
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function icon(name) {
    const paths = {
      pulse: `<path d="M4 13h4l2.5-6 4 12 2.5-6h3" />`,
      arrow: `<path d="M5 12h14" /><path d="m13 6 6 6-6 6" />`,
      box: `<path d="M6 8.5 12 5l6 3.5v7L12 19l-6-3.5z" /><path d="M12 12 6.4 8.7" /><path d="M12 12l5.6-3.3" /><path d="M12 12v6.5" />`,
      chart: `<path d="M5 18V8" /><path d="M11 18V5" /><path d="M17 18v-7" />`,
      route: `<path d="M6 6h.01" /><path d="M18 18h.01" /><path d="M7 6c7 0 10 2 10 7 0 3-2 5-5 5" />`,
      coin: `<path d="M12 4c4 0 7 1.3 7 3s-3 3-7 3-7-1.3-7-3 3-3 7-3z" /><path d="M5 7v5c0 1.7 3 3 7 3s7-1.3 7-3V7" /><path d="M5 12v5c0 1.7 3 3 7 3s7-1.3 7-3v-5" />`
    };
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.pulse}</svg>`;
  }

  function shell() {
    const active = navLinksMarkup();
    const mobile = navLinksMarkup(true);
    document.body.insertAdjacentHTML("afterbegin", `
      <canvas class="motion-canvas" id="motionCanvas" aria-hidden="true"></canvas>
      <div class="app-shell">
        <nav class="topbar" aria-label="${t("shell.navAria")}">
          <div class="nav-core">
            <a class="brand" href="index.html" aria-label="${t("shell.brandAria")}">
              <span class="brand-mark">${icon("pulse")}</span>
              <span><strong>GlobalPulse</strong><span data-brand-subtitle>${t("shell.brandSubtitle")}</span></span>
            </a>
            <div class="nav-links">${active}</div>
            <div class="nav-meta">
              ${languageSwitchMarkup()}
              <span class="sync-pill"><span class="pulse-dot"></span><span data-sync-text>${t("shell.liveMock")} · ${DATA.updatedAt}</span></span>
              <button class="menu-toggle" type="button" aria-label="${t("shell.openNavigation")}"><span></span><span></span></button>
            </div>
          </div>
          <div class="mobile-panel">${mobile}</div>
        </nav>
        <main class="page" id="app"></main>
      </div>
      <div class="chart-tooltip" id="chartTooltip"></div>
    `);
    const toggle = $(".menu-toggle");
    const mobilePanel = $(".mobile-panel");
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      mobilePanel.classList.toggle("open");
      toggle.setAttribute("aria-label", mobilePanel.classList.contains("open") ? t("shell.closeNavigation") : t("shell.openNavigation"));
    });
    bindLanguageSwitch();
  }

  function hero(title, lead, eyebrow = "Merchant OS") {
    return `
      <section class="hero reveal">
        <div class="panel-shell">
          <div class="panel">
            <span class="eyebrow">${eyebrow}</span>
            <h1>${title}</h1>
            <p class="lead">${lead}</p>
            <div class="hero-actions">
              <a class="button" href="orders.html">${t("actions.reviewOrders")} <span class="icon-circle">${icon("arrow")}</span></a>
              <a class="button secondary" href="logistics.html">${t("actions.checkLogistics")} <span class="icon-circle">${icon("route")}</span></a>
            </div>
          </div>
        </div>
        <div class="panel-shell">
          <div class="panel">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">${t("charts.salesSignal")}</h2>
                <p class="panel-subtitle">${t("charts.gmvTrend")}</p>
              </div>
              <span class="tag">${t("charts.momTag")}</span>
            </div>
            <div class="chart" data-chart="trend"></div>
          </div>
        </div>
      </section>`;
  }

  function metricCards(metrics = DATA.metrics) {
    return `<section class="grid kpi-grid reveal">${metrics.map(item => `
      <div class="panel-shell">
        <article class="panel metric">
          <div class="metric-label">${metricLabel(item)}</div>
          <div class="metric-value" data-count-up>${item.value}</div>
          <div class="metric-change ${item.tone === "warn" ? "warn" : ""}">${item.change}</div>
          <div class="metric-detail">${metricDetail(item)}</div>
        </article>
      </div>`).join("")}</section>`;
  }

  function lineChart(values, label = "GMV") {
    const w = 520;
    const h = 240;
    const pad = 26;
    const gradientId = `area-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${values.length}`;
    const min = Math.min(...values) * 0.9;
    const max = Math.max(...values) * 1.08;
    const x = i => pad + (i * (w - pad * 2)) / (values.length - 1);
    const y = v => h - pad - ((v - min) / (max - min)) * (h - pad * 2);
    const d = values.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
    const circles = values.map((v, i) => `<circle class="chart-point" style="--point-delay:${620 + i * 72}ms" cx="${x(i)}" cy="${y(v)}" r="4" data-tip="${label}: ${v}" />`).join("");
    return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${t("charts.trendAria", { label })}">
      <defs><linearGradient id="${gradientId}" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#7df8e7" stop-opacity=".24"/><stop offset="1" stop-color="#7df8e7" stop-opacity="0"/></linearGradient></defs>
      <path class="chart-area" d="${d} L ${x(values.length - 1)} ${h - pad} L ${pad} ${h - pad} Z" fill="url(#${gradientId})"></path>
      <path class="line chart-line" d="${d}"></path>${circles}
    </svg>`;
  }

  function renderCharts(root = document) {
    $$("[data-chart='trend']", root).forEach(el => el.innerHTML = lineChart(DATA.trend, t("charts.gmvIndex")));
    $$("[data-chart='roas']", root).forEach(el => el.innerHTML = lineChart(DATA.ads.roasTrend, "ROAS"));
    const tooltip = $("#chartTooltip");
    $$("circle[data-tip]", root).forEach(c => {
      c.addEventListener("pointerenter", event => {
        tooltip.textContent = c.dataset.tip;
        tooltip.style.display = "block";
        tooltip.style.left = `${event.clientX + 14}px`;
        tooltip.style.top = `${event.clientY + 14}px`;
      });
      c.addEventListener("pointermove", event => {
        tooltip.style.left = `${event.clientX + 14}px`;
        tooltip.style.top = `${event.clientY + 14}px`;
      });
      c.addEventListener("pointerleave", () => tooltip.style.display = "none");
    });
  }

  function marketPanel() {
    const max = Math.max(...DATA.markets.map(m => m.gmv));
    return `<div class="panel-shell reveal"><section class="panel">
      <div class="panel-header"><div><h2 class="panel-title">${t("overview.marketTitle")}</h2><p class="panel-subtitle">${t("overview.marketSubtitle")}</p></div><span class="tag">${t("overview.regionCount")}</span></div>
      <div class="bar-list">${DATA.markets.map((m, index) => `
        <div class="bar-row"><span>${m.code} · ${m.name}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.max(12, m.gmv / max * 100)}%; --bar-delay:${160 + index * 110}ms"></div></div><strong data-count-up>${money(m.gmv)}</strong></div>`).join("")}</div>
    </section></div>`;
  }

  function riskPanel() {
    return `<div class="panel-shell reveal"><section class="panel">
      <div class="panel-header"><div><h2 class="panel-title">${t("overview.riskTitle")}</h2><p class="panel-subtitle">${t("overview.riskSubtitle")}</p></div></div>
      <div class="risk-list">${DATA.risks.map(r => `
        <article class="risk-item risk-${r.severity.toLowerCase()}">
          <span class="severity ${r.severity.toLowerCase()}">${statusLabel(r.severity)}</span>
          <strong>${r.title}</strong><span class="panel-subtitle">${riskTypeLabel(r.type)} · ${r.meta}</span>
        </article>`).join("")}</div>
    </section></div>`;
  }

  function overview() {
    $("#app").innerHTML = `
      ${hero(t("overview.title"), t("overview.lead"), t("overview.eyebrow"))}
      ${metricCards()}
      <section class="grid dashboard-grid">${marketPanel()}${riskPanel()}</section>
    `;
  }

  function orders() {
    $("#app").innerHTML = `
      ${hero(t("orders.title"), t("orders.lead"), t("orders.eyebrow"))}
      <section class="panel-shell reveal"><div class="panel">
        <div class="panel-header"><div><h2 class="panel-title">${t("orders.streamTitle")}</h2><p class="panel-subtitle">${t("orders.streamSubtitle")}</p></div><span class="tag">${t("orders.count", { count: DATA.orders.length })}</span></div>
        <div class="controls">
          <input class="search" id="orderSearch" placeholder="${t("orders.searchPlaceholder")}" aria-label="${t("orders.searchAria")}">
          <div class="segment" id="orderFilters">
            ${orderFilters.map(v => `<button type="button" data-filter="${v}" class="${v === state.orderFilter ? "active" : ""}">${statusLabel(v)}</button>`).join("")}
          </div>
        </div>
        <div class="table-wrap"><table><thead><tr>${tableHead(copy().orders.table)}</tr></thead><tbody id="ordersBody"></tbody></table></div>
      </div></section>
      <aside class="drawer" id="orderDrawer" aria-hidden="true"><div class="drawer-backdrop"></div><div class="drawer-panel"><div class="drawer-core" id="drawerCore"></div></div></aside>
    `;
    bindOrders();
  }

  function filteredOrders() {
    const q = state.orderSearch.toLowerCase().trim();
    return DATA.orders.filter(o => {
      const matchFilter = state.orderFilter === "All" || o.status === state.orderFilter || o.logistics === state.orderFilter;
      const hay = `${o.id} ${o.customer} ${o.market} ${o.channel} ${o.sku} ${o.status} ${o.logistics} ${o.risk} ${statusLabel(o.status)} ${statusLabel(o.logistics)} ${statusLabel(o.risk)}`.toLowerCase();
      return matchFilter && (!q || hay.includes(q));
    });
  }

  function renderOrders() {
    const body = $("#ordersBody");
    const orders = filteredOrders();
    if (!orders.length) {
      body.innerHTML = `<tr><td colspan="8"><div class="empty">${t("orders.empty")}</div></td></tr>`;
      return;
    }
    body.innerHTML = orders.map((o, index) => `<tr class="click-row row-enter" style="--row-delay:${index * 54}ms" data-id="${o.id}">
      <td><strong>${o.id}</strong><br><span class="panel-subtitle">${o.sku}</span></td>
      <td>${o.customer}</td><td>${o.market}</td><td>${o.channel}</td><td>${money(o.value)}</td>
      <td><span class="status">${statusLabel(o.status)}</span></td><td>${statusLabel(o.logistics)} · ${o.eta}</td><td><span class="status risk-${o.risk.toLowerCase()}">${statusLabel(o.risk)}</span></td>
    </tr>`).join("");
    $$(".click-row", body).forEach(row => row.addEventListener("click", () => openDrawer(row.dataset.id)));
  }

  function bindOrders() {
    $("#orderSearch").value = state.orderSearch;
    $("#orderSearch").addEventListener("input", e => {
      state.orderSearch = e.target.value;
      renderOrders();
    });
    $$("#orderFilters button").forEach(btn => {
      btn.addEventListener("click", () => {
        $$("#orderFilters button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.orderFilter = btn.dataset.filter;
        renderOrders();
      });
    });
    $(".drawer-backdrop").addEventListener("click", closeDrawer);
    renderOrders();
  }

  function openDrawer(id) {
    const order = DATA.orders.find(o => o.id === id);
    $("#drawerCore").innerHTML = `
      <div class="panel-header"><div><span class="eyebrow">${t("drawer.title")}</span><h2>${order.id}</h2><p class="panel-subtitle">${order.customer} · ${order.market} · ${order.channel}</p></div><button class="close" type="button" aria-label="${t("drawer.close")}">×</button></div>
      <div class="detail-grid">
        ${Object.entries({
          [t("drawer.orderValue")]: money(order.value),
          [t("drawer.paymentStatus")]: statusLabel(order.status),
          [t("drawer.logisticsStatus")]: statusLabel(order.logistics),
          "SKU": order.sku,
          "ETA": order.eta,
          [t("drawer.riskLevel")]: statusLabel(order.risk)
        }).map(([k, v], index) => `<div class="detail-row" style="--detail-delay:${180 + index * 72}ms"><span>${k}</span><strong>${v}</strong></div>`).join("")}
      </div>
      <div class="panel-shell drawer-recommendation" style="margin-top:22px"><div class="panel"><h3>${t("drawer.recommended")}</h3><p class="lead">${order.risk === "High" ? t("drawer.highAction") : t("drawer.normalAction")}</p></div></div>
    `;
    $(".drawer").classList.add("open");
    $(".drawer").setAttribute("aria-hidden", "false");
    $(".close").addEventListener("click", closeDrawer);
    initTilt($(".drawer"));
  }

  function closeDrawer() {
    $(".drawer").classList.remove("open");
    $(".drawer").setAttribute("aria-hidden", "true");
  }

  function initMotionCanvas() {
    if (state.motionCanvasReady || prefersReducedMotion()) return;
    const canvas = $("#motionCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    state.motionCanvasReady = true;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    const pointer = { x: null, y: null };

    function makeParticle() {
      const speed = 0.14 + Math.random() * 0.42;
      const angle = -0.35 + Math.random() * 0.7;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + 0.08,
        radius: 0.8 + Math.random() * 1.9,
        alpha: 0.22 + Math.random() * 0.42,
        hue: Math.random() > 0.72 ? "215, 181, 109" : "125, 248, 231"
      };
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.min(92, Math.max(40, Math.floor((width * height) / 18000)));
      particles = Array.from({ length: target }, makeParticle);
    }

    function drawGrid(time) {
      ctx.save();
      ctx.lineWidth = 1;
      for (let x = -80; x < width + 80; x += 96) {
        const offset = Math.sin(time * 0.6 + x * 0.01) * 8;
        ctx.strokeStyle = "rgba(125, 248, 231, 0.045)";
        ctx.beginPath();
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x - offset, height);
        ctx.stroke();
      }
      for (let y = -40; y < height + 80; y += 88) {
        const pulse = (Math.sin(time * 1.2 + y * 0.018) + 1) / 2;
        ctx.strokeStyle = `rgba(215, 181, 109, ${0.025 + pulse * 0.035})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y + Math.sin(time + y) * 4);
        ctx.stroke();
      }
      const beamX = (time * 110) % (width + 360) - 180;
      const gradient = ctx.createLinearGradient(beamX - 120, 0, beamX + 180, height);
      gradient.addColorStop(0, "rgba(125, 248, 231, 0)");
      gradient.addColorStop(0.46, "rgba(125, 248, 231, 0.16)");
      gradient.addColorStop(1, "rgba(215, 181, 109, 0)");
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(beamX, 0);
      ctx.lineTo(beamX + 260, height);
      ctx.stroke();
      ctx.restore();
    }

    function drawFrame(now) {
      const time = now * 0.001;
      ctx.clearRect(0, 0, width, height);
      drawGrid(time);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x > width + 24) p.x = -24;
        if (p.y > height + 24) p.y = -24;
        if (p.x < -24) p.x = width + 24;

        if (pointer.x !== null) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 160 && dist > 0) {
            p.x -= (dx / dist) * 0.18;
            p.y -= (dy / dist) * 0.18;
          }
        }

        ctx.fillStyle = `rgba(${p.hue}, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const distance = Math.hypot(p.x - q.x, p.y - q.y);
          if (distance < 118) {
            ctx.strokeStyle = `rgba(125, 248, 231, ${(1 - distance / 118) * 0.13})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(drawFrame);
    }

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", event => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    }, { passive: true });
    window.addEventListener("pointerleave", () => {
      pointer.x = null;
      pointer.y = null;
    }, { passive: true });
    resize();
    requestAnimationFrame(drawFrame);
  }

  function parseAnimatedValue(text) {
    const original = text.trim();
    const match = original.match(/^([^0-9+\-]*)([+\-]?\d[\d,]*(?:\.\d+)?)(.*)$/);
    if (!match) return null;
    const [, prefix, rawNumber, suffix] = match;
    const value = Number(rawNumber.replace(/,/g, ""));
    if (!Number.isFinite(value)) return null;
    return {
      original,
      prefix,
      suffix,
      value,
      decimals: (rawNumber.split(".")[1] || "").length,
      grouped: rawNumber.includes(",")
    };
  }

  function formatAnimatedValue(config, value) {
    const absValue = Math.abs(value);
    const shouldGroup = config.grouped || absValue >= 10000;
    const number = shouldGroup
      ? value.toLocaleString(undefined, { minimumFractionDigits: config.decimals, maximumFractionDigits: config.decimals })
      : value.toFixed(config.decimals);
    return `${config.prefix}${number}${config.suffix}`;
  }

  function animateNumber(el) {
    if (el.dataset.counted === "true") return;
    const config = parseAnimatedValue(el.textContent);
    if (!config) return;
    el.dataset.counted = "true";
    el.dataset.finalValue = config.original;
    if (prefersReducedMotion()) {
      el.textContent = config.original;
      return;
    }
    const start = performance.now();
    const duration = 820 + Math.min(720, String(Math.round(Math.abs(config.value))).length * 90);
    el.textContent = formatAnimatedValue(config, 0);

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = formatAnimatedValue(config, config.value * eased);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = config.original;
      }
    }

    requestAnimationFrame(tick);
  }

  function animateNumbers(root = document) {
    const items = $$("[data-count-up]", root).filter(el => el.dataset.counted !== "true");
    if (!items.length) return;
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      items.forEach(animateNumber);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumber(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.32 });
    items.forEach(el => io.observe(el));
  }

  function animateCharts(root = document) {
    if (prefersReducedMotion()) return;
    $$(".chart-line", root).forEach(path => {
      if (path.dataset.drawn === "true") return;
      const length = path.getTotalLength();
      path.dataset.drawn = "true";
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      requestAnimationFrame(() => path.classList.add("drawn"));
    });
    $$(".chart-point", root).forEach(point => point.classList.add("ready"));
  }

  function initTilt(root = document) {
    if (prefersReducedMotion() || window.matchMedia("(hover: none)").matches) return;
    $$(".panel-shell", root).forEach(shell => {
      if (shell.dataset.tiltReady === "true") return;
      shell.dataset.tiltReady = "true";
      shell.classList.add("tilt-ready");
      shell.addEventListener("pointermove", event => {
        const rect = shell.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        shell.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`);
        shell.style.setProperty("--ry", `${(x * 7).toFixed(2)}deg`);
        shell.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
        shell.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(1)}%`);
      });
      shell.addEventListener("pointerleave", () => {
        shell.style.setProperty("--rx", "0deg");
        shell.style.setProperty("--ry", "0deg");
        shell.style.setProperty("--mx", "50%");
        shell.style.setProperty("--my", "50%");
      });
    });
  }

  function products() {
    $("#app").innerHTML = `
      ${hero(t("products.title"), t("products.lead"), t("products.eyebrow"))}
      <section class="grid product-grid reveal">${DATA.products.map(p => `<div class="panel-shell"><article class="panel product-card ${p.days < 10 ? "low-stock" : ""}">
        <span class="sku">${p.sku}</span><h3>${p.name}</h3><p class="panel-subtitle">${p.category}</p>
        <div class="stat-pair"><div class="stat-pill"><span>${t("products.stock")}</span><strong data-count-up>${p.stock}</strong></div><div class="stat-pill"><span>${t("products.daysLeft")}</span><strong data-count-up>${p.days}</strong></div><div class="stat-pill"><span>${t("products.margin")}</span><strong data-count-up>${p.margin}%</strong></div><div class="stat-pill"><span>${t("products.rating")}</span><strong data-count-up>${p.rating}</strong></div></div>
      </article></div>`).join("")}</section>
      <section class="panel-shell reveal" style="margin-top:18px"><div class="panel"><div class="panel-header"><div><h2 class="panel-title">${t("products.watchlistTitle")}</h2><p class="panel-subtitle">${t("products.watchlistSubtitle")}</p></div></div><div class="table-wrap"><table><thead><tr>${tableHead(copy().products.table)}</tr></thead><tbody>${DATA.products.filter(p => p.days < 10).map((p, index) => `<tr class="low-stock-row row-enter" style="--row-delay:${index * 54}ms"><td>${p.sku}</td><td>${p.name}</td><td>${p.stock}</td><td>${p.days}</td><td>${p.sales}</td><td><span class="status risk-watch">${statusLabel("Replenish")}</span></td></tr>`).join("")}</tbody></table></div></div></section>
    `;
  }

  function logistics() {
    $("#app").innerHTML = `
      ${hero(t("logistics.title"), t("logistics.lead"), t("logistics.eyebrow"))}
      <section class="grid timeline reveal">${DATA.logistics.nodes.map(n => `<div class="panel-shell"><article class="panel timeline-step"><strong>${n.label}</strong><span class="panel-subtitle">${n.meta}</span><div class="ring" style="--value:${n.value}%" data-count-up>${n.value}%</div></article></div>`).join("")}</section>
      <section class="panel-shell reveal" style="margin-top:18px"><div class="panel"><div class="panel-header"><div><h2 class="panel-title">${t("logistics.laneTitle")}</h2><p class="panel-subtitle">${t("logistics.laneSubtitle")}</p></div></div><div class="table-wrap"><table><thead><tr>${tableHead(copy().logistics.table)}</tr></thead><tbody>${DATA.logistics.lanes.map((l, index) => `<tr class="${l.exceptions > 40 ? "lane-alert" : ""} row-enter" style="--row-delay:${index * 54}ms"><td>${l.lane}</td><td>${l.carrier}</td><td>${l.onTime}%</td><td>${l.avgDays}</td><td>${l.exceptions}</td><td><span class="status ${l.exceptions > 40 ? "risk-high" : "risk-normal"}">${l.exceptions > 40 ? statusLabel("Escalate") : statusLabel("Stable")}</span></td></tr>`).join("")}</tbody></table></div></div></section>
    `;
  }

  function ads() {
    $("#app").innerHTML = `
      ${hero(t("ads.title"), t("ads.lead"), t("ads.eyebrow"))}
      <section class="grid dashboard-grid">
        <div class="panel-shell reveal"><div class="panel"><div class="panel-header"><div><h2 class="panel-title">${t("ads.roasTrend")}</h2><p class="panel-subtitle">${t("ads.blendedPerformance")}</p></div><span class="tag">4.82x</span></div><div class="chart" data-chart="roas"></div></div></div>
        <div class="panel-shell reveal"><div class="panel"><div class="panel-header"><div><h2 class="panel-title">${t("ads.optimizationTitle")}</h2><p class="panel-subtitle">${t("ads.optimizationSubtitle")}</p></div></div><div class="suggestion-list">${DATA.ads.suggestions.map(s => `<div class="suggestion">${s}</div>`).join("")}</div></div></div>
      </section>
      <section class="grid product-grid reveal" style="margin-top:18px">${DATA.ads.channels.map(c => `<div class="panel-shell"><article class="panel channel-card"><span class="tag">${c.channel}</span><div class="metric-value" data-count-up>${c.roas}x</div><div class="stat-pair"><div class="stat-pill"><span>${t("ads.spend")}</span><strong data-count-up>${money(c.spend)}</strong></div><div class="stat-pill"><span>${t("ads.revenue")}</span><strong data-count-up>${money(c.revenue)}</strong></div><div class="stat-pill"><span>${t("ads.cpa")}</span><strong data-count-up>${money(c.cpa)}</strong></div><div class="stat-pill"><span>ROAS</span><strong data-count-up>${c.roas}x</strong></div></div></article></div>`).join("")}</section>
    `;
  }

  function finance() {
    $("#app").innerHTML = `
      ${hero(t("finance.title"), t("finance.lead"), t("finance.eyebrow"))}
      <section class="grid finance-grid reveal">${DATA.finance.summary.map(s => `<div class="panel-shell"><article class="panel metric"><div class="metric-label">${financeSummaryLabel(s)}</div><div class="metric-value" data-count-up>${s.value}</div><div class="metric-detail">${financeSummarySub(s)}</div></article></div>`).join("")}</section>
      <section class="grid fee-grid" style="margin-top:18px">
        <div class="panel-shell reveal"><div class="panel"><div class="panel-header"><div><h2 class="panel-title">${t("finance.feeTitle")}</h2><p class="panel-subtitle">${t("finance.feeSubtitle")}</p></div></div><div class="bar-list">${DATA.finance.fees.map((f, index) => `<div class="bar-row"><span>${f.type}</span><div class="bar-track"><div class="bar-fill" style="width:${f.ratio * 9}%; --bar-delay:${160 + index * 110}ms"></div></div><strong><span data-count-up>${money(f.amount)}</span> · <span data-count-up>${f.ratio}%</span></strong></div>`).join("")}</div></div></div>
        <div class="panel-shell reveal"><div class="panel"><div class="panel-header"><div><h2 class="panel-title">${t("finance.payoutTitle")}</h2><p class="panel-subtitle">${t("finance.payoutSubtitle")}</p></div></div><div class="table-wrap"><table><thead><tr>${tableHead(copy().finance.payoutTable)}</tr></thead><tbody>${DATA.finance.payouts.map((p, index) => `<tr class="payout-row row-enter" style="--row-delay:${index * 54}ms"><td>${p.currency}</td><td><span data-count-up>${currencyAmount(p.currency, p.pending)}</span></td><td><span data-count-up>${currencyAmount(p.currency, p.settled)}</span></td><td>${p.eta}</td></tr>`).join("")}</tbody></table></div></div></div>
      </section>
    `;
  }

  function reveal(root = document) {
    const targets = $$(".reveal", root).filter(el => !el.classList.contains("visible"));
    if (!targets.length) return;
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      targets.forEach(el => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    targets.forEach(el => io.observe(el));
    window.setTimeout(() => {
      targets.forEach(el => el.classList.add("visible"));
    }, 900);
  }

  function runPageMotion(root = document) {
    renderCharts(root);
    reveal(root);
    animateNumbers(root);
    animateCharts(root);
    initTilt(root);
  }

  const renderers = { overview, orders, products, logistics, ads, finance };
  setDocumentMeta();
  shell();
  renderers[page]();
  initMotionCanvas();
  runPageMotion();
})();
