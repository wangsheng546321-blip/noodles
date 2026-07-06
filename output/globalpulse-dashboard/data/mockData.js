window.GP_DATA = {
  updatedAt: "2026-07-06 16:20 CST",
  metrics: [
    { label: "GMV", value: "$842.6K", change: "+18.4%", tone: "good", detail: "30-day global gross sales" },
    { label: "Orders", value: "18,492", change: "+9.7%", tone: "good", detail: "US/EU orders are accelerating" },
    { label: "ROAS", value: "4.82x", change: "+0.6x", tone: "good", detail: "Paid channels blended return" },
    { label: "Fulfillment", value: "96.8%", change: "-1.1%", tone: "warn", detail: "Japan lane has customs delay" }
  ],
  trend: [58, 64, 62, 73, 81, 76, 88, 94, 103, 112, 124, 139],
  markets: [
    { name: "United States", code: "US", gmv: 318400, orders: 6902, growth: 21.4, margin: 29.7 },
    { name: "Germany", code: "DE", gmv: 164200, orders: 3318, growth: 15.1, margin: 25.9 },
    { name: "United Kingdom", code: "UK", gmv: 128900, orders: 2804, growth: 12.8, margin: 27.2 },
    { name: "Japan", code: "JP", gmv: 96700, orders: 2020, growth: 8.2, margin: 22.4 },
    { name: "Canada", code: "CA", gmv: 74200, orders: 1547, growth: 18.9, margin: 26.1 }
  ],
  risks: [
    { type: "Logistics", title: "JP customs review", meta: "87 parcels waiting over 48h", severity: "High" },
    { type: "Inventory", title: "Desk lamp SKU low stock", meta: "6.2 days remaining", severity: "Medium" },
    { type: "Ads", title: "Meta CPC rising", meta: "+14% week over week", severity: "Medium" },
    { type: "Finance", title: "EUR payout pending", meta: "$42.8K clearing in 2 days", severity: "Low" }
  ],
  orders: [
    { id: "GP-58291", customer: "Olivia Martin", market: "US", channel: "Shopify", value: 238.9, status: "Paid", logistics: "Dispatched", sku: "AURORA-LAMP", eta: "Jul 10", risk: "Normal" },
    { id: "GP-58276", customer: "Noah Weber", market: "DE", channel: "Amazon", value: 169.4, status: "Paid", logistics: "Customs", sku: "NOVA-RUG", eta: "Jul 12", risk: "Watch" },
    { id: "GP-58242", customer: "Emma Wilson", market: "UK", channel: "TikTok Shop", value: 92.6, status: "Pending", logistics: "Picking", sku: "LINEN-SET", eta: "Jul 11", risk: "Normal" },
    { id: "GP-58211", customer: "Haruto Sato", market: "JP", channel: "Rakuten", value: 314.2, status: "Paid", logistics: "Exception", sku: "BRASS-LIGHT", eta: "Hold", risk: "High" },
    { id: "GP-58198", customer: "Mia Chen", market: "CA", channel: "Shopify", value: 188.7, status: "Refund review", logistics: "Delivered", sku: "WALNUT-DESK", eta: "Done", risk: "Watch" },
    { id: "GP-58171", customer: "Lucas Silva", market: "US", channel: "Amazon", value: 64.5, status: "Paid", logistics: "In transit", sku: "CABLE-BOX", eta: "Jul 09", risk: "Normal" },
    { id: "GP-58129", customer: "Sofia Rossi", market: "IT", channel: "Shopify", value: 421.3, status: "Paid", logistics: "Dispatched", sku: "WALNUT-SHELF", eta: "Jul 13", risk: "Normal" },
    { id: "GP-58094", customer: "Ethan Brown", market: "US", channel: "Walmart", value: 132.8, status: "Pending", logistics: "Picking", sku: "LINEN-SET", eta: "Jul 10", risk: "Normal" }
  ],
  products: [
    { sku: "AURORA-LAMP", name: "Aurora Brass Desk Lamp", category: "Lighting", stock: 184, days: 18.5, sales: 3420, margin: 38.1, rating: 4.8 },
    { sku: "NOVA-RUG", name: "Nova Textured Rug", category: "Home Textile", stock: 76, days: 9.4, sales: 2186, margin: 31.7, rating: 4.7 },
    { sku: "LINEN-SET", name: "Linen Cloud Bedding Set", category: "Bedding", stock: 52, days: 6.2, sales: 1881, margin: 34.9, rating: 4.6 },
    { sku: "WALNUT-DESK", name: "Walnut Compact Desk", category: "Furniture", stock: 34, days: 12.8, sales: 742, margin: 26.5, rating: 4.9 },
    { sku: "BRASS-LIGHT", name: "Brass Wall Light", category: "Lighting", stock: 19, days: 4.1, sales: 1193, margin: 42.4, rating: 4.5 },
    { sku: "WALNUT-SHELF", name: "Slim Walnut Shelf", category: "Storage", stock: 88, days: 15.2, sales: 963, margin: 28.8, rating: 4.7 }
  ],
  logistics: {
    lanes: [
      { lane: "CN → US West", carrier: "4PX Priority", onTime: 97.4, avgDays: 6.8, exceptions: 12 },
      { lane: "CN → Germany", carrier: "YunExpress", onTime: 94.2, avgDays: 8.1, exceptions: 21 },
      { lane: "CN → UK", carrier: "Royal Mail DDP", onTime: 95.8, avgDays: 7.4, exceptions: 14 },
      { lane: "CN → Japan", carrier: "Sagawa Express", onTime: 89.6, avgDays: 9.7, exceptions: 87 },
      { lane: "US 3PL → Canada", carrier: "DHL eCommerce", onTime: 96.1, avgDays: 5.9, exceptions: 9 }
    ],
    nodes: [
      { label: "Pick Pack", value: 98.7, meta: "Warehouse SLA" },
      { label: "Linehaul", value: 95.1, meta: "Flight capacity" },
      { label: "Customs", value: 91.4, meta: "JP lane drag" },
      { label: "Last Mile", value: 96.8, meta: "Carrier scan" }
    ]
  },
  ads: {
    channels: [
      { channel: "Google Shopping", spend: 48200, revenue: 249600, roas: 5.18, cpa: 12.6 },
      { channel: "Meta Ads", spend: 31800, revenue: 132400, roas: 4.16, cpa: 17.9 },
      { channel: "TikTok Shop Ads", spend: 22600, revenue: 121700, roas: 5.38, cpa: 10.8 },
      { channel: "Amazon PPC", spend: 27400, revenue: 114900, roas: 4.19, cpa: 14.2 }
    ],
    roasTrend: [3.7, 3.9, 4.1, 4.0, 4.4, 4.7, 4.6, 4.9, 5.1, 4.8],
    suggestions: [
      "Scale TikTok Shop Ads for LINEN-SET in UK; creative fatigue remains low.",
      "Reduce Meta prospecting by 12% until CPC returns under $0.92.",
      "Move Google budget from broad home decor terms to high-intent brass lamp clusters."
    ]
  },
  finance: {
    summary: [
      { label: "Revenue", value: "$842.6K", sub: "+18.4% MoM" },
      { label: "COGS", value: "$463.1K", sub: "55.0% of revenue" },
      { label: "Ad Spend", value: "$130.0K", sub: "15.4% of revenue" },
      { label: "Net Margin", value: "18.7%", sub: "+2.1 pts" }
    ],
    fees: [
      { type: "Platform fees", amount: 62300, ratio: 7.4 },
      { type: "Payment processing", amount: 18700, ratio: 2.2 },
      { type: "Refunds", amount: 11900, ratio: 1.4 },
      { type: "Logistics surcharge", amount: 26800, ratio: 3.2 }
    ],
    payouts: [
      { currency: "USD", pending: 128400, settled: 384200, eta: "Jul 08" },
      { currency: "EUR", pending: 42800, settled: 119600, eta: "Jul 09" },
      { currency: "GBP", pending: 28900, settled: 88400, eta: "Jul 10" },
      { currency: "JPY", pending: 7100000, settled: 18400000, eta: "Jul 12" }
    ]
  }
};
