"use client";

import React, { useState } from "react";
import Link from "next/link";


// Expanded static quiz data with multiple difficulties and topics
const staticQuizzes = [
  // ================================
  // Programming
  // ================================
  {
    "id": 1,
    "category": "Programming",
    "topic": "JavaScript Basics",
    "difficulty": "Easy",
    "questions": [
      {
        "question": "Which keyword is used to declare a variable in JavaScript?",
        "options": ["var", "let", "const", "All of the above"],
        "correctAnswer": "All of the above"
      },
      {
        "question": "Which symbol is used for single-line comments in JavaScript?",
        "options": ["//", "/* */", "<!-- -->", "#"],
        "correctAnswer": "//"
      },
      {
        "question": "What is the output of `typeof 42` in JavaScript?",
        "options": ["string", "number", "boolean", "undefined"],
        "correctAnswer": "number"
      },
      {
        "question": "Which function is used to display a message in an alert box?",
        "options": ["console.log()", "alert()", "print()", "msg()"],
        "correctAnswer": "alert()"
      },
      {
        "question": "Which of the following is used to check equality in JavaScript?",
        "options": ["=", "==", "===", "Both '==' and '==='"],
        "correctAnswer": "Both '==' and '==='"
      },
      {
        "question": "Which data type is used to store multiple values in a single variable?",
        "options": ["String", "Array", "Object", "Boolean"],
        "correctAnswer": "Array"
      },
      {
        "question": "Which method is used to remove the last element from an array in JavaScript?",
        "options": ["pop()", "shift()", "splice()", "slice()"],
        "correctAnswer": "pop()"
      },
      {
        "question": "Which JavaScript operator is used for logical AND?",
        "options": ["&&", "||", "!", "&"],
        "correctAnswer": "&&"
      },
      {
        "question": "Which function is used to convert a string to an integer in JavaScript?",
        "options": ["parseInt()", "parseFloat()", "toFixed()", "toString()"],
        "correctAnswer": "parseInt()"
      },
      {
        "question": "Which object is used to store key-value pairs in JavaScript?",
        "options": ["Array", "Function", "Object", "Set"],
        "correctAnswer": "Object"
      },
      {
        "question": "What will `Boolean('false')` return in JavaScript?",
        "options": ["true", "false", "undefined", "NaN"],
        "correctAnswer": "true"
      },
      {
        "question": "Which method is used to join two or more strings in JavaScript?",
        "options": ["concat()", "merge()", "join()", "combine()"],
        "correctAnswer": "concat()"
      }
    ]
  },
  {
    "id": 2,
    "category": "Programming",
    "topic": "Java OOP Concepts",
    "difficulty": "Medium",
    "questions": [
      {
        "question": "Which keyword is used to inherit a class in Java?",
        "options": ["extends", "implements", "inherits", "import"],
        "correctAnswer": "extends"
      },
      {
        "question": "Which concept allows multiple methods with the same name but different parameters?",
        "options": ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
        "correctAnswer": "Polymorphism"
      },
      {
        "question": "Which access modifier allows a member to be accessed only within the same package?",
        "options": ["private", "protected", "public", "default"],
        "correctAnswer": "default"
      },
      {
        "question": "What is the process of hiding implementation details and only exposing necessary parts?",
        "options": ["Encapsulation", "Polymorphism", "Abstraction", "Inheritance"],
        "correctAnswer": "Abstraction"
      },
      {
        "question": "Which Java feature restricts direct access to an object's data and methods?",
        "options": ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
        "correctAnswer": "Encapsulation"
      },
      {
        "question": "Which keyword is used to implement multiple interfaces in Java?",
        "options": ["extends", "implements", "interface", "abstract"],
        "correctAnswer": "implements"
      },
      {
        "question": "Which class serves as the root of the Java class hierarchy?",
        "options": ["Object", "Super", "Base", "Root"],
        "correctAnswer": "Object"
      },
      {
        "question": "Which type of class cannot be instantiated in Java?",
        "options": ["Abstract class", "Final class", "Static class", "Concrete class"],
        "correctAnswer": "Abstract class"
      },
      {
        "question": "Which OOP principle ensures that a subclass provides its own implementation of a method from the superclass?",
        "options": ["Overloading", "Overriding", "Encapsulation", "Composition"],
        "correctAnswer": "Overriding"
      },
      {
        "question": "What is the main advantage of using interfaces in Java?",
        "options": ["Multiple inheritance", "Faster execution", "Direct memory access", "Static binding"],
        "correctAnswer": "Multiple inheritance"
      },
      {
        "question": "Which Java keyword is used to prevent a method from being overridden?",
        "options": ["final", "static", "private", "protected"],
        "correctAnswer": "final"
      },
      {
        "question": "Which statement is true about Java inheritance?",
        "options": [
          "Java allows multiple inheritance through classes",
          "A subclass can inherit private members from a parent class",
          "A subclass must call the parent class constructor explicitly",
          "A subclass can override non-static methods from a parent class"
        ],
        "correctAnswer": "A subclass can override non-static methods from a parent class"
      }
    ]
  },  
    {
      "id": 3,
      "category": "Programming",
      "topic": "Advanced C++",
      "difficulty": "Hard",
      "questions": [
        
       
        {
          "question": "Which C++ feature allows a class to have multiple base classes?",
          "options": ["Multiple inheritance", "Templates", "Polymorphism", "Encapsulation"],
          "correctAnswer": "Multiple inheritance"
        },
        {
          "question": "What is the main advantage of `std::move` in C++?",
          "options": ["Increases performance by avoiding deep copies", "Removes memory leaks", "Reduces compilation time", "Increases memory size"],
          "correctAnswer": "Increases performance by avoiding deep copies"
        },
        {
          "question": "Which C++ feature enables compile-time polymorphism?",
          "options": ["Function overloading", "Virtual functions", "Dynamic dispatch", "Smart pointers"],
          "correctAnswer": "Function overloading"
        },
        {
          "question": "What is the purpose of `std::enable_if` in C++?",
          "options": [
            "To conditionally enable template functions",
            "To prevent multiple inheritance",
            "To enhance runtime polymorphism",
            "To manage dynamic memory allocation"
          ],
          "correctAnswer": "To conditionally enable template functions"
        },
       
        {
          "question": "What is the purpose of the `constexpr` keyword in C++?",
          "options": [
            "To define expressions that are evaluated at compile time",
            "To make variables immutable",
            "To allocate memory dynamically",
            "To enable type inference"
          ],
          "correctAnswer": "To define expressions that are evaluated at compile time"
        },
        {
          "question": "Which C++ feature allows objects to be initialized directly into a container without copying?",
          "options": ["Emplace", "Push_back", "Insert", "Append"],
          "correctAnswer": "Emplace"
        },
        {
          "question": "Which of the following is a correct way to prevent a class from being inherited?",
          "options": ["Mark the class as `final`", "Use `private` inheritance", "Declare a private destructor", "Delete the constructor"],
          "correctAnswer": "Mark the class as `final`"
        },
        {
          "question": "What does `std::optional` provide in C++?",
          "options": [
            "A way to represent an optional value without using pointers",
            "A substitute for `std::vector`",
            "A method for dynamic memory allocation",
            "A type that ensures a value is always present"
          ],
          "correctAnswer": "A way to represent an optional value without using pointers"
        },
       
        {
          "question": "What is the role of `std::forward` in C++?",
          "options": [
            "To perfectly forward arguments while preserving their value category",
            "To move objects from one scope to another",
            "To initialize a thread",
            "To store an optional value"
          ],
          "correctAnswer": "To perfectly forward arguments while preserving their value category"
        },
        {
          "question": "Which standard library feature enables safe concurrent access to a shared resource?",
          "options": ["Mutex", "Smart pointers", "Lambda functions", "Virtual functions"],
          "correctAnswer": "Mutex"
        },
        {
          "question": "Which of the following is an advantage of using `std::variant` over `union`?",
          "options": [
            "It is type-safe and prevents undefined behavior",
            "It can only hold integral types",
            "It does not require any additional memory",
            "It has the same behavior as `union` in C"
          ],
          "correctAnswer": "It is type-safe and prevents undefined behavior"
        },
        {
          "question": "Which of the following best describes the 'Rule of Five' in C++?",
          "options": [
            "A guideline for managing resources in classes with dynamic memory",
            "A rule for writing C++ functions",
            "A performance optimization technique",
            "A debugging method in C++"
          ],
          "correctAnswer": "A guideline for managing resources in classes with dynamic memory"
        }
      ]
    },
    {
      "id": 4,
      "category": "Programming",
      "topic": "Python Basics",
      "difficulty": "Easy",
      "questions": [
        {
          "question": "Which keyword is used to define a function in Python?",
          "options": ["def", "function", "fun", "define"],
          "correctAnswer": "def"
        },
        {
          "question": "What is the output of `print(3 + 4 * 2)` in Python?",
          "options": ["14", "11", "10", "8"],
          "correctAnswer": "11"
        },
        {
          "question": "Which symbol is used to start a comment in Python?",
          "options": ["//", "/* */", "#", "--"],
          "correctAnswer": "#"
        },
        {
          "question": "Which data type is used to store a sequence of characters in Python?",
          "options": ["int", "float", "str", "bool"],
          "correctAnswer": "str"
        },
        {
          "question": "Which function is used to get the length of a list in Python?",
          "options": ["size()", "length()", "count()", "len()"],
          "correctAnswer": "len()"
        },
        {
          "question": "Which loop is used when the number of iterations is unknown?",
          "options": ["for", "while", "do-while", "repeat"],
          "correctAnswer": "while"
        },
        {
          "question": "What will `type(10.5)` return in Python?",
          "options": ["int", "float", "double", "str"],
          "correctAnswer": "float"
        },
        {
          "question": "How do you print 'Hello, World!' in Python?",
          "options": ["echo 'Hello, World!'", "printf('Hello, World!')", "print('Hello, World!')", "System.out.print('Hello, World!')"],
          "correctAnswer": "print('Hello, World!')"
        },
        {
          "question": "Which of the following is NOT a valid variable name in Python?",
          "options": ["my_var", "_myVar", "2var", "var_name"],
          "correctAnswer": "2var"
        },
        {
          "question": "Which function is used to convert a string to an integer in Python?",
          "options": ["int()", "str()", "float()", "toInt()"],
          "correctAnswer": "int()"
        },
        {
          "question": "Which operator is used for exponentiation in Python?",
          "options": ["^", "**", "//", "*"],
          "correctAnswer": "**"
        },
        {
          "question": "What will `bool([])` return in Python?",
          "options": ["True", "False", "None", "Error"],
          "correctAnswer": "False"
        }
      ]
    },
    
  // ================================
  // Business and Finance
  // ================================
  {
    id: 5,
    category: "Business and Finance",
    topic: "Introduction to Finance",
    difficulty: "Easy",
    questions: [

        {
          question: "ROI stands for:",
          options: ["Return on Investment", "Rate of Income", "Revenue on Interest", "Return on Insurance"],
          correctAnswer: "Return on Investment"
        },
        {
          "question": "Which of the following is NOT a financial statement?",
          "options": ["Income Statement", "Balance Sheet", "Cash Flow Statement", "Tax Return Statement"],
          "correctAnswer": "Tax Return Statement"
        },
        {
          "question": "What is the primary goal of financial management?",
          "options": ["Maximizing shareholder wealth", "Minimizing costs", "Increasing market share", "Maximizing employee benefits"],
          "correctAnswer": "Maximizing shareholder wealth"
        },
        {
          "question": "Which financial statement shows a company’s profitability?",
          "options": ["Balance Sheet", "Income Statement", "Cash Flow Statement", "Statement of Retained Earnings"],
          "correctAnswer": "Income Statement"
        },
        {
          "question": "What does 'liquidity' refer to in finance?",
          "options": ["A company's ability to turn assets into cash", "The amount of debt a company has", "The company’s net profit", "The market value of assets"],
          "correctAnswer": "A company's ability to turn assets into cash"
        },
        {
          "question": "Which of these is an example of a current asset?",
          "options": ["Machinery", "Building", "Accounts Receivable", "Patent"],
          "correctAnswer": "Accounts Receivable"
        },
        {
          "question": "What does GAAP stand for?",
          "options": ["General Analysis and Accounting Principles", "Global Accounting and Auditing Policies", "Generally Accepted Accounting Principles", "Governmental Accounting and Auditing Procedures"],
          "correctAnswer": "Generally Accepted Accounting Principles"
        },
        {
          "question": "Which financial statement shows a company’s financial position at a specific point in time?",
          "options": ["Balance Sheet", "Income Statement", "Cash Flow Statement", "Statement of Retained Earnings"],
          "correctAnswer": "Balance Sheet"
        },
        {
          "question": "Which of these is NOT a type of business entity?",
          "options": ["Sole Proprietorship", "Partnership", "Corporation", "Credit Bureau"],
          "correctAnswer": "Credit Bureau"
        },
        {
          "question": "What is the primary role of the Federal Reserve?",
          "options": ["Setting income tax rates", "Regulating the banking system", "Issuing corporate bonds", "Providing loans to individuals"],
          "correctAnswer": "Regulating the banking system"
        },
        {
          "question": "Which of the following is an example of a liability?",
          "options": ["Cash", "Accounts Payable", "Inventory", "Revenue"],
          "correctAnswer": "Accounts Payable"
        },
        {
          question: "What does 'equity' represent in accounting?",
          options: ["Total assets minus total liabilities", "Company profits", "Total revenue generated", "Stock market value"],
          correctAnswer: "Total assets minus total liabilities"
        },
    ],
  },
  
    {
      "id": 6,
      "category": "Business and Finance",
      "topic": "Corporate Finance",
      "difficulty": "Medium",
      "questions": [
        {
          "question": "Which term describes a company's mix of debt and equity financing?",
          "options": ["Capital Structure", "Budget Allocation", "Cash Flow Analysis", "Financial Forecasting"],
          "correctAnswer": "Capital Structure"
        },
        {
          "question": "Which ratio measures a company's ability to meet short-term obligations?",
          "options": ["Current Ratio", "Price-to-Earnings Ratio", "Debt-to-Equity Ratio", "Return on Assets"],
          "correctAnswer": "Current Ratio"
        },
        {
          "question": "What is the primary goal of corporate finance?",
          "options": ["Minimizing employee salaries", "Maximizing shareholder value", "Reducing tax payments", "Expanding product lines"],
          "correctAnswer": "Maximizing shareholder value"
        },
        {
          "question": "Which financial metric measures profitability by comparing net income to total revenue?",
          "options": ["Return on Investment", "Net Profit Margin", "Current Ratio", "Debt-to-Equity Ratio"],
          "correctAnswer": "Net Profit Margin"
        },
        {
          "question": "What is the term for the process of evaluating investment opportunities?",
          "options": ["Capital Budgeting", "Risk Management", "Asset Allocation", "Market Segmentation"],
          "correctAnswer": "Capital Budgeting"
        },
        {
          "question": "Which of the following is a source of long-term financing?",
          "options": ["Commercial Paper", "Retained Earnings", "Trade Credit", "Accounts Payable"],
          "correctAnswer": "Retained Earnings"
        },
        {
          "question": "What does WACC stand for in corporate finance?",
          "options": ["Weighted Average Cost of Capital", "Working Assets and Cash Control", "Worldwide Accounting Cost Control", "Wholesale Asset Cost Calculation"],
          "correctAnswer": "Weighted Average Cost of Capital"
        },
        {
          "question": "Which financial statement provides a snapshot of a company's financial position at a given time?",
          "options": ["Income Statement", "Balance Sheet", "Cash Flow Statement", "Statement of Retained Earnings"],
          "correctAnswer": "Balance Sheet"
        },
        {
          "question": "What is the purpose of financial leverage?",
          "options": ["To decrease company risk", "To increase the potential return on investment", "To eliminate the need for equity financing", "To lower tax obligations"],
          "correctAnswer": "To increase the potential return on investment"
        },
        {
          "question": "Which type of bond is issued by a corporation to raise long-term capital?",
          "options": ["Municipal Bond", "Treasury Bond", "Corporate Bond", "Savings Bond"],
          "correctAnswer": "Corporate Bond"
        },
        {
          "question": "Which method is commonly used to assess the profitability of a project?",
          "options": ["Break-even Analysis", "Net Present Value (NPV)", "Depreciation Schedule", "Working Capital Calculation"],
          "correctAnswer": "Net Present Value (NPV)"
        },
        {
          "question": "What does a high debt-to-equity ratio indicate?",
          "options": ["The company has low risk", "The company is highly leveraged", "The company has excess cash reserves", "The company is not utilizing its assets efficiently"],
          "correctAnswer": "The company is highly leveraged"
        },
        
      ],
    },
    {
      "id": 7,
      "category": "Business and Finance",
      "topic": "Investment Strategies",
      "difficulty": "Hard",
      "questions": [
        {
          "question": "Which of the following best describes a 'short sale' in the stock market?",
          "options": [
            "Buying low and selling high",
            "Selling borrowed shares, hoping to buy back at a lower price",
            "Investing in short-term government bonds",
            "Selling shares immediately after buying them"
          ],
          "correctAnswer": "Selling borrowed shares, hoping to buy back at a lower price"
        },
        {
          "question": "Which risk management technique involves offsetting potential losses in one asset with gains in another?",
          "options": ["Diversification", "Hedging", "Speculation", "Leverage"],
          "correctAnswer": "Hedging"
        },
        {
          "question": "What does the Sharpe Ratio measure in investment analysis?",
          "options": [
            "A stock's price volatility",
            "The excess return per unit of risk",
            "The likelihood of a market crash",
            "The effectiveness of a hedging strategy"
          ],
          "correctAnswer": "The excess return per unit of risk"
        },
        {
          "question": "Which investment strategy involves making small, frequent trades to profit from short-term market fluctuations?",
          "options": ["Scalping", "Value Investing", "Momentum Trading", "Index Investing"],
          "correctAnswer": "Scalping"
        },
        {
          "question": "Which of the following is a characteristic of a contrarian investor?",
          "options": [
            "Following the latest market trends",
            "Investing in assets when they are out of favor",
            "Buying stocks that show strong upward momentum",
            "Only investing in government-backed securities"
          ],
          "correctAnswer": "Investing in assets when they are out of favor"
        },
        {
          "question": "Which of the following is an example of passive investing?",
          "options": [
            "Day trading",
            "Index fund investing",
            "Buying and selling stocks based on technical analysis",
            "Short selling individual stocks"
          ],
          "correctAnswer": "Index fund investing"
        },
        {
          "question": "Which asset class is typically considered a safe-haven investment during economic uncertainty?",
          "options": ["Real Estate", "Cryptocurrency", "Government Bonds", "Commodities"],
          "correctAnswer": "Government Bonds"
        },
        {
          "question": "What is the primary goal of 'value investing'?",
          "options": [
            "Buying undervalued stocks and holding them long-term",
            "Buying high and selling higher",
            "Investing in high-growth startups",
            "Using leverage to maximize returns"
          ],
          "correctAnswer": "Buying undervalued stocks and holding them long-term"
        },
        {
          "question": "Which investment strategy focuses on buying stocks of companies expected to grow at an above-average rate compared to others?",
          "options": ["Growth Investing", "Value Investing", "Dividend Investing", "Index Investing"],
          "correctAnswer": "Growth Investing"
        },
        {
          "question": "What is a key risk of using leverage in investment strategies?",
          "options": [
            "Lower returns on investment",
            "Increased potential for higher losses",
            "Inability to sell assets",
            "Reduced portfolio diversification"
          ],
          "correctAnswer": "Increased potential for higher losses"
        },
        {
          "question": "Which of the following best defines the 'efficient market hypothesis' (EMH)?",
          "options": [
            "Markets are always irrational",
            "Stock prices fully reflect all available information",
            "Market trends can be predicted with technical analysis",
            "Only institutional investors can consistently outperform the market"
          ],
          "correctAnswer": "Stock prices fully reflect all available information"
        },
        {
          "question": "Which strategy involves buying stocks that have performed well recently and selling those that have underperformed?",
          "options": ["Momentum Investing", "Contrarian Investing", "Dividend Investing", "Index Investing"],
          "correctAnswer": "Momentum Investing"
        },
        
        
      ],
    },   
    {
      "id": 8,
      "category": "Business and Finance",
      "topic": "Financial Planning",
      "difficulty": "Medium",
      "questions": [
        {
          "question": "What is the primary goal of financial planning?",
          "options": [
            "Maximizing tax payments",
            "Ensuring sufficient funds for future goals",
            "Increasing immediate expenses",
            "Avoiding all financial risks"
          ],
          "correctAnswer": "Ensuring sufficient funds for future goals"
        },
        {
          "question": "Which financial document provides a summary of an individual's or company's assets, liabilities, and net worth?",
          "options": [
            "Income Statement",
            "Cash Flow Statement",
            "Balance Sheet",
            "Budget Plan"
          ],
          "correctAnswer": "Balance Sheet"
        },
        {
          "question": "What is the key benefit of creating an emergency fund?",
          "options": [
            "To invest in high-risk stocks",
            "To cover unexpected expenses without debt",
            "To pay off all credit card debt at once",
            "To increase tax liabilities"
          ],
          "correctAnswer": "To cover unexpected expenses without debt"
        },
        {
          "question": "Which of the following is a common rule of thumb for retirement savings?",
          "options": [
            "Save at least 10-15% of income annually",
            "Invest only in government bonds",
            "Withdraw all savings at retirement",
            "Avoid employer-sponsored retirement plans"
          ],
          "correctAnswer": "Save at least 10-15% of income annually"
        },
        {
          "question": "Which financial ratio is used to measure a company’s ability to pay its short-term obligations?",
          "options": [
            "Debt-to-Equity Ratio",
            "Current Ratio",
            "Price-to-Earnings Ratio",
            "Return on Investment"
          ],
          "correctAnswer": "Current Ratio"
        },
        {
          "question": "What is a common strategy to reduce tax liabilities legally?",
          "options": [
            "Tax evasion",
            "Investing in tax-advantaged accounts",
            "Ignoring tax laws",
            "Hiding income sources"
          ],
          "correctAnswer": "Investing in tax-advantaged accounts"
        },
        {
          "question": "Which of the following describes the concept of 'time value of money'?",
          "options": [
            "Money loses its value over time",
            "A dollar today is worth more than a dollar in the future",
            "Inflation has no effect on money",
            "Money value remains constant over time"
          ],
          "correctAnswer": "A dollar today is worth more than a dollar in the future"
        },
        {
          "question": "What is the primary purpose of diversification in investment planning?",
          "options": [
            "Maximizing exposure to a single asset class",
            "Reducing overall investment risk",
            "Investing in only high-risk stocks",
            "Focusing only on short-term gains"
          ],
          "correctAnswer": "Reducing overall investment risk"
        },
        {
          "question": "Which type of insurance is most commonly used to provide financial protection to dependents in case of the policyholder’s death?",
          "options": [
            "Health Insurance",
            "Auto Insurance",
            "Life Insurance",
            "Disability Insurance"
          ],
          "correctAnswer": "Life Insurance"
        },
        {
          "question": "What is the main advantage of using a budget?",
          "options": [
            "Eliminates all financial risks",
            "Helps track income and expenses",
            "Increases debt accumulation",
            "Avoids the need for emergency funds"
          ],
          "correctAnswer": "Helps track income and expenses"
        },
        {
          "question": "Which investment type is considered the least risky?",
          "options": [
            "Stocks",
            "Bonds",
            "Cryptocurrency",
            "Mutual Funds"
          ],
          "correctAnswer": "Bonds"
        },
        {
          "question": "What does 'liquidity' in finance refer to?",
          "options": [
            "The ability to buy stocks at a low price",
            "The ease of converting an asset into cash",
            "The amount of debt a person has",
            "The interest rate on loans"
          ],
          "correctAnswer": "The ease of converting an asset into cash"
        },
      ]
    },
     

  // ================================
  // Renewable Technology
  // ================================
  {
    "id": 9,
    "category": "Renewable Technology",
    "topic": "Solar Energy Fundamentals",
    "difficulty": "Easy",
    "questions": [
      {
        "question": "Which device converts sunlight into electricity?",
        "options": ["Solar panel", "Wind turbine", "Battery", "Generator"],
        "correctAnswer": "Solar panel"
      },
      {
        "question": "Which type of solar panel is most commonly used in residential installations?",
        "options": ["Monocrystalline", "Polycrystalline", "Thin-film", "All are equally common"],
        "correctAnswer": "Monocrystalline"
      },
      {
        "question": "What is the main source of energy for solar panels?",
        "options": ["Wind", "Water", "Sunlight", "Geothermal heat"],
        "correctAnswer": "Sunlight"
      },
      {
        "question": "Which component in a solar power system stores electricity for later use?",
        "options": ["Inverter", "Battery", "Transformer", "Solar cell"],
        "correctAnswer": "Battery"
      },
      {
        "question": "What is the primary benefit of using solar energy?",
        "options": [
          "It produces unlimited pollution",
          "It is a renewable and clean source of energy",
          "It only works at night",
          "It is more expensive than fossil fuels"
        ],
        "correctAnswer": "It is a renewable and clean source of energy"
      },
      {
        "question": "Which of the following is NOT required for a basic solar power system?",
        "options": ["Solar panels", "Inverter", "Wind turbine", "Battery (optional)"],
        "correctAnswer": "Wind turbine"
      },
      {
        "question": "What happens when sunlight hits a solar panel?",
        "options": [
          "It generates heat only",
          "It creates an electric current",
          "It stores energy in a transformer",
          "It causes the panel to spin"
        ],
        "correctAnswer": "It creates an electric current"
      },
      {
        "question": "Which unit is used to measure the power output of a solar panel?",
        "options": ["Kilowatt-hour (kWh)", "Joule", "Volt", "Ampere"],
        "correctAnswer": "Kilowatt-hour (kWh)"
      },
      {
        "question": "Which country is currently one of the largest producers of solar energy?",
        "options": ["China", "Canada", "Brazil", "Russia"],
        "correctAnswer": "China"
      },
      {
        "question": "What is the lifespan of most solar panels before they lose efficiency?",
        "options": ["5 years", "10 years", "25-30 years", "100 years"],
        "correctAnswer": "25-30 years"
      },
      {
        "question": "What is the main disadvantage of solar energy?",
        "options": [
          "It produces harmful gases",
          "It does not work at night without battery storage",
          "It is not available in most countries",
          "It is more expensive than all other energy sources"
        ],
        "correctAnswer": "It does not work at night without battery storage"
      },
      {
        "question": "What is the role of an inverter in a solar power system?",
        "options": [
          "Stores solar energy",
          "Converts DC electricity to AC electricity",
          "Increases the amount of sunlight",
          "Cleans the solar panels"
        ],
        "correctAnswer": "Converts DC electricity to AC electricity"
      },
      
    ]
  },
  
  {
    "id": 10,
    "category": "Renewable Technology",
    "topic": "Wind Power Basics",
    "difficulty": "Medium",
    "questions": [
      {
        "question": "Which term describes the maximum energy that can be extracted from wind by a turbine?",
        "options": ["Betz limit", "Cut-in speed", "Rated power", "Tip-speed ratio"],
        "correctAnswer": "Betz limit"
      },
      {
        "question": "Wind turbines typically shut down to prevent damage at very high wind speeds, known as:",
        "options": ["Cut-out speed", "Gale force", "Storm limit", "Wind shear limit"],
        "correctAnswer": "Cut-out speed"
      },
      {
        "question": "What type of energy conversion occurs in a wind turbine?",
        "options": ["Thermal to electrical", "Kinetic to mechanical to electrical", "Chemical to electrical", "Nuclear to electrical"],
        "correctAnswer": "Kinetic to mechanical to electrical"
      },
      {
        "question": "Which part of a wind turbine converts mechanical energy into electrical energy?",
        "options": ["Rotor", "Gearbox", "Generator", "Tower"],
        "correctAnswer": "Generator"
      },
      {
        "question": "Which factor has the greatest impact on the amount of energy a wind turbine can produce?",
        "options": ["Height of the tower", "Wind speed", "Blade color", "Material of the tower"],
        "correctAnswer": "Wind speed"
      },
      {
        "question": "What is the purpose of the yaw system in a wind turbine?",
        "options": [
          "To control the rotational speed of the blades",
          "To align the turbine with the wind direction",
          "To increase the power output",
          "To store excess electricity"
        ],
        "correctAnswer": "To align the turbine with the wind direction"
      },
      {
        "question": "Which of the following describes the 'capacity factor' of a wind turbine?",
        "options": [
          "The ratio of actual energy output to maximum possible output",
          "The efficiency of the turbine blades",
          "The amount of energy stored in the battery",
          "The speed at which a turbine starts generating power"
        ],
        "correctAnswer": "The ratio of actual energy output to maximum possible output"
      },
      {
        "question": "What is the typical lifespan of a modern wind turbine?",
        "options": ["5-10 years", "10-20 years", "20-25 years", "50 years or more"],
        "correctAnswer": "20-25 years"
      },
      {
        "question": "Which country has the highest installed wind power capacity as of recent years?",
        "options": ["United States", "Germany", "China", "Denmark"],
        "correctAnswer": "China"
      },
      {
        "question": "What is the primary reason offshore wind farms generate more power than onshore wind farms?",
        "options": [
          "Wind speeds are higher and more consistent over the ocean",
          "Turbines are larger in size",
          "Ocean water increases turbine efficiency",
          "There are no energy losses in offshore systems"
        ],
        "correctAnswer": "Wind speeds are higher and more consistent over the ocean"
      },
      {
        "question": "What does the term 'tip-speed ratio' refer to in wind energy?",
        "options": [
          "The ratio of the blade tip speed to wind speed",
          "The speed at which the wind turbine shuts down",
          "The minimum wind speed needed for power generation",
          "The angle of the turbine blades"
        ],
        "correctAnswer": "The ratio of the blade tip speed to wind speed"
      },
     
      {
        "question": "What is the function of the nacelle in a wind turbine?",
        "options": [
          "Houses key components like the generator and gearbox",
          "Stores excess wind energy",
          "Acts as a wind deflector",
          "Connects the blades to the tower"
        ],
        "correctAnswer": "Houses key components like the generator and gearbox"
      }
    ]
  },
  
  {
    "id": 11,
    "category": "Renewable Technology",
    "topic": "Advanced Renewable Systems",
    "difficulty": "Hard",
    "questions": [
      {
        "question": "Which term refers to the combination of solar, wind, and other renewables working together to power a grid?",
        "options": ["Hybrid system", "Microgrid synergy", "Sustainable integration", "All of the above"],
        "correctAnswer": "Hybrid system"
      },
      {
        "question": "Which technology allows excess renewable energy to be stored for later use?",
        "options": ["Battery storage", "Carbon capture", "Wave energy converter", "Grid balancing unit"],
        "correctAnswer": "Battery storage"
      },
      
      {
        "question": "What is the primary challenge of integrating renewable energy into the power grid?",
        "options": [
          "Variability and intermittency",
          "High fuel costs",
          "Lack of government support",
          "Low efficiency of renewable sources"
        ],
        "correctAnswer": "Variability and intermittency"
      },
      {
        "question": "Which of the following best describes 'demand response' in a smart grid system?",
        "options": [
          "Using consumer behavior to optimize energy use",
          "Storing energy during off-peak hours",
          "Balancing supply and demand with fossil fuel plants",
          "Shutting down renewable energy sources during peak hours"
        ],
        "correctAnswer": "Using consumer behavior to optimize energy use"
      },
      {
        "question": "Which renewable technology is most effective for baseload power generation?",
        "options": ["Geothermal", "Solar PV", "Wind", "Hydrogen fuel cells"],
        "correctAnswer": "Geothermal"
      },
      {
        "question": "What is the main advantage of using superconducting materials in renewable energy grids?",
        "options": [
          "They eliminate energy losses due to resistance",
          "They increase energy production",
          "They reduce the cost of wind turbines",
          "They generate power more efficiently than solar panels"
        ],
        "correctAnswer": "They eliminate energy losses due to resistance"
      },
      {
        "question": "Which of the following technologies helps maintain grid stability when renewable energy sources fluctuate?",
        "options": ["Flywheel energy storage", "Tidal power", "Biofuels", "Passive solar heating"],
        "correctAnswer": "Flywheel energy storage"
      },
      {
        "question": "Which renewable technology has the highest energy return on investment (EROI)?",
        "options": ["Hydropower", "Solar PV", "Wind power", "Biomass"],
        "correctAnswer": "Hydropower"
      },
      {
        "question": "What is the purpose of a power-to-gas system in renewable energy integration?",
        "options": [
          "Converting excess electricity into hydrogen or methane for storage",
          "Enhancing solar panel efficiency",
          "Capturing carbon emissions from power plants",
          "Generating electricity directly from organic waste"
        ],
        "correctAnswer": "Converting excess electricity into hydrogen or methane for storage"
      },
      {
        "question": "Which of the following is a key advantage of using artificial intelligence in renewable energy systems?",
        "options": [
          "Optimizing energy production and grid management",
          "Reducing the need for battery storage",
          "Replacing the need for human engineers",
          "Generating energy more efficiently than wind turbines"
        ],
        "correctAnswer": "Optimizing energy production and grid management"
      },
      {
        "question": "Which concept refers to a decentralized system of small-scale renewable energy producers and consumers?",
        "options": ["Microgrid", "Virtual power plant", "Smart metering", "Distributed energy network"],
        "correctAnswer": "Microgrid"
      },
      {
        "question": "Which of the following strategies can help improve energy security in a renewable-powered grid?",
        "options": [
          "Using diverse energy sources and storage technologies",
          "Relying solely on one renewable source",
          "Reducing grid capacity",
          "Shutting down fossil fuel backup systems"
        ],
        "correctAnswer": "Using diverse energy sources and storage technologies"
      }
    ]
  },
  
  // ================================
  // Personal Development
  // ================================
  {
    "id": 12,
    "category": "Personal Development",
    "topic": "Time Management Basics",
    "difficulty": "Easy",
    "questions": [
      {
        "question": "Which method suggests completing tasks in 25-minute intervals followed by short breaks?",
        "options": ["Pomodoro Technique", "Time Blocking", "Eisenhower Matrix", "GTD Method"],
        "correctAnswer": "Pomodoro Technique"
      },
      {
        "question": "Which is the biggest enemy of effective time management?",
        "options": ["Planning", "Procrastination", "Prioritizing tasks", "Goal setting"],
        "correctAnswer": "Procrastination"
      },
      {
        "question": "What is the first step in effective time management?",
        "options": ["Setting goals", "Checking emails", "Avoiding work", "Multitasking"],
        "correctAnswer": "Setting goals"
      },
      
      {
        "question": "Which technique involves assigning specific time slots to different tasks?",
        "options": ["Time Blocking", "Batch Processing", "Multitasking", "Delegation"],
        "correctAnswer": "Time Blocking"
      },
      {
        "question": "Which of the following is a benefit of good time management?",
        "options": ["Increased stress", "Lower productivity", "Better work-life balance", "More distractions"],
        "correctAnswer": "Better work-life balance"
      },
      {
        "question": "Which concept suggests that 80% of results come from 20% of efforts?",
        "options": ["Pareto Principle", "Time Blocking", "SMART Goals", "Eisenhower Matrix"],
        "correctAnswer": "Pareto Principle"
      },
      {
        "question": "Which habit can help improve time management?",
        "options": ["Setting priorities", "Checking social media frequently", "Working without breaks", "Ignoring deadlines"],
        "correctAnswer": "Setting priorities"
      },
      
      {
        "question": "Which strategy helps break large tasks into smaller, manageable steps?",
        "options": ["Chunking", "Multitasking", "Procrastination", "Mind Mapping"],
        "correctAnswer": "Chunking"
      },
      {
        "question": "What is the best way to handle overwhelming tasks?",
        "options": ["Postpone them", "Divide them into smaller tasks", "Ignore them", "Try to do everything at once"],
        "correctAnswer": "Divide them into smaller tasks"
      },
      {
        "question": "Which is a key principle of effective time management?",
        "options": ["Prioritizing tasks", "Doing everything at once", "Avoiding deadlines", "Skipping breaks"],
        "correctAnswer": "Prioritizing tasks"
      },
      {
        "question": "What should you do if a task is taking longer than expected?",
        "options": ["Adjust the schedule", "Give up on the task", "Rush through it carelessly", "Leave it incomplete"],
        "correctAnswer": "Adjust the schedule"
      },
      {
        "question": "Which of these is a good way to track time spent on tasks?",
        "options": ["Using a planner", "Guessing the time", "Ignoring time usage", "Avoiding time tracking"],
        "correctAnswer": "Using a planner"
      }
    ]
  },
  
  {
    "id": 13,
    "category": "Personal Development",
    "topic": "Communication Skills",
    "difficulty": "Medium",
    "questions": [
      {
        "question": "Which communication style focuses on respect for both oneself and others?",
        "options": ["Passive", "Aggressive", "Assertive", "Passive-Aggressive"],
        "correctAnswer": "Assertive"
      },
      {
        "question": "Which listening skill involves rephrasing what the speaker said to ensure understanding?",
        "options": ["Reflective listening", "Selective listening", "Empathetic listening", "Passive listening"],
        "correctAnswer": "Reflective listening"
      },
      {
        "question": "Which element of communication involves non-verbal cues such as body language and tone of voice?",
        "options": ["Verbal communication", "Non-verbal communication", "Written communication", "Digital communication"],
        "correctAnswer": "Non-verbal communication"
      },
      {
        "question": "What is the main goal of active listening?",
        "options": ["To prepare a response", "To truly understand the speaker", "To correct the speaker", "To think of something else"],
        "correctAnswer": "To truly understand the speaker"
      },
      {
        "question": "Which of the following is an example of a communication barrier?",
        "options": ["Clear articulation", "Cultural differences", "Active listening", "Positive body language"],
        "correctAnswer": "Cultural differences"
      },
      {
        "question": "What is the key component of non-verbal communication?",
        "options": ["Grammar", "Punctuation", "Facial expressions", "Word choice"],
        "correctAnswer": "Facial expressions"
      },
      {
        "question": "Which technique can improve verbal communication skills?",
        "options": ["Using complex words", "Speaking too fast", "Using clear and concise language", "Interrupting frequently"],
        "correctAnswer": "Using clear and concise language"
      },
      {
        "question": "Which strategy helps avoid misunderstandings in communication?",
        "options": ["Ignoring feedback", "Clarifying and summarizing", "Assuming intentions", "Speaking louder"],
        "correctAnswer": "Clarifying and summarizing"
      },
      {
        "question": "What is the main benefit of maintaining eye contact during a conversation?",
        "options": ["To intimidate the listener", "To establish trust and engagement", "To distract the speaker", "To show disagreement"],
        "correctAnswer": "To establish trust and engagement"
      },
      {
        "question": "Which form of communication is best for delivering complex or detailed information?",
        "options": ["Face-to-face conversation", "Email or written document", "Text messages", "Gestures"],
        "correctAnswer": "Email or written document"
      },
     
      {
        "question": "Which of the following is an example of effective feedback?",
        "options": [
          "\"You are always wrong!\"",
          "\"You never do anything right.\"",
          "\"I liked how you explained that concept clearly.\"",
          "\"Your ideas don’t make sense at all.\""
        ],
        "correctAnswer": "\"I liked how you explained that concept clearly.\""
      },
      {
        "question": "What is the role of empathy in effective communication?",
        "options": ["To ignore the speaker’s emotions", "To understand and connect with the speaker’s feelings", "To dominate the conversation", "To correct every mistake the speaker makes"],
        "correctAnswer": "To understand and connect with the speaker’s feelings"
      },
     
    ]
  },
  
  {
    "id": 14,
    "category": "Personal Development",
    "topic": "Leadership Techniques",
    "difficulty": "Hard",
    "questions": [
      {
        "question": "Which leadership style emphasizes collaboration, empathy, and helping subordinates grow?",
        "options": ["Servant leadership", "Autocratic leadership", "Laissez-faire leadership", "Transformational leadership"],
        "correctAnswer": "Servant leadership"
      },
      {
        "question": "Which theory suggests leaders adapt their style to the maturity level of followers?",
        "options": ["Situational Leadership Theory", "Path-Goal Theory", "Great Man Theory", "Contingency Theory"],
        "correctAnswer": "Situational Leadership Theory"
      },
      {
        "question": "What is the key characteristic of transformational leadership?",
        "options": ["Focusing on day-to-day tasks", "Maintaining rigid control", "Inspiring and motivating change", "Avoiding direct involvement"],
        "correctAnswer": "Inspiring and motivating change"
      },
     
     
      {
        "question": "In the Blake and Mouton leadership grid, which leadership style balances concern for people and production equally?",
        "options": ["Impoverished management", "Country club management", "Middle-of-the-road management", "Team management"],
        "correctAnswer": "Team management"
      },
      {
        "question": "Which leadership approach focuses on the development of employees through coaching and mentoring?",
        "options": ["Laissez-faire leadership", "Transactional leadership", "Coaching leadership", "Commanding leadership"],
        "correctAnswer": "Coaching leadership"
      },
      {
        "question": "Which of the following is a common challenge for transformational leaders?",
        "options": ["Lack of vision", "Resistance to change", "Avoiding risks", "Micromanaging employees"],
        "correctAnswer": "Resistance to change"
      },
      {
        "question": "Which leadership style works best when decisions must be made quickly without consulting subordinates?",
        "options": ["Democratic leadership", "Autocratic leadership", "Servant leadership", "Laissez-faire leadership"],
        "correctAnswer": "Autocratic leadership"
      },
      {
        "question": "Which concept suggests that the effectiveness of leadership depends on the interaction between leader characteristics and the situation?",
        "options": ["Situational Leadership", "Contingency Theory", "Path-Goal Theory", "Leader-Member Exchange Theory"],
        "correctAnswer": "Contingency Theory"
      },
      {
        "question": "Which leadership model emphasizes that successful leadership is based on the relationship between leaders and followers?",
        "options": ["Leader-Member Exchange (LMX) Theory", "Transformational Leadership", "Servant Leadership", "Transactional Leadership"],
        "correctAnswer": "Leader-Member Exchange (LMX) Theory"
      },
      {
        "question": "What is a key difference between transactional and transformational leadership?",
        "options": [
          "Transactional leaders focus on inspiring change, while transformational leaders focus on rewards and punishments",
          "Transactional leaders focus on rewards and punishments, while transformational leaders inspire change",
          "Transactional leaders encourage creativity, while transformational leaders enforce structure",
          "Transactional leaders are always more effective than transformational leaders"
        ],
        "correctAnswer": "Transactional leaders focus on rewards and punishments, while transformational leaders inspire change"
      },
      {
        "question": "Which of the following best describes a charismatic leader?",
        "options": ["A leader who relies on authority and rules", "A leader who uses personal charm and inspiration to influence followers", "A leader who delegates all decisions to subordinates", "A leader who focuses only on financial performance"],
        "correctAnswer": "A leader who uses personal charm and inspiration to influence followers"
      },
      {
        "question": "Which leadership style is often criticized for leading to low accountability and lack of structure?",
        "options": ["Democratic leadership", "Laissez-faire leadership", "Transformational leadership", "Transactional leadership"],
        "correctAnswer": "Laissez-faire leadership"
      }
    ]
  },{
    "id": 15,
    "category": "Personal Development",
    "topic": "Emotional Intelligence",
    "difficulty": "Medium",
    "questions": [
      {
        "question": "Which of the following is a key component of emotional intelligence (EQ)?",
        "options": ["IQ", "Self-awareness", "Technical skills", "Memory"],
        "correctAnswer": "Self-awareness"
      },
      {
        "question": "Which ability is essential for managing relationships effectively in emotional intelligence?",
        "options": ["Self-motivation", "Social skills", "Critical thinking", "Decision-making"],
        "correctAnswer": "Social skills"
      },
      {
        "question": "Which of the following best describes emotional intelligence?",
        "options": [
          "The ability to control others' emotions",
          "The ability to understand, manage, and influence emotions",
          "Having a high IQ",
          "Ignoring emotions in decision-making"
        ],
        "correctAnswer": "The ability to understand, manage, and influence emotions"
      },
      {
        "question": "Which psychologist is widely credited with popularizing the concept of emotional intelligence?",
        "options": ["Sigmund Freud", "Daniel Goleman", "Carl Jung", "Abraham Maslow"],
        "correctAnswer": "Daniel Goleman"
      },
      {
        "question": "Which element of emotional intelligence involves recognizing one's own emotions and their effects?",
        "options": ["Empathy", "Self-awareness", "Self-regulation", "Social skills"],
        "correctAnswer": "Self-awareness"
      },
      {
        "question": "What is the ability to stay calm and in control during stressful situations called?",
        "options": ["Empathy", "Motivation", "Self-regulation", "Adaptability"],
        "correctAnswer": "Self-regulation"
      },
      {
        "question": "Empathy in emotional intelligence refers to the ability to:",
        "options": [
          "Control others' emotions",
          "Understand and share the feelings of others",
          "Ignore emotions to make logical decisions",
          "Focus only on personal goals"
        ],
        "correctAnswer": "Understand and share the feelings of others"
      },
      {
        "question": "Which of the following is an example of low emotional intelligence?",
        "options": [
          "Remaining calm under pressure",
          "Blaming others for mistakes without self-reflection",
          "Listening actively to others",
          "Recognizing personal strengths and weaknesses"
        ],
        "correctAnswer": "Blaming others for mistakes without self-reflection"
      },
      {
        "question": "Which of the following strategies helps improve emotional intelligence?",
        "options": [
          "Ignoring emotions and focusing on logic",
          "Practicing active listening and self-reflection",
          "Avoiding social interactions",
          "Suppressing emotions rather than expressing them"
        ],
        "correctAnswer": "Practicing active listening and self-reflection"
      },
      {
        "question": "How can emotional intelligence contribute to workplace success?",
        "options": [
          "By fostering better teamwork and conflict resolution",
          "By focusing only on technical skills",
          "By reducing social interactions",
          "By ignoring emotions in decision-making"
        ],
        "correctAnswer": "By fostering better teamwork and conflict resolution"
      },
      {
        "question": "Which emotional intelligence skill helps a person stay motivated and focused on goals?",
        "options": ["Self-awareness", "Motivation", "Empathy", "Social skills"],
        "correctAnswer": "Motivation"
      },
      {
        "question": "Which of the following is a key benefit of emotional intelligence?",
        "options": [
          "Increased ability to manipulate people",
          "Stronger interpersonal relationships and better leadership",
          "Avoiding emotions in decision-making",
          "Ignoring self-awareness"
        ],
        "correctAnswer": "Stronger interpersonal relationships and better leadership"
      },
    ],
  },
  
];

