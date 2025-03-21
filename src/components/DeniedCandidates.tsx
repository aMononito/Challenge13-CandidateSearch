import { useEffect, useState } from 'react';
import Candidate from '../interfaces/Candidate.interface';

const DeniedCandidates = () => {
    const [deniedCandidates, setDeniedCandidates] = useState<Candidate[]>([]);

    // Load denied candidates from local storage on mount
    useEffect(() => {
        const storedCandidates = JSON.parse(localStorage.getItem("savedDeniedCandidates") || "[]");
        setDeniedCandidates(storedCandidates);
    }, []);

    // Function to remove a candidate from the list and update local storage
    const removeCandidate = (username: string) => {
        const updatedCandidates = deniedCandidates.filter(candidate => candidate.username !== username);
        setDeniedCandidates(updatedCandidates);
        localStorage.setItem("savedDeniedCandidates", JSON.stringify(updatedCandidates));
    };

    return (
        <div>
            <h2>Denied Candidates</h2>
            {deniedCandidates.length > 0 ? (
                <table className="candidate-table">
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Email</th>
                            <th>Profile</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deniedCandidates.map((candidate) => (
                            <tr key={candidate.username}>
                                <td>
                                    <img src={candidate.avatar} alt="Avatar" width="50" />
                                </td>
                                <td>{candidate.name || "N/A"}</td>
                                <td>@{candidate.username}</td>
                                <td>{candidate.company || "N/A"}</td>
                                <td>{candidate.location || "N/A"}</td>
                                <td>{candidate.email || "N/A"}</td>
                                <td>
                                    <a href={candidate.htmlUrl} target="_blank" rel="noopener noreferrer">
                                        View Profile
                                    </a>
                                </td>
                                <td>
                                    <button onClick={() => removeCandidate(candidate.username)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No denied candidates yet.</p>
            )}
        </div>
    );
};

export default DeniedCandidates;
