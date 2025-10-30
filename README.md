<h1 align="right">💬 ChatGPT Clone</h1>

A simple ChatGPT clone built with React and Node.js.

---

## 📋 Table of Contents
- [General Info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Sources](#sources)

---

## 🧠 General Info
This project is a **ChatGPT clone** that connects to the **OpenAI API** and fetches completions using the **GPT-3** model.  
It demonstrates how to integrate AI-powered responses into a web app using a Node.js backend and a React frontend.

---

## 🛠️ Technologies
This project was built with:
- **JavaScript (ES6+)**
- **React**
- **Node.js**
- **Express**
- **HTML5**
- **CSS3**

---

## ⚙️ Setup
To run this project locally:

### 1️⃣ Clone the repo
```bash
git clone https://github.com/kpilszak/chatgpt-clone.git
```

### 2️⃣ Go into the project folder
```bash
cd chatgpt-clone
```

### 3️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Add your OpenAI API key to .env
```bash
echo "API_KEY=your_api_key_here" > .env
```

### 5️⃣ Run the app
Start the backend and frontend (in **separate terminal windows** or **tabs**):
```bash
# Terminal 1
npm run start:backend
```
```bash
# Terminal 2
npm run start:frontend
```

The frontend will be available at http://localhost:3000 and the backend will run on http://localhost:5000
 (or your configured port).

---

## 📚 Sources
This project was inspired by and built with the help of  
**Ania Kubów’s tutorial** → [🛑 Learn to use OpenAI API by building ChatGPT (super simple!) | React Node.js](https://www.youtube.com/watch?v=JJ9fkYX7q4A)
