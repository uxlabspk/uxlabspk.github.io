---
title: "C++ Overview"
topic: true
parent_course: "Operating System"
parent_url: "/courses/operating-systems/"
order: 1
summary: "Essential C++ concepts for OS programming: variables, control structures, STL, OOP, threading, and debugging."
---

A practical C++ field guide for operating systems work. You will move from values in memory to processes in motion, learning the language features behind schedulers, memory managers, file systems, and process trackers.

<div class="signal-grid">
<div>
<span class="signal-number">01 / Model</span>
<strong>Think close to the machine</strong>
<p>Types, pointers, and memory are not abstract details here. They are the material of the system.</p>
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

Read each section in two passes: first for the concept, then for the OS connection. After every example, change one value, add one process, or break one assumption. That small experiment is where the syntax becomes intuition.

---

## 01 / Variables and Basic Types

C++ gives you direct access to memory and types that map closely to hardware. For OS programming, you need to know the size and behavior of each type.

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
    int processCount = 5;
    double burstTime = 10.5;
    const int MAX_PROCESSES = 100;

    cout << "Process Count: " << processCount << endl;
    cout << "Burst Time: " << fixed << setprecision(1) << burstTime << endl;
    cout << "Max Processes: " << MAX_PROCESSES << endl;

    return 0;
}
```

---

## 02 / Control Structures

Every scheduler, memory allocator, and device driver relies on conditionals and loops. The patterns here — especially `switch` and loop control — show up constantly in OS code.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Decision making** — `if` / `else if` / `else`, `switch`  
**Loops** — `for`, `while`, `do-while`  
**Control** — `break` exits the loop, `continue` skips to the next iteration

</div>

```cpp
#include <iostream>
using namespace std;

int main() {
    int processes[] = {1, 2, 3, 4, 5};
    for (int i = 0; i < 5; ++i) {
        if (processes[i] == 3) {
            cout << "Process 3 found! Skipping..." << endl;
            continue;
        }
        cout << "Scheduling Process: " << processes[i] << endl;
    }
    return 0;
}
```

---

## 03 / Arrays and Vectors

Fixed-size arrays are simple but rigid. `std::vector` grows dynamically — essential when you do not know how many processes or threads will exist at runtime.

**Static arrays** — `int arr[10]`, fixed at compile time  
**Dynamic vectors** — `std::vector<T>`, resizes as needed  
**Multi-dimensional** — arrays of arrays for matrices and tables

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<double> burstTimes = {10.5, 5.2, 8.9, 3.1};
    for (double time : burstTimes) {
        cout << "Burst Time: " << time << endl;
    }
    return 0;
}
```

---

## 04 / Functions

Functions are how you turn a monolithic program into composable pieces. For OS work, you will write functions to calculate waiting times, manage queues, and wrap system calls.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Pass by value** — copies the argument, safe but slower for large data  
**Pass by reference** — `const &` avoids copies while preventing modification  
**Default arguments** — optional parameters with fallback values

</div>

```cpp
#include <iostream>
using namespace std;

int calculateWaitingTime(int burstTime, int arrivalTime = 0) {
    return burstTime - arrivalTime;
}

int main() {
    int waitingTime = calculateWaitingTime(10, 2);
    cout << "Waiting Time: " << waitingTime << endl;
    return 0;
}
```

---

## 05 / Pointers and References

Pointers are the backbone of OS programming — every system call, memory allocation, and data structure passes data through them. References offer the same power with less risk.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Declare** — `int *ptr`  
**Address-of** — `&variable` gets the memory address  
**Dereference** — `*ptr` reads or writes the value at that address  
**Reference** — `int &ref = variable`, an alias that cannot be reseated

</div>

```cpp
#include <iostream>
using namespace std;

void modifyValue(int *ptr) {
    *ptr = 20;
}

int main() {
    int value = 10;
    modifyValue(&value);
    cout << "Modified Value: " << value << endl;
    return 0;
}
```

---

## 06 / Structs and Classes

Structs group related data. Classes add methods and access control. Together they let you model OS entities — processes, threads, memory blocks — as coherent units instead of scattered variables.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Structs** — public by default, best for plain data grouping  
**Classes** — encapsulate data with `private` / `public` access  
**Methods** — functions that belong to a type

</div>

```cpp
#include <iostream>
using namespace std;

struct Process {
    int pid;
    double burstTime;
    void display() {
        cout << "PID: " << pid << ", Burst Time: " << burstTime << endl;
    }
};

int main() {
    Process p1 = {1, 10.5};
    p1.display();
    return 0;
}
```

---

## 07 / Dynamic Memory Allocation

OS kernels allocate and free memory constantly. In C++, `new` and `delete` give you that control. Mismatch them and you get leaks or dangling pointers — two of the most common bugs in systems code.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Allocate** — `new Type` for single objects, `new Type[n]` for arrays  
**Deallocate** — `delete` for single objects, `delete[]` for arrays  
**Rule** — every `new` must have a matching `delete`

</div>

