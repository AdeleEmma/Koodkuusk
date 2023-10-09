import random

# Generate a random number between 1 and 100
random_number = random.randint(1, 100)

# Initialize the number of attempts
attempts = 0

print("Welcome to the Guess the Number game!")
print("I've selected a random number between 1 and 100. Try to guess it!")

while True:
    try:
        user_guess = int(input("Enter your guess: "))
        attempts += 1

        if user_guess < 1 or user_guess > 100:
            print("Please enter a number between 1 and 100.")
        elif user_guess < random_number:
            print("Too low! Try a higher number.")
        elif user_guess > random_number:
            print("Too high! Try a lower number.")
        else:
            print(f"Congratulations! You've guessed the number {random_number} in {attempts} attempts!")
            break
    except ValueError:
        print("Invalid input. Please enter a valid number.")

print("Game over. Thanks for playing!")
