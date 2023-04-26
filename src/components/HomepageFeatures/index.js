import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Bootstrap infrastructure",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        humming:bird helps you to bootstrap your platform infrastructure from
        the ground up. Focuse on solving your business problems, not the
        infrastructure.
      </>
    ),
  },
  {
    title: "Convention over configuration",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        humming:bird lets you focus on your platform, and we&apos;ll do the
        chores. Chose from a wide range of tools and configuration to build your
        platform.
      </>
    ),
  },
  {
    title: "Powered by Open Source",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        No vendor lock-in. humming:bird is powered by open source tools and
        technologies. You can always migrate to other tools and technologies.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
