const gameTextElement = document.getElementById('game-text');
const choicesElement = document.getElementById('choices');

// Helper function to display text with Matrix style
function printMatrixStyle(text) {
    gameTextElement.innerText += text + '\n';
}

// Function to clear screen (simulated by clearing text)
function clearScreen() {
    gameTextElement.innerText = '';
}

// Function to display choices
function displayChoices(options) {
    choicesElement.innerHTML = ''; // Clear previous choices
    options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('choice-button');
        button.innerText = option.text;
        button.addEventListener('click', () => option.action());
        choicesElement.appendChild(button);
    });
}

// --- Game Chapters (Translate your Python functions here) ---

function startGame() {
    clearScreen();
    printMatrixStyle("Cyberpunk: Choose your own adventure");
    printMatrixStyle("\n#0 Intro");
    printMatrixStyle("This is a choose-your-own adventure crime story with a nice cyberpunk flavor.");
    printMatrixStyle("Play as a crooked data-smuggler trying to navigate a harsh criminal underworld.");
    printMatrixStyle("Be careful what you do and be careful who you trust.");
    printMatrixStyle("Remember, it's the choices you make that define who you are.");
    printMatrixStyle("Don't read chronologically. It can't work with page numbers so at the end of each chapter you'll get a choice which lead you to your next chapter.");

    displayChoices([
        { text: "Press Enter to begin...", action: chapter1 }
    ]);
}

function chapter1() {
    clearScreen();
    printMatrixStyle("---");
    printMatrixStyle("## 1 Chapter 1: Neo-Rosa");
    printMatrixStyle("Right now, you're sitting in a nightclub called the Neo-Rosa, but you don't want to be there, all the smoke and electricity usually messes with your cybernetics. Unfortunately, Neo-Rosa is a front that your boss - an ugly bastard named Kaiba - uses to run his business. He calls you over. ''Darcy! Aye, Darce! How you been, man? Look, I got a job for you and I need it done tonight, you hear me? I'm sendin' a datafile to your implant, get it to my guy downtown. Take Z with you in case you run into any cops. Got it? Okay, get going'' You've worked with Zero before, he's about as dangerous as they get but you respect him. Together you go deeper into the city following the nav-point of Kaiba's contact. Through the rain are television screens burning like fires in a hazy night.");
    printMatrixStyle("\n''Cops up ahead,'' says Z. ''Checkpoint. They scan you, we're both done.'' You suggest going cyber but Zero disagrees. ''Cant' risk being intercepted.'' Another siren whirls in the street behind you. Zero's hand hovers over his gun. ''Fuck is this? Too many cops for a regular checkpoint. Something's up.'' On instinct you pull up Kaiba's datafile on your neural interface.");
    printMatrixStyle("In a few seconds you could delete the file and save yourself, but of course you'd have to answer to Kaiba afterwards. The cops are closing in. Zero turns to you. ''What are you thinking?''");
    printMatrixStyle("\nIt's time for you to make a choice.");

    displayChoices([
        { text: "1. Destroy Kaiba's datafile", action: chapter2 },
        { text: "2. Run", action: chapter3 }
    ]);
}

