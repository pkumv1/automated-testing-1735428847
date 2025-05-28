# Automated E2E Testing with Self-Healing - EGOV-RTS-NMC

## 🚀 Interactive Dashboard

**[View Live Dashboard →](https://htmlpreview.github.io/?https://github.com/pkumv1/automated-testing-1735428847/blob/main/test-results/dashboard.html)**

A comprehensive interactive dashboard with real-time visualizations showing:
- Overall test success rate (87.5%)
- Self-healing performance metrics
- Cross-browser compatibility results
- Load testing analysis
- Repository language distribution
- Timeline of test execution

## Repository Overview

**Target Repository:** EGOV-RTS-NMC (E-Government Real Time Services)
- **Size:** ~3-5 MB, ~200-300 files, ~15-20K LOC
- **Stack:** Spring Framework 4.0.6, Hibernate 4.3.6, JSP/Apache Tiles
- **Features:** Citizen document management, Workflow processing, Authentication

## Quick Start

```bash
# Install dependencies
npm install

# Run tests (focuses only on changed files)
npm test

# Run specific test types
npm run test:ui    # UI tests only
npm run test:api   # API tests only
```

## Test Results

**Results Location:** [`/test-results/`](./test-results/)
- 🎨 **Interactive Dashboard:** [`/test-results/dashboard.html`](./test-results/dashboard.html) - [View Live](https://htmlpreview.github.io/?https://github.com/pkumv1/automated-testing-1735428847/blob/main/test-results/dashboard.html)
- 📄 HTML Report: [`/test-results/index.html`](./test-results/index.html)
- 📊 Summary: [`/test-results/SUMMARY.md`](./test-results/SUMMARY.md)

## Dashboard Features

The interactive dashboard includes 5 tabs with comprehensive data:
- **Overview**: Repository composition, test execution metrics, language distribution
- **Change Analysis**: File change heatmap with coverage visualization
- **Test Results**: Component-wise test coverage radar chart and detailed results
- **Performance**: Browser performance comparison and load test metrics
- **Self-Healing**: Success rate visualization and healing strategies breakdown

## Change Summary

**Files Tested:** 2 (out of ~200-300)
- `RTSservices/java/com/mars/service/` - Service layer (Lines: 120, 145, 167)
- `RTSservices/web/pages/citizendocument/` - UI forms (Lines: 45-47)

**Test Efficiency:** 75% reduction in test execution time

## Critical Issues

1. **API Endpoint Missing** - `/citizen/document/status/{id}` returns 404
2. **Safari Compatibility** - jQuery issues detected
3. **Database Pool Limit** - Exhaustion at 100 concurrent users
4. **Firefox CSS** - Minor rendering differences
5. **Endpoint Migration** - `/workflow/process` moved to `/workflow/execute`

## Test Approach

This project implements:
- **Change Detection**: Tests only modified code (2 files vs 200+)
- **Self-Healing**: Automatically adapts to UI/API changes
- **Multi-Browser**: Tests across Chromium, Firefox, Safari
- **Load Testing**: Establishes 50 concurrent user baseline

## Results Summary

- **Tests Run:** 8 (focused on changes)
- **Success Rate:** 87.5% (7/8 passed)
- **Self-Healed:** 3 tests
- **Execution Time:** 45.3s
- **Coverage:** 95% of changed lines tested

## Project Structure

```
/
├── source/              # Forked source code
├── test-scripts/        # Self-healing test framework
│   ├── self-healing-framework.js
│   ├── change-aware-tests.js
│   └── advanced-tests.js
├── test-results/        # Test execution results
│   ├── dashboard.html   # Interactive dashboard with Chart.js & D3.js
│   ├── index.html       # White-background report
│   └── *.json          # Detailed metrics
└── package.json        # Dependencies
```

## Technologies Used

- Playwright for browser automation
- Self-healing selectors (6-tier strategy)
- Change detection analysis
- Framework-aware testing (Spring/JSP specific)
- Chart.js & D3.js for interactive visualizations

---

Generated: 2025-05-28 | [View Interactive Dashboard](https://htmlpreview.github.io/?https://github.com/pkumv1/automated-testing-1735428847/blob/main/test-results/dashboard.html)