import { CaseStudyNav, Hero, CardsRow, Steps } from "../../components/CaseStudy";
import { CAT_COLOR } from "../../styles/tokens";

export default function DENVSurveillance() {

  /* ── Challenge cards ─────────────────────────────────────────────────── */
  const challenges = [
    {
      icon: "🩺",
      title: "Asymptomatic spread",
      body: "A large proportion of infections are asymptomatic or mildly symptomatic, meaning clinical surveillance fails to capture the true prevalence of the virus.",
    },
    {
      icon: "⏱️",
      title: "Reporting delays",
      body: "Traditional clinical approaches are resource-intensive and often involve substantial reporting delays, slowing the speed of outbreak response.",
    },
    {
      icon: "🌍",
      title: "Expanding range",
      body: "Urbanisation, climate change, and international travel continuously push dengue into previously dengue-free regions, straining existing systems.",
    },
  ];

  /* ── Freyja output metric cards ──────────────────────────────────────── */
  const metrics = [
    {
      icon: "📊",
      title: "Lineage & abundance arrays",
      body: "Identified lineages listed in descending order of prevalence, each paired with a numerical abundance estimate from the demixing regression.",
    },
    {
      icon: "🗂️",
      title: "Summarized designations",
      body: "Minor sub-lineages are summed into their parent categories. Lineages below threshold are grouped as 'Other.'",
    },
    {
      icon: "📐",
      title: "Residual (resid)",
      body: "Error from the weighted least absolute deviation regression. A low residual confirms that the identified lineages accurately explain the observed mutations.",
    },
    {
      icon: "🔬",
      title: "10× coverage",
      body: "Percentage of the genome covered by at least 10 reads. Adjustable via the --covcut option for samples with lower viral loads.",
    },
  ];

  /* ── Barcode generation pipeline (Steps component) ───────────────────── */
  const barcodeSteps = [
    {
      title: "Data acquisition & pre-processing",
      content: (
        <p>
          Curated sequences and metadata are retrieved from Nextstrain, a database
          of viral genomes. These sequences represent the known genetic diversity
          of the virus across various geographical regions and time points.
        </p>
      ),
    },
    {
      title: "Sequence alignment",
      content: (
        <p>
          Individual sequences are aligned against a high-quality DENV reference
          genome using Minimap2, a versatile alignment program. This indexes every
          nucleotide position across all samples relative to a single standardised
          coordinate system.
        </p>
      ),
    },
    {
      title: "Variant calling",
      content: (
        <p>
          Differences between the sampled sequences and the reference genome are
          identified and formatted into a Variant Call Format (VCF) file. This file
          acts as a comprehensive catalog of every single nucleotide variant (SNV) and
          insertion/deletion (indel) present across the dataset.
        </p>
      ),
    },
    {
      title: "Tree-based annotation",
      content: (
        <p>
          VCF data is mapped onto a global DENV phylogenetic tree. By identifying
          mutations that consistently appear in specific branches, this step
          distinguishes genuine lineage-defining mutations from random,
          individual-level noise.
        </p>
      ),
    },
    {
      title: "Matrix/barcode formulation",
      content: (
        <>
          <p>
            Annotated mutations are compiled into a matrix where each row is a
            DENV lineage and each column is a genomic position. A binary or
            frequency-based z-score encodes mutation presence or absence, giving
            each lineage a unique genomic fingerprint. This finalized barcode allows
            Freyja to recognize that a specific set of SNVs found in a wastewater
            sample belongs to a specific DENV lineage.
          </p>
          <div className="cs-split-barcode">
            <img src="/images/work/denv/terminal.png" alt="Terminal output of barcode generation" />
            <img src="/images/work/denv/generation-process.png" alt="Barcode generation process diagram" />
          </div>
          <div className="visual">
            <img src="/images/work/denv/generation.png" alt="Barcode heatmap — Green bars (z=1) represent mutation presence" />
          </div>
        </>
      ),
    },
  ];

  /* ── Nav sections ────────────────────────────────────────────────────── */
  const sections = [
    { id: "abstract",    label: "Abstract"    },
    { id: "background",  label: "Background"  },
    { id: "methods",     label: "Methods"     },
    { id: "results",     label: "Results"     },
    { id: "discussion",  label: "Discussion"  },
  ];

  return (
    <>
      <CaseStudyNav sections={sections} />

      <main className="cs-root" style={{ "--cs-accent": CAT_COLOR.research }}>

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <Hero
          title="DENV Surveillance"
          imageSrc="/images/work/denv/poster.png"
        />

        {/* ── Abstract ──────────────────────────────────────────────────── */}
        <section id="abstract" className="cs-section">
          <div className="cs-inner">
            <h1>Abstract</h1>
            <p>
              Dengue virus (DENV) represents the greatest burden of arthropod-borne human viral disease, causing approximately 100 million symptomatic infections and 10,000 deaths annually across more than 125 countries. The environmental suitability for dengue transmission is continually expanding due to urbanization, climate change, and international travel. Traditional clinical surveillance often involves substantial reporting delays and fails to capture the full scope of outbreaks due to a large proportion of infections being asymptomatic or mildly symptomatic. Given that DENV is shed in the stool and urine of infected individuals, wastewater-based epidemiology offers a promising and scalable alternative. In this study, we outline the expansion of the Freyja tool—originally developed to estimate relative lineage abundance for SARS-CoV-2—to track DENV lineages in mixed-lineage environmental samples like wastewater. Freyja utilizes a library of lineage-defining mutations to generate "barcodes" and employs a depth-weighted, least absolute deviation regression approach to demix viral lineages. To evaluate Freyja's efficacy for DENV, we utilized an amplicon sequencing simulator to model PCR amplification and generate mixed-lineage synthetic reads from randomly selected NCBI Virus database sequences. The simulated reads were processed through Freyja, successfully yielding relative lineage abundances along with robust statistical confidence metrics. This pipeline demonstrates the feasibility of adapting existing genomic surveillance tools for DENV, facilitating early detection and more comprehensive tracking of circulating lineages globally.
            </p>
          </div>
        </section>


        {/* ── Background ────────────────────────────────────────────────── */}
        <section id="background" className="cs-section">
          <div className="cs-inner">
            <h1>Background</h1>

            <div className="cs-stat-row">
              <div className="cs-stat">
                <span className="cs-stat-num">100M+</span>
                <span className="cs-stat-label">symptomatic infections per year</span>
              </div>
              <div className="cs-stat">
                <span className="cs-stat-num">10,000</span>
                <span className="cs-stat-label">deaths annually</span>
              </div>
              <div className="cs-stat">
                <span className="cs-stat-num">125+</span>
                <span className="cs-stat-label">countries affected</span>
              </div>
              <div className="cs-stat">
                <span className="cs-stat-num">~50%</span>
                <span className="cs-stat-label">of global population at risk</span>
              </div>
            </div>

            <h2>Transmission</h2>
            <p>
              DENV is transmitted primarily by the <em>Aedes aegypti</em> mosquito.
              These mosquitoes live around human habitation, rest in dark areas, and
              preferentially lay eggs inside artificial water-holding containers.
              Because infection results in a high-titered viremia of approximately
              7 days, bloodborne transmission is also possible.
            </p>

            <h2>Global burden &amp; expanding risk</h2>
            <p>
              Dengue is characterised by cyclical epidemics every 3 to 5 years, with
              recent upsurges marked by simultaneous multi-country outbreaks. Rising
              temperatures accelerate viral amplification and increase vector survival,
              extending transmission seasons and pushing the disease into previously
              dengue-free regions.
            </p>
            <div className="cs-split-barcode">
              <img src="/images/work/denv/map.png" alt="Global dengue distribution map" />
              <img src="/images/work/denv/projection.png" alt="Projected dengue range expansion" />
            </div>

            <h2>Genetic structure</h2>
            <p>
              DENV is classified into four serotypes (DENV-1 through DENV-4) based
              on partial genetic sequences. DENV-2 and DENV-4 also encompass
              genotypes from the sylvatic cycle. Critically, infection with one
              serotype does not confer cross-protective immunity to the others —
              a key driver of severe disease in populations with prior exposure.
            </p>

            <h2>Surveillance challenges</h2>
            <p>
              Despite the scale of the dengue burden, existing surveillance
              infrastructure consistently underestimates true prevalence. Clinical
              sequencing has been the traditional backbone of outbreak tracking —
              but it comes with serious structural limitations.
            </p>

            <CardsRow items={challenges} />

            <p>
              Because a large proportion of infections are asymptomatic or mildly
              symptomatic, clinical surveillance is not expected to capture all
              cases — making an alternative approach essential.
            </p>

            <h2>Wastewater-based approach</h2>
            <p>
              Like many other viruses — including SARS-CoV-2 — dengue is shed in
              the stool and urine of infected individuals and persists in wastewater
              for days to weeks. Wastewater-based epidemiology therefore
              offers a scalable, population-level alternative to clinical sequencing
              that captures asymptomatic and symptomatic cases alike.
            </p>

            <div>
              <div className="cs-split-freyja">
                <p>
                  Freyja is a tool that was designed by the Andersen Lab to estimate
                  the relative abundance of SARS-CoV-2 lineages from mixed-lineage
                  wastewater samples. It builds on iVar and solves for lineage
                  abundance through two main steps: SNV frequency estimation and
                  depth-weighted demixing via constrained least absolute deviation
                  regression.
                </p>
                <img src="/images/work/denv/freyja.png" alt="Freyja tool logo" />
              </div>
              <p>
                  This study evaluates the methodological workflow and simulations
                  used to extend Freyja to DENV-1 through DENV-4 — creating a new
                  surveillance capability for the most common arthropod-borne viral
                  disease.
              </p>
            </div>

            {/* Pipeline overview strip */}
            <div className="cs-pipeline-summary">
              <div className="cs-pipeline-node">
                <span className="cs-pipeline-num">01</span>
                <span className="cs-pipeline-label">Barcode generation</span>
              </div>
              <div className="cs-pipeline-arrow">→</div>
              <div className="cs-pipeline-node">
                <span className="cs-pipeline-num">02</span>
                <span className="cs-pipeline-label">Mixed-lineage simulation</span>
              </div>
              <div className="cs-pipeline-arrow">→</div>
              <div className="cs-pipeline-node">
                <span className="cs-pipeline-num">03</span>
                <span className="cs-pipeline-label">Freyja demixing</span>
              </div>
              <div className="cs-pipeline-arrow">→</div>
              <div className="cs-pipeline-node">
                <span className="cs-pipeline-num">04</span>
                <span className="cs-pipeline-label">Abundance estimation</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Methods ───────────────────────────────────────────────────── */}
        <section id="methods" className="cs-section">
          <div className="cs-inner">
            <h1>Methods</h1>

            <h2>Barcode generation</h2>
            <p>
              The core of Freyja's demixing capability is the barcode library, which is a
              matrix of lineage-defining mutations. Adapting this for DENV required
              a systematic computational pipeline to transform raw genomic data into
              a structured format Freyja can interpret, using the New Lineage
              Nomenclature proposed by Hill et al. for the most granular
              epidemiologically relevant classification.
            </p>

            <Steps steps={barcodeSteps} />

            <h2>Amplicon sequencing simulations</h2>
            <p>
              To validate the DENV barcodes, an amplicon sequencing simulator was
              used to generate synthetic mixed-lineage samples that mimic the
              complexity of real wastewater. Unlike simple random sampling, this
              simulator models the biochemical biases of PCR amplification and
              sequence spreading — where certain genomic regions may be sequenced
              more deeply than others.
            </p>

            <div className="cs-sim-params">
              <div className="cs-sim-param">
                <span className="cs-sim-param-label">Sample proportions</span>
                <span className="cs-sim-param-desc">
                  Explicitly defines which percentage of the total sample belongs to
                  specific lineages — for example, 80% Lineage A and 20% Lineage B.
                </span>
              </div>
              <div className="cs-sim-param">
                <span className="cs-sim-param-label">Total reads</span>
                <span className="cs-sim-param-desc">
                  Controls sequencing depth to stress-test Freyja under low-quality
                  or low-coverage conditions representative of real wastewater.
                </span>
              </div>
              <div className="cs-sim-param">
                <span className="cs-sim-param-label">Mutation rate</span>
                <span className="cs-sim-param-desc">
                  Introduces synthetic noise to simulate natural viral evolution
                  beyond the fixed barcodes, testing robustness.
                </span>
              </div>
            </div>

            <p>
              Base sequences were randomly selected from the NCBI Virus database,
              ensuring that the ground-truth data was rooted in real-world clinical
              sequences managed by the NIH.
            </p>
            <div className="visual">
              <img src="/images/work/denv/simulation.png" alt="Simulation workflow output" />
            </div>
          </div>
        </section>

        {/* ── Results ───────────────────────────────────────────────────── */}
        <section id="results" className="cs-section">
          <div className="cs-inner">
            <h1>Results</h1>
            <p>
              Simulated reads were processed through the Freyja workflow using the
              custom DENV barcodes, the reference genome, and a primer file.
              Freyja successfully estimated relative lineage abundances from all
              mixed-lineage samples, outputting a detailed breakdown of sample
              composition along with robust statistical confidence metrics.
            </p>

            <h2>Output metrics</h2>
            <p>
              Four key metrics are reported per run, giving public health officials
              the information needed to assess reliability before acting on results.
            </p>

            <CardsRow items={metrics} />

            <p>
              The inclusion of residual values and coverage cutoffs ensures that
              public health officials can measure the reliability of abundance
              estimates before making actionable decisions.
            </p>
          </div>
        </section>

        {/* ── Discussion ────────────────────────────────────────────────── */}
        <section id="discussion" className="cs-section">
          <div className="cs-inner">
            <h1>Discussion</h1>
            <p>
              The expansion of Freyja to include dengue virus demonstrates a highly
              feasible pathway for wastewater-based genomic epidemiology. By
              successfully generating DENV-specific barcodes and retrieving accurate
              relative abundances from simulated mixed-lineage samples, this method
              proves that environmental surveillance can bypass the traditional
              bottlenecks of clinical sequencing — capturing the full scope of
              outbreaks regardless of symptom presentation.
            </p>
            <p>
              Applying this adapted Freyja workflow to real-world municipal
              wastewater samples is the critical next step in validating its utility
              for early outbreak detection and real-time tracking of dengue virus
              evolution globally.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