const QuizPage = () => {
  // Search and filter states
  const [searchText, setSearchText] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter staticQuizzes based on search, difficulty, and category
  const filteredQuizzes = staticQuizzes.filter((quiz) => {
    const matchesTopic = quiz.topic.toLowerCase().includes(searchText.toLowerCase());
    const matchesDifficulty = selectedDifficulty
      ? quiz.difficulty === selectedDifficulty
      : true;
    const matchesCategory = selectedCategory
      ? quiz.category === selectedCategory
      : true;
    return matchesTopic && matchesDifficulty && matchesCategory;
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Quiz Page</h1>

      {/* Search and filter controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search topics..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded"
        />

        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="p-3 border border-gray-300 rounded"
        >
          <option value="">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 border border-gray-300 rounded"
        >
          <option value="">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Business and Finance">Business and Finance</option>
          <option value="Renewable Technology">Renewable Technology</option>
          <option value="Personal Development">Personal Development</option>
        </select>
      </div>

      {/* Display the filtered quizzes */}
      <div className="grid grid-cols-1 gap-6">
        {filteredQuizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="p-6 border border-gray-200 rounded-lg shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{quiz.topic}</h2>
            <p className="mb-1">
              <strong>Category:</strong> {quiz.category}
            </p>
            <p className="mb-1">
              <strong>Difficulty:</strong> {quiz.difficulty}
            </p>
            {/* Link to dynamic quiz detail page */}
            <Link href={`/dashboard/quiz/${quiz.id}`}>
              <button className="mt-4 bg-[#5A3FFF] text-white px-4 py-2 rounded">
                Start Quiz
              </button>
            </Link>
          </div>
        ))}
      </div>

      {filteredQuizzes.length === 0 && (
        <p className="text-center text-gray-600">
          No quizzes match your filters.
        </p>
      )}
    </div>
  );
};

export default QuizPage;
