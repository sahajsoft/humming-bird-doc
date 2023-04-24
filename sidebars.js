/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: {
    Introduction: ["hummingbird", "tech-decisions"],
    "Getting Started": ["getting-started/architecture"],
    Tutorial: ["tutorial/tutorial"],
    "Get Involved": [
      "get-involved/suggest-feature",
      "get-involved/contribute",
      "get-involved/roadmap",
      "get-involved/faq",
    ],
  },
};

module.exports = sidebars;