function chapter2() {
    clearScreen();
    printMatrixStyle("---");
    printMatrixStyle("## Chapter 2. The Bossman's Wife.");
    printMatrixStyle("You destroyed Kaiba's datafile and now you and Zero are heading to an underground nightclub downtown that belongs to one of Kaiba's competitors. You receive a call and patch it through to your earpiece. Kaiba's voice crackles in your head. ''I told you not to screw up again. Where you runnin' to, huh? You think I can't find you?'' ''Look Kaiba, what was I supposed to do?'' ''I ain't a very forgiving guy, Darce. I know a lotta gangsters who'd pay handsomely for you...''");
    printMatrixStyle("\nDisconnect.");
    printMatrixStyle("A bouncer with mirrored shades is staring down at you. Zero whispers something into his ear and suddenly you're in another nightclub.");
    printMatrixStyle("''Kaiba ain't as smart as he thinks he is,'' says Zero. ''I know someone who can help.''");
    printMatrixStyle("In a corner booth sits a woman with a martini glass in one hand and a cigarette in the other. Zero introduces her as Rosa, Kaiba's wife. You pretend you don't know her. ''You got it?'' Zero says to Rosa. She slides a thumb-drive across the table. ''Right here. Just like I promised.'' You stare at the thumb-drive in amazement. ''Is that?'' ''A replica of the datafile you just destroyed,'' says Zero. ''DO you have any idea what's on this? If we get into the info from this USB, well, we won't be the ones running from Kaiba.'' He kisses Rosa on the cheek. ''You're a lifesaver. Now if you'll excuse me I have some calls to make.'' When Zero leaves, Rosa turns to you. ''Hey, you wanna dance?'' You and Rosa head to the dancefloor, she puts her arms over your shoulders and leans in close. ''I thought you'd call.'' ''What, are you insane?'' ''It was just a kiss babe, nobody saw it. Don't need to be afraid now, Kaiba already wants you dead. Hey, you trust him?'' She glances at Zero standing in the corner on his phone. ''I wouldn't trust him.'' ''What do you want?'' ''I want to get me outta here, Darce, away from this city. C'mon, just me and you. Like you promised, remember?''");
    printMatrixStyle("\nYou glance at Zero and then back to Rosa. ''I'll need the datafile.'' ''I gotta know you mean it. Show me this is for real.'' You need to decide");

    displayChoices([
        { text: "1. Kiss her", action: chapter4 },
        { text: "2. Go back to Zero", action: chapter5 }
    ]);
}

function chapter3() {
    clearScreen();
    printMatrixStyle("---");
    printMatrixStyle("## Chapter 3. Fugitive.");
    printMatrixStyle("You grab Zero by the collar and pull him into the nearest alley. Sirens whirl on the main street and voices are calling after you. You don't look back, that's the way it's done in this kind of line. Just keep running. Zero talks to you while you run. ''Listen man, in case we get separated you need to know something about that datafile. Behind the encryption is a hidden security mechanism - virus. Whatever you do, don't open it.'' You go cyber to intercept police communications, hearing a dozen radio calls at once as well as seeing Zero and yourself on a video feed produced by an overhead drone. You tell Zero about the drone, he turns and aims his gun, and the feed disappears.");
    printMatrixStyle("\n''No use,'' you say to Zero. ''We're surrounded, man.'' ''Find the perimeter weak spot. I'll get us through.'' You use the radio communications to create a map in your mind of all the police units in the area but before you can pick a route you detect a jammer and suddenly you're pulled out of cyber. Your brain feels like it's been frozen. ''I've been cut off.'' A handful of officers and two bots emerge from the haze and go after Zero. He takes one of them down before they hit him with a taser and rock him to the concrete. Your nearest weapon is a metal pipe sitting in a dumpster. Of course, if you could pull yourself back into cyber you could easily hack the bots. But it'd only work once, and you'd need cyber to get yourself out of there. Pinned to the ground, Zero looks you in the eye. ''Darcy, help me!''");
    printMatrixStyle("\nTime to choose. Save Zero or Leave Zero behind");

    displayChoices([
        { text: "1. Save Zero", action: chapter6 },
        { text: "2. Leave Zero behind", action: chapter7 }
    ]);
}

