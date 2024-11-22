# Day 2 in My Journey to Learning Everyday!

Today, I explored useEffect in React, a hook that manages side effects in functional components. It’s an essential tool for handling tasks like fetching data, updating the DOM, or setting up subscriptions in a React application.

🌟 Key Takeaways from Learning useEffect:

1️⃣ What is useEffect?
	•	It’s a hook that allows us to perform side effects in a React component, such as fetching data from an API or interacting with the browser’s DOM.

2️⃣ When Does useEffect Run?
	•	By default, it runs after every render of the component. However, its behavior can be customized using a dependency array.

3️⃣ How to Control It:
	•	No Dependency Array: Runs after every render.
	•	Empty Dependency Array []: Runs only once when the component mounts.
	•	Specific Dependencies [dep1, dep2]: Runs only when specified dependencies change.

4️⃣ Cleanup Function:
	•	useEffect can return a cleanup function to handle tasks like unsubscribing from listeners or clearing timers. This cleanup runs when the component unmounts or before the effect re-runs.

Reflection:

useEffect is a game-changer for managing the lifecycle of functional components. Understanding how it works has made me realize how it simplifies complex workflows that were previously managed in class components with lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
The ability to fine-tune when effects run and clean up makes it a powerful tool for building dynamic and efficient React applications. I’m excited to apply it in future projects, especially for API calls and dynamic UI updates.

This journey of learning every day is already proving to be both exciting and rewarding. If you’ve used useEffect before, I’d love to hear about the challenges or tips you’ve encountered while using it! Here’s to Day 2 and many more ahead! 🙌
