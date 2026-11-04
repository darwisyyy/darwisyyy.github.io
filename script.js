const cases = {
  affordability: {
    title: 'Malaysia Affordability Dashboard', meta: 'ACADEMIC TEAM PROJECT · DATACRUNCH, UMT · 2025',
    intro: 'A Python and Power BI project comparing 2022 household income, expenditure and socioeconomic indicators across 16 Malaysian states and federal territories.',
    problem: 'Income, expenditure, prices and poverty are reported separately. Our team brought those sources together so regional comparisons could be explored in one dashboard.',
    contributions: ['Prepared the data with Python and pandas, calculated the project index and developed the Power BI dashboard.', 'Integrated household income/expenditure and CPI data by state and year, and attached national labour-force indicators by year. National indicators were not treated as separate state measurements.', 'Harmonised geographic names and built state filters, a map and comparison charts.', 'Rechecked all 16 exported index values against the notebook calculation and prepared the verified preview shown here.'],
    learning: 'The implemented index is (mean income − mean expenditure) ÷ mean expenditure: higher values mean a larger income margin relative to spending. All 16 exported values match that formula within 1e-12. The portfolio hero uses a different, explicitly labelled measure: expenditure ÷ income. Its higher values mean a larger spending share. The verified preview uses unweighted means of state records, not population-weighted Malaysian household averages.',
    next: 'Extend the reviewed workflow to later survey years, validate state/year uniqueness before each join and document any weighting used. The archived 2025 Power BI screenshot is retained as evidence of the original build; its top KPI cards must not be read as overall state averages.',
    visualLabel: 'Verified data review', image: 'assets/affordability-verified.png', alt: 'Verified 2022 data review showing unweighted state means and two separately defined affordability measures',
    caption: 'Reconstructed from the original project workbook and checked against the notebook. This verification preview is not a Power BI screenshot.',
    extraImages: [
      {src: 'assets/affordability-dashboard.png', label: 'Original Power BI dashboard', alt: 'Archived 2025 Power BI dashboard with state filters, a map and comparison charts', caption: 'Original 2025 build. Top KPI cards display extrema in the saved view, not the overall unweighted means; use the verified preview for those means. Do not interpret the original KPI goal arrows or colours as validated affordability conclusions.'},
      {src: 'assets/affordability-excel.png', label: 'Original Excel data', alt: 'Original Excel export containing the 16 state and federal-territory records', caption: 'Selected columns from the original workbook. The reviewed CSV provides both calculated ratios with their distinct meanings.'}
    ],
    resources: [{href: 'assets/affordability-reviewed-2022.csv', label: 'Download reviewed 2022 data (CSV)', download: true}],
    tools: 'Python · pandas · Power BI · Excel'
  },
  pipeline: {
    title: 'Data Engineering Assistant', meta: 'PUMPKIN AI VENTURES · INTERNSHIP · LOCAL PROTOTYPE',
    intro: 'A local application combining spreadsheet ingestion, structured database tables and AI-assisted data work.',
    problem: 'Moving between spreadsheets, database tables, cleaning and visualisation requires repeated preparation. This application brings those steps into one inspectable workflow.',
    contributions: ['Implemented CSV/Excel ingestion paths into DuckDB through a Python/FastAPI application.', 'Worked on generated dbt staging models and fact/dimension tables, with column validation and dataset previews.', 'Developed Google Sheets synchronisation and BigQuery integration paths, refining tool schemas and error handling.', 'Developed Google ADK workflows for natural-language queries, cleaning, insights and visualisation.'],
    learning: 'The implemented workflow connects uploaded data with database tables and query tools. Dataset previews and column checks make generated schemas easier to inspect before later processing. The image shows the actual local application, not a production deployment.',
    next: 'Expand regression coverage for schema generation, changing source columns and integration failures. The application remains a local prototype.',
    imageFrame: true, image: 'assets/engineering-front.png', alt: 'Actual local Data Engineering Assistant with the Command Console and populated AI Data Insights view', caption: '', tools: 'Python · FastAPI · DuckDB · dbt · BigQuery · Google ADK'
  },
  geoflow: {
    title: 'GeoFlow: Evidence & Reporting', meta: 'PUMPKIN AI VENTURES · INTERNSHIP · LOCAL PROTOTYPE',
    intro: 'Backend, frontend and QA work on AI visibility analysis, website audits and reporting.',
    problem: 'An incomplete answer, a collection failure and a usable answer convey different information. Reports must preserve those distinctions so reviewers can interpret the results.',
    contributions: ['Developed Python/FastAPI and React/TypeScript features for monitoring, website audits and content workflows.', 'Refined answer eligibility, citation handling and scoring to distinguish usable evidence from incomplete responses and collection failures.', 'Developed and refined PDF, Excel and CSV reports with consistent selections, timestamps and source references.', 'Added regression checks for evidence handling, scoring and report scope.'],
    learning: 'The reporting workflow preserves source references and collection states instead of treating every returned answer as usable evidence. This connects data-quality rules with the output a reviewer actually receives.',
    next: 'Continue testing provider differences and report consistency. The interface example uses sample values; it is not a statement of client results or production performance.',
    image: 'assets/geoflow-monitor.jpg', alt: 'GeoFlow monitoring interface with illustrative sample questions and results', caption: 'Existing interface example with sample data, not measured client outcomes.', tools: 'Python · FastAPI · React · TypeScript · Pytest · Vitest'
  },
  tracking: {
    title: 'Tracking Health Check: AI Skill', meta: 'PUMPKIN AI VENTURES · INTERNSHIP · LOCAL PROTOTYPE',
    intro: 'A reusable AI skill that runs browser journeys, observes outgoing analytics requests and produces HTML reports with supporting evidence.',
    problem: 'A completed browser action does not prove an analytics request was sent. An outgoing request also does not prove that a vendor accepted or stored the event.',
    contributions: ['Developed Python/Patchright automation for observing GA4, Google Ads, Meta and TikTok requests.', 'Implemented cart-to-checkout progression in the same browser session, including intermediate delivery choices and payment-method selection.', 'Improved dynamic-form entry, submit-readiness diagnostics, cookie handling and evidence-backed HTML reports.', 'Added regression cases distinguishing completed actions, detected requests, rejected forms and incomplete capture.'],
    learning: 'The latest local regression run completed 190 passes with 5 skips on 2 November 2026. Reports distinguish an observed outgoing request from an accepted lead, purchase or vendor-side result. The linked public sample is synthetic and shows the reporting approach without exposing a private audit.',
    next: 'Continue cross-site testing and improve support for unfamiliar interfaces. Some sites reject synthetic details or require CAPTCHA, login or other manual steps; universal completion is not claimed.',
    resources: [{href: 'assets/tracking-sample.html', label: 'View synthetic report example', download: false}],
    tools: 'Python · Patchright · AI Skill · HTML reporting · Regression testing'
  }
};
const chartData = [{"state": "Sabah", "share": 54.1565}, {"state": "Kelantan", "share": 71.7503}, {"state": "Johor", "share": 62.7216}, {"state": "Selangor", "share": 55.3421}, {"state": "Kuala Lumpur", "share": 58.7092}];
const chart = document.querySelector('#affordability-chart');
chartData.forEach(({state, share}) => {
  const row = document.createElement('div'); row.className = 'chart-row';
  const label = document.createElement('span'); label.textContent = state;
  const track = document.createElement('div'); track.className = 'bar-track';
  const bar = document.createElement('div'); bar.className = 'bar'; bar.style.width = `${Math.min(share, 100)}%`; track.append(bar);
  const value = document.createElement('strong'); value.textContent = `${share.toFixed(1)}%`;
  row.append(label, track, value); chart.append(row);
});
const caption = document.createElement('p'); caption.className = 'chart-caption'; caption.textContent = 'Selected regions · expenditure ÷ income · higher means a larger spending share'; chart.append(caption);

