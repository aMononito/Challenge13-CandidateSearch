import { useState, useEffect } from 'react';
import CandidateCard from '../components/CandidateCard';
import Candidate from '../interfaces/Candidate.interface';
import { searchGithub, searchGithubUser } from '../api/API';
import { PiArrowArcLeftFill, PiArrowArcRightFill } from 'react-icons/pi';

const CandidateSearch = () => {
  const [currentCandidate, setCandidate] = useState<Candidate | null>(null);

  // Function to fetch a candidate from GitHub API
  const fetchCandidate = async () => {
    try {
      const candidates = await searchGithub();
      if (candidates.length === 0) return;

      const randomCandidate = candidates[Math.floor(Math.random() * candidates.length)];
      const candidateData = await searchGithubUser(randomCandidate.login);

      setCandidate({
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

  // Fetch a candidate when the component loads
  useEffect(() => {
    fetchCandidate();
  }, []);

  return (
    <section className="candidateSearch">
      <h1 className="pageHeader">Candidate Search</h1>
      <h2 style={{ margin: '16px 0' }}>Find a candidate to add to your potential list.</h2>

      <section className="canButton">
        {currentCandidate && <CandidateCard currentCandidate={currentCandidate} />}
        <button onClick={fetchCandidate}>Find a Candidate</button>
      </section>

      <section className="nextCandidate">
        <div className="candidateNav">
          {/* Previous Candidate - Placeholder for potential functionality */}
          <PiArrowArcLeftFill 
            style={{ fontSize: '40px', cursor: 'pointer' }} 
            className="prev-icon"
            onClick={() => setCandidate(null)} 
          />
          
          {/* Next Candidate - Fetches new candidate */}
          <PiArrowArcRightFill 
            style={{ fontSize: '40px', cursor: 'pointer' }} 
            className="next-icon"
            onClick={fetchCandidate} // Calls fetchCandidate to get a new candidate
          />
        </div>
      </section>
    </section>
  );
};

export default CandidateSearch;