function chapter4() {
    clearScreen();
    printMatrixStyle("---");
    printMatrixStyle("## Chapter 4. Last laugh");
    printMatrixStyle("Rosa's lips are soft, and the warm taste of alcohol lingers in your mouth as you let her go and approach Zero. One more enemy to make, another person to run from, but you're already running, and you can't shake the feel of her breath from your mind. You need to get out. Your words are checked by the knowledge that Zero is just as dangerous a man as Kaiba to betray, but soon you'll be gone and they'll both have each other to worry about. ''I'm gonna help Rosa escape the city.'' ''What you're talking about. We can't help her, man, we have bigger things to worry about. Kaiba...''");
    printMatrixStyle("\nYou cut him off. ''Not we, Zero, it's just me. I'm getting out. I'm taking Rosa and I'm getting the fuck out. I need the datafile.'' Zero's expression becomes grim, a plastic mask wrapped in neon light. He grabs you by the arm. ''I'm telling you right now, okay, you're making a big mistake. That woman is gonna get you killed.'' You pull your pistol from your belt and press it against his waist, then you reach out your hand and ask for the datafile.");
    printMatrixStyle("\nZero gives it to you. ''I'm real fucking sorry,'' he says.");
    printMatrixStyle("\nYou leave Zero. Rosa is waiting for you outside. The rain has stopped and you tread along the glowing sidewalk, go underground, to the train station. A bullet train departs at 2.01. Just like that you're on your way.");
    printMatrixStyle("\nAt 3.15 Rosa is leaning against you, sometimes with her eyes closed, sometimes not, your jacket wrapped around her. You've been staring at the thumb-drive for over an hour, turning it over in your fingers like some precious gem. ''Why do you keep staring at it?'' Rosa asks. ''I'm just- curious. What's on here that's so damn important?'' You go cyber and tap into the thumb-drive. It's encrypted but the code only takes you a few minutes to crack. You select the file and stare at the prompt that says 'open'. ''Don't, babe.'' Rosa sits up. ''Don't open it. We don't need to know. Let's just get it to my contact and leave all this behind us.'' You consider why Zero had Rosa make a copy in the first first place. Was he planning on using it against Kaiba? Whatever the file contained, it could be used against him. What do you do? Open the file or Take it to Rosa's contact");

    displayChoices([
        { text: "1. Open the file", action: chapter8 },
        { text: "2. Take it to Rosa's contact", action: chapter9 }
    ]);
}

function chapter5() {
    clearScreen();
    printMatrixStyle("---");
    printMatrixStyle("## Chapter 5. Brothers");
    printMatrixStyle("''It was a pretty good kiss.'' You brush Rosa's arms off your shoulders and take a step back. ''But I gotta save myself. Z and I will take care of Kaiba.'' Zero is ending his call when you return to him. Together you watch Rosa disappear into a crowd of people. ''What was that about?'' Zero asks. ''I get the feeling I'm missing something.'' You reassure him. ''Nothing to worry about, but don't expect any more help from her.'' ''I'm surprised. She was just your type.'' ''Unavailable. Doesn't matter anyway, she did her job.'' Zero fishes the USB drive from his pocket. ''This is all we need, C'mon, time to go.''");
    printMatrixStyle("\nYou leave the club, quite gladly. The rain has stopped and the cool quiet streets finally allow you to think again. You traverse a network of dirty alleyways, take two taxis and arrive at another bar. But this one is different, old fashioned and completely empty, probably one of Kaiba's. They have serving droids at the late hours. The droid hands Zero a bottle of whiskey and he pours two glasses.");
    printMatrixStyle("\n''There's a reason you're here, you know. Plan's changed a little. You're the only hacker good enough to crack this.'' He places the USB on the bar top. ''How long you been working against Kaiba?'' Z shrugs. ''Long enough. Before you tap into that I should warn you about the security mechanism. It's hidden pretty well, the last guy couldn't find it, so before you try to crack the password make sure you bypass the virus first.'' He's right. You go cyber and try to access the file. It looks like a standard encryption until you look closer and you see it, hidden, waiting. ''You can disable it, right?'' Z asks. You get to work. Messing with viruses is always tricky, one wrong move and they can scramble your brain. But you're the best in the business. Sooner or later, everything breaks.");
    printMatrixStyle("\n''I'm in.'' Zero laughs and raises his glass. ''Knew I could count on you. Here. Drink. Drink.'' What do you do? Accept the drink or Refuse to drink");

    displayChoices([
        { text: "1. Accept the drink", action: chapter10 },
        { text: "2. Refuse to drink", action: chapter11 }
    ]);
}

