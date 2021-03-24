# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Oanh Le**

Time spent: **8** hours spent in total

Link to project: 
[Glitch](https://glitch.com/edit/#!/ls-memory-game) ☁️ [Demo](https://ls-memory-game.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

- [X ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [X ] "Start" button toggles between "Start" and "Stop" when clicked.
- [X ] Game buttons each light up and play a sound when clicked.
- [X ] Computer plays back sequence of clues including sound and visual cue for each button
- [X ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [X ] User wins the game after guessing a complete pattern
- [X ] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [X ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [X ] Buttons use a pitch (frequency) other than the ones in the tutorial
- [X ] More than 4 functional game buttons
- [X ] Playback speeds up on each turn
- [X ] Computer picks a different pattern each time the game is played
- [X ] Player only loses after 3 mistakes (instead of on the first mistake)
- [X ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X ] Reload the game when the user stops or when they win/lose the game
- [X ] Add current level of the game
- [ ] Color mode option (light/dark)
- [ ] Color palette and theme option
- [ ] Number of game buttons options (4 or 8 or 12,...)
- [ ] The notification pop up is within the website instead of an alert windown
- [ ] Dynamic website version

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![GIF](https://cdn.glitch.com/ffb0c705-14fc-4cc9-b610-eaac8adf7bf2%2Fezgif.com-gif-maker.gif?v=1616624747174)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   * [w3schools](https://www.w3schools.com/)
   * [Open Color](https://yeun.github.io/open-color/)
 
2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   <br><br> One of the challenges I have encountered was to implement the Start/Stop button. Unlike the original instructions, I wanted to make change its style that make the buttons look more user friendly. Therefore, I use `<a> </a>` tag instead of `<button> </button>`. 
Even though the button works well after the implementation, it doesn't have cursor or pointer to indicate that was a clickable functional button. I overcame this challenge by looking up on the internet with the solution was to add `style="cursor: pointer;"` inside the element.
Another challenge was the game does not completely stop when the user clicks the stop button during the game. 
My solution was to add the `Location.reload()` method that provides means to reload the page at current URL. 


3) What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   - What are some common color tools that are popular among web developers?
   - If I want to change the website from static to dynamic (for example, the users can log in their accounts to see their previous scores,...), what would be the process?
   - What are some principles that make a good web design?
   
4) If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   <br><br>If I have more hours to work on this project, I would spend them adding the ticking clock function and making the website look more aesthetic. For the user friend look, I’d add color mode option (light/dark), 
   as well as the color palette and images customization options so that users can choose the theme of the game by their own. In addition, if I have more time to do (about 2 months), I’d try to make the app become a dynamic website where scores can be saved, and users can sign up and log in to their account.
## License

    Copyright [Oanh Le]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
