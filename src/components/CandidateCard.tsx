import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import { PiPlus } from 'react-icons/pi';
import { PiMinus } from 'react-icons/pi';

type CandidateCardProps = {
    currentCandidate: Candidate;
    addToPotentialCandidates?: (() => void) | null;
    denyCandidate?: (() => void) | null;
    onPotentialList?: boolean | null;
    alreadyDenied?: boolean | null;
    removeCandidate?:
    ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnPotentialList: boolean | null | undefined,
        currentlyOnAlreadyDenied: boolean | null | undefined,
        name: string | null
    ) => void) | null;
};

const CandidateCard = ({
    currentCandidate,
    addToPotentialCandidates,
    denyCandidate,
    onPotentialList,
    alreadyDenied,
    removeCandidate,
}: CandidateCardProps) => {
    return (
        <section className="candidate-card">
            <img src={currentCandidate.Avatar} alt="Candidate Avatar" />
            <h2 ><a href={currentCandidate.Html_url}>{currentCandidate.Name}</a></h2>
            <p>{currentCandidate.Username}</p>
            <p>Company: {currentCandidate.Company}</p>
            <p>Location: {currentCandidate.Location}</p>
            <p>Email: {currentCandidate.Email}</p>
            {onPotentialList || alreadyDenied ? (
                <aside className='icons'>
                <PiMinus
                    style={{fontSize: '40px', cursor: 'pointer'}}
                    onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
                        removeCandidate?.(
                            e,
                            onPotentialList,
                            alreadyDenied,
                            currentCandidate.Name
                            )
                        }
                    />
                </aside>
            ) : (
                <aside className='icons'>
                <PiPlus 
                    style={{fontSize: '40px', cursor: 'pointer'}}
                    onClick={() => addToPotentialCandidates?.()}
                    />
                <PiMinus
                    style={{fontSize: '40px', cursor: 'pointer'}}
                    onClick={() => denyCandidate?.()}
                    />
                </aside>
            )}
        </section>
    );
};

export default CandidateCard;
