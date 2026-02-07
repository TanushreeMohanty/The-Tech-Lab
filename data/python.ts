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
    title: "Python Loops",
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
  Strings: {
    id: "Strings",
    title: "Python Strings",
    description:
      "Strings are sequences of characters used to store and manipulate text data. Python provides a rich set of operations and methods to work with strings effectively.",
    blocks: [
      {
        subTitle: "Introduction to Strings",
        text: "",
        list: [
          "Definition: A sequence of characters (e.g., 'python').",
          "Length: The len() function returns the total number of characters in a string.",
          "Flexibility: Strings can be defined using single (' ') or double (\" \") quotes.",
        ],
        code: '# String definition and length\nword = "python"\nprint(len(word))',
        outputCode: "6",
      },
      {
        subTitle: "String Concatenation",
        text: "Joining two or more strings together is called concatenation. This is commonly used to combine variable data into full sentences.",
        list: [
          "Operator (+): Used to merge two string variables.",
          'Spacing: You can concatenate a literal space " " between words for proper formatting.',
          "Type Rule: You can only concatenate strings with other strings.",
        ],
        code: '# Concatenating with spaces\nword1 = "I love"\nword2 = "python"\n\n# Adding a literal space\nprint(word1 + " " + word2)',
        outputCode: "I love python",
      },
      {
        subTitle: "Indexing & Immutability",
        text: "Every character in a string has a specific position called an index. While you can access characters via indexing, you cannot modify them directly because strings are immutable.",
        list: [
          "Positioning: Indexing starts at 0 and goes up to length - 1 (e.g., 'p' is at index 0).",
          "Accessing: Use square brackets word[index] to retrieve a specific character.",
          "Immutability: You cannot change a character at a specific index (e.g., word[0] = 'B' will cause an error).",
          "Iteration: You can use a 'for' loop to iterate through every character in a string.",
        ],
        code: '# Accessing by index\nword = "Python"\nprint(word[0])  # Output: P\n\n# Iterating through a string\nfor ch in word:\n    print(ch)',
        outputCode: "P\ny\nt\nh\no\nn",
      },
      {
        subTitle: "String Slicing",
        text: "Slicing is used to extract a specific portion of a string. By providing a start and end index, you create a new substring without modifying the original string.",
        list: [
          "Syntax: str[start_index : end_index].",
          "Rule: The character at the end index is NOT included in the final result.",
        ],
        code: "# Slicing Example\nword = \"Python\"\n\n# Extracting 'th'\nsubstring = word[2:4]\nprint(substring)",
        outputCode: "th",
      },
      {
        subTitle: "Negative Slicing",
        text: "Negative indices allow you to access characters from the end of the string. Slicing with negative values follows the same 'start included, end excluded' rule.",
        list: [
          "Positioning: The last character is -1, the second to last is -2, and so on.",
          "Range: word[-4 : -2] starts at index -4 and ends just before index -2.",
        ],
        code: "# Negative Slicing\nword = \"Python\"\n\n# Extracting 'th' using negative indices\nprint(word[-4:-2])",
        outputCode: "th",
      },
      {
        subTitle: "The .format() Method",
        text: "The .format() method allows you to create dynamic strings by inserting variable values into placeholders within a string template.",
        list: [
          "Normal: Placeholders are filled in the order arguments are provided.",
          "Index-Based: Use numbers {0}, {1} to control the exact position of each argument.",
          "Value-Based: Assign names within placeholders {name} for clearer, keyword-based mapping.",
          "Versatility: This method is a standard feature in Python 3 for creating dynamic strings.",
        ],
        code: '# Using .format() in different ways\na, b = 5, 10\nsum = a + b\n\n# Normal placement\nprint("sum of {} & {} is {}".format(a, b, sum))\n\n# Index-based (swapping a and b positions)\nprint("sum of {1} & {0} is {2}".format(a, b, sum))\n\n# Value-based assignment\nprint("{a} values of vars {a} & {b}".format(a=5, b=10))',
        outputCode:
          "sum of 5 & 10 is 15\nsum of 10 & 5 is 15\n5 values of vars 5 & 10",
      },
      {
        subTitle: "F-Strings (Literal Interpolation)",
        text: "F-strings provide a concise and readable way to embed expressions inside string literals, using curly braces {}. They were introduced in Python 3.6 and have become the preferred method for string formatting.",
        list: [
          "Syntax: Prefix the string with 'f' (e.g., f\"Hello {name}\").",
          "Direct Embedding: Place variable names directly inside the curly braces.",
          "Expressions: You can perform calculations directly within the placeholders.",
          "Readability: F-strings are generally cleaner and easier to read than the .format() method.",
        ],
        code: "# Using F-Strings for variables and math\na = 5\nb = 10\n\n# Calculation directly inside the string\nprint(f`avg of {a} & {b} is {(a + b) / 2}`)",
        outputCode: "avg of 5 & 10 is 7.5",
      },
    ],
  },
  Lists: {
    id: "Lists",
    title: "Python Lists",
    description:
      "Lists are ordered collections of items that can hold multiple data types. They are mutable, allowing you to modify their contents after creation.",
    blocks: [
      {
        subTitle: "Introduction to Lists",
        text: "",
        list: [
          "Definition: A mutable sequence used to store a collection of values.",
          "Heterogeneous: A single list can store different types of data (integers, strings, floats).",
          "Mutability: You can modify, add, or remove elements after the list has been defined.",
          "Length: Use the len() function to find the total number of elements in a list.",
        ],
        code: '# List with mixed data types\nmarks = [99, 89, 100, 65, 92, "abc", 100.99]\n\nprint(type(marks))\nprint(len(marks))',
        outputCode: "<class 'list'>\n7",
      },
      {
        subTitle: "List Indexing",
        text: "Accessing elements in a list is done through indexing. Because lists are mutable, you can use indexing to both retrieve and update specific values.",
        list: [
          "Positioning: The first element is at index 0, the second at index 1, etc.",
          "Accessing: Use square brackets marks[index] to get a specific value.",
          "Updating: You can reassign a value directly (e.g., marks[0] = 95).",
          "Range: Valid indices range from 0 to len(list) - 1.",
        ],
        code: "# Accessing elements by index\nmarks = [99, 89, 100, 65, 92]\n\nprint(marks[0])  # Output: 99\nprint(marks[4])  # Output: 92",
        outputCode: "99\n92",
      },
      {
        subTitle: "List Slicing",
        text: "Slicing is used to retrieve a specific portion of a list. This creates a new 'sublist' containing the requested range of elements.",
        list: [
          "Syntax: list[st_idx : end_indx].",
          "Rule: The element at the 'end_indx' is NOT included in the result.",
          "Defaults: If omitted, st_idx defaults to 0 and end_indx defaults to the total length of the list.",
          "Sublists: Slicing returns a new list object containing the specified range.",
        ],
        code: "# Slicing a list\nmarks = [99, 89, 100, 65, 92]\n\n# Extracting elements from index 1 to 3\nsub_list = marks[1:4]\nprint(sub_list)",
        outputCode: "[89, 100, 65]",
      },
      {
        subTitle: "List Methods",
        text: "Python provides several built-in methods (functions) specifically for lists. These allow you to easily modify the contents of a list, from adding new elements to reordering existing ones.",
        list: [
          "append(val): Adds a single element to the very end of the list.",
          "insert(idx, val): Inserts an element at a specific index, shifting subsequent items to the right.",
          "sort(): Arranges the list items in increasing order by default.",
          "sort(reverse=True): Directly sorts the list in descending (decreasing) order.",
          "reverse(): Reverses the current order of elements in the list.",
        ],
        code: '# List Method Examples\nnums = [1, 2, 3]\n\n# Adding an element at the end\nnums.append(4)\nprint(f"After append: {nums}")\n\n# Inserting 10 at index 2\nnums.insert(2, 10)\nprint(f"After insert: {nums}")\n\n# Sorting in descending order\nnums.sort(reverse=True)\nprint(f"After descending sort: {nums}")',
        outputCode:
          "After append: [1, 2, 3, 4]\nAfter insert: [1, 2, 10, 3, 4]\nAfter descending sort: [10, 4, 3, 2, 1]",
      },
      {
        subTitle: "Iterating & Searching Lists",
        text: "Loops are essential for processing every item in a list. You can use a 'for' loop to iterate through all elements or add conditional logic to find a specific value and terminate the loop early using 'break'.",
        list: [],
        code: '# Searching for a value in a list\nnums = [1, 2, 3, 10, 4]\nx = 10\nidx = 0\n\nfor val in nums:\n    if(val == x):\n        print(f"{x} found at idx={idx}")\n        break\n    idx += 1',
        outputCode: "10 found at idx=3",
      },
    ],
  },
  Tuples: {
    id: "Tuples",
    title: "Python Tuples",
    description:
      "Tuples are ordered collections of items similar to lists, but they are immutable, meaning their contents cannot be changed after creation. They are useful for storing fixed sets of data.",
    blocks: [
      {
        subTitle: "Introduction to Tuples",
        text: "",
        list: [
          "Definition: An immutable sequence of values that cannot be modified after creation.",
          "Syntax: Defined using parentheses () instead of square brackets [].",
          "Heterogeneous: Can store different data types, including integers, strings, and floats.",
        ],
        code: '# Defining a tuple\ntup = (1, 2, 3, 4, 5, "abc", 3.14)\n\nprint(tup)\nprint(type(tup))',
        outputCode: "(1, 2, 3, 4, 5, 'abc', 3.14)\n<class 'tuple'>",
      },
      {
        subTitle: "Single Element Tuples",
        text: "When creating a tuple with only one item, you must include a comma after the element. Without the comma, Python will interpret the parentheses as a standard expression and assign the type of the inner value.",
        list: [
          "The Comma Rule: Use (val,) to define a single-item tuple.",
          "Type Inference: Without a comma, tup = (\"abc\") is treated as a string (<class 'str'>).",
          'Correct Syntax: tup = ("abc",) is correctly identified as a tuple.',
        ],
        code: '# Single element tuple vs. expression\nt1 = ("abc")\nprint(f"t1 type: {type(t1)}")\n\nt2 = ("abc",)\nprint(f"t2 type: {type(t2)}")',
        outputCode: "t1 type: <class 'str'>\nt2 type: <class 'tuple'>",
      },
      {
        subTitle: "Indexing & Slicing",
        text: "You can access elements in a tuple using their position (index) or retrieve a range of elements using slicing. The rules for start and end indices are identical to those used for lists.",
        list: [
          "Indexing: Access individual items using tup[index] (e.g., tup[2] is the third item).",
          "Length: Use len(tup) to find the total number of elements.",
          "Slicing: Create a new sub-tuple using tup[start:end] (end index is excluded).",
          "Non-destructive: Slicing returns a new tuple without altering the original.",
        ],
        code: '# Accessing and slicing\ntup = (1, 2, 3, 4, 5)\n\nprint(f"Element at idx 2: {tup[2]}")\nprint(f"Slice [0:3]: {tup[0:3]}")',
        outputCode: "Element at idx 2: 3\nSlice [0:3]: (1, 2, 3)",
      },
      {
        subTitle: "Tuple Methods",
        text: "Since tuples are immutable, their methods do not modify the original data. Instead, they provide information about the contents of the tuple, such as the location or frequency of specific values.",
        list: [
          "index(val): Returns the index of the first occurrence of the specified value.",
          "count(val): Calculates and returns the total number of times a specific value appears in the tuple.",
          "Iteration: You can use a 'for' loop to iterate through every item in a tuple sequence, similar to a list.",
        ],
        code: "# Tuple Method Examples\ntup = (1, 2, 3, 2, 4, 2, 5)\n\n# Finding the first occurrence of 2\nprint(f\"First '2' is at index: {tup.index(2)}\")\n\n# Counting all occurrences of 2\nprint(f\"Total count of '2': {tup.count(2)}\")",
        outputCode: "First '2' is at index: 1\nTotal count of '2': 3",
      },
    ],
  },
  Dict: {
    id: "Dict",
    title: "Python Dictionaries",
    description:
      "Dictionaries are unordered collections of key-value pairs. They allow for efficient data retrieval based on unique keys, making them ideal for storing related information.",
    blocks: [
      {
        subTitle: "Introduction to Dictionaries",
        text: "",
        list: [
          "Structure: Data is stored as key:value pairs enclosed in curly braces {}.",
          "Uniqueness: Keys in a dictionary must be unique to avoid data collisions.",
          "Mutability: You can change, add, or remove items after the dictionary is created.",
          "Unordered: Unlike lists, dictionaries do not maintain a specific order for their elements.",
        ],
        code: '# Defining a dictionary\ninfo = {\n    "name": "tanushree",\n    "cgpa": 9.2,\n    "subjects": ["math", "science"]\n}\n\nprint(type(info))',
        outputCode: "<class 'dict'>",
      },
      {
        subTitle: "Accessing & Modifying",
        text: "Dictionaries allow for direct access to values through their keys. You can also reassign values to existing keys or add new key-value pairs at any time.",
        list: [
          'Accessing: Use dict["key_name"] to retrieve the associated value.',
          'Updating: Assign a new value to an existing key (e.g., info["cgpa"] = 9.6).',
          "Adding: Creating a new key automatically adds it to the dictionary.",
          "Heterogeneous: Keys and values can be of various data types, including strings, numbers, and even lists.",
        ],
        code: '# Updating a value\ninfo = {"name": "tanushree", "cgpa": 9.2}\ninfo["cgpa"] = 9.6\n\nprint(info["cgpa"])',
        outputCode: "9.6",
      },
      {
        subTitle: "Dictionary Methods",
        text: "Built-in dictionary methods allow you to retrieve all keys, all values, or both as pairs. These are essential for iterating through data dynamically.",
        list: [
          "keys(): Returns a view object containing all the keys in the dictionary.",
          "values(): Returns a view object containing all the values.",
          "items(): Returns all (key, value) pairs as a list of tuples.",
          "get(key): Retrieves the value for a key; safer than direct indexing as it handles missing keys.",
          "update(new_dict): Merges another dictionary or iterable of pairs into the current one.",
        ],
        code: `# Comprehensive Dictionary Method Demo\ninfo = {"name": "tanushree", "cgpa": 9.2}\n\n# 1. Retrieval Methods\nprint(f"Keys: {list(info.keys())}")\nprint(f"Values: {list(info.values())}")\nprint(f"Items: {list(info.items())}")\n\n# 2. Safe Access with get()\n# Returns 'Not Specified' instead of a KeyError\nprint(f"Age: {info.get('age', 'Not Specified')}")\n\n# 3. Merging with update()\ninfo.update({"city": "Delhi", "cgpa": 9.5})\nprint(f"Updated Info: {info}")`,
        outputCode:
          "Keys: ['name', 'cgpa']\nValues: ['tanushree', 9.2]\nItems: [('name', 'tanushree'), ('cgpa', 9.2)]\nAge: Not Specified\nUpdated Info: {'name': 'tanushree', 'cgpa': 9.5, 'city': 'Delhi'}",
      },
    ],
  },
  Sets: {
    id: "Sets",
    title: "Python Sets",
    description:
      "Sets are unordered collections of unique items. They are useful for storing distinct values and performing mathematical set operations like union, intersection, and difference.",
    blocks: [
      {
        subTitle: "Introduction to Sets",
        text: "",
        list: [
          "Uniqueness: Sets automatically remove any duplicate values.",
          "Unordered: Elements in a set do not have a fixed position or index.",
          "Mutable: You can modify the set by adding or removing elements.",
          "Syntax: Defined using curly braces {} containing values.",
        ],
        code: "# Defining a set with duplicates\ns = {1, 2, 2, 2, 3}\n\nprint(s)\nprint(len(s))  # Only counts unique elements",
        outputCode: "{1, 2, 3}\n3",
      },
      {
        subTitle: "Set Methods",
        text: "Built-in set methods allow you to dynamically manage unique collections.",
        list: [
          "add(val): Adds a new unique element to the set.",
          "remove(val): Deletes a specific value from the set; raises an error if the value is missing.",
          "clear(): Removes every element, leaving the set empty.",
          "pop(): Removes and returns a random element from the set due to its unordered nature.",
          "Deduplication: Sets automatically ignore duplicate additions, keeping the collection unique.",
        ],
        code: `# Using all set methods
s = {1, 2, 3}

# 1. Adding an element
s.add(5)
s.add(3) # Duplicate, will be ignored
print(f"After add: {s}")

# 2. Removing an element
s.remove(2)
print(f"After remove: {s}")

# 3. Popping a random element
popped_val = s.pop()
print(f"Popped value: {popped_val}")
print(f"After pop: {s}")

# 4. Clearing the set
s.clear()
print(f"After clear: {s}")`,
        outputCode:
          "After add: {1, 2, 3, 5}\nAfter remove: {1, 3, 5}\nPopped value: 1\nAfter pop: {3, 5}\nAfter clear: set()",
      },
      {
        subTitle: "Union & Intersection",
        text: "Union and Intersection allow you to combine or compare two different sets. These methods return a new set as the result.",
        list: [
          "union(set2): Returns a new set containing all unique elements from both sets.",
          "intersection(set2): Returns a new set containing only the elements common to both sets.",
        ],
        code: '# Set math operations\nset1 = {1, 2, 3}\nset2 = {2, 3, 4}\n\nprint(f"Union: {set1.union(set2)}")\nprint(f"Intersection: {set1.intersection(set2)}")',
        outputCode: "Union: {1, 2, 3, 4}\nIntersection: {2, 3}",
      },
    ],
  },
  // Unchecked section

  OOPS: {
    id: "OOPS",
    title: "Python OOPS",
    description:
      "Object-Oriented Programming (OOP) is a programming paradigm that uses 'classes' and 'objects' to structure software. It evolved from procedural programming to help developers manage complex systems through code reusability.",
    blocks: [
      {
        subTitle: "What is OOP?",
        text: "Object-Oriented Programming shifts the focus from writing a sequence of steps to designing a modular system of reusable blueprints.",
        list: [
          "Procedural vs OOP: Procedural logic flows through a sequence of functions, while OOP organizes data and behavior into logical units.",
          "Reusability: OOP allows you to write a 'blueprint' once and reuse it to create multiple instances, saving time and reducing errors.",
          "Core Components: The foundation of OOP rests on two primary concepts: Classes (the blueprint) and Objects (the actual instance).",
        ],
        code: '# Basic OOP Structure\nclass Student:\n    # The Blueprint\n    college = "Indian Aviation Academy"\n\n# Creating an Instance (Object)\ns1 = Student()\nprint(s1.college)',
        outputCode: "Indian Aviation Academy",
      },
      {
        subTitle: "Class & Object",
        text: "Think of a Class as a structural blueprint and an Object as the actual building constructed from it. Every object is an instance of its class.",
        list: [
          "Class: The blueprint that defines the structure and rules (e.g., the 'Student' template).",
          "Object: A specific instance created from the class (e.g., 'stu1', 'stu2').",
          "Instantiation: The process of creating an object by calling the class name with parentheses.",
        ],
        code: '# Defining a Class\nclass Student:\n    subject = "Python"\n    college = "ABC"\n\n# Creating Objects (Instances)\nstu1 = Student()\nstu2 = Student()\n\nprint(stu1.subject)\nprint(stu2.college)',
        outputCode: "Python\nABC",
      },
      {
        subTitle: "Attributes & Methods",
        text: "Attributes represent the data or state of an object, while Methods represent the actions or behaviors that the object can perform.",
        list: [
          "Properties / Attributes: Variables that belong to the class, such as 'name', 'age', or 'model'.",
          "Behaviors / Methods: Functions defined inside a class that perform actions or manipulate the object's data.",
          "Encapsulation: Grouping attributes and methods into a single unit (the class) simplifies system management and data security.",
        ],
        code: `# Modeling a simple Object with Data and Action
class Aircraft:
    # Attributes (Data)
    model = "Boeing 737"
    status = "Grounded"

    # Method (Behavior)
    def takeoff(self):
        self.status = "In Flight"
        print(f"The {self.model} is now {self.status}.")

# Creating the object
my_plane = Aircraft()

# Accessing Attribute
print(f"Current Status: {my_plane.status}")

# Calling Method
my_plane.takeoff()`,
        outputCode:
          "Current Status: Grounded\nThe Boeing 737 is now In Flight.",
      },
      {
        subTitle: "The Constructor (__init__)",
        text: "All classes have a function called __init__(), which is always executed when the class is being initiated. It acts as a setup phase to prepare the object for use.",
        list: [
          "Automatic Execution: The constructor runs immediately upon object creation without being called manually.",
          "Initialization: It is used to assign values to object properties (attributes).",
          "The 'self' Parameter: Represents the current instance of the class and is used to access variables belonging to that class.",
        ],
        code: '# Basic Constructor Example\nclass Student:\n    def __init__(self):\n        print("System: Object is being constructed..")\n\nstu1 = Student()',
        outputCode: "System: Object is being constructed..",
      },
      {
        subTitle: "Parameterized Constructor",
        text: "By adding parameters to the constructor, you can ensure every object starts with its own unique set of data, rather than shared class-level defaults.",
        list: [
          "Dynamic Data: Pass arguments like 'name' and 'cgpa' during instantiation.",
          "Mapping: Use 'self.attribute = parameter' to map incoming data to the object instance.",
          "Scalability: This allows one blueprint to create hundreds of distinct 'Student' records easily.",
        ],
        code: '# Mapping data to instances\nclass Student:\n    def __init__(self, name, cgpa):\n        self.name = name\n        self.cgpa = cgpa\n\n# Creating distinct objects\nstu1 = Student("Rahul", 9.0)\nstu2 = Student("Urvashi", 8.4)\n\nprint(f"{stu1.name} grade: {stu1.cgpa}")',
        outputCode: "Rahul grade: 9.0",
      },
      {
        subTitle: "Object Methods",
        text: "Methods represent the 'behaviors' of your objects. They can access and modify the data stored within the object using the 'self' keyword.",
        list: [
          "Functionality: Methods define what the object can 'do' (e.g., calculate grades, print reports).",
          "Access: Methods use 'self' to reference the specific attributes of the object that called them.",
          "Return Values: Methods can return data back to the main program, as seen in the getter example.",
        ],
        code: '# Using Methods to access data\nclass Student:\n    def __init__(self, name, cgpa):\n        self.name = name\n        self.cgpa = cgpa\n\n    def get_cgpa(self):\n        return self.cgpa\n\nstu1 = Student("Rahul", 9.0)\nprint(f"{stu1.name} has cgpa = {stu1.get_cgpa()}")',
        outputCode: "Rahul has cgpa = 9.0",
      },
      {
        subTitle: "Attributes: Class vs. Instance",
        text: "Attributes define the data associated with your objects. Understanding the difference between class-level and instance-level attributes is key to memory-efficient coding.",
        list: [
          "Class Attributes: Variables defined directly inside the class but outside any methods. They are shared by all objects (e.g., college_name).",
          "Instance Attributes: Variables defined inside the __init__ method using 'self'. They are unique to each object (e.g., self.name).",
          "Precedence: If an instance and class share an attribute name, the instance attribute takes precedence for that specific object.",
        ],
        code: '# Class and Instance Attribute Example\nclass Student:\n    college_name = "ABC College" # Class attribute (common)\n\n    def __init__(self, name, gpa):\n        self.name = name        # Instance attribute (unique)\n        self.gpa = gpa          # Instance attribute (unique)\n\nstu1 = Student("Rahul", 9.2)\nprint(stu1.name)            # Accessing instance attribute\nprint(Student.college_name) # Accessing class attribute',
        outputCode: "Rahul\nABC College",
      },
      {
        subTitle: "Attribute Overriding",
        text: "Python follows a specific search order for attributes. Instance attributes always override class attributes if they share the same name.",
        list: [
          "Search Order: Instance Level -> Class Level.",
          "Overriding: Setting self.PI = 3.14 inside __init__ will override a class-level PI = 3.1 for that specific instance.",
          "Static Values: Class attributes are ideal for constants or values that never change across the entire dataset.",
        ],
        code: "class Student:\n    PI = 3.1 # Class level\n\n    def __init__(self):\n        self.PI = 3.14 # Instance level (overrides class PI)\n\nstu1 = Student()\nprint(stu1.PI)",
        outputCode: "3.14",
      },
      {
        subTitle: "Instance Methods",
        text: "Instance methods represent the specific actions an object can take. They are uniquely tied to an instance and use the 'self' keyword to interact with that object's unique data.",
        list: [
          "Parameter: Must take 'self' as the first parameter.",
          "Access: Can access and modify both instance attributes (unique) and class attributes (common).",
          "Usage: Used for general object behaviors, such as displaying a laptop's specific specs.",
        ],
        code: 'class Laptop:\n    def __init__(self, ram, storage):\n        self.ram = ram\n        self.storage = storage\n\n    def get_info(self):\n        print(f"Laptop has {self.ram} RAM & {self.storage} storage")\n\nl1 = Laptop("16gb", "512gb")\nl1.get_info()',
        outputCode: "Laptop has 16gb RAM & 512gb storage",
      },
      {
        subTitle: "Class Methods",
        text: "Class methods operate on the class itself. They are often used as 'factory' methods or to modify shared class state that affects every instance.",
        list: [
          "Decorator: Must be preceded by @classmethod.",
          "Parameter: Takes 'cls' as the first compulsory parameter instead of 'self'.",
          "Capability: Primarily used to access or modify class-level attributes.",
        ],
        code: 'class Laptop:\n    storage_type = "SSD"\n\n    @classmethod\n    def get_storage_type(cls):\n        print(f"Storage type = {cls.storage_type}")\n\nLaptop.get_storage_type()',
        outputCode: "Storage type = SSD",
      },
      {
        subTitle: "Static Methods",
        text: "Static methods behave like regular functions but are grouped inside a class because they are conceptually related to it. They perform independent tasks, such as mathematical calculations.",
        list: [
          "Decorator: Must be preceded by @staticmetod.",
          "Parameters: No compulsory parameters like 'self' or 'cls'.",
          "Isolation: Cannot access or modify instance or class attributes.",
        ],
        code: 'class Laptop:\n    @staticmethod\n    def calc_discount(price, discount):\n        final_price = price - (discount * price / 100)\n        print(f"Discounted price = {final_price}")\n\nLaptop.calc_discount(40000, 10)',
        outputCode: "Discounted price = 36000.0",
      },

      {
        subTitle: "Pillar 1: Encapsulation",
        text: "Encapsulation ensures that an object's internal state is kept private and can only be changed through controlled interfaces.",
        list: [
          "Definition: Bundling attributes and methods into a single class unit.",
          "Data Protection: Hides the internal representation of an object from the outside world.",
          "Access Control: Uses private members (starting with '__') to restrict direct external modification.",
        ],
        code: "# Encapsulation in Action\nclass Account:\n    def __init__(self, balance):\n        self.__balance = balance # Private attribute\n\n    def get_balance(self):\n        return self.__balance\n\nacc = Account(5000)\nprint(f'Secure Access: {acc.get_balance()}')",
        outputCode: "Secure Access: 5000",
      },
      {
        subTitle: "Access Modifiers",
        text: "Python uses specific naming conventions to determine how data can be accessed. This is crucial for handling sensitive data like account balances or student marks securely.",
        list: [
          "Public: Accessible from anywhere; named standardly (e.g., self.name).",
          "Protected: Intended for use within the class and its subclasses; defined with a single underscore (e.g., self._branch).",
          "Private: Accessible only within the defined class; defined with double underscores (e.g., self.__balance).",
          "Data Mangling: Python internally renames '__var' to '_ClassName__var' to prevent accidental external access.",
        ],
        code: '# Visibility Demo\nclass BankAccount:\n    def __init__(self, name, balance):\n        self.name = name          # Public\n        self._branch = "Main"     # Protected\n        self.__balance = balance  # Private\n\nacc = BankAccount("Rahul", 1000)\nprint(acc.name)   # Works: Public\n# print(acc.__balance) # Throws AttributeError: Private',
        outputCode: "Rahul",
      },
      {
        subTitle: "Getters & Setters",
        text: "Because private attributes are hidden, we use Getters to retrieve values and Setters to update them safely. This allows us to add validation logic to prevent invalid data.",
        list: [
          "Getter: A method used to safely return a private attribute's value.",
          "Setter: A method used to assign a new value to a private attribute after validation.",
          "Data Integrity: Setters can reject invalid inputs, such as negative balances or empty names.",
        ],
        code: 'class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance\n\n    def get_balance(self): # Getter\n        return self.__balance\n\n    def set_balance(self, newVal): # Setter with validation\n        if newVal > 0:\n            self.__balance = newVal\n        else:\n            print("Error: Balance must be positive!")\n\nacc = BankAccount(100000)\nacc.set_balance(200000)\nprint(f"New Balance: {acc.get_balance()}")',
        outputCode: "New Balance: 200000",
      },
      {
        subTitle: "Pillar 2: Abstraction",
        text: "Abstraction simplifies interaction with complex systems by providing a clear, high-level interface while concealing the underlying mechanics.",
        list: [
          "Core Concept: Hiding complexity to show only the necessary functionality to the user.",
          "Strategic Focus: Users interact with the 'what' (interface), while developers manage the 'how' (implementation).",
          "Implementation: Python achieves this through Abstract Base Classes (ABC) and abstract methods.",
        ],
      },
      {
        subTitle: "Working with Abstract Classes",
        text: "An abstract class serves as a strict blueprint that defines mandatory behaviors for all its subclasses but cannot be used to create objects itself.",
        list: [
          "Abstract Class: A restricted blueprint that prevents direct object creation (instantiation).",
          "Abstract Method: A method declared in the parent but implemented in the child using the @abstractmethod decorator.",
          "The 'abc' Module: Python requires importing 'ABC' and 'abstractmethod' to enforce these rules.",
          "Consistency: Ensures every derived class (e.g., Car, Bike) implements specific required methods like start_engine().",
        ],
        code: 'from abc import ABC, abstractmethod\n\n# Abstract Parent Class\nclass Vehicle(ABC):\n    @abstractmethod\n    def start_engine(self):\n        pass\n\n# Concrete Child Classes\nclass Car(Vehicle):\n    def start_engine(self):\n        print("Car engine started with a key.")\n\nclass Bike(Vehicle):\n    def start_engine(self):\n        print("Bike engine started with a kick.")\n\n# my_vehicle = Vehicle() # This would throw an error\nc = Car()\nc.start_engine()',
        outputCode: "Car engine started with a key.",
      },
      {
        subTitle: "Pillar 3: Inheritance",
        text: "Inheritance allows one class to inherit properties and behaviors from another, establishing a clear hierarchy and promoting efficient code reuse.",
        list: [
          "Reusability: Prevents writing the same logic (like login times) for every sub-category of user.",
          "Parent / Base Class: The existing class whose features are shared with others.",
          "Child / Derived Class: The new class that inherits features and adds its own specialized functionality.",
          "Extensibility: Child classes can add unique methods or modify existing parent behaviors.",
          "Syntax: Implementation is done by passing the parent class name in parentheses: class Child(Parent).",
        ],
        code: '# Parent Class\nclass Employee:\n    start_time = "10am"\n    end_time = "6pm"\n\n# Child Class inheriting from Employee\nclass Teacher(Employee):\n    def __init__(self, subject):\n        self.subject = subject\n\nt1 = Teacher("Math")\nprint(f"Teacher of {t1.subject} starts work at {t1.start_time}")',
        outputCode: "Teacher of Math starts work at 10am",
      },
      {
        subTitle: "Inheritance Structures",
        text: "Depending on how classes are linked, inheritance is categorized into different structures to serve specific architectural needs.",
        list: [
          "Single Level: A single child class inherits from a single parent class.",
          "Multi-level: A chain where a derived class acts as a parent for another class (Grandparent -> Parent -> Child).",
          "Multiple Inheritance: A single child class inherits from more than one parent class simultaneously.",
          "Diversity: These structures allow for modeling complex biological or organizational relationships in code.",
        ],
        code: '# Multi-level Inheritance Example\nclass Vehicle:\n    def start(self):\n        print("Vehicle engine started")\n\nclass Car(Vehicle):\n    def drive(self):\n        print("Car is driving")\n\nclass ElectricCar(Car):\n    def charge(self):\n        print("Battery is charging")\n\nmy_tesla = ElectricCar()\nmy_tesla.start()  # Inherited from Vehicle\nmy_tesla.drive()  # Inherited from Car',
        outputCode: "Vehicle engine started\nCar is driving",
      },
      {
        subTitle: "Pillar 4: Polymorphism",
        text: "Polymorphism enables flexibility by allowing objects of different classes to respond to the same method call in their own unique way.",
        list: [
          "Definition: The ability of an object or method to take on multiple forms depending on the context.",
          "Method Overriding: A child class redefines a parent’s method to provide specific logic while keeping the same name.",
          "Duck Typing: A Python concept where an object is judged by its behavior (methods) rather than its class type.",
          "Flexibility: Functions can process a variety of objects as long as they share a common method interface.",
        ],
      },
      {
        subTitle: "Method Overriding in Action",
        text: "By overriding methods, specialized child classes can customize inherited behaviors while maintaining a consistent naming structure across the system.",
        list: [
          "Implementation: Define a method in the child class with the exact same name as one in the parent class.",
          "Priority: When the method is called, Python executes the child’s version (the most specific one) first.",
          "Unified Interface: Allows you to call a method like 'get_details()' on any employee object without worrying if they are a Teacher or an Admin.",
        ],
        code: '# Method Overriding Example\nclass Employee:\n    def get_role(self):\n        print("Role: General Employee")\n\nclass Teacher(Employee):\n    def get_role(self):\n        print("Role: Teacher")\n\nclass Developer(Employee):\n    def get_role(self):\n        print("Role: Software Developer")\n\n# Polymorphic behavior\nusers = [Teacher(), Developer()]\nfor user in users:\n    user.get_role() # Same method call, different results',
        outputCode: "Role: Teacher\nRole: Software Developer",
      },
    ],
  },
  FileHandling: {
    id: "FileHandling",
    title: "Python File Handling",
    description:
      "File handling in Python allows you to read from and write to files on your system. It is essential for data persistence, enabling programs to store information beyond their runtime.",
    blocks: [
      {
        subTitle: "File Handling Basics",
        text: "File I/O is the process of performing operations on files. Python provides built-in functions to open, manipulate, and close files securely.",
        list: [
          "File Types: Common formats include text files (.txt) and data files (.csv).",
          "Standard Workflow: The typical sequence is: Open -> Operations (Read/Write) -> Close.",
          "File Object: The open() function creates a 'file object' that acts as a link to the actual file.",
        ],
        code: '# Basic read workflow\nf = open("sample.txt", "r")\ndata = f.read()\nprint(data)\nf.close()',
        outputCode: "Contents of sample.txt appear here...",
      },
      {
        subTitle: "Open, Read & Close",
        text: "The open() function requires a file name and a mode. If no path is provided, Python looks in the current directory.",
        list: [
          "Syntax: f = open('filename', 'mode'). Common modes include 'r' (read), 'w' (write), and 'a' (append).",
          "read(): Returns the entire content of the file as a single string.",
          "readline(): Reads one line at a time; useful for processing large files line-by-line.",
          "Safety: Always use .close() to prevent memory leaks or file corruption.",
        ],
        code: '# Reading line by line\nf = open("sample.txt", "r")\nline1 = f.readline()\nprint(f"Line 1: {line1}")\nf.close()',
      },
      {
        subTitle: "Writing & Appending",
        text: "Use the write() method to send string data to a file. Be cautious: 'w' mode deletes existing content before writing.",
        list: [
          "Overwrite Mode ('w'): Deletes current data and starts fresh.",
          "Append Mode ('a'): Keeps existing data and adds new text to the end.",
          "Strings Only: The write() method only accepts strings; other data types must be converted.",
        ],
        code: '# Overwriting a file\nf = open("sample.txt", "w")\nf.write("Text to overwrite \\n")\nf.close()',
      },
      {
        subTitle: "Detailed File Modes",
        text: "Modes define the permissions and the initial position of the file pointer. Understanding these is critical for tasks like updating existing logs without overwriting them.",
        list: [
          "r: Read-only (default); file must exist.",
          "w: Write-only; creates a new file or truncates an existing one.",
          "a: Append; adds data to the end of the file without deleting current content.",
          "r+: Read and Write; pointer starts at the beginning.",
          "w+: Read and Write; truncates the file first.",
          "b: Binary mode (e.g., 'rb' or 'wb') for non-text files like images.",
        ],
      },
      {
        subTitle: "The 'with' Statement",
        text: "Using 'with' creates a context manager that handles resource cleanup automatically, making your code cleaner and safer.",
        list: [
          "Automatic Cleanup: You no longer need to call f.close() manually.",
          "Syntax: with open('file', 'mode') as f:.",
          "Scope: The file remains open only inside the indented block.",
        ],
        code: '# Modern file handling\nwith open("data.txt", "r") as f:\n    data = f.read()\n    print(data)\n\n# File is now closed automatically',
      },
      {
        subTitle: "Deleting Files",
        text: "To delete a file from the disk, you must import Python's built-in 'os' module and use its remove function.",
        list: [
          "Module: import os.",
          "Method: os.remove('filename') deletes the specified file permanently.",
          "Caution: This operation is irreversible; always verify the file path before execution.",
        ],
        code: 'import os\n\n# Permanently delete a file\nos.remove("sample.txt")',
      },
      {
        subTitle: "Resilient Error Handling",
        text: "By using try-except blocks, you can intercept errors and provide graceful fallback logic, maintaining a smooth user experience even when operations fail.",
        list: [
          "try: Contains the code that might cause an error.",
          "except: Executes only if an exception occurs in the try block (e.g., ZeroDivisionError).",
          "else: Runs only if no exceptions were raised in the try block.",
          "finally: Code that always executes regardless of whether an error occurred, ideal for cleanup tasks.",
        ],
        code: 'try:\n    num = int(input("Enter divisor: "))\n    res = 100 / num\nexcept ZeroDivisionError:\n    print("Error: Cannot divide by zero!")\nelse:\n    print(f"Result is {res}")',
        outputCode: "Enter divisor: 0\nError: Cannot divide by zero!",
      },
      {
        subTitle: "Concise List Logic",
        text: "List comprehensions combine the creation and population of a list into one expression, improving both performance and code readability.",
        list: [
          "Syntax: [output for item in iterable if condition].",
          "Filtering: You can include an optional 'if' statement to only include items that meet a criteria.",
          "Transformation: Apply operations directly to the output item (e.g., [x*x for x in nums]).",
        ],
        code: "nums = [1, 2, 3, 4, 5]\n# Create a list of squares for even numbers only\neven_squares = [x**2 for x in nums if x % 2 == 0]\nprint(even_squares)",
        outputCode: "[4, 16]",
      },
      {
        subTitle: "JSON Module",
        text: "Python's built-in 'json' module allows you to easily convert between Python objects (dictionaries/lists) and JSON strings used by web APIs.",
        list: [
          "Format: Uses a key:value structure similar to Python dictionaries.",
          "loads(): Parses a JSON string and converts it into a Python object (dictionary).",
          "dumps(): Takes a Python object and 'serializes' it into a JSON string.",
          "Persistence: Use load() and dump() to work directly with .json files on your disk.",
        ],
        code: 'import json\n\n# Python Dictionary\ndata = {"name": "tanushree", "subjects": ["Python", "DataScience"]}\n\n# Convert to JSON string\njson_str = json.dumps(data)\nprint(f"String type: {type(json_str)}")',
        outputCode: "String type: <class 'str'>",
      },
    ],
  },
  Questions: {
    id: "Questions",
    title: "Python Operators - Practice Questions",
    description:
      "This section contains practice questions to reinforce understanding of Python operators, their precedence, and practical applications in coding scenarios.",
    blocks: [
      {
        subTitle: "Project: Product Store System",
        text: "This project integrates all three types of Python methods to create a functional inventory system. It demonstrates how to manage unique object data while simultaneously tracking global system metrics.",
        list: [
          "Requirement 1: Design a 'Product' class to store unique names and prices.",
          "Requirement 2: Implement a class attribute to track the total number of products created.",
          "Requirement 3: Create a static method to calculate discounts based on a percentage (%) parameter.",
          "Requirement 4: Use an instance method to display the final details for each specific product.",
        ],
        code: `class Product:
    total_products = 0  # Class attribute to track inventory

    def __init__(self, name, price):
        self.name = name
        self.price = price
        Product.total_products += 1

    @staticmethod
    def calc_discount(price, discount_percent):
        return price - (price * discount_percent / 100)

    def display_info(self, discount=0):
        final_price = self.calc_discount(self.price, discount)
        print(f"Product: {self.name} | Final Price: {final_price}")

# Creating products
p1 = Product("Laptop", 50000)
p2 = Product("Mouse", 1000)

p1.display_info(10) # 10% discount
print(f"Total Products in Store: {Product.total_products}")`,
        outputCode:
          "Product: Laptop | Final Price: 45000.0\nTotal Products in Store: 2",
      },
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
      {
        subTitle: "Exercise: Data Filtering with Sets",
        text: "Given a list of student enrolment tuples in the format (name, subject), use Python sets to extract unique values and perform efficient data lookups.",
        list: [
          "Unique Courses: Use a set to automatically filter out duplicate subjects from the enrolment list.",
          "Targeted Filtering: Iterate through tuples to find all students enrolled in a specific subject like 'English'.",
          "Data Mapping: Combine dictionaries and sets to map students to their unique set of courses.",
          "Efficiency: Sets provide O(1) average time complexity for membership checks, making them faster than lists for large enrolment databases.",
        ],
        code: `# List of (student, subject) tuples\nenrolments = [\n    ("Alice", "Math"), ("Bob", "English"), \n    ("Alice", "Physics"), ("Charlie", "English")\n]\n\n# 1. List all unique courses\nunique_courses = set()\nfor name, subject in enrolments:\n    unique_courses.add(subject)\n\nprint(f"Unique Courses: {unique_courses}")\n\n# 2. List students in English\nenglish_students = [name for name, sub in enrolments if sub == "English"]\nprint(f"English Students: {english_students}")`,
        outputCode:
          "Unique Courses: {'Physics', 'Math', 'English'}\nEnglish Students: ['Bob', 'Charlie']",
      },
      {
        subTitle: "Lab: Data Structure Challenges",
        text: "These exercises require you to apply multiple concepts simultaneously, such as using loops to process strings or merging and sorting collections of data.",
        list: [
          "Q1. Palindrome Checker: A palindrome reads the same forward and backward (e.g., 'madam'). Hint: Use a loop or slicing [::-1] to reverse the string.",
          "Q2. List Averaging: Given a list of integers, compute the mathematical average of all numbers present.",
          "Q3. List Merging: Input two lists, merge them into one, and perform a final sort to organize the results.",
          "Q4. Tuple Filtering: Given a master tuple of integers, create two separate tuples: one containing only even numbers and one for odd numbers.",
        ],
        code: `# Q3: Merge and Sort Example
list1 = [1, 2, 7]
list2 = [2, 4, 5]
result = list1 + list2
result.sort()
print(f"Merged & Sorted: {result}")

# Q4: Tuple Filtering Logic
master = (1, 2, 3, 4, 5, 6)
evens = tuple(x for x in master if x % 2 == 0)
odds = tuple(x for x in master if x % 2 != 0)
print(f"Evens: {evens} | Odds: {odds}")`,
        outputCode:
          "Merged & Sorted: [1, 2, 2, 4, 5, 7]\nEvens: (2, 4, 6) | Odds: (1, 3, 5)",
      },
      {
        subTitle: "Exercise 6: Word Length Mapping",
        text: "Given a list of words, create a dictionary that maps each word to its character length. This is a common pattern for data preprocessing in software systems.",
        list: [
          "Input: A list of strings (e.g., ['apple', 'banana']).",
          "Mapping Logic: Iterate through the list and use the word as the key and len(word) as the value.",
          "Utility: This technique allows for O(1) lookup of item properties once the map is built.",
        ],
        code: `# Word to Length Mapping\nwords = ["apple", "banana", "kiwi", "cherry", "mango"]\nword_map = {}\n\nfor word in words:\n    word_map[word] = len(word)\n\nprint(word_map)`,
        outputCode:
          "{'apple': 5, 'banana': 6, 'kiwi': 4, 'cherry': 6, 'mango': 5}",
      },
      {
        subTitle: "Exercise 7: Space Counter",
        text: "WAP to count the total number of spaces in a given string. This exercise practices character-by-character string analysis.",
        list: [
          "Logic: Initialize a counter at 0.",
          "Condition: Use an 'if' statement to check if the current character is equal to a literal space \" \".",
          "Iteration: Loop through the entire string using the 'for char in string' syntax.",
        ],
        code: `# Counting spaces in a string\ntext = "The Tech Lab Python Curriculum"\nspace_count = 0\n\nfor char in text:\n    if char == " ":\n        space_count += 1\n\nprint(f"Total spaces found: {space_count}")`,
        outputCode: "Total spaces found: 4",
      },
      {
        subTitle: "Exercise 8: Disjoint Set Check",
        text: "WAP to check if two lists share any common elements. Using Sets makes this check highly efficient compared to nested loops.",
        list: [
          "Hint: Convert both lists to sets first.",
          "Operation: Use the intersection() method to find shared elements.",
          "Logic: If the length of the intersection is 0, the lists share no common elements.",
        ],
        code: `# Checking for common elements\nlist1 = [1, 2, 3, 4]\nlist2 = [5, 6, 7, 8]\n\n# Convert to sets for comparison\nset1, set2 = set(list1), set(list2)\ncommon = set1.intersection(set2)\n\nif len(common) == 0:\n    print("No common elements found.")\nelse:\n    print(f"Shared elements: {common}")`,
        outputCode: "No common elements found.",
      },
      {
        subTitle: "Exercise 9: Duplicate Detection",
        text: "Given a list, print all elements that appear more than once. This utilizes two sets: one to track seen items and one to store duplicates.",
        list: [
          "Logic: Iterate through the list and check if an item has already been added to a 'seen' set.",
          "Discovery: If it has been seen, add it to a 'duplicates' set.",
          "Efficiency: This approach identifies duplicates in a single pass through the data.",
        ],
        code: `# Identifying duplicates using sets\nnums = [1, 2, 3, 1, 2, 4, 5, 2]\nseen = set()\nduplicates = set()\n\nfor n in nums:\n    if n in seen:\n        duplicates.add(n)\n    seen.add(n)\n\nprint(f"Duplicates found: {list(duplicates)}")`,
        outputCode: "Duplicates found: [1, 2]",
      },
      {
        subTitle: "Exercise 10: Unique Character Analysis",
        text: "WAP that takes a string from the user and identifies all unique characters present within it, along with the total count of those unique items.",
        list: [
          "Goal: Filter out all duplicate characters from a user-provided string.",
          "Set Conversion: By converting a string to a set, Python automatically eliminates all repeating characters.",
          "Unique Count: Use the len() function on the resulting set to find the total number of distinct characters.",
          "Practicality: This is a fundamental technique for data cleaning and text analysis in software systems.",
        ],
        code: `# Unique character extraction\ntext = input("Enter a string: ") # e.g., 'hello'\nunique_chars = set(text)\n\nprint(f"All unique characters: {unique_chars}")\nprint(f"Count of unique characters: {len(unique_chars)}")`,
        outputCode:
          "Enter a string: hello\nAll unique characters: {'h', 'e', 'l', 'o'}\nCount of unique characters: 4",
      },

      {
        subTitle: "Q1: Palindrome Checker",
        text: "A palindrome is a string which is the same when read forward and backward (e.g., 'madam', 'racecar').",
        list: [
          "Logic: Compare the original string with its reversed version.",
          "Slicing Method: Use word[::-1] to quickly reverse the string in Python.",
          "Loop Method: Alternatively, use a loop to reverse the string manually.",
        ],
        code: 'word = input("Enter a word: ")\nif(word == word[::-1]):\n    print("It is a palindrome")\nelse:\n    print("Not a palindrome")',
        outputCode: "Enter a word: madam\nIt is a palindrome",
      },
      {
        subTitle: "Q2 & Q3: List Operations",
        text: "Mastering list aggregation and merging is essential for processing bulk data effectively.",
        list: [
          "Average Calculation: Compute the sum of all integers and divide by the total count.",
          "Merging: Join two lists of integers provided by the user into one.",
          "Sorting: Use the .sort() method to organize the merged list in ascending order.",
        ],
        code: "# Q3 Example: Merge and Sort\nlist1 = [1, 2, 7]\nlist2 = [2, 4, 5]\nresult = list1 + list2\nresult.sort()\nprint(result)",
        outputCode: "[1, 2, 2, 4, 5, 7]",
      },
      {
        subTitle: "Data Filtering & Sets",
        text: "Efficient data filtering and set operations are crucial for handling collections of data with specific criteria.",
        list: [
          "Tuple Filtering (Q4): Separate a master tuple into distinct tuples for even and odd numbers.",
          "Space Counting (Q7): Iterate through a string to count the total number of spaces.",
          "Disjoint Check (Q8): Use sets to efficiently check if two lists share any common elements.",
          "Duplicate Detection (Q9): Use sets to identify and print all elements that appear more than once.",
        ],
        code: '# Q8: Checking for shared elements\nset1 = {1, 2, 3}\nset2 = {3, 4, 5}\ncommon = set1.intersection(set2)\nprint(f"Common elements: {common}")',
        outputCode: "Common elements: {3}",
      },
      {
        subTitle: "Dictionary & Set Analysis",
        text: "Dictionaries and sets are powerful tools for organizing and analyzing data efficiently.",
        list: [
          "Menu-based Mapping (Q5): Create a student dictionary supporting Add, Update, Search, and Display operations.",
          "Length Mapping (Q6): Transform a list of words into a dictionary mapping words to their character lengths.",
          "Unique Character Analysis (Q10): Use a set to identify all unique characters in a string and their count.",
        ],
        code: '# Q6: Word Length Map\nwords = ["apple", "banana"]\nword_map = {word: len(word) for word in words}\nprint(word_map)',
        outputCode: "{'apple': 5, 'banana': 6}",
      },
      {
        subTitle: "OOP: Objects & Behaviors",
        text: "Object-Oriented Programming (OOP) models real-world entities using classes and objects, encapsulating data and behaviors together.",
        list: [
          "BankAccount (Q1): Implement a class with account_number, owner_name, and balance.",
          "Methods: Add logic for deposit(), withdraw(), and check_balance().",
          "Book Class (Q2): Manage books with review lists and methods to add or count reviews.",
        ],
        code: "class BankAccount:\n    def __init__(self, acc_no, owner, bal):\n        self.acc_no = acc_no\n        self.owner = owner\n        self.balance = bal\n\n    def deposit(self, amount):\n        self.balance += amount\n        return self.balance",
      },
      {
        subTitle: "Encapsulation & Validation",
        text: "Use private attributes (starting with an underscore) to protect data from direct external modification.",
        list: [
          "Private Members: Implement _name, _roll_no, and _marks.",
          "Getters/Setters: Create methods to retrieve and update private data safely.",
          "Validation Logic: Ensure marks are 1-100 and roll numbers are positive.",
        ],
        code: "class Student:\n    def __init__(self, name, marks):\n        self._name = name\n        self.set_marks(marks)\n\n    def set_marks(self, val):\n        if 1 <= val <= 100: self._marks = val",
      },
      {
        subTitle: "Inheritance & Abstract Classes",
        text: "Leverage inheritance to create specialized classes from a common base, enforcing method implementation through abstraction.",
        list: [
          "Vehicle Hierarchy (Q5): Create a base Vehicle class with specific Car and Bike subclasses.",
          "Abstract Requirements (Q6): Define an abstract Employee class with a calculate_salary() method.",
          "Mandatory Overriding: Ensure Intern, FullTime, and Contract subclasses implement their own salary logic.",
        ],
      },
      {
        subTitle: "Polymorphism & Constructors",
        text: "Polymorphism allows methods to behave differently based on the object calling them, while constructor overloading can be simulated using default parameters.",
        list: [
          "Shape Overriding (Q4): Override the area() method for Circle, Rectangle, and Triangle subclasses.",
          "Default Parameters (Q7): Use default values to simulate constructor overloading for Person(name, age, address).",
          "Logic: Handle cases where only a name is provided versus full contact details.",
        ],
      },
      {
        subTitle: "Multiple Inheritance",
        text: "Model complex biological or organizational relationships where a child class combines features from several parents.",
        list: [
          "Base Classes: Define Herbivore, Carnivore, and Omnivore with unique behaviors.",
          "Derived Class: Create a Bear class that inherits from all three to showcase multiple inheritance.",
          "Method Resolution: Observe how Python handles attributes shared between parent classes.",
        ],
      },
      {
        subTitle: "Project: OOP Chat System",
        text: "Design a simple chat application using OOP principles to manage users, messages, and chatrooms.",
        list: [
          "Class Model: Implement User, Message, and ChatRoom classes.",
          "Messaging Logic: Handle the sending of messages and viewing chat history.",
          "Room Management: Implement functions for users joining and leaving the chatroom.",
        ],
      },
      {
        subTitle: "Lab: Persistent Storage",
        text: "Learn to handle file streams for creating logs and storing user-generated content. These solutions emphasize proper opening modes for writing ('w') and appending ('a').",
        list: [
          "Q1. Name Storage: Create a program that writes five user-entered names into 'names.txt' and reads them back.",
          "Q2. Logger: Implement an append-only log file ('log.txt') that adds success messages without deleting previous entries.",
          "Resource Management: Using the 'with' keyword ensures files are closed safely after each operation.",
        ],
        code: `# Q1 Solution: Write and Read names
with open("names.txt", "w") as f:
    for i in range(5):
        name = input(f"Enter name {i+1}: ")
        f.write(name + "\\n")

with open("names.txt", "r") as f:
    print("\\nStored Names:\\n" + f.read())`,
        outputCode: "Enter name 1: Rahul\\n...\\nStored Names:\\nRahul\\n...",
      },
      {
        subTitle: "Lab: Data Processing",
        text: "Master the conversion of complex Python objects into JSON format for web APIs and use list comprehensions for high-performance data filtering.",
        list: [
          "Q3. Filtering Logic: Use list comprehension to filter a dataset, keeping only numbers greater than 15.",
          "Q4. JSON Interchange: Create, save, and update a 'cities.json' file using the json.dump() and json.load() methods.",
          "Serialization: dumps() converts a dictionary to a string, while loads() reverses the process.",
        ],
        code: `# Q3 Solution: Filter numbers > 15
nums = [5, 10, 15, 20, 25]
filtered = [x for x in nums if x > 15]
print(f"Filtered List: {filtered}")

# Q4 Solution: Save City Data
import json
cities = {"Delhi": 32000000, "Mumbai": 21000000}
with open("cities.json", "w") as f:
    json.dump(cities, f)`,
        outputCode: "Filtered List: [20, 25]",
      },
      {
        subTitle: "Lab: Defensive Programming",
        text: "Programs often fail when external resources (like files) are missing. Use try-except blocks to handle these 'edge cases' gracefully.",
        list: [
          "Q5. File Guard: Write a script that attempts to open a missing file and catches the FileNotFoundError.",
          "The Try Block: Wrap the risky open() call inside a try block.",
          "The Except Block: Provide a user-friendly 'File not found!' message instead of a technical crash log.",
        ],
        code: `# Q5 Solution: Catch Missing File Error
try:
    with open("data.txt", "r") as f:
        print(f.read())
except FileNotFoundError:
    print("Error: 'data.txt' not found! Please create the file first.")`,
        outputCode:
          "Error: 'data.txt' not found! Please create the file first.",
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
