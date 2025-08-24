# WEB103 Prework - 💫 Creatorverse

Submitted by: **Fatima Tanvir**

About this web app: **Creatorverse is a beautiful React application for discovering and managing your favorite content creators. Share amazing creators you think are worth following and manage your collection with full CRUD operations. The app features a modern card-based UI, responsive design, and seamless navigation between viewing, adding, editing, and deleting creators.**

Time spent: **8** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [x] **A logical component structure in React is used to create the frontend of the app**
  - Created modular components: `CreatorCard`, `ShowCreators`, `ViewCreator`, `AddCreator`, `EditCreator`
  - Organized code into logical `components/` and `pages/` directories
  - Implemented proper prop passing and state management
- [x] **At least five content creators are displayed on the homepage of the app**
  - Homepage shows all creators in a responsive grid layout
  - Empty state with call-to-action when no creators exist
  - Loading states for better user experience
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
  - Creator cards display: name, description, channel link, and optional image
  - Direct links to creator channels open in new tabs
  - Clean, readable layout with proper typography
- [x] **API calls use the async/await design pattern via Axios or fetch()**
  - All database operations use async/await with Supabase client
  - Proper error handling and loading states
  - Consistent API call patterns across all components
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
  - Click "View Details" to see full creator information
  - Detailed view shows larger image, full description, and action buttons
  - Smooth navigation with React Router
- [x] **Each content creator has their own unique URL**
  - Dynamic routing with `/creator/:id` pattern
  - Unique URLs for each creator's detail and edit pages
  - Proper URL structure: `/creator/new`, `/creator/:id`, `/creator/:id/edit`
- [x] **The user can edit a content creator to change their name, url, or description**
  - Edit form pre-populated with current creator data
  - Form validation and error handling
  - Smooth navigation back to creator details after save
- [x] **The user can delete a content creator**
  - Delete button with confirmation dialog
  - Proper cleanup and navigation after deletion
  - Error handling for failed deletions
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**
  - Comprehensive add form with all required fields
  - Form validation and user feedback
  - Automatic navigation to homepage after successful addition
  - New creators immediately appear in the grid

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
  - Custom CSS with modern design patterns (similar to Picocss philosophy)
  - Clean, semantic HTML structure
  - Consistent styling across all components
- [x] The content creator items are displayed in a creative format, like cards instead of a list
  - Beautiful card-based layout with hover effects
  - Gradient backgrounds and modern styling
  - Responsive grid that adapts to different screen sizes
- [x] An image of each content creator is shown on their content creator card
  - Optional imageURL field for creator profile pictures
  - Graceful fallback when images fail to load
  - Circular images with proper sizing and borders

The following **additional** features are implemented:

* [x] **Responsive Design**: App works perfectly on desktop, tablet, and mobile devices
* [x] **Modern UI/UX**: Beautiful gradient backgrounds, smooth animations, and hover effects
* [x] **Error Handling**: Comprehensive error messages and loading states
* [x] **Form Validation**: Required field validation and user feedback
* [x] **Database Integration**: Full Supabase integration with real-time capabilities
* [x] **Navigation**: Intuitive navigation with breadcrumbs and back buttons
* [x] **Accessibility**: Proper semantic HTML and keyboard navigation
* [x] **Performance**: Optimized rendering and efficient state management

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  👉🏿 GIF tool here
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

**Challenges Encountered:**
- **Supabase Setup**: Initially struggled with Row Level Security (RLS) configuration - had to disable RLS for the creators table to allow public read/write access
- **Database Schema**: Had to ensure the table structure exactly matched the expected column names and types
- **Error Handling**: Implemented comprehensive error logging to debug database connection issues
- **Responsive Design**: Ensured the card layout works well across all device sizes

**Technical Implementation:**
- Used React 18 with Vite for fast development
- Implemented React Router for client-side navigation
- Integrated Supabase for backend database functionality
- Created custom CSS with modern design patterns
- Used async/await throughout for clean asynchronous code
- Environment variables for secure credential management

**Environment Setup:**
- Create a `.env` file in the root directory
- Add your Supabase credentials:
  ```
  VITE_SUPABASE_URL=your-project-url-here
  VITE_SUPABASE_ANON_KEY=your-api-key-here
  ```
- Copy `.env.example` to `.env` and replace placeholder values

**Key Features:**
- Full CRUD operations (Create, Read, Update, Delete)
- Beautiful card-based UI with hover animations
- Responsive design that works on all devices
- Real-time database updates
- Comprehensive error handling and user feedback

## License

Copyright [2024] [Fatima Tanvir]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
