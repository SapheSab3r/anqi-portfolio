import React, {useEffect} from 'react'

export default function Filter({setActive, activeButton, setFiltered, data}) {

    useEffect(()=>{
        if(activeButton === 'all'){
          setFiltered(data);
          return;
        } 
        const filtered = data.filter((item)=>
          item.type.includes(activeButton)
        );
        setFiltered(filtered);
      },[activeButton]);

  return (
    <div className="filter-container">
        <div className={activeButton === 'all' ? "active" : "list"} onClick={()=> setActive('all')}>All</div>
        <div className={activeButton === 'UI/UX' ? "active" : "list"} onClick={()=> setActive('UI/UX')}>UI/UX</div>
        <div className={activeButton === 'Website' ? "active" : "list"} onClick={()=> setActive('Website')}>Website</div>
        <div className={activeButton === 'Coding' ? "active" : "list"} onClick={()=> setActive('Coding')}>Coding</div>
    </div>
  )
}
