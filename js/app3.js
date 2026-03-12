// Wedding Command Center - App Logic

let weddingData = null;
let currentUser = null;
let accessLevel = 'guest'; // 'family', 'vendor', or 'guest'

// Name lists for access control
const familyNames = [
    'karen', 'danny', 'jose', 'lauren', 'cindy', 'duschan', 'duey',
    'elizabeth', 'peggy', 'marilyn', 'kali', 'jeanne', 'dave', 'milo',
    'remy', 'amanda', 'doug', 'ellison', 'kathryn', 'nestor',
    'zach', 'joey', 'john', 'gabriel', 'jonah', 'jess', 'mady', 'kelsey',
    'gabi', 'anna', 'carly', 'blair', 'sara', 'reagan', 'jenny', 'kagan',
    'khristian', 'scottie', 'tim', 'scott'
];

// Planning crew - can see Tasks, Budget, and Docs
const planningCrew = ['karen', 'danny', 'jeanne', 'cindy', 'duey', 'duschan', 'jose'];

const vendorNames = {
    'david hargrove': 'Caterer',
    'hargrove': 'Caterer',
    '2b1l': 'Caterer',
    'antonia': 'Decor / Banners',
    'lady b': 'DJ',
    'sam': 'Piano',
    'kuslan': 'Piano',
    'stephanie': 'Photographer',
    'terrant': 'Photographer',
    'sophie': 'Tailor / Dress',
    'tran': 'Tailor / Dress',
    'thomas': 'After Party Band',
    'glass': 'After Party Band',
    'branson': 'Bartenders',
    'larkin': 'Rain Tent'
};

// Map vendor roles to their contract files
const vendorContracts = {
    'Caterer': 'documents/contract-david-2b1l.pdf',
    'DJ': 'documents/contract-lady-b.pdf',
    'Bartenders': 'documents/contract-bronson.pdf'
};

// Check if name matches family
function isFamilyMember(name) {
    const lower = name.toLowerCase().trim();
    return familyNames.some(n => lower.includes(n) || n.includes(lower));
}

// Check if name is in planning crew (can see Tasks, Budget, Docs)
function isPlanningCrew(name) {
    const lower = name.toLowerCase().trim();
    return planningCrew.some(n => lower.includes(n) || n.includes(lower));
}

// Check if name matches vendor and return their role
function getVendorRole(name) {
    const lower = name.toLowerCase().trim();
    for (const [vendorName, role] of Object.entries(vendorNames)) {
        if (lower.includes(vendorName) || vendorName.includes(lower)) {
            return role;
        }
    }
    return null;
}

// Initialize access control
function initAccessControl() {
    const savedName = localStorage.getItem('weddingUserName');
    const modal = document.getElementById('welcome-modal');
    const input = document.getElementById('name-input');
    const submitBtn = document.getElementById('name-submit');
    const userRoleEl = document.getElementById('user-role');

    if (savedName) {
        setUserAccess(savedName);
        modal.classList.add('hidden');
    }

    submitBtn.addEventListener('click', () => handleNameSubmit(input, modal));
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleNameSubmit(input, modal);
    });

    // Click on user role to change name
    userRoleEl.addEventListener('click', () => {
        localStorage.removeItem('weddingUserName');
        modal.classList.remove('hidden');
        input.value = '';
        input.focus();
    });
}

function handleNameSubmit(input, modal) {
    const name = input.value.trim();
    if (name) {
        localStorage.setItem('weddingUserName', name);
        setUserAccess(name);
        modal.classList.add('hidden');
        // Re-render to apply access level
        renderVendors();
        renderBudget();
        applyAccessLevel();
        renderPersonalCard();
    }
}

function setUserAccess(name) {
    currentUser = name;
    const userRoleEl = document.getElementById('user-role');
    const notYouLink = `<a href="#" class="not-you-link" onclick="resetName(event)">Not ${name}?</a>`;
    const vendorRole = getVendorRole(name);

    if (isFamilyMember(name)) {
        accessLevel = 'family';
        userRoleEl.innerHTML = `✿ Welcome, ${name} ${notYouLink}`;
        userRoleEl.style.display = 'inline-block';
    } else if (vendorRole) {
        accessLevel = 'vendor';
        currentUser = { name, role: vendorRole };
        userRoleEl.innerHTML = `✿ ${name} - ${vendorRole} ${notYouLink}`;
        userRoleEl.style.display = 'inline-block';
    } else {
        accessLevel = 'guest';
        userRoleEl.innerHTML = `Welcome, ${name} ${notYouLink}`;
        userRoleEl.style.display = 'inline-block';
    }

    applyAccessLevel();
}

function resetName(event) {
    event.preventDefault();
    localStorage.removeItem('weddingUserName');
    currentUser = null;
    const modal = document.getElementById('welcome-modal');
    const input = document.getElementById('name-input');
    modal.classList.remove('hidden');
    input.value = '';
    input.focus();
    const card = document.getElementById('personal-card');
    if (card) card.style.display = 'none';
}

function applyAccessLevel() {
    const budgetNav = document.querySelector('.nav-item[data-section="budget"]');
    const tasksNav = document.querySelector('.nav-item[data-section="tasks"]');
    const docsNav = document.querySelector('.nav-item[data-section="documents"]');
    const userName = typeof currentUser === 'string' ? currentUser : currentUser?.name || '';
    const canSeePlanningTabs = isPlanningCrew(userName);

    // Planning crew sees Tasks, Budget, and Docs
    if (canSeePlanningTabs) {
        if (budgetNav) budgetNav.classList.remove('budget-hidden');
        if (tasksNav) tasksNav.classList.remove('budget-hidden');
        if (docsNav) docsNav.classList.remove('budget-hidden');
    } else {
        if (budgetNav) budgetNav.classList.add('budget-hidden');
        if (tasksNav) tasksNav.classList.add('budget-hidden');
        if (docsNav) docsNav.classList.add('budget-hidden');
    }
}

