import  { useState, useEffect } from 'react';
import Candidate from '../interfaces/Candidate.interface';

const AcceptedCandidates = () => {
    const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

    // Load saved candidates from local storage
    useEffect(() => {
        const savedCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
        setPotentialCandidates(savedCandidates);
    }, []);

    // Function to remove a candidate from the list and update local storage
    const removeCandidate = (username: string) => {
        const updatedCandidates = potentialCandidates.filter(candidate => candidate.username !== username);
        setPotentialCandidates(updatedCandidates);
        localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
    };

    return (
        <div>
            <h2>Accepted Candidates</h2>
            {potentialCandidates.length > 0 ? (
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
                        {potentialCandidates.map((candidate) => (
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
                <p>No accepted candidates yet.</p>
            )}
        </div>
    );
};

export default AcceptedCandidates;
