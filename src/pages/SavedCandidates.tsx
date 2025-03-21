import React, { useEffect, useState } from 'react';
import AcceptedCandidates from '../components/PotentialCandidates';
import DeniedCandidates from '../components/DeniedCandidates';
import type Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);
  const [deniedCandidates, setDeniedCandidates] = useState<Candidate[]>([]);

  const removeCandidate = (
    e: React.MouseEvent<Element, MouseEvent>,
    currentlyOnPotentialList: boolean | null | undefined,
    currentlyOnAlreadyDenied: boolean | null | undefined,
    name?: string | undefined
  ) => {
    e.preventDefault();
    if (!name) return;

    if (currentlyOnPotentialList) {
      const updatedCandidates = potentialCandidates.filter(candidate => candidate.name !== name);
      setPotentialCandidates(updatedCandidates);
      localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));
    } else if (currentlyOnAlreadyDenied) {
      const updatedDeniedCandidates = deniedCandidates.filter(candidate => candidate.name !== name);
      setDeniedCandidates(updatedDeniedCandidates);
      localStorage.setItem('alreadyDenied', JSON.stringify(updatedDeniedCandidates));
    }
  };

  useEffect(() => {
    const storedPotential = localStorage.getItem('potentialCandidates');
    const storedDenied = localStorage.getItem('alreadyDenied');

    setPotentialCandidates(storedPotential ? JSON.parse(storedPotential) : []);
    setDeniedCandidates(storedDenied ? JSON.parse(storedDenied) : []);
  }, []);

  return (
    <>
      <h1 className="pageHeader">Potential Candidates</h1>
      {potentialCandidates.length === 0 ? (
        <h1 style={{ margin: '16px 0' }}>Add potential candidates here.</h1>
      ) : (
        <AcceptedCandidates 
          potentialCandidates={potentialCandidates} 
          removeCandidate={removeCandidate} 
        />
      )}

      <h1 className="pageHeader">Denied Candidates</h1>
      {deniedCandidates.length === 0 ? (
        <h1 style={{ margin: '16px 0' }}>No denied candidates.</h1>
      ) : (
        <DeniedCandidates 
          deniedCandidates={deniedCandidates} 
          removeCandidate={removeCandidate} 
        />
      )}
    </>
  );
};

export default SavedCandidates;
