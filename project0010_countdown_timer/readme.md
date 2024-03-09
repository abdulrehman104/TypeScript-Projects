
# Countdown Timer

This project is a simple command-line countdown timer that allows users to input a duration in seconds and displays the remaining time in minutes and seconds format. It utilizes the `date-fns` library for date and time calculations and the `inquirer` library for user input validation.

## Features

- **User Input:** Prompts users to enter the duration of the countdown timer in seconds.
- **Validation:** Validates user input to ensure it is a valid number and not exceeding 60 seconds.
- **Countdown Display:** Displays the remaining time in minutes and seconds format, updating every second.
- **Expiration Notification:** Notifies the user when the countdown timer has expired.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the program:

   ```bash
   npm start
   ```

## Usage

Upon running the program, users will be prompted to enter the duration of the countdown timer in seconds. The timer will then start counting down, displaying the remaining time in minutes and seconds format. When the countdown timer reaches zero, the program will notify the user that the time has expired and exit.

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or new features to propose, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
