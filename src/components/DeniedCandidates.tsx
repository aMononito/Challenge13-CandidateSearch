// import type React from 'react';
// import Candidate from '../interfaces/Candidate.interface';
// import CandidateCard from './CandidateCard';

// interface deniedCandidatesProps {
//     deniedCandidates: Candidate[];
//     removeCandidate: 
//     ((
//         e: React.MouseEvent<SVGSVGElement, MouseEvent>,
//         currentlyOnPotentialList: boolean | null | undefined,
//         currentlyOnAlreadyDenied: boolean | null | undefined,
//         name: string | null
//     ) => void) 
//     | null;
// }

// const DeniedCandidates = ({
//     deniedCandidates,
//     removeCandidate,
// }: deniedCandidatesProps) => {
//     return (
//         <ul>
//             {deniedCandidates.map((candidate) => (
//                 <CandidateCard
//                     currentCandidate={candidate}
//                     removeCandidate={removeCandidate}
//                     alreadyDenied={true}
//                 />
//             ))}
//         </ul>
//     );
// };

// export default DeniedCandidates;

import type React from 'react';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from './CandidateCard';

interface DeniedCandidatesProps {
    deniedCandidates: Candidate[];
    removeCandidate: 
      | ((
          e: React.MouseEvent<Element, MouseEvent>,
          currentlyOnPotentialList: boolean | null | undefined,
          currentlyOnAlreadyDenied: boolean | null | undefined,
          name?: string
        ) => void)
      | null;
}

const noop = () => {};

const DeniedCandidates = ({
    deniedCandidates,
    removeCandidate = noop, // Default no-op function
}: DeniedCandidatesProps) => {
    return (
        <ul>
            {deniedCandidates.map((candidate) => (
                <CandidateCard
                    key={candidate.username} // Ensure a unique key
                    currentCandidate={candidate}
                    removeCandidate={removeCandidate ?? undefined} // Avoid passing null
                    alreadyDenied={true}
                />
            ))}
        </ul>
    );
};

export default DeniedCandidates;
