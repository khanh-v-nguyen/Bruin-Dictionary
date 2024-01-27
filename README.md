# Bruin-Dictionary

# THUMB-RULE for Dev

1. Use YARN, not NPM. How to start? run `yarn start`
2. **NEVER WORK ON THE MAIN BRANCH** !!
   - Create a local branch with `your-name/branch-name` and work on there
3. **NEVER DO PROP DRILLING** !!
   - Always love custom hooks and context provider
4. Avoid using useEffect as much as possible. It creates a lot of side-effects and is very expensive
5. Multiple small components are better than all-in-one component
6. Since we are not using typescript, be careful of types!

## Configuring Firebase

- Create `.env.local` in your project root

  ```
  VITE_FIREBASE_KEY="firebase api key here"
  VITE_FIREBASE_APP_ID="firebase app id here"
  ```

## Useful Resources

- https://overreacted.io/before-you-memo/
- https://reactpodcast.simplecast.com/episodes/118
