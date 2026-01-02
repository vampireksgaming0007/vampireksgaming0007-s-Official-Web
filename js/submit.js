document.getElementById('agreementForm')?.addEventListener('submit', e => {
    e.preventDefault();

    // Show alert message
    alert('Agreement submitted! It will be reviewed on Discord.\nJoin here: https://discord.gg/t2MeHqA6Hz');

    // Optional: open the Discord link in a new tab automatically
    window.open('https://discord.gg/t2MeHqA6Hz', '_blank');
});