// Personalized info card
function renderPersonalCard() {
    const card = document.getElementById('personal-card');
    if (!card || !weddingData) return;

    const userName = typeof currentUser === 'string' ? currentUser : (currentUser?.name || '');
    if (!userName) { card.style.display = 'none'; return; }

    const lower = userName.toLowerCase().trim();
    const items = [];

    // Check vendors for this person
    if (weddingData.vendors) {
        weddingData.vendors.forEach(v => {
            const vendorText = `${v.name || ''} ${v.company || ''} ${v.role || ''}`.toLowerCase();
            if (vendorText.includes(lower)) {
                items.push({ label: 'Your Role', text: v.role });
                if (v.arrivalTime) items.push({ label: 'Arrival', text: v.arrivalTime });
                if (v.notes) items.push({ label: 'Details', text: v.notes.replace(/\$[\d,]+(\.\d{2})?/g, '').replace(/deposit|paid|remainder|due|balance/gi, '').replace(/\s+/g, ' ').trim() });
                if (v.phone) items.push({ label: 'Contact', text: `<a href="tel:${v.phone}" style="color:var(--pink-light);">${v.phone}</a>` });
            }
        });
    }

    // Check staffing for this person
    if (weddingData.staffing) {
        weddingData.staffing.forEach(s => {
            if (s.name.toLowerCase().includes(lower)) {
                const alreadyHasRole = items.some(i => i.label === 'Your Role');
                if (!alreadyHasRole) items.push({ label: 'Your Role', text: s.role });
                items.push({ label: 'Task', text: s.task });
            }
        });
    }

    // Check if flower girl / usher
    if (weddingData.flowerGirls && weddingData.flowerGirls.some(fg => fg.toLowerCase().includes(lower))) {
        items.push({ label: 'Duty', text: 'Flower Girl / Usher - hand out petals and help usher guests to seats' });
        items.push({ label: 'Arrive', text: '2:15 PM at Industrial Gardens' });
    }

    // Check if flip crew
    if (weddingData.flipCrew && weddingData.flipCrew.some(fc => fc.toLowerCase().includes(lower))) {
        items.push({ label: 'Duty', text: 'Room Flip Crew - help move tables and flip chairs after ceremony (3:45 PM)' });
    }

    // Check wedding party
    if (weddingData.weddingParty) {
        const wp = weddingData.weddingParty;
        if (wp.maidOfHonor && wp.maidOfHonor.toLowerCase().includes(lower)) {
            items.push({ label: 'Role', text: 'Maid of Honor' });
        }
        if (wp.bestMan && wp.bestMan.toLowerCase().includes(lower)) {
            items.push({ label: 'Role', text: 'Best Man' });
        }
        if (wp.karen && wp.karen.gettingReadyWith && wp.karen.gettingReadyWith.some(n => n.toLowerCase().includes(lower))) {
            items.push({ label: 'Getting Ready', text: 'Hotel Peter and Paul (Covenant Room) - 11:00 AM' });
        }
    }

    // Check ceremony roles
    if (weddingData.ceremony) {
        const cText = JSON.stringify(weddingData.ceremony).toLowerCase();
        if (cText.includes(lower)) {
            if (weddingData.ceremony.processional) {
                weddingData.ceremony.processional.forEach(step => {
                    if (step.toLowerCase().includes(lower)) {
                        items.push({ label: 'Processional', text: step });
                    }
                });
            }
            if (weddingData.ceremony.program) {
                weddingData.ceremony.program.forEach(step => {
                    if (step.toLowerCase().includes(lower)) {
                        items.push({ label: 'Ceremony', text: step });
                    }
                });
            }
        }
    }

    // Find timeline events where this person is mentioned
    const timelineItems = [];
    ['friday', 'saturday', 'sunday'].forEach(day => {
        if (weddingData.timeline && weddingData.timeline[day]) {
            weddingData.timeline[day].forEach(ev => {
                const evText = `${ev.who || ''} ${ev.notes || ''}`.toLowerCase();
                if (evText.includes(lower)) {
                    timelineItems.push(`<strong>${ev.time}</strong> ${ev.event} @ ${ev.location}`);
                }
            });
        }
    });
    if (timelineItems.length > 0) {
        items.push({ label: 'Your Schedule', text: timelineItems.join('<br>') });
    }

    // Special cases for key people
    if (lower === 'karen') {
        if (!items.some(i => i.label === 'Getting Ready')) {
            items.unshift({ label: 'Getting Ready', text: 'Hotel Peter and Paul (Covenant Room) - 11:00 AM' });
        }
    }
    if (lower === 'danny') {
        items.unshift({ label: 'Getting Ready', text: 'Greatman Cottage, 3421 Dauphine Street' });
    }
    if (lower === 'jeanne') {
        if (!items.some(i => i.text && i.text.includes('payment'))) {
            items.push({ label: 'Key Task', text: 'Distribute vendor payments and gratuities at 7:45 PM' });
        }
    }

    // Render the card
    if (items.length === 0) {
        card.style.display = 'none';
        return;
    }

    // Deduplicate items by text
    const seen = new Set();
    const unique = items.filter(item => {
        const key = item.text;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });

    card.innerHTML = `
        <h3>Your Info, ${userName}</h3>
        <div class="your-info">
            ${unique.map(item => `
                <div class="info-item">
                    <span class="info-label">${item.label}:</span> ${item.text}
                </div>
            `).join('')}
        </div>
    `;
    card.style.display = 'block';
}