function chapter6() {
    clearScreen();
    printMatrixStyle("---");
    printMatrixStyle("## Chapter 6. Loyalty.");
    printMatrixStyle("You go cyber. - it hurts. It fugin hurts - It fucking hurts. Your neural implant feels like a - wearing a coat of flames - hot coal burning away at the back of your mind. But you bypass the jammer and begin hacking the two bots. The officer holding Zero is thrown against a wall. The adrenaline is rushing. You want to hurt someone. You charge the officers and try to hit one with a metal pipe. Suddenly - a large of - a surge of electricity is tearing through your body. The rain stops. Your implant shatters like glass in your mind, and the last thing you see before passing out is Zero, running for his goddamn life. You wake up in a small white room on a hard platform that serves as a bed. For a second you're a little foggy about what exactly happened but then you see the white bars and realize you're in a holding cell.");
    printMatrixStyle("\nYou think if he was so smart he’d know. You’d know if you did it.");
    printMatrixStyle("\nIt isn't long before they drag you to an interrogation room and handcuff you to the table. A woman is sitting across from you. She places a folder on the table and starts flicking through it. ''Quite a record. Numerous cases of data-theft, DOS attacks, distribution of illegal software...'' ''Whoever that is sounds like a very talented guy,'' You smile at her. ''You, Mr. Tancredi, are a dangerous man...'' ''Do you have a boyfriend?'' ''I need to know what is on the datafile we pulled from your pocket...'' ''Maybe after the interrogation we could get a drink.'' She slams her hands on the table. ''Answer me.'' You raise your hands slightly. Time to stop screwing around. ''You know, I could tell you how to crack that datafile, although naturally I'd want something in return. Or, I could tell you to fuck off, which I don't want to do because you're so pretty.''");
    printMatrixStyle("\n''All I want to know is are you willing to cooperate?'' What do you say? Turn Kaiba in or remain loyal to Kaiba");

    displayChoices([
        { text: "1. Turn Kaiba in", action: chapter12 },
        { text: "2. Remain loyal to Kaiba", action: chapter13 }
    ]);
}

function chapter7() {
    clearScreen();
    printMatrixStyle("---");
    printMatrixStyle("## Chapter 7. The mainframe.");
    printMatrixStyle("You feel bad about leaving Zero to the authorities but business is business. Besides, if your roles had been reversed, Zero wouldn't have gone back. At this stage you've stopped caring for whatever Kaiba wants or what Zero wants. You're on your own now. Keep running and don't look back. The rain stops. You're cautious about where to go, who to trust. What did Zero tell the authorities? Did he give you away? You consider returning to your apartment. All of your hardware is there, if the police found it you know you'd be in trouble, but if they caught you there it would be much worse. - so much worse- The train station. Keep moving. Why did Z mention the access protocols? Was it a mistake? Doesn't matter. For you, it's an opportunity. Destroy Kaiba.");
    printMatrixStyle("\nYou sit down and let the train take off, staring out a scratched-up window with a sticker warning people about the costs of vandalism. You're far enough away now. Go cyber. Access the datafile, bypass the security mechanism, crack the encryption. You're in. It's like you're floating through a digital library and you're reading every single one of Kaiba's files at once. The datafile has a backdoor into the entire network. And you're holding it all in your hands. What do you do with it? Destroy everything or Take over Kaiba's organization");

    displayChoices([
        { text: "1. Destroy everything", action: chapter14 },
        { text: "2. Take over Kaiba's organization", action: chapter15 }
    ]);
}

// --- Endings ---
function chapter8() {
    clearScreen();
    printMatrixStyle("---");
    printMatrixStyle("## Chapter 8. Infect-Nine (Ending)");
    printMatrixStyle("You open it, and right away you know that something is wrong. Something unfamiliar has accessed your neural implant. It was a trick. Rosa notices the sudden change. She holds your hand and looks at you closely. ''Darcy? Darcy, what's wrong?'' She didn't know. ''Virus...'' That's all you can manage to say. The corruption enters your mind and spreads through your nervous system in seconds. You feel it taking control. What are its parameters? What kind of payload did Kaiba devise? It looks like a DOS. Damn.");
    printMatrixStyle("\n--- Game Over ---");
    playAgain();
}

