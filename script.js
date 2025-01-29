document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const message = document.getElementById('message');
    const image = document.getElementById('image');

    yesBtn.addEventListener('click', () => {
        message.textContent = "Yay! Happy Valentine's Day! ❤️";
        image.src = './images/happy-image.gif'; // Replace with the actual happy GIF path
    });

    noBtn.addEventListener('click', () => {
        message.textContent = "Oh no! Maybe next time. 😢";
        image.src = './images/sad-image.gif'; // Replace with the actual sad GIF path
    });
});
