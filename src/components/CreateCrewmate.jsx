import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function CreateCrewmate() {
  const { action } = useParams();
  const navigate = useNavigate();

// For the "Create a New Crewmate" form
const [createName, setCreateName] = useState('');
const [createSpeed, setCreateSpeed] = useState('');
const [createColor, setCreateColor] = useState('');

// For the "Update or Delete Crewmate" form
const [updateName, setUpdateName] = useState('');
const [updateSpeed, setUpdateSpeed] = useState('');
const [updateColor, setUpdateColor] = useState('');


  const handleCreateCrewmate = async () => {
    await supabase
        .from('Posts')
        .insert({name: createName, speed: createSpeed, color: createColor})
        .select();
  };

  const handleUpdateCrewmate = async () => {

    await supabase
        .from('Posts')
        .update({name: updateName, speed: updateSpeed, color: updateColor})
        .eq('id', id);
  };

  const handleDeleteCrewmate = async () => {
    await supabase
        .from('Posts')
        .delete()
        .eq('id', id);
  };
    let nameParam = null;
    let speedParam = null;
    let colorParam = null;
    let id = null;
  if (action === 'update') {
    const urlParams = new URLSearchParams(window.location.search);
    nameParam = urlParams.get('name');
    speedParam = urlParams.get('speed');
    colorParam = urlParams.get('color');
    id = urlParams.get('id');
  }

  return (
    <div className="page">
      {action === 'create' ? (
        <div>
          <h1>Create a New Crewmate</h1>
          <form>
            <input type="text" placeholder="Name" value={createName} onChange={(e) => setCreateName(e.target.value)} />
            <input type="text" placeholder="Speed" value={createSpeed} onChange={(e) => setCreateSpeed(e.target.value)} />
            <input type="text" placeholder="Color" value={createColor} onChange={(e) => setCreateColor(e.target.value)} />
            <button onClick={handleCreateCrewmate}>Create Crewmate</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>Update or Delete Crewmate</h1>
          <p>Name: {nameParam}</p>
          <p>Speed: {speedParam}</p>
          <p>Color: {colorParam}</p>
          <form>
            <input type="text" placeholder="Name" value={updateName} onChange={(e) => setUpdateName(e.target.value)} />
            <input type="text" placeholder="Speed" value={updateSpeed} onChange={(e) => setUpdateSpeed(e.target.value)} />
            <input type="text" placeholder="Color" value={updateColor} onChange={(e) => setUpdateColor(e.target.value)} />
            <button onClick={handleUpdateCrewmate}>Update Crewmate</button>
            <button onClick={handleDeleteCrewmate}>Delete Crewmate</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CreateCrewmate;