const focusView = document.querySelector('#project-focus');
const projectGrid = document.querySelector('.projects');
const aiSwitcher = document.querySelector('#ai-switcher');
let selectedAI = 'geoflow';
let focusedProject;

function renderResources(item) {
  return (item.resources || []).map(link => `<p class="case-resources"><a href="${escapeText(link.href)}" ${link.download ? 'download' : 'target="_blank" rel="noopener noreferrer"'}>${escapeText(link.label)} <span aria-hidden="true">↗</span></a></p>`).join('');
}

function renderFocusedProject(key, visualIndex = 0) {
  focusedProject = key;
  const item = cases[key];
  const images = item.image ? [{src: item.image, alt: item.alt, caption: item.caption, label: item.visualLabel || 'Project image'}, ...(item.extraImages || [])] : [];
  const image = images[visualIndex];
  const visualButtons = images.length > 1 ? `<div class="visual-switcher" role="group" aria-label="Choose project image">${images.map((_, i) => `<button data-visual="${i}" aria-pressed="${i === visualIndex}">${escapeText(images[i].label || 'Project image')}</button>`).join('')}</div>` : '';
  const media = image ? `<figure class="focus-figure">${item.imageFrame ? '<span class="engineering-shot">' : ''}<img src="${image.src}" alt="${escapeText(image.alt)}">${item.imageFrame ? '</span>' : ''}${image.caption ? `<figcaption>${escapeText(image.caption)}</figcaption>` : ''}</figure>` : `<figure class="focus-figure"><div class="focus-tracking">${document.querySelector('.tracking-art').outerHTML}</div><figcaption>Illustration of the AI skill workflow: browser actions, captured requests and evidence-based reporting.</figcaption></figure>`;
  focusView.innerHTML = `<article data-project-id="${key}"><div class="focus-heading"><div><p class="case-meta">${escapeText(item.meta)}</p><h3>${escapeText(item.title)}</h3></div><div><p>${escapeText(item.intro)}</p><p class="focus-tools">${escapeText(item.tools)}</p>${renderResources(item)}</div></div>${visualButtons}${media}<div class="focus-story"><section><h4>The problem</h4><p>${escapeText(item.problem)}</p></section><section><h4>My contribution</h4><ul>${item.contributions.map(text => `<li>${escapeText(text)}</li>`).join('')}</ul></section><section><h4>Results &amp; what I learned</h4><p>${escapeText(item.learning)}</p></section><section><h4>Next iteration</h4><p>${escapeText(item.next)}</p></section></div></article>`;
  document.querySelector('#filter-status').textContent = `Showing one project: ${item.title}`;
}

