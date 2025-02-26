# EPICS-191: Healthverse

Healthverse is an AI-powered health platform developed under the EPICS initiative. It features an AI chatbot for first-aid guidance, cognitive training games, and a comprehensive health information hub. Built using **Node.js, Express.js, and MongoDB**, Healthverse enhances healthcare accessibility through smart assistance and engaging experiences.

## Features

### 📊 **Personalized Health Dashboard**
- Track **water consumption, steps, and sleep records** with graphical insights.
- Stay updated with **health news** in real-time.

### 🍎 **Nutritional Analysis**
- Get detailed insights into your **daily nutrient intake** (carbs, calories, protein, sugar, etc.).

### 😴 **Sleep Monitoring & Tips**
- Visual representation of your **sleep data**.
- Personalized **tips for better sleep**.

### 🧠 **Mental Health Support**
- Receive **mental health improvement tips** based on your mood.

### 💪 **Fitness & Activity Tracking**
- Track **calories burned** based on your activities.
- Access **exercise video links** for various workouts.

### 🤖 **AI Health Chatbot**
- Ask health and fitness-related questions anytime.

## 🔑 API & Environment Variables
To run this project, you need to set up environment variables. Create a .env.local file in the root directory and add the following:

GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID

GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET

NEXT_PUBLIC_NEWS_API_TOKEN=YOUR_NEWS_API_TOKEN

You can obtain these credentials by:

GOOGLE_CLIENT_ID & GOOGLE_CLIENT_SECRET: Creating a new Firebase App. Follow this guide.

NEXT_PUBLIC_NEWS_API_TOKEN: Generating an API key from this source.
- `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` – Obtained by creating a **Firebase App**. Follow the [step-by-step guide](https://console.firebase.google.com/).
- `NEXT_PUBLIC_NEWS_API_TOKEN` – Get your API key [here](https://newsapi.org/).

## 🚀 Running Locally
Follow these steps to set up the project on your local machine:

### 1️⃣ **Clone the Repository**
Fork the repository and clone it to your local directory:
```bash
 git clone https://github.com/YOUR_GITHUB_USERNAME/Healthverse.git
```

### 2️⃣ **Install Dependencies**
Navigate to the project directory and install required packages:
```bash
cd Healthverse
npm install
```

### 3️⃣ **Set Up Environment Variables**
Create a `.env.local` file in the root directory and add the following:
```
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
NEXT_PUBLIC_NEWS_API_TOKEN=YOUR_NEWS_API_TOKEN
```

### 4️⃣ **Start the Development Server**
Run the following command to start the server:
```bash
npm run dev
```
By default, the app will be available at [http://localhost:3000](http://localhost:3000).

---

Enjoy exploring **Healthverse**! 🚀💙

