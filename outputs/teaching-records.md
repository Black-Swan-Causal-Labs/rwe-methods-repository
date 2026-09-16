# Teaching records — MVP v0.2
Audience: trainee with basic epidemiology knowledge. All 30 selected readings are included. All summaries and mappings are provisional.

## A01 · Interpreting P values, confidence intervals, and power
[Publication](https://doi.org/10.1007/s10654-016-0149-3) · Evidence basis: full text; cited teaching sections inspected

This paper explains why familiar statistical outputs are often interpreted too strongly. A P value concerns how unusual a test statistic would be under a set of assumptions; it does not assign a probability to the hypothesis. A nonsignificant result does not establish no effect, and statistical significance does not establish practical importance. Confidence levels concern the repeated-use performance of an interval procedure. Learners should examine effect estimates, uncertainty, assumptions, and the actual comparison of interest instead of relying on a threshold alone.

Competencies: C13, C41, C09

**My P value is above 0.05. Does that mean there is no effect?**
No. It means the result did not cross that threshold under the test assumptions. It does not establish an effect of zero. Examine the estimated effect, its uncertainty, and the assumptions before deciding what the findings support.

**One group has a significant result and another does not. Do their effects differ?**
Those labels alone cannot establish a difference between the effects. Assess the difference directly, using an appropriate estimate and uncertainty interval or comparison test. Different precision can produce different P values even when the estimated effects agree.

## A02 · Representativeness and the research question
[Publication](https://doi.org/10.1093/ije/dys223) · Evidence basis: Full-text discussion

This viewpoint distinguishes describing a population from learning about a causal mechanism. Representative sampling can serve descriptive aims, but does not itself establish a valid causal comparison. The authors emphasize controlled comparisons and understanding when effects vary. Read this as an argument about research aims, rather than a rule to disregard the population to which results will be applied.

Competencies: C19, C30, C41

**Does a representative sample guarantee a valid causal study?**
No. Representativeness alone does not establish a valid causal comparison. This paper distinguishes population description from scientific generalization and emphasizes the conditions under which findings apply.

## A03 · Making the causal question explicit
[Publication](https://doi.org/10.2105/ajph.2018.304337) · Evidence basis: Abstract

This commentary argues that researchers should clearly state when their objective is causal. Calling an intended causal estimate merely an association can obscure the question and its interpretation. Explicit objectives help align the analysis with the question; wording alone does not supply the evidence needed for a causal conclusion.

Competencies: C11, C39

**Why explicitly state a causal objective?**
The commentary argues that an explicit causal objective reduces ambiguity in the question, analysis, and interpretation. Describing an objective as causal does not by itself validate the resulting estimate.

## A04 · Designing useful comparisons in real-world data
[Publication](https://doi.org/10.1093/rheumatology/kez320) · Evidence basis: Abstract

This overview emphasizes design before statistical adjustment. It discusses starting follow-up at treatment initiation, comparing treatment alternatives, and accounting for induction and latency. Consistent definitions of treatment initiation and follow-up help prevent immortal-time bias. Propensity scores address measured covariate differences; their use does not remove the need for a sound design.

Competencies: C30, C14

**Can propensity-score adjustment replace careful study design?**
No. The overview emphasizes new-user designs, active comparators, and consistent timelines as design choices. Propensity scores can balance measured covariates but do not replace those choices.

## A05 · Thinking through causation
[Publication](https://doi.org/10.1177/003591576505800503) · Evidence basis: Selected scanned pages

In the scanned pages inspected, Hill asks how evidence of association contributes to a causal judgment. He presents viewpoints to consider, rather than an automatic checklist that proves causation. The discussion emphasizes weighing the evidence and alternative explanations. These pages support an introduction to causal reasoning, not a complete account of every viewpoint in the paper.

Competencies: C11, C19

**Are Hill’s viewpoints a checklist that proves causation?**
No. Hill says the viewpoints do not provide hard-and-fast rules or indisputable proof. They help organize judgment about the evidence and alternative explanations.

## A06 · Why a significant finding can still mislead
[Publication](https://doi.org/10.1371/journal.pmed.0020124) · Evidence basis: Abstract

This essay develops a framework in which the credibility of research findings depends on power, bias, and the balance of true and false relationships being investigated. It discusses how flexible analyses and selective pursuit of significance can undermine findings. The framework should not be read as a measured false-finding percentage for every field or individual study.

Competencies: C13, C19, C41

**Does statistical significance establish that a research claim is true?**
No. In this framework, credibility also depends on power, bias, and the underlying mix of relationships being tested. Significance alone is insufficient to establish a claim.

## A07 · Interpreting hazard ratios carefully
[Publication](https://doi.org/10.1097/ede.0b013e3181c1ea43) · Evidence basis: Full-text sections

Hernán describes two difficulties with causal interpretation of hazard ratios: an average can depend on the duration of follow-up, and comparisons later in follow-up condition on remaining event-free. Treatment groups can therefore contain different sets of survivors over time. This record introduces those conceptual cautions; it does not provide a numerical reanalysis.

Competencies: C41, C14

**Why can a single average hazard ratio be hard to interpret?**
When hazards vary over time, the average hazard ratio can depend on follow-up duration. In addition, later hazard comparisons condition on surviving without the event, which can change the composition of the groups being compared.

## A08 · Time-related biases in database studies
[Publication](https://doi.org/10.1002/pds.5083) · Evidence basis: Abstract

Using a COPD database example, this paper illustrates several time-related biases, including protopathic, latency, immortal-time, and time-window biases. Estimates changed substantially when timing problems were addressed. The teaching point is to examine how cohort entry, exposure, and outcome time are aligned; the example is not evidence that every bias has the same direction in every study.

Competencies: C30, C14

**Why examine study timelines before interpreting a drug association?**
Misaligned exposure and follow-up times can produce misleading associations. This paper’s examples show why timing choices need explicit examination before an apparent treatment effect is interpreted.

## A09 · When adjustment can introduce bias
[Publication](https://doi.org/10.1097/ede.0b013e3181a819a1) · Evidence basis: Abstract

This paper distinguishes overadjustment bias from unnecessary adjustment. Controlling for an intermediate variable, or a descendant of one, can bias estimation of the total exposure effect. Other unnecessary adjustments may change precision without changing bias. Choosing covariates therefore requires thinking about causal roles and the effect being estimated, rather than simply including more variables.

Competencies: C14, C11

**Is adjusting for more variables always better?**
No. Adjusting for an intermediate variable can bias a total-effect estimate. The paper distinguishes this overadjustment bias from unnecessary adjustment that affects precision without affecting bias.

## A10 · Recognizing systematic error
[Publication](https://doi.org/10.2146/ajhp070369) · Evidence basis: Abstract

This introduction describes bias as systematic error and organizes routes by which it enters intervention studies: treatment exposure, inclusion in a study, and assessment or measurement. It emphasizes preventing bias during design, addressing it in analysis when feasible, and examining remaining bias when interpreting results.

Competencies: C14, C19

**At what stage should we address bias?**
Start during study design. If a bias cannot feasibly be avoided, consider appropriate analytic approaches and assess and discuss the remaining bias when interpreting the findings.

## A11 · Depletion of susceptible users
[Publication](https://doi.org/10.1002/pds.4197) · Evidence basis: Abstract

This hormone-therapy study illustrates how adverse-event associations can vary with duration of use. Users who remain on treatment later may differ from those at initiation because susceptible individuals experience events earlier. The authors recommend considering duration of use alongside current use. This record uses the study to teach design and interpretation, not to advise treatment choices.

Competencies: C14, C20, C41

**Why distinguish early from longer-term users?**
The population still using treatment later may have fewer susceptible individuals. In this example, risks varied by duration, so a current-use comparison alone could conceal relevant changes over time.

## A12 · Misclassification is not always toward the null
[Publication](https://doi.org/10.1007/s40471-014-0027-z) · Evidence basis: Abstract

This review describes measurement problems in claims data, such as filled prescriptions that are not taken and conditions absent from billing records. It discusses misclassification in active-comparator studies and demonstrates that nondifferential misclassification can bias effects away from the null. Quantifying measurement uncertainty can add information beyond an analysis of random error alone.

Competencies: C35, C38, C08

**Does nondifferential misclassification always bias toward the null?**
No. This review demonstrates bias away from the null in an active-comparator setting. The consequences depend on the measurement problem and comparison, so the direction should not be assumed.

## A13 · Selection bias through causal structure
[Publication](https://doi.org/10.1097/01.ede.0000135174.63482.43) · Evidence basis: Abstract

This paper connects examples of selection bias through a common causal structure: conditioning on a common effect of variables connected to exposure and outcome. It contrasts that structure with confounding through common causes. The framework helps learners reason about selection and censoring instead of treating every named bias as unrelated.

Competencies: C11, C14

**How does this paper distinguish selection bias from confounding?**
It associates selection bias with conditioning on common effects, and confounding with common causes of exposure and outcome. This structural view links otherwise different examples of selection bias.

## A14 · Reporting pharmacoepidemiological studies with RECORD-PE
[Publication](https://doi.org/10.1136/bmj.k3532) · Evidence basis: full text; cited teaching sections inspected

RECORD-PE adds pharmacoepidemiology-specific reporting guidance to STROBE and RECORD. It helps authors explain who entered a study, how exposure and follow-up were defined, why comparators were selected, and what the database captures. Transparent reporting lets readers assess the methods and limitations. The guideline is a minimum reporting standard, not evidence that a particular study is unbiased or a substitute for the additional detail needed to reproduce every analysis.

Competencies: C39, C38, C19

**What should I report about how drug exposure was measured?**
Describe the source and meaning of the records, how the drug codes were identified, and how exposure periods were constructed. State relevant assumptions about dose, duration, washout and grace periods, and explain important gaps in exposure capture. The relevant RECORD-PE items are 7.1.a–c and 19.1.a.

**If my study meets RECORD-PE, does that prove it is unbiased?**
No. RECORD-PE is reporting guidance that helps readers understand and assess the study. Clear reporting can reveal remaining confounding or selection problems; it does not remove them. Use it with STROBE and RECORD, and evaluate the design and assumptions separately.

## A15 · Drawing study timelines
[Publication](https://doi.org/10.7326/m18-3079) · Evidence basis: Abstract

This paper proposes standardized graphical representations of database-study implementation. Explicit diagrams can communicate design choices that prose leaves ambiguous and make key variables easier to reproduce. A diagram supports review and communication; it does not establish that the chosen design yields an unbiased estimate.

Competencies: C30, C39

**What does a study-design diagram add?**
A standardized diagram makes design timing and implementation choices easier to inspect, communicate, and reproduce. It complements the methods description rather than establishing validity on its own.

## A16 · Making study implementation explicit
[Publication](https://doi.org/10.1136/bmj.m4856) · Evidence basis: Full-text sections

STaRT-RWE uses structured tables and diagrams to communicate how real-world-evidence studies are implemented. It complements reporting checklists rather than being a checklist itself. Clear specifications help others understand and assess the study, but do not guarantee unbiased findings or fully establish whether a data source is fit for purpose.

Competencies: C39, C30, C35

**Does completing STaRT-RWE establish study validity?**
No. It makes implementation decisions clearer and supports review, but the authors explicitly distinguish transparent reporting from valid methodology. Separate consideration of data fitness is also needed.

## A17 · Using people as their own comparators
[Publication](https://doi.org/10.1111/joim.12186) · Evidence basis: Abstract

This review compares self-controlled observational designs, including case-crossover and self-controlled case series. Comparing periods within the same person protects against confounders that remain stable over time. The designs still have limitations involving exposure trends, duration, and transient effects; no one design is generally superior.

Competencies: C30, C14

**Do self-controlled designs remove all confounding?**
No. Their shared advantage concerns confounders that are stable over time. Time-related changes and exposure trends can still matter, and suitability depends on the question and design.

## A18 · Active-comparator, new-user designs
[Publication](https://doi.org/10.1007/s40471-015-0053-5) · Evidence basis: full text; cited teaching sections inspected

The active-comparator, new-user design compares people starting one treatment with people starting a clinically relevant alternative. Its two components address different problems: comparator selection seeks greater similarity in treatment indications and patient characteristics, while new-user entry establishes a clearer treatment timeline and allows baseline covariates to be measured before initiation. Implementation requires explicit comparator selection, prior non-use criteria, and decisions about treatment changes. These choices can reduce bias but do not remove the need to assess confounding, exposure measurement, and informative censoring.

Competencies: C30, C14, C38

**Why compare new users of two treatments instead of users with non-users?**
People starting a clinically relevant alternative may be more similar in their treatment indication and health status than non-users. Starting both groups at treatment initiation also improves alignment of the timeline and baseline measurement. These choices can reduce bias, but they do not guarantee that the groups are otherwise comparable.

**Does a 12-month washout prove that someone has never used the drug?**
No. It establishes no recorded use during the defined observation window, assuming the data capture the relevant treatment use. Earlier treatment may be outside that window. The paper distinguishes a practical new-user definition from lifetime first use; it does not establish one universally correct washout duration.

## A19 · Handling missing data with explicit assumptions
[Publication](https://doi.org/10.1093/aje/kwx348) · Evidence basis: Abstract

This paper compares principled missing-data approaches, including multiple imputation and inverse probability weighting, using a challenge with known missingness mechanisms. Naive analyses can be misleading; suitable methods sometimes mitigate the problem. The lesson is to consider the missingness process and analytic assumptions, rather than assume a preferred method automatically repairs missing data.

Competencies: C06, C14

**Does multiple imputation automatically solve missing-data bias?**
No. The paper ties appropriate analysis to missing-data mechanisms and compares several approaches. Principled methods can mitigate bias in suitable circumstances; they do not provide an automatic fix.

## A20 · Starting with a target trial
[Publication](https://doi.org/10.1093/aje/kwv254) · Evidence basis: Abstract

This framework makes explicit the randomized trial that would answer a comparative-effectiveness or safety question, then evaluates how an observational analysis emulates it. Specifying the target helps organize design choices, analysis, and criticism. Emulation remains an observational exercise and should not be mistaken for actually randomizing participants.

Competencies: C11, C30

**What is the purpose of specifying a target trial?**
It makes the causal question and intended experiment explicit, so the observational design can be assessed against that target and common methodological pitfalls can be identified.

## A21 · Learning from negative controls
[Publication](https://doi.org/10.1097/ede.0b013e3181d61eeb) · Evidence basis: Abstract

This paper proposes exposure and outcome negative controls to help detect spurious associations. Appropriate controls can reveal suspected or unsuspected sources of confounding and other error. Their usefulness depends on the conditions under which they detect the relevant bias; a control is not a universal certificate of validity.

Competencies: C14, C19, C10

**What can a negative control contribute?**
A suitably chosen exposure or outcome control can help detect spurious associations or other errors. Its usefulness depends on the conditions connecting the control to the bias being investigated.

## A22 · Restriction as a design choice
[Publication](https://doi.org/10.1097/mlr.0b013e318070c08e) · Evidence basis: Abstract

This statin-study example examines successive restrictions that make treatment groups more comparable. Estimates moved closer to randomized-trial findings as restrictions were applied. It illustrates how design can change confounding, but does not establish that every restriction, particularly one involving adherence, is appropriate for every research question.

Competencies: C30, C14

**Should every study copy the restrictions in this example?**
No. The findings concern a particular study and set of restrictions. Use the example to consider comparability and the population being studied, rather than treat its restrictions as a universal recipe.

## A23 · Different methods can target different effects
[Publication](https://doi.org/10.1002/pds.1231) · Evidence basis: Abstract

This worked example shows that propensity-score matching and a common form of treatment weighting can summarize different causal contrasts. With effect-measure modification, weights based on treated people and weights based on the whole study population can yield different estimates. A discrepancy does not necessarily mean one method failed to control confounding.

Competencies: C41, C14, C11

**Must matching and IPTW produce the same effect estimate?**
No. They can weight subgroup effects differently and target different populations. When effects vary across those groups, different summary estimates can be expected even without residual confounding in the example.

## A24 · Tracking treatment as it changes
[Publication](https://doi.org/10.1002/pds.4372) · Evidence basis: Abstract

This conceptual overview organizes time-varying exposure problems around treatment episodes, time-varying confounders, cumulative exposure and latency, and treatment switching. Different modeling choices can produce substantially different estimates. It highlights the importance of defining and quantifying exposure carefully; this abstract-based record does not give implementation instructions for advanced models.

Competencies: C20, C30, C01

**What exposure decisions matter when treatment changes over time?**
The overview highlights construction of treatment episodes, handling time-varying confounders, cumulative exposure and latency, and treatment switching. These choices affect what an analysis represents and can materially change estimates.

## A25 · A shared language for adherence
[Publication](https://doi.org/10.1111/j.1365-2125.2012.04167.x) · Evidence basis: Abstract

This taxonomy addresses inconsistent terminology for medication-taking behavior. It separates adherence into initiation, implementation, and discontinuation, and distinguishes the behavior from managing adherence and studying it. For a learner, the practical question is which part of medication-taking a measure is intended to capture.

Competencies: C20, C38

**Which phases does this adherence taxonomy distinguish?**
It separates adherence into initiation, implementation, and discontinuation. Naming the phase helps make the behavior under study explicit instead of relying on an ambiguous general adherence label.

## A26 · Propensity scores and heterogeneous effects
[Publication](https://doi.org/10.1111/joim.12197) · Evidence basis: Abstract

This paper discusses propensity scores for measured confounding when treatment effects differ across patient characteristics. Matching and weighting can estimate effects in differently defined populations. It also considers sensitivity analyses for unmeasured confounding among people treated contrary to prediction. Choosing an approach requires attention to the target population and remaining uncertainty.

Competencies: C14, C41, C10

**Why identify the target population when using propensity scores?**
Different matching or weighting implementations can estimate effects for different populations. When treatment effects are heterogeneous, that choice affects the overall effect being summarized.

## A27 · Choosing propensity-score weights
[Publication](https://doi.org/10.1136/bmj.l5657) · Evidence basis: Selected full-text pages

This primer compares weighting approaches that target effects in the whole population, treated people, or groups with greater treatment equipoise. It starts with the scientific question and the population of interest. The authors offer implementation guidance rather than a competition identifying one best method. Adjustment concerns measured characteristics and still relies on causal assumptions.

Competencies: C11, C14, C41

**Do all propensity-score weights estimate the same effect?**
No. Weighting methods can target different populations and causal effects. Choose the scientific target first, then consider an appropriate weighting method and its assumptions.

## A28 · Assessing residual confounding
[Publication](https://doi.org/10.1002/pds.1200) · Evidence basis: Abstract

This paper organizes sensitivity analyses for residual confounding in healthcare databases. Approaches include varying informed assumptions, asking how strong confounding would need to be to explain an association, and incorporating external information. These analyses make uncertainty more explicit; their conclusions remain dependent on the assumptions and information used.

Competencies: C10, C08, C14

**What does a sensitivity analysis add to a discussion of confounding?**
It can quantify how conclusions change under assumptions about unmeasured confounding, rather than merely mention that confounding may remain. The paper also describes approaches using external information.

## A29 · Comparing disease-risk and propensity scores
[Publication](https://doi.org/10.1093/aje/kwr143) · Evidence basis: Abstract

This simulation study compares disease-risk scores, propensity scores, and direct covariate adjustment. Performance varies with exposure–covariate correlation, model specification, and events per covariate. Its results support examining the data and setting; they do not establish one method as best for every cohort study.

Competencies: C01, C14, C19

**Does this simulation establish one universally best score method?**
No. Performance depended on the simulated conditions, including covariate correlation, model specification, and events per covariate. The findings support conditional comparisons rather than a universal ranking.

## A30 · When confounder effects change over time
[Publication](https://doi.org/10.1093/aje/kwp175) · Evidence basis: Abstract

This paper distinguishes a confounder whose value changes over time from one whose effect on treatment or outcome changes over time. It calls the latter time-modified confounding. Its example and simulation examine treatment weights that account for this change, emphasizing correct model specification rather than assuming a time-fixed association.

Competencies: C01, C14

**How is time-modified confounding different from time-varying confounding?**
In the paper’s distinction, time-varying confounding concerns changing confounder values; time-modified confounding concerns changing effects of a confounder on treatment or outcome. Both affect how the analysis should represent time.