function selectCategory(category) {
  const all = category === 'all';
  projectGrid.hidden = !all;
  focusView.hidden = all;
  aiSwitcher.hidden = category !== 'ai-projects';
  document.querySelectorAll('.filter').forEach(button => {
    const active = button.dataset.filter === category;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active);
  });
  if (all) {
    document.querySelectorAll('.project').forEach(project => { project.hidden = false; });
    document.querySelector('#filter-status').textContent = 'Showing 4 projects';
    focusView.replaceChildren();
    focusedProject = undefined;
  } else {
    renderFocusedProject(category === 'analytics' ? 'affordability' : category === 'engineering' ? 'pipeline' : selectedAI);
  }
}
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => selectCategory(button.dataset.filter)));
document.querySelectorAll('[data-ai-project]').forEach(button => button.addEventListener('click', () => {
  selectedAI = button.dataset.aiProject;
  document.querySelectorAll('[data-ai-project]').forEach(item => item.setAttribute('aria-pressed', item === button));
  renderFocusedProject(selectedAI);
}));
focusView.addEventListener('click', event => {
  const button = event.target.closest('[data-visual]');
  if (!button) return;
  const index = Number(button.dataset.visual);
  renderFocusedProject(focusedProject, index);
  focusView.querySelector(`[data-visual="${index}"]`).focus();
});

