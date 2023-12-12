const button = document.querySelector('.bubble-style-btn');


function createBubble () {
    const bubble = document.createElement('span');
    bubble.classList.add('bubble');
    const size = Math.random() * 30 + 20; // Random size between 20px and 50px
    const buttonRect = button.getBoundingClientRect();
    const x = Math.random() * (buttonRect.width - size);
    const y = Math.random() * (buttonRect.height - size);

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.top = `${y}px`;
    bubble.style.left = `${x}px`;

    button.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 1500);
}

// Interval to create bubbles at regular intervals (every 1 second)
setInterval(createBubble, 1000);