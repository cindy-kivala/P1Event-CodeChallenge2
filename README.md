# P1Event-CodeChallenge2

This project is a **JavaScript-based guest list manager** that allows users to add, remove, edit, and categorize guests for an event. It includes real-time DOM manipulation and event handling based on user interactions.

## Features

### Core Functionality
- Add a guest by entering their full name (first and last name required).
- Display guests in a list with:
  - Their name (formatted with capitalized initials)
  - Their category tag (e.g., Friend, Family, Work-Colleague)
  - Timestamp of when they were added
- "Remove" button to delete a guest from the list.
- Prevents page reload on form submission (`event.preventDefault()` used).

### Stretch Features Implemented
- **RSVP Toggle**: Button switches between “Attending” and “Not Attending” with visual feedback (e.g., style change).
- **Category Tagging**: Guests are labeled with color-coded categories (e.g., `[Friend]`, `[Family]`, etc.).
- **Limit to 10 Guests**: Displays an alert if more than 10 guests are added.
- **Edit Button**: Allows editing a guest’s name with proper validation (must remain two words, capitalized).
- **Timestamp**: Shows time each guest was added, displayed in bold green for clarity.

## Technical Highlights

- Built without external libraries.
- Uses `createElement`, `appendChild`, `textContent`, and event listeners for DOM manipulation.
- Validates input to ensure:
  - Two-word names only
  - Capitalized names
- Includes alerts and visual cues e.g RSVP conrfimation colors.

## How to Use

1. Open `event.html` in a browser (live server).
2. Type a full name into the input field and select a category.
3. Submit the form to add the guest.
4. Use the buttons to:
   -  Toggle RSVP status
   -  Edit name
   -  Remove guest

## Known Limitations

- Only works locally unless deployed (e.g., GitHub Pages).
- Input requires strictly two names.

## File Structure

📦 Guest List Manager
├── event.html
├── style.css
├── event.js 
└── README.md 


## Submission Checklist

-  Input adds guests to the list
-  Remove button works
-  Form doesn’t refresh page
-  Category tags display properly
-  RSVP toggle works
-  Edit feature functions correctly
-  Timestamp is included and styled
-  Guest count limit enforced

## Author

Created by **Cindy Kivala** as part of the JavaScript DOM Code Challenge.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).