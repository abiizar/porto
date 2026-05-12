import { DestinationCard } from '../ui/DestinationCard';
import { FadeIn } from '../ui';

const skills = [
  {
    num: '01',
    title: 'UI/UX Design',
    desc: 'Creating intuitive, user-centered interfaces with wireframing, prototyping, and usability testing to deliver seamless digital experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80',
    themeColor: '270 70% 45%',
  },
  {
    num: '02',
    title: 'Frontend Development',
    desc: 'Building responsive, performant web interfaces using React, Next.js, and modern CSS frameworks with pixel-perfect attention to detail.',
    imageUrl: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=900&q=80',
    themeColor: '210 80% 45%',
  },
  {
    num: '03',
    title: 'Backend Development',
    desc: 'Developing robust server-side applications, RESTful APIs, and database architectures using Node.js, Express, and modern backend technologies.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    themeColor: '155 65% 32%',
  },
  {
    num: '04',
    title: 'Fullstack Solutions',
    desc: 'End-to-end web application development from concept to deployment, handling both client and server-side with scalable architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
    themeColor: '25 85% 42%',
  },
  {
    num: '05',
    title: 'Web Development',
    desc: 'Custom website development with modern tech stacks, performance optimization, SEO best practices, and responsive design across all devices.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    themeColor: '330 75% 40%',
  },
];

export const SkillCardsSection = () => {
  return (
    <section className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 relative z-10">
      <FadeIn delay={0} y={30} className="mx-auto max-w-5xl text-center mb-10 sm:mb-14">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,10vw,130px)]">
          What I Do
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[#D7E2EA]/70 text-sm sm:text-base md:text-lg uppercase tracking-wide">
          Focused services for design, development, and scalable digital products.
        </p>
      </FadeIn>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div key={skill.num} className="h-[360px]">
            <FadeIn delay={index * 0.08} y={30} className="h-full">
              <DestinationCard
                imageUrl={skill.imageUrl}
                location={skill.title}
                flag={skill.num}
                stats={skill.desc}
                href="#contact"
                themeColor={skill.themeColor}
              />
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
};
