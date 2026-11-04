const GLOSSARY = [
  { cat: 'Abrasives', icon: '◆', terms: [
    ['CBN — Cubic Boron Nitride', 'The second hardest material after diamond. Used to grind ferrous metals like hardened steel, cast iron, and superalloys where diamond would react chemically at grinding temperatures.'],
    ['Diamond', 'The hardest known material (10 on Mohs scale). Used to grind non-ferrous materials: carbide, ceramics, glass, composites, PCD, and PCBN. Reacts with ferrous metals at high temperatures.'],
    ['Superabrasive', 'Collective term for diamond and CBN abrasives. Distinguished from conventional abrasives by extreme hardness, long wheel life, superior dimensional accuracy, and ability to grind hardened and exotic materials.'],
    ['Conventional Abrasive', 'Aluminum oxide (Al₂O₃) or silicon carbide (SiC) used in standard grinding wheels. Much lower hardness and shorter life than superabrasives.'],
    ['Grit Size', 'Mesh number describing abrasive grain size. Lower numbers (e.g. 46, 60) = coarse grains for aggressive removal. Higher numbers (e.g. 320, 600) = fine grains for smooth finish.'],
    ['Mesh', 'Screen-opening count per linear inch used to classify grain size. A 120-mesh screen has 120 openings per inch; grains passing through are called 120 grit.'],
    ['Micron (µm)', 'Unit equal to 0.001 mm. Used for very fine grit sizes in lapping, polishing, and superfinishing. 1 µm = approximately 40 microinches.'],
    ['Concentration', 'Volume percentage of abrasive grain in the bond layer. Standard: 25, 50, 75, 100. Concentration 100 = 25% abrasive by volume. Higher concentration = longer life but more power required.'],
    ['Friability', 'Tendency of a grain to fracture under stress, exposing fresh sharp edges. High friability = self-sharpening. Low friability = longer grain life but risk of dulling and glazing.'],
    ['Crystal Structure', 'Individual grain structure. Crystals can be blocky (tough, long-wearing) or irregular/sharp (friable, self-sharpening). Engineered for specific applications and bond systems.'],
    ['Monocrystalline', 'Single-crystal grain grown as one intact crystal. High strength, predictable fracture, long wheel life. Specified for precision grinding of carbide and hardened steel.'],
    ['Polycrystalline', 'Grain composed of many small crystals fused together. Fractures into smaller sharp pieces under load, producing a self-sharpening effect. Common in CBN and synthetic diamond.'],
    ['PCD — Polycrystalline Diamond', 'Sintered diamond compacts bonded to carbide substrate. Used as cutting tool tips for aluminum, composites, and non-ferrous materials. Requires diamond wheels for sharpening.'],
    ['PCBN — Polycrystalline CBN', 'Sintered CBN compacts used in turning inserts for hardened steel and cast iron. Ground using diamond or vitrified CBN wheels for sharpening or producing insert forms.'],
  ]},
  { cat: 'Bond Systems', icon: '⬡', terms: [
    ['Vitrified Bond', 'Glass-ceramic bond fired at high temperature. Most common superabrasive bond. Rigid and porous for excellent coolant flow and chip clearance. Dressable with rotary or stationary tools.'],
    ['Resin Bond', 'Thermosetting polymer bond (phenolic or polyimide). More flexible than vitrified, providing cushioning for better finish. Not crush-dressable. Used in tool grinding and finish operations.'],
    ['Metal Bond', 'Sintered metal matrix (bronze, iron, or cobalt). Extremely strong with longest wheel life. Used where form holding is critical. Requires EDM or crush dressing.'],
    ['Electroplated Bond', 'Single layer of abrasive bonded to a steel core by nickel electrodeposition. Cannot be dressed — used until depleted. Best for complex forms and interrupted cuts.'],
    ['Hybrid Bond', 'Combines characteristics of two systems (e.g. metal-resin or vitrified-polymer). Engineered for intermediate properties — more durable than resin but more dressable than metal.'],
    ['Bond Erosion', 'Controlled wearing of bond material to expose fresh grains. Proper rate keeps the wheel self-sharpening. Too fast = short life. Too slow = dulling, loading, glazing, burn.'],
    ['Bond Grade (Hardness)', 'How firmly the bond holds grains. Soft grades (A–H) release easily for self-sharpening. Hard grades (P–Z) retain longer. Softer grade used on hard workpiece materials.'],
    ['Porosity', 'Open space in the bond for coolant and chip clearance. Critical for free cutting in vitrified wheels. Can be natural or engineered using filler materials that burn out during firing.'],
  ]},
  { cat: 'Operations', icon: '⊕', terms: [
    ['OD Grinding', 'Wheel contacts outer surface of a rotating cylindrical workpiece. Traverse (axial) or plunge (radial). Used for shafts, journals, pins, and rollers.'],
    ['ID Grinding', 'Small wheel rotates at high RPM inside a bore. Used for precision bores, bearing races, hydraulic cylinders. Wheel diameter typically 50–80% of bore diameter.'],
    ['Centerless Grinding', 'Workpiece supported between grinding wheel, regulating wheel, and work rest blade — no centers or chuck. Extremely high production. Two modes: through-feed and in-feed.'],
    ['Through-Feed Centerless', 'Workpiece passes axially between grinding and regulating wheels. Regulating wheel angled to advance part automatically. For plain cylinders in very high volume.'],
    ['In-Feed (Plunge) Centerless', 'Workpiece does not travel axially. Grinding wheel plunges radially to size. For parts with shoulders, flanges, tapers, or complex profiles.'],
    ['Surface Grinding', 'Grinding a flat surface. Horizontal-spindle uses wheel periphery; vertical-spindle uses wheel face. For dies, plates, blocks, and precision flat components.'],
    ['Creep Feed Grinding', 'Single-pass deep cut with very slow feed. Removes large stock in one pass. For aerospace turbine blades, profiles, and slots. Requires high coolant volume and rigid machines.'],
    ['Cylindrical Grinding', 'Grinding cylindrical surfaces (OD or ID) with headstock, tailstock, and rotating workpiece. Between centers for max accuracy or using chuck for shouldered parts.'],
    ['Profile Grinding', 'Grinding complex 2D or 3D contours using formed wheel or CNC interpolation. For gears, cams, turbine blade roots, thread forms, and punch/die profiles.'],
    ['Gear Grinding', 'Precision grinding of gear tooth flanks after heat treatment. Two methods: generating (threaded wheel) and form grinding (profile wheel). CBN dominates production gear grinding.'],
    ['Camshaft Grinding', 'CNC profile grinding of cam lobes after hardening. CBN wheels with CNC interpolation of wheel feed vs. rotation angle. High-volume automotive application.'],
    ['Crankshaft Grinding', 'OD grinding of main journals and eccentric pin journals. High-production application for vitrified CBN. Crankpins require eccentric rotation synchronized with wheel feed.'],
    ['Double-Disk Grinding', 'Two opposing wheels face each other. Workpieces pass between on a carrier plate. Grinds both faces parallel in a single pass. Common for automotive transmission components.'],
    ['Angle Grinding', 'Wheel spindle tilted at angle to workpiece axis. For angular faces, chamfers, tapered bores, and combination OD/face grinding in a single setup.'],
    ['Honing', 'Reciprocating abrasive stones in a bore producing crosshatch pattern. Improves bore geometry and creates oil-retaining texture. Finishing operation, not grinding.'],
    ['Lapping', 'Rubbing surfaces with loose abrasive slurry on a flat plate. Produces very flat, fine surfaces. Abrasive is free (not bonded), minimal removal. For valve seats and optical flats.'],
    ['Superfinishing', 'Oscillating abrasive stone with light pressure on rotating workpiece. Removes the amorphous layer left by grinding, producing plateau finish. For bearing races and journals.'],
  ]},
  { cat: 'Parameters', icon: '∑', terms: [
    ['RPM', 'Rotational speed of the grinding wheel spindle. Must never exceed the wheel’s maximum speed rating. Higher RPM increases surface footage at the same diameter.'],
    ['SFPM', 'Surface Feet Per Minute — linear speed at cutting surface. SFPM = (RPM × Diameter × π) ÷ 12. Typical superabrasive: 4,000–12,000 SFPM. Most critical parameter for wheel performance.'],
    ['m/s — Wheel Speed', 'Meters per second, metric equivalent of SFPM. 1 m/s ≈ 197 SFPM. Standard: 30–60 m/s. High-speed grinding: above 80 m/s.'],
    ['Q′ — Specific Removal Rate', 'Volume removed per time per unit width (mm³/mm/s). Q′ = depth of cut × feed rate. Primary metric for comparing grinding efficiency across setups.'],
    ['MRR — Material Removal Rate', 'Total volume removed per minute across full width. MRR = width × depth × feed rate. Higher MRR = more productive but more wear and heat.'],
    ['G-Ratio', 'Volume of workpiece removed ÷ volume of wheel consumed. CBN wheels achieve 10–100× higher G-ratios than conventional wheels on the same application.'],
    ['Depth of Cut (DOC)', 'Radial distance the wheel penetrates per pass. Roughing: 0.002–0.010″; finishing: 0.0001–0.0005″; creep feed: up to 0.250″.'],
    ['Feed Rate', 'Speed of workpiece relative to wheel (ipm or mm/min). Higher feed = more MRR and productivity but coarser finish and more heat.'],
    ['Sparkout', 'Final passes at zero infeed after reaching size. Allows elastic deflection to recover. Improves dimensional accuracy, roundness, and size consistency.'],
    ['Infeed', 'Amount the wheel is fed into the workpiece — total stock removal for a plunge cycle or amount per traverse pass.'],
    ['Cutting Force', 'Force exerted by wheel on workpiece. Tangential (Ft) does cutting work. Normal (Fn) causes deflection and size error. Monitoring indicates wheel condition.'],
    ['Spindle Power', 'Motor power at the spindle (hp or kW). Rising power with constant infeed indicates glazing or loading — dress required.'],
    ['Wheel Speed Ratio (q)', 'Ratio of wheel speed to workpiece speed (q = vs ÷ vw). Typical: 60–200. Varying q controls surface finish without changing grit size.'],
  ]},
  { cat: 'Surface Finish', icon: '≋', terms: [
    ['Ra — Arithmetic Average', 'Average absolute deviation from the mean line (µin or µm). Most common surface finish spec worldwide. Lower Ra = smoother. Typical ground finish: 4–32 µin Ra.'],
    ['Rz — Peak-to-Valley Height', 'Average of maximum peak-to-valley heights over 5 sampling lengths. More sensitive to isolated peaks/valleys than Ra. For ground surfaces, Rz ≈ 4–7× Ra.'],
    ['Rmax / Rt', 'Single maximum peak-to-valley height over entire measurement length. Worst-case surface condition. Relevant when a scratch could cause sealing failure or stress concentration.'],
    ['Rq — RMS Roughness', 'Root Mean Square roughness. Slightly higher than Ra — typically Rq ≈ 1.1× Ra. Used in optical, precision, and semiconductor specs.'],
    ['Microinch (µin)', '1 µin = 0.000001″ = 0.0254 µm. Superabrasive finish pass on bearing steel: 4–8 µin Ra. 1 µm = 39.37 µin.'],
    ['Waviness', 'Long-wavelength surface variation caused by vibration, thermal drift, or wheel imbalance. Can cause noise in bearing and gear applications.'],
    ['Lay', 'Direction of dominant surface texture pattern — parallel, perpendicular, circular, or crosshatch. Affects oil retention, friction, and sealing ability.'],
    ['Plateau Finish', 'Sharp peaks removed by superfinishing, leaving flat load-bearing plateaus with lubricant-retaining valleys. Measured by Rk, Rpk, Rvk. Ideal for cylinder bores and journals.'],
    ['Surface Integrity', 'Comprehensive description: roughness, waviness, residual stress, microstructure, microhardness, subsurface damage. Critical for fatigue life and corrosion resistance.'],
    ['Thermal Damage (Burn)', 'Metallurgical alteration from excessive heat: re-hardening, over-tempering, oxidation, tensile stress. Detected by Barkhausen noise, X-ray diffraction, or nital etch.'],
  ]},
  { cat: 'Wheel Specs', icon: '⊛', terms: [
    ['Specification Code', 'Full designation: abrasive type (B=CBN, D=Diamond), grit size, grade, concentration, bond type (V=vitrified, R=resin, M=metal, P=electroplated), and dimensions. Example: B151-N100-V.'],
    ['Abrasive Layer Depth', 'Thickness of superabrasive section, typically 3–6 mm. Only this layer contains diamond or CBN grains. Remaining body is inert steel or aluminum core.'],
    ['Wheel Core', 'Structural body, typically precision-machined steel or aluminum. Provides dimensional stability, dynamic balance, and mounting interface. Core accuracy affects TIR.'],
    ['Arbor / Bore', 'Center hole mounting onto spindle. Must match spindle diameter precisely. Flanges compress the hub to prevent rotation under grinding torque.'],
    ['TIR — Total Indicator Runout', 'Total variation in cutting surface position per revolution. Low TIR (under 0.0002″) essential for precision grinding. Excessive runout causes chatter and poor finish.'],
    ['Maximum Operating Speed', 'Highest rated RPM or SFPM. Always marked on the wheel per ANSI B7.1. Never exceed — risks catastrophic wheel failure. Life-safety issue.'],
    ['Wheel Shape (ANSI/ISO)', 'Standard geometry designation: 1A1 (straight), 1FF1 (face), 11V9 (flaring cup), 12V9 (dish), 14F1 (rimmed). Selection depends on machine and operation.'],
    ['Wheel Balance', 'Even mass distribution about rotational axis. Unbalanced wheels cause vibration, chatter, bearing wear, and poor finish. Precision-balanced at factory, may need field balancing.'],
    ['Engineered Segment System', 'Precision abrasive segments assembled on a reusable steel hub. Allows custom forms, faster lead times, and cost savings by replacing only worn segments.'],
  ]},
  { cat: 'Dressing', icon: '⊘', terms: [
    ['Dressing', 'Combined process of truing and conditioning a wheel. Truing restores geometry; conditioning opens bond to expose fresh grain. Done after mounting, loading, glazing, and periodically.'],
    ['Truing', 'Restoring correct geometry — round, flat, or required form. Removes runout, chatter marks, and form error from uneven wear. May still need conditioning after.'],
    ['Conditioning', 'Opening the wheel face to expose sharp grains by eroding excess bond. Done with dressing stick for resin or rotary dressing parameters for vitrified.'],
    ['Rotary Dresser', 'Powered diamond roll engaging wheel periphery at controlled speed ratio. Standard for dressing vitrified CBN and diamond wheels. Available as traversing or full-form rolls.'],
    ['Dressing Speed Ratio (qd)', 'Dresser roll speed ÷ wheel speed. Positive (same direction) = fine, closed topography. Negative (counter) = coarser, more open topography with higher MRR.'],
    ['Dressing Lead', 'Axial traverse rate across wheel face. Slow lead = finer topography and smoother finish. Fast lead = coarser, more aggressive cutting. Key parameter for balancing finish and productivity.'],
    ['Single-Point Dresser', 'Stationary diamond tip traversed across wheel face. Simple, low-cost. Requires 90° indexing to distribute wear and maintain sharp point.'],
    ['Brake-Controlled Dresser', 'Rotary tool with braking mechanism setting dresser speed relative to wheel. Standard for resin bond wheels where crush dressing would cause bond fracture.'],
    ['Dressing Stick', 'Rectangular block of conventional abrasive applied to spinning resin wheel. Erodes bond to expose fresh grain. Simplest method for conditioning resin bond wheels.'],
    ['EDM Dressing', 'Electrical Discharge Machining for metal bond wheels. Erodes metallic bond without mechanical forces — the only practical method for profiling metal bond wheels.'],
  ]},
  { cat: 'Machine Types', icon: '⊞', terms: [
    ['CNC Grinder', 'Computer Numerically Controlled with programmable axes for feed, traverse, rotation, and dressing. Enables complex profiles and repeatable production. Standard for superabrasive production.'],
    ['Universal Grinder', 'Versatile machine for OD, ID, and limited surface grinding. Common in tool rooms and job shops. May be manual or CNC. Less rigid than dedicated production grinders.'],
    ['Centerless Grinder', 'Grinding wheel, regulating wheel, and work rest blade. For high-volume round parts: pins, shafts, rollers, needles. Very high throughput with no part-handling time.'],
    ['Internal (ID) Grinder', 'High-speed spindles (10,000–200,000 RPM for small bores) to compensate for small wheel diameter. Achieves precise bore size, roundness, and cylindricity.'],
    ['Creep Feed Grinder', 'Heavy-duty machine for single-pass deep cuts. Rigid construction, high-volume coolant, precision servo drives. For aerospace, turbine, and medical components.'],
    ['Cam and Crank Grinder', 'Dedicated CNC for automotive camshafts or crankshafts. CNC C-X axis interpolation for cam profiles or eccentric crankpin journals. Primary application for vitrified CBN.'],
    ['Jig Grinder', 'Precision machine with high-speed spindle (up to 100,000 RPM). For holes, contours, and surfaces in hardened workpieces. Used in tool, die, and mold making.'],
    ['Rotary Surface Grinder', 'Vertical-spindle with cup/segmented wheel on rotating chuck. High throughput for parallel flat parts. Segment wheels allow better coolant flow.'],
  ]},
  { cat: 'Defects', icon: '⊗', terms: [
    ['Burn (Grinding Burn)', 'Thermal damage visible as discoloration. Causes: dull wheel, insufficient coolant, excessive infeed, wrong grade. Results in rehardening, soft spots, tensile stress, premature failure.'],
    ['Chatter', 'Periodic waviness from vibration. Evenly spaced marks. Causes: wheel imbalance, worn bearings, resonance, improper grade, loose fixturing. Diagnosed by FFT analysis.'],
    ['Loading', 'Chips packed into wheel pores. Loaded wheel smears and generates heat. Caused by soft/ductile workpiece, insufficient coolant, or wrong bond/porosity. Corrected by dressing.'],
    ['Glazing', 'Grains dull and flat-topped without releasing (bond too hard). Wheel rubs, generating extreme heat. Requires more aggressive dressing or softer wheel grade.'],
    ['Out-of-Round', 'Diameter varies as part rotates. Caused by unbalanced wheel, worn centers, loose tailstock, deflection, or insufficient sparkout. Measured by CMM or roundness gauge.'],
    ['Taper', 'Diameter varies along workpiece length. Caused by misaligned centers, worn ways, incorrect alignment, or thermal growth. Corrected by adjusting table swivel angle.'],
    ['Scratches', 'Deep marks from oversize grains, contaminated coolant, or embedded chips. Random and non-periodic (unlike chatter). Fix by filtering coolant and inspecting wheel.'],
    ['Chipping (Edge Breakout)', 'Material breakout at edges, common on brittle materials (carbide, ceramics). Controlled by reducing DOC, softer bond, optimizing coolant, chamfering edges before grinding.'],
  ]},
  { cat: 'Materials', icon: '⬢', terms: [
    ['Hardened Steel', 'Steel above ~55 HRC. Primary application for CBN. Examples: M2 HSS, D2 tool steel, 52100 bearing steel, 4340 alloy. CBN is 5–100× more productive than Al₂O₃ on hardened steel.'],
    ['Carbide (Tungsten Carbide)', 'WC-Co — hardest metal-matrix composite in common use. Requires diamond wheels. Sensitive to thermal shock — needs high coolant volume.'],
    ['Technical Ceramics', 'Alumina, silicon nitride, silicon carbide, zirconia. Ground with diamond. Brittle — prone to chipping. Requires light passes, sharp wheels, high coolant.'],
    ['Superalloys', 'Nickel/cobalt/iron-based (Inconel 718, Hastelloy, Waspaloy). Very low thermal conductivity. Requires CBN, high coolant pressure, careful parameters.'],
    ['Cast Iron', '2–4% carbon. Graphite inclusions lubricate during grinding. Ground with CBN or Al₂O₃. Gray, white (very hard), and ductile types differ significantly.'],
    ['Titanium', 'Low density, high strength, very low thermal conductivity. Chips cold-weld to grains. Needs sharp wheels, high coolant pressure, moderate speed, frequent dressing.'],
    ['HSS — High Speed Steel', 'Highly alloyed tool steel (M2, M42, T15). For drills, end mills, taps, hobs. Ground with CBN — far more productive than Al₂O₃.'],
    ['Inconel', 'Nickel-chromium superalloy (typically 718). Extremely difficult: work hardening, low conductivity, grain welding. Requires CBN, high coolant, conservative infeed, frequent dressing.'],
    ['HRC — Rockwell C Hardness', 'Standard hardness scale for hardened steel. CBN specified above ~45–50 HRC. Most steels ground at 58–65 HRC. Harder workpiece = softer wheel grade recommended.'],
  ]},
];