// Load wedding data
async function loadData() {
    // Use embedded data (works locally and on GitHub Pages)
    if (typeof WEDDING_DATA !== 'undefined') {
        weddingData = WEDDING_DATA;
        initApp();
        return;
    }

    // Fallback to fetch (for servers)
    try {
        const response = await fetch('data/wedding-data.json');
        weddingData = await response.json();
        initApp();
    } catch (error) {
        console.error('Error loading data:', error);
        initApp();
    }
}

function initApp() {
    initAccessControl();
    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute

    renderTimeline();
    renderCeremony();
    renderTasks();
    renderVendors();
    renderBudget();
    renderPeople();
    renderDayOf();
    renderDocuments();

    setupNavigation();
    setupTaskFilters();
    applyAccessLevel();
    renderPersonalCard();
}

// Countdown
function updateCountdown() {
    const weddingDate = new Date('2026-04-11T00:00:00');
    const now = new Date();
    const diff = weddingDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const countdownEl = document.getElementById('countdown');
    if (days > 0) {
        countdownEl.textContent = `${days} days, ${hours} hours to go!`;
    } else if (days === 0) {
        countdownEl.textContent = `TODAY IS THE DAY!`;
    } else {
        countdownEl.textContent = `Married!`;
    }
}

// Navigation
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute('data-section');
            const userName = typeof currentUser === 'string' ? currentUser : (currentUser?.name || '');

            // Block planning tabs (budget, tasks, docs) for non-planning crew
            const planningTabs = ['budget', 'tasks', 'documents'];
            if (planningTabs.includes(sectionId) && !isPlanningCrew(userName)) {
                return;
            }

            // Update nav
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            // Update sections
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.getElementById(sectionId).classList.add('active');

            // Scroll to top
            window.scrollTo(0, 0);
        });
    });
}

// Timeline
function renderTimeline() {
    if (!weddingData || !weddingData.timeline) return;

    const fridayEl = document.getElementById('friday-timeline');
    const saturdayEl = document.getElementById('saturday-timeline');
    const sundayEl = document.getElementById('sunday-timeline');

    function formatNotes(notes) {
        if (!notes) return '';
        const items = notes.split(/\.\s+/).map(s => s.replace(/\.$/, '').trim()).filter(s => s.length > 0);
        if (items.length <= 1) return `<div class="timeline-notes">${notes}</div>`;
        return `<ul class="timeline-notes-list">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    }

    function renderTimelineDay(el, events) {
        if (!el || !events) return;
        el.innerHTML = events.map(item => {
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.location + ' New Orleans')}`;
            const userName = typeof currentUser === 'string' ? currentUser : (currentUser?.name || '');
            const itemText = `${item.who || ''} ${item.notes || ''}`.toLowerCase();
            const isPersonalized = userName && itemText.includes(userName.toLowerCase());
            return `
            <div class="timeline-item${isPersonalized ? ' flower-indicator' : ''}">
                <div class="timeline-time">${item.time}</div>
                <div class="timeline-content">
                    <div class="timeline-event">${item.event}</div>
                    <div class="timeline-location">${item.location} <a href="${mapsUrl}" target="_blank" class="directions-btn" style="margin-left:10px;padding:4px 10px;font-size:0.65rem;">Directions</a></div>
                    ${item.who ? `<div class="timeline-who">${item.who}</div>` : ''}
                    ${item.groupPhotos ? `<ul class="timeline-notes-list">${item.groupPhotos.map(g => `<li>${g}</li>`).join('')}</ul>` : ''}
                    ${formatNotes(item.notes)}
                </div>
            </div>
        `}).join('');
    }

    renderTimelineDay(fridayEl, weddingData.timeline.friday);
    renderTimelineDay(saturdayEl, weddingData.timeline.saturday);
    renderTimelineDay(sundayEl, weddingData.timeline.sunday);
}

// Ceremony
function renderCeremony() {
    if (!weddingData) return;

    // Processional
    const processionalEl = document.getElementById('ceremony-processional');
    if (processionalEl && weddingData.ceremony && weddingData.ceremony.processional) {
        processionalEl.innerHTML = weddingData.ceremony.processional.map((step, i) => `
            <div class="person-item">
                <span class="person-name">${i + 1}.</span>
                <span class="person-role">${step}</span>
            </div>
        `).join('') + `
            <div class="timeline-notes" style="margin-top:15px;">
                ${weddingData.ceremony.notes || ''}
            </div>
        `;
    }

    // Program
    const programEl = document.getElementById('ceremony-program');
    if (programEl && weddingData.ceremony && weddingData.ceremony.program) {
        programEl.innerHTML = weddingData.ceremony.program.map((item, i) => `
            <div class="person-item">
                <span class="person-name">${i + 1}.</span>
                <span class="person-role">${item}</span>
            </div>
        `).join('');
    }

    // Music
    const musicEl = document.getElementById('ceremony-music');
    if (musicEl && weddingData.ceremony) {
        musicEl.innerHTML = `
            <div class="person-item">
                <span class="person-name">Prelude</span>
                <span class="person-role">${weddingData.ceremony.preludeMusic || 'TBD'}</span>
            </div>
            <div class="person-item">
                <span class="person-name">Processional</span>
                <span class="person-role">${weddingData.ceremony.processionalMusic || 'TBD'}</span>
            </div>
            <div class="person-item">
                <span class="person-name">Bride's Processional</span>
                <span class="person-role">${weddingData.ceremony.brideProcessionalMusic || 'TBD'}</span>
            </div>
            <div class="person-item">
                <span class="person-name">Recessional</span>
                <span class="person-role">${weddingData.ceremony.recessionalMusic || 'TBD'}</span>
            </div>
            <div class="person-item">
                <span class="person-name">First Dance</span>
                <span class="person-role">${weddingData.dances?.firstDance?.song || 'TBD'}</span>
            </div>
        `;
    }

    // Recessional Order
    const recessionalEl = document.getElementById('ceremony-recessional');
    if (recessionalEl && weddingData.ceremony && weddingData.ceremony.recessionalOrder) {
        recessionalEl.innerHTML = weddingData.ceremony.recessionalOrder.map((step, i) => `
            <div class="person-item">
                <span class="person-name">${i + 1}.</span>
                <span class="person-role">${step}</span>
            </div>
        `).join('');
    }
}

