import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-grid">

        {/* Tenet Healthcare */}
        <div className="experience-card">
          <h3>Data Engineer Intern</h3>
          <h4>Tenet Healthcare</h4>
          <p className="experience-date-location">June 2025 – Present · Dallas, TX (Remote)</p>
          <ul>
            <li>Developed and optimized Big Query stored procedures processing (specific) GBs of raw data daily, reducing transformation times by 20%.</li>
            <li>Built end-to-end ETL workflows in Apache Airflow & Cloud Composer with 99% pipeline uptime.</li>
            <li>Streamlined the file ingestion framework and report table generation, providing accountable insights for analytics team.</li>
            <li>Automated 5+ Python scripts and Cloud Functions to streamline custom ETL workflow, improving file ingestion efficiency.</li>
          </ul>
        </div>

        {/* USF Research Assistant */}
        <div className="experience-card">
          <h3>Graduate Student Research Assistant</h3>
          <h4>University of South Florida</h4>
          <p className="experience-date-location">Mar 2025 – May 2025 · Tampa, FL</p>
          <ul>
            <li>Researched Connected Vehicle data to identify 10+ pedestrian-vehicle conflicts using V2I/V2V, enhancing traffic flow and safety.</li>
            <li>Constructed an interactive Tableau dashboard for real-time roadway telemetry, combining geospatial congestion maps, travel-time metrics, and speed/count visualizations.</li>
            <li>Automated dashboard refresh via SharePoint uploads, enabling new data to update every 5 minutes.</li>
          </ul>
        </div>

        {/* Accenture */}
        <div className="experience-card">
          <h3>Data Engineer</h3>
          <h4>Accenture</h4>
          <p className="experience-date-location">Feb 2023 – Aug 2024 · Chennai, India</p>
          <ul>
            <li>Architected and implemented a Snowflake data warehouse, designing star and snowflake schemas and building dimension and fact tables to power supply-chain analytics.</li>
            <li>Created ELT pipelines in Python Apache Airflow to ingest raw files from AWS S3 into Snowflake staging areas, then transform and load into production schemas.</li>
            <li>Enhanced Snowflake performance with clustering keys, materialized views, and enhanced SQL stored procedures, reducing average query runtimes by 40%.</li>
          </ul>
        </div>

        {/* Cognizant Full-Time */}
        <div className="experience-card">
          <h3>ERP Data Analyst</h3>
          <h4>Cognizant</h4>
          <p className="experience-date-location">June 2021 – Feb 2023 · Chennai, India</p>
          <ul>
            <li>Formulated complex workflows with SAP (BRF+), optimizing master data management processes (Customer, Vendor, Finance), for a pharmaceutical client, resulting in a 21% improvement in system integration across sales, purchasing, and finance systems.</li>
            <li>Created custom reports in ABAP, leveraging SAP queries, CDS views, and ALV grids to provide real-time business insights.</li>
            <li>Configured customer/vendor master data management via SAP configuration changes, implementing company code controls and slashed data discrepancies by 25%, improving audit compliance.</li>
          </ul>
        </div>

        {/* Cognizant Intern */}
        <div className="experience-card">
          <h3>Data Analyst Intern</h3>
          <h4>Cognizant</h4>
          <p className="experience-date-location">Jan 2021 – June 2021 · Remote</p>
          <ul>
            <li>During my 6-month internship at Cognizant, I received training in key areas such as Machine Learning (ML), Python, SQL, Oracle SQL and Deep Learning (DL). I quickly applied these skills in a challenging project, where I leveraged advanced data analytics techniques to solve real-world business problems.</li>
            <li>The project I was assigned involved end-to-end data processing of COVID-19 dataset. This involved data preprocessing, model development, and performance evaluation to predict virus status. I successfully delivered the project ahead of schedule, I was awarded an early graduation from the internship program, which fast-tracked my transition to a full-time role at Cognizant.</li>
          </ul>
        </div>

        {/* TVS Supply Chains */}
        <div className="experience-card">
          <h3>Data Analyst Intern</h3>
          <h4>TVS Supply Chains and Solutions</h4>
          <p className="experience-date-location">Dec 2019 – Jan 2020 · Chennai, India</p>
          <ul>
            <li>Engineered an ETL pipeline with Python for TVS supply chain data, identifying features like toll charges, fuel costs, and web-scraped data reducing reporting errors by 22%.</li>
            <li>Conducted exploratory data analysis (EDA) using statistical techniques and visualizations in Matplotlib and Seaborn, identifying correlations, seasonal patterns, and outliers that influenced logistic costs.</li>
            <li>Implemented a cost-optimization model using regression, reducing shipping expense by 15% through enhanced logistics planning.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Experience;