const MENU = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'conversions', label: 'Conversions', icon: '↻', children: [
    { id: 'length-converter', label: 'Length Converter', icon: '↔' },
    { id: 'velocity-converter', label: 'Velocity Converter', icon: '↠' },
    { id: 'flow-rate-converter', label: 'Flow Rate Converter', icon: '≈' },
    { id: 'wheel-speed-converter', label: 'Wheel Speed Converter', icon: '⦾' },
  ]},
  { id: 'grinding-params', label: 'Grinding Parameters', icon: '✶', children: [
    { id: 'coolant-calculator', label: 'Coolant Calculator', icon: '♨' },
    { id: 'q-prime', label: 'Specific Material Removal Rate Q\'', icon: '↓' },
    { id: 'surface-finish', label: 'Surface Finish Chart', icon: '▤' },
  ]},
  { id: 'dressing-params', label: 'Dressing Parameters', icon: '⚙', children: [
    { id: 'traverse-dressing', label: 'Traverse Diamond Roll Dressing Calculator', icon: '◎' },
    { id: 'stationary-dressing', label: 'Stationary Tool Dressing Calculator', icon: '●' },
    { id: 'plunge-dressing', label: 'Plunge Diamond Roll Dressing Calculator', icon: '◐' },
    { id: 'offline-dressing', label: 'Offline Dressing Calculator', icon: '◔' },
  ]},
  { id: 'cutting-params', label: 'Cutting Parameters', icon: '✂', children: [
    { id: 'kerf-loss', label: 'Kerf Loss Calculator', icon: '□' },
  ]},
  { id: 'reference-charts', label: 'Reference Charts', icon: '⊞', children: [
    { id: 'wheel-shapes', label: 'Standard Wheel Shapes', icon: '◯' },
    { id: 'grit-size', label: 'Grit Size Chart', icon: '▦' },
    { id: 'glossary', label: 'Grinding Glossary', icon: '⊡' },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: '⚑' },
  ]},
  { id: 'divider' },
  { id: 'scientific-calculator', label: 'Scientific Calculator', icon: '⌸' },
  { id: 'settings', label: 'Settings', icon: '⚙' },
];

