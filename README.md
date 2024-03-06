# Bruin Dictionary
/bɹuːɪn dɪkʃənɛɹi/

CS 35L: Software Construction Winter 2024 Project
Professor Eggert

Bruin Dictionary is a crowdsourced online dictionary for UCLA students and alumni, defining the many acronyms, slang words, and time-honored traditions associated with being a Bruin. Inspired by the functionality of Urban Dictionary, users can use Bruin Dictionary to search and contribute definitions.

# Features
1. Search
2. Post
3. Like/Dislike
4. Sort

# Our Team
Anthony Williams - Class of 2025, Computer Science 
Khanh Nguyen - Class of 2025, Computer Science and Linguistics
Raina Wan - Class of 2025, Computer Science and Linguistics
Soyeon Kim - Class of 2025, Computer Science and Linguistics
Tiana Ly - Class of 2025, Computer Science and Linguistics
William Wong - Class of 2026, Computer Science

# Run Project

# Website Experience

# THUMB-RULE for Dev

1. Use YARN, not NPM. How to start? run `yarn start`
2. **NEVER WORK ON THE MAIN BRANCH** !!
   - Create a local branch with `your-name/branch-name` and work on there (ex. `sonya/make-pages`)
   - Do `git pull origin main` regularly to keep up with current remote main branch.
3. **NEVER DO PROP DRILLING** !!
   - Always love custom hooks and context provider
4. Avoid using useEffect as much as possible. It creates a lot of side-effects and is very expensive
5. PLEASE ORGANIZE FILES, do not throw them all in src folder
6. Multiple small components are better than all-in-one component
7. Since we are not using typescript, be careful of types!
8. Use arrow function component; `const ComponentName = () => {}`

## Configuring Firebase

- Create `.env.local` in your root

  ```
  VITE_FIREBASE_KEY="firebase api key here"
  VITE_FIREBASE_APP_ID="firebase app id here"
  ```

- use `src/utils/firebase` to bring db and auth

## I dunno Git

**Origin** vs **Local**: there are two worlds. Your local computer and Github cloud(origin). You uploaded files on Github, and you kept working on your local computer. Then files on local and origin are different. So it is important to keep up with origin while you are working on local.

1. `git checkout main`: move to the main branch
2. `git pull origin main`: bring all the changes already made on the origin(Github cloud) main branch
3. `git branch -u sonya/branch-name`: make a new branch and move to the branch
4. work, work, work ..
5. `git push -u origin sonya/branch-name`: push your local changes to the origin as a branch.
6. Go to Github repository and create a pull request(PR)
   - Make your PR changes as small as possible
7. Once merged, repeat from 1-6

## Useful Resources

- https://reactpodcast.simplecast.com/episodes/118
- https://overreacted.io/before-you-memo/
