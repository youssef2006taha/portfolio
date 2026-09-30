import { Check, GraduationCap, MapPin, Globe } from 'lucide-react';
import SectionHeading from '../../../components/ui/SectionHeading';

export default function EducationSection({ education }) {
  return (
    <section id="education" className="scroll-mt-10 bg-bg-secondary/60 py-15">
      <div className="container mx-auto px-4">
        <SectionHeading title={education?.title} subtitle={education?.subtitle} />

        <div className="mt-10 grid gap-8 lg:grid-cols-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-primary/15 bg-bg-surface/80 p-7 shadow-xl backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap size={28} />
                </div>
                {education?.degrees?.[0]?.location && (
                  <span className="flex items-center gap-1 text-xs font-medium text-text-muted">
                    <MapPin size={14} className="text-primary" />
                    {education.degrees[0].location}
                  </span>
                )}
              </div>

              {education?.degrees?.map((degree, index) => (
                <div key={index} className="mt-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                    {degree.date}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-text-main leading-snug">
                    {degree.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-text-muted">
                    {degree.institution}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-text-muted border-t border-primary/10 pt-4">
                    {degree.description}
                  </p>
                </div>
              ))}
            </div>

            {education?.languages && education.languages.length > 0 && (
              <div className="rounded-3xl border border-primary/15 bg-bg-surface/80 p-6 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Globe size={20} />
                  <h4 className="font-bold text-text-main">Languages</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {education.languages.map((lang, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between w-full p-3 rounded-xl bg-bg-secondary/60 border border-text-light/10 text-sm"
                    >
                      <span className="font-semibold text-text-main">{lang.name}</span>
                      <span className="text-xs text-primary font-medium bg-primary/10 px-2.5 py-1 rounded-md">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-7 space-y-4">
            {education?.courses?.map((course, index) => (
              <div 
                key={index} 
                className="group flex gap-4 rounded-2xl border border-text-light/10 bg-bg-surface/80 p-5 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="p-1.5 h-fit rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Check size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-bold text-text-main group-hover:text-primary transition-colors">
                      {course.name}
                    </h3>
                    <span className="text-xs text-primary font-medium bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                      {course.date}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 text-xs text-text-muted">
                    <span className="font-medium text-text-muted/90">{course.provider}</span>
                    {course.location && (
                      <span className="flex items-center gap-0.5">
                        • <MapPin size={12} /> {course.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}