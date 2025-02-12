import { useState } from 'react';

import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
 const [currentCandidate, setCandidates] = useState<Candidate>({
    Name: '',
    Username: '',
    Avatar: '',
    Email: '',
    Html_url: '',
    Company: '',
    Location: '',
 });

  const addToPotentialCandidates = () => {
    let parsedCandidates: Candidate[] = [];
    const storedCandidates = localStorage.getItem('potentialCandidates');
    if (typeof storedCandidates === 'string') {
      parsedCandidates = JSON.parse(storedCandidates);
    }
    parsedCandidates.push(currentCandidate);
    localStorage.setItem('potentialCandidates', JSON.stringify(parsedCandidates));
  };

  const denyCandidate = () => {
    let parsedCandidates: Candidate[] = [];
    const storedCandidates = localStorage.getItem('alreadyDenied');
    if (typeof storedCandidates === 'string') {
      parsedCandidates = JSON.parse(storedCandidates);
    }
    parsedCandidates.push(currentCandidate);
    localStorage.setItem('alreadyDenied', JSON.stringify(parsedCandidates));
  };

  const fetchCandidate = async () => {
    const data = await searchGithub();
    const randomCandidate = data[Math.floor(Math.random() * data.length)];
    const candidateData = await searchGithubUser(randomCandidate.login);
    setCandidates({
      Name: candidateData.name,
      Username: candidateData.login,
      Avatar: candidateData.avatar_url,
      Email: candidateData.email,
      Html_url: candidateData.html_url,
      Company: candidateData.company,
      Location: candidateData.location,
    });
  }

  return (
    <section>
      <CandidateCard
        currentCandidate={currentCandidate}
        addToPotentialCandidates={addToPotentialCandidates}
        denyCandidate={denyCandidate}
      />
      <button onClick={fetchCandidate}>Find a Candidate</button>
    </section>
  );
};

export default CandidateSearch;













