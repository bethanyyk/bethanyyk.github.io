import React, { useState } from 'react';
import './Courses.css';

const courses = {
  "Computer Science": [
    {
      key: "COM SCI 31",
      title: "Introduction to Computer Science I",
      details: ["Introduction to computer science via theory, applications, and programming. Basic data types, operators and control structures. Input/output. Procedural and data abstraction. Introduction to object-oriented software development. Functions, recursion. Arrays, strings, pointers. Abstract data types, object-oriented programming."]
    },
    {
      key: "COM SCI 32",
      title: "Introduction to Computer Science II",
      details: ["Object-oriented software development. Abstract data type definition and use. Overloading, inheritance, polymorphism. Object-oriented view of data structures: stacks, queues, lists. Algorithm analysis. Trees, graphs, and associated algorithms. Searching and sorting."]
    },
    {
      key: "COM SCI 33",
      title: "Introduction to Computer Organization",
      details: ["Introductory course on computer architecture, assembly language, and operating systems fundamentals. Number systems, machine language, and assembly language. Procedure calls, stacks, interrupts, and traps. Assemblers, linkers, and loaders. Operating systems concepts: processes and process management, input/output (I/O) programming, memory management, file systems."]
    },
    {
      key: "COM SCI 35L",
      title: "Software Construction",
      details: "Fundamentals of tools and environments for software construction projects, particularly open-source platforms used in upper-division computer science courses. Software practice through collaborative student project."
    }
  ],
  "Mathematics": [
    {
      key: "MATH 31A",
      title: "Differential and Integral Calculus",
      details: ["Differential calculus and applications; introduction to integration."      ]
    },
    {
      key: "MATH 31B",
      title: "Integration and Infinite Series",
      details: ["Transcendental functions; methods and applications of integration; sequences and series."]
    },
    {
      key: "MATH 33A",
      title: "Linear Algebra and Applications",
      details: ["Introduction to linear algebra: systems of linear equations, matrix algebra, linear independence, subspaces, bases and dimension, orthogonality, least-squares methods, determinants, eigenvalues and eigenvectors, matrix diagonalization, and symmetric matrices."]
    },
    {
      key: "MATH 33B",
      title: "Differential Equations",
      details: ["First-order, linear differential equations; second-order, linear differential equations with constant coefficients; power series solutions; linear systems."]
    },
    {
      key: "MATH 61",
      title: "Introduction to Discrete Structures",
      details: ["Discrete structures commonly used in computer science and mathematics, including sets and relations, permutations and combinations, graphs and trees, induction."]
    },
    {
      key: "MATH 70",
      title: "Introduction to Probability",
      details: ["Introduction to probability through applications and examples. Topics include laws of large numbers, statistics, chance trees, conditional probability, Bayes' rule, continuous and discrete random variables, jointly distributed random variables, multivariate normal and conditional distributions."]
    },
    {
      key: "STATS 10",
      title: "Integration and Infinite Series",
      details: ["Introduction to statistical thinking and understanding, including strengths and limitations of basic experimental designs, graphical and numerical summaries of data, inference, regression as descriptive tool."]
    }
  ],
  "Cognitive Science": [
    {
      key: "PSYCH 10",
      title: "Introductory Psychology",
      details: ["General introduction including topics in cognitive, experimental, personality, developmental, social, and clinical psychology."]
    },
    {
      key: "PSYCH 85",
      title: "Introduction to Cognitive Science ",
      details: ["Exploration of computer metaphor of mind as an information-processing system, focusing especially on perception, knowledge representation, and thought based on research in cognitive psychology, neuropsychology, and artificial intelligence."]
    },
    {
      key: "PSYCH 100A",
      title: "Psychological Statistics",
      details: ["Basic statistical procedures and their application to research and practice in various areas of psychology."]
    },
    {
      key: "PSYCH 100B",
      title: "Research Methods in Psychology",
      details: "Introduction to research methods and critical analysis in psychology. Lecture and laboratory topics include experimental and nonexperimental research methods, statistical design and analysis as applied to a broad range of basic and applied research issues."
    },
    {
      key: "PSYCH 120A",
      title: "Cognitive Psychology",
      details: ["Survey of cognitive psychology: how people acquire, represent, transform, and use verbal and nonverbal information. Perception, attention, imagery, memory, representation of knowledge, language, action, decision making, thinking."]
    },
    {
      key: "PHILOS 31",
      title: "Logic, First Course",
      details: ["Elements of symbolic logic, sentential and quantificational; forms of reasoning and structure of language."]
    }
  ],
  "Linguistics": [
    {
      key: "LING 20",
      title: "Introduction to Linguistic Analysis",
      details: "Introduction to theory and methods of linguistics: universal properties of human language; phonetic, phonological, morphological, syntactic, and semantic structures and analysis; nature and form of grammar."
    }
  ],
  "Life Sciences": [
    {
      key: "LIFESCI 7A",
      title: "Cell and Molecular Biology",
      details: "Introduction to basic principles of cell structure and cell biology, biochemistry, and molecular biology."
    },
    {
      key: "LIFESCI 7B",
      title: "Genetics, Evolution, and Ecology",
      details: "Principles of Mendelian inheritance and population genetics. Introduction to principles and mechanisms of evolution by natural selection, population, behavioral, and community ecology, and biodiversity, including major taxa and their evolutionary, ecological, and physiological relationships."
    },
    {
      key: "LIFESCI 7C",
      title: "Physiology and Human Biology",
      details: "Organization of cells into tissues and organs and principles of physiology of organ systems. Introduction to human genetics and genomics."
    },
    {
      key: "CHEM 20A",
      title: "Chemical Structure",
      details: "Survey of chemical processes, quantum chemistry, atomic and molecular structure and bonding, molecular spectroscopy."
    },
    {
      key: "CHEM 20B",
      title: "Chemical Energetics and Change",
      details: "Intermolecular forces and organization, phase behavior, chemical thermodynamics, solutions, equilibria, reaction rates and laws."
    },
    {
      key:"CHEM 20L",
      title: "General Chemistry Laboratory",
      details: "Use of balance, volumetric techniques, volumetric and potentiometric analysis; Beer's law, applications for environmental analysis and materials science."
    },
    {
      key: "PHYSICS 5A",
      title: "Mechanics and Energy",
      details: "Statics and dynamics of forces, motion, energy, including thermal energy, with applications to biological and biochemical systems."
    },
    {
      key: "PHYSICS 5B",
      title: "Thermodynamics, Fluids, Waves, Light, and Optics",
      details: "Thermal properties of matter, free energy, fluids, ideal gas, diffusion, oscillations, waves, sounds, light, and optics, with applications to biological and biochemical systems."
    },
    {
      key: "PHYSICS 5C",
      title: "Electricity, Magnetism, and Modern Physics",
      details: "Electrostatics in vacuum and in water. Electricity, circuits, magnetism, quantum, atomic and nuclear physics, radioactivity, with applications to biological and biochemical systems."
    },
    {
      key: "C&S BIO 10",
      title: "Preparation for Research in Computational Biology",
      details: "Students are introduced to computational tools for carrying out research in computational biology, including basic statistics, Python, R, and UNIX."
    },
    {
      key: "C&S BIO M184",
      title: "Introduction to Computational and Systems Biology",
      details: "Survey course designed to introduce students to computational and systems modeling and computation in biology and medicine. Presentations by individual UCLA researchers discussing their active computational and systems biology research."
    },
    {
      key: "EPIDEM 100",
      title: "Principles of Epidemiology",
      details: "Introductory course to provide qualified undergraduate students with broad and comprehensive overview of concepts of epidemiology including evaluating public health problems in terms of magnitude, person, time and place; critiquing epidemiologic studies; identifying and accessing key sources of data for epidemiologic assessment; and using epidemiologic methods and calculating basic epidemiology measures for operational purposes."
    }
  ]
};

function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('Computer Science'); // Default category
  const categories = ['Computer Science', 'Mathematics', 'Cognitive Science', 'Linguistics', 'Life Sciences'];

  return (
    <div className="container">
      <div className="radio-inputs">
        {categories.map((category) => (
          <label
            className="radio"
            key={category}
            data-category={category.replace(/\s+/g, '-').toLowerCase()}
          >
            <input
              type="radio"
              name="category"
              checked={selectedCategory === category}
              onChange={() => setSelectedCategory(category)}
            />
            <span className="name">{category}</span>
          </label>
        ))}
      </div>

      <div
        className="courses"
        data-category={selectedCategory.replace(/\s+/g, '-').toLowerCase()}
      >
        {courses[selectedCategory].map((course, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="key">{course.key}</p>
                <h3 className="title">{course.title}</h3>
              </div>
              <div className="flip-card-back">
                  <p>{course.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;