import {
  CaseStudyNav,
  Hero,
  CardsRow,
  Quotes,
  Personas,
  Table,
  Steps,
  Features,
} from "../../components/CaseStudy";

export default function Presto() {
  const problems = [
    {
      icon: "🎼",
      title: "Music gets lost",
      body:
        "Without a centralized, well-organized library for sheet music, musicians struggle to keep their materials sorted by ensembles, classes, or personal projects."
    },
    {
      icon: "✏️",
      title: "Edits can be unclear",
      body:
        "Rehearsal time is wasted when musicians aren’t all on the same page about music changes and updated markings.",
    },
    {
      icon: "📲",
      title: "Multiple apps are needed",
      body:
        "Musicians need to swap between apps and devices to access tools (e.g. tuners, metronomes, sheet music) during practices, which is inconvenient and leads to wasted time.",
    }
  ];

  const quotes = [
    { side: "left",  icon: "🎷", text: "I feel annoying when I have to bother my leader for markings.", role: "SAXOPHONIST" },
    { side: "right", icon: "🎵", text: "A lot of students don't have the latest version of the score.",  role: "CONDUCTOR"   },
    { side: "left",  icon: "🪕", text: "I have five apps open during rehearsals and practice. It’s too much.", role: "PIPAIST" },
  ];

  const personas = [
    {
      title: "Cello Section Leader 🎻",
      description:
        "This person is a student of the UCLA Herb Alpert School of Music and plays in a professional youth orchestra. He’s tech-savvy, leads the cello section, and often juggles rehearsal prep with bow-marking responsibilities. He values efficiency and clarity and is often the bridge between the conductor and his section.",
      left: [
        { label: "Tech Comfort Level", value: "High" },
        { label: "Devices Used", value: "iPad Pro with Apple Pencil, iPhone" },
        { label: "Preferred Apps", value: "ForScore, Google Drive, Notability" },
      ],
      right: [
        {
          label: "Goals & Needs",
          items: [
            "Efficiently distribute and apply bowing or articulation changes across his section.",
            "Avoid manual writing; wants digital markings that sync and save time.",
            "Get notified immediately when any edits or cuts are made to scores.",
            "Quickly compare updated versions of parts or scores.",
            "Annotate shared music files without re-uploading or re-sharing them manually.",
          ],
        },
        {
          label: "Frustrations",
          items: [
            "Last-minute edits not shared with him.",
            "Rewriting bowings multiple times across printed parts.",
            "Section members using outdated scores.",
          ],
        },
      ],
    },
    {
      title: "Orchestra Director & Conductor 🎵",
      description:
        "This person is a seasoned conductor of both school and community orchestras. She’s detail-oriented, passionate about preparation, and values rehearsal time being spent on musicality, not logistics. She uses digital tools but prefers them to be simple and centralized.",
      left: [
        { label: "Tech Comfort Level", value: "Moderate" },
        { label: "Devices Used", value: "Windows Laptop, iPad" },
        { label: "Preferred Apps", value: "PDF readers, Email" },
      ],
      right: [
        {
          label: "Goals & Needs",
          items: [
            "Get a top-down dashboard of all scores and their readiness.",
            "Track who has seen edits, who’s marked up their part, and who hasn’t.",
            "Make global cuts or rehearsal notes that push instantly to the full ensemble.",
            "Avoid repetitive emailing, printing, or re-uploading new versions.",
            "Keep an archive of all score edits and rehearsal notes.",
          ],
        },
        {
          label: "Frustrations",
          items: [
            "Not knowing who is using the wrong version.",
            "Endless rounds of emailing PDFs.",
            "Wasting time in rehearsals clarifying logistics.",
          ],
        },
      ],
    },
  ];

  const insights = [
    {
      icon: "🎼",
      title: "Shareable music library",
      body:
        "Access your sheet music anytime, anywhere. Directors upload once and performers can instantly retrieve parts from a centralized library. No more sifting through outdated emails or broken links!",
    },
    {
      icon: "✏️",
      title: "Annotation and practice tools",
      body:
        "Presto includes stamps for annotations that are typically made by musicians. Built-in practice tools ensure musicians stay in-tune and on-tempo during practices.",
    },
    {
      icon: "🔁",
      title: "Transferable notetaking",
      body:
        "Annotations appear on transparent, toggle-able layers so that users can pick and choose the notes they want to see. No more messy photocopies or irrelevant edits!",
    }
  ];

  const tableColumns = [
    { key: "phase", label: "Phase", rowLabel: true },
    { key: "doing", label: "What is the user doing?" },
    { key: "using", label: "What can Presto do?" },
  ];

  const tableRows = [
    {
      phase: "Pre-Rehearsal",
      doing: [
        "Finding music for rehearsal",
        "Marking down key points in the music",
      ],
      using: [
        "Scans of the music are available to the user",
        "Key points are already flagged by the conductor",
      ]
    },
    {
      phase: "During Rehearsal",
      doing: [
        "Tuning their instrument using an app on their phone",
        "Marking down changes from the conductor",
      ],
      using: [
        "Tune their instrument using the built-in tuner",
        "Automatically see annotations from section-mates"
      ]
    },
    {
      phase: "Post-Rehearsal",
      doing: [
        "Reviewing markings from rehearsal",
        "Photocopying and taking photos of markings for absent friends"
      ],
      using: [
        "Review markings from rehearsal from section leader",
        "Send a transparent layer of notes to friends"
      ]
    },
    {
      phase: "Individual Practice Time",
      doing: [
        "Using tuner, drone, and metronome to prepare for practice",
        "Copying down notes from rehearsal because they were sick"
      ],
      using: [
        "Use the built-in tuner, drone, and metronome to prepare for practice",
        "Import notes from section-mates to update their sheet music"
      ]
    },
    {
      phase: "Pre-Rehearsal (Again)",
      doing: [
        "Finding music for new changes that the director sent out",
        "Trying to find the message in the group chat about part changes"
      ],
      using: [
        "See the changes from the director",
        "See comments from the section leader about part changes on the file"
      ]
    }
  ];

  const features = [
    {
      imageSrc: "/images/work/presto/invite.png",
      title: "Shareable music library",
      description: "Musicians can instantly access their music from a centralized library. Directors upload parts once and members can retrieve them without digging through email threads or dealing with broken links."
    },
    {
      imageSrc: "/images/work/presto/practice.png",
      title: "Annotation and practice tools",
      description: "With an intuitive suite of musical markup tools, players can add bowings, fingerings, dynamics, and reminders right on their music. No more pencil smudges or lost paper notes.\nBuilt-in practice tools like a metronome, tuner, and drone help musicians stay in-tune, on-time, and fully prepared for rehearsal.",
    },
    {
      imageSrc: "/images/work/presto/notes.png",
      title: "Transferable Note-Taking",
      description: "Whether it’s a sectional or full ensemble, musicians can annotate in real time during rehearsal. Notes are shared on transparent, customizable layers, meaning each musician can pick and choose which markings to keep."
    }
  ];

  const steps = [
    {
      title: "Brainstorming features",
      content: (
        <>
          <p>
            Using core principles as a guide, we brainstormed features from interviews and our own
            experience as musicians. In a collaborative whiteboard session, we identified common pain points like
            messy part markings and last-minute edits. These insights led to ideas like real-time annotations,
            built-in metronomes, and smarter music libraries.
          </p>
          <div className="cs-visual">
            <img
              src="/images/work/presto/brainstorm.png"
              alt="Whiteboard session for brainstorming features"
            />
          </div>
        </>
      ),
    },
    {
      title: "Mapping out user flows",
      content:
      <>
        <p>
          After brainstorming features grounded in real musician needs, we moved on to mapping the core user journey
          for a typical rehearsal: accessing music, making annotations, and sharing updates with section members.
          Our goal was tho make this flow intuitive and fast, reducing the friction musicians often face during practice.
        </p>
        <Table
            columns={tableColumns}
            rows={tableRows}
            className="cs-table-container"
        />
      </>
    },
    {
      title: "Lo-fi and mid-fi designs",
      content: <p>Usability testing confirmed clearer flow, improved trust, and faster completion.</p>,
    },
    {
      title: "Design system",
      content:
      <>
        <div className="cs-visual">
          <img
            src="/images/work/presto/design-system.png"
            alt="Design system"
          />
        </div>
        <br></br>
        <p>
          Our logo is inspired by the visual language of musical notation. We used the clean lines of note stems, ties, and dynamic markings to
          create a form that feels familiar to musicians yet modern and minimal. The name Presto, meaning “very fast” in musical terms,
          perfectly aligns with our mission to streamline rehearsals and reduce friction in ensemble workflows. Just like the tempo marking,
          Presto represents speed, clarity, and forward momentum—all reflected in both our design and product philosophy.
        </p>
        <div className="cs-logo-split">
          <img
            src="/images/work/presto/logo-ideas.png"
            alt="Logo ideas"
          />
          <img
            src="/images/work/presto/logo.png"
            alt="Logo"
          />
        </div>
      </>
    },
  ];

  const sections = [
    { id: "problem",       label: "Problem"       },
    { id: "research",      label: "Research"      },
    { id: "process",       label: "Process"       },
    { id: "final-designs", label: "Final Designs" },
    { id: "prototype",     label: "Prototype"     },
  ];

  return (
    <>
      <CaseStudyNav sections={sections} />

      <main className="cs-root" style={{ "--cs-accent": "#1E1F65" }}>
        <Hero
          title="Presto"
          imageSrc="/images/work/presto/hero.png"
        />

        <section id="problem" className="cs-section">
          <div className="cs-inner">
            <h1>The Problem</h1>
            <p>Musicians often lose valuable rehearsal time due to fragmented tools and disorganized workflows.</p>
            <CardsRow items={problems} />
          </div>
        </section>

        <section id="research" className="cs-section">
          <div className="cs-inner">
            <h1>Research</h1>
            <h2>Confirming the problem</h2>
            <p>We interviewed 9 musicians and directors across ensembles, jazz groups, and university orchestras. Our early discovery process revealed consistent frustrations.</p>

            <Quotes quotes={quotes} />

            <div className="cs-persona-section">
              <h2>User personas</h2>
              <p>Using our interviews, we developed key personas to represent different user needs. These personas capture the goals, frustrations, and workflows of core users such as section leaders and conductors. They help guide product decisions by ensuring Presto addresses real, high-impact pain points in ensemble coordination.</p>

              <Personas personas={personas} />
            </div>

            <div id="competitor-analysis" className="cs-competitor">
              <h2>Competitor Analysis</h2>
              <p>
                Before jumping into designing, we analyzed existing tools that musicians commonly use for rehearsals.
              </p>


              <section className="competitor-section">
                <div className="cs-competitor-grid">
                  <div className="cs-competitor-visual">
                    <img
                      src="/images/work/presto/competitor-analysis.png"
                      alt="Competitor analysis quadrant comparing collaboration and musician-centered focus"
                    />
                  </div>

                  <div className="cs-quadrant q1">
                    <h3>Presto</h3>
                    <ul>
                      <li>✅ Built-in music tools (tuner, metronome, annotation layers).</li>
                      <li>✅ Direct note sharing without re-uploads.</li>
                      <li>✅ Organized and version-safe file library.</li>
                    </ul>
                  </div>

                  <div className="cs-quadrant q2">
                    <h3>Google Drive</h3>
                    <ul>
                      <li>✅ Easy to share files and folders.</li>
                      <li>✅ Real-time updates.</li>
                      <li>❌ No music tools or annotation features.</li>
                    </ul>
                  </div>

                  <div className="cs-quadrant q3">
                    <h3>Goodnotes & Notability</h3>
                    <ul>
                      <li>✅ Great for general PDF markup and handwriting.</li>
                      <li>❌ No music tools.</li>
                      <li>❌ No real-time sharing or version control.</li>
                    </ul>
                  </div>

                  <div className="cs-quadrant q4">
                    <h3>ForScore</h3>
                    <ul>
                      <li>✅ Excellent annotation and page-turning tools.</li>
                      <li>❌ No file sharing or coordination tools.</li>
                      <li>❌ Expensive for ensembles ($24.99 per user).</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            <div className="cs-insights">
              <h2>Insights</h2>
              <p>We decided to focus on features that streamline rehearsals so Presto could stand out. We planned to combine the best of existing tools and tailor it for real-time musical collaboration.</p>
              <CardsRow items={insights} />
            </div>
          </div>
        </section>


        <section id="process" className="cs-section">
          <div className="cs-inner">
            <h1>The Process</h1>
            <Steps steps={steps} />
          </div>
        </section>

        <section id="final-designs" className="cs-section">
          <div className="cs-inner">
            <h1>Final Designs</h1>
            <br></br>
            <Features items={features} />
          </div>
        </section>

        <section id="prototype" className="cs-section">
          <div className="cs-inner">
            <h1>Prototype</h1>
            <div className="cs-demo">
              <img
                src="/images/work/presto/demo.gif"
                alt="Full application walkthrough"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
