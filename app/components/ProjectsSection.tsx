import Image from 'next/image';

export default function ProjectsSection() {
	const projects = [
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
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Featured Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project) => (
						<div key={project.title} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={project.image} alt={`Project ${project.title}`} height={225} width={400}/>
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">{project.title}</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
								{project.url && (
									<div className="flex gap-2">
										<a
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
	);
}
