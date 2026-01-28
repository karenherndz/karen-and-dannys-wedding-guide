// Wedding Command Center - App Logic

let weddingData = null;

// Load wedding data
async function loadData() {
    try {
        const response = await fetch('data/wedding-data.json');
        weddingData = await response.json();
        initApp();
    } catch (error) {
        console.error('Error loading data:', error);
        // Fallback: try to load from inline
        initApp();
    }
}

function initApp() {
    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute

    renderTimeline();
    renderCeremony();
    renderTasks();
    renderVendors();
    renderBudget();
    renderPeople();
    renderDayOf();

    setupNavigation();
    setupTaskFilters();
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
    if (!weddingData) return;

    const fridayEl = document.getElementById('friday-timeline');
    const saturdayEl = document.getElementById('saturday-timeline');

    fridayEl.innerHTML = weddingData.timeline.friday.map(item => {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.location + ' New Orleans')}`;
        return `
        <div class="timeline-item">
            <div class="timeline-time">${item.time}</div>
            <div class="timeline-content">
                <div class="timeline-event">${item.event}</div>
                <div class="timeline-location">${item.location} <a href="${mapsUrl}" target="_blank" class="directions-btn" style="margin-left:10px;padding:4px 10px;font-size:0.65rem;">Directions</a></div>
                ${item.who ? `<div class="timeline-who">${item.who}</div>` : ''}
                ${item.notes ? `<div class="timeline-notes">${item.notes}</div>` : ''}
            </div>
        </div>
    `}).join('');

    saturdayEl.innerHTML = weddingData.timeline.saturday.map(item => {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.location + ' New Orleans')}`;
        return `
        <div class="timeline-item">
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

// Ceremony
function renderCeremony() {
    if (!weddingData) return;

    // Processional
    const processionalEl = document.getElementById('ceremony-processional');
    if (weddingData.ceremony && weddingData.ceremony.processional) {
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
    if (weddingData.ceremony && weddingData.ceremony.program) {
        programEl.innerHTML = weddingData.ceremony.program.map((item, i) => `
            <div class="person-item">
                <span class="person-name">${i + 1}.</span>
                <span class="person-role">${item}</span>
            </div>
        `).join('');
    }

    // Music
    const musicEl = document.getElementById('ceremony-music');
    if (weddingData.ceremony) {
        musicEl.innerHTML = `
            <div class="person-item">
                <span class="person-name">Prelude</span>
                <span class="person-role">${weddingData.ceremony.preludeMusic || 'TBD'}</span>
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
    if (weddingData.ceremony && weddingData.ceremony.recessionalOrder) {
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

    const budget = weddingData.budget;

    // Expenses list
    const vendorBudgetEl = document.getElementById('budget-vendors');
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

    // Summary
    const summaryEl = document.getElementById('budget-summary');
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

    // TBD items
    const notesEl = document.getElementById('budget-notes');
    notesEl.innerHTML = `
        <p style="color:var(--ivory);margin-bottom:10px;font-weight:500;">Still need pricing for:</p>
        ${budget.tbd.map(item => `<p style="color:var(--ivory-soft);padding:4px 0;">• ${item}</p>`).join('')}
    `;
}

// Tasks
function renderTasks(filter = 'all') {
    if (!weddingData) return;

    const taskList = document.getElementById('task-list');
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
    if (!weddingData) return;

    const vendorList = document.getElementById('vendor-list');
    vendorList.innerHTML = weddingData.vendors.map(vendor => {
        let statusClass = 'pending';
        if (vendor.status === 'booked') statusClass = 'booked';
        else if (vendor.status.includes('need')) statusClass = 'need';
        else if (vendor.status.includes('confirm') || vendor.status.includes('quote')) statusClass = 'confirm';

        return `
            <div class="vendor-card">
                <div class="vendor-header">
                    <div>
                        <div class="vendor-role">${vendor.role}</div>
                        <div class="vendor-name">${vendor.name || vendor.company || 'TBD'}</div>
                    </div>
                    <div class="vendor-status ${statusClass}">${vendor.status}</div>
                </div>
                <div class="vendor-details">
                    ${vendor.company && vendor.name ? `<p>${vendor.company}</p>` : ''}
                    ${vendor.cost ? `<p class="vendor-cost">$${vendor.cost.toLocaleString()}</p>` : ''}
                    ${vendor.arrivalTime ? `<p>Arrives: ${vendor.arrivalTime}</p>` : ''}
                    ${vendor.phone ? `<p><a href="tel:${vendor.phone}">${vendor.phone}</a></p>` : ''}
                    ${vendor.notes ? `<p style="font-size:0.85rem;">${vendor.notes}</p>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// People
function renderPeople() {
    if (!weddingData) return;

    // Family
    const familyList = document.getElementById('family-list');
    familyList.innerHTML = `
        <div class="person-item">
            <span class="person-name">Jose N. Hernandez</span>
            <span class="person-role">Karen's Dad</span>
        </div>
        <div class="person-item">
            <span class="person-name">Karen's Mom</span>
            <span class="person-role">Posthumously Honored</span>
        </div>
        <div class="person-item">
            <span class="person-name">Jose D. Hernandez</span>
            <span class="person-role">Karen's Brother / Best Man</span>
        </div>
        <div class="person-item">
            <span class="person-name">Cindy Milojevic</span>
            <span class="person-role">Danny's Mom</span>
        </div>
        <div class="person-item">
            <span class="person-name">Duschan Milojevic</span>
            <span class="person-role">Danny's Dad</span>
        </div>
        <div class="person-item">
            <span class="person-name">Lauren Langenmayr</span>
            <span class="person-role">Maid of Honor</span>
        </div>
    `;

    // Staffing
    const staffingList = document.getElementById('staffing-list');
    staffingList.innerHTML = weddingData.staffing.map(person => `
        <div class="person-item">
            <span class="person-name">${person.name}</span>
            <span class="person-role">${person.role}: ${person.task}</span>
        </div>
    `).join('');

    // Cousins
    const cousinsList = document.getElementById('cousins-list');
    cousinsList.innerHTML = weddingData.cousins.map(cousin => `
        <span class="cousin-tag">${cousin}</span>
    `).join('');

    // Lodging
    const lodgingList = document.getElementById('lodging-list');
    lodgingList.innerHTML = `
        <h4 style="font-size:0.9rem;margin:10px 0 8px;color:var(--pink-medium);">Hotels</h4>
        ${weddingData.lodging.hotels.map(h => `<p style="padding:6px 0;">${h}</p>`).join('')}
        <h4 style="font-size:0.9rem;margin:20px 0 8px;color:var(--pink-medium);">The Syd Units</h4>
        ${Object.entries(weddingData.lodging.vacationRentals.theSyd.assignments).map(([unit, guests]) => `
            <p style="padding:6px 0;"><strong>Unit ${unit}:</strong> ${guests}</p>
        `).join('')}
        <h4 style="font-size:0.9rem;margin:20px 0 8px;color:var(--pink-medium);">CastleDay</h4>
        <p style="padding:6px 0;">${weddingData.lodging.vacationRentals.castleDay.assignments}</p>
    `;
}

// Day-Of Quick Reference
function renderDayOf() {
    if (!weddingData) return;

    // Emergency Contacts
    const emergencyContacts = document.getElementById('emergency-contacts');
    const vendorsWithPhone = weddingData.vendors.filter(v => v.phone);
    emergencyContacts.innerHTML = vendorsWithPhone.map(v => `
        <div class="person-item">
            <span class="person-name">${v.name || v.company}</span>
            <span class="person-role"><a href="tel:${v.phone}">${v.phone}</a> - ${v.role}</span>
        </div>
    `).join('') || `
        <div class="person-item">
            <span class="person-name">Jeanne Gallo</span>
            <span class="person-role">(312) 882-2087 - Day-of Coordinator</span>
        </div>
    `;

    // Processional
    const processionalList = document.getElementById('processional-list');
    if (weddingData.ceremony && weddingData.ceremony.processional) {
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
    if (weddingData.speeches && weddingData.speeches.order) {
        speechesList.innerHTML = weddingData.speeches.order.map(s => `
            <div class="person-item">
                <span class="person-name">${s.speaker}</span>
                <span class="person-role">${s.time}</span>
            </div>
        `).join('');
    }

    // Flowers
    const flowersList = document.getElementById('flowers-list');
    if (weddingData.flowers && weddingData.flowers.list) {
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
    if (weddingData.dayOfItems && weddingData.dayOfItems.forJeanne) {
        jeanneItems.innerHTML = weddingData.dayOfItems.forJeanne.map(item => `
            <div class="person-item">
                <span class="person-name">• ${item}</span>
            </div>
        `).join('');
    }

    // Ceremony Notes
    const ceremonyNotes = document.getElementById('ceremony-notes');
    if (weddingData.dayOfItems && weddingData.dayOfItems.ceremonySetup) {
        ceremonyNotes.innerHTML = weddingData.dayOfItems.ceremonySetup.map(note => `
            <div class="person-item">
                <span class="person-name">• ${note}</span>
            </div>
        `).join('');
    }

    // Arrival Times
    const arrivalTimes = document.getElementById('arrival-times');
    const vendorsWithArrival = weddingData.vendors.filter(v => v.arrivalTime);
    arrivalTimes.innerHTML = vendorsWithArrival.map(v => `
        <div class="person-item">
            <span class="person-name">${v.arrivalTime}</span>
            <span class="person-role">${v.name || v.company || v.role}</span>
        </div>
    `).join('');

    // Locations
    const locationsList = document.getElementById('locations-list');
    const venues = Object.entries(weddingData.venues).filter(([key]) => !['gettingReady'].includes(key));
    locationsList.innerHTML = venues.map(([key, venue]) => {
        if (typeof venue === 'object' && venue.name) {
            const mapsUrl = venue.address
                ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venue.address)}`
                : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.name + ' New Orleans')}`;
            return `
                <div class="location-item">
                    <div class="location-name">${venue.name}</div>
                    <div class="location-purpose">${key.replace(/([A-Z])/g, ' $1').trim()} - ${venue.date || ''} ${venue.time || ''}</div>
                    ${venue.notes ? `<div class="location-purpose">${venue.notes}</div>` : ''}
                    <a href="${mapsUrl}" target="_blank" class="directions-btn">Get Directions</a>
                </div>
            `;
        }
        return '';
    }).join('');

    // Add getting ready locations
    const karenMapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Hotel Peter and Paul New Orleans');
    const dannyMapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Greatman Loft New Orleans');
    locationsList.innerHTML += `
        <div class="location-item">
            <div class="location-name">Hotel Peter and Paul</div>
            <div class="location-purpose">Karen Getting Ready - ${weddingData.venues.gettingReady.karen.notes}</div>
            <a href="${karenMapsUrl}" target="_blank" class="directions-btn">Get Directions</a>
        </div>
        <div class="location-item">
            <div class="location-name">Greatman Loft</div>
            <div class="location-purpose">Danny Getting Ready</div>
            <a href="${dannyMapsUrl}" target="_blank" class="directions-btn">Get Directions</a>
        </div>
    `;
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

// Initialize
document.addEventListener('DOMContentLoaded', loadData);
