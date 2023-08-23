<div align='center'>
    <h1 align='center'>React music</h1>
    <br />

  <p>This project was created with React, typescript, styled-components and Deezer API</p>

[![Status - Done](https://img.shields.io/badge/Status-Done-green?style=for-the-badge)](/docs/ "Go to project documentation")

</div>

<div align='center'>

[![React - 18.2.0](https://img.shields.io/static/v1?label=React&message=18.2.0&color=%2335F8B1)](https://)
[![Typescript - 5.0.4](https://img.shields.io/static/v1?label=Typescript&message=5.0.4&color=%2335F8B1)](https://)
[![Styled-components - 5.3.9](https://img.shields.io/static/v1?label=Styled-components&message=5.3.9&color=%2335F8B1)](https://)

<br />
</div>

<div align='center'>
  <p>If you want to see the website, 
    <a href='https://react-music-xi.vercel.app/' target='_blank'>click here</a>
  </p>
</div>

<img src='./github/readme_bg.png' alt='Homepage that shows some musics to play'/>

<br />

<img src='./github/gtmatrix_test.png' alt='gtmatrix test application'>

## Steps to updated oldest project (more than 2 years)

### Goals

- [x] Fix route migration v5 => v6
- [x] Update all packages managers correctly
- [x] Add typescript
- [x] Create a simple design System UI in styled-components
- [x] Add a playground test to refactor all components
- [x] Insert react testing library and setup jest with typescript environment
- [x] Add storybook
- [x] Migrate state logic from react-redux to zustand
- [x] Create Interfaces to type all data objects in site
- [x] Add new UI features

<br />

- Fix migration react router dom:

1. Add all packages @latest version
2. Change react routers from v5 to v6
3. Remove useHistory to use useNavigate

- Update all packages correctly

1. npm i -g npm-check-updates
2. run the following command: ncu
3. ncu -u change all packages to latest version

- Add typescript

1. Fix all default problems issues temporally changing the tsconfig.json file, noImplictyAny: false