function chapter9() {
    clearScreen();
    printMatrixStyle("---");
    printMatrixStyle("## Chapter 9. Ghosts (Ending)");
    printMatrixStyle("''You're right. It isn't worth it.'' You switch out of cyber and slip the thumb-drive back into your pocket. Dawn. Another alley. Another secret world. Rosa punches a code into a control panel and a metal door clicks open. You step into an elevator. You descend. The door opens and computer light floods in. You've entered a hacker den. Well organized. These guys aren't amateurs. A man in suit greets you and you give him the datafile. ''It's all yours,'' you tell him. ''Good luck. Now, our deal.'' The man nods. ''You want to disappear.'' And you do. You leave the city. A few months later you even marry Rosa, on a whim. Congratulations. But we all leave our ghosts behind. You should have known that men in your position never truly get 'out'. You weren't expecting it when Zero arrived at a fancy restaurant where you and Rosa were having dinner. You caught his eye for a second over a glass of champagne, you even thought it might not be real. But the gun was real, the bullets were real, the shattering glass, Rosa's blood seeping into the tablecloth. By the time you draw your pistol she is already dead. You shoot Zero down, but he gets you too. You fall over the table. The whole thing's a mess now anyway. You take your wife's hand and wonder where it all went so bad.");
    printMatrixStyle("\n--- Game Over ---");
    playAgain();
}

function chapter10() {
    clearScreen();
    printMatrixStyle("---");
    printMatrixStyle("## Chapter 10. Coward's way (Ending)");
    printMatrixStyle(" - Professional coward! Profissionale - ''To the destruction of Kaiba.'' You drink. Your neural implant immediately detects the toxin, but it's unfamiliar, and you realize that it's designed to bypass any countermeasures. Then you really feel it kick in - the nausea, sweating, weakness. ''What is this?'' you say to Zero. ''This whole time you were still working for Kaiba?'' ''I'm glad you drank the poison. It's such a clean way to go, and I could tell you still had some suspicions.'' You try to attack Zero but you slip off your bar stool and fall to the floor. ''The boss was disappointed in you. You go behind his back, mess around with his wife, you ball on a job just cos some cops show up, and now you're here plotting to take him out.'' You start to black out.");
    printMatrixStyle("\nZero is crouching in front of you now. ''You should have run off with Rosa while you had the chance. You would have died either way, mind you, but it might have taken me a little longer to track you down.'' You do regret not leaving with Rosa, but most of all you feel stupid and angry for trusting Zero. Your last words. ''Fuck you.''");
    printMatrixStyle("\n--- Game Over ---");
    playAgain();
}

function chapter11() {
    clearScreen();
    printMatrixStyle("---");
    printMatrixStyle("## Chapter 11. Among thieves (Ending)");
    printMatrixStyle("You have the glass of whiskey in your hand but you don't move. You set the glass down. Zero's eyes are on you, waiting. He seems disappointed, but not surprised. He reaches for his gun. You grab the whiskey bottle and strike him over the head with it, so that he stumbles sideways against the bar. Then you're wrestling him for the gun, smashing his hand against the bar top until the gun fires and a nearby bottle explodes. He kicks you in the side of the knee and when you lose your balance he punches you in the jaw. Without thinking, as you fall to the ground, about to be gunned down by Zero, you go cyber. The serving droid. Hacking... connection established. Shotgun beneath the counter. Zero staggers over you, blood dripping from the wound above his eye, pistol in hand. Then the sound of shotgun, and Zero's body jerks backwards. That is the end of Zero. You lay there for a moment, then drag yourself back onto your barstool and pour yourself a fresh glass of whiskey. The bar is deathly silent. You take out your phone and dial Rosa's number. You let it ring. No one answers.");
    printMatrixStyle("\n--- Game Over ---");
    playAgain();
}

function chapter12() {
    clearScreen();
    printMatrixStyle("---");
    printMatrixStyle("## Chapter 12. Traitor's price. (Ending)");
    printMatrixStyle("Kaiba's arrest was all over the news. From the comfort of your new home you watched the police take down his entire organization. You had made a deal with the cops: you told them everything they needed to know about Kaiba, and you showed them how to crack his datafile and bypass the security mechanism, and use it to access his network. In return you got reduced jail time. They never fully repair your neural implant. You had to explain that it didn't just allow you to hack, it also helped regulate your heartbeat and kept control of your other feedback systems. - a hard time explaining - As a non-hacker, you are released from prison on good behavior and go into an early retirement. You aren't surprised when you come home one day and find Zero sitting in your living room, and the pistol with the suppressor attached pointing at your torso. ''Would you like some coffe?'' you ask. He refuses ''I won't be staying long.'' ''Funny that Kaiba can set a hit out from a prison cell.'' ''I wish it wasn't me, but orders are orders. Why'd you have save me from the cops?'' ''Because I respect you.'' ''Well, it ain't personal, I hope you know that.'' You sigh. ''Just get it over with.''");
    printMatrixStyle("\n--- Game Over ---");
    playAgain();
}

