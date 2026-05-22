# Week 2 
>All programs in this folder are written in JavaScript and executed using Node.js


##  Folder Structure
Week-2/
├── Array-Operations-Simple/
│   ├── marksList.js
│   ├── temperatureAnalyzer.js
│   └── onlineProcessor.js
├── Array-Operations-Advanced/
│   ├── studentPerformance.js
│   ├── shoppingCart.js
│   ├── moviePlatform.js
│   ├── transactionAnalyzer.js
│   └── payrollProcessor.js
├── Shallow-DeepCopy/
│   ├── shallowCopy.js
│   └── deepCopy.js
├── SpreadOperator-RestParameter/
│   ├── spreadOperator.js
│   └── restParameter.js
├── Timer-Functions/
│   ├── OtpSimulator.js
│   ├── ExamPortal_Simulator.js
│   ├── LibrarySystem.js
│   └── Promise_Asynchronous.js
└── Task-Management-System/
    ├── app.js
    ├── task.js
    ├── validator.js
    └── E-Commerce_shopping/
        ├── app.js
        ├── product.js
        ├── cart.js
        ├── payment.js
        └── discount.js
```

##  Programs

### Array-Operations-Simple
| File | What I Built |
|------|--------------|
| `marksList.js` | Filter pass students and add grace marks using `filter()` and `map()` |
| `temperatureAnalyzer.js` | Filter temperatures above 35°C from daily readings |
| `onlineProcessor.js` | Filter course names by length using array methods |

###  Array-Operations-Advanced
| File | What I Built |
|------|--------------|
| `studentPerformance.js` | Student dashboard with grades and pass/fail status |
| `shoppingCart.js` | Cart summary with total price for in-stock items |
| `moviePlatform.js` | Filter movies by genre and calculate average rating |
| `transactionAnalyzer.js` | Separate credits/debits and calculate bank balance |
| `payrollProcessor.js` | Calculate department-wise salary using `reduce()` |

### 🔹 Shallow-DeepCopy
| File | What I Built |
|------|--------------|
| `shallowCopy.js` | Understand how shallow copy affects nested objects |
| `deepCopy.js` | Use deep copy to safely clone objects with nested data |

###  SpreadOperator-RestParameter
| File | What I Built |
|------|--------------|
| `spreadOperator.js` | Merge and copy arrays using spread (`...`) |
| `restParameter.js` | Accept dynamic number of arguments using rest (`...`) |

###  Timer-Functions
| File | What I Built |
|------|--------------|
| `OtpSimulator.js` | 10-second OTP countdown with resend using `setInterval` |
| `ExamPortal_Simulator.js` | Delayed exam result messages using `setTimeout` |
| `LibrarySystem.js` | Library book management system using Classes |
| `Promise_Asynchronous.js` | Basic Promise with resolve/reject using async logic |

###  Task-Management-System
| File | What I Built |
|------|--------------|
| `task.js` | Add and retrieve tasks with validation |
| `validator.js` | Validate title, priority, and due date inputs |
| `app.js` | Entry point that calls task functions using ES modules |

###  E-Commerce Shopping (Mini Project)
| File | What I Built |
|------|--------------|
| `product.js` | Product listing, search, and stock management |
| `cart.js` | Add, remove, update quantity in cart |
| `payment.js` | Process payment with method validation |
| `discount.js` | Apply coupon codes with percentage and flat discounts |
| `app.js` | Main file that connects all modules together |



##  What I Learned

- Array methods — `filter()`, `map()`, `reduce()`, `find()`, `findIndex()`
- Difference between **shallow copy** and **deep copy**
- **Spread operator** and **rest parameters**
- `setTimeout` and `setInterval` for timer-based logic
- **Promises** and basic asynchronous operations
- **Classes** and Object-Oriented Programming basics
- **ES Modules** — `import` / `export` across files

##  How to Run

```bash
node filename.js
```

**For ES Module files (import/export):**
```bash
node --experimental-vm-modules filename.js
```

>Make sure Node.js is installed before running.
