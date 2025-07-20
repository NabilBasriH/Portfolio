import { FaAndroid } from 'react-icons/fa';

const projects = [
  {
    title: 'Juice App',
    description: 'An application that lets users browse a variety of juices 🧃',
    image: `${import.meta.env.BASE_URL}images/juice_app.png`,
    link: 'https://github.com/NabilBasriH/Juice-App',
    tech: [
      { type: 'icon', element: <FaAndroid title="Android" className="text-green-500" /> },
      { type: 'image', src: '/Portfolio/logos/compose.png', alt: 'Jetpack Compose' }
    ]
  },
  {
    title: 'Climat',
    description: "Application that shows the current weather and nearby cities based on the user's location. 🌤️",
    image: `${import.meta.env.BASE_URL}images/climat.png`,
    link: 'https://github.com/NabilBasriH/Climat-App',
    tech: [
      { type: 'icon', element: <FaAndroid title="Android" className="text-green-500" /> },
      { type: 'image', src: '/Portfolio/logos/xml.png', alt: 'XML Views' }
    ]
  }
];

export default function Projects() {
  return (
    <section className="flex-1 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden shadow-md bg-gray-800 w-full max-w-md mx-auto flex flex-col items-center"
            >
              <div className="relative w-full h-52 bg-gray-800 flex items-center justify-center">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={project.image}
                    alt={`${project.title} mockup`}
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-2xl shadow-lg"
                  />
                </a>
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4 max-h-[4.5rem] overflow-hidden">
                  {project.description}
                </p>
                <div className="flex items-center space-x-4 mb-4">
                  {project.tech.map((tech, i) =>
                    tech.type === 'icon' ? (
                      <span key={i} className="text-2xl">{tech.element}</span>
                    ) : (
                      <img
                        key={i}
                        src={tech.src}
                        alt={tech.alt}
                        title={tech.alt}
                        className="w-6 h-6 object-contain"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}