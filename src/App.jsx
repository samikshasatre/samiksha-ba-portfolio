import React, { useState, useMemo, useEffect } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Cell,
} from 'recharts';
import {
  Download,
  ExternalLink,
  Mail,
  
  ChevronRight,
  Moon,
  Sun,
  Database,
  BarChart2,
  Cpu,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  AlertCircle,
  Filter,
  Search,
  ArrowRight,
  FileText,
  Code,
  Layers,
  TrendingUp,
  Sliders,
  ShieldAlert,
  BookOpen,
  Terminal,
  Sparkles,
  MapPin,
  Phone,
  Copy,
  Check,
  Menu,
  X,
  Eye,
  HelpCircle,
  Activity,
} from 'lucide-react';
const Linkedin = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// ==========================================
// 1. SIMULATED DATASETS & PORTFOLIO DATA
// ==========================================

// Simulated E-Commerce Dataset (Project 1 & Project 3 Dashboard)
const ECOM_MONTHLY_DATA = [
  {
    month: 'Jan',
    Quarter: 'Q1',
    Region: 'West',
    Electronics: 42000,
    HomeOffice: 28000,
    Apparel: 19000,
    Accessories: 15000,
    profitRate: 0.18,
    orders: 610,
  },
  {
    month: 'Feb',
    Quarter: 'Q1',
    Region: 'North',
    Electronics: 39000,
    HomeOffice: 26500,
    Apparel: 18200,
    Accessories: 14500,
    profitRate: 0.17,
    orders: 580,
  },
  {
    month: 'Mar',
    Quarter: 'Q1',
    Region: 'South',
    Electronics: 46500,
    HomeOffice: 31000,
    Apparel: 21500,
    Accessories: 16800,
    profitRate: 0.19,
    orders: 675,
  },
  {
    month: 'Apr',
    Quarter: 'Q2',
    Region: 'East',
    Electronics: 44000,
    HomeOffice: 29500,
    Apparel: 22000,
    Accessories: 17200,
    profitRate: 0.185,
    orders: 650,
  },
  {
    month: 'May',
    Quarter: 'Q2',
    Region: 'West',
    Electronics: 48500,
    HomeOffice: 33000,
    Apparel: 24500,
    Accessories: 18500,
    profitRate: 0.2,
    orders: 710,
  },
  {
    month: 'Jun',
    Quarter: 'Q2',
    Region: 'South',
    Electronics: 51000,
    HomeOffice: 35000,
    Apparel: 23000,
    Accessories: 19200,
    profitRate: 0.205,
    orders: 735,
  },
  {
    month: 'Jul',
    Quarter: 'Q3',
    Region: 'North',
    Electronics: 49000,
    HomeOffice: 34200,
    Apparel: 21800,
    Accessories: 18900,
    profitRate: 0.19,
    orders: 705,
  },
  {
    month: 'Aug',
    Quarter: 'Q3',
    Region: 'West',
    Electronics: 53500,
    HomeOffice: 36800,
    Apparel: 25400,
    Accessories: 20500,
    profitRate: 0.21,
    orders: 760,
  },
  {
    month: 'Sep',
    Quarter: 'Q3',
    Region: 'East',
    Electronics: 56000,
    HomeOffice: 39000,
    Apparel: 27000,
    Accessories: 22100,
    profitRate: 0.215,
    orders: 800,
  },
  {
    month: 'Oct',
    Quarter: 'Q4',
    Region: 'West',
    Electronics: 64000,
    HomeOffice: 42500,
    Apparel: 31200,
    Accessories: 25400,
    profitRate: 0.22,
    orders: 895,
  },
  {
    month: 'Nov',
    Quarter: 'Q4',
    Region: 'South',
    Electronics: 78000,
    HomeOffice: 49000,
    Apparel: 38500,
    Accessories: 31000,
    profitRate: 0.165,
    orders: 1120,
  }, // High discount month
  {
    month: 'Dec',
    Quarter: 'Q4',
    Region: 'West',
    Electronics: 72000,
    HomeOffice: 46000,
    Apparel: 35000,
    Accessories: 29500,
    profitRate: 0.195,
    orders: 1030,
  },
];

const ECOM_CATEGORY_MARGINS = [
  {
    category: 'Accessories',
    revenue: 248600,
    profit: 84524,
    margin: 34.0,
    discountAvg: '5.2%',
    status: 'High Margin',
  },
  {
    category: 'Home & Office',
    revenue: 430500,
    profit: 103320,
    margin: 24.0,
    discountAvg: '8.5%',
    status: 'Healthy',
  },
  {
    category: 'Electronics',
    revenue: 643500,
    profit: 90090,
    margin: 14.0,
    discountAvg: '14.8%',
    status: 'Volume Driver / Margin Compression',
  },
  {
    category: 'Apparel',
    revenue: 307100,
    profit: 27639,
    margin: 9.0,
    discountAvg: '21.4%',
    status: 'Low Margin / High Return Risk',
  },
];

const ECOM_REGIONAL_DATA = [
  {
    region: 'West Region',
    revenue: 582400,
    profit: 116480,
    share: 35.7,
    topCategory: 'Electronics',
  },
  {
    region: 'South Region',
    revenue: 441200,
    profit: 83828,
    share: 27.1,
    topCategory: 'Home & Office',
  },
  {
    region: 'North Region',
    revenue: 326000,
    profit: 58680,
    share: 20.0,
    topCategory: 'Electronics',
  },
  {
    region: 'East Region',
    revenue: 280100,
    profit: 46565,
    share: 17.2,
    topCategory: 'Accessories',
  },
];

const ECOM_PRODUCT_TABLE = [
  {
    sku: 'EL-4092',
    name: 'Smart Ergonomic Monitor 27"',
    category: 'Electronics',
    units: 1420,
    revenue: 355000,
    margin: 16.5,
    returnRate: 3.2,
  },
  {
    sku: 'HO-2104',
    name: 'Standing Desk Dual-Motor Frame',
    category: 'Home & Office',
    units: 890,
    revenue: 267000,
    margin: 26.8,
    returnRate: 1.8,
  },
  {
    sku: 'AC-8821',
    name: 'USB-C Multiport Docking Station',
    category: 'Accessories',
    units: 2310,
    revenue: 161700,
    margin: 38.4,
    returnRate: 1.4,
  },
  {
    sku: 'AP-1049',
    name: 'Winter Performance Fleece Jacket',
    category: 'Apparel',
    units: 1640,
    revenue: 131200,
    margin: 7.2,
    returnRate: 18.6,
  },
  {
    sku: 'EL-3310',
    name: 'Noise-Canceling Wireless Earbuds',
    category: 'Electronics',
    units: 1950,
    revenue: 195000,
    margin: 11.4,
    returnRate: 6.9,
  },
];

// Simulated Customer Churn Dataset (Project 2)
const CHURN_CONTRACT_DATA = [
  {
    contract: 'Month-to-Month',
    totalCustomers: 3875,
    churned: 1655,
    churnRate: 42.7,
    avgMonthlyCharge: 73.4,
  },
  {
    contract: 'One-Year Contract',
    totalCustomers: 1473,
    churned: 166,
    churnRate: 11.3,
    avgMonthlyCharge: 65.1,
  },
  {
    contract: 'Two-Year Contract',
    totalCustomers: 1695,
    churned: 48,
    churnRate: 2.8,
    avgMonthlyCharge: 60.8,
  },
];

const CHURN_TENURE_DATA = [
  {
    cohort: '0–6 Months',
    churnRate: 51.4,
    activeCustomers: 720,
    churnedCustomers: 762,
  },
  {
    cohort: '7–12 Months',
    churnRate: 34.2,
    activeCustomers: 690,
    churnedCustomers: 358,
  },
  {
    cohort: '13–24 Months',
    churnRate: 22.8,
    activeCustomers: 1120,
    churnedCustomers: 330,
  },
  {
    cohort: '25–48 Months',
    churnRate: 14.1,
    activeCustomers: 1480,
    churnedCustomers: 243,
  },
  {
    cohort: '49+ Months',
    churnRate: 6.8,
    activeCustomers: 2164,
    churnedCustomers: 176,
  },
];

