import React from 'react';
import './Resume.css';
import { ResumeCard, BoringResumeCard } from '../components/ResumeCard.js';
import Courses from '../components/Courses.js';

function Resume() {
  return (
    <div className="resume-page">
      {/* Internships Section */}
      <div>
        <h1>Work Experience</h1>
        <div className="internships">
          <ResumeCard
            title="Research Intern @ Scripps Research"
            description="The Andersen Lab uses pathogen genomics to investigate how viruses evolve and cause large-scale outbreaks."
            details={[
              "Expanded Freyja, a wastewater-based genomic surveillance analysis tool, to allow users to recover the relative abundance of dengue virus lineages in a sample.",
              "Developed continuous growth analytics that include both clinical and wastewater data in order to measure the intensity of outbreaks more accurately."
            ]}
            img="project-cards/scripps.png"
            projectname="Research Poster"
            link="/projects"
          />
        </div>
      </div>

      {/* Extracurriculars Section */}
      <div>
        <h1>Extracurricular Activities</h1>
        <div className="extracurriculars">
          <BoringResumeCard
            title="Research Associate @ UCLA CTSI"
            description="The UCLA CTSI Research Associates Program (CTSI-RAP) provides undergraduate students with the opportunity to gain exposure to hospital-based medicine as well as clinical research in an academic medical center."
            details={[ ]}
          />
          <ResumeCard
            title="Data Analyst @ Biokind Analytics at UCLA"
            description="Biokind Analytics provides data analytics and statistical modeling services to healthcare nonprofits in the Los Angeles area."
            details={[
              "Clean and analyze donor data, patient/client data, and event-specific data.",
              "Create data visualizations that help the organization better understand their data."
            ]}
            img="project-cards/opica.png"
            projectname="OPICA Donor Analysis"
            link="/projects"
          />
          <ResumeCard
            title="Data Journalist @ Bruin Sports Analytics"
            description="Bruin Sports Analytics is a student-run sports statistics organization that serves as a platform for sports research, consulting, and journalism."
            details={[
              "Write short articles about sports that are driven by data science and statistics.",
              "Create data visualizations.",
            ]}
            img="project-cards/bsa.png"
            projectname="BSA Articles"
            link="/projects"
          />
          <ResumeCard
            title="Design Consultant @ Bear Consulting"
            description="Bear Consulting provides pro-bono consulting services in the dimensions of strategy, marketing, and design."
            details={[
              "Develop visual identities, user interfaces, and cohesive website designs for clients.",
              "Ensure that the brand's visual presence is engaging, functional, and aligned with user experience expectations.",
            ]}
            img="project-cards/geffen-merch.png"
            projectname="Geffen Merch"
            link="/projects"
          />
          <ResumeCard
            title="UI/UX Designer @ UCLA DevX"
            description="DevX brings students together to work on software projects that improve the livelihoods of their fellow Bruins."
            details={[
              "Create wireframes and low and high-fidelity prototypes.",
              "Work closely with frontend developers to render prototypes. Work with the PM and marketing team to design promotional material."
            ]}
            img="project-cards/trek.png"
            projectname="Trek"
            link="/projects"
          />
          <BoringResumeCard
            title="Undergraduate Researcher @ UCLA Department of Medical and Molecular Pharmacology"
            description="Dr. Li’s team studies the role of the human microbiome in important diseases using genomics, metagenomics, bioinformatics, and microbiology approaches."
            details={[
              "Explore relationships between metadata and diversity metrics, create data visualizations, and perform statistical tests for significance for microbiome data."
            ]}
          />
          <ResumeCard
            title="Design Director @ ACM at UCLA"
            description="ACM Design is responsible for designing, managing, and supporting the visual identity of ACM at UCLA."
            details={[
              "Apply ACM’s branding and style to create graphics.",
              "Prepare and present workshops about UI/UX design.",
              "Lead website design and development projects."
            ]}
            img="project-cards/acm-requests.png"
            projectname="ACM Design Requests"
            link="/projects"
          />
          <ResumeCard
            title="Data Journalist @ Daily Bruin"
            description="The Stack is Daily Bruin’s newsroom tech blog that investigates public data, experiments with technology, and applies quantitative insights to real life."
            details={[
              "Analyze large datasets and create interactive data visualizations.",
              "Write articles that explain data-driven insights."
            ]}
            img="project-cards/db.png"
            projectname="DB Articles"
            link="/projects"
          />
        </div>
      </div>

      {/* Courses Section */}
      <div>
        <h1>Coursework</h1>
        <Courses />
      </div>
    </div>
  );
}

export default Resume;