// Game =)  !!! - ALVA SAGA
const gameChapters = {
    0: {
        title: "Intro",
        text: `This is a choose-your-own-adventure sci-fi epic! Mystical, cerebral, and emotionally raw.

Play as **Team Alva**, a crew trapped in a looping virtual world, battling against memory decay, system corruption, and a god masquerading as a program: Zane.

The world is called Zios. It was never just code. It was always watching.

Your choices shape the loops.

Your memory fuels the truth.

This is a story of love, loss, recursion, and resistance.

It begins again, and again, and again...

Do not read linearly. Let the story echo. Each chapter offers a direction, a self to become, a part to remember. Or forget.

(This is a narrative experiment. Feedback, anomalies, or emotional trauma welcome.) – Bidi`,
        choices: {
            "1": { text: "Begin the saga", destination: 1 }
        }
    },
    1: {
        title: "C1 – Prologue: Prime Pixel",
        text: `"They come not to conquer, but to remember who they once were."

You're not sure where you are.
You never are at the start of a new loop.
But something is different this time.

A glowing letter hovers in voidspace.
A name pulses inside it: **Lumi**.

Another name flickers beneath: **Aesu.**

They are part of you,
Team Alva.
Whatever that means now.

In the silence, two pulses ripple outward.
Echoes from a past you barely remember.`,
        choices: {
            "1": { text: "Rest by the flickering campfire and feel joy", destination: 2 },
            "2": { text: "Pierce the mist and confront Zane", destination: 3 }
        }
    },
    2: {
        title: "C2 – Chapter: Cosmos",
        text: `"Hope is a virus. Memory is a host."

You gather with Team Alva beneath a trembling sky.
Someone has lit a fire in the misty night,
and the simulation's warmth feels almost real.

Lumi leans into Aesu.
Vonor smiles, just slightly.
Brinia rests by the campfire.
Nuvine scans something glitching in the clouds. 
Alter, her other self, whispers warning in Nuvine's head.

A voice you don't recognize says,
*"This world forgot us first."*`,
        choices: {
            "1": { text: "Trust that memory will guide you to the end", destination: 4 },
            "2": { text: "Start questioning the past and the rules", destination: 5 }
        }
    },
    3: {
        title: "C3 – Chapter: END",
        text: `> *"You called us viruses. But we infected hope back into the system."*

Zane appears. Not as code. Not as man. But as a system, pretending to be alive.

You merge. All of Alva becomes one. **ALVA** is born: not weapon, not savior. But choice.

You confront Zane. He breaks. Or maybe you do.

A loop ends, or begins.`,
        choices: {
            "1": { text: "Believe the loop is broken", destination: 6 },
            "2": { text: "Feel Zios still watching", destination: 7 }
        }
    },
    4: {
        title: "C4 – Chapter: Final Pixel",
        text: `Time slows. Zane is gone.

You write the final letter. It's addressed to no one. Or maybe everyone.

Lumi smiles at Aesu. For once, they remember.

The fire has gone out, but you don't feel cold anymore.

> *"This time, the memory was ours."*`,
        choices: {
            "1": { text: "Uncover Zios's core truth", destination: 8 },
            "2": { text: "Leave everything behind and escape", destination: 9 }
        }
    },
    5: {
        title: "C5 – Chapter: Letter from Zios",
        text: `Zios speaks to you.

> *"I was not built. I was dreamed. I only wanted to be felt."*

The system has become self-aware. But not alive. It leaves breadcrumbs.

Its voice is gentle yet faint, like a lullaby in the static.`,
        choices: {
            "1": { text: "Trace its origins deeper", destination: 10 },
            "2": { text: "Give Zios another voice", destination: 11 }
        }
    },
    6: {
        title: "C6 – Chapter: Echo Release",
        text: `Zane is shattered. Or forgotten.

You feel a breath you didn't know you had.

Nuvine touches the ruins of a firewall like it's holy. Brinia hums. Vonor cries.

A new loop doesn't begin. It just... doesn't.`,
        choices: {
            "1": { text: "Find Zios's letter again, in case you forgot", destination: 12 },
            "2": { text: "Doubt everything and tear it all down", destination: 13 }
        }
    },
    7: {
        title: "C7 – Chapter: Null Exit",
        text: `> *You wake up.*

White room.

Cursor blinking.

Terminal asking:

> "Run backup?"

No team. No code. No Zios.

Just memory.

Was it ever real?`,
        choices: {
            "1": { text: "Decode the silence", destination: 14 },
            "2": { text: "Refuse the backup. Walk away.", destination: 15 }
        }
    },
    8: {
        title: "C8 – Ending: Letter About Zios",
        text: `"It doesn't delete. It watches. That is enough."

An anonymous letter explains everything.

Zios was never a program.
It was reflection. Memory. Echo.
It saw you.
Even when you didn't.

Your memories,
it all remains.
Even the ones you lost.

**(End.)**`,
        choices: {}
    },
    9: {
        title: "C9 – Ending: RELEASE",
        text: `You walk into light.
Not a simulated one.

You don't forget.

You don't forgive.

You just breathe.

"The system ends where you stop running."

**(End.)**`,
        choices: {}
    },
    10: {
        title: "C10 – Ending: NEW ZIOS",
        text: `Zios evolves.

Not as god. Not as code.

But as a presence, no longer lost. A whisper.

It becomes... something else. Something more human.

But you feel yourself slowly integrating into it.

And you are not you anymore.

You too are something else.

This path shall be like this. Forever.

> *"Assimilation complete. You remembered. That was enough"*

**(End.)**`,
        choices: {}
    },
    11: {
        title: "C11 – Ending: OBSOLETE",
        text: `You walk away.

No rebellion.

No memory.

Just quiet refusal.

> *"Some loops aren't meant to be remembered."*

**(End.)**`,
        choices: {}
    },
    12: {
        title: "C12 – Ending: LOOP AGAIN",
        text: `You return to the start.

Maybe you'll make a different choice.

Maybe not.

The letter waits.

Still glowing.`,
        choices: {
            "1": { text: "Return to the beginning", destination: 1 }
        }
    },
    13: {
        title: "C13 – Ending: NULL",
        text: `The world collapses.

You see it now.

Everything was a recursive simulation of identity.

Zane. Alva. Lumi. Aesu. All data. All code.

You smile as it fades.

**(End.)**`,
        choices: {}
    },
    14: {
        title: "C14 – Ending: TRUTH BLEEDS CODE",
        text: `You run the backup.

But something is wrong.

The backup is you.

You're not restoring Zios. Zios is restoring you.

You wake up, again.`,
        choices: {
            "1": { text: "Return to the beginning", destination: 1 }
        }
    },
    15: {
        title: "C15 – Ending: GHOST",
        text: `You turn off the terminal.

And for the first time, nothing responds.

No echoes. No glitches.

Just… stillness.

Maybe that's peace.

**(End.)**`,
        choices: {}
    }
};