const PAGE_TITLES = {
  'home': 'CUBONIX',
  'length-converter': 'Length Converter',
  'velocity-converter': 'Velocity Converter',
  'flow-rate-converter': 'Flow Rate Converter',
  'wheel-speed-converter': 'Wheel Speed Converter',
  'coolant-calculator': 'Coolant Calculator',
  'q-prime': 'Material Removal Rate Q\'',
  'surface-finish': 'Surface Finish Chart',
  'wheel-shapes': 'Standard Wheel Shapes',
  'grit-size': 'Grit Size Chart',
  'glossary': 'Grinding Glossary',
  'troubleshooting': 'Troubleshooting',
  'traverse-dressing': 'Traverse Dressing',
  'stationary-dressing': 'Stationary Dressing',
  'plunge-dressing': 'Plunge Dressing',
  'offline-dressing': 'Offline Dressing',
  'kerf-loss': 'Kerf Loss Calculator',
  'scientific-calculator': 'Scientific Calculator',
  'settings': 'Settings',
};

const INFO_TEXT = {
  'wheel-speed-converter': '<p><strong>Wheel Speed Converter</strong></p><p>Converts between wheel peripheral speed (m/s or ft/min) and rotational speed (RPM) based on wheel diameter.</p><p><strong>Formula:</strong> v = (π × d × n) / (1000 × 60)</p><p>Where v = speed (m/s), d = diameter (mm), n = RPM</p>',
  'length-converter': '<p><strong>Length Converter</strong></p><p>Convert between millimeters, centimeters, meters, inches, and feet.</p>',
  'velocity-converter': '<p><strong>Velocity Converter</strong></p><p>Convert between m/s, m/min, ft/min, ft/s, km/h, and mph.</p>',
  'flow-rate-converter': '<p><strong>Flow Rate Converter</strong></p><p>Convert between L/min, gal/min (US), L/h, and m³/h.</p>',
  'coolant-calculator': '<p><strong>Coolant Calculator</strong></p><p>Calculates the required coolant flow rate based on grinding width and specific coolant flow rate.</p><p><strong>Formula:</strong> Q = b × q\'</p><p>Where Q = flow rate (L/min), b = grinding contact width (mm), q\' = specific flow rate (L/min per mm)</p>',
  'q-prime': '<p><strong>Specific Material Removal Rate (Q\')</strong></p><p>Calculates the volume of material removed per unit width per unit time.</p><p><strong>Formula:</strong> Q\' = a<sub>e</sub> × v<sub>w</sub></p><p>Where a<sub>e</sub> = depth of cut (mm), v<sub>w</sub> = workpiece speed (mm/s)</p><p>Units: mm³/mm·s (or mm²/s)</p>',
  'traverse-dressing': '<p><strong>Traverse Diamond Roll Dressing</strong></p><p>Calculates the overlap ratio (U<sub>d</sub>) for traverse dressing.</p><p><strong>Formula:</strong> U<sub>d</sub> = b<sub>d</sub> × n<sub>s</sub> / v<sub>d</sub></p><p>Where b<sub>d</sub> = active dresser width (mm), n<sub>s</sub> = wheel RPM, v<sub>d</sub> = traverse speed (mm/min)</p>',
  'stationary-dressing': '<p><strong>Stationary Tool Dressing</strong></p><p>Calculates overlap ratio for single-point or blade dressers.</p><p><strong>Formula:</strong> U<sub>d</sub> = a<sub>d</sub> × n<sub>s</sub> / v<sub>d</sub></p><p>Where a<sub>d</sub> = dresser contact width (mm), n<sub>s</sub> = wheel RPM, v<sub>d</sub> = traverse speed (mm/min)</p>',
  'plunge-dressing': '<p><strong>Plunge Diamond Roll Dressing</strong></p><p>Calculates the speed ratio (q<sub>d</sub>) for plunge dressing.</p><p><strong>Formula:</strong> q<sub>d</sub> = v<sub>R</sub> / v<sub>s</sub></p><p>Where v<sub>R</sub> = roll peripheral speed, v<sub>s</sub> = wheel peripheral speed. Positive = same direction, negative = opposite.</p>',
  'offline-dressing': '<p><strong>Offline Dressing Calculator</strong></p><p>Calculates dressing parameters for offline/manual dressing operations including infeed per pass and total passes required.</p>',
  'kerf-loss': '<p><strong>Kerf Loss Calculator</strong></p><p>Calculates material lost during cutting operations.</p><p><strong>Formula:</strong> Loss = blade width × number of cuts × workpiece length</p>',
  'troubleshooting': '<p><strong>Troubleshooting Guide</strong></p><p>Quick-reference for diagnosing grinding problems (burn, chatter, finish, out-of-round) and adjusting wheel behaviour (hard vs soft) during vitrified CBN trials.</p>',
  'glossary': '<p><strong>Grinding Glossary</strong></p><p>Over 100 terms covering abrasives, bond systems, grinding operations, process parameters, surface finish, wheel specs, dressing, machine types, defects, and workpiece materials.</p><p>Use the search box to find any term or tap a category to browse.</p>',
  'grit-size': '<p><strong>Grit Size Comparison Chart</strong></p><p>Cross-reference between grit size standards: Mesh/Size (µm), FEPA designation (Diamond &amp; CBN), ANSI grit size, US grit number, and JIS size.</p><p>Finer grits (higher mesh numbers) produce smoother surface finishes.</p>',
  'wheel-shapes': '<p><strong>Standard Wheel Shapes</strong></p><p>Cross-section reference for standard grinding wheel profiles per ANSI/ISO designations.</p><p>Tap any shape to see its designation. Shapes are grouped by type: straight (1-series), cup/dish (2/6/9/11/12/15-series), flared (3/4/14-series), and recessed (1A1R, 1A1SP, etc.).</p>',
  'surface-finish': '<p><strong>Surface Finish Comparison Chart</strong></p><p>Reference chart comparing roughness parameters:</p><p><strong>Ra</strong> — Arithmetical Average roughness</p><p><strong>RMS (Rq)</strong> — Root Mean Square roughness</p><p><strong>Rt</strong> — Highest peak-to-valley height in an assigned length (Rt = Rp + Rv)</p><p><strong>Rz</strong> — Average distance between 5 deepest valleys &amp; peaks</p>',
  'scientific-calculator': '<p><strong>Scientific Calculator</strong></p><p>Full-function scientific calculator with trigonometric, logarithmic, and standard arithmetic operations.</p>',
};

