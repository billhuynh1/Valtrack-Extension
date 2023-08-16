chrome.windows.getLastFocused(
    {populate: false}, 
    function(currentWindow) {
        chrome.windows.update(currentWindow.id, { width: 500 });
    }
);

// Get the current window's dimensions
const currentWidth = window.innerWidth;
const currentHeight = window.innerHeight;

// Calculate the new dimensions you want for the window
const newWidth = 400; // Replace with your desired width
const newHeight = 300; // Replace with your desired height

// Resize the window
window.resizeTo(newWidth, newHeight);
