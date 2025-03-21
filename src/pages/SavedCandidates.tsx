// import type React from 'react';
// import {useEffect, useState} from 'react';
// import AcceptedCandidates from '../components/PotentialCandidates';
// import type  Candidate  from '../interfaces/Candidate.interface';



// const SavedCandidates = () => {
//  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

//  const removeCandidate = (
//     e: React.MouseEvent<SVGSVGElement, MouseEvent>,
//     currentlyOnPotentialList: boolean | null | undefined,
//     currentlyOnAlreadyDenied: boolean | null | undefined,
//     name: string | null
// ) => {
//   e.preventDefault();
//   if (currentlyOnPotentialList) {
//     const updatedCandidates = potentialCandidates.filter(
//       (candidate) => candidate.Name !== name
//     );
//     setPotentialCandidates(updatedCandidates);
//     localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));
//   } else if (currentlyOnAlreadyDenied) {
//     let parsedCandidates: Candidate[] = [];
//     const storedCandidates = localStorage.getItem('alreadyDenied');
//     if (typeof storedCandidates === 'string') {
//       parsedCandidates = JSON.parse(storedCandidates);
//     }
//     const updatedCandidates = parsedCandidates.filter(
//       (candidate) => candidate.Name !== name
//     );

//     setPotentialCandidates(updatedCandidates);
//     localStorage.setItem('alreadyDenied', JSON.stringify(updatedCandidates));
//   }
// };

// useEffect(() => {
//   const storedCandidates = JSON.parse(
//   localStorage.getItem('potentialCandidates') as string);
//   setPotentialCandidates(storedCandidates);
// }, []);

//   return (
//     <>
//       <h1 className='pageHeader'>Potential Candidates</h1>
//       {(!potentialCandidates?.length || potentialCandidates.length === 0) ?(
//         <h1 style={{ margin: '16px 0'}}>
//           Add potential candidates here.
//         </h1>
//       ) : (
//         <AcceptedCandidates
//           potentialCandidates={potentialCandidates}
//           removeCandidate={removeCandidate}
//         />
//       )}
//     </>
//   );
// };

// export default SavedCandidates;

// import React, { useEffect, useState } from 'react';
// import AcceptedCandidates from '../components/PotentialCandidates';
// import type Candidate from '../interfaces/Candidate.interface';

// const SavedCandidates = () => {
//   const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

//   const removeCandidate = (
//     e: React.MouseEvent<SVGSVGElement, MouseEvent>,
//     currentlyOnPotentialList: boolean | null | undefined,
//     currentlyOnAlreadyDenied: boolean | null | undefined,
//     name: string | null
//   ) => {
//     e.preventDefault();
//     if (currentlyOnPotentialList) {
//       const updatedCandidates = potentialCandidates.filter(
//         (candidate) => candidate.name !== name // Ensure correct property name
//       );
//       setPotentialCandidates(updatedCandidates);
//       localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));
//     } else if (currentlyOnAlreadyDenied) {
//       let parsedCandidates: Candidate[] = [];
//       const storedCandidates = localStorage.getItem('alreadyDenied');
//       if (storedCandidates) {
//         parsedCandidates = JSON.parse(storedCandidates);
//       }
//       const updatedCandidates = parsedCandidates.filter(
//         (candidate) => candidate.name !== name // Ensure correct property name
//       );

//       localStorage.setItem('alreadyDenied', JSON.stringify(updatedCandidates));
//     }
//   };

//   useEffect(() => {
//     const storedCandidates = localStorage.getItem('potentialCandidates');
//     if (storedCandidates) {
//       setPotentialCandidates(JSON.parse(storedCandidates));
//     } else {
//       setPotentialCandidates([]);
//     }
//   }, []);

//   return (
//     <>
//       <h1 className="pageHeader">Potential Candidates</h1>
//       {potentialCandidates.length === 0 ? (
//         <h1 style={{ margin: '16px 0' }}>Add potential candidates here.</h1>
//       ) : (
//         <AcceptedCandidates potentialCandidates={potentialCandidates} removeCandidate={removeCandidate} />
//       )}
//     </>
//   );
// };

// export default SavedCandidates;

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
    }
    else if (currentlyOnAlreadyDenied) {
      const updatedDeniedCandidates = deniedCandidates.filter(candidate => candidate.name !== name);
      setDeniedCandidates(updatedDeniedCandidates);
      localStorage.setItem('alreadyDenied', JSON.stringify(updatedDeniedCandidates));
    }
  };

  useEffect(() => {
    const potential = localStorage.getItem('potentialCandidates');
    const alreadyDenied = localStorage.getItem('alreadyDenied');
    const storedCandidates = potential ? potential : alreadyDenied;
    setPotentialCandidates(storedCandidates ? JSON.parse(storedCandidates) : []);
  }, []);


  return (
    <>
      <h1 className="pageHeader">Potential Candidates</h1>
      {potentialCandidates.length === 0 ? (
        <h1 style={{ margin: '16px 0' }}>Add potential candidates here.</h1>
      ) : (
        <table className="candidate-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {potentialCandidates.map((candidate) => (
              <AcceptedCandidates
                key={candidate.name}
                candidate={candidate}
                removeCandidate={removeCandidate}
              />
            ))}
          </tbody>
        </table>
      )}
      <h1 className="pageHeader">Denied Candidates</h1>
      {deniedCandidates.length === 0 ? (
        <h1 style={{ margin: '16px 0' }}>No denied candidates.</h1>
      ) : (
        <table className="candidate-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {deniedCandidates.map((candidate) => (
              <DeniedCandidates
                key={candidate.name}
                candidate={candidate}
                removeCandidate={removeCandidate}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default SavedCandidates;