/**
 * Example user info for your chain of saplings 🔗🌲.
 * Update the fields with your information.
 */

// The links to display on your page. These will be listed in the same order that they appear here.
const links = [
	{
		name: "Web Development",
		url: "https://allisontarr.com",
		icon: "link",
		// Refer to FontAwesome documentation to determine if an icon should be a fas or fab. (Brands are fab, so most will be fab.)
		// https://fontawesome.com/icons?d=gallery&p=2&m=free
		prefix: "fas"
	},
	{
		name: "Bluesky",
		url: "https://bsky.app/profile/allisonplus.bsky.social",
		icon: "bluesky",
		prefix: "fab"
	},
	{
		name: "Newsletter",
		url: "https://buttondown.com/tinyghost",
		icon: "envelopes-bulk",
		prefix: "fas"
	}
];

// Your personal information.
const profile = {
	name: "Allison Tarr",
	pronouns: "she/her", // Your pronouns.
	bio: "Currently a freelance web developer. Studying to be a therapist. Californian Canadian. Writer. Psychopomp. Public library supporter. I like to think I'll be Nancy Drew when I grow up. Sea witch.",
	image: "https://allisontarr.com/wp-content/uploads/2025/01/IMG_3269-scaled.jpg"
};

// You can optionally customize the color scheme that will be used.
// If you like, you can create your own color schemes. These will be
// added as classes to the main component.
const colorScheme = "solarized";

// Don't edit below this line!
const details = {
	links,
	profile,
	colorScheme
}

// Export each detail individually in case they are needed.
export { profile };
export { colorScheme };
export { links };

export default details;
