#  Dev Stack

**Dev Stack** is a web app where developers can explore different technologies and choose the ones they want for their project. Users can see technologies like React, Next.js, PostgreSQL, and Docker along with their ratings, difficulty levels, and descriptions. They can also add technologies to their own **"Your Stack"** section.

## About the Project

Choosing technologies for a project can sometimes be confusing because there are so many options. Dev Stack makes this easier by showing different technologies in one place. Users can browse the technologies, check their information, and add their favorite ones to build their own stack.

##  Technologies Used

- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Icons**
- **React-Toastify**
- **Vite**

##  Features

1. **Technology Grid** — The technologies come from a local JSON file and are displayed in a responsive grid. It shows 1 column on mobile, 2 on tablets, and 3 on larger screens.

2. **Build Your Stack** — Users can add technologies to their own stack. The same technology cannot be added twice. Once a technology is added, the button changes to **"✓ Added to Stack."**

3. **Toast Notifications** — React-Toastify is used to show messages when users add, remove, or try to add a technology that is already in their stackv

---

#  React Concepts — Q&A

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. For example, we can write `<div>Hello</div>` directly in a React component.

It makes React code easier to understand because we can see the UI and the logic together. React converts JSX into JavaScript that the browser can understand.

---

### 2. What is the difference between props and state?

**Props** are data that a parent component sends to a child component. The child receives the data and uses it, but it should not change it.

For example, in this project, `tech` and `isAdded` are passed to the `TechnologyCard` as props.

**State** is data that a component manages itself. State can change when something happens.

For example, the `stack` in `App.tsx` is state because it changes when we add or remove a technology.

---

### 3. What does the `useState` hook do, and where did you use it?

`useState` is used when we need to store data that can change in a React component.

In this project, I used it to store the technologies that the user has added to their stack.

For example:

```tsx
const [stack, setStack] = useState<Technology[]>([]);
```

When a technology is added or removed, I update the state using `setStack()`. React then updates the UI automatically.

I also used `useState` to create the technology-fetching promise only once.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is normally used for things that happen outside the normal React rendering process, such as fetching data.

However, in this project I did not use `useEffect` for loading the JSON file. Instead, I used React's newer `use()` hook with `Suspense`.

The `use()` hook waits for the promise to finish and gets the technology data. While the data is loading, `Suspense` shows a loading message.

So, instead of using the traditional `useEffect` approach, this project uses the newer React pattern with **`use()`**** and ****`Suspense`**.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a `key` to identify each item in a list.

For example:

```tsx
{technology.map((tech) => (
  <TechnologyCard key={tech.id} tech={tech} />
))}
```

Here, `tech.id` is unique for each technology.

The key helps React understand which item was added, removed, or changed. This allows React to update the list properly.

---

### 6. What is conditional rendering?

Conditional rendering means showing different things on the screen depending on a condition.

For example, in the **Your Stack** section:

```tsx
{stack.length === 0 ? (
  <p>No technologies selected yet.</p>
) : (
  <p>{stack.length} Technology Selected</p>
)}
```

If there are no technologies, it shows:

**"No technologies selected yet."**

If there are technologies, it shows the number of selected technologies and the list.

So basically, the UI changes depending on the condition.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

In React, a parent sends data to a child using **props**.

For example:

```tsx
<TechnologyCard
  tech={tech}
  isAdded={isAdded}
/>
```

Here, the parent sends `tech` and `isAdded` to `TechnologyCard`.

If the child needs to tell the parent that something happened, the parent can pass a **function** as a prop.

For example:

```tsx
<TechnologyCard
  tech={tech}
  onAdd={handleAddedTech}
/>
```

Then the child can call:

```tsx
onAdd(tech);
```

This calls the function from the parent. The parent can then update its state.

