import { Calendar, ExternalLink, Tag, UserCheck } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function ProjectModalContent({ project }) {
  const { current } = useSelector((state) => state.lang)
  
  if (!project) return null;

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 max-h-[75vh] max-w-[85vw] overflow-y-auto p-4 md:p-6 space-y-6 cScroll text-text-primary">
        <div className="relative w-full h-80 md:h-90 lg:h-full rounded-xl overflow-hidden border border-text-light/10 flex justify-center items-center bg-linear-to-br to-primary/20">
          {project.video ? (
            <video
              src={project.video}
              poster={project.image}
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
          )}
          {project.role && (
            <span className="absolute top-3 left-3 z-10 bg-primary text-text-inverse text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 pointer-events-none">
              <UserCheck size={14} />
              {project.role}
            </span>
          )}
        </div>

        <div className='space-y-2'>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-text-main">
                {project.title}
              </h3>
              {project.date && (
                <span className="flex items-center gap-1.5 text-xs text-text-muted bg-bg-secondary px-3 py-1 rounded-md border border-text-light/10">
                  <Calendar size={13} />
                  {project.date}
                </span>
              )}
            </div>
            <p className="text-sm font-medium text-primary">
              {project.subDescription}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">
              {current === "ar" ? "عن المشروع" : "About"}
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-text-muted/90 bg-bg-secondary/40 p-4 rounded-xl border border-text-light/5">
              {project.description}
            </p>
          </div>


          {project.tags && project.tags.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider flex items-center gap-1.5">
                <Tag size={14} />
                {current === "ar" ? "التقنيات المستخدمة" : "Tech & Tools"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.link && (
          <div className="pt-2 flex justify-end">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-text-inverse hover:opacity-90 px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md hover:shadow-lg"
            >
              <span>{current === "ar" ? "معاينة المشروع" : "View Project"}</span>
              <ExternalLink size={16} />
            </a>
          </div>
        )}
        </div>
      </div>

    </>
  );
}