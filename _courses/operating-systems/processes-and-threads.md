---
title: "Processes and Threads"
topic: true
parent_course: "Operating System"
parent_url: "/courses/operating-systems/"
order: 1
summary: "How operating systems run multiple programs and manage work over time."
---

Processes and threads are the basic units an operating system uses to organize running work.

## Processes

A process is a running program together with its memory, resources, and current state. The operating system gives each process an isolated environment so one program cannot casually overwrite another program's data.

Typical process responsibilities include:

- Keeping track of the program's current execution state
- Allocating memory and other resources
- Starting and stopping program execution
- Providing a boundary for protection and isolation

## Threads

A thread is a path of execution inside a process. A process can contain one thread or several threads that share the process's memory and resources.

Multiple threads can make an application responsive and allow independent work to happen concurrently, but shared memory also means that threads must coordinate carefully.

## Key idea

The operating system schedules threads, while processes provide the protected containers that own resources. Understanding that distinction makes later topics such as scheduling, synchronization, and virtual memory easier to follow.