// Budget
function renderBudget() {
    if (!weddingData || !weddingData.budget) return;

    // Only Karen and Danny can see budget
    const userName = typeof currentUser === 'string' ? currentUser : (currentUser?.name || '');
    if (!isPlanningCrew(userName)) {
        const vendorBudgetEl = document.getElementById('budget-vendors');
        const summaryEl = document.getElementById('budget-summary');
        const notesEl = document.getElementById('budget-notes');
        if (vendorBudgetEl) vendorBudgetEl.innerHTML = '<p style="color:var(--ivory-soft);">Budget details are private.</p>';
        if (summaryEl) summaryEl.innerHTML = '';
        if (notesEl) notesEl.innerHTML = '';
        return;
    }

    const budget = weddingData.budget;

    // Expenses list
    const vendorBudgetEl = document.getElementById('budget-vendors');
    if (vendorBudgetEl && budget.expenses) {
        vendorBudgetEl.innerHTML = budget.expenses.map(exp => {
            const paidStatus = exp.remainder === 0 ? '✓ Paid in full' : (exp.deposit ? `$${exp.deposit.toLocaleString()} deposit paid` : 'Not paid');
            const remainderText = exp.remainder > 0 ? `$${exp.remainder.toLocaleString()} due${exp.dueDate ? ' ' + exp.dueDate : ''}` : '';
            const estimatedTag = exp.estimated ? ' <span style="color:var(--pink-medium);font-size:0.7rem;">(est)</span>' : '';
            return `
                <div class="person-item" style="flex-wrap:wrap;">
                    <span class="person-name">${exp.item}</span>
                    <span class="person-role" style="color:var(--ivory);text-align:right;">
                        ${exp.total ? '$' + exp.total.toLocaleString() + estimatedTag : 'TBD'}
                    </span>
                </div>
                <div style="width:100%;font-size:0.8rem;color:var(--ivory-soft);padding-bottom:10px;border-bottom:1px solid rgba(245,240,230,0.1);margin-bottom:10px;">
                    ${paidStatus}${remainderText ? ' · ' + remainderText : ''}
                </div>
            `;
        }).join('');
    }

    // Summary
    const summaryEl = document.getElementById('budget-summary');
    if (summaryEl) {
        summaryEl.innerHTML = `
            <div class="person-item">
                <span class="person-name">Total Costs</span>
                <span class="person-role" style="color:var(--ivory);font-size:1.1rem;font-weight:600;">$${budget.totalCosts.toLocaleString()}</span>
            </div>
            <div class="person-item">
                <span class="person-name">Deposits Paid</span>
                <span class="person-role" style="color:var(--pink-light);">$${budget.totalDeposits.toLocaleString()}</span>
            </div>
            <div class="person-item">
                <span class="person-name">Still Owed</span>
                <span class="person-role" style="color:var(--ivory);font-size:1.1rem;font-weight:600;">$${budget.totalRemaining.toLocaleString()}</span>
            </div>
            <div class="person-item" style="margin-top:15px;padding-top:15px;border-top:1px solid var(--pink-medium);">
                <span class="person-name">Budget Remaining</span>
                <span class="person-role" style="color:var(--pink-light);font-size:1.2rem;font-weight:600;">$${budget.budgetRemainder.toLocaleString()}</span>
            </div>
        `;
    }

    // TBD items
    const notesEl = document.getElementById('budget-notes');
    if (notesEl && budget.tbd) {
        notesEl.innerHTML = `
            <p style="color:var(--ivory);margin-bottom:10px;font-weight:500;">Still need pricing for:</p>
            ${budget.tbd.map(item => `<p style="color:var(--ivory-soft);padding:4px 0;">• ${item}</p>`).join('')}
        `;
    }
}

// Tasks - master to-do list, readable sections
function renderTasks() {
    if (!weddingData || !weddingData.masterTodos) return;

    const taskList = document.getElementById('task-list');
    if (!taskList) return;

    const userName = typeof currentUser === 'string' ? currentUser : (currentUser?.name || '');
    if (!isPlanningCrew(userName)) {
        taskList.innerHTML = '<p style="color:var(--ivory-soft);">To-do list is only visible to the planning crew.</p>';
        return;
    }

    taskList.innerHTML = weddingData.masterTodos.map(section => `
        <div class="quick-card" style="margin-bottom:15px;">
            <h3 style="font-size:0.95rem;margin-bottom:8px;">${section.section}</h3>
            ${section.items.map(item => `<div style="padding:5px 0;font-size:0.82rem;color:var(--ivory-soft);border-bottom:1px solid rgba(255,255,255,0.05);white-space:pre-line;">• ${item}</div>`).join('')}
        </div>
    `).join('');
}

