---
title: "C++ Overview"
topic: true
summary: "Essential C++ concepts: variables, control structures, STL, OOP, threading, and debugging."
---

A practical C++ field guide. You will move from values in memory to objects and programs in motion, learning the language features that make C++ fast, expressive, and close to the hardware.

<div class="signal-grid">
<div>
<span class="signal-number">01 / Model</span>
<strong>Think close to the machine</strong>
<p>Types, pointers, and memory are not abstract details here. They are the material of the language.</p>
</div>
<div>
<span class="signal-number">02 / Compose</span>
<strong>Build useful pieces</strong>
<p>Functions, structs, classes, and the STL turn low-level ideas into readable programs.</p>
</div>
<div>
<span class="signal-number">03 / Coordinate</span>
<strong>Make work happen together</strong>
<p>Threads, exceptions, and tests help programs stay predictable under pressure.</p>
</div>
</div>

### How to use this guide

Read each section in two passes: first for the concept, then for a real example. After every code sample, change one value, add one case, or break one assumption. That small experiment is where the syntax becomes intuition.

---

## 01 / Variables and Basic Types

C++ gives you direct access to memory and types that map closely to hardware. Knowing the size and behavior of each type is the foundation for everything else.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Core types** — `int`, `float`, `double`, `char`, `bool`  
**Constants** — `const` for values that must not change at runtime  
**I/O** — `cin` / `cout` with formatters like `setw`, `setprecision`, `fixed`

</div>

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int itemCount = 5;
    double price = 10.5;
    const double TAX_RATE = 0.08;

    cout << "Item Count: " << itemCount << endl;
    cout << "Price: " << fixed << setprecision(2) << price << endl;
    cout << "Tax Rate: " << TAX_RATE << endl;

    return 0;
}
```

---

## 02 / Control Structures

Conditionals and loops are how a program makes decisions and repeats work. The patterns here — especially `switch` and loop control — show up constantly in everyday C++ code.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Decision making** — `if` / `else if` / `else`, `switch`  
**Loops** — `for`, `while`, `do-while`  
**Control** — `break` exits the loop, `continue` skips to the next iteration

</div>

```cpp
#include <iostream>
using namespace std;

int main() {
    int scores[] = {85, 42, 91, 67, 78};
    for (int i = 0; i < 5; ++i) {
        if (scores[i] < 50) {
            cout << "Score " << scores[i] << " failed. Skipping..." << endl;
            continue;
        }
        cout << "Score " << scores[i] << " passed." << endl;
    }
    return 0;
}
```

---

## 03 / Arrays and Vectors

Fixed-size arrays are simple but rigid. `std::vector` grows dynamically — essential when you do not know how many items you will need to store at runtime.

**Static arrays** — `int arr[10]`, fixed at compile time  
**Dynamic vectors** — `std::vector<T>`, resizes as needed  
**Multi-dimensional** — arrays of arrays for matrices and tables

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<double> prices = {10.5, 5.2, 8.9, 3.1};
    for (double price : prices) {
        cout << "Price: $" << price << endl;
    }
    return 0;
}
```

---

## 04 / Functions

Functions are how you turn a monolithic program into composable pieces. Write functions to calculate totals, validate input, and wrap repeated logic.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Pass by value** — copies the argument, safe but slower for large data  
**Pass by reference** — `const &` avoids copies while preventing modification  
**Default arguments** — optional parameters with fallback values

</div>

```cpp
#include <iostream>
using namespace std;

double calculateTotal(double price, double taxRate = 0.08) {
    return price + (price * taxRate);
}

int main() {
    double total = calculateTotal(50.0);
    cout << "Total: $" << total << endl;
    return 0;
}
```

---

## 05 / Pointers and References

Pointers give you direct access to memory addresses — the backbone of dynamic data structures and efficient parameter passing. References offer the same power with less risk.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Declare** — `int *ptr`  
**Address-of** — `&variable` gets the memory address  
**Dereference** — `*ptr` reads or writes the value at that address  
**Reference** — `int &ref = variable`, an alias that cannot be reseated

</div>

```cpp
#include <iostream>
using namespace std;

void applyDiscount(double *price) {
    *price = *price * 0.9;
}

int main() {
    double price = 100.0;
    applyDiscount(&price);
    cout << "Discounted Price: $" << price << endl;
    return 0;
}
```

---

## 06 / Structs and Classes

Structs group related data. Classes add methods and access control. Together they let you model real-world entities — students, accounts, products — as coherent units instead of scattered variables.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Structs** — public by default, best for plain data grouping  
**Classes** — encapsulate data with `private` / `public` access  
**Methods** — functions that belong to a type

</div>

```cpp
#include <iostream>
using namespace std;

struct Student {
    int id;
    double gpa;
    void display() {
        cout << "ID: " << id << ", GPA: " << gpa << endl;
    }
};

int main() {
    Student s1 = {1, 3.8};
    s1.display();
    return 0;
}
```

---

## 07 / Dynamic Memory Allocation

Sometimes you need memory whose size or lifetime is not known at compile time. `new` and `delete` give you that control. Mismatch them and you get leaks or dangling pointers — two of the most common bugs in C++ programs.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Allocate** — `new Type` for single objects, `new Type[n]` for arrays  
**Deallocate** — `delete` for single objects, `delete[]` for arrays  
**Rule** — every `new` must have a matching `delete`

</div>

