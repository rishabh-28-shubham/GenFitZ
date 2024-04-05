# GenFitZ

GenFitZ is a health management application built with Streamlit, designed to help users manage their health by analyzing images of food items and calculating their total calories. The app utilizes Google's Gemini Pro Vision API for image recognition and calorie calculation.

## Features

- **Image Upload**: Users can upload images of food items.
- **Calorie Calculation**: The app analyzes the uploaded images and calculates the total calories of the food items.
- **Detailed Report**: Provides a detailed report of each food item along with its calorie intake.

## Technologies Used

- **Python**: The backend logic and scripting are implemented in Python.
- **Streamlit**: Streamlit is used to create the interactive web application interface.
- **Google Gemini Pro Vision API**: Utilized for image recognition and calorie calculation.
- **HTML/CSS/JavaScript**: Frontend customization and styling.

## How to Run

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/genfitz.git
   ```

2. **Install dependencies:**
   ```
   pip install -r requirements.txt
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the project directory.
   - Add your Google API key to the `.env` file:
     ```
     GOOGLE_API_KEY=your_api_key_here
     ```

4. **Run the application:**
   ```
   streamlit run app.py
   ```

5. **Access the application:**
   Open a web browser and navigate to the URL provided by Streamlit (typically `http://localhost:8501`).

## Contributing

Contributions are welcome! If you'd like to contribute to GenFitZ, please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This Markdown format will render nicely on GitHub and is easy to read. You can copy and paste this content into your README.md file in your GitHub repository.
