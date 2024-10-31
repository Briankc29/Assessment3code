document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('lesson1').addEventListener('click', () => {
        document.getElementById('lesson1-dialog').show();
    });

    document.getElementById('lesson2').addEventListener('click', () => {
        document.getElementById('lesson2-dialog').show();
    });

    document.getElementById('lesson3').addEventListener('click', () => {
        document.getElementById('lesson3-dialog').show();
    });
    const sendButton = document.getElementById('send-button');
    sendButton.addEventListener('click', () => {
        alert('Thank you for your message.');
    });
    const signupButton = document.getElementById('signup-button');
    signupButton.addEventListener('click', () => {
        alert('Sign up functionality coming soon!');
    });
});
