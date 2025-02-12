import type React from 'react';
import {useEffect, useState} from 'react';
import AcceptedCandidates from '../components/PotentialCandidates';
import type  Candidate  from '../interfaces/Candidate.interface';



const SavedCandidates = () => {
 const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

 const removeCandidate = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    currentlyOnPotentialList: boolean | null | undefined,
    currentlyOnAlreadyDenied: boolean | null | undefined,
    name: string | null
) => {
  e.preventDefault();
  if (currentlyOnPotentialList) {
    const updatedCandidates = potentialCandidates.filter(
      (candidate) => candidate.Name !== name
    );
    setPotentialCandidates(updatedCandidates);
    localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));
  } else if (currentlyOnAlreadyDenied) {
    let parsedCandidates: Candidate[] = [];
    const storedCandidates = localStorage.getItem('alreadyDenied');
    if (typeof storedCandidates === 'string') {
      parsedCandidates = JSON.parse(storedCandidates);
    }
    const updatedCandidates = parsedCandidates.filter(
      (candidate) => candidate.Name !== name
    );

    setPotentialCandidates(updatedCandidates);
    localStorage.setItem('alreadyDenied', JSON.stringify(updatedCandidates));
  }
};

useEffect(() => {
  const storedCandidates = JSON.parse(
  localStorage.getItem('potentialCandidates') as string);
  setPotentialCandidates(storedCandidates);
}, []);

  return (
    <>
      <h1 className='pageHeader'>Potential Candidates</h1>
      {(!potentialCandidates?.length || potentialCandidates.length === 0) ?(
        <h1 style={{ margin: '16px 0'}}>
          Add potential candidates here.
        </h1>
      ) : (
        <AcceptedCandidates
          potentialCandidates={potentialCandidates}
          removeCandidate={removeCandidate}
        />
      )}
    </>
  );
};

export default SavedCandidates;
