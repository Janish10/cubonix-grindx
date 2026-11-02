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
          <div class="home-tile" onclick="App.navigateTo('coolant-calculator')">
            <div class="tile-icon">♨</div>
            <div class="tile-label">Coolant Calculator</div>
          </div>
          <div class="home-tile" onclick="App.navigateTo('q-prime')">
            <div class="tile-icon">↓</div>
            <div class="tile-label">Material Removal Rate</div>
          </div>
          <div class="home-tile" onclick="App.navigateTo('traverse-dressing')">
            <div class="tile-icon">◎</div>
            <div class="tile-label">Traverse Dressing</div>
          </div>
          <div class="home-tile" onclick="App.navigateTo('kerf-loss')">
            <div class="tile-icon">□</div>
            <div class="tile-label">Kerf Loss Calculator</div>
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

document.addEventListener('DOMContentLoaded', () => App.init());
