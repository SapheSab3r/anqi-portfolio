import React from 'react';
import { useEffect, useState } from 'react';
import './Project.scss';
import GalleryData from './../workData/Data';
import Filter from './Filter';
import { Link } from 'react-router-dom'


export default function Project() {

  const [data, setData] = useState(GalleryData);
  const [filtered, setFiltered] = useState(GalleryData);
  const [activeButton, setActive] = useState('all');

  return (
    <section className='projects' id='project'>
      <div className="project-container">
        <div className="heading-project">Projects</div>

        <div className="selection">
          <Filter data={data} setFiltered={setFiltered} activeButton={activeButton} setActive={setActive} />
        </div>

        <div className="gallery">

          {filtered.map((item) =>
            <div className="card-holder" key={item.id}>
              <div className="card-head">
                <img className="card-img" src={item.image} alt="project item" />

              </div>
              <div className="card-body">
                <h2 className="item-name">{item.title}</h2>
                <div className="item-date">{item.year}</div>
              </div>

              <div className="card-hover">
                <div className="card-hover-inside">
                  <div className="item-role" >
                    {item.role.map((i) => (
                      <div className="each-render">{i}</div>
                    ))}

                  </div>
                  <div className="item-type">
                    {item.type.map((type) => (
                      <div className="type-render">{type}</div>
                    ))}
                  </div>
                  <div className="item-decs">{item.desc}</div>



                  <Link to={`/project/${item.id}`} className="click-more">Learn More</Link>
                </div>

              </div>
            </div>

          )}


        </div>
      </div>

    </section>
  )
}
