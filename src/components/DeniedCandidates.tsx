import type React from 'react';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from './CandidateCard';

interface deniedCandidatesProps {
    deniedCandidates: Candidate[];
    removeCandidate: 
    ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnPotentialList: boolean | null | undefined,
        currentlyOnAlreadyDenied: boolean | null | undefined,
        name: string | null
    ) => void) 
    | null;
}

const DeniedCandidates = ({
    deniedCandidates,
    removeCandidate,
}: deniedCandidatesProps) => {
    return (
        <ul>
            {deniedCandidates.map((candidate) => (
                <CandidateCard
                    currentCandidate={candidate}
                    removeCandidate={removeCandidate}
                    alreadyDenied={true}
                />
            ))}
        </ul>
    );
};

export default DeniedCandidates;