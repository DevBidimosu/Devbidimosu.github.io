class AlvaSagaGame {
    constructor() {
        this.currentChapter = 'intro';
        this.history = [];
        this.storyDisplay = document.getElementById('story-display');
        this.choicesContainer = document.getElementById('choices-container');
        this.restartBtn = document.getElementById('restart-btn');
        this.historyBtn = document.getElementById('history-btn');
        this.historyModal = document.getElementById('history-modal');
        this.historyList = document.getElementById('history-list');
        
        this.initializeEventListeners();
        this.displayChapter(this.currentChapter);
    }
    
    initializeEventListeners() {
        this.restartBtn.addEventListener('click', () => this.restartGame());
        this.historyBtn.addEventListener('click', () => this.showHistory());
        
        // Modal close functionality
        const closeBtn = this.historyModal.querySelector('.close');
        closeBtn.addEventListener('click', () => this.hideHistory());
        
        window.addEventListener('click', (event) => {
            if (event.target === this.historyModal) {
                this.hideHistory();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.hideHistory();
            }
        });
    }
    
    displayChapter(chapterId) {
        const chapter = gameData[chapterId];
        if (!chapter) {
            console.error(`Chapter ${chapterId} not found`);
            return;
        }
        
        // Add to history if not intro
        if (chapterId !== 'intro' && !this.history.includes(chapterId)) {
            this.history.push(chapterId);
        }
        
        // Clear previous content
        this.storyDisplay.innerHTML = '';
        this.choicesContainer.innerHTML = '';
        
        // Display chapter title
        const titleElement = document.createElement('h2');
        titleElement.className = 'chapter-title';
        titleElement.textContent = chapter.title;
        this.storyDisplay.appendChild(titleElement);
        
        // Display story content with instant rendering
        const contentElement = document.createElement('div');
        contentElement.className = 'story-text';
        contentElement.innerHTML = chapter.content;
        this.storyDisplay.appendChild(contentElement);
        
        // Add smooth scroll to top
        this.storyDisplay.scrollTop = 0;
        
        // Display choices
        if (chapter.choices && chapter.choices.length > 0) {
            chapter.choices.forEach((choice, index) => {
                const choiceBtn = document.createElement('button');
                choiceBtn.className = 'choice-btn';
                choiceBtn.textContent = choice.text;
                choiceBtn.addEventListener('click', () => {
                    this.makeChoice(choice.next);
                });
                
                // Add keyboard support
                choiceBtn.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        this.makeChoice(choice.next);
                    }
                });
                
                this.choicesContainer.appendChild(choiceBtn);
            });
        }
        
        // Add visual effects for special text
        this.addVisualEffects();
        
        // Update current chapter
        this.currentChapter = chapterId;
    }
    
    makeChoice(nextChapterId) {
        // Add smooth transition effect
        this.storyDisplay.style.opacity = '0.7';
        this.choicesContainer.style.opacity = '0.7';
        
        setTimeout(() => {
            this.displayChapter(nextChapterId);
            this.storyDisplay.style.opacity = '1';
            this.choicesContainer.style.opacity = '1';
        }, 200);
    }
    
    addVisualEffects() {
        // Add glitch effect to corrupted text
        const glitchElements = this.storyDisplay.querySelectorAll('.glitch-text');
        glitchElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.animation = 'glitch 0.3s infinite';
            });
            element.addEventListener('mouseleave', () => {
                element.style.animation = '';
            });
        });
        
        // Add hover effects to character names
        const characterNames = this.storyDisplay.querySelectorAll('strong');
        characterNames.forEach(name => {
            name.addEventListener('mouseenter', () => {
                name.style.textShadow = '0 0 10px rgba(0, 212, 255, 0.5)';
                name.style.transition = 'text-shadow 0.3s ease';
            });
            name.addEventListener('mouseleave', () => {
                name.style.textShadow = '';
            });
        });
    }
    
    restartGame() {
        if (confirm('Are you sure you want to restart the game? Your progress will be lost.')) {
            this.currentChapter = 'intro';
            this.history = [];
            this.displayChapter('intro');
        }
    }
    
    showHistory() {
        this.historyList.innerHTML = '';
        
        if (this.history.length === 0) {
            this.historyList.innerHTML = '<p>No chapters visited yet.</p>';
        } else {
            this.history.forEach(chapterId => {
                const chapter = gameData[chapterId];
                if (chapter) {
                    const historyItem = document.createElement('div');
                    historyItem.className = 'history-item';
                    historyItem.innerHTML = `
                        <h3>${chapter.title}</h3>
                        <button onclick="game.displayChapter('${chapterId}'); game.hideHistory();">
                            Revisit Chapter
                        </button>
                    `;
                    this.historyList.appendChild(historyItem);
                }
            });
        }
        
        this.historyModal.classList.remove('hidden');
        this.historyModal.classList.add('show');
    }
    
    hideHistory() {
        this.historyModal.classList.remove('show');
        this.historyModal.classList.add('hidden');
    }
    
    // Save game state to localStorage
    saveGame() {
        const gameState = {
            currentChapter: this.currentChapter,
            history: this.history,
            timestamp: Date.now()
        };
        localStorage.setItem('alvaSagaGame', JSON.stringify(gameState));
    }
    
    // Load game state from localStorage
    loadGame() {
        const savedState = localStorage.getItem('alvaSagaGame');
        if (savedState) {
            try {
                const gameState = JSON.parse(savedState);
                this.currentChapter = gameState.currentChapter || 'intro';
                this.history = gameState.history || [];
                this.displayChapter(this.currentChapter);
                return true;
            } catch (error) {
                console.error('Failed to load saved game:', error);
                return false;
            }
        }
        return false;
    }
}

// Initialize the game when the page loads
let game;

document.addEventListener('DOMContentLoaded', () => {
    game = new AlvaSagaGame();
    
    // Try to load saved game
    if (!game.loadGame()) {
        // If no saved game, start from beginning
        game.displayChapter('intro');
    }
    
    // Auto-save game state when navigating
    window.addEventListener('beforeunload', () => {
        game.saveGame();
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (event) => {
        // Press 'R' to restart
        if (event.key.toLowerCase() === 'r' && event.ctrlKey) {
            event.preventDefault();
            game.restartGame();
        }
        
        // Press 'H' to show history
        if (event.key.toLowerCase() === 'h' && event.ctrlKey) {
            event.preventDefault();
            game.showHistory();
        }
        
        // Number keys for quick choice selection
        if (event.key >= '1' && event.key <= '9') {
            const choiceIndex = parseInt(event.key) - 1;
            const choiceButtons = document.querySelectorAll('.choice-btn');
            if (choiceButtons[choiceIndex]) {
                choiceButtons[choiceIndex].click();
            }
        }
    });
});

// Add some utility functions
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add smooth scrolling for better UX
function smoothScrollTo(element, target, duration = 500) {
    const start = element.scrollTop;
    const change = target - start;
    const startTime = performance.now();
    
    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        element.scrollTop = start + change * easeInOutCubic(progress);
        
        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }
    
    requestAnimationFrame(animateScroll);
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}
