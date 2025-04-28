function saveEntry() {
  const feeling = document.getElementById('feeling').value;
  const date = document.getElementById('date').value;

  if (!feeling || !date) {
    alert("Please fill out both fields!");
    return;
  }

  const entry = { date, feeling };
  let log = JSON.parse(localStorage.getItem('journalLog')) || [];
  log.push(entry);
  localStorage.setItem('journalLog', JSON.stringify(log));


  document.getElementById('feeling').value = '';
  document.getElementById('date').value = '';
  alert("Your entry has been saved!");
}

function showLog() {
  const logDiv = document.getElementById('log');
  const entriesDiv = document.getElementById('entries');
  const log = JSON.parse(localStorage.getItem('journalLog')) || [];

  entriesDiv.innerHTML = '';
  if (log.length === 0) {
    entriesDiv.innerHTML = "<p>No journal entries yet.</p>";
  } else {
    log.forEach(entry => {
      const p = document.createElement('p');
      p.className = 'entry';
      p.textContent = `${entry.date}: ${entry.feeling}`;
      entriesDiv.appendChild(p);
    });
  }

  logDiv.style.display = 'block';
}

function resetLog() {
  const confirmReset = confirm("Are you sure you want to delete all journal entries?");
  if (confirmReset) {
    localStorage.removeItem('journalLog');
    document.getElementById('entries').innerHTML = "<p>No journal entries yet.</p>";
    alert("Your journal has been reset.");
  }
}
