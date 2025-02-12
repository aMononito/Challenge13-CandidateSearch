import type React from 'react';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from './CandidateCard';

interface potentialCandidatesProps {
    potentialCandidates: Candidate[];
    removeCandidate: 
    ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnPotentialList: boolean | null | undefined,
        currentlyOnAlreadyDenied: boolean | null | undefined,
        name: string | null
    ) => void) 
    | null;
}

const AcceptedCandidates = ({
    potentialCandidates,
    removeCandidate,
}: potentialCandidatesProps) => {
    return (
        <ul>
            {potentialCandidates.map((candidate) => (
                <CandidateCard
                    currentCandidate={candidate}
                    removeCandidate={removeCandidate}
                    onPotentialList={true}
                />
            ))}
        </ul>
    );
};

export default AcceptedCandidates;

