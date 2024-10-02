import Header from "./components/Headers";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-600 max-w-7xl scroll-smooth">
      {/* header */}
      <Header />
      <h1>Muhammad Abyan Kamal</h1>
      <p>Software Engineer</p>
      {/* about */}
      <p>
        Hello my name is Muhammad Abyan Kamal, I started learning programming in
        2020 during the pandemic.
      </p>
      {/* skills */}
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>Git</li>
        <li>Figma</li>
        <li>Laravel</li>
      </ul>
      {/* projects */}
      <p>Here are some of my projects</p>
      {/* contact */}
      <p>You can contact me at Below</p>
      {/* footer */}
    </div>
  );
}
