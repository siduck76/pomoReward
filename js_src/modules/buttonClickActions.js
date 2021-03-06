import {
  currentClick,
  pomoTime,
  saveMin,
  startPomodoro,
  timer,
  totalTime,
  userMode,
  update_CurrentMode,
} from "../index";

import {
  aboutBtn,
  aboutPage,
  automaticMode,
  breakMode,
  decreaseTimeArrow,
  defaultMode,
  homePage,
  increaseTimeArrow,
  menuLink_toggle,
  modesDiv,
  modesLink,
  pause,
  reset,
  saveBtnFLex,
  sessionBtns,
  settingsBtn,
  settingsPage,
  squareBox,
  start,
  dashboardLink,
  dashboardPage,
  mainFlex,
//  themeToggle,
} from "./divSelectors";

import {
  addTortureAnimation,
  displayModeTime,
  playTickSound,
  setBoxText,
  stopTortureAnimation,
  setCircleProgress,
} from "./miscFuncs";

import { clear_Gallery } from "./rewardsPage.js";

let auth_Div = document.querySelector(".auth_Div"); // to hide auth_div when other navlinks are clicked
let rewardsLink = document.querySelector(".rewardsLink");
let rewardsPage = document.querySelector(".rewardsPage");

// Session button click actions

[start, reset].forEach((temp) => {
  temp.addEventListener("click", () => {
    stopTortureAnimation();

    // resets time to default ( freezes it )

    if (temp.className === "reset") {
      currentClick = "reset";
      clearInterval(timer);

      pomoTime = totalTime * 60;
      setBoxText(totalTime, 0);
      setCircleProgress(0);

      return;
    }

    // restarts time
    else {
      currentClick = "start";

      playTickSound();
      clearInterval(timer);

      startPomodoro();
      return;
    }
  });
});

let pauseOrResume = 0;

const pauseTimer = () => {
  if (pomoTime === totalTime * 60 || pomoTime === 0) addTortureAnimation();

  currentClick = "pause";
  saveMin = pomoTime;
  clearInterval(timer);

  const min = Math.floor(saveMin / 60);
  let sec = saveMin % 60;

  setBoxText(min, sec);
};

const resumeTimer = () => {
  if (pomoTime === totalTime * 60 || pomoTime === 0) addTortureAnimation();
  currentClick = "pause";

  if (pomoTime != totalTime * 60) startPomodoro();
};

pause.addEventListener("click", () => {
  pauseOrResume++;
  currentClick = pauseOrResume % 2 == 0 ? "resume" : "pause";
  currentClick == "pause" ? pauseTimer() : resumeTimer();
});

/* settings */
settingsBtn.addEventListener(
  "mouseover",
  () => (settingsBtn.style.textDecoration = "underline")
);
settingsBtn.addEventListener(
  "mouseout",
  () => (settingsBtn.style.textDecoration = "none")
);

/* navlinks actions*/

settingsBtn.addEventListener("click", () => {
  [
    squareBox,
    sessionBtns,
    reset,
    aboutPage,
    modesDiv,
    dashboardPage,
    mainFlex,
    auth_Div,
    rewardsPage,
  ].forEach((temp) => (temp.style.display = "none"));
  settingsPage.style.display = "flex";

  clear_Gallery();
});

/* Home Page */
const jumpToHomePage = () => {
  [squareBox, sessionBtns, reset, mainFlex].forEach((temp) => {
    temp.style.display = "";
  });
  [
    settingsPage,
    aboutPage,
    modesDiv,
    dashboardPage,
    auth_Div,
    rewardsPage,
  ].forEach((temp) => (temp.style.display = "none"));

  clear_Gallery();
};

const jumptoAboutPage = () => {
  [
    squareBox,
    sessionBtns,
    reset,
    settingsPage,
    modesDiv,
    dashboardPage,
    mainFlex,
    auth_Div,
    rewardsPage,
  ].forEach((temp) => {
    temp.style.display = "none";
  });
  aboutPage.style.display = "block";

  clear_Gallery();
};

const jumptoModesPage = () => {
  [
    settingsPage,
    aboutPage,
    squareBox,
    sessionBtns,
    reset,
    dashboardPage,
    mainFlex,
    auth_Div,
    rewardsPage,
  ].forEach((temp) => {
    temp.style.display = "none";
  });
  modesDiv.style.display = "block";

  clear_Gallery();
};

const jumptoDashBoard = () => {
  [
    squareBox,
    sessionBtns,
    reset,
    settingsPage,
    modesDiv,
    aboutPage,
    mainFlex,
    auth_Div,
    rewardsPage,
  ].forEach((temp) => {
    temp.style.display = "none";
  });
  dashboardPage.style.display = "grid";

  clear_Gallery();
};

const jumptoRewardsPage = () => {
  [
    squareBox,
    sessionBtns,
    reset,
    settingsPage,
    modesDiv,
    aboutPage,
    mainFlex,
    auth_Div,
    dashboardPage,
  ].forEach((temp) => {
    temp.style.display = "none";
  });
  rewardsPage.style.display = "grid";

  clear_Gallery();
};

homePage.addEventListener("click", () => jumpToHomePage());
aboutBtn.addEventListener("click", () => jumptoAboutPage());
modesLink.addEventListener("click", () => jumptoModesPage());
dashboardLink.addEventListener("click", () => jumptoDashBoard());
rewardsLink.addEventListener("click", () => jumptoRewardsPage());

increaseTimeArrow.addEventListener("click", () => {
  totalTime++;
  displayModeTime(totalTime);
  setBoxText(totalTime, 0);
});

decreaseTimeArrow.addEventListener("click", () => {
  if (totalTime > 1) {
    totalTime--;
    displayModeTime(totalTime);
    setBoxText(totalTime, 0);
  }
});

defaultMode.addEventListener("click", () => {
  [breakMode, automaticMode].forEach((temp) => {
    temp.style.backgroundColor = "#36404c";
  });

  totalTime = 25;
  displayModeTime(totalTime);

  defaultMode.style.backgroundColor = "#4a5460";

  userMode = "default";
  update_CurrentMode();
});

breakMode.addEventListener("click", () => {
  [defaultMode, automaticMode].forEach((temp) => {
    temp.style.backgroundColor = "#36404c";
  });

  totalTime = 5;
  displayModeTime(totalTime);

  breakMode.style.backgroundColor = "#4a5460";

  userMode = "break";
  update_CurrentMode();
});

automaticMode.addEventListener("click", () => {
  [breakMode, defaultMode].forEach((temp) => {
    temp.style.backgroundColor = "#36404c";
  });

  totalTime = 25;
  displayModeTime(totalTime);
  automaticMode.style.backgroundColor = "#4a5460";

  userMode = "automatic";
  alert("in progress!");
  update_CurrentMode();
});

saveBtnFLex.addEventListener("click", () => jumpToHomePage());

/* toggle navbar */

let navBarLinks = document.querySelector(".navBarLinks");
menuLink_toggle.addEventListener("click", () =>
  navBarLinks.classList.toggle("show")
);