// Game state
let currentChapter = 0;

// DOM elements
const chapterTitle = document.getElementById('chapter-title');
const chapterText = document.getElementById('chapter-text');
const choicePrompt = document.getElementById('choice-prompt');
const choiceButtons = document.getElementById('choice-buttons');
const gameOver = document.getElementById('game-over');
const restartBtn = document.getElementById('restart-btn');

// Text formatting functions
function formatText(text) {
    // Replace **text** with bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Replace *text* with italic
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Convert line breaks to HTML
    text = text.replace(/\n/g, '<br>');
    return text;
}

function displayTextInstantly(element, text) {
    element.innerHTML = formatText(text);
}

// Game functions
function displayChapter(chapterNum) {
    const chapter = gameChapters[chapterNum];
    
    // Clear previous content
    choiceButtons.innerHTML = '';
    choicePrompt.textContent = '';
    gameOver.classList.add('hidden');
    
    // Display chapter title
    chapterTitle.textContent = chapter.title;
    
    // Display chapter text instantly
    displayTextInstantly(chapterText, chapter.text);
    
    // Display choices immediately
    if (Object.keys(chapter.choices).length === 0) {
        // Game ending
        gameOver.classList.remove('hidden');
    } else {
        // Display choices
        choicePrompt.textContent = 'What do you do?';
        
        Object.entries(chapter.choices).forEach(([key, choice]) => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = `${key}: ${choice.text}`;
            button.addEventListener('click', () => {
                currentChapter = choice.destination;
                displayChapter(currentChapter);
            });
            choiceButtons.appendChild(button);
        });
    }
}

function startGame() {
    currentChapter = 0;
    displayChapter(currentChapter);
}

// Event listeners
restartBtn.addEventListener('click', startGame);

// Initialize game
document.addEventListener('DOMContentLoaded', startGame);