// Detailed 13-Section Case Studies Data
const CASE_STUDIES_DATA = {
  'ecom-sales': {
    id: 'ecom-sales',
    badge: 'Proposed Portfolio Case Study • Simulated Dataset',
    title: 'E-Commerce Sales and Profitability Analysis',
    subtitle:
      'Diagnosing margin compression and regional revenue drivers across 10,000 simulated retail transactions.',
    category: 'Business Intelligence',
    tools: ['Excel', 'SQL', 'Power BI'],
    execSummary:
      'This proposed portfolio case study investigates a simulated multi-category e-commerce dataset ($1.63M gross revenue, $305.5K net profit, 18.7% overall margin). Exploratory analysis reveals that while Electronics drives 39.5% of top-line revenue, promotional discounting above 15% in Q4 compresses category margins to 14.0%, and high product return rates (18.6%) in Apparel erode net profitability.',
    businessContext:
      'E-commerce merchandising teams frequently optimize for gross merchandise value (GMV) and seasonal order volume without real-time visibility into net contribution margin after discounts, shipping costs, and product returns.',
    problemStatement:
      'Despite strong top-line revenue growth in Q4 (specifically November promotional events), overall net profit margin dropped from 22.0% in October to 16.5% in November. Management requires a granular breakdown of product, category, and regional profitability to restructure discount thresholds.',
    businessObjectives: [
      'Identify which product categories and SKUs generate the highest top-line revenue versus highest net profit contribution.',
      'Quantify the margin erosion caused by promotional discount tiers across categories.',
      'Analyze monthly seasonality and regional sales distribution across West, South, North, and East territories.',
      'Formulate data-backed pricing and merchandising hypotheses for management testing.',
    ],
    datasetInfo:
      'Clearly Labeled Simulated Dataset: "Synthetic Retail Store Orders (FY 2025)" containing 10,000 order line items across 4 categories (Electronics, Home & Office, Apparel, Accessories) and 4 regions. Fields include Order_ID, Order_Date, Customer_ID, Region, Category, SKU, Quantity, Unit_Price, Discount_Pct, COGS, Shipping_Cost, Return_Flag, and Net_Profit.',
    dataCleaning: [
      'Standardized inconsistent date formats (MM/DD/YYYY and YYYY-MM-DD) into ISO-8601 timestamps prior to cohort aggregation.',
      'Identified and removed 42 duplicate order line logs generated by simulated payment gateway retries.',
      'Handled 118 missing Shipping_Cost records by imputing category-weight median shipping rates.',
      'Constructed calculated columns for Net_Revenue = (Unit_Price * Quantity * (1 - Discount_Pct)) and Contribution_Margin_Pct.',
    ],
    methodology:
      'Performed multi-dimensional aggregation using SQL Common Table Expressions (CTEs) and window functions to rank SKU profitability. Built an interactive visual model to cross-filter monthly revenue trajectories against discount bands and return rates.',
    keyFindings: [
      'Top-Line vs. Bottom-Line Divergence: Electronics generates the highest revenue ($643.5K) but ranks third in profit margin (14.0%). Conversely, Accessories generates $248.6K in revenue but yields a 34.0% margin ($84.5K profit).',
      'November Discount Drag: November recorded the highest monthly sales ($196.5K) due to seasonal promotions, but average margin fell by 550 bps (to 16.5%) because orders with >20% discount generated negative net contribution on bulky items.',
      'Apparel Return Impact: Apparel exhibits the lowest net profit margin (9.0%), heavily impacted by an 18.6% return rate on seasonal outerwear SKUs.',
      'Regional Concentration: West and South regions account for 62.8% of total sales, with Home & Office performing unusually strongly in the South region.',
    ],
    recommendations: [
      'Test Margin-Floor Guardrails: Propose capping promotional discounts on Electronics at 12% unless bundled with high-margin Accessories (34% margin) to protect blended basket profitability.',
      'Apparel Sizing & Fit Intervention: Audit size charts and customer return logs for SKU AP-1049 (18.6% return rate) before expanding Apparel ad spend.',
      'Regional Inventory Allocation: Increase safety stock of Home & Office standing desks in South and West regional fulfillment hubs ahead of Q3/Q4 peaks.',
    ],
    expectedImpact:
      'Illustrative Simulation Estimate: If bundling high-margin Accessories lifts attachment rate by 8% and capping unbundled Electronics discounts at 12% holds volume within ±5%, simulated blended net margin could improve by an estimated 1.4% to 2.1% (requires live A/B pricing validation).',
    limitations: [
      'Dataset is synthetic and does not capture real-world customer price elasticity or competitor price-matching dynamics.',
      'Customer Acquisition Cost (CAC) and digital ad spend per channel are excluded from the order-level table, meaning analysis reflects Gross Contribution Margin rather than fully loaded Net Profit.',
    ],
    whatILearned:
      'Structuring this case study reinforced how aggregate revenue metrics can mask unit-economic vulnerabilities. I practiced writing modular SQL window queries for Pareto (80/20) SKU analysis and translating financial ratios into clear visual stories.',
    sqlSnippet: `-- SQL Query: Category Profitability & Discount Band Analysis (Simulated Schema)
WITH OrderEconomics AS (
    SELECT 
        category,
        region,
        DATE_TRUNC('month', order_date) AS sales_month,
        SUM(unit_price * quantity * (1 - discount_pct)) AS net_revenue,
        SUM(
            (unit_price * quantity * (1 - discount_pct)) 
            - (cogs * quantity) 
            - shipping_cost
        ) AS net_profit,
        AVG(discount_pct) * 100.0 AS avg_discount_pct
    FROM simulated_ecommerce_orders
    WHERE order_status != 'CANCELLED'
    GROUP BY 1, 2, 3
)
SELECT 
    category,
    ROUND(SUM(net_revenue), 2) AS total_revenue,
    ROUND(SUM(net_profit), 2) AS total_profit,
    ROUND((SUM(net_profit) / NULLIF(SUM(net_revenue), 0)) * 100, 2) AS profit_margin_pct,
    ROUND(AVG(avg_discount_pct), 1) AS mean_discount_pct
FROM OrderEconomics
GROUP BY category
ORDER BY total_profit DESC;`,
    pythonSnippet: `# Python / Pandas: Detecting Margin Erosion by Discount Tier
import pandas as pd
import numpy as np

# Load simulated e-commerce transactions
df = pd.read_csv('simulated_ecommerce_orders_2025.csv')

# Create discount buckets to inspect profitability cliff
df['discount_tier'] = pd.cut(
    df['discount_pct'], 
    bins=[-0.01, 0.0, 0.10, 0.20, 1.0],
    labels=['No Discount', '1-10% Off', '11-20% Off', '20%+ Off']
)

summary = (
    df.groupby(['category', 'discount_tier'], observed=True)
    .agg(
        orders=('order_id', 'count'),
        net_rev=('net_revenue', 'sum'),
        net_profit=('net_profit', 'sum'),
        return_rate=('is_returned', 'mean')
    )
    .assign(margin_pct=lambda x: (x['net_profit'] / x['net_rev']) * 100)
    .round(2)
)
print(summary)`,
  },
  'customer-churn': {
    id: 'customer-churn',
    badge: 'Proposed Portfolio Case Study • Sample Benchmark Dataset',
    title: 'Customer Churn and Retention Analysis',
    subtitle:
      'Identifying early-tenure attrition patterns and contract-structure risks across 7,043 subscription accounts.',
    category: 'Customer Analytics',
    tools: ['Python', 'Pandas', 'SQL', 'Power BI'],
    execSummary:
      'Using a standard sample telecommunications subscription dataset (n = 7,043 accounts), this exploratory analysis investigates the structural drivers of customer attrition. The overall sample churn rate is 26.5% (1,869 churned accounts). Cohort segmentation reveals that churn is heavily concentrated among Month-to-Month contract holders (42.7% churn) and customers in their first 6 months of tenure (51.4% churn).',
    businessContext:
      'Subscription-based businesses depend on recurring revenue and long customer lifetimes (LTV) to recover upfront acquisition costs. Identifying which customer segments are at highest risk of early cancellation enables targeted retention experiments.',
    problemStatement:
      'With an aggregate sample attrition rate of 26.5%, leadership needs to understand how contract structure, customer tenure, and monthly billing tiers interact with churn so retention teams can design targeted intervention tests.',
    businessObjectives: [
      'Quantify overall sample churn rate and monthly recurring revenue (MRR) exposed to attrition.',
      'Segment churn rates across contract types (Month-to-Month, 1-Year, 2-Year) and payment methods.',
      'Evaluate tenure survival curves to pinpoint the critical onboarding drop-off window.',
      'Propose structured, testable retention initiatives without assuming unverified causal impact.',
    ],
    datasetInfo:
      'Clearly Labeled Sample Benchmark Dataset: Public Telecom Customer Churn structure (7,043 rows, 21 columns). Features include customerID, tenure (months), Contract, PaymentMethod, MonthlyCharges, TotalCharges, InternetService, TechSupport, and Churn (Yes/No).',
    dataCleaning: [
      'Inspected TotalCharges column and found 11 whitespace strings corresponding to new customers with tenure = 0; coerced to float and imputed 0.0.',
      'Verified binary consistency across Yes/No categorical service flags and standardized column naming conventions.',
      'Engineered tenure cohort brackets (0–6m, 7–12m, 13–24m, 25–48m, 49+m) for survival comparison.',
    ],
    methodology:
      'Conducted bivariate cross-tabulations and cohort risk ratio calculations in Python (Pandas) and SQL. Compared average monthly charges between churned and retained segments while controlling for contract duration.',
    keyFindings: [
      'Contract Structure Risk: Month-to-Month customers exhibit a 42.7% churn rate (1,655 of 3,875 accounts), compared to 11.3% for One-Year contracts and 2.8% for Two-Year contracts.',
      'Early Onboarding Drop-off: 51.4% of customers within the 0–6 month tenure cohort churned, representing over 40% of all churn events in the dataset.',
      'Pricing & Support Friction: Churned Month-to-Month accounts pay an average of $73.40/month vs. $61.20/month for retained Month-to-Month accounts, and overwhelmingly lack bundled TechSupport add-ons.',
      'Payment Method Correlation: Customers paying via manual Electronic Check show significantly higher attrition than those enrolled in automatic bank transfer or credit card billing.',
    ],
    recommendations: [
      'Hypothesis Test 1 — Onboarding Check-in Playbook: Test a proactive 30-day and 60-day technical onboarding check-in for Month-to-Month fiber customers paying >$70/month.',
      'Hypothesis Test 2 — Annual Contract Migration Incentive: Run a randomized A/B offer at Month 3 offering a 1-month fee credit or complimentary TechSupport trial for converting from Month-to-Month to a 1-Year contract.',
      'Hypothesis Test 3 — Auto-Pay Enrollment Nudge: Test a small one-time bill credit to encourage Electronic Check users to switch to automated recurring payments.',
    ],
    expectedImpact:
      'Important Analytical Note: Because observational correlations (such as lower churn on annual contracts) reflect customer self-selection, we do not claim that these proposed strategies will automatically reduce churn. Their actual impact must be measured via controlled A/B testing prior to full rollout.',
    limitations: [
      'Cross-sectional snapshot lacks time-series logs of support ticket frequency or network outage events prior to cancellation.',
      'Observational data cannot separate price sensitivity from underlying service dissatisfaction without randomized experimentation.',
    ],
    whatILearned:
      'This project sharpened my ability to distinguish between correlation and causation in customer analytics—specifically recognizing why self-selection into annual contracts requires A/B testing rather than naive extrapolation.',
    sqlSnippet: `-- SQL Query: Cohort Churn Rate & Revenue Exposure by Contract Type
SELECT 
    contract_type,
    CASE 
        WHEN tenure_months <= 6 THEN '01. 0-6 Months'
        WHEN tenure_months <= 12 THEN '02. 7-12 Months'
        WHEN tenure_months <= 24 THEN '03. 13-24 Months'
        ELSE '04. 25+ Months'
    END AS tenure_cohort,
    COUNT(customer_id) AS total_customers,
    SUM(CASE WHEN churn_label = 'Yes' THEN 1 ELSE 0 END) AS churned_customers,
    ROUND(
        100.0 * SUM(CASE WHEN churn_label = 'Yes' THEN 1 ELSE 0 END) / COUNT(customer_id), 
        1
    ) AS churn_rate_pct,
    ROUND(AVG(monthly_charges), 2) AS avg_monthly_bill
FROM sample_telecom_churn
GROUP BY 1, 2
ORDER BY 1, 2;`,
    pythonSnippet: `# Python / Pandas: Cohort Risk Analysis & Feature Cross-Tabulation
import pandas as pd

df = pd.read_csv('sample_telecom_churn.csv')
df['TotalCharges'] = pd.to_numeric(df['TotalCharges'], errors='coerce').fillna(0.0)
df['churn_flag'] = (df['Churn'] == 'Yes').astype(int)

# Calculate relative risk by contract and tech support availability
risk_table = (
    df.groupby(['Contract', 'TechSupport'])
    .agg(
        accounts=('customerID', 'count'),
        churn_rate=('churn_flag', lambda x: round(x.mean() * 100, 1)),
        median_monthly_charge=('MonthlyCharges', 'median')
    )
    .reset_index()
)
print(risk_table)`,
  },
  'kpi-dashboard': {
    id: 'kpi-dashboard',
    badge: 'Proposed Portfolio Case Study • Interactive BI Prototype',
    title: 'Executive Business Performance Dashboard',
    subtitle:
      'Designing a self-service KPI monitoring framework for regional and seasonal decision-making.',
    category: 'Data Visualization & BI',
    tools: ['Power BI', 'Tableau', 'SQL'],
    execSummary:
      'This case study demonstrates the design and architecture of an interactive Executive Business Performance Dashboard built on simulated retail operations data. It establishes standardized KPI definitions—Revenue, Net Profit, Profit Margin %, Average Order Value (AOV), and Regional Contribution—allowing managers to filter by quarter, region, and category to move from high-level symptom detection to root-cause diagnosis.',
    businessContext:
      'Department heads often bring conflicting spreadsheets to weekly business reviews, spending valuable meeting time debating metric definitions rather than acting on operational bottlenecks.',
    problemStatement:
      'Operational managers lack a single, standardized view of financial and volume KPIs that dynamically updates across time horizons and product categories.',
    businessObjectives: [
      'Define unambiguous, standardized formulas for core financial KPIs (Gross Revenue, Net Profit, Margin %, AOV).',
      'Enable interactive drill-downs by Quarter (Q1–Q4) and Product Category without cluttering the primary view.',
      'Highlight threshold breaches (such as margin drops below 18%) immediately using visual hierarchy.',
      'Document a clear decision workflow showing how managers use the dashboard in weekly reviews.',
    ],
    datasetInfo:
      'Clearly Labeled Simulated Dataset: Aggregated from the 10,000-row synthetic retail schema into a star-schema analytical model (`Fact_Sales`, `Dim_Date`, `Dim_Product`, `Dim_Geography`).',
    dataCleaning: [
      'Designed a clean Star Schema separating transactional measures from descriptive dimension attributes.',
      'Verified referential integrity between SKU keys in Fact_Sales and Dim_Product.',
      'Created explicit DAX/calculated measures rather than implicit column averages to prevent ratio-of-averages distortion.',
    ],
    methodology:
      'Applied visual hierarchy principles (F-pattern layout): top-row summary KPI cards with period comparisons, middle-row temporal trend and margin composition charts, and bottom-row granular SKU performance tables.',
    keyFindings: [
      'Ratio Accuracy via Explicit Measures: Calculating Profit Margin as SUM(Profit)/SUM(Revenue) yields 18.7%, whereas an un-weighted average of row margins would distort the metric by +2.4%.',
      'Seasonal AOV Shift: Average Order Value peaks in Q4 ($184.50) driven by Electronics gift purchases, even as percentage margin tightens.',
      'Actionable Drill-Down Workflow: Filtering the dashboard to Q4 + Apparel immediately isolates the SKU return spike responsible for regional underperformance.',
    ],
    recommendations: [
      'Adopt Star-Schema Governance: Enforce centralized calculated measures in Power BI / Tableau so all departments report identical margin percentages.',
      'Implement Automated Exception Alerts: Configure threshold alerts when weekly category contribution margin dips more than 200 bps below the trailing 12-week moving average.',
    ],
    expectedImpact:
      'Illustrative Process Benefit: Standardizing KPI definitions in a self-service dashboard reduces manual weekly spreadsheet reconciliation effort and structures management discussions around actionable exceptions.',
    limitations: [
      'Prototype uses simulated static snapshots; a production deployment would require scheduled incremental ETL refreshes and row-level security (RLS) by regional manager.',
    ],
    whatILearned:
      'Building this dashboard taught me the importance of semantic data modeling (Star Schema) and why proper aggregation logic (weighted ratios vs. simple averages) is critical for trustworthy executive reporting.',
    sqlSnippet: `-- SQL View: Star-Schema Executive KPI Aggregation Layer
CREATE OR REPLACE VIEW vw_executive_monthly_kpis AS
SELECT 
    d.calendar_year,
    d.calendar_quarter,
    d.month_name,
    p.category_name,
    g.region_name,
    COUNT(DISTINCT f.order_id) AS total_orders,
    SUM(f.net_revenue) AS gross_revenue,
    SUM(f.net_profit) AS net_profit,
    ROUND(SUM(f.net_revenue) / NULLIF(COUNT(DISTINCT f.order_id), 0), 2) AS avg_order_value
FROM fact_sales f
JOIN dim_date d ON f.date_key = d.date_key
JOIN dim_product p ON f.product_key = p.product_key
JOIN dim_geography g ON f.geo_key = g.geo_key
GROUP BY 1, 2, 3, 4, 5;`,
    pythonSnippet: `# Python Validation Script: Verifying Star-Schema Measure Totals
import pandas as pd

def validate_kpi_measures(df):
    total_rev = df['net_revenue'].sum()
    total_profit = df['net_profit'].sum()
    total_orders = df['order_id'].nunique()
    
    # Weighted Margin vs Unweighted Row Average check
    weighted_margin = (total_profit / total_rev) * 100
    unweighted_margin = (df['net_profit'] / df['net_revenue']).mean() * 100
    
    return {
        "Total Revenue": round(total_rev, 2),
        "Total Profit": round(total_profit, 2),
        "Weighted Margin (%)": round(weighted_margin, 2),
        "Unweighted Distortion (%)": round(unweighted_margin - weighted_margin, 2),
        "AOV ($)": round(total_rev / total_orders, 2)
    }`,
  },
  'ai-roi-simulator': {
    id: 'ai-roi-simulator',
    badge: 'Proposed Portfolio Case Study • Decision Support Model',
    title: 'AI Adoption Readiness and ROI Simulator for SMEs',
    subtitle:
      'A transparent unit-economics decision tool helping small and medium enterprises evaluate workflow automation.',
    category: 'Decision Modeling & FinOps',
    tools: [
      'Business Process Analysis',
      'Financial Modeling',
      'Python / React',
    ],
    execSummary:
      'Small and medium-sized enterprises (SMEs) face intense hype around AI adoption but often lack structured frameworks to evaluate whether automating a specific business process makes financial sense. This decision-support tool models task volume, hourly labor cost, realistic automation potential, user adoption friction, CAPEX implementation cost, and ongoing OPEX SaaS fees to compute Net Benefit, ROI %, and Payback Period across Conservative, Expected, and Optimistic scenarios.',
    businessContext:
      'Many AI pilot projects fail to deliver positive financial returns because vendors pitch 100% theoretical automation while ignoring employee adoption curves, exception-handling overhead, and recurring API/maintenance costs.',
    problemStatement:
      'SME decision-makers need an honest, transparent calculator that discounts theoretical time savings by expected real-world adoption rates and compares cumulative cash flows against upfront implementation costs.',
    businessObjectives: [
      'Translate operational workflow metrics (headcount, weekly task hours, hourly wage) into baseline annual process cost.',
      'Explicitly incorporate an "Expected Adoption Rate" multiplier alongside "Automation Potential" to prevent over-optimistic projections.',
      'Model both First-Year Net Benefit (including CAPEX setup) and multi-year cumulative cash flows.',
      'Provide side-by-side Sensitivity Scenarios (Conservative, Expected, Optimistic) with clear financial disclaimers.',
    ],
    datasetInfo:
      'Parametric Financial & Operational Model: Driven by 8 user-configurable business inputs with preset benchmarks for Customer Support Triage, Invoice & AP Processing, and Quality Inspection Reporting.',
    dataCleaning: [
      'Enforced boundary constraints on model parameters (e.g., capping automation and adoption rates between 5% and 95% to prevent division-by-zero or unrealistic 100% replacement assumptions).',
      'Separated Year-1 cash outflows (Initial Implementation CAPEX + 12 months OPEX) from Year 2+ recurring OPEX.',
    ],
    methodology:
      'Constructed a transparent deterministic cash-flow model: Annual Realized Hours Reallocated = (Employees × Weekly Hours × 52) × Automation_Pct × Adoption_Pct. Evaluated Net Present Cash Flow, Multi-Year ROI %, and linear Payback Period in months.',
    keyFindings: [
      'Adoption Rate Is the Primary Lever: A tool with 60% technical automation potential but only 45% team adoption yields less value than a simpler workflow tool with 40% automation and 85% adoption.',
      'Fixed CAPEX Hurdle for Small Teams: For teams of fewer than 5 employees performing low-frequency tasks (<4 hrs/week), high custom implementation fees ($15K+) push payback periods beyond 24 months.',
      'Time Reallocation vs. Hard Payroll Reduction: Reallocating 1,500 hours/year across 12 employees (2.4 hrs/week per person) creates capacity for higher-value work rather than immediate payroll headcount reduction.',
    ],
    recommendations: [
      'Prioritize High-Frequency, Standardized Bottlenecks: Target workflows where repetitive data entry exceeds 6–8 hours/week per employee before investing in custom integration.',
      'Budget 20% of Setup Cost for Change Management: Since ROI is highly sensitive to the Adoption Rate parameter, pair technical deployment with team training and SOP updates.',
      'Evaluate Payback Under the Conservative Scenario: Require proposed AI pilots to break even within the target evaluation horizon under conservative (-20% adoption/automation) assumptions.',
    ],
    expectedImpact:
      'Illustrative Decision Governance Value: Gives SME managers an auditable, assumption-driven framework to screen out negative-ROI AI pitches and focus capital on high-feasibility operational bottlenecks.',
    limitations: [
      'Illustrative estimates only—does not constitute formal financial, accounting, or investment advice.',
      'Assumes reclaimed employee hours are productively redeployed at their equivalent hourly cost rate; does not account for tax depreciation or discount rate (NPV/WACC) adjustments.',
    ],
    whatILearned:
      'Designing this simulator bridged my engineering systems-modeling background with managerial finance. It taught me how to build transparent sensitivity models that highlight assumptions and risk rather than promising guaranteed outcomes.',
    sqlSnippet: `-- SQL Benchmark Query: Identifying High-Volume Candidate Workflows for Automation
SELECT 
    department,
    process_name,
    COUNT(DISTINCT employee_id) AS involved_staff,
    ROUND(AVG(weekly_hours_logged), 1) AS avg_weekly_hrs_per_emp,
    ROUND(SUM(weekly_hours_logged * 52 * fully_loaded_hourly_rate), 0) AS annual_baseline_labor_cost,
    ROUND(AVG(error_rework_rate_pct), 1) AS rework_rate_pct
FROM internal_process_time_audit
WHERE task_standardization_score >= 4 -- High rule-based repeatability (1-5 scale)
GROUP BY 1, 2
HAVING SUM(weekly_hours_logged * 52) > 1000
ORDER BY annual_baseline_labor_cost DESC;`,
    pythonSnippet: `# Python Model: AI Adoption ROI & Scenario Sensitivity Engine
def calculate_ai_roi(
    employees: int,
    weekly_hours: float,
    hourly_cost: float,
    automation_pct: float,
    adoption_pct: float,
    setup_cost: float,
    monthly_opex: float,
    years: int
) -> dict:
    annual_task_hours = employees * weekly_hours * 52
    effective_hours_saved = annual_task_hours * (automation_pct / 100.0) * (adoption_pct / 100.0)
    annual_gross_savings = effective_hours_saved * hourly_cost
    annual_opex = monthly_opex * 12
    
    first_year_net = annual_gross_savings - (setup_cost + annual_opex)
    total_horizon_savings = annual_gross_savings * years
    total_horizon_cost = setup_cost + (annual_opex * years)
    net_horizon_benefit = total_horizon_savings - total_horizon_cost
    
    roi_pct = ((net_horizon_benefit) / total_horizon_cost) * 100 if total_horizon_cost > 0 else 0
    monthly_net_savings = (annual_gross_savings - annual_opex) / 12
    payback_months = (setup_cost / monthly_net_savings) if monthly_net_savings > 0 else None
    
    return {
        "effective_hours_saved_yr": round(effective_hours_saved, 1),
        "potential_annual_savings": round(annual_gross_savings, 2),
        "first_year_net_benefit": round(first_year_net, 2),
        "horizon_roi_pct": round(roi_pct, 1),
        "payback_months": round(payback_months, 1) if payback_months else "No Payback"
    }`,
  },
};

// Verified Engineering Projects with an Analytics Perspective
const ENGINEERING_PROJECTS = [
  {
    id: 'digital-twin',
    badge:
      'Actual Engineering & Research Project • ISAE-Supméca, France (Feb – Jun 2026)',
    title: 'Industry 5.0 Digital Twin of a Smart Production System',
    context:
      'International Research Internship at Euler Laboratory, ISAE-Supméca (Paris, France) — Funded by Fondation Dassault Systèmes / GIFAS.',
    technologies: [
      'Modelica',
      'Dymola',
      'Python',
      'FMI 2.0',
      'Pandas',
      'SciPy',
      'NPTDMS',
      '3DEXPERIENCE CAD',
      'Git',
    ],
    highlights: [
      'Developed a complete multiphysics digital twin of the ALIX Industry 5.0 production line integrating mechanical, electrical, thermal, and control-system models.',
      'Modeled and exported three multiphysics subsystems—induction-motor conveyor, 6-DOF CR5 collaborative robot, and 3-axis XY10 workstation—as FMI 2.0 compliant FMUs running 10x faster than real time via Python co-simulation.',
      'Validated digital twin predictions against physical TDMS industrial sensor data, achieving R² = 0.999 for voltage prediction, R² = 0.91 for current prediction, and 99.2% thermal correlation.',
      'Designed a six-metric validation framework with Stage-A/Stage-B decomposition isolating physics residuals from FMU export error; presented directly to Dassault Systèmes engineers.',
    ],
    analyticsBridge:
      'How This Connects to Business Analytics: Building and validating a digital twin is fundamentally an exercise in quantitative modeling and evidence-based validation. Parsing high-frequency TDMS sensor logs in Python (Pandas/SciPy), decomposing model error residuals, and communicating R² validation accuracy to industrial stakeholders directly parallel how a Business/Data Analyst validates forecasting models, audits data quality, and translates complex metrics for decision-makers.',
  },
  {
    id: 'iot-exhaust',
    badge: 'Actual Engineering Project • Hardware & Cloud Telemetry (2025)',
    title: 'IoT Exhaust System with Air Quality and Temperature Monitoring',
    context:
      'B.Tech Electronics & Telecommunication Engineering Project — Real-Time Environmental Telemetry & Threshold Automation.',
    technologies: [
      'ESP8266',
      'C++',
      'MQTT',
      'Blynk IoT',
      'MQ135 Sensor',
      'DHT11 Sensor',
    ],
    highlights: [
      'Engineered an IoT-enabled environmental monitoring system using ESP8266 to continuously capture air quality (MQ135), temperature, and humidity (DHT11) telemetry.',
      'Implemented automated threshold-based control logic to trigger exhaust actuation only when environmental KPIs breached safe operating bands, reducing unnecessary power consumption.',
      'Integrated MQTT and Blynk IoT cloud dashboards for live remote visualization of environmental parameters.',
      'Wrote reliable embedded C++ firmware for sensor acquisition, payload formatting, and cloud communication.',
    ],
    analyticsBridge:
      'How This Connects to Business Analytics: Every business intelligence pipeline starts with reliable data collection and operational thresholds. Designing end-to-end telemetry—from raw sensor ingestion and MQTT payload structuring to real-time cloud dashboard visualization and rule-based automated triggers—mirrors how organizations monitor operational KPIs and automate exception alerts.',
  },
];

// Additional Resume Projects (for completeness in archive/engineering depth)
const ADDITIONAL_ENGINEERING_WORK = [
  {
    title: 'Voice-Controlled Motor Switch (Jul 2025)',
    tech: 'ESP8266, C++, Sinric Pro, Google Home',
    summary:
      'Wrote C++ firmware interfacing an L298N motor driver with cloud APIs, achieving 99% command accuracy with auto-reconnect and overcurrent protection.',
  },
  {
    title: 'IoT Motor Control System (Dec 2024)',
    tech: 'ESP8266, L298N, Blynk IoT, MQTT, C++',
    summary:
      'Built bidirectional motor telemetry and automated duty-cycle scheduling, reducing energy waste by 25% and streaming structured payloads to cloud dashboards.',
  },
];

