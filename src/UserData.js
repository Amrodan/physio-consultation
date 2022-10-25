import React, { createContext } from 'react';
// import Blogcontainer from "./components/Blogcontainer";
// import Postfeed from "./components/Postfeed";
// import Blog from "./pages/BlogPage";
export const UserContext = createContext();

const posts = [
	{
		id: 1,
		profilePicture: 'https://data.whicdn.com/images/322027365/original.jpg?t=1541703413',
		username: 'Monroe',
		desc: 'loren ipsum as jsa e edad rajsd jasd ahasd adsha sdadad a ',
		post: 'The bravest thing I ever did was continuing my life when I wanted to die.',
		likes: []
	},
	{
		id: 2,
		profilePicture: 'https://i.pinimg.com/236x/e5/fe/e7/e5fee79558b408b9625d954a9ccb9234.jpg',
		username: 'Saif',
		desc: 'loren ipsum as jsa e edad rajsd jasd ahasd adsha sdadad a ',
		post: 'One must still have chaos in oneself to be able to give birth to a dancing star.',
		likes: []
	},
	{
		id: 3,
		profilePicture: 'https://qph.fs.quoracdn.net/main-qimg-09f503c9ab605614ac40ea0dcca4d30a',
		username: 'John Doe',
		desc: 'loren ipsum as jsa e edad rajsd jasd ahasd adsha sdadad a ',
		post:
			"It's my experience that people are a lot more sympathetic if they can see you hurting, and for the millionth time in my life I wish for measles or smallpox or some other easily understood disease just to make it easier on me and also on them.",
		likes: []
	},
	{
		id: 4,
		profilePicture:
			'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
		username: 'Munera',
		desc: 'loren ipsum as jsa e edad rajsd jasd ahasd adsha sdadad a ',
		post: 'You don’t have to control your thoughts. You just have to stop letting them control you.',
		likes: []
	}
];

export const StateProvider = (prop) => {
	return <UserContext.Provider value={posts}>{prop.children}</UserContext.Provider>;
};