function chapter13() {
    clearScreen();
    printMatrixStyle("---");
    printMatrixStyle("## Chapter 13. Debt Repaid (Ending)");
    printMatrixStyle("You're in a prison transport bound for whatever whole they put data-thieves in nowadays. They put a lock on your neural implant to stop you from hacking anything but you can still detect the jammer that they set up as an extra precaution. But the jammer is suddenly disabled, and you know that it's time. You and the guard across from you are thrown over as something heavy rams into the transport. The feeling of motion stops. Gunfire. The keypad on the door suddenly activates. A decryption key is running. The guard sits up. ''What's going on? Are you doing this?'' You rattle your handcuffs. ''It's not me but clearly you're being hacked.'' The automatic door to the back on the truck unlocks and slides open. - raam with a rushing, sliding, falling noise - Zero and three other men armed with assault rifles are standing there. ''I never said thanks for saving me,'' says Zero. ''Come on, we got work to do.''");
    printMatrixStyle("\n--- Game Over ---");
    playAgain();
}

function chapter14() {
    clearScreen();
    printMatrixStyle("---");
    printMatrixStyle("## Chapter 14. Fire (Ending)");
    printMatrixStyle("There is a keyboard in front of you. THe collective data of millions of dollars of criminal activities floating around you in streams of code. You smile. Ctrl+ A, DELETE. Darkness. A moment later you wake up on the train as if from a dream. It's chilly and fog has clouded the window. You can't be sure that any of this is real, it's like a simulation playing in your mind, that somehow this grimy shadowy life you live would unknowingly throw you the key to the backdoor of this city's criminal underworld, and ona whim, you would choose to burn it all to the ground. Why? Why would you do that? Well, for starters, you know that Kaiba can't retaliate. Zero is the only man good enough to take you down, and he's in prison. Truth is, you're tired of running, but it's all you really know. You are not a loyal person, you have no friends or loved ones. This is your chance to get back at the life you live.");
    printMatrixStyle("The news of Kaiba's bankruptcy spreads through the city like a virus, and from afar the life you left behind looks like a ravenous beast, a raging machine, ready to tear itself apart.");
    printMatrixStyle("\n--- Game Over ---");
    playAgain();
}

function chapter15() {
    clearScreen();
    printMatrixStyle("---");
    printMatrixStyle("## Chapter 15. The usurper (Ending)");
    printMatrixStyle("Kaiba isn't the kind of person you underestimate. You take your time. Plan your moves carefully. Piece by piece you pick him apart, target his friends, steal his money, leak his data. It isn't long enough before the only thing he has left is the Neo-Rosa. Finally, you go to Neo-Rosa. Kaiba's orders are shoot on sight but his men no longer obey him out of fear of you. The music shuts off a few seconds after you fire your gun. The silence permeates the club. You can just hear the sound of Kaiba's blood dripping to the floor. You look around at frightened faces and flashing strobe lights. The Neo-Rosa is remodeled and turned into a more civilized establishment, a symbol of the new way you intend to run things. Here you take your place as the new head of the criminal underworld.");
    printMatrixStyle("\n--- Game Over ---");
    playAgain();
}

function playAgain() {
    displayChoices([
        { text: "Do you want to play again? (yes)", action: startGame },
        { text: "Do you want to play again? (no)", action: () => {
            clearScreen();
            printMatrixStyle("Thanks for playing!");
            choicesElement.innerHTML = ''; // Hide choices after "Thanks for playing!"
        }}
    ]);
}

// Start the game when the page loads
document.addEventListener('DOMContentLoaded', startGame);