```cpp
#include <iostream>
using namespace std;

int main() {
    int *scores = new int[5];
    for (int i = 0; i < 5; ++i) {
        scores[i] = i * 10;
    }
    for (int i = 0; i < 5; ++i) {
        cout << scores[i] << " ";
    }
    delete[] scores;
    return 0;
}
```

---

## 08 / File I/O

Programs read from and write to files to persist data. The `fstream` family gives you the same stream interface as `cin` / `cout`, making file operations straightforward.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Streams** — `ifstream` (read), `ofstream` (write), `fstream` (both)  
**Pattern** — open, read/write, close  
**Check** — always verify `is_open()` before operating on a file

</div>

```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream outFile("students.txt");
    if (outFile.is_open()) {
        outFile << "Student 1: ID=1, GPA=3.8\n";
        outFile << "Student 2: ID=2, GPA=3.5\n";
        outFile.close();
    }
    return 0;
}
```

---

## 09 / STL — Standard Template Library

The STL provides containers, algorithms, and iterators that save you from reimplementing common patterns. `vector`, `map`, and `sort` cover most everyday data-handling needs.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Containers** — `std::queue` (FIFO), `std::vector` (dynamic array), `std::map` (key-value)  
**Algorithms** — `std::sort`, `std::find`, `std::for_each`  
**Iterators** — pointer-like objects that connect algorithms to containers

</div>

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> ages = {34, 21, 45, 19};
    sort(ages.begin(), ages.end());
    for (int age : ages) {
        cout << age << " ";
    }
    return 0;
}
```

---

## 10 / Object-Oriented Programming

OOP lets you model complex systems as interacting objects. Use inheritance to specialize types, polymorphism to swap behavior, and encapsulation to protect internal state.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Encapsulation** — hide implementation details behind a public interface  
**Inheritance** — extend a base class with specialized behavior  
**Polymorphism** — call the correct derived method through a base pointer using `virtual`

</div>

```cpp
#include <iostream>
using namespace std;

class Shape {
private:
    string name;
public:
    Shape(string n) : name(n) {}
    virtual void describe() {
        cout << "Shape: " << name << endl;
    }
};

class Circle : public Shape {
public:
    Circle() : Shape("Circle") {}
    void describe() override {
        cout << "A round shape with no corners." << endl;
    }
};

int main() {
    Shape *s = new Circle();
    s->describe();
    delete s;
    return 0;
}
```

---

## 11 / Threading and Concurrency

Many programs benefit from doing multiple things at once. C++11 introduced `std::thread` and synchronization primitives so you can write concurrent code without dropping to platform-specific APIs.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Threads** — `std::thread` launches concurrent execution  
**Join** — `t.join()` waits for a thread to finish  
**Mutex** — `std::mutex` protects shared data from race conditions  
**Condition variable** — `std::condition_variable` for thread signaling

</div>

```cpp
#include <iostream>
#include <thread>
using namespace std;

void printMessage(string msg) {
    cout << "Message: " << msg << endl;
}

int main() {
    thread t1(printMessage, "Hello from thread 1");
    thread t2(printMessage, "Hello from thread 2");
    t1.join();
    t2.join();
    return 0;
}
```

---

## 12 / Exception Handling

Input can be invalid. Files can go missing. Memory can run out. Exception handling gives you a structured way to respond to errors instead of checking return codes everywhere.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Try / catch / throw** — the core mechanism  
**Standard exceptions** — `invalid_argument`, `runtime_error`, `out_of_range`  
**Custom exceptions** — extend `std::exception` for domain-specific errors

</div>

```cpp
#include <iostream>
#include <stdexcept>
using namespace std;

void validateAge(int age) {
    if (age <= 0) {
        throw invalid_argument("Invalid age");
    }
    cout << "Valid age: " << age << endl;
}

int main() {
    try {
        validateAge(-5);
    } catch (const invalid_argument &e) {
        cerr << "Error: " << e.what() << endl;
    }
    return 0;
}
```

---

## 13 / Debugging and Testing

Bugs are hard to reproduce and expensive to fix once code ships. Catch them early with compiler warnings, assertions, and systematic testing.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Compiler warnings** — enable `-Wall -Wextra`, treat warnings as errors  
**Common bugs** — off-by-one errors, null pointer dereferences, uninitialized variables  
**Assertions** — `assert()` catches logic errors at runtime during development

</div>

```cpp
#include <iostream>
#include <cassert>
using namespace std;

double calculateTotal(double price, double taxRate) {
    return price + (price * taxRate);
}

int main() {
    assert(calculateTotal(100.0, 0.1) == 110.0);
    cout << "Test passed!" << endl;
    return 0;
}
```

---

## 14 / Summary

You now have the vocabulary to read a small C++ program: data has a type, work has a control path, memory has an owner, and concurrent work needs coordination. Keep this page nearby as a reference while you build.

| Concept               | What to remember                                           |
| --------------------- | ---------------------------------------------------------- |
| **Types & variables** | Know your sizes, use `const` for constants                 |
| **Control flow**      | `switch` for dispatch, `break`/`continue` for loop control |
| **Vectors**           | Prefer `std::vector` over raw arrays                       |
| **Functions**         | Use `const &` for large parameters                         |
| **Pointers**          | Every `new` needs a `delete`                               |
| **OOP**               | `virtual` for polymorphism, `private` for encapsulation    |
| **STL**               | `queue`, `vector`, `sort` cover most everyday needs        |
| **Threading**         | `std::thread` + `std::mutex` for concurrency               |
| **Exceptions**        | Wrap risky operations in `try`/`catch`                     |
| **Debugging**         | `-Wall`, `assert()`, initialize everything                 |
