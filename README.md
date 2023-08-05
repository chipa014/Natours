## Natours

A landing page for a tour agency. This project was built as a part of Jonas Schmedtmann's "Advanced CSS and Sass" course.
See the final result: https://chipa014-natours.netlify.app/

### Notes

I wanted to apply what I've already learned, so I made this with React. This came with several caveats that became apparent throughout the development.

First, mixing architectures can be a bad idea. Duh. This project is a weird amalgamation of the standard 7-1 and React Sass module system. While it turned out to work together better than could've been expected, the development process still felt very clunky.

Another big thing was the BEM notation. Turns out it's not really necessary when your components have 3-5 different classes each. I gave it up halfway in in favor of readability.

There's definitely space for improvement. Some components are big enough to separate into smaller ones, the BEM notation is to be gotten rid of, some natural behavior like the modal closing on Esc or background click, etc. Nevertheless, as of now, I'm happy with where it ended up as an exercise and I'm excited to learn the next thing.