```cpp
#include <iostream>
using namespace std;

int main() {
    int *arr = new int[5];
    for (int i = 0; i < 5; ++i) {
        arr[i] = i * 10;
    }
    for (int i = 0; i < 5; ++i) {
        cout << arr[i] << " ";
    }
    delete[] arr;
    return 0;
}
```

---

## 08 / File I/O

Processes read from and write to files. The `fstream` family gives you the same stream interface as `cin` / `cout`, making file operations straightforward.

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
    ofstream outFile("processes.txt");
    if (outFile.is_open()) {
        outFile << "Process 1: PID=1, Burst Time=10.5\n";
        outFile << "Process 2: PID=2, Burst Time=5.2\n";
        outFile.close();
    }
    return 0;
}
```

---

## 09 / STL — Standard Template Library

The STL provides containers, algorithms, and iterators that save you from reimplementing common patterns. For OS work, `queue`, `vector`, and `sort` cover most scheduling and bookkeeping needs.

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
    vector<int> pids = {3, 1, 4, 2};
    sort(pids.begin(), pids.end());
    for (int pid : pids) {
        cout << pid << " ";
    }
    return 0;
}
```

---

## 10 / Object-Oriented Programming

OOP lets you model complex systems as interacting objects. In OS code, you will use inheritance to specialize process types, polymorphism to swap scheduling algorithms, and encapsulation to protect internal state.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Encapsulation** — hide implementation details behind a public interface  
**Inheritance** — extend a base class with specialized behavior  
**Polymorphism** — call the correct derived method through a base pointer using `virtual`

</div>

```cpp
#include <iostream>
using namespace std;

class Process {
private:
    int pid;
public:
    Process(int id) : pid(id) {}
    virtual void schedule() {
        cout << "Scheduling Process: " << pid << endl;
    }
};

class RealProcess : public Process {
public:
    RealProcess(int id) : Process(id) {}
    void schedule() override {
        cout << "Scheduling Real Process: " << endl;
    }
};

int main() {
    Process *p = new RealProcess(1);
    p->schedule();
    delete p;
    return 0;
}
```

---

## 11 / Threading and Concurrency

Modern operating systems run many tasks in parallel. C++11 introduced `std::thread` and synchronization primitives so you can write concurrent code without dropping to platform-specific APIs.

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

void scheduleProcess(int pid) {
    cout << "Scheduling Process: " << pid << endl;
}

int main() {
    thread t1(scheduleProcess, 1);
    thread t2(scheduleProcess, 2);
    t1.join();
    t2.join();
    return 0;
}
```

---

## 12 / Exception Handling

System calls fail. Files disappear. Memory runs out. Exception handling gives you a structured way to respond to errors instead of checking return codes everywhere.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Try / catch / throw** — the core mechanism  
**Standard exceptions** — `invalid_argument`, `runtime_error`, `out_of_range`  
**Custom exceptions** — extend `std::exception` for domain-specific errors

</div>

```cpp
#include <iostream>
#include <stdexcept>
using namespace std;

void validatePID(int pid) {
    if (pid <= 0) {
        throw invalid_argument("Invalid PID");
    }
    cout << "Valid PID: " << pid << endl;
}

int main() {
    try {
        validatePID(-1);
    } catch (const invalid_argument &e) {
        cerr << "Error: " << e.what() << endl;
    }
    return 0;
}
```

---

## 13 / Debugging and Testing

Bugs in systems code are hard to reproduce and expensive to fix. Catch them early with compiler warnings, assertions, and systematic testing.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

**Compiler warnings** — enable `-Wall -Wextra`, treat warnings as errors  
**Common bugs** — off-by-one errors, null pointer dereferences, uninitialized variables  
**Assertions** — `assert()` catches logic errors at runtime during development

</div>

```cpp
#include <iostream>
#include <cassert>
using namespace std;

int calculateWaitingTime(int burstTime, int arrivalTime) {
    return burstTime - arrivalTime;
}

int main() {
    assert(calculateWaitingTime(10, 2) == 8);
    cout << "Test passed!" << endl;
    return 0;
}
```

---

## 14 / Summary

You now have the vocabulary to read a small systems program: data has a type, work has a control path, memory has an owner, and concurrent work needs coordination. Keep this page nearby while you start the operating-system projects that follow.

| Concept               | What to remember                                           |
| --------------------- | ---------------------------------------------------------- |
| **Types & variables** | Know your sizes, use `const` for constants                 |
| **Control flow**      | `switch` for dispatch, `break`/`continue` for loop control |
| **Vectors**           | Prefer `std::vector` over raw arrays                       |
| **Functions**         | Use `const &` for large parameters                         |
| **Pointers**          | Every `new` needs a `delete`                               |
| **OOP**               | `virtual` for polymorphism, `private` for encapsulation    |
| **STL**               | `queue`, `vector`, `sort` cover most OS needs              |
| **Threading**         | `std::thread` + `std::mutex` for concurrency               |
| **Exceptions**        | Wrap risky operations in `try`/`catch`                     |
| **Debugging**         | `-Wall`, `assert()`, initialize everything                 |
