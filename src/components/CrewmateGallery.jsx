import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

function CrewmateGallery() {
  const [crewmates, setCrewmates] = useState([]);


  useEffect(() => {
    const fetchCrewmates = async () => {
        const {data} = await supabase
          .from('Posts')
          .select();
      
        setCrewmates(data)
    }

    fetchCrewmates();
  }, []);


  return (
    <div className="page">
      {crewmates.map((crewmate) => (
        <div key={crewmate.id} className="crewmate-card">
          <h1>{crewmate.name}</h1>
          <p>Speed: {crewmate.speed}</p>
          <p>Color: {crewmate.color}</p>
          <Link to={`/create-crewmate/update?id=${crewmate.id}&name=${crewmate.name}&speed=${crewmate.speed}&color=${crewmate.color}`}>Edit Crewmate</Link>
        </div>
      ))}
    </div>
  );
}

export default CrewmateGallery;
