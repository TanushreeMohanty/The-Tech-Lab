//aggregates all Python topic contents for AI/ML section
import { TopicContent } from "./content";

export const pythonContent: Record<string, TopicContent> = {
  //Checked section
  Basics: {
    id: "Basics",
    title: "Python Basics",
    description:
      "Python is designed for readability and uses indentation to define code blocks, which is essential for building clean software systems.",
    blocks: [
      {
        subTitle: "Input and Output Functions",
        text: "Python uses input() to take data from the user and print() to display information.",
        list: [
          "input(): It always returns a string, we use type casting like int() or float() for numerical data.",
          "print(): Outputs variables or strings to the terminal.",
          "f-strings: Use f'{variable}' for clean and modern output formatting.",
          "Type Casting: Convert string input to numbers using int() or float().",
        ],
        code: "# Taking user input\nname = input('Enter your name: ')\nyear = int(input('Enter your B.Tech year: '))\n\n# Displaying formatted output\nprint(f'Hello {name}! System ready for Year {year} logs.')",
        outputCode:
          "Enter your name: Student\nEnter your B.Tech year: 3\nHello Student! System ready for Year 3 logs.",
      },
      {
        subTitle: "Character Set",
        text: "The character set is the set of valid characters that a language can recognize. Python supports the full range of ASCII and Unicode characters.",
        list: [
          "Letters: A-Z, a-z",
          "Digits: 0-9",
          "Special Symbols: +, -, *, /, %, etc.",
          "Whitespaces: blank space, tab, newline, etc.",
          "All ASCII & Unicode chars are supported in data & literals",
        ],
      },
      {
        subTitle: "Variables & Identifiers",
        text: "Variables are named 'containers' used to store data values. The name given to a variable (or function/class) is called an Identifier. Python is case-sensitive and relies on proper indentation to define scope.",
        list: [
          "Identifiers can include English letters (A-Z, a-z), digits (0-9), and underscores (_).",
          "An identifier must NOT start with a digit.",
          "Variable names should be meaningful (e.g., 'city_name' instead of 'c').",
          "Python is Case-Sensitive: 'age' and 'Age' are treated as two different variables.",
          "No special symbols (like @, $, %) are allowed in variable names.",
        ],
        code: '# Variable Assignment Examples\nname = "tanushree"\nage = 30\nPI = 3.14\n\n# Meaningful Identifier\ncity_name = "Delhi"\n\n# Case-sensitivity test\nage = 20\nAge = 25\nprint(f"age is {age}, but Age is {Age}")',
        outputCode: "age is 20, but Age is 25",
      },

      {
        subTitle: "Core Data Types",
        text: "Python automatically detects the type of data assigned to a variable. Understanding these basic types is essential for data processing and mathematical logic.",
        list: [
          "Integer: Whole numbers, can be positive, negative, or zero (e.g., 35, -10, 0).",
          "String: Textual data enclosed in single or double quotes (e.g., 'tanushree').",
          "Float: Decimal or floating-point numbers (e.g., 3.14, 9.99).",
          "Boolean: Logical values representing True or False.",
          "None: A special type representing the absence of a value.",
        ],
        code: "# Variable assignments\nname = \"tanushree\"\nage = 35\nPI = 3.14\n\n# Checking data types using type() function\nprint(type(age))    # Output: <class 'int'>\nprint(type(name))   # Output: <class 'str'>\nprint(type(PI))     # Output: <class 'float'>",
        outputCode: "<class 'int'>\n<class 'str'>\n<class 'float'>",
      },
      {
        subTitle: "Keywords & Comments",
        text: "Python uses Keywords as reserved words with fixed meanings, while Comments help human developers understand the code logic without affecting execution.",
        list: [
          "Keywords: Reserved words (e.g., False, None, True, if, def) that cannot be used as variable names.",
          "Python keywords are case-sensitive (e.g., 'True' is a keyword, but 'true' is not).",
          "Single-line Comments: Created using the '#' symbol; anything after it on that line is ignored.",
          "Multi-line Comments: Wrapped in triple quotes (''' or \"\"\") to document larger blocks of logic.",
        ],
        code: '# Our First Program - This is a single-line comment\nname = "tanushree"\nage = 35\nPI = 3.14\n\nprint(type(age))  # Output checking variable type\n\n"""\nThis is a \nmulti-line \ncomment\n"""',
        outputCode: "<class 'int'>",
      },
      {
        subTitle: "Type Conversion & Casting",
        text: "Python handles data type changes in two ways: through automatic conversion for compatible types and through manual casting for explicit transformations required by the developer.",
        list: [
          "Type Conversion (Implicit): Python automatically converts one data type to another without user intervention (e.g., adding an integer to a float results in a float).",
          "Type Casting (Explicit): The developer manually converts a variable to a specific type using built-in functions like int(), float(), str(), bool(), list(), tuple(), set(), dict().",
          "Compatibility: Conversions between compatible types (like int to float) are seamless, but incompatible types require explicit casting.",
        ],
        code: '# Implicit Conversion\na = 2.0\nb = 1\nsum = a + b\nprint(f"Value: {sum}, Type: {type(sum)}")\n\n# Explicit Casting\nval = "33"\nconverted_val = int(val)\nprint(f"Original Type: {type(val)}, New Type: {type(converted_val)}")',
        outputCode:
          "Value: 3.0, Type: <class 'float'>\nOriginal Type: <class 'str'>, New Type: <class 'int'>",
      },
    ],
  },
  Operators: {
    id: "Operators",
    title: "Python Operators",
    description:
      "Operators are special symbols that perform operations on variables and values. Python categorizes these based on the type of operation they perform, from basic math to logical comparisons.",
    blocks: [
      {
        subTitle: "Types of Operators",
        text: "",
        list: [
          "Arithmetic",
          "Relational / Comparison",
          "Assignment",
          "Logical",
        ],
      },
      {
        subTitle: "Arithmetic Operators",
        text: "",
        list: [
          "+ : Addition (adds two values)",
          "- : Subtraction (subtracts right from left)",
          "* : Multiplication (multiplies two values)",
          "/ : Division (returns a floating-point result)",
          "% : Modulo (returns the remainder of division)",
          "** : Exponentiation (calculates power; e.g., a**b is a to the power b)",
        ],
        code: "# Arithmetic Examples\na = 10\nb = 5\n\nprint(a + b)  # 15\nprint(a - b)  # 5\nprint(a * b)  # 50\nprint(a / b)  # 2.0 (float result)\nprint(a % b)  # 0 (remainder)\nprint(a ** b) # 100000 (10 to the power 5)",
        outputCode: "15\n5\n50\n2.0\n0\n100000",
      },
      {
        subTitle: "Relational Operators",
        text: "The result of these operations is always a Boolean (True or False), which is essential for conditional logic in AI/ML models.",
        list: [
          "== : Equal to (returns True if both values are equal)",
          "!= : Not equal to (returns True if values are different)",
          ">  : Greater than",
          "<  : Less than",
          ">= : Greater than or equal to",
          "<= : Less than or equal to",
        ],
        code: "# Comparison Examples\na = 50\nb = 20\n\nprint(a == b)  # False\nprint(a != b)  # True\nprint(a >= b)  # True\nprint(a < b)   # False",
        outputCode: "False\nTrue\nTrue\nFalse",
      },
      {
        subTitle: "Assignment Operators",
        text: "Combined operators (like += or -=) allow you to perform an arithmetic operation and assign the result simultaneously.",
        list: [
          "=  : Basic Assignment (num = 10)",
          "+= : Add and Assign (num += 5 is num = num + 5)",
          "-= : Subtract and Assign",
          "*= : Multiply and Assign",
          "/= : Divide and Assign",
          "%= : Modulo and Assign",
          "**=: Power and Assign",
        ],
        code: "# Assignment Examples\nnum = 10\nnum += 5  # num becomes 15\nnum *= 2  # num becomes 30\nnum %= 10 # num becomes 0\n\nprint(num)",
        outputCode: "0",
      },
      {
        subTitle: "Operator Precedence",
        text: "Operator precedence determines the 'priority' of operators in an expression. When multiple operators have the same precedence, Python evaluates the expression from left to right.",
        list: [
          "Parentheses ( ): Highest priority; expressions inside are always evaluated first.",
          "Exponentiation **: Next highest priority.",
          "Multiplication, Division, Modulo (*, /, %): Evaluated left to right.",
          "Addition, Subtraction (+, -): Evaluated left to right.",
          "Relational/Comparison Operators (==, !=, >, etc.): Evaluated after arithmetic.",
          "Logical Operators (not, and, or): Lowest priority in that specific order.",
        ],
        code: '# Operator Precedence Example\n# 10 / 2 * 5\n# Step 1: 10 / 2 = 5.0 (Left to Right)\n# Step 2: 5.0 * 5 = 25.0\nresult = 10 / 2 * 5\n\n# Using Parentheses to change priority\n# 10 / (2 * 5) = 10 / 10 = 1.0\npriority_result = 10 / (2 * 5)\n\nprint(f"Normal: {result}")\nprint(f"Parentheses: {priority_result}")',
        outputCode: "Normal: 25.0\nParentheses: 1.0",
      },
    ],
  },
  Cond: {
    id: "Cond",
    title: "Python Conditional Statements",
    description:
      "It allows you to execute specific blocks of code based on whether certain conditions are met. They form the backbone of decision-making in programming.",
    blocks: [
      {
        subTitle: "Types of Conditional Statements",
        text: "",
        list: [
          "if : The starting statement that checks a condition.",
          "elif : Short for 'else if', it allows you to check multiple alternative conditions.",
          "else : The catch-all block that executes if all preceding conditions are False.",
        ],
        code: '# Decision Making Example\nage = int(input("Enter your age: "))\n\nif age >= 18:\n    print("Eligible for Voter ID")\nelif age < 0:\n    print("Invalid age entered")\nelse:\n    print("Not eligible for Voter ID")',
        outputCode: "Enter your age: 19\nEligible for Voter ID",
      },

      {
        subTitle: "Match Case (Pattern Matching)",
        text: "",
        list: [
          "Alternative: Use 'match-case' as a more readable substitute for multiple 'elif' statements.",
          "Syntax: Starts with the 'match' keyword followed by the variable to check.",
          "Cases: Each 'case' represents a specific value or pattern to match against.",
          "Default Case: Use 'case _:' (the wildcard) as a 'default' block that runs if no other patterns match.",
        ],
        code: '# Traffic Light Logic using Match Case\ncolor = input("Enter light color: ").lower()\n\nmatch color:\n    case "green":\n        print("Go")\n    case "red":\n        print("Stop")\n    case "yellow":\n        print("Look")\n    case _:\n        print("Default: Invalid Color")',
        outputCode: "Enter light color: green\nGo",
      },
    ],
  },
  Loops: {
    id: "Loops",
    title: "PythonLoops",
    description:
      "Python provides two primary loop types: 'for' loops for iterating over sequences and 'while' loops for repeating code based on a condition.",
    blocks: [
      {
        subTitle: "The while Loop",
        text: "A 'while' loop repeatedly executes a block of code as long as the given condition evaluates to True. It is ideal for situations where you don't know exactly how many iterations are needed beforehand.",
        list: [
          "Condition: The loop checks the condition before every iteration.",
          "Infinite Loops: If the condition never becomes False, the loop will run forever (Infinite Loop).",
          "Iteration: Ensure you update the loop variable (increment/decrement) to eventually meet the exit condition.",
        ],
        code: "# Basic while loop\ni = 1\nwhile i <= 5:\n    print(f'Iteration: {i}')\n    i += 1  # Increment to avoid infinite loop",
        outputCode:
          "Iteration: 1\nIteration: 2\nIteration: 3\nIteration: 4\nIteration: 5",
      },
      {
        subTitle: "The for Loop",
        text: "In Python, the 'for' loop is used to iterate over a sequence of elements, such as characters in a string or items in a list. It automatically handles the iteration process for each item in the sequence.",
        list: [
          "Sequence: Can be a string, list, tuple, or dictionary.",
          "Variable: The 'var' in 'for var in sequence' takes the value of the current element in each step.",
          "Strings: When iterating over a string, the loop processes one character at a time.",
        ],
        code: '# Iterating over a string\nword = "hello"\nfor char in word:\n    print(char)',
        outputCode: "h\ne\nl\nl\no",
      },
      {
        subTitle: "Loop Control: break & continue",
        text: "Control statements allow you to change the behavior of a loop during its execution. They are essential for optimizing performance and handling edge cases.",
        list: [
          "break: Immediately terminates the loop and moves to the next block of code outside the loop.",
          "continue: Skips the current iteration and jumps directly to the next one.",
          "Scenario: Using 'break' to stop a search once an item is found, or 'continue' to skip invalid data.",
        ],
        code: "# Using break and continue\nprint('--- Break Example ---')\nfor i in range(1, 6):\n    if i == 3: break\n    print(i)\n\nprint('\\n--- Continue Example ---')\nfor i in range(1, 6):\n    if i == 3: continue\n    print(i)",
        outputCode:
          "--- Break Example ---\n1\n2\n\n--- Continue Example ---\n1\n2\n4\n5",
      },
      {
        subTitle: "The range() Function",
        text: "The range() function generates a sequence of numbers, which is commonly used to iterate a 'for' loop a specific number of times.",
        list: [
          "range(stop): Generates numbers from 0 up to (but not including) the stop value.",
          "range(start, stop): Generates numbers from start up to (but not including) stop.",
          "range(start, stop, step): Generates numbers with a specific increment (step) between each value.",
        ],
        code: "# Using range in a for loop\nprint('Counting to 5:')\nfor i in range(5):\n    print(i)\n\nprint('\\nRange with Step (2 to 10 by 2):')\nfor i in range(2, 11, 2):\n    print(i)",
        outputCode:
          "Counting to 5:\n0\n1\n2\n3\n4\n\nRange with Step (2 to 10 by 2):\n2\n4\n6\n8\n10",
      },
    ],
  },
  Functions: {
    id: "Functions",
    title: "Python Functions",
    description:
      "Functions are reusable blocks of code that perform a specific task. They help break down complex problems into smaller, manageable pieces, promote code reusability, and improve readability.",
    blocks: [
      {
        subTitle: "What is a Function?",
        text: "A function is a block of statements that perform a specific task. Instead of writing the same logic repeatedly, you can define it once and call it whenever necessary to reduce redundancy.",
        list: [
          "Definition: Creating the function and writing its internal logic using the 'def' keyword.",
          "Call / Invoke: Executing the function by using its name followed by parentheses.",
          "Modularity: Functions break complex programs into smaller, manageable, and organized pieces.",
          "Reusability: A function defined once can be 'called' multiple times across different parts of your application.",
        ],
        code: '# Function Definition\ndef greet_student():\n    print("Welcome to the Tech Lab!")\n\n# Function Call (Involve)\ngreet_student()',
        outputCode: "Welcome to the Tech Lab!",
      },

      {
        subTitle: "Function Parameters & Return",
        text: "Parameters are the variables listed in the function definition, while Arguments are the actual values passed to the function when it is called.",
        list: [
          "Parameters: Act as placeholders for the data the function needs (e.g., 'a' and 'b').",
          "Arguments: The real data passed during the call (e.g., '3' and '4').",
          "Return Statement: Used to send a result back from the function to the caller.",
          "Scope: Variables created inside a function (like 's' in the example) are local to that function.",
        ],
        code: "# Function with parameters\ndef sum(a, b):\n    s = a + b\n    return s\n\n# Calling the function and storing the result\nans = sum(3, 4)\nprint(ans)",
        outputCode: "7",
      },
      {
        subTitle: "Built-in vs. User-Defined",
        text: "Functions are classified based on their origin. Built-in functions are ready-to-use from the start, while user-defined functions are tailored by you for specific project needs.",
      },
      {
        subTitle: "Default Parameters",
        text: "Default values are used if an argument is missing during the call. This makes your functions more flexible and prevents errors when certain data isn't provided.",
        list: [
          "Syntax: Assigned during the definition using the '=' operator (e.g., 'b = 1').",
          "Override: If a value is provided during the call, it replaces the default value.",
          "Positioning: Non-default parameters must always come before default parameters in the definition (e.g., 'def func(a, b=1)').",
        ],
        code: "# Function with a default parameter\ndef sum(a, b = 1):\n    return a + b\n\nprint(sum(5))    # Uses default (5 + 1)\nprint(sum(4, 5)) # Overrides default (4 + 5)",
        outputCode: "6\n9",
      },
      {
        subTitle: "Lambda Functions",
        text: "Lambda functions are small, anonymous functions defined without a name. They can take any number of arguments but can only have one single expression.",
        list: [
          "Syntax: Uses the 'lambda' keyword followed by arguments and a single expression.",
          "Use Case: Often used as 'High Order Functions' where a function is passed as an argument to another function.",
          "Return: They automatically return the result of the expression without needing a 'return' keyword.",
        ],
        code: "# Standard Function\ndef add_five(x): return x + 5\n\n# Equivalent Lambda Function\nlambda_add = lambda x: x + 5\n\nprint(lambda_add(10))",
        outputCode: "15",
      },
    ],
  },
  // Unchecked section
  Questions: {
    id: "Questions",
    title: "Python Operators - Practice Questions",
    description:
      "This section contains practice questions to reinforce understanding of Python operators, their precedence, and practical applications in coding scenarios.",
    blocks: [
      {
        subTitle: "Practical Example: Printing Average",
        text: "By combining arithmetic operators and proper variable handling, we can solve real-world mathematical problems. Calculating the average of two numbers is a fundamental exercise in logic and operator precedence.",
        list: [
          "WAP: 'Write A Program' - a common shorthand in technical labs.",
          "Logic: Sum the two numbers first, then divide by the total count (2).",
          "Precedence: Parentheses (a + b) are required to ensure addition happens before division.",
          "Precision: The result will automatically be a float, ensuring an accurate decimal result.",
          "Data Input: In a real scenario, these values would often come from user input() cast to float().",
        ],
        code: '# WAP to print the average of 2 numbers\na = 15.5\nb = 10.5\n\n# Correct formula using precedence\naverage = (a + b) / 2\n\nprint(f"Number 1: {a}")\nprint(f"Number 2: {b}")\nprint(f"The Average is: {average}")',
        outputCode: "Number 1: 15.5\nNumber 2: 10.5\nThe Average is: 13.0",
      },
      {
        subTitle: "Exercise 1: Personalized Greetings",
        text: "WAP that asks the user for their name and age, then prints a formatted sentence combining both values.",
        list: [
          "Goal: Output 'Hello [name], you are [age] years old!'",
          "Constraint: Ensure name is handled as a string and age as an integer.",
          "Technique: Use f-strings for clean variable interpolation.",
        ],
        code: "# Q1 Solution\nname = input('Enter name: ')\nage = int(input('Enter age: '))\n\nprint(f'Hello {name}, you are {age} years old!')",
        outputCode:
          "Enter name: tanushree\nEnter age: 21\nHello tanushree, you are 21 years old!",
      },
      {
        subTitle: "Exercise 2: Arithmetic Suite",
        text: "WAP to take two numbers as input from the user and print their sum, difference, product, and quotient.",
        list: [
          "Sum: a + b",
          "Difference: a - b",
          "Product: a * b",
          "Quotient: a / b (returns a float result)",
        ],
        code: "# Q2 Solution\na = float(input('First number: '))\nb = float(input('Second number: '))\n\nprint(f'Sum: {a + b}')\nprint(f'Difference: {a - b}')\nprint(f'Product: {a * b}')\nprint(f'Quotient: {a / b}')",
        outputCode:
          "First number: 10\nSecond number: 5\nSum: 15.0\nDifference: 5.0\nProduct: 50.0\nQuotient: 2.0",
      },
      {
        subTitle: "Exercise 2: Arithmetic Suite",
        text: "WAP to take two numbers as input from the user and print their sum, difference, product, and quotient.",
        list: [
          "Sum: a + b",
          "Difference: a - b",
          "Product: a * b",
          "Quotient: a / b (returns a float result)",
        ],
        code: "# Q2 Solution\na = float(input('First number: '))\nb = float(input('Second number: '))\n\nprint(f'Sum: {a + b}')\nprint(f'Difference: {a - b}')\nprint(f'Product: {a * b}')\nprint(f'Quotient: {a / b}')",
        outputCode:
          "First number: 10\nSecond number: 5\nSum: 15.0\nDifference: 5.0\nProduct: 50.0\nQuotient: 2.0",
      },
      {
        subTitle: "Exercise 3: Mixed-Type Average",
        text: "WAP to ask the user to enter two integers and one float. Convert them all to floats and print their average.",
        list: [
          "Input: 2 Ints, 1 Float",
          "Logic: (val1 + val2 + val3) / 3",
          "Explicit Casting: Use float() on all inputs to ensure mathematical consistency.",
        ],
        code: "# Q3 Solution\nnum1 = float(input('Integer 1: '))\nnum2 = float(input('Integer 2: '))\nnum3 = float(input('Float 3: '))\n\navg = (num1 + num2 + num3) / 3\nprint(f'The average is: {avg}')",
        outputCode:
          "Integer 1: 5\nInteger 2: 10\nFloat 3: 15.5\nThe average is: 10.166666666666666",
      },
      {
        subTitle: "Exercise 4: Type Transformation",
        text: "Given a string containing a number (e.g., '45'), convert it to an integer, a float, and back to a string again.",
        list: [
          "String to Integer: int()",
          "String to Float: float()",
          "Numeric to String: str()",
          "Verification: Use type() to verify each successful conversion.",
        ],
        code: "# Q4 Solution\nval = \"45\"\n\ni_val = int(val)\nf_val = float(val)\ns_val = str(f_val)\n\nprint(f'Integer: {i_val} {type(i_val)}')\nprint(f'Float: {f_val} {type(f_val)}')\nprint(f'String: {s_val} {type(s_val)}')",
        outputCode:
          "Integer: 45 <class 'int'>\nFloat: 45.0 <class 'float'>\nString: 45.0 <class 'str'>",
      },
      {
        subTitle: "Exercise 5: Precedence Evaluation",
        text: "Evaluate and explain the result of the expression: x = 10 + 3 * 2 ** 2.",
        list: [
          "Step 1: Exponentiation (2 ** 2 = 4)",
          "Step 2: Multiplication (3 * 4 = 12)",
          "Step 3: Addition (10 + 12 = 22)",
          "Rationale: Exponentiation has the highest priority here, followed by multiplication, then addition.",
        ],
        code: "# Q5 Solution\nx = 10 + 3 * 2 ** 2\nprint(f'The result is: {x}')",
        outputCode: "The result is: 22",
      },
      {
        subTitle: "Exercise 6: Variable Swapping",
        text: "WAP to swap the values of two numbers entered by the user. While many languages require a temporary 'temp' variable, Python allows for a highly efficient single-line swap.",
        list: [
          "Goal: If a=5 and b=10, make a=10 and b=5.",
          "Traditional Logic: Use a third variable to hold one value temporarily.",
          "Pythonic Way: Use tuple unpacking (a, b = b, a) for an instant swap.",
        ],
        code: "# Q6 Solution\na = int(input('Enter a: '))\nb = int(input('Enter b: '))\n\n# The Pythonic Swap\na, b = b, a\n\nprint(f'Swapped! a: {a}, b: {b}')",
        outputCode: "Enter a: 5\nEnter b: 10\nSwapped! a: 10, b: 5",
      },
      {
        subTitle: "Exercise 7: Celsius to Fahrenheit",
        text: "WAP to convert a temperature from Celsius to Fahrenheit. This exercise practices float conversion and applying mathematical formulas in code.",
        list: [
          "Input: Temperature in Celsius (float).",
          "Formula: Fahrenheit = (Celsius * 9/5) + 32",
          "Precision: Ensure the result remains a float for accurate readings.",
        ],
        code: "# Q7 Solution\ncelsius = float(input('Temp in Celsius: '))\nfahrenheit = (celsius * (9/5)) + 32\n\nprint(f'{celsius}°C is equal to {fahrenheit}°F')",
        outputCode: "Temp in Celsius: 37\n37.0°C is equal to 98.6°F",
      },
      {
        subTitle: "Exercise 8: Area of a Circle",
        text: "WAP to take the radius of a circle as input and calculate its area using the formula Area = π * r².",
        list: [
          "Constant: Use 3.14 as the value for π.",
          "Operator: Use the exponentiation operator (**) to square the radius.",
          "Formula Application: area = 3.14 * (radius ** 2)",
        ],
        code: "# Q8 Solution\nradius = float(input('Enter radius: '))\nPI = 3.14\narea = PI * (radius ** 2)\n\nprint(f'Area of the circle: {area}')",
        outputCode: "Enter radius: 5\nArea of the circle: 78.5",
      },
      {
        subTitle: "Exercise 9: Simple Interest",
        text: "WAP to compute Simple Interest based on user inputs for Principal, Rate, and Time. All inputs must be converted to floats to handle decimal rates.",
        list: [
          "Principal (P): The initial amount.",
          "Rate (R): The interest rate per period.",
          "Time (T): The time duration.",
          "Formula: SI = (P * R * T) / 100",
        ],
        code: "# Q9 Solution\nP = float(input('Principal (P): '))\nR = float(input('Rate (R): '))\nT = float(input('Time (T): '))\n\nsi = (P * R * T) / 100\nprint(f'The Simple Interest is: {si}')",
        outputCode:
          "Principal (P): 1000\nRate (R): 5\nTime (T): 2\nThe Simple Interest is: 100.0",
      },
      {
        subTitle: "Exercise 10: Part Separator",
        text: "WAP to take a decimal number (float) and separate it into its integer and fractional parts.",
        list: [
          "Integer Part: Cast the float to an int() to drop the decimals.",
          "Fractional Part: Subtract the integer part from the original float.",
          "Output Example: For 45.78, integer is 45 and fractional is 0.78.",
        ],
        code: "# Q10 Solution\nnum = float(input('Enter decimal number: '))\n\nint_part = int(num)\nfrac_part = num - int_part\n\nprint(f'Integer part: {int_part}')\nprint(f'Fractional part: {round(frac_part, 2)}')",
        outputCode:
          "Enter decimal number: 45.78\nInteger part: 45\nFractional part: 0.78",
      },
      {
        subTitle: "Decision Making: Even or Odd",
        text: "The 'if-else' structure allows your program to choose between two distinct paths. A common use case is determining if a number is a multiple of 2 (Even) or not (Odd).",
        list: [
          "Condition: Use the modulo operator (%) to check the remainder when divided by 2.",
          "Logic: If 'n % 2 == 0', the number is Even; otherwise, it is Odd.",
          "Indentation: Remember that the 'print' statements must be indented under their respective keywords.",
          "Keywords: 'if' handles the True condition, while 'else' handles everything else.",
        ],
        code: '# Odd or Even Checker\nnum = int(input("Enter a number: "))\n\nif num % 2 == 0:\n    print("EVEN")\nelse:\n    print("ODD")',
        outputCode: "Enter a number: 7\nODD",
      },

      {
        subTitle: "Exercise: Multiplication Table",
        text: "WAP to print the multiplication table of any number 'n' entered by the user. This exercise combines user input, type casting, and loop iteration.",
        list: [
          "Goal: Print 'n * i = result' for i from 1 to 10.",
          "Technique: Use a loop to iterate 10 times and calculate the product in each step.",
          "Formatting: Use f-strings to display the table clearly.",
        ],
        code: '# Multiplication Table Generator\nn = int(input("Enter number: "))\n\nfor i in range(1, 11):\n    print(f"{n} x {i} = {n * i}")',
        outputCode: "Enter number: 5\n5 x 1 = 5\n5 x 2 = 10\n...\n5 x 10 = 50",
      },
      {
        subTitle: "Exercise: Vowel Counter",
        text: "WAP to count the total number of vowels in a given string. This demonstrates how to combine 'for' loops with conditional 'if' logic.",
        list: [
          "Word: 'artificial' (Expected Result: 5 vowels).",
          "Logic: Iterate through each character and check if it matches 'a', 'e', 'i', 'o', or 'u'.",
          "Counter: Initialize a 'count' variable at 0 and increment it whenever a match is found.",
        ],
        code: '# Vowel Counting Logic\nword = "artificial"\ncount = 0\nvowels = "aeiou"\n\nfor char in word:\n    if char.lower() in vowels:\n        count += 1\n\nprint(f"Total vowels in \'{word}\': {count}")',
        outputCode: "Total vowels in 'artificial': 5",
      },
      {
        subTitle: "Exercise: Sum of n Natural Numbers",
        text: "WAP to calculate and print the sum of the first 'n' natural numbers entered by the user. This exercise demonstrates how to use a loop to accumulate values into a single variable.",
        list: [
          "Goal: If n = 5, calculate 1 + 2 + 3 + 4 + 5 = 15.",
          "Initialization: Start with a 'total' or 'sum' variable set to 0.",
          "Iteration: Use range(1, n+1) to ensure the loop includes the number 'n'.",
          "Accumulation: In each step, add the current loop value to your total.",
        ],
        code: '# Sum of n Numbers\nn = int(input("Enter n: "))\ntotal_sum = 0\n\nfor i in range(1, n + 1):\n    total_sum += i\n\nprint(f"The sum of the first {n} natural numbers is: {total_sum}")',
        outputCode: "Enter n: 5\nThe sum of the first 5 natural numbers is: 15",
      },
      {
        subTitle: "Exercise: Factorial of n",
        text: "WAF to calculate and print the factorial of a number 'n'. This combines function definition with loop logic to solve a classic mathematical problem.",
        list: [
          "Logic: Factorial (n!) is the product of all positive integers from 1 up to n.",
          "Looping: Use a 'for' loop with range(1, n+1) to accumulate the product.",
          "Initial Value: Start your 'fact' variable at 1 (since multiplying by 0 results in 0).",
        ],
        code: '# Function to calculate factorial\ndef print_factorial(n):\n    fact = 1\n    for i in range(1, n + 1):\n        fact *= i\n    print(f"Factorial of {n} is: {fact}")\n\nprint_factorial(5)',
        outputCode: "Factorial of 5 is: 120",
      },
      {
        subTitle: "Exercise 1: Tax Rate Calculator",
        text: "WAP to calculate the final tax rate based on a user's salary. This exercise practices handling numeric ranges and logical branching.",
        list: [
          "Salary < 30,000: 5% tax.",
          "Salary 30,000–70,000: 15% tax.",
          "Salary > 70,000: 25% tax.",
          "Logic: Use 'elif' to check the middle range effectively.",
        ],
        code: '# Tax Calculation Logic\nsalary = int(input("Enter salary: "))\n\nif salary < 30000:\n    rate = "5%"\nelif 30000 <= salary <= 70000:\n    rate = "15%"\nelse:\n    rate = "25%"\n\nprint(f"Your final tax rate is: {rate}")',
        outputCode: "Enter salary: 45000\nYour final tax rate is: 15%",
      },
      {
        subTitle: "Exercise 2: Even Number Range",
        text: "WAF that takes two integers, 'a' and 'b', and prints all even numbers between them (inclusive).",
        list: [
          "Input: Start (a) and End (b) values.",
          "Iteration: Use range(a, b+1) to include the final number.",
          "Filter: Use 'if i % 2 == 0' to identify even numbers.",
        ],
        code: '# Function to print evens\ndef print_evens(a, b):\n    for i in range(a, b + 1):\n        if i % 2 == 0:\n            print(i, end=" ")\n\nprint_evens(10, 20)',
        outputCode: "10 12 14 16 18 20",
      },
      {
        subTitle: "Exercise 3: Digit Analysis",
        text: "WAF to perform comprehensive analysis on the digits of a number, including printing each digit, counting them, and finding their sum.",
        list: [
          "Right-most Digit: Obtained using N % 10.",
          "Remove Last Digit: Use N // 10 (floor division) to drop the decimal.",
          "Process: Repeat these steps in a loop until the number becomes 0.",
        ],
        code: '# Digit Extraction & Sum\ndef analyze_digits(n):\n    temp = n\n    total_sum = 0\n    count = 0\n    \n    print(f"Digits in {n}:", end=" ")\n    while temp > 0:\n        digit = temp % 10\n        print(digit, end=" ")\n        total_sum += digit\n        count += 1\n        temp //= 10\n    \n    print(f"\\nSum: {total_sum} | Count: {count}")\n\nanalyze_digits(312)',
        outputCode: "Digits in 312: 2 1 3 \nSum: 6 | Count: 3",
      },
      {
        subTitle: "Exercise 9: Prime Number Verification",
        text: "WAF to determine if a number is prime. A prime number is only divisible by 1 and itself.",
        list: [
          "Smallest Prime: 2 is the smallest prime number.",
          "Logic: If any number in range(2, n) divides 'n', it is not prime.",
          "Efficiency: As soon as a divisor is found, we can 'return False' and stop searching.",
        ],
        code: '# Prime Checker Function\ndef is_prime(n):\n    if n < 2: return False\n    for i in range(2, n):\n        if n % i == 0:\n            return False\n    return True\n\nprint(f"Is 7 prime? {is_prime(7)}")\nprint(f"Is 9 prime? {is_prime(9)}")',
        outputCode: "Is 7 prime? True\nIs 9 prime? False",
      },
      {
        subTitle: "Exercise 10: Number Guessing Game",
        text: "WAP that creates a game where the user must guess a 'secret number'. The program provides feedback if the guess is too high or too low.",
        list: [
          "Loop: Use 'while True' to keep the game running until the correct guess.",
          "Feedback: Provide 'Too high' or 'Too low' hints to help the user.",
          "Exit: Use 'break' to terminate the loop once the user wins.",
        ],
        code: '# Guessing Game Logic\nsecret = 18\nprint("--- Welcome to the Guessing Game! ---")\n\nwhile True:\n    guess = int(input("Guess the number: "))\n    if guess == secret:\n        print("Correct! You won.")\n        break\n    elif guess > secret:\n        print("Too high! Try again.")\n    else:\n        print("Too low! Try again.")',
        outputCode:
          "Guess the number: 25\nToo high! Try again.\nGuess the number: 18\nCorrect! You won.",
      },
    ],
  },
  Rough: {
    id: "Rough",
    title: "Rough Work",
    description:
      "This section contains rough work and experimental code snippets for Python topics in the AI/ML section.",

    blocks: [
      {
        subTitle: "demo",
        text: "demo text",
        list: ["demo list 1", "demo list 2"],
        code: "# demo code\nprint('demo code')",
        outputCode: "demo code",
      },
    ],
  },
};