function setupTaskFilters() {
    // No longer needed - tasks are grouped by section
}

// Vendors
function renderVendors() {
    if (!weddingData || !weddingData.vendors) return;

    const vendorList = document.getElementById('vendor-list');
    if (!vendorList) return;

    const userName = typeof currentUser === 'string' ? currentUser : (currentUser?.name || '');
    const canSeeAllPrices = isPlanningCrew(userName);

    vendorList.innerHTML = weddingData.vendors.map(vendor => {
        let statusClass = 'pending';
        if (vendor.status === 'booked') statusClass = 'booked';
        else if (vendor.status.includes('need')) statusClass = 'need';
        else if (vendor.status.includes('confirm') || vendor.status.includes('quote')) statusClass = 'confirm';

        // Check if this vendor matches current user (for vendor access level)
        const isMyVendorCard = accessLevel === 'vendor' &&
            currentUser && currentUser.role === vendor.role;

        // Show price ONLY if:
        // 1. Karen or Danny (budget access), OR
        // 2. It's the vendor's own card AND that vendor has a cost
        const showPrice = canSeeAllPrices || (isMyVendorCard && vendor.cost);

        // Check if current user's name appears in this vendor card
        const vendorText = `${vendor.name || ''} ${vendor.company || ''} ${vendor.role || ''}`.toLowerCase();
        const isPersonalized = userName && vendorText.includes(userName.toLowerCase());

        // Strip any dollar amounts and payment terms from notes for non-price viewers
        const sanitizedNotes = vendor.notes ?
            vendor.notes.replace(/\$[\d,]+(\.\d{2})?/g, '').replace(/deposit|paid|remainder|due|balance/gi, '').replace(/\s+/g, ' ').trim() : '';

        // Check if vendor has a contract - only show to the vendor themselves
        const contractFile = vendorContracts[vendor.role];
        const showContract = contractFile && isMyVendorCard;

        // Flower shows next to name if it's the user's card
        const flowerMark = isPersonalized ? ' <span style="color:var(--pink-medium);">✿</span>' : '';

        return `
            <div class="vendor-card">
                <div class="vendor-header">
                    <div>
                        <div class="vendor-role">${vendor.role}</div>
                        <div class="vendor-name">${vendor.name || vendor.company || 'TBD'}${flowerMark}</div>
                    </div>
                    <div class="vendor-status ${statusClass}">${vendor.status}</div>
                </div>
                <div class="vendor-details">
                    ${vendor.company && vendor.name ? `<p>${vendor.company}</p>` : ''}
                    ${showPrice && vendor.cost ? `<p class="vendor-cost">$${vendor.cost.toLocaleString()}</p>` : ''}
                    ${vendor.arrivalTime ? `<p>Arrives: ${vendor.arrivalTime}</p>` : ''}
                    ${vendor.phone ? `<p><a href="tel:${vendor.phone}">${vendor.phone}</a></p>` : ''}
                    ${canSeeAllPrices && vendor.notes ? `<p style="font-size:0.85rem;">${vendor.notes}</p>` : ''}
                    ${!canSeeAllPrices && sanitizedNotes ? `<p style="font-size:0.85rem;">${sanitizedNotes}</p>` : ''}
                    ${showContract ? `<p style="margin-top:10px;"><a href="${contractFile}" target="_blank" class="directions-btn">View My Contract</a></p>` : ''}
                    ${vendor.photos ? vendor.photos.map(p => `<a href="${p}" target="_blank"><img src="${p}" alt="Reference photo" style="width:100%;border-radius:4px;margin-top:8px;"></a>`).join('') : ''}
                </div>
            </div>
        `;
    }).join('');
}

// People
function renderPeople() {
    if (!weddingData) return;

    // Ceremony
    const familyList = document.getElementById('family-list');
    if (familyList) {
        familyList.innerHTML = `
            <div class="person-item">
                <span class="person-name">Karen Hernandez</span>
                <span class="person-role">Bride · <a href="tel:2162126400">(216) 212-6400</a></span>
            </div>
            <div class="person-item">
                <span class="person-name">Danny Milojevic</span>
                <span class="person-role">Groom · <a href="tel:5044916756">(504) 491-6756</a></span>
            </div>
            <div class="person-item">
                <span class="person-name">Kali Serna</span>
                <span class="person-role">Officiant · <a href="tel:3475266632">(347) 526-6632</a></span>
            </div>
            <div class="person-item">
                <span class="person-name">Jeanne Gallo</span>
                <span class="person-role">Day-of Coordinator · <a href="tel:3128822087">(312) 882-2087</a></span>
            </div>
            <div class="person-item">
                <span class="person-name">Jose Nestor Hernandez</span>
                <span class="person-role">Karen's Dad · <a href="tel:2165027882">(216) 502-7882</a></span>
            </div>
            <div class="person-item">
                <span class="person-name">Elizabeth Mazzie</span>
                <span class="person-role">Dad's Wife · <a href="tel:2167676293">(216) 767-6293</a></span>
            </div>
            <div class="person-item">
                <span class="person-name">Kathryn Alatha Williams</span>
                <span class="person-role">Karen's Mom · Posthumously Honored</span>
            </div>
            <div class="person-item">
                <span class="person-name">Jose David Hernandez</span>
                <span class="person-role">Karen's Brother / Best Man · <a href="tel:2163755326">(216) 375-5326</a></span>
            </div>
            <div class="person-item">
                <span class="person-name">Cindy Milojevic</span>
                <span class="person-role">Danny's Mom · <a href="tel:7086068839">(708) 606-8839</a></span>
            </div>
            <div class="person-item">
                <span class="person-name">Duschan "Duey" Milojevic</span>
                <span class="person-role">Danny's Dad · <a href="tel:7086897000">(708) 689-7000</a></span>
            </div>
            <div class="person-item">
                <span class="person-name">Lauren Langenmayr</span>
                <span class="person-role">Danny's Sister / Maid of Honor · <a href="tel:7086069583">(708) 606-9583</a></span>
            </div>
        `;
    }

    // Staffing
    const staffingList = document.getElementById('staffing-list');
    if (staffingList && weddingData.staffing) {
        staffingList.innerHTML = weddingData.staffing.map(person => `
            <div class="person-item">
                <span class="person-name">${person.name}</span>
                <span class="person-role">${person.role}: ${person.task}</span>
            </div>
        `).join('');
    }

    // Flower Girls / Ushers
    const cousinsList = document.getElementById('cousins-list');
    if (cousinsList && weddingData.flowerGirls) {
        cousinsList.innerHTML = weddingData.flowerGirls.map(name => `
            <span class="cousin-tag">${name}</span>
        `).join('');
    }

    // Flip Crew
    const flipCrewList = document.getElementById('flip-crew-list');
    if (flipCrewList && weddingData.flipCrew) {
        flipCrewList.innerHTML = weddingData.flipCrew.map(name => `
            <span class="cousin-tag">${name}</span>
        `).join('');
    }
}