const App = {
  currentScreen: 'home',
  openMenus: {},
  settings: JSON.parse(localStorage.getItem('cubonix-settings') || '{"units":"metric","decimals":2}'),
  sciCalc: { expression: '', current: '0', newNumber: true },

  init() {
    this.buildMenu();
    this.navigateTo('home');
  },

  saveSettings() {
    localStorage.setItem('cubonix-settings', JSON.stringify(this.settings));
  },

  // ===== DRAWER =====
  toggleDrawer() {
    document.getElementById('drawer').classList.toggle('open');
    document.getElementById('drawerOverlay').classList.toggle('open');
  },

  closeDrawer() {
    document.getElementById('drawer').classList.remove('open');
    document.getElementById('drawerOverlay').classList.remove('open');
  },

  buildMenu() {
    const el = document.getElementById('drawerMenu');
    let html = '';
    MENU.forEach(item => {
      if (item.id === 'divider') {
        html += '<div class="menu-divider"></div>';
        return;
      }
      const isActive = this.currentScreen === item.id;
      const hasChildren = item.children && item.children.length > 0;
      const isOpen = this.openMenus[item.id];
      const childActive = hasChildren && item.children.some(c => c.id === this.currentScreen);

      html += `<button class="menu-item ${isActive || childActive ? 'active' : ''}" onclick="App.menuClick('${item.id}', ${hasChildren})">
        <span class="menu-icon">${item.icon}</span>
        <span class="menu-label">${item.label}</span>
        ${hasChildren ? `<span class="menu-arrow ${isOpen ? 'expanded' : ''}">▼</span>` : ''}
      </button>`;

      if (hasChildren) {
        html += `<div class="submenu ${isOpen ? 'open' : ''}" id="sub-${item.id}">`;
        item.children.forEach(child => {
          html += `<button class="menu-item ${this.currentScreen === child.id ? 'active' : ''}" onclick="App.navigateTo('${child.id}')">
            <span class="menu-icon">${child.icon}</span>
            <span class="menu-label">${child.label}</span>
          </button>`;
        });
        html += '</div>';
      }
    });
    el.innerHTML = html;
  },

  menuClick(id, hasChildren) {
    if (hasChildren) {
      this.openMenus[id] = !this.openMenus[id];
      this.buildMenu();
    } else {
      this.navigateTo(id);
    }
  },

  navigateTo(id) {
    this.currentScreen = id;
    document.getElementById('headerTitle').textContent = PAGE_TITLES[id] || 'CUBONIX';
    this.closeDrawer();
    this.buildMenu();
    this.render();
    window.scrollTo(0, 0);
  },

  showInfo() {
    const text = INFO_TEXT[this.currentScreen];
    if (!text) return;
    document.getElementById('infoTitle').textContent = PAGE_TITLES[this.currentScreen] || 'Information';
    document.getElementById('infoBody').innerHTML = text;
    document.getElementById('infoModal').classList.add('open');
  },

  closeInfo() {
    document.getElementById('infoModal').classList.remove('open');
  },

  zoomWheelImg(img) {
    const overlay = document.createElement('div');
    overlay.className = 'ws-zoom-overlay';
    overlay.innerHTML = '<img src="' + img.src + '" class="ws-zoom-img">';
    overlay.onclick = () => overlay.remove();
    document.body.appendChild(overlay);
  },

  // ===== RENDER =====
  render() {
    const el = document.getElementById('appContent');
    const r = this.renderers[this.currentScreen];
    el.innerHTML = r ? r() : this.renderers.home();
  },

  renderers: {
    // ===== HOME =====
    home() {
      return `
        <div class="home-banner">
          <h2>CUBONIX</h2>
          <p>Industrial grinding and abrasive tools calculator suite</p>
          <div class="home-banner-bar"></div>
        </div>
        <div class="section-title">Quick Access</div>
        <div class="home-grid">
          <div class="home-tile" onclick="App.navigateTo('wheel-speed-converter')">
            <div class="tile-icon">⦾</div>
            <div class="tile-label">Wheel Speed Converter</div>
          </div>
          <div class="home-tile" onclick="App.navigateTo('surface-finish')">
            <div class="tile-icon">▤</div>
            <div class="tile-label">Surface Finish Chart</div>
          </div>
          <div class="home-tile" onclick="App.navigateTo('grit-size')">
            <div class="tile-icon">▦</div>
            <div class="tile-label">Grit Size Chart</div>
          </div>
          <div class="home-tile" onclick="App.navigateTo('wheel-shapes')">
            <div class="tile-icon">◯</div>
            <div class="tile-label">Standard Wheel Shapes</div>
          </div>
          <div class="home-tile" onclick="App.navigateTo('troubleshooting')">
            <div class="tile-icon">⚑</div>
            <div class="tile-label">Troubleshooting</div>
          </div>
          <div class="home-tile" onclick="App.navigateTo('glossary')">
            <div class="tile-icon">⊡</div>
            <div class="tile-label">Grinding Glossary</div>
          </div>
          <div class="home-tile" onclick="App.navigateTo('q-prime')">
            <div class="tile-icon">↓</div>
            <div class="tile-label">Material Removal Rate</div>
          </div>
          <div class="home-tile" onclick="App.navigateTo('traverse-dressing')">
            <div class="tile-icon">◎</div>
            <div class="tile-label">Traverse Dressing</div>
          </div>
          <div class="home-tile" onclick="App.navigateTo('scientific-calculator')">
            <div class="tile-icon">⌸</div>
            <div class="tile-label">Scientific Calculator</div>
          </div>
          <div class="home-tile" onclick="App.navigateTo('length-converter')">
            <div class="tile-icon">↔</div>
            <div class="tile-label">Length Converter</div>
          </div>
          <div class="home-tile" onclick="App.navigateTo('velocity-converter')">
            <div class="tile-icon">↠</div>
            <div class="tile-label">Velocity Converter</div>
          </div>
        </div>
      `;
    },

    // ===== WHEEL SPEED CONVERTER =====
    'wheel-speed-converter'() {
      const html = `
        <div class="mandatory-note"><span>*</span> Mandatory Fields</div>
        <div class="calc-section">
          <div class="calc-card">
            <div class="calc-card-header">INPUT PARAMETERS</div>
            <div class="calc-card-body">
              <div class="form-group">
                <label class="form-label">Wheel Diameter <span class="mandatory">*</span> <span class="unit">(mm)</span></label>
                <input class="form-input" type="number" id="ws-diameter" inputmode="decimal" placeholder="e.g. 400" oninput="Calc.wheelSpeed()">
              </div>
              <div class="form-group">
                <label class="form-label">Calculate From</label>
                <select class="form-select" id="ws-mode" onchange="Calc.wheelSpeedToggle()">
                  <option value="rpm-to-speed">RPM → m/s</option>
                  <option value="speed-to-rpm">m/s → RPM</option>
                </select>
              </div>
              <div class="form-group" id="ws-rpm-group">
                <label class="form-label">Rotational Speed <span class="mandatory">*</span> <span class="unit">(RPM)</span></label>
                <input class="form-input" type="number" id="ws-rpm" inputmode="decimal" placeholder="e.g. 2860" oninput="Calc.wheelSpeed()">
              </div>
              <div class="form-group" id="ws-speed-group" style="display:none;">
                <label class="form-label">Peripheral Speed <span class="mandatory">*</span> <span class="unit">(m/s)</span></label>
                <input class="form-input" type="number" id="ws-speed-input" inputmode="decimal" placeholder="e.g. 60" oninput="Calc.wheelSpeed()">
              </div>
            </div>
          </div>
          <div class="result-card">
            <div class="result-card-header">RESULT</div>
            <div class="result-row" id="ws-result-ms">
              <span class="result-label">Peripheral Speed</span>
              <span class="result-unit">m/s</span>
              <span class="result-value empty" id="ws-val-ms">--</span>
            </div>
            <div class="result-row" id="ws-result-ftmin">
              <span class="result-label">Peripheral Speed</span>
              <span class="result-unit">ft/min</span>
              <span class="result-value empty" id="ws-val-ftmin">--</span>
            </div>
            <div class="result-row" id="ws-result-rpm" style="display:none;">
              <span class="result-label">Rotational Speed</span>
              <span class="result-unit">RPM</span>
              <span class="result-value empty" id="ws-val-rpm">--</span>
            </div>
          </div>
          <div class="btn-row">
            <button class="btn btn-reset" onclick="Calc.resetWheelSpeed()">Reset</button>
          </div>
        </div>
      `;
      setTimeout(() => Calc.wheelSpeedToggle(), 0);
      return html;
    },

    // ===== LENGTH CONVERTER =====
    'length-converter'() {
      const units = ['mm', 'cm', 'm', 'inch', 'ft'];
      return `
        <div class="calc-section">
          <div class="calc-card">
            <div class="calc-card-header">LENGTH CONVERTER</div>
            <div class="calc-card-body">
              <div class="form-group">
                <label class="form-label">Value</label>
                <input class="form-input" type="number" id="len-val" placeholder="Enter value" oninput="Calc.convertLength()">
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">From</label>
                  <select class="form-select" id="len-from" onchange="Calc.convertLength()">
                    ${units.map(u => `<option value="${u}">${u}</option>`).join('')}
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">To</label>
                  <select class="form-select" id="len-to" onchange="Calc.convertLength()">
                    ${units.map((u,i) => `<option value="${u}" ${i===3?'selected':''}>${u}</option>`).join('')}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="result-card">
            <div class="result-card-header">RESULT</div>
            <div class="result-row">
              <span class="result-label" id="len-result-label">--</span>
              <span class="result-value empty" id="len-result">--</span>
            </div>
          </div>
          <div style="padding:0 0 8px;">
            <div class="btn-row"><button class="btn btn-reset" onclick="document.getElementById('len-val').value='';document.getElementById('len-result').textContent='--';document.getElementById('len-result').classList.add('empty');">Reset</button></div>
          </div>
        </div>
      `;
    },

    // ===== VELOCITY CONVERTER =====
    'velocity-converter'() {
      const units = ['m/s', 'm/min', 'ft/min', 'ft/s', 'km/h', 'mph'];
      return `
        <div class="calc-section">
          <div class="calc-card">
            <div class="calc-card-header">VELOCITY CONVERTER</div>
            <div class="calc-card-body">
              <div class="form-group">
                <label class="form-label">Value</label>
                <input class="form-input" type="number" id="vel-val" placeholder="Enter value" oninput="Calc.convertVelocity()">
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">From</label>
                  <select class="form-select" id="vel-from" onchange="Calc.convertVelocity()">
                    ${units.map(u => `<option value="${u}">${u}</option>`).join('')}
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">To</label>
                  <select class="form-select" id="vel-to" onchange="Calc.convertVelocity()">
                    ${units.map((u,i) => `<option value="${u}" ${i===2?'selected':''}>${u}</option>`).join('')}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="result-card">
            <div class="result-card-header">RESULT</div>
            <div class="result-row">
              <span class="result-label" id="vel-result-label">--</span>
              <span class="result-value empty" id="vel-result">--</span>
            </div>
          </div>
          <div style="padding:0 0 8px;">
            <div class="btn-row"><button class="btn btn-reset" onclick="document.getElementById('vel-val').value='';document.getElementById('vel-result').textContent='--';document.getElementById('vel-result').classList.add('empty');">Reset</button></div>
          </div>
        </div>
      `;
    },

    // ===== FLOW RATE CONVERTER =====
    'flow-rate-converter'() {
      const units = ['L/min', 'gal/min', 'L/h', 'm³/h'];
      return `
        <div class="calc-section">
          <div class="calc-card">
            <div class="calc-card-header">FLOW RATE CONVERTER</div>
            <div class="calc-card-body">
              <div class="form-group">
                <label class="form-label">Value</label>
                <input class="form-input" type="number" id="flow-val" placeholder="Enter value" oninput="Calc.convertFlow()">
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">From</label>
                  <select class="form-select" id="flow-from" onchange="Calc.convertFlow()">
                    ${units.map(u => `<option value="${u}">${u}</option>`).join('')}
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">To</label>
                  <select class="form-select" id="flow-to" onchange="Calc.convertFlow()">
                    ${units.map((u,i) => `<option value="${u}" ${i===1?'selected':''}>${u}</option>`).join('')}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="result-card">
            <div class="result-card-header">RESULT</div>
            <div class="result-row">
              <span class="result-label" id="flow-result-label">--</span>
              <span class="result-value empty" id="flow-result">--</span>
            </div>
          </div>
          <div style="padding:0 0 8px;">
            <div class="btn-row"><button class="btn btn-reset" onclick="document.getElementById('flow-val').value='';document.getElementById('flow-result').textContent='--';document.getElementById('flow-result').classList.add('empty');">Reset</button></div>
          </div>
        </div>
      `;
    },

    // ===== COOLANT CALCULATOR =====
    'coolant-calculator'() {
      return `
        <div class="mandatory-note"><span>*</span> Mandatory Fields</div>
        <div class="calc-section">
          <div class="calc-card">
            <div class="calc-card-header">INPUT PARAMETERS</div>
            <div class="calc-card-body">
              <div class="form-group">
                <label class="form-label">Grinding Contact Width (b) <span class="mandatory">*</span> <span class="unit">(mm)</span></label>
                <input class="form-input" type="number" id="cool-width" placeholder="e.g. 20" oninput="Calc.coolant()">
              </div>
              <div class="form-group">
                <label class="form-label">Specific Coolant Flow Rate (q') <span class="mandatory">*</span> <span class="unit">(L/min per mm)</span></label>
                <input class="form-input" type="number" id="cool-rate" placeholder="e.g. 0.5" step="0.1" oninput="Calc.coolant()">
              </div>
              <div class="form-group">
                <label class="form-label">Grinding Type</label>
                <select class="form-select" id="cool-type" onchange="Calc.coolantPreset()">
                  <option value="">-- Select for suggested q' --</option>
                  <option value="0.25">Surface Grinding (0.25 L/min/mm)</option>
                  <option value="0.5">Cylindrical Grinding (0.5 L/min/mm)</option>
                  <option value="1.0">Creep Feed Grinding (1.0 L/min/mm)</option>
                  <option value="0.4">Internal Grinding (0.4 L/min/mm)</option>
                  <option value="0.35">Centreless Grinding (0.35 L/min/mm)</option>
                </select>
              </div>
            </div>
          </div>
          <div class="result-card">
            <div class="result-card-header">RESULT</div>
            <div class="result-row">
              <span class="result-label">Required Flow Rate (Q)</span>
              <span class="result-unit">L/min</span>
              <span class="result-value empty" id="cool-result">--</span>
            </div>
            <div class="result-row">
              <span class="result-label">Flow Rate</span>
              <span class="result-unit">gal/min</span>
              <span class="result-value empty" id="cool-result-gal">--</span>
            </div>
          </div>
          <div class="btn-row"><button class="btn btn-reset" onclick="Calc.resetForm(['cool-width','cool-rate','cool-type'],['cool-result','cool-result-gal'])">Reset</button></div>
        </div>
      `;
    },

    // ===== Q PRIME =====
    'q-prime'() {
      return `
        <div class="mandatory-note"><span>*</span> Mandatory Fields</div>
        <div class="calc-section">
          <div class="calc-card">
            <div class="calc-card-header">INPUT PARAMETERS</div>
            <div class="calc-card-body">
              <div class="form-group">
                <label class="form-label">Depth of Cut (a<sub>e</sub>) <span class="mandatory">*</span> <span class="unit">(mm)</span></label>
                <input class="form-input" type="number" id="qp-ae" placeholder="e.g. 0.03" step="0.001" oninput="Calc.qPrime()">
              </div>
              <div class="form-group">
                <label class="form-label">Workpiece Speed (v<sub>w</sub>) <span class="mandatory">*</span> <span class="unit">(mm/s)</span></label>
                <input class="form-input" type="number" id="qp-vw" placeholder="e.g. 300" oninput="Calc.qPrime()">
              </div>
              <div class="form-group">
                <label class="form-label">Grinding Width (b) <span class="unit">(mm) — optional</span></label>
                <input class="form-input" type="number" id="qp-b" placeholder="e.g. 20" oninput="Calc.qPrime()">
              </div>
            </div>
          </div>
          <div class="result-card">
            <div class="result-card-header">RESULT</div>
            <div class="result-row">
              <span class="result-label">Specific Removal Rate (Q')</span>
              <span class="result-unit">mm²/s</span>
              <span class="result-value empty" id="qp-result">--</span>
            </div>
            <div class="result-row">
              <span class="result-label">Specific Removal Rate (Q')</span>
              <span class="result-unit">mm³/mm·s</span>
              <span class="result-value empty" id="qp-result2">--</span>
            </div>
            <div class="result-row">
              <span class="result-label">Total Removal Rate (Q)</span>
              <span class="result-unit">mm³/s</span>
              <span class="result-value empty" id="qp-total">--</span>
            </div>
          </div>
          <div class="btn-row"><button class="btn btn-reset" onclick="Calc.resetForm(['qp-ae','qp-vw','qp-b'],['qp-result','qp-result2','qp-total'])">Reset</button></div>
        </div>
      `;
    },

    // ===== TRAVERSE DRESSING =====
    'traverse-dressing'() {
      return `
        <div class="mandatory-note"><span>*</span> Mandatory Fields</div>
        <div class="calc-section">
          <div class="calc-card">
            <div class="calc-card-header">INPUT PARAMETERS</div>
            <div class="calc-card-body">
              <div class="form-group">
                <label class="form-label">Active Dresser Width (b<sub>d</sub>) <span class="mandatory">*</span> <span class="unit">(mm)</span></label>
                <input class="form-input" type="number" id="td-bd" placeholder="e.g. 0.8" step="0.01" oninput="Calc.traverseDressing()">
              </div>
              <div class="form-group">
                <label class="form-label">Wheel Speed (n<sub>s</sub>) <span class="mandatory">*</span> <span class="unit">(RPM)</span></label>
                <input class="form-input" type="number" id="td-ns" placeholder="e.g. 1800" oninput="Calc.traverseDressing()">
              </div>
              <div class="form-group">
                <label class="form-label">Traverse Speed (v<sub>d</sub>) <span class="mandatory">*</span> <span class="unit">(mm/min)</span></label>
                <input class="form-input" type="number" id="td-vd" placeholder="e.g. 300" oninput="Calc.traverseDressing()">
              </div>
              <div class="form-group">
                <label class="form-label">Dressing Depth (a<sub>d</sub>) <span class="unit">(mm) — optional</span></label>
                <input class="form-input" type="number" id="td-ad" placeholder="e.g. 0.02" step="0.001" oninput="Calc.traverseDressing()">
              </div>
            </div>
          </div>
          <div class="result-card">
            <div class="result-card-header">RESULT</div>
            <div class="result-row">
              <span class="result-label">Overlap Ratio (U<sub>d</sub>)</span>
              <span class="result-unit">ratio</span>
              <span class="result-value empty" id="td-ud">--</span>
            </div>
            <div class="result-row">
              <span class="result-label">Dressing Feed (f<sub>d</sub>)</span>
              <span class="result-unit">mm/rev</span>
              <span class="result-value empty" id="td-fd">--</span>
            </div>
          </div>
          <div class="btn-row"><button class="btn btn-reset" onclick="Calc.resetForm(['td-bd','td-ns','td-vd','td-ad'],['td-ud','td-fd'])">Reset</button></div>
        </div>
      `;
    },

    // ===== STATIONARY DRESSING =====
    'stationary-dressing'() {
      return `
        <div class="mandatory-note"><span>*</span> Mandatory Fields</div>
        <div class="calc-section">
          <div class="calc-card">
            <div class="calc-card-header">INPUT PARAMETERS</div>
            <div class="calc-card-body">
              <div class="form-group">
                <label class="form-label">Dresser Contact Width (a<sub>d</sub>) <span class="mandatory">*</span> <span class="unit">(mm)</span></label>
                <input class="form-input" type="number" id="sd-ad" placeholder="e.g. 0.5" step="0.01" oninput="Calc.stationaryDressing()">
              </div>
              <div class="form-group">
                <label class="form-label">Wheel Speed (n<sub>s</sub>) <span class="mandatory">*</span> <span class="unit">(RPM)</span></label>
                <input class="form-input" type="number" id="sd-ns" placeholder="e.g. 1800" oninput="Calc.stationaryDressing()">
              </div>
              <div class="form-group">
                <label class="form-label">Traverse Speed (v<sub>d</sub>) <span class="mandatory">*</span> <span class="unit">(mm/min)</span></label>
                <input class="form-input" type="number" id="sd-vd" placeholder="e.g. 250" oninput="Calc.stationaryDressing()">
              </div>
              <div class="form-group">
                <label class="form-label">Dressing Depth <span class="unit">(mm) — optional</span></label>
                <input class="form-input" type="number" id="sd-depth" placeholder="e.g. 0.02" step="0.001">
              </div>
            </div>
          </div>
          <div class="result-card">
            <div class="result-card-header">RESULT</div>
            <div class="result-row">
              <span class="result-label">Overlap Ratio (U<sub>d</sub>)</span>
              <span class="result-unit">ratio</span>
              <span class="result-value empty" id="sd-ud">--</span>
            </div>
            <div class="result-row">
              <span class="result-label">Dressing Lead (f<sub>d</sub>)</span>
              <span class="result-unit">mm/rev</span>
              <span class="result-value empty" id="sd-fd">--</span>
            </div>
          </div>
          <div class="btn-row"><button class="btn btn-reset" onclick="Calc.resetForm(['sd-ad','sd-ns','sd-vd','sd-depth'],['sd-ud','sd-fd'])">Reset</button></div>
        </div>
      `;
    },

    // ===== PLUNGE DRESSING =====
    'plunge-dressing'() {
      return `
        <div class="mandatory-note"><span>*</span> Mandatory Fields</div>
        <div class="calc-section">
          <div class="calc-card">
            <div class="calc-card-header">INPUT PARAMETERS</div>
            <div class="calc-card-body">
              <div class="form-group">
                <label class="form-label">Wheel Diameter (d<sub>s</sub>) <span class="mandatory">*</span> <span class="unit">(mm)</span></label>
                <input class="form-input" type="number" id="pd-ds" placeholder="e.g. 400" oninput="Calc.plungeDressing()">
              </div>
              <div class="form-group">
                <label class="form-label">Wheel Speed (n<sub>s</sub>) <span class="mandatory">*</span> <span class="unit">(RPM)</span></label>
                <input class="form-input" type="number" id="pd-ns" placeholder="e.g. 1800" oninput="Calc.plungeDressing()">
              </div>
              <div class="form-group">
                <label class="form-label">Roll Diameter (d<sub>R</sub>) <span class="mandatory">*</span> <span class="unit">(mm)</span></label>
                <input class="form-input" type="number" id="pd-dr" placeholder="e.g. 80" oninput="Calc.plungeDressing()">
              </div>
              <div class="form-group">
                <label class="form-label">Roll Speed (n<sub>R</sub>) <span class="mandatory">*</span> <span class="unit">(RPM)</span></label>
                <input class="form-input" type="number" id="pd-nr" placeholder="e.g. 5000" oninput="Calc.plungeDressing()">
              </div>
              <div class="form-group">
                <label class="form-label">Direction</label>
                <select class="form-select" id="pd-dir" onchange="Calc.plungeDressing()">
                  <option value="1">Same direction (uni-directional)</option>
                  <option value="-1">Opposite direction (counter)</option>
                </select>
              </div>
            </div>
          </div>
          <div class="result-card">
            <div class="result-card-header">RESULT</div>
            <div class="result-row">
              <span class="result-label">Speed Ratio (q<sub>d</sub>)</span>
              <span class="result-unit">ratio</span>
              <span class="result-value empty" id="pd-qd">--</span>
            </div>
            <div class="result-row">
              <span class="result-label">Wheel Speed (v<sub>s</sub>)</span>
              <span class="result-unit">m/s</span>
              <span class="result-value empty" id="pd-vs">--</span>
            </div>
            <div class="result-row">
              <span class="result-label">Roll Speed (v<sub>R</sub>)</span>
              <span class="result-unit">m/s</span>
              <span class="result-value empty" id="pd-vr">--</span>
            </div>
          </div>
          <div class="btn-row"><button class="btn btn-reset" onclick="Calc.resetForm(['pd-ds','pd-ns','pd-dr','pd-nr'],['pd-qd','pd-vs','pd-vr'])">Reset</button></div>
        </div>
      `;
    },

    // ===== OFFLINE DRESSING =====
    'offline-dressing'() {
      return `
        <div class="mandatory-note"><span>*</span> Mandatory Fields</div>
        <div class="calc-section">
          <div class="calc-card">
            <div class="calc-card-header">INPUT PARAMETERS</div>
            <div class="calc-card-body">
              <div class="form-group">
                <label class="form-label">Current Wheel Diameter <span class="mandatory">*</span> <span class="unit">(mm)</span></label>
                <input class="form-input" type="number" id="od-current" placeholder="e.g. 400" oninput="Calc.offlineDressing()">
              </div>
              <div class="form-group">
                <label class="form-label">Target Wheel Diameter <span class="mandatory">*</span> <span class="unit">(mm)</span></label>
                <input class="form-input" type="number" id="od-target" placeholder="e.g. 398" oninput="Calc.offlineDressing()">
              </div>
              <div class="form-group">
                <label class="form-label">Infeed per Pass <span class="mandatory">*</span> <span class="unit">(mm)</span></label>
                <input class="form-input" type="number" id="od-infeed" placeholder="e.g. 0.02" step="0.001" oninput="Calc.offlineDressing()">
              </div>
            </div>
          </div>
          <div class="result-card">
            <div class="result-card-header">RESULT</div>
            <div class="result-row">
              <span class="result-label">Total Radial Removal</span>
              <span class="result-unit">mm</span>
              <span class="result-value empty" id="od-removal">--</span>
            </div>
            <div class="result-row">
              <span class="result-label">Total Diametral Removal</span>
              <span class="result-unit">mm</span>
              <span class="result-value empty" id="od-diam">--</span>
            </div>
            <div class="result-row">
              <span class="result-label">Number of Passes Required</span>
              <span class="result-unit">passes</span>
              <span class="result-value empty" id="od-passes">--</span>
            </div>
          </div>
          <div class="btn-row"><button class="btn btn-reset" onclick="Calc.resetForm(['od-current','od-target','od-infeed'],['od-removal','od-diam','od-passes'])">Reset</button></div>
        </div>
      `;
    },

    // ===== KERF LOSS =====
    'kerf-loss'() {
      return `
        <div class="mandatory-note"><span>*</span> Mandatory Fields</div>
        <div class="calc-section">
          <div class="calc-card">
            <div class="calc-card-header">INPUT PARAMETERS</div>
            <div class="calc-card-body">
              <div class="form-group">
                <label class="form-label">Blade / Wheel Thickness <span class="mandatory">*</span> <span class="unit">(mm)</span></label>
                <input class="form-input" type="number" id="kl-thick" placeholder="e.g. 1.6" step="0.1" oninput="Calc.kerfLoss()">
              </div>
              <div class="form-group">
                <label class="form-label">Number of Cuts <span class="mandatory">*</span></label>
                <input class="form-input" type="number" id="kl-cuts" placeholder="e.g. 10" oninput="Calc.kerfLoss()">
              </div>
              <div class="form-group">
                <label class="form-label">Workpiece Width <span class="mandatory">*</span> <span class="unit">(mm)</span></label>
                <input class="form-input" type="number" id="kl-width" placeholder="e.g. 50" oninput="Calc.kerfLoss()">
              </div>
              <div class="form-group">
                <label class="form-label">Workpiece Height <span class="unit">(mm) — optional, for volume</span></label>
                <input class="form-input" type="number" id="kl-height" placeholder="e.g. 25" oninput="Calc.kerfLoss()">
              </div>
            </div>
          </div>
          <div class="result-card">
            <div class="result-card-header">RESULT</div>
            <div class="result-row">
              <span class="result-label">Total Kerf Loss (length)</span>
              <span class="result-unit">mm</span>
              <span class="result-value empty" id="kl-length">--</span>
            </div>
            <div class="result-row">
              <span class="result-label">Kerf Loss Area</span>
              <span class="result-unit">mm²</span>
              <span class="result-value empty" id="kl-area">--</span>
            </div>
            <div class="result-row">
              <span class="result-label">Kerf Loss Volume</span>
              <span class="result-unit">mm³</span>
              <span class="result-value empty" id="kl-vol">--</span>
            </div>
          </div>
          <div class="btn-row"><button class="btn btn-reset" onclick="Calc.resetForm(['kl-thick','kl-cuts','kl-width','kl-height'],['kl-length','kl-area','kl-vol'])">Reset</button></div>
        </div>
      `;
    },

    // ===== STANDARD WHEEL SHAPES =====
    'wheel-shapes'() {
      return `
        <div class="calc-section">
          <div class="calc-card">
            <div class="calc-card-header">STANDARD WHEEL SHAPES</div>
            <div class="ws-img-wrap">
              <img src="images/wheel-shapes.png" alt="Standard Grinding Wheel Shapes" class="ws-img" onclick="App.zoomWheelImg(this)">
            </div>
          </div>
        </div>
      `;
    },

    // ===== GLOSSARY =====
    'glossary'() {
      const chips = GLOSSARY.map((g, i) =>
        `<button class="gl-chip" onclick="Glossary.jumpTo(${i})">${g.icon} ${g.cat}</button>`
      ).join('');
      const sections = GLOSSARY.map((g, i) => {
        const terms = g.terms.map(t =>
          `<div class="gl-term"><div class="gl-term-name">${t[0]}</div><div class="gl-term-def">${t[1]}</div></div>`
        ).join('');
        return `<div class="gl-section" id="gl-sec-${i}">
          <div class="gl-section-header" onclick="Glossary.toggle(${i})">
            <span>${g.icon} ${g.cat}</span>
            <span class="gl-count">${g.terms.length}</span>
            <span class="menu-arrow gl-arrow" id="gl-arrow-${i}">▼</span>
          </div>
          <div class="gl-section-body" id="gl-body-${i}">${terms}</div>
        </div>`;
      }).join('');
      return `
        <div class="calc-section">
          <div class="calc-card">
            <div class="calc-card-header">GRINDING GLOSSARY</div>
            <div class="calc-card-body" style="padding:12px;">
              <input class="form-input" type="text" id="gl-search" placeholder="Search terms..." oninput="Glossary.search(this.value)">
              <div class="gl-chips">${chips}</div>
            </div>
          </div>
          <div id="gl-sections">${sections}</div>
          <div class="gl-no-results" id="gl-no-results" style="display:none;">No matching terms found.</div>
        </div>
      `;
    },

    // ===== TROUBLESHOOTING =====
    'troubleshooting'() {
      const checks = [
        'Adjust Nozzle / Coolant Flow',
        'Check Diamond for Good Point',
        'Hardness of Part',
        'Check Rate of Dress',
        'Feed Rate',
        'Flange Could be Loose',
        'Check Wheel Dress',
        'Check Tail Stock & Centers',
        'Check Wheel RPM',
        'Coolant on Diamond',
        'Check Wheel Specification',
        'Check Wheel Balance',
      ];
      const problems = [
        { name: 'BURN',         marks: [1,1,1,1,1,0,1,0,0,1,1,0] },
        { name: 'CHATTER',      marks: [0,1,0,1,1,1,1,1,1,0,1,1] },
        { name: 'FINISH',       marks: [1,1,1,1,1,0,1,0,1,0,1,1] },
        { name: 'OUT OF ROUND', marks: [1,1,0,0,1,1,1,1,1,0,1,1] },
      ];
      const headerCells = checks.map(c => `<th>${c}</th>`).join('');
      const rows = problems.map(p => {
        const cells = p.marks.map(m => `<td>${m ? '<span class="ts-check">&#10003;</span>' : ''}</td>`).join('');
        return `<tr><td class="ts-problem">${p.name}</td>${cells}</tr>`;
      }).join('');

      return `
        <div class="calc-section">
          <div class="calc-card">
            <div class="calc-card-header">TROUBLE SHOOTING GUIDE</div>
            <div class="sf-table-wrap">
              <table class="sf-table ts-table">
                <thead>
                  <tr class="sf-header-units"><th></th>${headerCells}</tr>
                </thead>
                <tbody>${rows}</tbody>
              </table>
            </div>
          </div>

          <div class="calc-card" style="margin-top:16px;">
            <div class="calc-card-header">VITRIFIED CBN TRIALS</div>
            <div class="calc-card-body">
              <div class="ts-subtitle">Analysing Wheel Behaviour</div>
              <div class="ts-behaviour">
                <div class="ts-col">
                  <div class="ts-col-header soft">WHEEL ACTING SOFT</div>
                  <div class="ts-col-item">High roughness</div>
                  <div class="ts-col-item">Form not retained</div>
                  <div class="ts-col-item">Wheel wear</div>
                </div>
                <div class="ts-col">
                  <div class="ts-col-header hard">WHEEL ACTING HARD</div>
                  <div class="ts-col-item">Cycle time &#8593;</div>
                  <div class="ts-col-item">Material removal rate &#8595;</div>
                  <div class="ts-col-item">Chatter</div>
                  <div class="ts-col-item">Burn Mark</div>
                  <div class="ts-col-item">Random scratch</div>
                  <div class="ts-col-item">Increased grinding noise</div>
                </div>
              </div>

              <div class="ts-subtitle" style="margin-top:20px;">If Wheel Acts HARDER</div>
              <div class="ts-hint">% of change based on quality currently achieved and requirements</div>
              <div class="ts-adjust-list">
                <div class="ts-adjust"><span class="ts-param">Wheel Speed</span><span class="ts-dir down">&#8595;</span></div>
                <div class="ts-adjust"><span class="ts-param">Job Speed</span><span class="ts-dir up">&#8593;</span></div>
                <div class="ts-adjust"><span class="ts-param">Dress Traverse</span><span class="ts-dir up">&#8593;</span></div>
                <div class="ts-adjust"><span class="ts-param">Dress Depth of Cut</span><span class="ts-dir up">&#8593;</span></div>
                <div class="ts-adjust"><span class="ts-param">Dress Ratio</span><span class="ts-dir up">&#8593;</span></div>
                <div class="ts-adjust"><span class="ts-param">Coolant Flow Rate</span><span class="ts-dir up">&#8593;</span></div>
                <div class="ts-adjust"><span class="ts-param">Grinding Feed Rate</span><span class="ts-dir down">&#8595;</span></div>
              </div>

              <div class="ts-subtitle" style="margin-top:20px;">If Wheel Acts SOFTER</div>
              <div class="ts-hint">Opposite of above adjustments</div>

              <div class="ts-subtitle" style="margin-top:20px;">Key References</div>
              <div class="ts-ref-list">
                <div class="ts-ref"><span class="ts-ref-label">Dress Ratio</span><span class="ts-ref-val">0.5 &ndash; 0.8</span></div>
                <div class="ts-ref-note">Dress Ratio = Dresser Speed (m/s) &divide; Wheel Speed (m/s)</div>
                <div class="ts-ref"><span class="ts-ref-label">Dressing Depth</span><span class="ts-ref-val">3 &ndash; 5 &micro;m (Max)</span></div>
                <div class="ts-ref"><span class="ts-ref-label">Coolant (Cooling)</span><span class="ts-ref-val">100 &ndash; 150 LPM</span></div>
                <div class="ts-ref"><span class="ts-ref-label">Coolant (Cleaning)</span><span class="ts-ref-val">40 &ndash; 60 LPM</span></div>
              </div>
            </div>
          </div>
        </div>
      `;
    },

    // ===== GRIT SIZE CHART =====
    'grit-size'() {
      const data = [
        ['#60',  251, 'D251', 'B251', '60/80',   '60',  ''],
        ['#80',  181, 'D181', 'B181', '80/100',  '100',  '80'],
        ['#100', 151, 'D151', 'B151', '100/120', '120', '100'],
        ['#120', 126, 'D126', 'B126', '120/140', '150', '120'],
        ['#140', 107, 'D107', 'B107', '140/170', '180', '140'],
        ['#170',  91, 'D91',  'B91',  '170/200', '220', '170'],
        ['#200',  76, 'D76',  'B76',  '200/230', '240', '200'],
        ['#230',  64, 'D64',  'B64',  '230/270', '280', '230'],
        ['#270',  54, 'D54',  'B54',  '270/325', '320', '270'],
        ['#325',  46, 'D46',  'B46',  '325/400', '400', '325'],
        ['#400',  40, '',     '',     '',         '',    ''],
        ['#500',  35, '',     '',     '',         '',    ''],
        ['#600',  30, '',     '',     '',         '',    ''],
        ['#800',  20, '',     '',     '',         '',    ''],
        ['#1000', 15, '',     '',     '',         '',    ''],
        ['#1500', 10, '',     '',     '',         '',    ''],
      ];
      const rows = data.map(r =>
        `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td><td>${r[6]}</td></tr>`
      ).join('');
      return `
        <div class="calc-section">
          <div class="calc-card">
            <div class="calc-card-header">GRIT SIZE COMPARISON CHART</div>
            <div class="sf-table-wrap">
              <table class="sf-table grit-table">
                <thead>
                  <tr class="sf-header-top">
                    <th colspan="2">Grit Size</th>
                    <th colspan="2">FEPA Designation</th>
                    <th>ANSI<div class="sf-header-sub">Grit Size</div></th>
                    <th>US<div class="sf-header-sub">Grit No.</div></th>
                    <th>JIS<div class="sf-header-sub">Size</div></th>
                  </tr>
                  <tr class="sf-header-units">
                    <th>Mesh</th><th>µm</th>
                    <th>DIA</th><th>CBN</th>
                    <th></th><th></th><th></th>
                  </tr>
                </thead>
                <tbody>${rows}</tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    },

    // ===== SURFACE FINISH CHART =====
    'surface-finish'() {
      const data = [
        [48, 1.2, 52, 1.3, 10, 6.0],
        [24, 0.6, 26, 0.66, 5, 3.0],
        [20, 0.5, 22, 0.55, 4, 2.5],
        [16, 0.4, 17.6, 0.44, 3, 2.0],
        [12, 0.3, 13.2, 0.33, 2.5, 1.6],
        [10, 0.25, 10.8, 0.27, 2, 1.2],
        [8, 0.2, 8.8, 0.22, 1.6, 1.0],
        [6, 0.15, 7.2, 0.18, 1.2, 0.8],
        [4.8, 0.12, 5.2, 0.13, 1, 0.6],
        [4, 0.1, 4.4, 0.11, 0.9, 0.5],
        [3.2, 0.08, 3.5, 0.088, 0.8, 0.4],
        [2.4, 0.06, 2.6, 0.066, 0.6, 0.3],
        [2, 0.05, 2.2, 0.055, 0.5, 0.3],
        [1.6, 0.04, 1.8, 0.044, 0.4, 0.2],
        [1.2, 0.03, 1.3, 0.033, 0.3, 0.2],
        [1, 0.025, 1.1, 0.027, 0.25, 0.10],
        [0.8, 0.02, 0.9, 0.022, 0.2, 0.10],
        [0.6, 0.015, 0.7, 0.018, 0.15, 0.08],
        [0.5, 0.012, 0.5, 0.013, 0.12, 0.06],
        [0.4, 0.01, 0.4, 0.011, 0.1, 0.05],
        [0.3, 0.008, 0.3, 0.009, 0.08, 0.04],
        [0.2, 0.006, 0.2, 0.007, 0.06, 0.03],
      ];
      const rows = data.map(r =>
        `<tr>${r.map(v => `<td>${v}</td>`).join('')}</tr>`
      ).join('');
      return `
        <div class="calc-section">
          <div class="calc-card">
            <div class="calc-card-header">SURFACE FINISH COMPARISON CHART</div>
            <div class="sf-table-wrap">
              <table class="sf-table">
                <thead>
                  <tr class="sf-header-top">
                    <th colspan="2">Ra<div class="sf-header-sub">Arithmetical Average</div></th>
                    <th colspan="2">RMS (Rq)<div class="sf-header-sub">Root Mean Square</div></th>
                    <th>Rt<div class="sf-header-sub">Peak to Valley</div></th>
                    <th>Rz<div class="sf-header-sub">Avg 5 Deepest</div></th>
                  </tr>
                  <tr class="sf-header-units">
                    <th>µin</th><th>µm</th>
                    <th>µin</th><th>µm</th>
                    <th>µm</th><th>µm</th>
                  </tr>
                </thead>
                <tbody>${rows}</tbody>
              </table>
            </div>
          </div>
          <div class="sf-notes">
            <div class="sf-note"><strong>Rt</strong> = Rp + Rv</div>
            <div class="sf-note"><strong>Rz</strong> = &Sigma;Rp + &Sigma;Rv (5 deepest peaks &amp; valleys)</div>
          </div>
        </div>
      `;
    },

    // ===== SCIENTIFIC CALCULATOR =====
    'scientific-calculator'() {
      return `
        <div class="sci-display">
          <div class="expression" id="sci-expr"></div>
          <div class="current" id="sci-current">0</div>
        </div>
        <div class="sci-grid">
          <button class="sci-btn fn" onclick="SciCalc.fn('sin')">sin</button>
          <button class="sci-btn fn" onclick="SciCalc.fn('cos')">cos</button>
          <button class="sci-btn fn" onclick="SciCalc.fn('tan')">tan</button>
          <button class="sci-btn fn" onclick="SciCalc.fn('log')">log</button>
          <button class="sci-btn fn" onclick="SciCalc.fn('ln')">ln</button>

          <button class="sci-btn fn" onclick="SciCalc.fn('asin')">sin⁻¹</button>
          <button class="sci-btn fn" onclick="SciCalc.fn('acos')">cos⁻¹</button>
          <button class="sci-btn fn" onclick="SciCalc.fn('atan')">tan⁻¹</button>
          <button class="sci-btn fn" onclick="SciCalc.fn('sqrt')">√</button>
          <button class="sci-btn fn" onclick="SciCalc.fn('pow2')">x²</button>

          <button class="sci-btn fn" onclick="SciCalc.constant('pi')">π</button>
          <button class="sci-btn fn" onclick="SciCalc.constant('e')">e</button>
          <button class="sci-btn fn" onclick="SciCalc.input('(')">(</button>
          <button class="sci-btn fn" onclick="SciCalc.input(')')">)</button>
          <button class="sci-btn fn" onclick="SciCalc.fn('pow')">x^y</button>

          <button class="sci-btn clear" onclick="SciCalc.clear()">AC</button>
          <button class="sci-btn clear" onclick="SciCalc.backspace()">DEL</button>
          <button class="sci-btn fn" onclick="SciCalc.fn('percent')">%</button>
          <button class="sci-btn op" onclick="SciCalc.op('/')">÷</button>
          <button class="sci-btn op" onclick="SciCalc.op('*')">×</button>

          <button class="sci-btn num" onclick="SciCalc.input('7')">7</button>
          <button class="sci-btn num" onclick="SciCalc.input('8')">8</button>
          <button class="sci-btn num" onclick="SciCalc.input('9')">9</button>
          <button class="sci-btn op" onclick="SciCalc.op('-')">−</button>
          <button class="sci-btn op" onclick="SciCalc.op('+')">+</button>

          <button class="sci-btn num" onclick="SciCalc.input('4')">4</button>
          <button class="sci-btn num" onclick="SciCalc.input('5')">5</button>
          <button class="sci-btn num" onclick="SciCalc.input('6')">6</button>
          <button class="sci-btn num" onclick="SciCalc.input('1')">1</button>
          <button class="sci-btn num" onclick="SciCalc.input('2')">2</button>

          <button class="sci-btn num" onclick="SciCalc.input('3')">3</button>
          <button class="sci-btn num" onclick="SciCalc.input('0')">0</button>
          <button class="sci-btn num" onclick="SciCalc.input('.')">.</button>
          <button class="sci-btn fn" onclick="SciCalc.toggleSign()">±</button>
          <button class="sci-btn eq" onclick="SciCalc.evaluate()">=</button>
        </div>
      `;
    },

    // ===== SETTINGS =====
    settings() {
      return `
        <div class="section-title">Preferences</div>
        <div class="settings-section">
          <div class="setting-row">
            <span class="setting-label">Unit System</span>
            <select class="form-select" style="width:auto;" id="set-units" onchange="App.settings.units=this.value; App.saveSettings();">
              <option value="metric" ${App.settings.units==='metric'?'selected':''}>Metric</option>
              <option value="imperial" ${App.settings.units==='imperial'?'selected':''}>Imperial</option>
            </select>
          </div>
          <div class="setting-row">
            <span class="setting-label">Decimal Places</span>
            <select class="form-select" style="width:auto;" id="set-decimals" onchange="App.settings.decimals=Number(this.value); App.saveSettings();">
              <option value="1" ${App.settings.decimals===1?'selected':''}>1</option>
              <option value="2" ${App.settings.decimals===2?'selected':''}>2</option>
              <option value="3" ${App.settings.decimals===3?'selected':''}>3</option>
              <option value="4" ${App.settings.decimals===4?'selected':''}>4</option>
            </select>
          </div>
        </div>
        <div class="section-title">About</div>
        <div class="settings-section">
          <div class="setting-row">
            <span class="setting-label">App Version</span>
            <span class="setting-value">1.0.0</span>
          </div>
          <div class="setting-row">
            <span class="setting-label">CUBONIX</span>
            <span class="setting-value">Industrial Abrasives</span>
          </div>
        </div>
      `;
    },
  },
};

// ===== CALCULATOR FUNCTIONS =====
const Calc = {
  fmt(n) {
    if (n === null || n === undefined || isNaN(n)) return '--';
    const d = App.settings.decimals;
    return Number(n).toFixed(d);
  },

  setResult(id, val) {
    const el = document.getElementById(id);
    if (!el) return;
    if (val === null || val === undefined || isNaN(val)) {
      el.textContent = '--';
      el.classList.add('empty');
    } else {
      el.textContent = this.fmt(val);
      el.classList.remove('empty');
    }
  },

  val(id) {
    const el = document.getElementById(id);
    if (!el || el.value === '') return null;
    return parseFloat(el.value);
  },

  resetForm(inputs, outputs) {
    inputs.forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    outputs.forEach(id => { const el = document.getElementById(id); if (el) { el.textContent = '--'; el.classList.add('empty'); }});
  },

  // Wheel Speed
  wheelSpeed() {
    const mode = document.getElementById('ws-mode').value;
    const d = this.val('ws-diameter');
    if (mode === 'rpm-to-speed') {
      const n = this.val('ws-rpm');
      if (d && n) {
        const ms = (Math.PI * d * n) / (1000 * 60);
        const ftmin = ms * 196.85;
        this.setResult('ws-val-ms', ms);
        this.setResult('ws-val-ftmin', ftmin);
      } else {
        this.setResult('ws-val-ms', null);
        this.setResult('ws-val-ftmin', null);
      }
    } else {
      const v = this.val('ws-speed-input');
      if (d && v) {
        const rpm = (v * 1000 * 60) / (Math.PI * d);
        this.setResult('ws-val-rpm', rpm);
      } else {
        this.setResult('ws-val-rpm', null);
      }
    }
  },

  wheelSpeedToggle() {
    const mode = document.getElementById('ws-mode')?.value;
    if (!mode) return;
    const rpmToSpeed = mode === 'rpm-to-speed';
    const el = id => document.getElementById(id);
    if (el('ws-rpm-group')) el('ws-rpm-group').style.display = rpmToSpeed ? '' : 'none';
    if (el('ws-speed-group')) el('ws-speed-group').style.display = rpmToSpeed ? 'none' : '';
    if (el('ws-result-ms')) el('ws-result-ms').style.display = rpmToSpeed ? '' : 'none';
    if (el('ws-result-ftmin')) el('ws-result-ftmin').style.display = rpmToSpeed ? '' : 'none';
    if (el('ws-result-rpm')) el('ws-result-rpm').style.display = rpmToSpeed ? 'none' : '';
    this.wheelSpeed();
  },

  resetWheelSpeed() {
    ['ws-diameter','ws-rpm','ws-speed-input'].forEach(id => { const el = document.getElementById(id); if(el) el.value=''; });
    ['ws-val-ms','ws-val-ftmin','ws-val-rpm'].forEach(id => { const el = document.getElementById(id); if(el) { el.textContent='--'; el.classList.add('empty'); }});
  },

  // Length
  convertLength() {
    const v = this.val('len-val');
    const from = document.getElementById('len-from').value;
    const to = document.getElementById('len-to').value;
    const toMM = { mm: 1, cm: 10, m: 1000, inch: 25.4, ft: 304.8 };
    if (v !== null) {
      const result = v * toMM[from] / toMM[to];
      this.setResult('len-result', result);
      document.getElementById('len-result-label').textContent = `${v} ${from} =`;
    }
  },

  // Velocity
  convertVelocity() {
    const v = this.val('vel-val');
    const from = document.getElementById('vel-from').value;
    const to = document.getElementById('vel-to').value;
    const toMS = { 'm/s': 1, 'm/min': 1/60, 'ft/min': 0.00508, 'ft/s': 0.3048, 'km/h': 1/3.6, 'mph': 0.44704 };
    if (v !== null) {
      const result = v * toMS[from] / toMS[to];
      this.setResult('vel-result', result);
      document.getElementById('vel-result-label').textContent = `${v} ${from} =`;
    }
  },

  // Flow Rate
  convertFlow() {
    const v = this.val('flow-val');
    const from = document.getElementById('flow-from').value;
    const to = document.getElementById('flow-to').value;
    const toLPM = { 'L/min': 1, 'gal/min': 3.78541, 'L/h': 1/60, 'm³/h': 1000/60 };
    if (v !== null) {
      const result = v * toLPM[from] / toLPM[to];
      this.setResult('flow-result', result);
      document.getElementById('flow-result-label').textContent = `${v} ${from} =`;
    }
  },

  // Coolant
  coolant() {
    const b = this.val('cool-width');
    const q = this.val('cool-rate');
    if (b !== null && q !== null) {
      const Q = b * q;
      this.setResult('cool-result', Q);
      this.setResult('cool-result-gal', Q / 3.78541);
    } else {
      this.setResult('cool-result', null);
      this.setResult('cool-result-gal', null);
    }
  },

  coolantPreset() {
    const v = document.getElementById('cool-type').value;
    if (v) {
      document.getElementById('cool-rate').value = v;
      this.coolant();
    }
  },

  // Q Prime
  qPrime() {
    const ae = this.val('qp-ae');
    const vw = this.val('qp-vw');
    const b = this.val('qp-b');
    if (ae !== null && vw !== null) {
      const qp = ae * vw;
      this.setResult('qp-result', qp);
      this.setResult('qp-result2', qp);
      if (b !== null) {
        this.setResult('qp-total', qp * b);
      } else {
        this.setResult('qp-total', null);
      }
    } else {
      this.setResult('qp-result', null);
      this.setResult('qp-result2', null);
      this.setResult('qp-total', null);
    }
  },

  // Traverse Dressing
  traverseDressing() {
    const bd = this.val('td-bd');
    const ns = this.val('td-ns');
    const vd = this.val('td-vd');
    if (bd && ns && vd) {
      const fd = vd / ns;
      const ud = bd / fd;
      this.setResult('td-ud', ud);
      this.setResult('td-fd', fd);
    } else {
      this.setResult('td-ud', null);
      this.setResult('td-fd', null);
    }
  },

  // Stationary Dressing
  stationaryDressing() {
    const ad = this.val('sd-ad');
    const ns = this.val('sd-ns');
    const vd = this.val('sd-vd');
    if (ad && ns && vd) {
      const fd = vd / ns;
      const ud = ad / fd;
      this.setResult('sd-ud', ud);
      this.setResult('sd-fd', fd);
    } else {
      this.setResult('sd-ud', null);
      this.setResult('sd-fd', null);
    }
  },

  // Plunge Dressing
  plungeDressing() {
    const ds = this.val('pd-ds');
    const ns = this.val('pd-ns');
    const dr = this.val('pd-dr');
    const nr = this.val('pd-nr');
    const dir = parseInt(document.getElementById('pd-dir')?.value || '1');
    if (ds && ns && dr && nr) {
      const vs = (Math.PI * ds * ns) / (1000 * 60);
      const vr = (Math.PI * dr * nr) / (1000 * 60);
      const qd = dir * (vr / vs);
      this.setResult('pd-qd', qd);
      this.setResult('pd-vs', vs);
      this.setResult('pd-vr', vr);
    } else {
      this.setResult('pd-qd', null);
      this.setResult('pd-vs', null);
      this.setResult('pd-vr', null);
    }
  },

  // Offline Dressing
  offlineDressing() {
    const cur = this.val('od-current');
    const tar = this.val('od-target');
    const inf = this.val('od-infeed');
    if (cur && tar && inf && inf > 0) {
      const diametral = cur - tar;
      const radial = diametral / 2;
      const passes = Math.ceil(radial / inf);
      this.setResult('od-removal', radial);
      this.setResult('od-diam', diametral);
      this.setResult('od-passes', passes);
    } else {
      this.setResult('od-removal', null);
      this.setResult('od-diam', null);
      this.setResult('od-passes', null);
    }
  },

  // Kerf Loss
  kerfLoss() {
    const t = this.val('kl-thick');
    const n = this.val('kl-cuts');
    const w = this.val('kl-width');
    const h = this.val('kl-height');
    if (t && n) {
      const totalLength = t * n;
      this.setResult('kl-length', totalLength);
      if (w) {
        const area = totalLength * w;
        this.setResult('kl-area', area);
        if (h) {
          this.setResult('kl-vol', area * h);
        } else {
          this.setResult('kl-vol', null);
        }
      } else {
        this.setResult('kl-area', null);
        this.setResult('kl-vol', null);
      }
    } else {
      this.setResult('kl-length', null);
      this.setResult('kl-area', null);
      this.setResult('kl-vol', null);
    }
  },
};

// ===== SCIENTIFIC CALCULATOR =====
const SciCalc = {
  expr: '',
  display: '0',
  justEvaluated: false,

  update() {
    document.getElementById('sci-expr').textContent = this.expr;
    document.getElementById('sci-current').textContent = this.display;
  },

  input(ch) {
    if (this.justEvaluated) {
      this.expr = '';
      this.display = '';
      this.justEvaluated = false;
    }
    if (this.display === '0' && ch !== '.') {
      this.display = ch;
    } else {
      this.display += ch;
    }
    this.update();
  },

  op(o) {
    this.display += ' ' + o + ' ';
    this.justEvaluated = false;
    this.update();
  },

  fn(name) {
    const cur = parseFloat(this.display) || 0;
    let result;
    switch (name) {
      case 'sin': result = Math.sin(cur * Math.PI / 180); break;
      case 'cos': result = Math.cos(cur * Math.PI / 180); break;
      case 'tan': result = Math.tan(cur * Math.PI / 180); break;
      case 'asin': result = Math.asin(cur) * 180 / Math.PI; break;
      case 'acos': result = Math.acos(cur) * 180 / Math.PI; break;
      case 'atan': result = Math.atan(cur) * 180 / Math.PI; break;
      case 'log': result = Math.log10(cur); break;
      case 'ln': result = Math.log(cur); break;
      case 'sqrt': result = Math.sqrt(cur); break;
      case 'pow2': result = cur * cur; break;
      case 'percent': result = cur / 100; break;
      case 'pow':
        this.display += ' ^ ';
        this.update();
        return;
      default: return;
    }
    this.expr = `${name}(${cur})`;
    this.display = isNaN(result) ? 'Error' : String(parseFloat(result.toFixed(10)));
    this.justEvaluated = true;
    this.update();
  },

  constant(c) {
    if (c === 'pi') this.display = String(Math.PI);
    if (c === 'e') this.display = String(Math.E);
    this.justEvaluated = false;
    this.update();
  },

  toggleSign() {
    if (this.display && this.display !== '0') {
      if (this.display.startsWith('-')) {
        this.display = this.display.slice(1);
      } else {
        this.display = '-' + this.display;
      }
      this.update();
    }
  },

  clear() {
    this.expr = '';
    this.display = '0';
    this.justEvaluated = false;
    this.update();
  },

  backspace() {
    if (this.display.length > 1) {
      this.display = this.display.slice(0, -1).trimEnd();
    } else {
      this.display = '0';
    }
    this.update();
  },

  evaluate() {
    try {
      let e = this.display
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/−/g, '-')
        .replace(/\^/g, '**');
      e = e.replace(/[^0-9+\-*/().%\s*]/g, '');
      const result = Function('"use strict"; return (' + e + ')')();
      this.expr = this.display;
      this.display = isNaN(result) || !isFinite(result) ? 'Error' : String(parseFloat(result.toFixed(10)));
      this.justEvaluated = true;
    } catch {
      this.expr = this.display;
      this.display = 'Error';
      this.justEvaluated = true;
    }
    this.update();
  },
};

const Glossary = {
  openSections: {},

  toggle(i) {
    this.openSections[i] = !this.openSections[i];
    const body = document.getElementById('gl-body-' + i);
    const arrow = document.getElementById('gl-arrow-' + i);
    if (body) body.classList.toggle('open');
    if (arrow) arrow.classList.toggle('expanded');
  },

  jumpTo(i) {
    const body = document.getElementById('gl-body-' + i);
    const arrow = document.getElementById('gl-arrow-' + i);
    if (body && !body.classList.contains('open')) {
      body.classList.add('open');
      if (arrow) arrow.classList.add('expanded');
      this.openSections[i] = true;
    }
    const sec = document.getElementById('gl-sec-' + i);
    if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  search(q) {
    q = q.toLowerCase().trim();
    let anyVisible = false;
    GLOSSARY.forEach((g, i) => {
      const sec = document.getElementById('gl-sec-' + i);
      const body = document.getElementById('gl-body-' + i);
      const arrow = document.getElementById('gl-arrow-' + i);
      if (!sec) return;
      let catMatch = false;
      const terms = sec.querySelectorAll('.gl-term');
      terms.forEach((el, ti) => {
        const name = g.terms[ti][0].toLowerCase();
        const def = g.terms[ti][1].toLowerCase();
        const match = !q || name.includes(q) || def.includes(q);
        el.style.display = match ? '' : 'none';
        if (match) catMatch = true;
      });
      sec.style.display = catMatch ? '' : 'none';
      if (catMatch) anyVisible = true;
      if (q && catMatch && body) { body.classList.add('open'); if (arrow) arrow.classList.add('expanded'); }
      if (!q && body) { body.classList.remove('open'); if (arrow) arrow.classList.remove('expanded'); }
    });
    const noRes = document.getElementById('gl-no-results');
    if (noRes) noRes.style.display = anyVisible ? 'none' : '';
  },
};

document.addEventListener('DOMContentLoaded', () => App.init());
