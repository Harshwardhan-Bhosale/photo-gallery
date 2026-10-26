# 📸 Photo Gallery App

A responsive photo gallery built with **React, Vite, and Tailwind CSS**. The application fetches photos from the Picsum Photos API and allows users to search for photos by author and manage their favourite photos.

## ✨ Features

- **Photo Gallery:** Fetches and displays 30 photos from the Picsum Photos API.
- **Search by Author:** Search photos by author name with real-time filtering.
- **Favourites:** Add or remove photos from your favourites using the heart icon.
- **Persistent Storage:** Saves favourite photo IDs in the browser's local storage, so they remain available after refreshing the page.
- **Loading State:** Displays a loading spinner while photos are being fetched.
- **Error Handling:** Displays an error message if the API request fails.
- **Responsive Design:** Adapts to mobile, tablet, and desktop screen sizes.

## 🛠️ Tech Stack

- **React** – Component-based user interface
- **Vite** – Development server and build tool
- **Tailwind CSS** – Responsive styling
- **JavaScript (ES6+)** – Application logic
- **Picsum Photos API** – Photo data
- **React Hooks** – `useState`, `useEffect`, `useReducer`, `useCallback`, and `useMemo`
- **Local Storage** – Persistent favourites



## 🚀 Getting Started


## 🔗 API Used

This project uses the Picsum Photos API to retrieve a list of photos.

**API endpoint:**

`https://picsum.photos/v2/list?limit=30`

The API provides photo information, including the photo ID, author, and image URLs.

## 🧠 React Concepts Used

- **Custom Hook (`useFetchPhotos`):** Separates API-fetching logic from the UI and manages photos, loading, and error states.
- **`useReducer`:** Manages adding and removing favourite photo IDs.
- **`useCallback`:** Memoizes the search and favourite-toggle handler functions.
- **`useMemo`:** Memoizes the filtered photo list based on the photos and search query.
- **`useEffect`:** Fetches photos when the component mounts and saves favourites to local storage.
- **Conditional Rendering:** Displays the loading spinner, error message, empty search state, or photo grid as needed.

## 📱 Responsive Layout

The gallery uses a responsive grid layout:

- **Mobile:** 1 column
- **Tablet:** 2 columns
- **Desktop:** 4 columns

## 💾 Favourites Storage

Favourite photo IDs are stored in the browser's local storage. This allows the favourites selection to persist when the page is refreshed in the same browser.
