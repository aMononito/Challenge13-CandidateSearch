import React, { useState, useEffect } from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import { PiPlus, PiMinus } from 'react-icons/pi';
import { searchGithub, searchGithubUser } from '../api/API';

type CandidateCardProps = {
    onPotentialList?: boolean;
    alreadyDenied?: boolean;
};

const CandidateCard: React.FC<CandidateCardProps> = ({ onPotentialList, alreadyDenied }) => {
    const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);

    useEffect(() => {
        const fetchCandidate = async () => {
            try {
                const candidates = await searchGithub();
                if (candidates.length === 0) return;

                const randomCandidate = candidates[Math.floor(Math.random() * candidates.length)];
                const candidateData = await searchGithubUser(randomCandidate.login);

                setCurrentCandidate({
                    name: candidateData.name,
                    username: candidateData.login,
                    avatar: candidateData.avatar_url,
                    email: candidateData.email,
                    htmlUrl: candidateData.html_url,
                    company: candidateData.company,
                    location: candidateData.location
                });
            } catch (error) {
                console.error("Error fetching candidate:", error);
            }
        };

        fetchCandidate();
    }, []);

    // Helper function to save a candidate to local storage
    const saveCandidateToLocalStorage = (key: string) => {
        if (!currentCandidate) return;

        const storedCandidates = JSON.parse(localStorage.getItem(key) || "[]");

        // Prevent duplicate entries
        if (!storedCandidates.some((c: Candidate) => c.username === currentCandidate.username)) {
            storedCandidates.push(currentCandidate);
            localStorage.setItem(key, JSON.stringify(storedCandidates));
        }
    };

    if (!currentCandidate) {
        return <p>Loading candidate...</p>;
    }

    return (
        <section className="candidate-card">
            <img src={currentCandidate.avatar} alt="Candidate Avatar" />
            <h2>
                <a href={currentCandidate.htmlUrl} target="_blank" rel="noopener noreferrer">
                    {currentCandidate.name || "No Name Available"}
                </a>
            </h2>
            <p>@{currentCandidate.username}</p>
            <p>Company: {currentCandidate.company || "N/A"}</p>
            <p>Location: {currentCandidate.location || "N/A"}</p>
            <p>Email: {currentCandidate.email || "N/A"}</p>

            <aside className="icons">
                {/* Deny Candidate Button */}
                <PiMinus
                    style={{ fontSize: '40px', cursor: 'pointer' }}
                    className="remove-icon"
                    onClick={() => saveCandidateToLocalStorage("savedDeniedCandidates")}
                />
                
                {/* Add Candidate Button */}
                {!onPotentialList && !alreadyDenied && (
                    <PiPlus
                        style={{ fontSize: '40px', cursor: 'pointer', alignContent: 'right' }}
                        className="add-icon"
                        onClick={() => saveCandidateToLocalStorage("savedPotentialCandidates")}
                    />
                )}
            </aside>
        </section>
    );
};

export default CandidateCard;
