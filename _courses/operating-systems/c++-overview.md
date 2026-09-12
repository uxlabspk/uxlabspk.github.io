---
title: "C++ Overview"
topic: true
parent_course: "Operating System"
parent_url: "/courses/operating-systems/"
order: 1
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

## 01 / Variables and Basic Types

C++ gives you direct access to memory and types that map closely to hardware. Knowing the size and behavior of each type is the foundation for everything else.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>Core types</strong> — <code>int</code>, <code>float</code>, <code>double</code>, <code>char</code>, <code>bool</code><br>
<strong>Constants</strong> — <code>const</code> for values that must not change at runtime<br>
<strong>I/O</strong> — <code>cin</code> / <code>cout</code> with formatters like <code>setw</code>, <code>setprecision</code>, <code>fixed</code>

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

<strong>Decision making</strong> — <code>if</code> / <code>else if</code> / <code>else</code>, <code>switch</code><br>
<strong>Loops</strong> — <code>for</code>, <code>while</code>, <code>do-while</code><br>
<strong>Control</strong> — <code>break</code> exits the loop, <code>continue</code> skips to the next iteration

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

<strong>Pass by value</strong> — copies the argument, safe but slower for large data<br>
<strong>Pass by reference</strong> — <code>const &amp;</code> avoids copies while preventing modification<br>
<strong>Default arguments</strong> — optional parameters with fallback values

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

<strong>Declare</strong> — <code>int *ptr</code><br>
<strong>Address-of</strong> — <code>&amp;variable</code> gets the memory address<br>
<strong>Dereference</strong> — <code>*ptr</code> reads or writes the value at that address<br>
<strong>Reference</strong> — <code>int &amp;ref = variable</code>, an alias that cannot be reseated

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

<strong>Structs</strong> — public by default, best for plain data grouping<br>
<strong>Classes</strong> — encapsulate data with <code>private</code> / <code>public</code> access<br>
<strong>Methods</strong> — functions that belong to a type

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

<strong>Allocate</strong> — <code>new Type</code> for single objects, <code>new Type[n]</code> for arrays<br>
<strong>Deallocate</strong> — <code>delete</code> for single objects, <code>delete[]</code> for arrays<br>
<strong>Rule</strong> — every <code>new</code> must have a matching <code>delete</code>

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

<strong>Streams</strong> — <code>ifstream</code> (read), <code>ofstream</code> (write), <code>fstream</code> (both)<br>
<strong>Pattern</strong> — open, read/write, close<br>
<strong>Check</strong> — always verify <code>is_open()</code> before operating on a file

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

<strong>Containers</strong> — <code>std::queue</code> (FIFO), <code>std::vector</code> (dynamic array), <code>std::map</code> (key-value)<br>
<strong>Algorithms</strong> — <code>std::sort</code>, <code>std::find</code>, <code>std::for_each</code><br>
<strong>Iterators</strong> — pointer-like objects that connect algorithms to containers

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

<strong>Encapsulation</strong> — hide implementation details behind a public interface<br>
<strong>Inheritance</strong> — extend a base class with specialized behavior<br>
<strong>Polymorphism</strong> — call the correct derived method through a base pointer using <code>virtual</code>

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

<strong>Threads</strong> — <code>std::thread</code> launches concurrent execution<br>
<strong>Join</strong> — <code>t.join()</code> waits for a thread to finish<br>
<strong>Mutex</strong> — <code>std::mutex</code> protects shared data from race conditions<br>
<strong>Condition variable</strong> — <code>std::condition_variable</code> for thread signaling

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

<strong>Try / catch / throw</strong> — the core mechanism<br>
<strong>Standard exceptions</strong> — <code>invalid_argument</code>, <code>runtime_error</code>, <code>out_of_range</code><br>
<strong>Custom exceptions</strong> — extend <code>std::exception</code> for domain-specific errors

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

<strong>Compiler warnings</strong> — enable <code>-Wall -Wextra</code>, treat warnings as errors<br>
<strong>Common bugs</strong> — off-by-one errors, null pointer dereferences, uninitialized variables<br>
<strong>Assertions</strong> — <code>assert()</code> catches logic errors at runtime during development

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

<table>
  <thead>
    <tr>
      <th>Concept</th>
      <th>What to remember</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Types & variables</strong></td>
      <td>Know your sizes, use <code>const</code> for constants</td>
    </tr>
    <tr>
      <td><strong>Control flow</strong></td>
      <td><code>switch</code> for dispatch, <code>break</code>/<code>continue</code> for loop control</td>
    </tr>
    <tr>
      <td><strong>Vectors</strong></td>
      <td>Prefer <code>std::vector</code> over raw arrays</td>
    </tr>
    <tr>
      <td><strong>Functions</strong></td>
      <td>Use <code>const &</code> for large parameters</td>
    </tr>
    <tr>
      <td><strong>Pointers</strong></td>
      <td>Every <code>new</code> needs a <code>delete</code></td>
    </tr>
    <tr>
      <td><strong>OOP</strong></td>
      <td><code>virtual</code> for polymorphism, <code>private</code> for encapsulation</td>
    </tr>
    <tr>
      <td><strong>STL</strong></td>
      <td><code>queue</code>, <code>vector</code>, <code>sort</code> cover most everyday needs</td>
    </tr>
    <tr>
      <td><strong>Threading</strong></td>
      <td><code>std::thread</code> + <code>std::mutex</code> for concurrency</td>
    </tr>
    <tr>
      <td><strong>Exceptions</strong></td>
      <td>Wrap risky operations in <code>try</code>/<code>catch</code></td>
    </tr>
    <tr>
      <td><strong>Debugging</strong></td>
      <td><code>-Wall</code>, <code>assert()</code>, initialize everything</td>
    </tr>
  </tbody>
</table>
