import React from 'react'
import { works } from './data/works';


export const Projects = () => {
  return (
    <div className="projects">
      {
        works.map(work => {
          return (
          <div className="project-card" key={work.id}>
            <h2>{work.name}</h2>
            <h3>Teconlogías</h3>
            <ul>
              <li>{work.tecnologias}</li>
            </ul>
            <h3>Enlace al proyecto</h3>
            <ul>
              <li>
              <a href={work.url} target="_blank" rel="noopener noreferrer" className="website-link">Proyecto</a>
              </li>
            </ul>
            <h3>Descripcion</h3>
            <ul>
              <li>{work.descripcion}</li>
            </ul>
          </div>
          );
        })
      }
    </div>
  )
}
