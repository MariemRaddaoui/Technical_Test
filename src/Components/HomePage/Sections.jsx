import React from "react";
import translation from "../../utils/i18next";
const sectionsData = [
  {
    id: 1,
    title: translation('sections.1.title'),
    description: translation('sections.1.description'),
  },
  {
    id: 2,
    title: translation('sections.2.title'),
    description: translation('sections.2.description'),
  },
  {
    id: 3,
    title: translation('sections.3.title'),
    description: translation('sections.3.description'),
  },
];

const Sections = () => {
  return (
    <div className="sections">
      <div className="sections-header">
        <h1>
          {translation('sectionsHeader')}{" "}
          <span className="blue-title">{translation('sectionsHeaderSpan')}</span>
        </h1>
      </div>
      {sectionsData.map(section => (
        <div key={section.id} className={`section-${section.id}`}>
          <div className={`section image-${section.id}`}>
            <div className={`section-content`}>
              <h2>{section.title}</h2>
            </div>
          </div>
          <p>{section.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Sections;
