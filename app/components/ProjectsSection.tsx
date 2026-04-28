import Image from 'next/image';

export default function ProjectsSection() {

const workPlaces = [
  {
    company: 'SBM Life Science',
    logo: '/SBM Logo.png',
    period: 'Aug 2025 – Present',
    projects: [
      {
        title: 'Helpdesk Ticketing System',
        description: 'Built a internal helpdesk ticketing system using Zoho Desk, streamlining support requests and ticket routing across departments.',
      },
      {
        title: 'Supplier & Toller Shipment Portal',
        description: 'Developed a web portal using Zoho Creator and Deluge scripting to manage inbound shipments from suppliers and tollers, including a custom JavaScript truck builder widget.',
      },
    ],
  },
];

const schoolProjects = [
  {
    title: 'Senior Project',
    image: '/logo.png',
    description: 'A website-oriented group capstone project focused on AI recognition of antlers in a buck photo and matching them to one in a created database. I mainly focused on the front end of the project using TailwindCSS, React and Next.js',
    url: 'https://www.canva.com/design/DAGk8XXXZq8/W9tNUPN-1hwd3Ye9vqGs8A/edit?utm_content=DAGk8XXXZq8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
  },
  {
    title: '3D Donkey Kong',
    image: '/Unity.png',
    description: 'A solo project where I created a 3D remake of the classic arcade game built with Unity and C#. I used free assets and implemented an AI companion that periodically destroyed the barrels.',
    url: 'https://www.canva.com/design/DAGoLcFnQNk/W0tNXnHd4M-SDwalyeIHSQ/watch?utm_content=DAGoLcFnQNk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0cb6853639'
  },
  {
    title: 'Arithman',
    image: '/arithman.png',
    description: 'A math-based side scroll game created with Pygame where the user answered math equations to avoid obstacles. If answered correctly, their speed and difficulty of the equations would increase.',
    url: 'https://docs.google.com/presentation/d/1RYsOaOKyAXnpb_ddwmMXJcmKiYTD3sJUZUGcFfka9jI/edit?usp=sharing'
  },
];
  
  return (
    <div>
      {/* Work Projects */}
      <section className="py-12 sm:py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Work Projects</h2>
          <div className="flex flex-col gap-10">
            {workPlaces.map((workplace) => (
              <div key={workplace.company}>
                {/* Company Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white rounded-lg p-2 w-14 h-14 flex items-center justify-center shrink-0">
                    <Image src={workplace.logo} alt={workplace.company} width={48} height={48} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{workplace.company}</h3>
                    <p className="text-sm text-gray-400">{workplace.period}</p>
                  </div>
                </div>
                {/* Projects under this company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pl-2">
                  {workplace.projects.map((project) => (
                    <div key={project.title} className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{project.title}</h4>
                      <p className="text-sm sm:text-base text-gray-300">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Projects */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">School Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {schoolProjects.map((project) => (
              <div key={project.title} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-700 relative">
                  <Image src={project.image} alt={`Project ${project.title}`} height={225} width={400} />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                  {project.url && (
                    <div className="flex gap-2">
                      
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
                      >
                        View Project →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
