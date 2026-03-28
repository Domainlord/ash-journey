content = """Ash Journey — Cinematic Pokémon Website

A cinematic, interactive website showcasing the journey of Ash Ketchum — built with modern UI, smooth animations, and immersive storytelling.

--------------------------------------------------

Live Preview
https://Domainlord.github.io/ash-journey/

--------------------------------------------------

Features

- Cinematic hero section with background effects
- Smooth scrolling experience (Lenis + GSAP)
- Story-driven journey timeline with animations
- Interactive Pokémon cards with hover effects & 3D tilt
- Pokémon-specific animations (electric, fire, water, grass)
- Companions section with dynamic UI interactions
- Gradient + glow-based modern design system
- Fully responsive layout

--------------------------------------------------

Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- GSAP (Scroll animations)
- Lenis (Smooth scrolling)

--------------------------------------------------

Project Structure

ash-journey/
|-- index.html
|-- style.css
|-- script.js
|-- images/
    |-- ash-pikachu.png
    |-- pikachu.png
    |-- charizard.png
    |-- greninja.png
    |-- bulbasaur.png
    |-- misty.png
    |-- brock.png
    |-- serena.png

--------------------------------------------------

Credits

Designed & Built by Chirag Chaudhary

--------------------------------------------------

Note

All Pokémon assets belong to their respective owners.
This project is for educational and portfolio purposes only.

--------------------------------------------------

Show Your Support

If you like this project, give it a star on GitHub!
"""

file_path = "/mnt/data/README.txt"
with open(file_path, "w") as f:
    f.write(content)

file_path
