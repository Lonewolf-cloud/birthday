function reveal(type) {
    let msg = "";

    if (type === 'wishes') {
        msg = "Wishing you the happiest birthday ever! May your day be filled with love and smiles! 💕✨";
    }

    if (type === 'surprise') {
        msg = "🎉 SURPRISE!!! 🎉 You deserve all the happiness in the world!";
    }

    if (type === 'memories') {
        msg = "📸 Even though this website can't hold all our memories, just know: you made every moment special!";
    }

    if (type === 'funny') {
        msg = "😂 You're not aging... you're just upgrading to the premium version!";
    }

    document.getElementById('messageBox').innerHTML = msg;
}

function playSong() {
    document.getElementById('song').play();
}