const dialog = document.querySelector('#case-study');
let caseTrigger;
const escapeText = text => text.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const item = cases[button.dataset.project]; caseTrigger = button;
  document.querySelector('#case-content').innerHTML = `<p class="case-meta">${escapeText(item.meta)}</p><h2 id="case-title">${escapeText(item.title)}</h2><p>${escapeText(item.intro)}</p><p class="tags">${escapeText(item.tools)}</p>${renderResources(item)}${item.image ? `<figure>${item.imageFrame ? '<span class="engineering-shot">' : ''}<img src="${item.image}" alt="${escapeText(item.alt)}">${item.imageFrame ? '</span>' : ''}${item.caption ? `<figcaption>${escapeText(item.caption)}</figcaption>` : ''}</figure>` : ''}${(item.extraImages || []).map(image => `<figure><img src="${image.src}" alt="${escapeText(image.alt)}">${image.caption ? `<figcaption>${escapeText(image.caption)}</figcaption>` : ''}</figure>`).join('')}<h3>The problem</h3><p>${escapeText(item.problem)}</p><h3>My contribution</h3><ul>${item.contributions.map(text => `<li>${escapeText(text)}</li>`).join('')}</ul><h3>Results &amp; what I learned</h3><p>${escapeText(item.learning)}</p><h3>Next iteration</h3><p class="case-note">${escapeText(item.next)}</p>`;
  dialog.showModal(); dialog.scrollTop = 0; document.body.style.overflow = 'hidden';
}));
document.querySelector('#close-case').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { document.body.style.overflow = ''; caseTrigger?.focus(); });

const photoDialog = document.querySelector('#photo-viewer');
let photoTrigger;
let photoGroup = [];
let photoIndex = 0;
function showPhoto(index) {
  photoIndex = (index + photoGroup.length) % photoGroup.length;
  const button = photoGroup[photoIndex];
  const full = document.querySelector('#photo-full');
  full.src = button.dataset.photo;
  photoDialog.classList.toggle('rotated-photo-view', button.dataset.rotate === 'true');
  full.alt = button.querySelector('img').alt;
  document.querySelector('#photo-caption').textContent = button.dataset.caption;
  document.querySelector('#photo-position').textContent = `${photoIndex + 1} / ${photoGroup.length}`;
  document.querySelector('#photo-navigation').hidden = photoGroup.length < 2;
}
document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => {
  photoTrigger = button;
  const gallery = button.closest('.activity-gallery');
  photoGroup = gallery ? [...gallery.querySelectorAll('[data-photo]')] : [button];
  showPhoto(photoGroup.indexOf(button));
  photoDialog.showModal();
  photoDialog.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}));
document.querySelector('#previous-photo').addEventListener('click', () => showPhoto(photoIndex - 1));
document.querySelector('#next-photo').addEventListener('click', () => showPhoto(photoIndex + 1));
photoDialog.addEventListener('keydown', event => {
  if (photoGroup.length < 2) return;
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showPhoto(photoIndex + (event.key === 'ArrowLeft' ? -1 : 1));
  }
});
document.querySelector('#close-photo').addEventListener('click', () => photoDialog.close());
photoDialog.addEventListener('click', event => {
  if (event.target !== photoDialog) return;
  const rect = photoDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) photoDialog.close();
});
photoDialog.addEventListener('close', () => { document.body.style.overflow = ''; photoTrigger?.focus(); });
document.querySelectorAll('[data-activity-year]').forEach(button => button.addEventListener('click', () => {
  const year = button.dataset.activityYear;
  document.querySelectorAll('[data-activity-year]').forEach(item => item.setAttribute('aria-pressed', item === button));
  document.querySelectorAll('.activity-story').forEach(story => {
    story.hidden = year !== 'all' && story.dataset.year !== year;
  });
}));
