import React from 'react';
import './Skills.css';
import { FaCode, FaCloud, FaCogs, FaChartLine, FaTools, FaDatabase } from 'react-icons/fa';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3><FaCode /> Programming Languages</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>SQL</li>
            <li>Git</li>
            <li>Data Structures & Algorithms</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3><FaCode /> Libraries & Frameworks</h3>
          <ul>
            <li>Pandas, NumPy</li>
            <li>Scikit-learn</li>
            <li>TensorFlow</li>
            <li>Apache Spark</li>
            <li>Matplotlib, Seaborn</li>
            <li>Oracle SQL</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3><FaCloud /> Cloud & Big Data</h3>
          <ul>
            <li>GCP (BigQuery, Dataflow, Pub/Sub, Composer)</li>
            <li>AWS (S3, Lambda, Glue)</li>
            <li>Snowflake</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3><FaCogs /> Data Engineering </h3>
          <ul>
            <li>Apache Airflow</li>
            <li>ETL (Glue, Dataflow)</li>
            <li>Cloud Functions</li>
            <li>Data Modeling (Star/Snowflake, Normalization)</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3><FaChartLine /> Analytics & Machine Learning</h3>
          <ul>
            <li>Exploratory Data Analysis</li>
            <li>Predictive Modeling</li>
            <li>Statistical Modeling</li>
            <li>NLP, Anomaly Detection</li>
            <li>Model Evaluation, Cross-Validation</li>
            <li>Power BI, Tableau</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3><FaTools /> DevOps & Tools</h3>
          <ul>
            <li>Docker</li>
            <li>Terraform</li>
            <li>CI/CD (Cloud Build, Jenkins)</li>
            <li>IAM, CloudWatch</li>
            <li>JIRA, Agile</li>
          </ul>
        </div>

        {/* <div className="skill-category">
          <h3><FaDatabase /> Data Structures & Algorithms</h3>
          <ul>
            <li>Arrays, HashMaps, Stacks, Trees</li>
            <li>Two Pointers, Sliding Window</li>
            <li>Recursion, Dynamic Programming</li>
            <li>LeetCode Top 150</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}

export default Skills;
