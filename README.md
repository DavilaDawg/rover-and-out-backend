# Rover and Out

An educational app that brings the wonders of Mars and the Curiosity Rover to your fingertips. Explore the rover’s mission with interactive features. 

## Key Features

### 1. **Gallery Exploration**

- **Filter by Day:** Easily browse through photos taken by the Curiosity Rover by selecting a specific sol (Martian day).
- **Filter by Day and Camera:** For a more detailed exploration, filter images by both the day and the camera used. Users are then directed to a 3D model of the rover.

### 2. **3D Rover Model**

- **Interactive Model:** View an interactive 3D model of the Curiosity Rover, complete with all 17 cameras highlighted. Rotate and zoom to explore the rover's design and learn the location of each camera.
- **Camera Details:** A panel displays the name and details of each camera, allowing users to understand their functions and placements.

### 3. **Camera-Specific Galleries**

- **Photo Collections:** Select a camera to view all images captured by that specific camera on any chosen day. Explore detailed and focused photo sets from various perspectives of Mars.

### 4. **Interactive Map**

- **Location-Based Exploration:** Click on various locations on Mars to view images taken at those specific points. Each location is paired with a top-down image of the surrounding terrain, helping users to identify and recognize Martian features.

### 5. **Favorites and Annotations**

- **Create Collections:** Mark your favorite images and save them in a personal gallery to create a collection of the most stunning Martian terrain and features.
- **Annotate Images:** Click on any image to view it full screen, annotate, and draw on it. Save these annotated images to a separate gallery for future reference and study.

### 6. **Curiosity Rover Data**

- **Mission Statistics:** Access detailed data including the total number of photos taken per sol, launch date, landing date, journey duration, gallery maximum sol, total photos, and distance traveled by the rover.

## How to Get Started

To run *Rover&out* locally, follow these steps:

1. **Clone the Repository:**
   
   - Clone this repository to your local machine using `git clone <repository_url>`.

2. **Set Up the Client:**
   
   - Navigate to the client directory:
     
     `cd /client`
   
   - Install the necessary dependencies:
     
     `npm install`
   
   - Start the development server:
     
     `npm run dev`

3. **Set Up the Server:**
   
   - Navigate to the server directory:
     
     `cd ../Rover-server`
   
   - Install the necessary dependencies:
     
     `npm install`
   
   - Start the server:
     
     `node --watch index.js`

4. **Obtain a NASA API Key:**
   
   - Go to [NASA's API portal](https://api.nasa.gov/) and sign up to get your personal API key.

5. **Configure the API Key:**
   
   - Create a file named `.env` in the `/Rover-server` directory.
   
   - Add your API key to this file:
     
     `NASA_API_KEY=your_api_key_here`

6. **Access the App:**
   
   - Open your browser and go to [https://rover-out.vercel.app/](https://rover-out.vercel.app/) to start exploring!

For additional support or feedback, please contact me at idavila2021@gmail.com.
