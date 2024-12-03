import java.util.Scanner; // Ensure the Scanner class is imported

public class Main {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        // Prompt user for input
        System.out.println("Enter two numbers:");
        int num1 = s.nextInt(); // Declare num1
        int num2 = s.nextInt(); // Declare num2

        // Prompt user for the operation
        System.out.println("Enter the operation: 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division");
        int operator = s.nextInt();

        // Perform the chosen operation
        if (operator == 1) {
            System.out.println("Result: " + (num1 + num2));
        } else if (operator == 2) {
            System.out.println("Result: " + (num1 - num2));
        } else if (operator == 3) {
            System.out.println("Result: " + (num1 * num2));
        } else if (operator == 4) {
            if (num2 != 0) { // Prevent division by zero
                System.out.println("Result: " + ((double) num1 / num2));
            } else {
                System.out.println("Division by zero is not allowed");
            }
        } else {
            System.out.println("Invalid operation, please try again");
        }

        // Close the scanner
        s.close();
    }
}