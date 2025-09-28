# 🍋 Little Lemon Restaurant Reservation App

This is a React-based single-page application (SPA) built for the Little Lemon restaurant. It allows users to book reservations with real-time availability, form validation, and accessible UI components. The project was developed as part of the Meta Front-End Developer capstone.

---

## 🚀 Features

- **Modular React architecture** using `useReducer` for dynamic state management  
- **Accessible form design** with semantic HTML, ARIA attributes, and WCAG-compliant markup  
- **Client-side validation** using React Hook Form and native HTML5 constraints  
- **Unit-tested reducer logic** with Jest for `initializeTimes` and `updateTimes`  
- **SPA routing** via React Router for seamless navigation  
- **Mock API integration** for reservation submission and time updates

---

## 🧪 Testing

- Component and unit tests written with Jest and React Testing Library  
- Lint-compliant, isolated test suites with clear rationale for each case  
- Coverage includes reducer logic, form validation, and navigation flow

---

## 📁 Project Structure

src/ ├── components/ │   └── ReservationForm.js ├── pages/ │   └── ReservationPage.js ├── reducers/ │   └── timesReducer.js ├── tests/ │   └── ReservationForm.test.js │   └── timesReducer.test.js


---

## 📦 Setup

```bash
npm install
npm run start
npm run test