// Day-Of Quick Reference
function renderDayOf() {
    if (!weddingData) return;

    // Emergency Contacts
    const emergencyContacts = document.getElementById('emergency-contacts');
    if (emergencyContacts) {
        emergencyContacts.innerHTML = `
            <div class="person-item">
                <span class="person-name">Karen Hernandez</span>
                <span class="person-role"><a href="tel:2162126400">(216) 212-6400</a> - Bride</span>
            </div>
            <div class="person-item">
                <span class="person-name">Danny Milojevic</span>
                <span class="person-role"><a href="tel:7733688883">(773) 368-8883</a> - Groom</span>
            </div>
            <div class="person-item">
                <span class="person-name">Cindy Milojevic</span>
                <span class="person-role"><a href="tel:7086068839">(708) 606-8839</a> - Danny's Mom</span>
            </div>
            <div class="person-item">
                <span class="person-name">Jose Nestor Hernandez</span>
                <span class="person-role"><a href="tel:2165027882">(216) 502-7882</a> - Karen's Dad</span>
            </div>
            <div class="person-item">
                <span class="person-name">Jeanne Gallo</span>
                <span class="person-role"><a href="tel:3128822087">(312) 882-2087</a> - Day-of Coordinator</span>
            </div>
            <div class="person-item">
                <span class="person-name">Industrial Gardens</span>
                <span class="person-role"><a href="tel:5043553767">(504) 355-3767</a> - Venue</span>
            </div>
            <div class="person-item">
                <span class="person-name">David Hargrove</span>
                <span class="person-role"><a href="tel:6468429038">(646) 842-9038</a> - Caterer (2B1L)</span>
            </div>
            <div class="person-item">
                <span class="person-name">Antonia Zennaro</span>
                <span class="person-role"><a href="tel:5045183218">(504) 518-3218</a> - Decor / Banners</span>
            </div>
            <div class="person-item">
                <span class="person-name">Lady B</span>
                <span class="person-role"><a href="tel:5042148105">(504) 214-8105</a> - DJ</span>
            </div>
            <div class="person-item">
                <span class="person-name">Sam Kuslan</span>
                <span class="person-role"><a href="tel:2035352159">(203) 535-2159</a> - Piano</span>
            </div>
            <div class="person-item">
                <span class="person-name">Stephanie Terrant</span>
                <span class="person-role"><a href="tel:2197769158">(219) 776-9158</a> - Photographer</span>
            </div>
            <div class="person-item">
                <span class="person-name">YUR Event Rentals</span>
                <span class="person-role"><a href="tel:5042180726">(504) 218-0726</a> - Furniture</span>
            </div>
            <div class="person-item">
                <span class="person-name">True Value Rental</span>
                <span class="person-role"><a href="tel:5044432825">(504) 443-2825</a> - Catering Equipment Rental</span>
            </div>
        `;
    }

    // Processional
    const processionalList = document.getElementById('processional-list');
    if (processionalList && weddingData.ceremony && weddingData.ceremony.processional) {
        processionalList.innerHTML = weddingData.ceremony.processional.map((step, i) => `
            <div class="person-item">
                <span class="person-name">${i + 1}.</span>
                <span class="person-role">${step}</span>
            </div>
        `).join('') + `
            <div class="timeline-notes" style="margin-top:15px;">
                ${weddingData.ceremony.notes || ''}
                <br><br><strong>Recessional Music:</strong> ${weddingData.ceremony.recessionalMusic || 'TBD'}
            </div>
        `;
    }

    // Speeches
    const speechesList = document.getElementById('speeches-list');
    if (speechesList && weddingData.speeches && weddingData.speeches.order) {
        speechesList.innerHTML = weddingData.speeches.order.map(s => `
            <div class="person-item">
                <span class="person-name">${s.speaker}</span>
                <span class="person-role">${s.time}</span>
            </div>
        `).join('');
    }

    // Flowers
    const flowersList = document.getElementById('flowers-list');
    if (flowersList && weddingData.flowers && weddingData.flowers.list) {
        flowersList.innerHTML = `
            <p style="margin-bottom:10px;"><strong>Delivery:</strong> ${weddingData.flowers.delivery}</p>
            ${weddingData.flowers.list.map(f => `
                <div class="person-item">
                    <span class="person-name">${f}</span>
                </div>
            `).join('')}
        `;
    }

    // Items for Jeanne
    const jeanneItems = document.getElementById('jeanne-items');
    if (jeanneItems && weddingData.dayOfItems && weddingData.dayOfItems.forJeanne) {
        jeanneItems.innerHTML = weddingData.dayOfItems.forJeanne.map(item => `
            <div class="person-item">
                <span class="person-name">• ${item}</span>
            </div>
        `).join('');
    }

    // Ceremony Notes
    const ceremonyNotes = document.getElementById('ceremony-notes');
    if (ceremonyNotes && weddingData.dayOfItems && weddingData.dayOfItems.ceremonySetup) {
        ceremonyNotes.innerHTML = weddingData.dayOfItems.ceremonySetup.map(note => `
            <div class="person-item">
                <span class="person-name">• ${note}</span>
            </div>
        `).join('');
    }

    // Arrival Times
    const arrivalTimes = document.getElementById('arrival-times');
    if (arrivalTimes && weddingData.vendors) {
        const vendorsWithArrival = weddingData.vendors.filter(v => v.arrivalTime);
        arrivalTimes.innerHTML = vendorsWithArrival.map(v => `
            <div class="person-item">
                <span class="person-name">${v.arrivalTime}</span>
                <span class="person-role">${v.name || v.company || v.role}</span>
            </div>
        `).join('');
    }

    // Bring to Venue list (planning crew only)
    const bringList = document.getElementById('bring-to-venue-list');
    if (bringList && weddingData.bringToVenue) {
        const userName = typeof currentUser === 'string' ? currentUser : (currentUser?.name || '');
        if (!isPlanningCrew(userName)) {
            bringList.parentElement.style.display = 'none';
        } else {
            const sections = [
                { title: 'For Jeanne (Give Friday)', items: weddingData.bringToVenue.forJeanneFriday },
                { title: 'Bar & Drinks', items: weddingData.bringToVenue.barAndDrinks },
                { title: 'Ceremony', items: weddingData.bringToVenue.ceremony },
                { title: 'Decor & Setup', items: weddingData.bringToVenue.decorAndSetup },
                { title: 'Flowers (from Greatman Cottage)', items: weddingData.bringToVenue.flowers },
                { title: 'Second Line / Parranda', items: weddingData.bringToVenue.secondLine },
                { title: 'For Guests', items: weddingData.bringToVenue.forGuests },
                { title: 'Signage', items: weddingData.bringToVenue.signage },
                { title: 'Payments (Envelopes)', items: weddingData.bringToVenue.payments },
                { title: 'Personal', items: weddingData.bringToVenue.personal }
            ];
            bringList.innerHTML = sections.map(s => `
                <div style="margin-bottom:12px;">
                    <strong style="color:var(--pink-light);font-size:0.85rem;">${s.title}</strong>
                    <ul style="margin:4px 0 0 0;padding:0;list-style:none;">
                        ${s.items.map(item => `<li style="padding:3px 0;font-size:0.8rem;color:var(--ivory-soft);">• ${item}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
        }
    }

    // Locations - Consolidated unique venues
    const locationsList = document.getElementById('locations-list');
    if (locationsList) {
        locationsList.innerHTML = `
            <div class="location-item">
                <div class="location-name">Industrial Gardens</div>
                <div class="location-purpose">Rehearsal (Friday 1-3 PM) · Ceremony (Saturday 3:15 PM) · Reception (Saturday 5 PM)</div>
                <div class="location-purpose">1024 Elysian Fields Avenue, New Orleans, LA 70118</div>
                <a href="https://www.google.com/maps/dir/?api=1&destination=1024+Elysian+Fields+Avenue+New+Orleans+LA" target="_blank" class="directions-btn">Get Directions</a>
            </div>
            <div class="location-item">
                <div class="location-name">Milo Gardens</div>
                <div class="location-purpose">Welcome Party (Friday 4-7 PM)</div>
                <a href="https://www.google.com/maps/search/?api=1&query=Milo+Gardens+New+Orleans" target="_blank" class="directions-btn">Get Directions</a>
            </div>
            <div class="location-item">
                <div class="location-name">Oak & Ale</div>
                <div class="location-purpose">Rehearsal Dinner (Friday 7 PM)</div>
                <a href="https://www.google.com/maps/search/?api=1&query=Oak+and+Ale+New+Orleans" target="_blank" class="directions-btn">Get Directions</a>
            </div>
            <div class="location-item">
                <div class="location-name">Hotel Peter and Paul</div>
                <div class="location-purpose">Karen Getting Ready (Saturday Morning)</div>
                <a href="https://www.google.com/maps/search/?api=1&query=Hotel+Peter+and+Paul+New+Orleans" target="_blank" class="directions-btn">Get Directions</a>
            </div>
            <div class="location-item">
                <div class="location-name">Greatman Cottage</div>
                <div class="location-purpose">Danny Getting Ready with the Guys (Saturday Morning)</div>
                <div class="location-purpose">3421 Dauphine Street, New Orleans, LA</div>
                <a href="https://www.google.com/maps/dir/?api=1&destination=3421+Dauphine+Street+New+Orleans+LA" target="_blank" class="directions-btn">Get Directions</a>
            </div>
            <div class="location-item">
                <div class="location-name">No Dice</div>
                <div class="location-purpose">After Party (Saturday 9 PM) · Thomas Glass Band</div>
                <a href="https://www.google.com/maps/search/?api=1&query=No+Dice+New+Orleans" target="_blank" class="directions-btn">Get Directions</a>
            </div>
            <div class="location-item">
                <div class="location-name">CastleDay</div>
                <div class="location-purpose">Poolside Farewell (Sunday 11 AM - 2 PM)</div>
                <div class="location-purpose">1319 Japonica Street, New Orleans, LA</div>
                <a href="https://www.google.com/maps/dir/?api=1&destination=1319+Japonica+Street+New+Orleans+LA" target="_blank" class="directions-btn">Get Directions</a>
            </div>
        `;
    }
}

// Save data to localStorage (for task persistence)
function saveData() {
    localStorage.setItem('weddingData', JSON.stringify(weddingData));
}

// Load saved data
function loadSavedData() {
    const saved = localStorage.getItem('weddingData');
    if (saved) {
        const savedData = JSON.parse(saved);
        // Merge task statuses
        if (weddingData && savedData.todos) {
            savedData.todos.forEach((savedTask, i) => {
                if (weddingData.todos[i]) {
                    weddingData.todos[i].status = savedTask.status;
                }
            });
        }
    }
}

// Documents
function renderDocuments() {
    const layoutDetails = document.getElementById('layout-details');
    if (layoutDetails) {
        layoutDetails.innerHTML = `
            <div class="person-item">
                <span class="person-name">Ceremony Seating</span>
                <span class="person-role">170-188 Total</span>
            </div>
            <div style="font-size:0.85rem;color:var(--ivory-soft);padding:10px 0;border-bottom:1px solid rgba(245,240,230,0.15);">
                Right: 52 (34 + 18) · Back: 64 · Main: 18 · Dance Floor: 36 · Courtyard: 18
            </div>
            <div class="person-item">
                <span class="person-name">Tables to Move</span>
                <span class="person-role">8 Round Tables (Yellow)</span>
            </div>
            <div style="font-size:0.85rem;color:var(--ivory-soft);padding:10px 0;border-bottom:1px solid rgba(245,240,230,0.15);">
                Pre-decorated and ready to move. Flip all ceremony chairs to face tables for dinner.
            </div>
            <div class="person-item">
                <span class="person-name">Bars</span>
                <span class="person-role">2 Locations</span>
            </div>
            <div style="font-size:0.85rem;color:var(--ivory-soft);padding:10px 0;border-bottom:1px solid rgba(245,240,230,0.15);">
                Ceremony space bar (sets up during flip) · Courtyard bar (open during cocktail hour)
            </div>
            <div class="person-item">
                <span class="person-name">Photobooth</span>
                <span class="person-role">14' x 5'</span>
            </div>
            <div class="person-item">
                <span class="person-name">Seating Chart</span>
                <span class="person-role">Near Entrance (5' x 2')</span>
            </div>
            <div class="person-item">
                <span class="person-name">Soloist Position</span>
                <span class="person-role">Sam Kuslan (Piano)</span>
            </div>
        `;
    }

    // Render contracts list
    const contractsList = document.getElementById('contracts-list');
    if (contractsList) {
        contractsList.innerHTML = `
            <a href="documents/venue-contract.pdf" target="_blank" class="doc-link">
                <span class="doc-icon">📄</span>
                <div class="doc-info">
                    <div class="doc-name">Venue Contract - Industrial Gardens</div>
                    <div class="doc-desc">PJI Industrial Garden - Ceremony & Reception</div>
                </div>
            </a>
            <a href="documents/contract-david-2b1l.pdf" target="_blank" class="doc-link">
                <span class="doc-icon">📄</span>
                <div class="doc-info">
                    <div class="doc-name">2B1L Catering Contract</div>
                    <div class="doc-desc">David Hargrove - Caterer</div>
                </div>
            </a>
            <a href="documents/contract-lady-b.pdf" target="_blank" class="doc-link">
                <span class="doc-icon">📄</span>
                <div class="doc-info">
                    <div class="doc-name">Lady B DJ Contract</div>
                    <div class="doc-desc">DJ & Puerto Rican Second Line</div>
                </div>
            </a>
            <a href="documents/contract-bronson.pdf" target="_blank" class="doc-link">
                <span class="doc-icon">📄</span>
                <div class="doc-info">
                    <div class="doc-name">Branson Bartending Contract</div>
                    <div class="doc-desc">Bar Service</div>
                </div>
            </a>
            <a href="documents/contract-yur-event-rental.pdf" target="_blank" class="doc-link">
                <span class="doc-icon">📄</span>
                <div class="doc-info">
                    <div class="doc-name">YUR Event Rental Contract</div>
                    <div class="doc-desc">Furniture & Rentals</div>
                </div>
            </a>
            <a href="documents/contract-four-seasons-hotel-block.pdf" target="_blank" class="doc-link">
                <span class="doc-icon">📄</span>
                <div class="doc-info">
                    <div class="doc-name">Four Seasons Hotel Block</div>
                    <div class="doc-desc">Guest Accommodations</div>
                </div>
            </a>
            <a href="documents/contract-catering-rental.pdf" target="_blank" class="doc-link">
                <span class="doc-icon">📄</span>
                <div class="doc-info">
                    <div class="doc-name">Catering Rental Contract</div>
                    <div class="doc-desc">Equipment Rental</div>
                </div>
            </a>
            <a href="documents/contract-catering-rental-2.pdf" target="_blank" class="doc-link">
                <span class="doc-icon">📄</span>
                <div class="doc-info">
                    <div class="doc-name">Catering Rental Contract 2</div>
                    <div class="doc-desc">Additional Equipment</div>
                </div>
            </a>
        `;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', loadData);
