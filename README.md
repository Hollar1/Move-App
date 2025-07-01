🏠 Home Page Component (Home.jsx)
This is the main UI for displaying movies fetched from an external API (like TMDB). It integrates several key React concepts:

✅ Features Implemented:
Movie List Rendering:

The component uses the useMovieContext() hook to retrieve movie data.

Each movie is displayed using a MovieCards reusable component.

Search Filter:

A search input allows users to filter movies in real-time based on the starting characters of the movie title (case-insensitive).
movie.title.toLowerCase().startsWith(search.toLowerCase())
Like/Unlike System:

Each movie can be liked (toggled with a heart icon). This is managed using the likedMovies state array.

Depending on whether the movie is liked, it displays a solid or regular heart icon using FontAwesome icons.

This shows understanding of conditional rendering and state-driven UI.

Ad Display on Load:

An advertisement (<Adverts /> component) is shown for 10 seconds on page load.

This is controlled using the showAd state and setTimeout within useEffect.

📺 Adverts Component (Adverts.jsx)
This component is a temporary video ad popup designed to promote a fictional clothing store.

✅ Features Implemented:
Countdown Timer:

The ad includes a 10-second countdown, implemented with useEffect and setTimeout.

The seconds state decreases every second until it hits zero.

Video Display:

An autoplaying, muted, looping video is embedded using a local file.

Demonstrates ability to work with media elements in React.

External Link Integration:

The ad contains a promotional message and a clickable link (mock site: studylodge.org) styled using CSS Modules.
