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

// Only Karen and Danny can see budget
const budgetAccess = ['karen', 'danny'];

// Only these people can see tasks
const tasksAccess = ['karen', 'danny', 'jeanne', 'cindy', 'duey', 'duschan', 'jose', 'nestor'];

const vendorNames = {
    'david': 'Caterer (2B1L)',
    'hargrove': 'Caterer (2B1L)',
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

// Check if name matches family
function isFamilyMember(name) {
    const lower = name.toLowerCase().trim();
    return familyNames.some(n => lower.includes(n) || n.includes(lower));
}

// Check if name has budget access (only Karen and Danny)
function hasBudgetAccess(name) {
    const lower = name.toLowerCase().trim();
    return budgetAccess.some(n => lower.includes(n) || n.includes(lower));
}

// Check if name has tasks access
function hasTasksAccess(name) {
    const lower = name.toLowerCase().trim();
    return tasksAccess.some(n => lower.includes(n) || n.includes(lower));
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
    }
}

function setUserAccess(name) {
    currentUser = name;
    const userRoleEl = document.getElementById('user-role');
    const notYouLink = `<a href="#" class="not-you-link" onclick="resetName(event)">Not ${name}?</a>`;

    if (isFamilyMember(name)) {
        accessLevel = 'family';
        userRoleEl.innerHTML = `✿ Welcome, ${name} ${notYouLink}`;
        userRoleEl.style.display = 'inline-block';
    } else {
        const vendorRole = getVendorRole(name);
        if (vendorRole) {
            accessLevel = 'vendor';
            currentUser = { name, role: vendorRole };
            userRoleEl.innerHTML = `✿ ${name} - ${vendorRole} ${notYouLink}`;
            userRoleEl.style.display = 'inline-block';
        } else {
            accessLevel = 'guest';
            userRoleEl.innerHTML = `Welcome, ${name} ${notYouLink}`;
            userRoleEl.style.display = 'inline-block';
        }
    }

    applyAccessLevel();
}

function resetName(event) {
    event.preventDefault();
    localStorage.removeItem('weddingUserName');
    const modal = document.getElementById('welcome-modal');
    const input = document.getElementById('name-input');
    modal.classList.remove('hidden');
    input.value = '';
    input.focus();
}

function applyAccessLevel() {
    const budgetNav = document.querySelector('.nav-item[data-section="budget"]');
    const tasksNav = document.querySelector('.nav-item[data-section="tasks"]');
    const userName = typeof currentUser === 'string' ? currentUser : currentUser?.name || '';
    const canSeeBudget = hasBudgetAccess(userName);
    const canSeeTasks = hasTasksAccess(userName);

    // Budget access - only Karen and Danny
    if (canSeeBudget) {
        if (budgetNav) budgetNav.classList.remove('budget-hidden');
        document.querySelectorAll('.price-hidden').forEach(el => el.classList.remove('price-hidden'));
    } else {
        if (budgetNav) budgetNav.classList.add('budget-hidden');
    }

    // Tasks access - only specific people
    if (canSeeTasks) {
        if (tasksNav) tasksNav.classList.remove('budget-hidden');
    } else {
        if (tasksNav) tasksNav.classList.add('budget-hidden');
    }
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

            // Block budget access for non-authorized users
            if (sectionId === 'budget' && !hasBudgetAccess(userName)) {
                return;
            }

            // Block tasks access for non-authorized users
            if (sectionId === 'tasks' && !hasTasksAccess(userName)) {
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

    if (fridayEl && weddingData.timeline.friday) {
        fridayEl.innerHTML = weddingData.timeline.friday.map(item => {
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
                    ${item.notes ? `<div class="timeline-notes">${item.notes}</div>` : ''}
                </div>
            </div>
        `}).join('');
    }

    if (saturdayEl && weddingData.timeline.saturday) {
        saturdayEl.innerHTML = weddingData.timeline.saturday.map(item => {
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
                    ${item.notes ? `<div class="timeline-notes">${item.notes}</div>` : ''}
                </div>
            </div>
        `}).join('');
    }

    if (sundayEl && weddingData.timeline.sunday) {
        sundayEl.innerHTML = weddingData.timeline.sunday.map(item => {
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
                    ${item.notes ? `<div class="timeline-notes">${item.notes}</div>` : ''}
                </div>
            </div>
        `}).join('');
    }
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
    if (!hasBudgetAccess(userName)) {
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

// Tasks
function renderTasks(filter = 'all') {
    if (!weddingData || !weddingData.todos) return;

    const taskList = document.getElementById('task-list');
    if (!taskList) return;

    let tasks = weddingData.todos;

    if (filter === 'high') {
        tasks = tasks.filter(t => t.priority === 'high');
    } else if (filter === 'not started') {
        tasks = tasks.filter(t => t.status === 'not started');
    } else if (filter === 'done') {
        tasks = tasks.filter(t => t.status === 'done');
    }

    taskList.innerHTML = tasks.map((task, index) => `
        <div class="task-item ${task.status === 'done' ? 'done' : ''}" data-index="${index}">
            <div class="task-checkbox ${task.status === 'done' ? 'done' : ''}" onclick="toggleTask(${index})">
                ${task.status === 'done' ? '&#10003;' : ''}
            </div>
            <div class="task-content">
                <div class="task-title">${task.task}</div>
                <div class="task-meta">
                    ${task.assignee ? `Assigned: ${task.assignee}` : ''}
                    ${task.due ? ` | Due: ${task.due}` : ''}
                    ${task.priority ? `<span class="task-priority ${task.priority}">${task.priority}</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function toggleTask(index) {
    if (!weddingData) return;
    const task = weddingData.todos[index];
    task.status = task.status === 'done' ? 'not started' : 'done';
    renderTasks(currentFilter);
    saveData();
}

let currentFilter = 'all';

function setupTaskFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderTasks(currentFilter);
        });
    });
}

// Vendors
function renderVendors() {
    if (!weddingData || !weddingData.vendors) return;

    const vendorList = document.getElementById('vendor-list');
    if (!vendorList) return;

    const userName = typeof currentUser === 'string' ? currentUser : (currentUser?.name || '');
    const canSeeAllPrices = hasBudgetAccess(userName);

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

        return `
            <div class="vendor-card${isPersonalized ? ' flower-indicator' : ''}">
                <div class="vendor-header">
                    <div>
                        <div class="vendor-role">${vendor.role}</div>
                        <div class="vendor-name">${vendor.name || vendor.company || 'TBD'}</div>
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
                <span class="person-name">Jeanne Gallo</span>
                <span class="person-role"><a href="tel:3128822087">(312) 882-2087</a> - Day-of Coordinator</span>
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
                <div class="location-name">Milo Gardens</div>
                <div class="location-purpose">Danny Getting Ready with the Guys (Saturday Morning)</div>
                <a href="https://www.google.com/maps/search/?api=1&query=Milo+Gardens+New+Orleans" target="_blank" class="directions-btn">Get Directions</a>
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
                <span class="person-name">Tables to Flip</span>
                <span class="person-role">7 Round Tables (Yellow)</span>
            </div>
            <div style="font-size:0.85rem;color:var(--ivory-soft);padding:10px 0;border-bottom:1px solid rgba(245,240,230,0.15);">
                Pre-decorated and ready to move. Ceremony chairs redistributed to tables during flip.
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
}

// Initialize
document.addEventListener('DOMContentLoaded', loadData);
