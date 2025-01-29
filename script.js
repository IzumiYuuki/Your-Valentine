document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const image = document.getElementById('image');

    yesBtn.addEventListener('click', () => {
        alert('Yay! Happy Valentine\'s Day!');
        image.src = 'happy-image.jpg'; // Replace with a path to a happy image
    });

    noBtn.addEventListener('click', () => {
        alert('Oh no! Maybe next time.');
        image.src = 'sad-image.jpg'; // Replace with a path to a sad image
    });
});
