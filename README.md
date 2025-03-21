# 🏆 GitHub Candidate Finder

GitHub Candidate Finder is a **React application** that allows users to **search for GitHub users**, **save potential candidates**, and **manage denied candidates** efficiently. It fetches data from the **GitHub API** and persists selections in **local storage**.

## 🚀 Features
- 🔍 **Search for Candidates** - Fetches random GitHub profiles.
- ✅ **Save Potential Candidates** - Store candidates for later consideration.
- ❌ **Manage Denied Candidates** - Keeps track of rejected profiles.
- 📂 **Local Storage Persistence** - Saved candidates remain even after refresh.
- 📊 **Table View for Candidates** - Displays saved and denied candidates in a structured format.
- ⚡ **Efficient Navigation** - Easily move to the next candidate.

---

## 🛠 Tech Stack
This project is built with:
- **React** (Functional Components & Hooks)
- **TypeScript** (Strong typing for reliability)
- **React Icons** (UI icons for better UX)
- **GitHub API** (Fetch user profiles dynamically)
- **Local Storage** (Persistent candidate management)

---

## 📥 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/aMononito/github-candidate-finder.git
cd github-candidate-finder
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```
This will start the app at **http://localhost:5173** (or another available port).

---

## 🎯 How to Use
1. **Search for Candidates**  
   - Click the **"Find a Candidate"** button to fetch a random GitHub user.
   - Navigate using the **Next (→) and Previous (←) buttons**.

2. **Save Candidates**  
   - Click **➕ (PiPlus)** to save a candidate to the **Potential Candidates** list.

3. **Deny Candidates**  
   - Click **➖ (PiMinus)** to add a candidate to the **Denied Candidates** list.

4. **View Saved Candidates**  
   - Visit the **"Saved Candidates"** page to see **both accepted and denied candidates**.

5. **Remove Candidates**  
   - Click **"Remove"** next to any candidate in the table to delete them.

---

## 📂 Project Structure
```
📦 src
 ┣ 📂 api
 ┃ ┣ 📜 API.ts          # GitHub API fetch functions
 ┣ 📂 components
 ┃ ┣ 📜 CandidateCard.tsx   # Candidate profile card
 ┃ ┣ 📜 PotentialCandidates.tsx # Potential candidates table
 ┃ ┣ 📜 DeniedCandidates.tsx    # Denied candidates table
 ┣ 📂 interfaces
 ┃ ┣ 📜 Candidate.interface.ts  # Candidate TypeScript interface
 ┣ 📂 pages
 ┃ ┣ 📜 CandidateSearch.tsx  # Main candidate search page
 ┃ ┣ 📜 SavedCandidates.tsx  # Displays saved & denied candidates
 ┣ 📜 App.tsx                # App component & routing
 ┣ 📜 main.tsx               # Entry point
 ┣ 📜 styles.css             # Global styles
```

---

## 🛠 API Integration
This project uses the **GitHub API** to fetch user profiles dynamically.

- **Fetch a List of Candidates**  
  ```ts
  const candidates = await searchGithub();
  ```
  
- **Fetch User Details**  
  ```ts
  const candidateData = await searchGithubUser(username);
  ```

---

## 🌟 Contributing
Contributions are welcome! Here's how you can contribute:
1. **Fork the repository**  
2. **Create a new branch**: `git checkout -b feature-name`
3. **Make your changes** and commit them:  
   ```sh
   git commit -m "Added a new feature"
   ```
4. **Push to GitHub**: `git push origin feature-name`
5. **Create a Pull Request**

---

## ⚖️ License
This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## 📩 Contact
For questions, feedback, or feature requests:
- 📧 Email: [pedro@torstig.us](mailto:pedro@torstig.us)
- 🐙 GitHub: [github.com/aMononito](https://github.com/aMononito)

---

🚀 **Enjoy finding top GitHub candidates!** 🎯
