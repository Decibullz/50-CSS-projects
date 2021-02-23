const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = ` 
  <div class="big">
    ${e.keyCode}
  </div>
    <div class="key">
        ${e.key === ' ' ? 'Space' : e.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${e.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${e.code}
        <small>event.code</small>
    </div>
    <div class="key">
        ${
          e.location === 0
            ? 'General Keys'
            : e.location === 3
            ? 'Numpad'
            : e.location === 2
            ? 'Right-side Modifier Keys'
            : e.location === 1
            ? 'Left-side Modifier Keys'
            : e.location
        }
        <small>event.location</small>
    </div>`
})
