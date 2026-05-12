import { FadeIn } from '../ui';

const services = [
  { num: '01', name: 'AI Integration & Automation', desc: 'I connect your web application to AI models — LLMs, ChatGPT API, LangChain, and custom ML pipelines — to automate workflows, generate content, and deliver intelligent features your users will actually use.' },
  { num: '02', name: 'Fullstack Web Development', desc: 'End-to-end product development from concept to deployment. I handle both frontend and backend — React, Next.js, Node.js, REST APIs, and database architecture — so you get one developer who sees the whole picture.' },
  { num: '03', name: 'Frontend Development', desc: 'Responsive, high-performance web interfaces built with React and Next.js. Fast load times, clean code, pixel-perfect execution — and optimized for both users and search engines.' },
  { num: '04', name: 'Backend Development', desc: 'Robust server-side systems, RESTful APIs, and scalable database architectures using Node.js, Express, Python, and PostgreSQL. Built to handle real traffic, not just demos.' },
  { num: '05', name: 'Web App Development', desc: 'Custom web applications built with modern tech stacks — from internal tools and dashboards to client-facing SaaS platforms. Performance, security, and scalability are non-negotiable.' },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[32px] sm:rounded-t-[40px] md:rounded-t-[48px] px-5 sm:px-8 md:px-10 py-12 sm:py-14 md:py-16 relative z-10">
      <h2 className="font-black uppercase text-center text-[clamp(2.4rem,7vw,86px)] mb-8 sm:mb-10 md:mb-12 leading-none">
        Services
      </h2>
      <p className="mx-auto -mt-6 mb-8 max-w-2xl text-center text-xs uppercase tracking-wide opacity-60 sm:text-sm md:mb-10">
        What I can build for you.
      </p>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, i) => (
          <div key={service.num}>
            <FadeIn delay={i * 0.1} className={`flex flex-col md:flex-row items-start md:items-center py-4 sm:py-5 md:py-5 border-t border-[rgba(12,12,12,0.15)] ${i === services.length - 1 ? 'border-b' : ''}`}>
              <div className="w-[56px] sm:w-[72px] md:w-[92px] font-black text-[clamp(2rem,5vw,58px)] leading-none text-[#0C0C0C] shrink-0 mr-4 sm:mr-5 mb-2 md:mb-0">
                {service.num}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-medium uppercase text-[clamp(0.9rem,1.35vw,1.2rem)] leading-tight">{service.name}</h3>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.78rem,1vw,0.9rem)] opacity-60">
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
};