// ==========================================
// 2. RESUME PRINT / DOWNLOAD GENERATOR
// ==========================================
const triggerResumeDownload = () => {
  const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Samiksha_Satre_Resume_Business_Analytics_&_Engineering.html</title>
  <style>
    body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; line-height: 1.45; max-width: 820px; margin: 28px auto; padding: 0 24px; font-size: 13px; }
    h1 { font-size: 24px; margin: 0 0 4px 0; color: #0f172a; letter-spacing: 0.5px; }
    .subtitle { font-size: 13px; font-weight: 600; color: #1d4ed8; margin-bottom: 6px; }
    .contact { font-size: 12px; color: #475569; margin-bottom: 14px; border-bottom: 2px solid #0f172a; padding-bottom: 10px; }
    .contact a { color: #1d4ed8; text-decoration: none; }
    h2 { font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #1e3a8a; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin: 14px 0 8px 0; }
    .item { margin-bottom: 10px; }
    .row { display: flex; justify-content: space-between; font-weight: 600; color: #0f172a; }
    .subrow { display: flex; justify-content: space-between; font-style: italic; color: #475569; font-size: 12px; margin-bottom: 4px; }
    ul { margin: 4px 0 8px 18px; padding: 0; }
    li { margin-bottom: 3px; }
    .skills-grid { display: grid; grid-template-columns: 165px 1fr; row-gap: 4px; font-size: 12.5px; }
    .print-banner { background: #eff6ff; border: 1px solid #bfdbfe; padding: 10px 14px; border-radius: 6px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; }
    .btn { background: #1d4ed8; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-weight: 600; }
    @media print { .print-banner { display: none; } body { margin: 0; padding: 10px; } }
  </style>
</head>
<body>
  <div class="print-banner">
    <span><strong>Samiksha Satre — Official Portfolio Resume</strong> (Click "Save as PDF" in your browser print dialog)</span>
    <button class="btn" onclick="window.print()">Print / Save as PDF</button>
  </div>
  <h1>SAMIKSHA SATRE</h1>
  <div class="subtitle">MBA in Business Analytics Candidate (SPPU) | B.Tech in Electronics & Telecommunication Engineering</div>
  <div class="contact">
    Solapur / Pune, Maharashtra, India | +91-9209047027 | <a href="mailto:satresamiksha@gmail.com">satresamiksha@gmail.com</a> | 
    <a href="https://www.linkedin.com/in/samiksha-satre-94636729a/">linkedin.com/in/samiksha-satre-94636729a</a> | 
    <a href="https://github.com/samikshasatre">github.com/samikshasatre</a>
  </div>

  <h2>Professional Summary</h2>
  <p style="margin: 0 0 8px 0;">
    MBA in Business Analytics student at Savitribai Phule Pune University (SPPU) with a B.Tech in Electronics and Telecommunication Engineering and international R&D experience at ISAE-Supméca, Paris, France. Experienced in Python-based data analysis (Pandas, SciPy, NumPy), multiphysics system validation, and sensor telemetry. Transitioning into Business Analyst, Data Analyst, BI Analyst, and Product Analyst roles to bridge technical systems and data-driven business decision-making.
  </p>

  <h2>Education</h2>
  <div class="item">
    <div class="row"><span>Savitribai Phule Pune University (SPPU)</span><span>Ongoing (Pursuing)</span></div>
    <div class="subrow"><span>Master of Business Administration (MBA) — Business Analytics</span><span>Pune, India</span></div>
  </div>
  <div class="item">
    <div class="row"><span>N.K. Orchid College of Engineering & Technology</span><span>2023 – 2026</span></div>
    <div class="subrow"><span>B.Tech in Electronics and Telecommunication Engineering</span><span>Solapur, India</span></div>
  </div>
  <div class="item">
    <div class="row"><span>VVP Polytechnic</span><span>2020 – 2023</span></div>
    <div class="subrow"><span>Diploma in Computer Science Engineering</span><span>Solapur, India</span></div>
  </div>

  <h2>Experience</h2>
  <div class="item">
    <div class="row"><span>Euler Laboratory, ISAE-Supméca (Institut Supérieur de Mécanique de Paris)</span><span>Feb 2026 – Jun 2026</span></div>
    <div class="subrow"><span>International Research Intern — Digital Twin of an Industry 5.0 Production Line</span><span>Paris, France</span></div>
    <ul>
      <li>Selected for a competitive international research internship funded by Fondation Dassault Systèmes / GIFAS.</li>
      <li>Built and orchestrated a complete multiphysics digital twin of the ALIX Industry 5.0 production line running 10x faster than real time from a single Python co-simulation program.</li>
      <li>Analyzed measured TDMS industrial sensor data using Python (Pandas, SciPy, NPTDMS) and designed a six-metric validation framework isolating physics residuals from FMU export error.</li>
      <li>Presented research findings and validation accuracy directly to Dassault Systèmes engineers in a technical review meeting.</li>
    </ul>
  </div>
  <div class="item">
    <div class="row"><span>Emertxe Information Technologies</span><span>Jan 2025 – Mar 2025</span></div>
    <div class="subrow"><span>Embedded Engineer Intern</span><span>Remote</span></div>
    <ul>
      <li>Developed C/C++ firmware for microcontroller peripherals including GPIO, UART, SPI, and I2C interfaces.</li>
      <li>Debugged firmware in real time using Keil uVision and serial monitors, reducing system error rates by 15% and parsing raw serial data payloads.</li>
    </ul>
  </div>

  <h2>Key Engineering & Data Validation Projects</h2>
  <div class="item">
    <div class="row"><span>Industry 5.0 Digital Twin of a Smart Production System | Modelica, Dymola, Python, Pandas, SciPy</span><span>Feb – Jun 2026</span></div>
    <ul>
      <li>Validated digital twin accuracy against physical TDMS sensor measurements, achieving R² = 0.999 for voltage prediction, R² = 0.91 for current prediction, and 99.2% thermal correlation.</li>
    </ul>
  </div>
  <div class="item">
    <div class="row"><span>IoT Exhaust System with Air Quality & Temperature Monitoring | ESP8266, C++, MQTT, Blynk IoT</span><span>2025</span></div>
    <ul>
      <li>Monitored environmental data via MQ135 and DHT11 sensors; implemented threshold-based automation and live cloud dashboard telemetry.</li>
    </ul>
  </div>

  <h2>Skills & Tools</h2>
  <div class="skills-grid">
    <strong>Data & Programming:</strong><span>Python (Pandas, NumPy, SciPy, FMPy, NPTDMS), SQL (Developing), Data Cleaning & EDA (Developing)</span>
    <strong>Business Analytics:</strong><span>Business Problem-Solving, Analytical Thinking, Business Research, KPI & Process Analysis (Developing)</span>
    <strong>BI & Visualization:</strong><span>Excel (Learning), Power BI (Learning), Tableau (Learning), Data Storytelling (Developing)</span>
    <strong>Engineering & Systems:</strong><span>C/C++, Embedded Systems, IoT (MQTT, Blynk), Digital Twins (Modelica, Dymola, FMI 2.0), Git</span>
  </div>

  <h2>Achievements & Certifications</h2>
  <ul>
    <li><strong>AI Elite Finalist — Bharat AI Quest 2025 (IIT Bombay & NPCI):</strong> Advanced through all national rounds; attended NVIDIA Deep Learning Institute workshop & Global Fintech Fest 2025.</li>
    <li><strong>Research Scholarship — Fondation Dassault Systèmes / GIFAS (2026):</strong> Funded international research internship in Paris, France.</li>
    <li><strong>Competition Wins:</strong> Winner, AgitTechFest 2025; Winner, WisoTech 2024; Winner, WisoTech 2023; Winner, E2Logic 2023.</li>
    <li><strong>LinkedIn Learning Certifications:</strong> Process Mining for RPA; RPA, AI, and Cognitive Tech for Leaders; What Is Generative AI; IoT Foundations.</li>
  </ul>
</body>
</html>`;

  const blob = new Blob([resumeHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, '_blank');
  if (!win) {
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Samiksha_Satre_Resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

// ==========================================
// 3. MAIN PORTFOLIO APPLICATION COMPONENT
// ==========================================
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Case Study View State
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState('ecom-sales');
  const [activeTocSection, setActiveTocSection] = useState('sec-1');
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);

  // Project Filter & Search State
  const [projectSearch, setProjectSearch] = useState('');
  const [projectToolFilter, setProjectToolFilter] = useState('All');

  // Interactive Workspace Tab inside Projects (Dashboard / Churn / ROI Simulator)
  const [activeInteractiveTab, setActiveInteractiveTab] =
    useState('ecom-dashboard');

  // Project 3: Interactive Dashboard Filter States
  const [selectedQuarter, setSelectedQuarter] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Project 4: AI Adoption & ROI Simulator States
  const [roiInputs, setRoiInputs] = useState({
    employees: 18,
    hoursPerWeek: 7.5,
    hourlyCost: 22,
    automationPotential: 45,
    initialCost: 12000,
    monthlyCost: 450,
    adoptionRate: 70,
    evaluationYears: 2,
  });

  // Contact Form States
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    roleType: 'Business Analyst / Data Analyst Role',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Update Page Title for SEO
  useEffect(() => {
    document.title =
      'Samiksha Satre | MBA in Business Analytics & Engineering Portfolio';
  }, []);

  // Scroll spy & smooth scroll helper
  const scrollToSection = (sectionId) => {
    setShowCaseStudyModal(false);
    setActiveNav(sectionId);
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openDetailedCaseStudy = (studyId) => {
    setSelectedCaseStudyId(studyId);
    setShowCaseStudyModal(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ==========================================
  // CALCULATIONS FOR INTERACTIVE DASHBOARD (P1 & P3)
  // ==========================================
  const filteredDashboardData = useMemo(() => {
    const months =
      selectedQuarter === 'All'
        ? ECOM_MONTHLY_DATA
        : ECOM_MONTHLY_DATA.filter((d) => d.Quarter === selectedQuarter);

    const chartRows = months.map((m) => {
      let rev = 0;
      let margin = m.profitRate;
      if (selectedCategory === 'All') {
        rev = m.Electronics + m.HomeOffice + m.Apparel + m.Accessories;
      } else if (selectedCategory === 'Electronics') {
        rev = m.Electronics;
        margin = 0.14;
      } else if (selectedCategory === 'Home & Office') {
        rev = m.HomeOffice;
        margin = 0.24;
      } else if (selectedCategory === 'Apparel') {
        rev = m.Apparel;
        margin = 0.09;
      } else if (selectedCategory === 'Accessories') {
        rev = m.Accessories;
        margin = 0.34;
      }
      const profit = Math.round(rev * margin);
      return {
        month: m.month,
        Quarter: m.Quarter,
        Revenue: rev,
        Profit: profit,
        MarginPct: Number((margin * 100).toFixed(1)),
        Orders:
          selectedCategory === 'All' ? m.orders : Math.round(m.orders * 0.28),
      };
    });

    const totalRevenue = chartRows.reduce((acc, r) => acc + r.Revenue, 0);
    const totalProfit = chartRows.reduce((acc, r) => acc + r.Profit, 0);
    const totalOrders = chartRows.reduce((acc, r) => acc + r.Orders, 0);
    const weightedMargin =
      totalRevenue > 0
        ? ((totalProfit / totalRevenue) * 100).toFixed(1)
        : '0.0';
    const aov =
      totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(2) : '0.00';

    // Period growth calculation (first month vs last month in selection)
    const firstRev = chartRows[0]?.Revenue || 1;
    const lastRev = chartRows[chartRows.length - 1]?.Revenue || 1;
    const periodGrowth = (((lastRev - firstRev) / firstRev) * 100).toFixed(1);

    return {
      chartRows,
      totalRevenue,
      totalProfit,
      weightedMargin,
      aov,
      periodGrowth,
      totalOrders,
    };
  }, [selectedQuarter, selectedCategory]);

  // ==========================================
  // CALCULATIONS FOR AI ROI SIMULATOR (PROJECT 4)
  // ==========================================
  const roiResults = useMemo(() => {
    const computeScenario = (autoMultiplier, adoptMultiplier, label) => {
      const effAuto = Math.min(
        95,
        Math.max(5, roiInputs.automationPotential * autoMultiplier)
      );
      const effAdopt = Math.min(
        95,
        Math.max(5, roiInputs.adoptionRate * adoptMultiplier)
      );

      const totalTaskHoursYr =
        roiInputs.employees * roiInputs.hoursPerWeek * 52;
      const hoursAffectedYr =
        totalTaskHoursYr * (effAuto / 100) * (effAdopt / 100);
      const grossAnnualSavings = hoursAffectedYr * roiInputs.hourlyCost;
      const annualOpex = roiInputs.monthlyCost * 12;

      const firstYearTotalCost = roiInputs.initialCost + annualOpex;
      const firstYearNetBenefit = grossAnnualSavings - firstYearTotalCost;

      const horizonGrossSavings =
        grossAnnualSavings * roiInputs.evaluationYears;
      const horizonTotalCost =
        roiInputs.initialCost + annualOpex * roiInputs.evaluationYears;
      const horizonNetBenefit = horizonGrossSavings - horizonTotalCost;

      const roiPct =
        horizonTotalCost > 0 ? (horizonNetBenefit / horizonTotalCost) * 100 : 0;
      const monthlyNetCash = (grossAnnualSavings - annualOpex) / 12;
      const paybackMonths =
        monthlyNetCash > 0 ? roiInputs.initialCost / monthlyNetCash : null;

      return {
        scenario: label,
        effAuto: Math.round(effAuto),
        effAdopt: Math.round(effAdopt),
        totalTaskHoursYr: Math.round(totalTaskHoursYr),
        hoursAffectedYr: Math.round(hoursAffectedYr),
        grossAnnualSavings: Math.round(grossAnnualSavings),
        annualOpex: Math.round(annualOpex),
        firstYearNetBenefit: Math.round(firstYearNetBenefit),
        horizonNetBenefit: Math.round(horizonNetBenefit),
        roiPct: Number(roiPct.toFixed(1)),
        paybackMonths:
          paybackMonths !== null && paybackMonths <= 120
            ? Number(paybackMonths.toFixed(1))
            : null,
      };
    };

    const conservative = computeScenario(0.8, 0.8, 'Conservative (-20%)');
    const expected = computeScenario(1.0, 1.0, 'Expected (Baseline)');
    const optimistic = computeScenario(1.15, 1.15, 'Optimistic (+15%)');

    return {
      conservative,
      expected,
      optimistic,
      chartData: [conservative, expected, optimistic],
    };
  }, [roiInputs]);

  // Preset loader for AI ROI Simulator
  const applyRoiPreset = (presetName) => {
    if (presetName === 'support') {
      setRoiInputs({
        employees: 15,
        hoursPerWeek: 9,
        hourlyCost: 20,
        automationPotential: 50,
        initialCost: 9500,
        monthlyCost: 380,
        adoptionRate: 75,
        evaluationYears: 2,
      });
    } else if (presetName === 'invoice') {
      setRoiInputs({
        employees: 8,
        hoursPerWeek: 11,
        hourlyCost: 26,
        automationPotential: 65,
        initialCost: 14000,
        monthlyCost: 500,
        adoptionRate: 80,
        evaluationYears: 2,
      });
    } else if (presetName === 'small-team') {
      setRoiInputs({
        employees: 4,
        hoursPerWeek: 4,
        hourlyCost: 18,
        automationPotential: 35,
        initialCost: 15000,
        monthlyCost: 450,
        adoptionRate: 55,
        evaluationYears: 2,
      });
    }
  };

  // Filtered Featured Projects list
  const featuredProjectsList = [
    {
      id: 'ecom-sales',
      number: 'PROJECT 01',
      title: 'E-Commerce Sales and Profitability Analysis',
      badge: 'Proposed Case Study • Simulated Dataset',
      tools: ['Excel', 'SQL', 'Power BI'],
      objective:
        'Analyze simulated e-commerce sales data ($1.63M revenue, 10,000 rows) to understand revenue, profitability, product performance, and customer purchasing behavior.',
      questions: [
        'Which products and categories generate the highest revenue?',
        'Which categories have the lowest profit margins?',
        'How do monthly sales trends change across Q1–Q4?',
        'Which regions contribute the most to sales?',
        'What recommendations could improve profitability?',
      ],
      findingSummary:
        'Electronics drives 39.5% of gross revenue ($643.5K) but suffers margin compression (14.0%) during high-discount Q4 promotions, while Accessories delivers a 34.0% margin.',
      interactiveTab: 'ecom-dashboard',
    },
    {
      id: 'customer-churn',
      number: 'PROJECT 02',
      title: 'Customer Churn and Retention Analysis',
      badge: 'Proposed Case Study • Sample Benchmark Dataset',
      tools: ['Python', 'Pandas', 'SQL', 'Power BI'],
      objective:
        'Investigate why customers stop using a subscription service (n = 7,043 sample records) and identify patterns associated with customer churn.',
      questions: [
        'What percentage of customers churn in the sample dataset?',
        'Which customer segments have higher churn?',
        'How are tenure, contract type, and monthly charges associated with churn?',
        'Which retention initiatives should the business test via A/B experiments?',
      ],
      findingSummary:
        'Overall sample churn is 26.5%, heavily concentrated in Month-to-Month contracts (42.7% churn) and within the first 0–6 months of customer tenure (51.4% churn).',
      interactiveTab: 'churn-workbench',
    },
    {
      id: 'kpi-dashboard',
      number: 'PROJECT 03',
      title: 'Business Performance Dashboard',
      badge: 'Proposed Case Study • Simulated Star Schema',
      tools: ['Power BI', 'Tableau', 'SQL'],
      objective:
        'Develop an interactive executive dashboard to monitor business performance through standardized KPIs (Revenue, Profit, Margin, Growth, AOV, Regional Share).',
      questions: [
        'How do weighted KPI aggregations prevent margin reporting distortions?',
        'How can regional managers filter quarterly trends to isolate category anomalies?',
        'Which SKUs fall below target profitability thresholds?',
      ],
      findingSummary:
        'Provides interactive quarter and category cross-filtering with automated executive exception highlights so managers can monitor performance consistently.',
      interactiveTab: 'ecom-dashboard',
    },
    {
      id: 'ai-roi-simulator',
      number: 'PROJECT 04',
      title: 'AI Adoption Readiness and ROI Simulator for SMEs',
      badge: 'Interactive Decision Tool • Parametric Model',
      tools: ['Python', 'Excel', 'Business Process Analysis'],
      objective:
        'Design a business analysis tool that helps small and medium-sized enterprises evaluate whether an AI workflow solution is economically worthwhile.',
      questions: [
        'How many annual labor hours are realistically affected after accounting for adoption friction?',
        'What is the first-year net benefit after implementation CAPEX and recurring SaaS OPEX?',
        'How sensitive are ROI and payback period to conservative vs. optimistic adoption scenarios?',
      ],
      findingSummary:
        'Demonstrates that team adoption rate and task frequency govern payback period far more strongly than theoretical vendor automation claims.',
      interactiveTab: 'roi-simulator',
    },
  ];

  const visibleProjects = useMemo(() => {
    return featuredProjectsList.filter((p) => {
      const matchesTool =
        projectToolFilter === 'All' ||
        p.tools.some((t) =>
          t.toLowerCase().includes(projectToolFilter.toLowerCase())
        );
      const matchesSearch =
        projectSearch.trim() === '' ||
        p.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
        p.objective.toLowerCase().includes(projectSearch.toLowerCase()) ||
        p.tools.join(' ').toLowerCase().includes(projectSearch.toLowerCase());
      return matchesTool && matchesSearch;
    });
  }, [projectToolFilter, projectSearch]);

  // Contact form validation handler
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!contactForm.name.trim()) errors.name = 'Please enter your name.';
    if (
      !contactForm.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)
    ) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!contactForm.message.trim() || contactForm.message.trim().length < 15) {
      errors.message = 'Please enter a message of at least 15 characters.';
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setFormSubmitted(true);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard?.writeText('satresamiksha@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const currentCaseStudy =
    CASE_STUDIES_DATA[selectedCaseStudyId] || CASE_STUDIES_DATA['ecom-sales'];

  // Theme utility classes
  const bgMain = darkMode
    ? 'bg-slate-950 text-slate-100'
    : 'bg-slate-50 text-slate-900';
  const bgSurface = darkMode
    ? 'bg-slate-900 border-slate-800'
    : 'bg-white border-slate-200/90';
  const bgSubtle = darkMode
    ? 'bg-slate-900/60 border-slate-800'
    : 'bg-slate-100/80 border-slate-200';
  const textMuted = darkMode ? 'text-slate-400' : 'text-slate-600';
  const textHeading = darkMode ? 'text-white' : 'text-slate-900';

  return (
    <div
      className={`min-h-screen font-sans antialiased transition-colors duration-200 ${bgMain}`}
    >
      {/* ==========================================
          STICKY NAVIGATION BAR
      ========================================== */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${
          darkMode
            ? 'bg-slate-950/90 border-slate-800'
            : 'bg-white/90 border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-900 text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-sm group-hover:bg-blue-800 transition">
              SS
            </div>
            <div>
              <span
                className={`font-bold tracking-tight text-base block leading-none ${textHeading}`}
              >
                Samiksha Satre
              </span>
              <span className="text-xs text-blue-600 dark:text-blue-400 font-medium block mt-0.5">
                MBA Business Analytics • Engineering
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main Navigation"
          >
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'case-studies', label: 'Case Studies' },
              { id: 'experience', label: 'Experience' },
              { id: 'education', label: 'Education' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeNav === item.id
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 font-semibold'
                    : `${textMuted} hover:text-slate-900 dark:hover:text-white`
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions: Theme Toggle & Prominent Download Resume */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark or light theme"
              className={`p-2 rounded-lg border text-xs transition ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={triggerResumeDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-700 hover:bg-blue-800 text-white shadow-sm transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg border ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-amber-400'
                  : 'border-slate-200 bg-slate-50 text-slate-700'
              }`}
            >
              {darkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`p-2 rounded-lg border ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-slate-200'
                  : 'border-slate-200 bg-white text-slate-700'
              }`}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden border-b px-4 pt-2 pb-4 space-y-2 ${bgSurface}`}
          >
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'case-studies', label: 'Case Studies' },
                { id: 'experience', label: 'Experience' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-left text-xs font-medium ${
                    activeNav === item.id
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-semibold'
                      : textMuted
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={triggerResumeDownload}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-blue-700 text-white"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF / Print View)
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ==========================================
          DEDICATED FULL-SCREEN CASE STUDY VIEW (IF OPENED)
      ========================================== */}
      {showCaseStudyModal && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div
            className={`p-4 sm:p-6 rounded-2xl border shadow-sm mb-6 ${bgSurface}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowCaseStudyModal(false)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  ← Back to Full Portfolio
                </button>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  {currentCaseStudy.badge}
                </span>
              </div>

              {/* Switch between the 4 Case Studies */}
              <div className="flex flex-wrap items-center gap-1.5">
                {Object.values(CASE_STUDIES_DATA).map((cs) => (
                  <button
                    key={cs.id}
                    onClick={() => setSelectedCaseStudyId(cs.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                      selectedCaseStudyId === cs.id
                        ? 'bg-blue-700 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {cs.title.split(' ')[0]} {cs.title.split(' ')[1]}
                  </button>
                ))}
              </div>
            </div>

            <CaseStudyDetailedView
              study={currentCaseStudy}
              darkMode={darkMode}
              textHeading={textHeading}
              textMuted={textMuted}
              bgSubtle={bgSubtle}
              activeTocSection={activeTocSection}
              setActiveTocSection={setActiveTocSection}
              onJumpToSimulator={() => {
                setShowCaseStudyModal(false);
                setActiveInteractiveTab(
                  currentCaseStudy.id === 'customer-churn'
                    ? 'churn-workbench'
                    : currentCaseStudy.id === 'ai-roi-simulator'
                    ? 'roi-simulator'
                    : 'ecom-dashboard'
                );
                setTimeout(() => {
                  document
                    .getElementById('interactive-analytics-workbench')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            />
          </div>
        </div>
      )}

      {/* ==========================================
          MAIN PORTFOLIO SECTIONS
      ========================================== */}
      {!showCaseStudyModal && (
        <main>
          {/* ------------------------------------------
              SECTION 3: HERO SECTION
          ------------------------------------------ */}
          <section
            id="home"
            className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-200/80 dark:border-slate-800/80"
          >
            {/* Subtle analytical grid background pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.06]"
              style={{
                backgroundImage:
                  'radial-gradient(#1e3a8a 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Column: Core Messaging & CTAs */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    Target Roles: Business Analyst • Data Analyst • BI Analyst •
                    Product Analyst
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                      Samiksha Satre — Portfolio & Case Study Workbench
                    </p>
                    <h1
                      className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${textHeading}`}
                    >
                      Engineering Mindset.{' '}
                      <span className="text-blue-700 dark:text-blue-400">
                        Business Insights.
                      </span>{' '}
                      Data-Driven Decisions.
                    </h1>
                  </div>

                  <p
                    className={`text-base sm:text-lg leading-relaxed max-w-2xl ${textMuted}`}
                  >
                    MBA in Business Analytics student combining an engineering
                    background, research experience, and analytical thinking to
                    solve business problems and transform data into actionable
                    insights.
                  </p>

                  {/* Three Required Hero Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => scrollToSection('projects')}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white shadow-sm transition"
                    >
                      Explore My Projects
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => scrollToSection('case-studies')}
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border transition ${
                        darkMode
                          ? 'border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-100'
                          : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-800'
                      }`}
                    >
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      View Case Studies
                    </button>

                    <button
                      onClick={triggerResumeDownload}
                      className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border transition ${
                        darkMode
                          ? 'border-blue-800/70 bg-blue-950/40 hover:bg-blue-900/50 text-blue-300'
                          : 'border-blue-200 bg-blue-50/70 hover:bg-blue-100/80 text-blue-800'
                      }`}
                    >
                      <Download className="w-4 h-4" />
                      Download Resume
                    </button>
                  </div>

                  {/* Quick Links & Transparency Note */}
                  <div className="pt-3 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                    <a
                      href="https://www.linkedin.com/in/samiksha-satre-94636729a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      <Linkedin className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                      LinkedIn Profile
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://github.com/samikshasatre"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      <Github className="w-4 h-4" />
                      GitHub (@samikshasatre)
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="mailto:satresamiksha@gmail.com"
                      className="inline-flex items-center gap-1.5 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      <Mail className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                      satresamiksha@gmail.com
                    </a>
                  </div>
                </div>

                {/* Right Column: Executive Profile Card + Analytics Mini-Widgets */}
                <div className="lg:col-span-5">
                  <div
                    className={`rounded-2xl border p-6 shadow-sm space-y-5 ${bgSurface}`}
                  >
                    <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 block">
                          Candidate Profile Snapshot
                        </span>
                        <h2
                          className={`text-xl font-bold mt-0.5 ${textHeading}`}
                        >
                          Samiksha Satre
                        </h2>
                        <p className={`text-xs mt-0.5 ${textMuted}`}>
                          Pune / Solapur, Maharashtra, India
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        Open to BA / DA Roles
                      </span>
                    </div>

                    {/* Four Required Profile Credentials */}
                    <div className="space-y-3">
                      <div
                        className={`p-3 rounded-xl border flex items-start gap-3 ${bgSubtle}`}
                      >
                        <GraduationCap className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
                        <div>
                          <div className={`text-xs font-bold ${textHeading}`}>
                            MBA in Business Analytics — SPPU
                          </div>
                          <div className={`text-[11px] ${textMuted}`}>
                            Savitribai Phule Pune University (Ongoing • Business
                            Strategy & Analytics)
                          </div>
                        </div>
                      </div>

                      <div
                        className={`p-3 rounded-xl border flex items-start gap-3 ${bgSubtle}`}
                      >
                        <Cpu className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
                        <div>
                          <div className={`text-xs font-bold ${textHeading}`}>
                            B.Tech in Electronics and Telecommunication
                            Engineering
                          </div>
                          <div className={`text-[11px] ${textMuted}`}>
                            N.K. Orchid College of Engineering (2023 – 2026) &
                            Diploma in CSE
                          </div>
                        </div>
                      </div>

                      <div
                        className={`p-3 rounded-xl border flex items-start gap-3 ${bgSubtle}`}
                      >
                        <Activity className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
                        <div>
                          <div className={`text-xs font-bold ${textHeading}`}>
                            International Research Experience — ISAE-Supméca,
                            France
                          </div>
                          <div className={`text-[11px] ${textMuted}`}>
                            Industry 5.0 Digital Twin • Funded by Fondation
                            Dassault Systèmes / GIFAS
                          </div>
                        </div>
                      </div>

                      <div
                        className={`p-3 rounded-xl border flex items-start gap-3 ${bgSubtle}`}
                      >
                        <Award className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
                        <div>
                          <div className={`text-xs font-bold ${textHeading}`}>
                            AI and Data Science Competition Experience
                          </div>
                          <div className={`text-[11px] ${textMuted}`}>
                            AI Elite Finalist — Bharat AI Quest 2025 (IIT Bombay
                            & NPCI) • 4x Tech Paper/Project Winner
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Subtle Analytics Dashboard Visual Elements (Real Resume Validation Metrics + Portfolio Scope) */}
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-2.5">
                        <span>
                          VERIFIED R&D VALIDATION & PORTFOLIO BENCHMARKS
                        </span>
                        <span className="text-blue-600 dark:text-blue-400">
                          Evidence-Based
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2.5">
                        <div className={`p-2.5 rounded-xl border ${bgSubtle}`}>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
                            Digital Twin Voltage
                          </span>
                          <span
                            className={`text-sm font-extrabold ${textHeading}`}
                          >
                            R² = 0.999
                          </span>
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block">
                            TDMS Sensor Fit
                          </span>
                        </div>
                        <div className={`p-2.5 rounded-xl border ${bgSubtle}`}>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
                            Thermal Correlation
                          </span>
                          <span
                            className={`text-sm font-extrabold ${textHeading}`}
                          >
                            99.2%
                          </span>
                          <span className="text-[10px] text-blue-600 dark:text-blue-400 block">
                            ISAE-Supméca R&D
                          </span>
                        </div>
                        <div className={`p-2.5 rounded-xl border ${bgSubtle}`}>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
                            BA Case Studies
                          </span>
                          <span
                            className={`text-sm font-extrabold ${textHeading}`}
                          >
                            4 Interactive
                          </span>
                          <span className="text-[10px] text-amber-600 dark:text-amber-400 block">
                            Simulated Data
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------
              SECTION 4: ABOUT ME & CAREER TIMELINE
          ------------------------------------------ */}
          <section
            id="about"
            className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                  01 • About Me & Career Transition
                </span>
                <h2
                  className={`text-2xl sm:text-3xl font-bold mt-1 ${textHeading}`}
                >
                  Bridging Complex Engineering Systems and Business Strategy
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Narrative Card */}
                <div
                  className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border shadow-sm space-y-4 leading-relaxed text-sm sm:text-base ${bgSurface}`}
                >
                  <p className={textMuted}>
                    I began my journey in{' '}
                    <strong className={textHeading}>
                      Electronics and Telecommunication Engineering
                    </strong>
                    , where I developed an interest in technology, systems, and
                    problem-solving. During my international research internship
                    at{' '}
                    <strong className={textHeading}>
                      ISAE-Supméca in France
                    </strong>
                    , I worked on an Industry 5.0 digital twin project involving
                    simulation, system validation, and Python-based data
                    analysis.
                  </p>
                  <p className={textMuted}>
                    My engineering background taught me to approach problems
                    systematically, investigate data, and understand how complex
                    systems behave.
                  </p>
                  <p className={textMuted}>
                    I am now pursuing an{' '}
                    <strong className={textHeading}>
                      MBA in Business Analytics
                    </strong>{' '}
                    at Savitribai Phule Pune University (SPPU) to strengthen my
                    understanding of business strategy, managerial
                    decision-making, statistics, and data-driven
                    problem-solving.
                  </p>
                  <p className={`font-medium pt-1 ${textHeading}`}>
                    My goal is to bridge the gap between technology and business
                    by translating data into insights that help organizations
                    make better decisions.
                  </p>

                  {/* Analytical Value Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className={`p-3 rounded-xl border ${bgSubtle}`}>
                      <div className={`text-xs font-bold ${textHeading}`}>
                        Structured Framing
                      </div>
                      <p className={`text-[11px] mt-1 ${textMuted}`}>
                        Decomposing ambiguous system or business bottlenecks
                        into testable hypotheses.
                      </p>
                    </div>
                    <div className={`p-3 rounded-xl border ${bgSubtle}`}>
                      <div className={`text-xs font-bold ${textHeading}`}>
                        Quantitative Rigor
                      </div>
                      <p className={`text-[11px] mt-1 ${textMuted}`}>
                        Validating assumptions against empirical data rather
                        than intuition.
                      </p>
                    </div>
                    <div className={`p-3 rounded-xl border ${bgSubtle}`}>
                      <div className={`text-xs font-bold ${textHeading}`}>
                        Decision Clarity
                      </div>
                      <p className={`text-[11px] mt-1 ${textMuted}`}>
                        Communicating KPI trade-offs clearly to both engineers
                        and business stakeholders.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual Transition Timeline */}
                <div
                  className={`lg:col-span-5 p-6 sm:p-7 rounded-2xl border shadow-sm ${bgSurface}`}
                >
                  <h3
                    className={`text-sm font-bold uppercase tracking-wider mb-5 ${textHeading}`}
                  >
                    Career Progression Pathway
                  </h3>

                  <div className="relative pl-6 border-l-2 border-blue-600 dark:border-blue-500 space-y-6">
                    {[
                      {
                        step: 'STAGE 01',
                        title: 'Engineering Foundation',
                        subtitle: 'Diploma in CSE & B.Tech in E&TC Engineering',
                        desc: 'Built strong foundations in C/C++, Python, embedded telemetry, sensor data acquisition, and structured system debugging.',
                      },
                      {
                        step: 'STAGE 02',
                        title: 'International Research (Paris, France)',
                        subtitle: 'ISAE-Supméca • Industry 5.0 Digital Twin',
                        desc: 'Applied Python (Pandas, SciPy) to validate multiphysics simulation outputs against real industrial TDMS sensor measurements.',
                      },
                      {
                        step: 'STAGE 03 (CURRENT)',
                        title: 'MBA in Business Analytics',
                        subtitle: 'Savitribai Phule Pune University (SPPU)',
                        desc: 'Developing capabilities in business strategy, managerial economics, SQL, BI dashboarding (Power BI/Tableau), and KPI analysis.',
                      },
                      {
                        step: 'STAGE 04 (TARGET)',
                        title: 'Business Analytics Career',
                        subtitle:
                          'BA • Data Analyst • BI Analyst • Product Analyst',
                        desc: 'Partnering with business and product teams to turn operational and customer data into measurable strategic decisions.',
                      },
                    ].map((node, idx) => (
                      <div key={idx} className="relative">
                        <div
                          className={`w-3.5 h-3.5 rounded-full border-2 absolute -left-[31px] top-1 ${
                            idx === 2
                              ? 'bg-blue-600 border-blue-200 ring-4 ring-blue-100 dark:ring-blue-950'
                              : 'bg-white dark:bg-slate-900 border-blue-600'
                          }`}
                        />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                          {node.step}
                        </span>
                        <h4 className={`text-sm font-bold ${textHeading}`}>
                          {node.title}
                        </h4>
                        <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {node.subtitle}
                        </div>
                        <p
                          className={`text-xs mt-1 leading-relaxed ${textMuted}`}
                        >
                          {node.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------
              SECTION 5: SKILLS SECTION (HONEST MATURITY TAGS)
          ------------------------------------------ */}
          <section
            id="skills"
            className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                    02 • Capabilities & Toolset
                  </span>
                  <h2
                    className={`text-2xl sm:text-3xl font-bold mt-1 ${textHeading}`}
                  >
                    Skills Organized by Discipline & Honest Proficiency Stage
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-medium">
                    ● Applied in R&D / Projects
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-medium">
                    ◐ Developing
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-medium">
                    ◌ Learning (MBA Track)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Category A: Data and Programming */}
                <div
                  className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-between ${bgSurface}`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-4">
                      <Database className="w-5 h-5" />
                    </div>
                    <h3 className={`text-base font-bold mb-1 ${textHeading}`}>
                      A. Data & Programming
                    </h3>
                    <p className={`text-xs mb-4 ${textMuted}`}>
                      Data manipulation, scientific computing, and relational
                      querying.
                    </p>
                    <ul className="space-y-2.5">
                      {[
                        {
                          name: 'Python',
                          status: 'Applied in R&D',
                          type: 'applied',
                        },
                        {
                          name: 'Pandas & SciPy',
                          status: 'Applied in R&D',
                          type: 'applied',
                        },
                        { name: 'NumPy', status: 'Applied', type: 'applied' },
                        {
                          name: 'SQL',
                          status: 'Developing',
                          type: 'developing',
                        },
                        {
                          name: 'Data Cleaning & Preprocessing',
                          status: 'Developing',
                          type: 'developing',
                        },
                        {
                          name: 'Exploratory Data Analysis (EDA)',
                          status: 'Developing',
                          type: 'developing',
                        },
                      ].map((skill, i) => (
                        <SkillListItem
                          key={i}
                          skill={skill}
                          textHeading={textHeading}
                        />
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Category B: Business Analytics */}
                <div
                  className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-between ${bgSurface}`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-4">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className={`text-base font-bold mb-1 ${textHeading}`}>
                      B. Business Analytics
                    </h3>
                    <p className={`text-xs mb-4 ${textMuted}`}>
                      Structured problem framing, KPI design, and decision
                      support.
                    </p>
                    <ul className="space-y-2.5">
                      {[
                        {
                          name: 'Business Problem-Solving',
                          status: 'Core Focus',
                          type: 'applied',
                        },
                        {
                          name: 'Analytical Thinking',
                          status: 'Core Focus',
                          type: 'applied',
                        },
                        {
                          name: 'Business Research',
                          status: 'Core Focus',
                          type: 'applied',
                        },
                        {
                          name: 'Data-Driven Decision-Making',
                          status: 'Core Focus',
                          type: 'applied',
                        },
                        {
                          name: 'KPI Analysis',
                          status: 'Developing',
                          type: 'developing',
                        },
                        {
                          name: 'Business Process Analysis',
                          status: 'Developing',
                          type: 'developing',
                        },
                      ].map((skill, i) => (
                        <SkillListItem
                          key={i}
                          skill={skill}
                          textHeading={textHeading}
                        />
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Category C: Visualization and Reporting */}
                <div
                  className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-between ${bgSurface}`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-4">
                      <BarChart2 className="w-5 h-5" />
                    </div>
                    <h3 className={`text-base font-bold mb-1 ${textHeading}`}>
                      C. Visualization & BI
                    </h3>
                    <p className={`text-xs mb-4 ${textMuted}`}>
                      Dashboard prototyping, executive reporting, and visual
                      storytelling.
                    </p>
                    <ul className="space-y-2.5">
                      {[
                        {
                          name: 'Data Storytelling',
                          status: 'Developing',
                          type: 'developing',
                        },
                        {
                          name: 'Power BI',
                          status: 'Learning',
                          type: 'learning',
                        },
                        {
                          name: 'Tableau',
                          status: 'Learning',
                          type: 'learning',
                        },
                        {
                          name: 'Microsoft Excel',
                          status: 'Learning',
                          type: 'learning',
                        },
                      ].map((skill, i) => (
                        <SkillListItem
                          key={i}
                          skill={skill}
                          textHeading={textHeading}
                        />
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`mt-4 p-3 rounded-xl border text-[11px] ${bgSubtle} ${textMuted}`}
                  >
                    Also certified via LinkedIn Learning in{' '}
                    <strong>Process Mining for RPA</strong> and{' '}
                    <strong>RPA, AI & Cognitive Tech for Leaders</strong>.
                  </div>
                </div>

                {/* Category D: Technology and Engineering */}
                <div
                  className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-between ${bgSurface}`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-4">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className={`text-base font-bold mb-1 ${textHeading}`}>
                      D. Tech & Engineering
                    </h3>
                    <p className={`text-xs mb-4 ${textMuted}`}>
                      Verified engineering, multiphysics simulation, and IoT
                      systems.
                    </p>
                    <ul className="space-y-2.5">
                      {[
                        {
                          name: 'C / C++ & Embedded Systems',
                          status: 'Verified',
                          type: 'applied',
                        },
                        {
                          name: 'IoT (ESP8266, MQTT, Blynk)',
                          status: 'Verified',
                          type: 'applied',
                        },
                        {
                          name: 'Industrial Automation',
                          status: 'Verified',
                          type: 'applied',
                        },
                        {
                          name: 'Digital Twins (FMI 2.0)',
                          status: 'Verified R&D',
                          type: 'applied',
                        },
                        {
                          name: 'Modelica & Dymola',
                          status: 'Verified R&D',
                          type: 'applied',
                        },
                        {
                          name: 'Git & Version Control',
                          status: 'Verified',
                          type: 'applied',
                        },
                      ].map((skill, i) => (
                        <SkillListItem
                          key={i}
                          skill={skill}
                          textHeading={textHeading}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------
              SECTION 6: FEATURED BUSINESS ANALYTICS PROJECTS
              + LIVE INTERACTIVE ANALYTICS WORKBENCH
          ------------------------------------------ */}
          <section
            id="projects"
            className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header & Transparency Banner */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                    03 • Featured Business Analytics Portfolio Case Studies
                  </span>
                  <h2
                    className={`text-2xl sm:text-3xl font-bold mt-1 ${textHeading}`}
                  >
                    Proposed Analytical Case Studies & Interactive Simulators
                  </h2>
                  <p className={`text-sm mt-1 max-w-3xl ${textMuted}`}>
                    Each project below is structured around concrete business
                    questions and evaluated on clearly labeled simulated or
                    sample datasets. Click any project to inspect its 13-section
                    case study or interact with the live data models below.
                  </p>
                </div>

                {/* Search & Tool Filter Controls */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={projectSearch}
                      onChange={(e) => setProjectSearch(e.target.value)}
                      placeholder="Search projects or tools..."
                      aria-label="Search projects"
                      className={`pl-8 pr-3 py-1.5 rounded-lg border text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        darkMode
                          ? 'bg-slate-900 border-slate-700 text-slate-100'
                          : 'bg-white border-slate-300 text-slate-800'
                      }`}
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    {['All', 'SQL', 'Python', 'Power BI', 'Excel'].map(
                      (tool) => (
                        <button
                          key={tool}
                          onClick={() => setProjectToolFilter(tool)}
                          className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${
                            projectToolFilter === tool
                              ? 'bg-blue-700 text-white'
                              : `${bgSurface} border ${textMuted} hover:text-slate-900`
                          }`}
                        >
                          {tool}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Project Cards Grid (4 Featured BA Projects) */}
              {visibleProjects.length === 0 ? (
                <div
                  className={`p-8 rounded-2xl border text-center ${bgSurface}`}
                >
                  <p className={`text-sm font-medium ${textHeading}`}>
                    No projects match "{projectSearch}" with filter "
                    {projectToolFilter}".
                  </p>
                  <button
                    onClick={() => {
                      setProjectSearch('');
                      setProjectToolFilter('All');
                    }}
                    className="mt-3 px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-700 text-white"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {visibleProjects.map((proj) => (
                    <div
                      key={proj.id}
                      className={`rounded-2xl border p-6 shadow-sm flex flex-col justify-between transition hover:shadow-md ${bgSurface}`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className="text-xs font-bold tracking-wider text-blue-700 dark:text-blue-400">
                            {proj.number}
                          </span>
                          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                            {proj.badge}
                          </span>
                        </div>

                        <div>
                          <h3 className={`text-lg font-bold ${textHeading}`}>
                            {proj.title}
                          </h3>
                          <p
                            className={`text-xs mt-1.5 leading-relaxed ${textMuted}`}
                          >
                            {proj.objective}
                          </p>
                        </div>

                        {/* Suggested Tools */}
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-[11px] font-semibold text-slate-400 mr-1">
                            Suggested Tools:
                          </span>
                          {proj.tools.map((t, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Key Business Questions */}
                        <div className={`p-3.5 rounded-xl border ${bgSubtle}`}>
                          <div
                            className={`text-xs font-bold mb-1.5 ${textHeading}`}
                          >
                            Key Business Questions Addressed:
                          </div>
                          <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 list-disc list-inside">
                            {proj.questions.map((q, idx) => (
                              <li key={idx}>{q}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Derived Finding from Simulated Dataset */}
                        <div className="text-xs border-l-2 border-blue-600 pl-3 py-0.5">
                          <span className={`font-bold ${textHeading}`}>
                            Dataset Finding Preview:{' '}
                          </span>
                          <span className={textMuted}>
                            {proj.findingSummary}
                          </span>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                        <button
                          onClick={() => {
                            setActiveInteractiveTab(proj.interactiveTab);
                            document
                              .getElementById('interactive-analytics-workbench')
                              ?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 dark:text-blue-400 hover:underline"
                        >
                          <Sliders className="w-3.5 h-3.5" />
                          Launch Live Interactive Model
                        </button>

                        <button
                          onClick={() => openDetailedCaseStudy(proj.id)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-blue-700 dark:hover:bg-blue-600 text-white transition"
                        >
                          Read Full 13-Section Case Study
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ==========================================
                  INTERACTIVE ANALYTICS WORKBENCH
                  (LIVE IMPLEMENTATION OF PROJECTS 1, 2, 3, AND 4)
              ========================================== */}
              <div
                id="interactive-analytics-workbench"
                className={`rounded-2xl border shadow-sm overflow-hidden ${bgSurface}`}
              >
                {/* Workbench Top Bar & Tab Switcher */}
                <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/90 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      Interactive Business Analytics Workbench (Simulated Data)
                    </div>
                    <h3 className={`text-lg font-bold mt-0.5 ${textHeading}`}>
                      Explore Live Calculations, KPI Filters & Scenario
                      Simulations
                    </h3>
                  </div>

                  {/* Three Interactive Module Tabs */}
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      onClick={() => setActiveInteractiveTab('ecom-dashboard')}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
                        activeInteractiveTab === 'ecom-dashboard'
                          ? 'bg-blue-700 text-white shadow-sm'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      Projects 1 & 3: E-Commerce & Executive KPI Dashboard
                    </button>
                    <button
                      onClick={() => setActiveInteractiveTab('churn-workbench')}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
                        activeInteractiveTab === 'churn-workbench'
                          ? 'bg-blue-700 text-white shadow-sm'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      Project 2: Customer Churn & Retention Analysis
                    </button>
                    <button
                      onClick={() => setActiveInteractiveTab('roi-simulator')}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
                        activeInteractiveTab === 'roi-simulator'
                          ? 'bg-blue-700 text-white shadow-sm'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      Project 4: SME AI Adoption & ROI Simulator
                    </button>
                  </div>
                </div>

                {/* ------------------------------------------
                    TAB 1: PROJECTS 1 & 3 — E-COMMERCE & KPI DASHBOARD
                ------------------------------------------ */}
                {activeInteractiveTab === 'ecom-dashboard' && (
                  <div className="p-5 sm:p-7 space-y-7">
                    {/* Filter Bar & Dataset Disclaimer */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-1.5 text-xs font-semibold">
                          <Filter className="w-3.5 h-3.5 text-blue-600" />
                          <span>Date Filter (Quarter):</span>
                        </div>
                        {['All', 'Q1', 'Q2', 'Q3', 'Q4'].map((q) => (
                          <button
                            key={q}
                            onClick={() => setSelectedQuarter(q)}
                            className={`px-2.5 py-1 rounded-md text-xs font-semibold transition ${
                              selectedQuarter === q
                                ? 'bg-slate-900 text-white dark:bg-blue-600'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                            }`}
                          >
                            {q === 'All' ? 'Full Year (FY25)' : q}
                          </button>
                        ))}

                        <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">
                          |
                        </span>

                        <div className="flex items-center gap-1.5 text-xs font-semibold">
                          <span>Category Filter:</span>
                        </div>
                        <select
                          aria-label="Select product category filter"
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className={`px-3 py-1 rounded-md text-xs font-semibold border ${
                            darkMode
                              ? 'bg-slate-800 border-slate-700 text-white'
                              : 'bg-white border-slate-300 text-slate-800'
                          }`}
                        >
                          <option value="All">All Categories</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Home & Office">Home & Office</option>
                          <option value="Accessories">Accessories</option>
                          <option value="Apparel">Apparel</option>
                        </select>
                      </div>

                      <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-blue-50 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                        Source: Simulated E-Commerce Dataset (10,000 Sample
                        Orders)
                      </span>
                    </div>

                    {/* 5 KPI Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                      <KpiMetricCard
                        label="Simulated Revenue"
                        value={`$${filteredDashboardData.totalRevenue.toLocaleString()}`}
                        sub={`Filter: ${selectedQuarter} • ${selectedCategory}`}
                        accent="text-blue-700 dark:text-blue-400"
                        bgSubtle={bgSubtle}
                        textHeading={textHeading}
                      />
                      <KpiMetricCard
                        label="Simulated Net Profit"
                        value={`$${filteredDashboardData.totalProfit.toLocaleString()}`}
                        sub="After COGS & Shipping"
                        accent="text-emerald-700 dark:text-emerald-400"
                        bgSubtle={bgSubtle}
                        textHeading={textHeading}
                      />
                      <KpiMetricCard
                        label="Net Profit Margin"
                        value={`${filteredDashboardData.weightedMargin}%`}
                        sub="Weighted Profit / Revenue"
                        accent="text-indigo-700 dark:text-indigo-400"
                        bgSubtle={bgSubtle}
                        textHeading={textHeading}
                      />
                      <KpiMetricCard
                        label="Period Sales Growth"
                        value={`${
                          Number(filteredDashboardData.periodGrowth) >= 0
                            ? '+'
                            : ''
                        }${filteredDashboardData.periodGrowth}%`}
                        sub="Start vs. End of Selection"
                        accent="text-blue-700 dark:text-blue-400"
                        bgSubtle={bgSubtle}
                        textHeading={textHeading}
                      />
                      <KpiMetricCard
                        label="Avg Order Value (AOV)"
                        value={`$${filteredDashboardData.aov}`}
                        sub={`${filteredDashboardData.totalOrders.toLocaleString()} Simulated Orders`}
                        accent="text-slate-700 dark:text-slate-300"
                        bgSubtle={bgSubtle}
                        textHeading={textHeading}
                      />
                    </div>

                    {/* Charts Row: Monthly Revenue & Profit Trend + Category Profitability */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      {/* Monthly Revenue & Profit Trend Chart */}
                      <div
                        className={`lg:col-span-7 p-4 sm:p-5 rounded-xl border ${bgSubtle}`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className={`text-sm font-bold ${textHeading}`}>
                              Monthly Revenue & Net Profit Trend (
                              {selectedQuarter})
                            </h4>
                            <p className={`text-xs ${textMuted}`}>
                              Notice November revenue spike ($196.5K) paired
                              with margin compression due to promotional
                              discounting.
                            </p>
                          </div>
                        </div>
                        <div className="h-64 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart
                              data={filteredDashboardData.chartRows}
                            >
                              <CartesianGrid
                                strokeDasharray="3 3"
                                stroke={darkMode ? '#334155' : '#cbd5e1'}
                              />
                              <XAxis
                                dataKey="month"
                                tick={{
                                  fontSize: 11,
                                  fill: darkMode ? '#94a3b8' : '#475569',
                                }}
                              />
                              <YAxis
                                tick={{
                                  fontSize: 11,
                                  fill: darkMode ? '#94a3b8' : '#475569',
                                }}
                              />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: darkMode
                                    ? '#0f172a'
                                    : '#ffffff',
                                  borderColor: darkMode ? '#334155' : '#cbd5e1',
                                  fontSize: '12px',
                                }}
                              />
                              <Legend wrapperStyle={{ fontSize: '12px' }} />
                              <Bar
                                dataKey="Revenue"
                                fill="#1d4ed8"
                                radius={[4, 4, 0, 0]}
                                name="Revenue ($)"
                              />
                              <Line
                                type="monotone"
                                dataKey="Profit"
                                stroke="#10b981"
                                strokeWidth={2.5}
                                name="Net Profit ($)"
                              />
                            </ComposedChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      {/* Category Margin Comparison */}
                      <div
                        className={`lg:col-span-5 p-4 sm:p-5 rounded-xl border ${bgSubtle}`}
                      >
                        <h4 className={`text-sm font-bold ${textHeading}`}>
                          Category-Level Profitability & Margin (%)
                        </h4>
                        <p className={`text-xs mb-3 ${textMuted}`}>
                          Accessories (34% margin) and Home & Office (24%)
                          outperform Apparel (9%).
                        </p>
                        <div className="h-64 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                              data={ECOM_CATEGORY_MARGINS}
                              layout="vertical"
                              margin={{ left: 20 }}
                            >
                              <CartesianGrid
                                strokeDasharray="3 3"
                                stroke={darkMode ? '#334155' : '#cbd5e1'}
                              />
                              <XAxis
                                type="number"
                                unit="%"
                                tick={{
                                  fontSize: 11,
                                  fill: darkMode ? '#94a3b8' : '#475569',
                                }}
                              />
                              <YAxis
                                dataKey="category"
                                type="category"
                                width={95}
                                tick={{
                                  fontSize: 11,
                                  fill: darkMode ? '#94a3b8' : '#475569',
                                }}
                              />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: darkMode
                                    ? '#0f172a'
                                    : '#ffffff',
                                  borderColor: darkMode ? '#334155' : '#cbd5e1',
                                  fontSize: '12px',
                                }}
                              />
                              <Bar
                                dataKey="margin"
                                name="Profit Margin (%)"
                                radius={[0, 4, 4, 0]}
                              >
                                {ECOM_CATEGORY_MARGINS.map((entry, idx) => (
                                  <Cell
                                    key={idx}
                                    fill={
                                      entry.margin >= 24
                                        ? '#059669'
                                        : entry.margin >= 14
                                        ? '#2563eb'
                                        : '#d97706'
                                    }
                                  />
                                ))}
                              </Bar>
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>

                    {/* Regional Comparison + Interactive Product Performance Table */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      {/* Regional Sales Comparison */}
                      <div
                        className={`lg:col-span-5 p-4 sm:p-5 rounded-xl border ${bgSubtle}`}
                      >
                        <h4 className={`text-sm font-bold mb-1 ${textHeading}`}>
                          Regional Sales Comparison
                        </h4>
                        <p className={`text-xs mb-3 ${textMuted}`}>
                          West (35.7%) and South (27.1%) contribute 62.8% of
                          simulated revenue.
                        </p>
                        <div className="space-y-3">
                          {ECOM_REGIONAL_DATA.map((reg, i) => (
                            <div key={i} className="space-y-1">
                              <div className="flex justify-between text-xs">
                                <span
                                  className={`font-semibold ${textHeading}`}
                                >
                                  {reg.region}
                                </span>
                                <span className={textMuted}>
                                  ${reg.revenue.toLocaleString()} ({reg.share}%)
                                  • Profit: ${reg.profit.toLocaleString()}
                                </span>
                              </div>
                              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                                <div
                                  className="h-full bg-blue-600 rounded-full"
                                  style={{ width: `${reg.share}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs">
                          <strong className={textHeading}>
                            How Managers Use This Dashboard:
                          </strong>
                          <p className={`mt-1 ${textMuted}`}>
                            Weekly operations reviews filter by Quarter and
                            Category to spot margin erosion early, audit SKU
                            return rates, and rebalance regional safety stock.
                          </p>
                        </div>
                      </div>

                      {/* Product Performance Table */}
                      <div
                        className={`lg:col-span-7 p-4 sm:p-5 rounded-xl border overflow-x-auto ${bgSubtle}`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className={`text-sm font-bold ${textHeading}`}>
                              Interactive SKU Performance Table
                            </h4>
                            <p className={`text-xs ${textMuted}`}>
                              Top simulated products ranked by revenue and
                              return risk.
                            </p>
                          </div>
                          <button
                            onClick={() => openDetailedCaseStudy('ecom-sales')}
                            className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:underline"
                          >
                            View Full Methodology →
                          </button>
                        </div>
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="border-b border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                              <th className="py-2 pr-2">SKU / Product</th>
                              <th className="py-2 px-2">Category</th>
                              <th className="py-2 px-2 text-right">Revenue</th>
                              <th className="py-2 px-2 text-right">Margin %</th>
                              <th className="py-2 pl-2 text-right">
                                Return Rate
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            {ECOM_PRODUCT_TABLE.filter(
                              (row) =>
                                selectedCategory === 'All' ||
                                row.category === selectedCategory
                            ).map((sku) => (
                              <tr key={sku.sku}>
                                <td className="py-2.5 pr-2">
                                  <div
                                    className={`font-semibold ${textHeading}`}
                                  >
                                    {sku.name}
                                  </div>
                                  <div className="text-[10px] text-slate-400">
                                    {sku.sku} • {sku.units} units
                                  </div>
                                </td>
                                <td className="py-2.5 px-2">{sku.category}</td>
                                <td className="py-2.5 px-2 text-right font-medium">
                                  ${sku.revenue.toLocaleString()}
                                </td>
                                <td className="py-2.5 px-2 text-right">
                                  <span
                                    className={`px-2 py-0.5 rounded font-semibold ${
                                      sku.margin >= 20
                                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300'
                                        : sku.margin < 10
                                        ? 'bg-red-50 text-red-700 dark:bg-red-950/70 dark:text-red-300'
                                        : 'bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300'
                                    }`}
                                  >
                                    {sku.margin}%
                                  </span>
                                </td>
                                <td className="py-2.5 pl-2 text-right font-medium">
                                  {sku.returnRate}%
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* ------------------------------------------
                    TAB 2: PROJECT 2 — CUSTOMER CHURN & RETENTION WORKBENCH
                ------------------------------------------ */}
                {activeInteractiveTab === 'churn-workbench' && (
                  <div className="p-5 sm:p-7 space-y-7">
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                      <div>
                        <h4 className={`text-base font-bold ${textHeading}`}>
                          Customer Churn & Retention Analysis (Sample Telecom
                          Dataset: n = 7,043)
                        </h4>
                        <p className={`text-xs ${textMuted}`}>
                          Investigating contract structure, customer tenure, and
                          billing patterns associated with subscription
                          cancellation.
                        </p>
                      </div>
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                        Observational Sample Data • Recommendations Require A/B
                        Testing
                      </span>
                    </div>

                    {/* Churn KPI Row */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <KpiMetricCard
                        label="Overall Sample Churn Rate"
                        value="26.5%"
                        sub="1,869 of 7,043 Customers"
                        accent="text-amber-700 dark:text-amber-400"
                        bgSubtle={bgSubtle}
                        textHeading={textHeading}
                      />
                      <KpiMetricCard
                        label="Month-to-Month Churn"
                        value="42.7%"
                        sub="vs. 2.8% on Two-Year Contracts"
                        accent="text-red-700 dark:text-red-400"
                        bgSubtle={bgSubtle}
                        textHeading={textHeading}
                      />
                      <KpiMetricCard
                        label="0–6 Month Early Attrition"
                        value="51.4%"
                        sub="Critical Onboarding Window"
                        accent="text-blue-700 dark:text-blue-400"
                        bgSubtle={bgSubtle}
                        textHeading={textHeading}
                      />
                      <KpiMetricCard
                        label="Churned Avg Monthly Bill"
                        value="$73.40"
                        sub="vs. $61.20 Retained Avg"
                        accent="text-slate-700 dark:text-slate-300"
                        bgSubtle={bgSubtle}
                        textHeading={textHeading}
                      />
                    </div>

                    {/* Churn Charts: Contract Type vs Tenure Cohort */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div
                        className={`p-4 sm:p-5 rounded-xl border ${bgSubtle}`}
                      >
                        <h5 className={`text-sm font-bold mb-1 ${textHeading}`}>
                          Churn Rate by Contract Type (%)
                        </h5>
                        <p className={`text-xs mb-4 ${textMuted}`}>
                          Month-to-Month accounts account for 88.5% of all churn
                          events in the sample dataset.
                        </p>
                        <div className="h-60 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={CHURN_CONTRACT_DATA}>
                              <CartesianGrid
                                strokeDasharray="3 3"
                                stroke={darkMode ? '#334155' : '#cbd5e1'}
                              />
                              <XAxis
                                dataKey="contract"
                                tick={{
                                  fontSize: 11,
                                  fill: darkMode ? '#94a3b8' : '#475569',
                                }}
                              />
                              <YAxis
                                unit="%"
                                tick={{
                                  fontSize: 11,
                                  fill: darkMode ? '#94a3b8' : '#475569',
                                }}
                              />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: darkMode
                                    ? '#0f172a'
                                    : '#ffffff',
                                  borderColor: darkMode ? '#334155' : '#cbd5e1',
                                  fontSize: '12px',
                                }}
                              />
                              <Bar
                                dataKey="churnRate"
                                name="Churn Rate (%)"
                                fill="#dc2626"
                                radius={[4, 4, 0, 0]}
                              />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      <div
                        className={`p-4 sm:p-5 rounded-xl border ${bgSubtle}`}
                      >
                        <h5 className={`text-sm font-bold mb-1 ${textHeading}`}>
                          Customer Tenure Cohort Analysis (%)
                        </h5>
                        <p className={`text-xs mb-4 ${textMuted}`}>
                          Attrition drops sharply once customers pass the
                          12-month tenure milestone.
                        </p>
                        <div className="h-60 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={CHURN_TENURE_DATA}>
                              <CartesianGrid
                                strokeDasharray="3 3"
                                stroke={darkMode ? '#334155' : '#cbd5e1'}
                              />
                              <XAxis
                                dataKey="cohort"
                                tick={{
                                  fontSize: 11,
                                  fill: darkMode ? '#94a3b8' : '#475569',
                                }}
                              />
                              <YAxis
                                unit="%"
                                tick={{
                                  fontSize: 11,
                                  fill: darkMode ? '#94a3b8' : '#475569',
                                }}
                              />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: darkMode
                                    ? '#0f172a'
                                    : '#ffffff',
                                  borderColor: darkMode ? '#334155' : '#cbd5e1',
                                  fontSize: '12px',
                                }}
                              />
                              <Line
                                type="monotone"
                                dataKey="churnRate"
                                name="Cohort Churn Rate (%)"
                                stroke="#2563eb"
                                strokeWidth={3}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>

                    {/* Testable Retention Recommendation Cards */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h5 className={`text-sm font-bold ${textHeading}`}>
                          Proposed Retention Initiatives for Business Testing
                          (Unverified Until A/B Tested)
                        </h5>
                        <button
                          onClick={() =>
                            openDetailedCaseStudy('customer-churn')
                          }
                          className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:underline"
                        >
                          Open Full Churn Case Study →
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          {
                            tag: 'EXPERIMENT 01 • ONBOARDING',
                            title: 'First-90-Day Guided Tech Setup',
                            hypothesis:
                              'Since 51.4% of churn occurs in months 0–6 (especially among fiber users without TechSupport), test a proactive 30-day onboarding check-in to measure impact on 6-month survival.',
                          },
                          {
                            tag: 'EXPERIMENT 02 • CONTRACT MIGRATION',
                            title: 'Month-3 Annual Plan Upgrade Offer',
                            hypothesis:
                              'Test offering a one-time bill credit or bundled TechSupport trial to Month-to-Month customers at Month 3 if they opt into a 1-Year contract.',
                          },
                          {
                            tag: 'EXPERIMENT 03 • FRICTION REDUCTION',
                            title: 'Auto-Pay Enrollment Incentive',
                            hypothesis:
                              'Electronic check users exhibit elevated attrition. Test whether an automated billing enrollment nudge reduces involuntary and manual bill-shock cancellations.',
                          },
                        ].map((rec, i) => (
                          <div
                            key={i}
                            className={`p-4 rounded-xl border ${bgSubtle}`}
                          >
                            <span className="text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase">
                              {rec.tag}
                            </span>
                            <h6
                              className={`text-xs font-bold mt-1 ${textHeading}`}
                            >
                              {rec.title}
                            </h6>
                            <p
                              className={`text-xs mt-1.5 leading-relaxed ${textMuted}`}
                            >
                              {rec.hypothesis}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ------------------------------------------
                    TAB 3: PROJECT 4 — AI ADOPTION READINESS & ROI SIMULATOR FOR SMEs
                ------------------------------------------ */}
                {activeInteractiveTab === 'roi-simulator' && (
                  <div className="p-5 sm:p-7 space-y-7">
                    {/* Top Disclaimer & Preset Buttons */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                      <div>
                        <h4 className={`text-base font-bold ${textHeading}`}>
                          AI Adoption Readiness & ROI Simulator for SMEs
                        </h4>
                        <p className={`text-xs ${textMuted}`}>
                          Adjust the 8 operational and cost parameters below to
                          evaluate estimated labor hours affected, net benefit,
                          ROI, and payback period.
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold text-slate-400">
                          Load Sample SME Scenario:
                        </span>
                        <button
                          onClick={() => applyRoiPreset('support')}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                        >
                          Customer Support Triage (15 Staff)
                        </button>
                        <button
                          onClick={() => applyRoiPreset('invoice')}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                        >
                          Invoice AP Automation (8 Staff)
                        </button>
                        <button
                          onClick={() => applyRoiPreset('small-team')}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800"
                        >
                          Low-Volume Team (Negative ROI Example)
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
                      {/* Left Column: 8 Editable Inputs */}
                      <div
                        className={`lg:col-span-5 p-5 rounded-xl border space-y-4 ${bgSubtle}`}
                      >
                        <div className="flex items-center justify-between">
                          <h5
                            className={`text-xs font-bold uppercase tracking-wider ${textHeading}`}
                          >
                            Editable Model Inputs (8 Parameters)
                          </h5>
                          <span className="text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                            Real-Time Recalculation
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <RoiInputControl
                            label="1. Number of Employees"
                            value={roiInputs.employees}
                            min={1}
                            max={250}
                            step={1}
                            unit="staff"
                            onChange={(v) =>
                              setRoiInputs({ ...roiInputs, employees: v })
                            }
                            darkMode={darkMode}
                          />
                          <RoiInputControl
                            label="2. Hrs / Week on Task"
                            value={roiInputs.hoursPerWeek}
                            min={0.5}
                            max={35}
                            step={0.5}
                            unit="hrs/wk"
                            onChange={(v) =>
                              setRoiInputs({ ...roiInputs, hoursPerWeek: v })
                            }
                            darkMode={darkMode}
                          />
                          <RoiInputControl
                            label="3. Avg Hourly Labor Cost"
                            value={roiInputs.hourlyCost}
                            min={5}
                            max={150}
                            step={1}
                            unit="$/hr"
                            onChange={(v) =>
                              setRoiInputs({ ...roiInputs, hourlyCost: v })
                            }
                            darkMode={darkMode}
                          />
                          <RoiInputControl
                            label="4. Automation Potential"
                            value={roiInputs.automationPotential}
                            min={5}
                            max={90}
                            step={5}
                            unit="%"
                            onChange={(v) =>
                              setRoiInputs({
                                ...roiInputs,
                                automationPotential: v,
                              })
                            }
                            darkMode={darkMode}
                          />
                          <RoiInputControl
                            label="5. Initial Setup Cost"
                            value={roiInputs.initialCost}
                            min={0}
                            max={100000}
                            step={500}
                            unit="$"
                            onChange={(v) =>
                              setRoiInputs({ ...roiInputs, initialCost: v })
                            }
                            darkMode={darkMode}
                          />
                          <RoiInputControl
                            label="6. Monthly SaaS / Maint."
                            value={roiInputs.monthlyCost}
                            min={0}
                            max={10000}
                            step={50}
                            unit="$/mo"
                            onChange={(v) =>
                              setRoiInputs({ ...roiInputs, monthlyCost: v })
                            }
                            darkMode={darkMode}
                          />
                          <RoiInputControl
                            label="7. Expected Adoption Rate"
                            value={roiInputs.adoptionRate}
                            min={10}
                            max={95}
                            step={5}
                            unit="%"
                            onChange={(v) =>
                              setRoiInputs({ ...roiInputs, adoptionRate: v })
                            }
                            darkMode={darkMode}
                          />
                          <RoiInputControl
                            label="8. Evaluation Period"
                            value={roiInputs.evaluationYears}
                            min={1}
                            max={5}
                            step={1}
                            unit="years"
                            onChange={(v) =>
                              setRoiInputs({ ...roiInputs, evaluationYears: v })
                            }
                            darkMode={darkMode}
                          />
                        </div>

                        {/* Transparent Formula Box */}
                        <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-[11px] space-y-1">
                          <div className={`font-bold ${textHeading}`}>
                            Transparent Model Assumptions:
                          </div>
                          <p className={textMuted}>
                            • <strong>Annual Task Hours Affected</strong> =
                            Employees × Weekly Hours × 52 × Automation % ×
                            Adoption %
                          </p>
                          <p className={textMuted}>
                            •{' '}
                            <strong>Potential Annual Labor Cost Savings</strong>{' '}
                            = Reallocated Hours × Hourly Cost (Illustrative
                            value of reclaimed capacity, not guaranteed payroll
                            reduction).
                          </p>
                        </div>
                      </div>

                      {/* Right Column: 6 Calculated Outputs + Scenario Chart + Disclaimer */}
                      <div className="lg:col-span-7 space-y-5">
                        {/* 6 Required Calculated Metrics (Expected Baseline) */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                          <KpiMetricCard
                            label="1. Est. Annual Hours Affected"
                            value={`${roiResults.expected.hoursAffectedYr.toLocaleString()} hrs`}
                            sub={`of ${roiResults.expected.totalTaskHoursYr.toLocaleString()} total task hrs/yr`}
                            accent="text-blue-700 dark:text-blue-400"
                            bgSubtle={bgSubtle}
                            textHeading={textHeading}
                          />
                          <KpiMetricCard
                            label="2. Potential Annual Savings"
                            value={`$${roiResults.expected.grossAnnualSavings.toLocaleString()}`}
                            sub="Estimated Capacity Value (Not Guaranteed)"
                            accent="text-emerald-700 dark:text-emerald-400"
                            bgSubtle={bgSubtle}
                            textHeading={textHeading}
                          />
                          <KpiMetricCard
                            label="3. Annual Operating Cost"
                            value={`$${roiResults.expected.annualOpex.toLocaleString()}/yr`}
                            sub={`+ $${roiInputs.initialCost.toLocaleString()} Year-1 Setup`}
                            accent="text-slate-700 dark:text-slate-300"
                            bgSubtle={bgSubtle}
                            textHeading={textHeading}
                          />
                          <KpiMetricCard
                            label="4. First-Year Net Benefit"
                            value={`${
                              roiResults.expected.firstYearNetBenefit >= 0
                                ? '+'
                                : ''
                            }$${roiResults.expected.firstYearNetBenefit.toLocaleString()}`}
                            sub="Yr-1 Savings minus Setup & OPEX"
                            accent={
                              roiResults.expected.firstYearNetBenefit >= 0
                                ? 'text-emerald-700 dark:text-emerald-400'
                                : 'text-red-600 dark:text-red-400'
                            }
                            bgSubtle={bgSubtle}
                            textHeading={textHeading}
                          />
                          <KpiMetricCard
                            label={`5. Estimated ${roiInputs.evaluationYears}-Yr ROI`}
                            value={`${roiResults.expected.roiPct}%`}
                            sub={`Net ${
                              roiInputs.evaluationYears
                            }-Yr Benefit: $${roiResults.expected.horizonNetBenefit.toLocaleString()}`}
                            accent={
                              roiResults.expected.roiPct >= 0
                                ? 'text-blue-700 dark:text-blue-400'
                                : 'text-red-600 dark:text-red-400'
                            }
                            bgSubtle={bgSubtle}
                            textHeading={textHeading}
                          />
                          <KpiMetricCard
                            label="6. Est. Payback Period"
                            value={
                              roiResults.expected.paybackMonths
                                ? `${roiResults.expected.paybackMonths} mos`
                                : 'Not Reached'
                            }
                            sub="Months to Recover Initial Setup"
                            accent="text-indigo-700 dark:text-indigo-400"
                            bgSubtle={bgSubtle}
                            textHeading={textHeading}
                          />
                        </div>

                        {/* Scenario Comparison Chart & Table */}
                        <div
                          className={`p-4 sm:p-5 rounded-xl border ${bgSubtle}`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h5
                                className={`text-sm font-bold ${textHeading}`}
                              >
                                Scenario Sensitivity Comparison (Conservative
                                vs. Expected vs. Optimistic)
                              </h5>
                              <p className={`text-xs ${textMuted}`}>
                                Comparing Annual Potential Savings against
                                First-Year Net Benefit across adoption
                                scenarios.
                              </p>
                            </div>
                          </div>
                          <div className="h-56 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={roiResults.chartData}>
                                <CartesianGrid
                                  strokeDasharray="3 3"
                                  stroke={darkMode ? '#334155' : '#cbd5e1'}
                                />
                                <XAxis
                                  dataKey="scenario"
                                  tick={{
                                    fontSize: 11,
                                    fill: darkMode ? '#94a3b8' : '#475569',
                                  }}
                                />
                                <YAxis
                                  tick={{
                                    fontSize: 11,
                                    fill: darkMode ? '#94a3b8' : '#475569',
                                  }}
                                />
                                <Tooltip
                                  contentStyle={{
                                    backgroundColor: darkMode
                                      ? '#0f172a'
                                      : '#ffffff',
                                    borderColor: darkMode
                                      ? '#334155'
                                      : '#cbd5e1',
                                    fontSize: '12px',
                                  }}
                                />
                                <Legend wrapperStyle={{ fontSize: '12px' }} />
                                <Bar
                                  dataKey="grossAnnualSavings"
                                  name="Potential Annual Savings ($)"
                                  fill="#2563eb"
                                  radius={[4, 4, 0, 0]}
                                />
                                <Bar
                                  dataKey="firstYearNetBenefit"
                                  name="First-Year Net Benefit ($)"
                                  fill="#10b981"
                                  radius={[4, 4, 0, 0]}
                                />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>

                        {/* Mandatory Financial Disclaimer */}
                        <div className="p-3.5 rounded-xl border border-amber-300/80 dark:border-amber-800 bg-amber-50/70 dark:bg-amber-950/40 flex items-start gap-3">
                          <ShieldAlert className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                          <div className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                            <strong>Important Analytical Disclaimer:</strong>{' '}
                            Estimated labor cost savings represent the
                            theoretical value of employee hours reallocated from
                            repetitive tasks—
                            <strong>
                              not guaranteed cash payroll reductions
                            </strong>
                            . All outputs are illustrative decision-support
                            estimates based on user-supplied parameters and do
                            not constitute formal financial advice or guaranteed
                            business outcomes.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ------------------------------------------
              SECTION 7: EXISTING ENGINEERING PROJECTS WITH AN ANALYTICS PERSPECTIVE
          ------------------------------------------ */}
          <section className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                  04 • Verified Resume Projects (Engineering Foundation)
                </span>
                <h2
                  className={`text-2xl sm:text-3xl font-bold mt-1 ${textHeading}`}
                >
                  Engineering Projects with an Analytics Perspective
                </h2>
                <p className={`text-sm mt-1.5 ${textMuted}`}>
                  Clearly labeled as actual engineering and international R&D
                  projects from my resume—highlighting how system validation,
                  sensor telemetry, and quantitative error analysis transfer
                  directly to Business Analytics.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                {ENGINEERING_PROJECTS.map((eng) => (
                  <div
                    key={eng.id}
                    className={`rounded-2xl border p-6 sm:p-7 shadow-sm flex flex-col justify-between ${bgSurface}`}
                  >
                    <div className="space-y-4">
                      <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        {eng.badge}
                      </span>

                      <div>
                        <h3 className={`text-xl font-bold ${textHeading}`}>
                          {eng.title}
                        </h3>
                        <p className="text-xs font-medium text-blue-700 dark:text-blue-400 mt-1">
                          {eng.context}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5">
                        {eng.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <div
                          className={`text-xs font-bold uppercase tracking-wider ${textHeading}`}
                        >
                          Engineering & Quantitative Highlights:
                        </div>
                        <ul
                          className={`space-y-1.5 text-xs leading-relaxed list-disc list-inside ${textMuted}`}
                        >
                          {eng.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Explicit Analytics Perspective Bridge */}
                    <div className="mt-6 p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/70">
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-900 dark:text-blue-300 mb-1">
                        <TrendingUp className="w-4 h-4" />
                        Relevance to Business Analytics & Data Roles
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        {eng.analyticsBridge}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Hardware Telemetry Projects from Resume */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {ADDITIONAL_ENGINEERING_WORK.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border flex items-start justify-between gap-4 ${bgSurface}`}
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase text-slate-400">
                        Additional Engineering Project
                      </span>
                      <h4 className={`text-sm font-bold ${textHeading}`}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        {item.tech}
                      </p>
                      <p className={`text-xs mt-1 ${textMuted}`}>
                        {item.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ------------------------------------------
              SECTION 8: INTERACTIVE CASE STUDY EXPLORER (13 SECTIONS)
          ------------------------------------------ */}
          <section
            id="case-studies"
            className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                    05 • Deep-Dive Analytical Documentation
                  </span>
                  <h2
                    className={`text-2xl sm:text-3xl font-bold mt-1 ${textHeading}`}
                  >
                    Interactive 13-Section Case Study Reader
                  </h2>
                  <p className={`text-sm mt-1 max-w-3xl ${textMuted}`}>
                    Select any of the 4 proposed Business Analytics case studies
                    below to inspect its complete methodology—from Business
                    Context and Data Cleaning to SQL/Python snippets,
                    Limitations, and What I Learned.
                  </p>
                </div>

                {/* Case Study Selector Pills */}
                <div className="flex flex-wrap gap-2">
                  {Object.values(CASE_STUDIES_DATA).map((study) => (
                    <button
                      key={study.id}
                      onClick={() => setSelectedCaseStudyId(study.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
                        selectedCaseStudyId === study.id
                          ? 'bg-blue-700 text-white shadow-sm'
                          : `${bgSurface} border ${textMuted} hover:text-slate-900`
                      }`}
                    >
                      {study.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Embedded Full 13-Section Case Study Component */}
              <div
                className={`p-5 sm:p-8 rounded-2xl border shadow-sm ${bgSurface}`}
              >
                <CaseStudyDetailedView
                  study={currentCaseStudy}
                  darkMode={darkMode}
                  textHeading={textHeading}
                  textMuted={textMuted}
                  bgSubtle={bgSubtle}
                  activeTocSection={activeTocSection}
                  setActiveTocSection={setActiveTocSection}
                  onJumpToSimulator={() => {
                    setActiveInteractiveTab(
                      currentCaseStudy.id === 'customer-churn'
                        ? 'churn-workbench'
                        : currentCaseStudy.id === 'ai-roi-simulator'
                        ? 'roi-simulator'
                        : 'ecom-dashboard'
                    );
                    document
                      .getElementById('interactive-analytics-workbench')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
              </div>
            </div>
          </section>

          {/* ------------------------------------------
              SECTION 9: EXPERIENCE SECTION (VERIFIED RESUME ROLES)
          ------------------------------------------ */}
          <section
            id="experience"
            className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                  06 • Professional & Research Experience
                </span>
                <h2
                  className={`text-2xl sm:text-3xl font-bold mt-1 ${textHeading}`}
                >
                  Verified Experience & Transferable Analytical Skills
                </h2>
                <p className={`text-sm mt-1 ${textMuted}`}>
                  Displaying exact roles, dates, and accomplishments from my
                  resume while highlighting transferable skills in quantitative
                  validation, Python data analysis, and structured
                  problem-solving.
                </p>
              </div>

              <div className="space-y-6">
                {/* Role 0: Droidel Technology */}
                <div
                  className={`p-6 sm:p-8 rounded-2xl border shadow-sm ${bgSurface}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4 mb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3
                          className={`text-lg sm:text-xl font-bold ${textHeading}`}
                        >
                          Droidel Technology — Robotics Trainer
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                          Full-time • Currently Working
                        </span>
                      </div>
                      <p className={`text-xs mt-1 ${textMuted}`}>
                        Robotics & STEM Education (Grades 1–10)
                      </p>
                    </div>
                    <div className="text-xs font-semibold text-blue-700 dark:text-blue-400 shrink-0">
                      September 2026 – Present
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-8 space-y-2.5">
                      <h4
                        className={`text-xs font-bold uppercase tracking-wider ${textHeading}`}
                      >
                        Key Responsibilities:
                      </h4>
                      <ul
                        className={`space-y-2 text-xs sm:text-sm leading-relaxed list-disc list-inside ${textMuted}`}
                      >
                        <li>
                          Conduct robotics and STEM learning sessions for school
                          students from Grades 1–10.
                        </li>
                        <li>
                          Teach students robotics concepts through practical
                          demonstrations, hands-on activities, and project-based
                          learning.
                        </li>
                        <li>
                          Introduce students to robotics hardware, sensors,
                          automation, and robot functionality.
                        </li>
                        <li>
                          Design engaging, age-appropriate activities to develop
                          students' logical thinking, creativity, and
                          problem-solving skills.
                        </li>
                        <li>
                          Guide students in understanding robotics applications
                          through interactive learning experiences.
                        </li>
                      </ul>
                    </div>

                    <div
                      className={`lg:col-span-4 p-4 rounded-xl border ${bgSubtle}`}
                    >
                      <h4
                        className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${textHeading}`}
                      >
                        Transferable Business Analytics Skills
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          'Technical Communication',
                          'Structured Problem-Solving',
                          'Logical Thinking',
                          'Hands-On Concept Delivery',
                        ].map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Role 1: ISAE-Supméca */}
                <div
                  className={`p-6 sm:p-8 rounded-2xl border shadow-sm ${bgSurface}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4 mb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3
                          className={`text-lg sm:text-xl font-bold ${textHeading}`}
                        >
                          ISAE-Supméca — International Research Intern
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                          Euler Laboratory • Digital Twin of an Industry 5.0
                          Production Line
                        </span>
                      </div>
                      <p className={`text-xs mt-1 ${textMuted}`}>
                        Institut Supérieur de Mécanique de Paris • Supervisor:
                        Romain Delabeye
                      </p>
                    </div>
                    <div className="text-xs font-semibold text-blue-700 dark:text-blue-400 shrink-0">
                      February 2026 – June 2026 | Paris, France
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-8 space-y-2.5">
                      <h4
                        className={`text-xs font-bold uppercase tracking-wider ${textHeading}`}
                      >
                        Key Responsibilities & Verified Deliverables:
                      </h4>
                      <ul
                        className={`space-y-2 text-xs sm:text-sm leading-relaxed list-disc list-inside ${textMuted}`}
                      >
                        <li>
                          <strong>Competitive Research Funding:</strong>{' '}
                          Selected for an international research internship
                          funded through{' '}
                          <strong>Fondation Dassault Systèmes / GIFAS</strong>.
                        </li>
                        <li>
                          <strong>
                            Industry 5.0 Digital Twin Co-Simulation:
                          </strong>{' '}
                          Built and orchestrated a complete multiphysics digital
                          twin of the ALIX Industry 5.0 production line running
                          10x faster than real time from a single Python
                          co-simulation program.
                        </li>
                        <li>
                          <strong>
                            Measured Sensor Data Analysis & Validation:
                          </strong>{' '}
                          Analyzed physical TDMS industrial sensor data using
                          Python (Pandas, SciPy, NPTDMS) and designed a
                          six-metric validation framework with Stage-A/Stage-B
                          decomposition isolating physics residuals from FMU
                          export error.
                        </li>
                        <li>
                          <strong>Executive & Stakeholder Presentation:</strong>{' '}
                          Presented digital twin validation research directly to{' '}
                          <strong>Dassault Systèmes engineers</strong> in a
                          formal technical review meeting (June 2026),
                          delivering ~85% of a four-month industrial brief with
                          Phase 2 explicitly scoped.
                        </li>
                      </ul>
                    </div>

                    <div
                      className={`lg:col-span-4 p-4 rounded-xl border ${bgSubtle}`}
                    >
                      <h4
                        className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${textHeading}`}
                      >
                        Transferable Business Analytics Skills
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          'Python Data Analysis (Pandas/SciPy)',
                          'Multi-Metric Model Validation',
                          'Residual & Error Decomposition',
                          'Stakeholder Technical Presentations',
                          'Scope & Phase-2 Roadmapping',
                          'Sensor Time-Series Processing',
                        ].map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Role 2: Emertxe Information Technologies */}
                <div
                  className={`p-6 sm:p-8 rounded-2xl border shadow-sm ${bgSurface}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4 mb-5">
                    <div>
                      <h3
                        className={`text-lg sm:text-xl font-bold ${textHeading}`}
                      >
                        Emertxe Information Technologies — Embedded Engineer
                        Intern
                      </h3>
                      <p className={`text-xs mt-1 ${textMuted}`}>
                        Firmware Development, Microcontroller Protocols &
                        Real-Time Serial Data Debugging
                      </p>
                    </div>
                    <div className="text-xs font-semibold text-blue-700 dark:text-blue-400 shrink-0">
                      January 2025 – March 2025 | Remote
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-8 space-y-2.5">
                      <h4
                        className={`text-xs font-bold uppercase tracking-wider ${textHeading}`}
                      >
                        Key Responsibilities & Verified Deliverables:
                      </h4>
                      <ul
                        className={`space-y-2 text-xs sm:text-sm leading-relaxed list-disc list-inside ${textMuted}`}
                      >
                        <li>
                          <strong>C/C++ Firmware Development:</strong> Wrote
                          low-level C/C++ firmware for microcontroller
                          peripherals and embedded interfaces.
                        </li>
                        <li>
                          <strong>Peripheral Communication Protocols:</strong>{' '}
                          Implemented and verified communication across GPIO,{' '}
                          <strong>UART, SPI, and I2C</strong> interfaces.
                        </li>
                        <li>
                          <strong>
                            Firmware Debugging & Serial Data Analysis:
                          </strong>{' '}
                          Debugged firmware in real time using Keil uVision and
                          serial monitors, reducing system error rates by 15%
                          and parsing raw serial data payloads.
                        </li>
                      </ul>
                    </div>

                    <div
                      className={`lg:col-span-4 p-4 rounded-xl border ${bgSubtle}`}
                    >
                      <h4
                        className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${textHeading}`}
                      >
                        Transferable Business Analytics Skills
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          'Raw Data Payload Parsing',
                          'Root-Cause Error Reduction (-15%)',
                          'Systematic Log Debugging',
                          'Data Integrity Verification',
                        ].map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------
              SECTION 10: EDUCATION AND ACHIEVEMENTS
          ------------------------------------------ */}
          <section
            id="education"
            className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                  07 • Academic Credentials & Honors
                </span>
                <h2
                  className={`text-2xl sm:text-3xl font-bold mt-1 ${textHeading}`}
                >
                  Education, National Competitions & Research Scholarships
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Education (3 Degrees) */}
                <div className="lg:col-span-5 space-y-4">
                  <h3
                    className={`text-sm font-bold uppercase tracking-wider mb-3 ${textHeading}`}
                  >
                    Academic Education
                  </h3>

                  {[
                    {
                      degree: 'MBA in Business Analytics',
                      institution:
                        'Savitribai Phule Pune University (SPPU), India',
                      status: 'Ongoing (Currently Pursuing)',
                      highlight: true,
                      note: 'Focusing on business strategy, managerial decision-making, statistics, BI reporting, and data-driven problem-solving.',
                    },
                    {
                      degree:
                        'B.Tech in Electronics and Telecommunication Engineering',
                      institution:
                        'N.K. Orchid College of Engineering, Solapur',
                      status: '2023 – 2026',
                      highlight: false,
                      note: 'Specialized in Embedded Systems, IoT telemetry, Python scientific computing, and Industry 5.0 Digital Twin validation.',
                    },
                    {
                      degree: 'Diploma in Computer Science Engineering',
                      institution: 'VVP Polytechnic, Solapur',
                      status: '2020 – 2023',
                      highlight: false,
                      note: 'Foundational training in programming, algorithms, database concepts, and software engineering.',
                    },
                  ].map((edu, i) => (
                    <div
                      key={i}
                      className={`p-5 rounded-2xl border shadow-sm ${
                        edu.highlight
                          ? 'border-blue-600/80 dark:border-blue-500/80 bg-blue-50/30 dark:bg-blue-950/20'
                          : bgSurface
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span
                          className={`text-[11px] font-bold uppercase px-2 py-0.5 rounded ${
                            edu.highlight
                              ? 'bg-blue-700 text-white'
                              : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                      <h4 className={`text-base font-bold mt-2 ${textHeading}`}>
                        {edu.degree}
                      </h4>
                      <div className="text-xs font-semibold text-blue-700 dark:text-blue-400 mt-0.5">
                        {edu.institution}
                      </div>
                      <p
                        className={`text-xs mt-2 leading-relaxed ${textMuted}`}
                      >
                        {edu.note}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Right Column: 6 Verified Achievements */}
                <div className="lg:col-span-7">
                  <h3
                    className={`text-sm font-bold uppercase tracking-wider mb-4 ${textHeading}`}
                  >
                    Verified Honours, Scholarships & Competition Wins
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'AI Elite Finalist — Bharat AI Quest 2025',
                        org: 'IIT Bombay & NPCI (2025)',
                        desc: 'Selected among top participants nationwide advancing through AI Enthusiast → AI Expert → AI Elite rounds. Completed Generative AI/Data Science coding challenge at IIT Bombay, attended NVIDIA Deep Learning Institute workshop, and invited to Global Fintech Fest 2025.',
                      },
                      {
                        title: 'International Research Internship Grant',
                        org: 'Fondation Dassault Systèmes / GIFAS (2026)',
                        desc: 'Awarded competitive research funding for Industry 5.0 Digital Twin research at Euler Laboratory, ISAE-Supméca (Paris, France); presented work to Dassault Systèmes engineers.',
                      },
                      {
                        title: 'Winner — AgitTechFest 2025',
                        org: 'Technical Paper Presentation (2025)',
                        desc: 'First-place winner for research paper on "Industry 5.0 in Smart Manufacturing."',
                      },
                      {
                        title: 'Winner — WisoTech 2024',
                        org: 'Technical Paper Presentation (2024)',
                        desc: 'First-place winner for paper on "IoT-Based Industrial Automation."',
                      },
                      {
                        title: 'Winner — WisoTech 2023',
                        org: 'Hardware & Systems Project Competition (2023)',
                        desc: 'Awarded first place in the inter-collegiate engineering project competition.',
                      },
                      {
                        title: 'Winner — E2Logic 2023',
                        org: 'Paper Presentation Competition (2023)',
                        desc: 'Recognized as winner for structured technical communication and paper presentation.',
                      },
                    ].map((ach, idx) => (
                      <div
                        key={idx}
                        className={`p-5 rounded-2xl border shadow-sm flex flex-col justify-between ${bgSurface}`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <Award className="w-5 h-5 text-blue-700 dark:text-blue-400 shrink-0" />
                            <span className="text-[11px] font-semibold text-slate-400">
                              {ach.org}
                            </span>
                          </div>
                          <h4 className={`text-sm font-bold ${textHeading}`}>
                            {ach.title}
                          </h4>
                          <p
                            className={`text-xs mt-1.5 leading-relaxed ${textMuted}`}
                          >
                            {ach.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------
              SECTION 11: RESUME AND CONTACT SECTION
          ------------------------------------------ */}
          <section id="contact" className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Column: Direct Contact Info & Resume Card */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                      08 • Let's Connect
                    </span>
                    <h2
                      className={`text-2xl sm:text-3xl font-bold mt-1 ${textHeading}`}
                    >
                      Resume & Direct Contact
                    </h2>
                    <p
                      className={`text-sm sm:text-base mt-3 leading-relaxed ${textMuted}`}
                    >
                      "Interested in Business Analytics opportunities,
                      analytical projects, and collaborations at the
                      intersection of technology and business? Let's connect."
                    </p>
                  </div>

                  {/* Direct Contact Channels */}
                  <div className="space-y-3">
                    <div
                      className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${bgSurface}`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <div className="text-[11px] font-semibold text-slate-400">
                            Email Address
                          </div>
                          <a
                            href="mailto:satresamiksha@gmail.com"
                            className={`text-xs sm:text-sm font-bold hover:underline truncate block ${textHeading}`}
                          >
                            satresamiksha@gmail.com
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={copyEmailToClipboard}
                        className="px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1 shrink-0"
                      >
                        {copiedEmail ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        {copiedEmail ? 'Copied' : 'Copy'}
                      </button>
                    </div>

                    <a
                      href="https://www.linkedin.com/in/samiksha-satre-94636729a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl border flex items-center justify-between gap-3 transition hover:border-blue-500 ${bgSurface}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center">
                          <Linkedin className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-slate-400">
                            LinkedIn Profile
                          </div>
                          <div
                            className={`text-xs sm:text-sm font-bold ${textHeading}`}
                          >
                            linkedin.com/in/samiksha-satre-94636729a
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
                    </a>

                    <a
                      href="https://github.com/samikshasatre"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl border flex items-center justify-between gap-3 transition hover:border-blue-500 ${bgSurface}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center">
                          <Github className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-slate-400">
                            GitHub Profile
                          </div>
                          <div
                            className={`text-xs sm:text-sm font-bold ${textHeading}`}
                          >
                            github.com/samikshasatre
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
                    </a>
                  </div>

                  {/* Downloadable Resume Callout Card */}
                  <div className={`p-5 rounded-2xl border ${bgSubtle}`}>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className={`text-sm font-bold ${textHeading}`}>
                          Download Full Resume
                        </h3>
                        <p className={`text-xs mt-0.5 ${textMuted}`}>
                          Formatted for ATS & recruiter review (MBA in Business
                          Analytics + B.Tech E&TC + ISAE-Supméca R&D).
                        </p>
                      </div>
                      <button
                        onClick={triggerResumeDownload}
                        className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-700 hover:bg-blue-800 text-white flex items-center gap-2 shrink-0 shadow-sm"
                      >
                        <Download className="w-4 h-4" />
                        Resume PDF
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column: Validated Contact Form with Honest Integration Note */}
                <div
                  className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border shadow-sm ${bgSurface}`}
                >
                  <h3 className={`text-lg font-bold mb-1 ${textHeading}`}>
                    Send a Message
                  </h3>
                  <p className={`text-xs mb-6 ${textMuted}`}>
                    Includes client-side validation and prepares a pre-addressed
                    email draft or serverless webhook payload.
                  </p>

                  {formSubmitted ? (
                    <div className="p-6 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-950/40 space-y-4">
                      <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                        <CheckCircle2 className="w-5 h-5" />
                        Message Validated & Ready to Send
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        Because this static portfolio does not expose private
                        backend SMTP credentials in client-side code, click the
                        button below to launch your default email client
                        pre-populated with your message to{' '}
                        <strong>satresamiksha@gmail.com</strong>, or connect a
                        Formspree/EmailJS endpoint for automated delivery.
                      </p>
                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        <a
                          href={`mailto:satresamiksha@gmail.com?subject=${encodeURIComponent(
                            `[Portfolio Inquiry - ${contactForm.roleType}] from ${contactForm.name}`
                          )}&body=${encodeURIComponent(
                            `Name: ${contactForm.name}\nEmail: ${contactForm.email}\nInquiry Type: ${contactForm.roleType}\n\nMessage:\n${contactForm.message}`
                          )}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-700 text-white hover:bg-blue-800"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          Open in Email Client (mailto:)
                        </a>
                        <button
                          onClick={() => {
                            setFormSubmitted(false);
                            setContactForm({
                              name: '',
                              email: '',
                              roleType: 'Business Analyst / Data Analyst Role',
                              message: '',
                            });
                          }}
                          className="px-3 py-2 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700"
                        >
                          Reset Form
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleContactSubmit}
                      noValidate
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className={`block text-xs font-semibold mb-1.5 ${textHeading}`}
                          >
                            Your Name *
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            value={contactForm.name}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                name: e.target.value,
                              })
                            }
                            placeholder="e.g., Hiring Manager / Recruiter"
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                              darkMode
                                ? 'bg-slate-950 border-slate-700 text-white'
                                : 'bg-slate-50 border-slate-300 text-slate-900'
                            }`}
                          />
                          {formErrors.name && (
                            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />{' '}
                              {formErrors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="contact-email"
                            className={`block text-xs font-semibold mb-1.5 ${textHeading}`}
                          >
                            Your Email Address *
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            value={contactForm.email}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                email: e.target.value,
                              })
                            }
                            placeholder="name@company.com"
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                              darkMode
                                ? 'bg-slate-950 border-slate-700 text-white'
                                : 'bg-slate-50 border-slate-300 text-slate-900'
                            }`}
                          />
                          {formErrors.email && (
                            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />{' '}
                              {formErrors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-topic"
                          className={`block text-xs font-semibold mb-1.5 ${textHeading}`}
                        >
                          Opportunity / Inquiry Type
                        </label>
                        <select
                          id="contact-topic"
                          value={contactForm.roleType}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              roleType: e.target.value,
                            })
                          }
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            darkMode
                              ? 'bg-slate-950 border-slate-700 text-white'
                              : 'bg-slate-50 border-slate-300 text-slate-900'
                          }`}
                        >
                          <option value="Business Analyst / Data Analyst Role">
                            Business Analyst / Data Analyst Opportunity
                          </option>
                          <option value="BI Analyst / Product Analyst Role">
                            BI Analyst / Product Analyst Opportunity
                          </option>
                          <option value="MBA Internship / Capstone Project">
                            MBA Analytics Internship / Live Project
                          </option>
                          <option value="Research / Technical Collaboration">
                            Research or Technical Collaboration
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-message"
                          className={`block text-xs font-semibold mb-1.5 ${textHeading}`}
                        >
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          value={contactForm.message}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              message: e.target.value,
                            })
                          }
                          placeholder="Share role details, project scope, or interview availability..."
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            darkMode
                              ? 'bg-slate-950 border-slate-700 text-white'
                              : 'bg-slate-50 border-slate-300 text-slate-900'
                          }`}
                        />
                        {formErrors.message && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />{' '}
                            {formErrors.message}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                        <button
                          type="submit"
                          className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-700 hover:bg-blue-800 text-white shadow-sm transition"
                        >
                          Validate & Prepare Message
                        </button>
                        <span className="text-[11px] text-slate-400">
                          No private API keys exposed • Ready for Formspree /
                          Web3Forms hookup
                        </span>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ==========================================
          FOOTER
      ========================================== */}
      <footer
        className={`border-t py-8 text-xs ${
          darkMode
            ? 'border-slate-800 bg-slate-950 text-slate-400'
            : 'border-slate-200 bg-white text-slate-600'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong className={textHeading}>Samiksha Satre</strong> — MBA in
            Business Analytics (SPPU) & B.Tech in Electronics and
            Telecommunication Engineering.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/samiksha-satre-94636729a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/samikshasatre"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              GitHub
            </a>
            <a
              href="mailto:satresamiksha@gmail.com"
              className="hover:text-blue-600"
            >
              Email
            </a>
            <button
              onClick={triggerResumeDownload}
              className="font-semibold text-blue-700 dark:text-blue-400 hover:underline"
            >
              Download Resume
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// 4. REUSABLE SUB-COMPONENTS
// ==========================================

function SkillListItem({ skill, textHeading }) {
  const badgeStyle =
    skill.type === 'applied'
      ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
      : skill.type === 'developing'
      ? 'bg-blue-50 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-200 dark:border-blue-800'
      : 'bg-amber-50 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border-amber-200 dark:border-amber-800';

  return (
    <li className="flex items-center justify-between gap-2 text-xs py-1 border-b border-slate-100 dark:border-slate-800/60 last:border-none">
      <span className={`font-medium ${textHeading}`}>{skill.name}</span>
      <span
        className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border shrink-0 ${badgeStyle}`}
      >
        {skill.status}
      </span>
    </li>
  );
}

function KpiMetricCard({ label, value, sub, accent, bgSubtle, textHeading }) {
  return (
    <div className={`p-4 rounded-xl border ${bgSubtle}`}>
      <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
        {label}
      </div>
      <div
        className={`text-lg sm:text-xl font-extrabold mt-1 ${
          accent || textHeading
        }`}
      >
        {value}
      </div>
      <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
        {sub}
      </div>
    </div>
  );
}

function RoiInputControl({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
  darkMode,
}) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[11px]">
        <span className="font-semibold text-slate-700 dark:text-slate-200">
          {label}
        </span>
        <span className="font-bold text-blue-700 dark:text-blue-400">
          {unit === '$' ? `$${value.toLocaleString()}` : `${value} ${unit}`}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-blue-700 cursor-pointer h-1.5 rounded-lg"
      />
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className={`w-full px-2 py-1 rounded border text-xs ${
          darkMode
            ? 'bg-slate-900 border-slate-700 text-white'
            : 'bg-white border-slate-300 text-slate-800'
        }`}
      />
    </div>
  );
}

// Detailed 13-Section Case Study Viewer Component with Interactive TOC
function CaseStudyDetailedView({
  study,
  darkMode,
  textHeading,
  textMuted,
  bgSubtle,
  activeTocSection,
  setActiveTocSection,
  onJumpToSimulator,
}) {
  const tocItems = [
    { id: 'sec-1', label: '1. Executive Summary' },
    { id: 'sec-2', label: '2. Business Context' },
    { id: 'sec-3', label: '3. Problem Statement' },
    { id: 'sec-4', label: '4. Business Objectives' },
    { id: 'sec-5', label: '5. Dataset & Data Sources' },
    { id: 'sec-6', label: '6. Data Cleaning & Prep' },
    { id: 'sec-7', label: '7. Analysis Methodology' },
    { id: 'sec-8', label: '8. Key Findings' },
    { id: 'sec-9', label: '9. Visualizations & Code' },
    { id: 'sec-10', label: '10. Business Recommendations' },
    { id: 'sec-11', label: '11. Expected Business Impact' },
    { id: 'sec-12', label: '12. Limitations' },
    { id: 'sec-13', label: '13. What I Learned' },
  ];

  const downloadCaseStudyMarkdown = () => {
    const mdContent = `# ${study.title}\n**Status:** ${
      study.badge
    }\n**Tools:** ${study.tools.join(', ')}\n\n## 1. Executive Summary\n${
      study.execSummary
    }\n\n## 2. Business Context\n${
      study.businessContext
    }\n\n## 3. Problem Statement\n${
      study.problemStatement
    }\n\n## 4. Business Objectives\n${study.businessObjectives
      .map((o) => `- ${o}`)
      .join('\n')}\n\n## 5. Dataset and Data Sources\n${
      study.datasetInfo
    }\n\n## 6. Data Cleaning and Preparation\n${study.dataCleaning
      .map((c) => `- ${c}`)
      .join('\n')}\n\n## 7. Analysis Methodology\n${
      study.methodology
    }\n\n## 8. Key Findings\n${study.keyFindings
      .map((f) => `- ${f}`)
      .join('\n')}\n\n## 9. SQL & Python Analysis Snippets\n\`\`\`sql\n${
      study.sqlSnippet
    }\n\`\`\`\n\n\`\`\`python\n${
      study.pythonSnippet
    }\n\`\`\`\n\n## 10. Business Recommendations (Proposed)\n${study.recommendations
      .map((r) => `- ${r}`)
      .join('\n')}\n\n## 11. Expected Business Impact\n${
      study.expectedImpact
    }\n\n## 12. Limitations\n${study.limitations
      .map((l) => `- ${l}`)
      .join('\n')}\n\n## 13. What I Learned\n${study.whatILearned}\n`;

    const blob = new Blob([mdContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${study.id}-case-study-documentation.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Sidebar: Interactive Table of Contents */}
      <aside
        className={`lg:col-span-4 xl:col-span-3 p-4 rounded-xl border lg:sticky lg:top-20 space-y-4 ${bgSubtle}`}
      >
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Interactive Table of Contents
          </span>
          <h4 className={`text-sm font-bold mt-0.5 ${textHeading}`}>
            {study.title}
          </h4>
        </div>

        <nav className="space-y-1" aria-label="Case Study Sections">
          {tocItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTocSection(item.id);
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`block px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${
                activeTocSection === item.id
                  ? 'bg-blue-700 text-white font-semibold'
                  : `${textMuted} hover:text-slate-900 dark:hover:text-white`
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
          <button
            onClick={onJumpToSimulator}
            className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center gap-1.5"
          >
            <Sliders className="w-3.5 h-3.5" />
            Interact with Live Charts
          </button>
          <button
            onClick={downloadCaseStudyMarkdown}
            className="w-full py-2 px-3 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-200/60 dark:hover:bg-slate-800 flex items-center justify-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            Download Case Study (.MD)
          </button>
        </div>
      </aside>

      {/* Right Content: All 13 Structured Sections */}
      <div className="lg:col-span-8 xl:col-span-9 space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              {study.badge}
            </span>
            {study.tools.map((t, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-medium"
              >
                {t}
              </span>
            ))}
          </div>
          <h3 className={`text-xl sm:text-2xl font-bold ${textHeading}`}>
            {study.title}
          </h3>
          <p className={`text-sm mt-1 ${textMuted}`}>{study.subtitle}</p>
        </div>

        <CaseStudyBlock
          id="sec-1"
          title="1. Executive Summary"
          textHeading={textHeading}
        >
          <p className={`text-xs sm:text-sm leading-relaxed ${textMuted}`}>
            {study.execSummary}
          </p>
        </CaseStudyBlock>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CaseStudyBlock
            id="sec-2"
            title="2. Business Context"
            textHeading={textHeading}
          >
            <p className={`text-xs sm:text-sm leading-relaxed ${textMuted}`}>
              {study.businessContext}
            </p>
          </CaseStudyBlock>

          <CaseStudyBlock
            id="sec-3"
            title="3. Problem Statement"
            textHeading={textHeading}
          >
            <p className={`text-xs sm:text-sm leading-relaxed ${textMuted}`}>
              {study.problemStatement}
            </p>
          </CaseStudyBlock>
        </div>

        <CaseStudyBlock
          id="sec-4"
          title="4. Business Objectives"
          textHeading={textHeading}
        >
          <ul
            className={`list-disc list-inside space-y-1.5 text-xs sm:text-sm ${textMuted}`}
          >
            {study.businessObjectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock
          id="sec-5"
          title="5. Dataset and Data Sources (Simulated / Sample Notice)"
          textHeading={textHeading}
        >
          <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs sm:text-sm">
            {study.datasetInfo}
          </div>
        </CaseStudyBlock>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CaseStudyBlock
            id="sec-6"
            title="6. Data Cleaning and Preparation"
            textHeading={textHeading}
          >
            <ul
              className={`list-disc list-inside space-y-1.5 text-xs sm:text-sm ${textMuted}`}
            >
              {study.dataCleaning.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </CaseStudyBlock>

          <CaseStudyBlock
            id="sec-7"
            title="7. Analysis Methodology"
            textHeading={textHeading}
          >
            <p className={`text-xs sm:text-sm leading-relaxed ${textMuted}`}>
              {study.methodology}
            </p>
          </CaseStudyBlock>
        </div>

        <CaseStudyBlock
          id="sec-8"
          title="8. Key Findings (Derived from Sample Dataset)"
          textHeading={textHeading}
        >
          <ul className={`space-y-2 text-xs sm:text-sm ${textMuted}`}>
            {study.keyFindings.map((finding, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{finding}</span>
              </li>
            ))}
          </ul>
        </CaseStudyBlock>

        {/* Section 9: Visualizations + SQL & Python Snippets */}
        <CaseStudyBlock
          id="sec-9"
          title="9. Visualizations, SQL Queries & Python Analysis Snippets"
          textHeading={textHeading}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-medium">
                Interactive charts for <strong>{study.title}</strong> are live
                in the Analytics Workbench above.
              </span>
              <button
                onClick={onJumpToSimulator}
                className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:underline"
              >
                Jump to Interactive Charts ↑
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-100">
                <div className="px-3.5 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" /> SQL
                    Analysis Query
                  </span>
                  <span>PostgreSQL / ANSI SQL</span>
                </div>
                <pre className="p-3.5 text-[11px] font-mono overflow-x-auto leading-relaxed text-blue-200">
                  <code>{study.sqlSnippet}</code>
                </pre>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-100">
                <div className="px-3.5 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-emerald-400" /> Python /
                    Pandas Script
                  </span>
                  <span>Python 3 • Pandas</span>
                </div>
                <pre className="p-3.5 text-[11px] font-mono overflow-x-auto leading-relaxed text-emerald-200">
                  <code>{study.pythonSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </CaseStudyBlock>

        <CaseStudyBlock
          id="sec-10"
          title="10. Proposed Business Recommendations"
          textHeading={textHeading}
        >
          <ul
            className={`list-disc list-inside space-y-1.5 text-xs sm:text-sm ${textMuted}`}
          >
            {study.recommendations.map((rec, i) => (
              <li key={i}>{rec}</li>
            ))}
          </ul>
        </CaseStudyBlock>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CaseStudyBlock
            id="sec-11"
            title="11. Expected Business Impact (Illustrative)"
            textHeading={textHeading}
          >
            <p className={`text-xs sm:text-sm leading-relaxed ${textMuted}`}>
              {study.expectedImpact}
            </p>
          </CaseStudyBlock>

          <CaseStudyBlock
            id="sec-12"
            title="12. Limitations & Assumptions"
            textHeading={textHeading}
          >
            <ul
              className={`list-disc list-inside space-y-1.5 text-xs sm:text-sm ${textMuted}`}
            >
              {study.limitations.map((lim, i) => (
                <li key={i}>{lim}</li>
              ))}
            </ul>
          </CaseStudyBlock>
        </div>

        <CaseStudyBlock
          id="sec-13"
          title="13. What I Learned"
          textHeading={textHeading}
        >
          <p
            className={`text-xs sm:text-sm leading-relaxed italic ${textMuted}`}
          >
            "{study.whatILearned}"
          </p>
        </CaseStudyBlock>
      </div>
    </div>
  );
}

function CaseStudyBlock({ id, title, textHeading, children }) {
  return (
    <div
      id={id}
      className="scroll-mt-24 space-y-2 pb-4 border-b border-slate-200/70 dark:border-slate-800/70 last:border-none"
    >
      <h4 className={`text-sm font-bold ${textHeading}`}>{title}</h4>
      {children}
    </div>
  );
}
