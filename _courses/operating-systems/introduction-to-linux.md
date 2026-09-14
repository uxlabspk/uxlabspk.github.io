---
title: "Introduction to Linux"
topic: true
parent_course: "Operating System"
parent_url: "/courses/operating-systems/"
order: 2
summary: "A practical guide to understanding operating systems and installing Linux through multiple methods."
---

A practical field guide to operating systems and Linux installation. You will learn what an OS does, explore the major families that shape computing today, and get hands-on with four different ways to run Linux.

<div class="signal-grid">
<div>
<span class="signal-number">01 / Understand</span>
<strong>What operating systems do</strong>
<p>Process management, memory, files, devices, and security — the core functions every OS performs.</p>
</div>
<div>
<span class="signal-number">02 / Compare</span>
<strong>Major OS families</strong>
<p>Unix, DOS, Windows, macOS, and Linux — origins, features, and where each dominates.</p>
</div>
<div>
<span class="signal-number">03 / Install</span>
<strong>Get Linux running</strong>
<p>Bare metal, virtual machine, dual boot, or live USB — choose the method that fits your situation.</p>
</div>
</div>

### How to use this guide

Read each section in two passes: first for the concept, then for the practical details. After every step, try it on your own machine or in a virtual environment. That small experiment is where theory becomes skill.

## 01 / What is an Operating System

An operating system is the layer of software that manages hardware resources and provides services for application programs. It sits between you and the machine, handling the complex work of coordinating CPUs, memory, storage, and peripherals.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>Process Management</strong> — scheduling and switching between running programs<br>
<strong>Memory Management</strong> — allocating and reclaiming RAM for active processes<br>
<strong>File Management</strong> — organizing, reading, and writing data on storage devices<br>
<strong>Device Management</strong> — communicating with hardware through drivers<br>
<strong>Security</strong> — controlling user access and protecting system integrity<br>
<strong>User Interface</strong> — CLI or GUI for interacting with the system

</div>

## 02 / Major Operating System Families

Operating systems have evolved over decades, each family shaped by different needs and philosophies. Understanding these families helps you choose the right tool for the job.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>Unix (1969)</strong> — AT&T Bell Labs, multi-user, multi-tasking. BSD, macOS, Solaris, AIX descend from it.<br>
<strong>DOS (1981)</strong> — Microsoft, single-user, command-line only. MS-DOS, PC-DOS, FreeDOS.<br>
<strong>Windows (1985)</strong> — Microsoft GUI-based. Windows NT lineage includes XP through Windows 11.<br>
<strong>macOS (2001)</strong> — Apple, Unix-based, tight hardware integration. iOS and iPadOS share its kernel.<br>
<strong>Linux (1991)</strong> — Linus Torvalds, open-source, highly customizable. Debian, Ubuntu, Fedora, Arch.

</div>

## 03 / Comparison of OS Families

| Feature     | Unix    | DOS  | Windows | macOS | Linux   |
| ----------- | ------- | ---- | ------- | ----- | ------- |
| Origin Year | 1969    | 1981 | 1985    | 2001  | 1991    |
| Interface   | CLI/GUI | CLI  | GUI     | GUI   | CLI/GUI |
| Open Source | Partial | No   | No      | No    | Yes     |
| Multi-User  | Yes     | No   | Yes     | Yes   | Yes     |

## 04 / Bare Metal Installation

Installing Linux directly onto hardware gives maximum performance and full hardware access. This is the method for dedicated Linux machines and workstations.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>Backup first</strong> — copy critical files to external media before modifying disk structures<br>
<strong>Bootable USB</strong> — flash ISO files using Rufus or BalenaEtcher<br>
<strong>BIOS/UEFI setup</strong> — enter firmware menu during startup to configure boot order<br>
<strong>Secure Boot</strong> — disable if proprietary drivers cause issues

</div>

### Disk Partitioning

- **Root (`/`)** — core OS, apps, binaries. Allocate 25–30 GB for a standard desktop.
- **Swap** — virtual RAM when physical memory is full. Required for hibernation.
- **Home (`/home`)** — user data, configs, documents. Survives OS reinstalls.
- **EFI (`/boot/efi`)** — FAT32 partition for UEFI bootloaders and GRUB.

## 05 / VirtualBox VM Setup

Run Linux inside a virtual machine on your existing Windows or macOS host. Zero risk to the host, perfect for testing and learning.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>Create VM</strong> — VirtualBox > New > Linux > 64-bit<br>
<strong>RAM & CPU</strong> — allocate 4 GB+ RAM and 2+ cores for reliable performance<br>
<strong>Disk</strong> — create a VDI drive (25 GB+) dynamically allocated<br>
<strong>ISO mount</strong> — attach the Linux installer ISO to the optical drive before boot

</div>

## 06 / Dual Boot

Configure one machine to offer both Windows and Linux at startup. Each OS runs natively with full performance.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>Shrink Windows</strong> — use Disk Management (`diskmgmt.msc`) to free 40–50 GB<br>
<strong>Disable Fast Startup</strong> — turn off fast boot to prevent file system locks<br>
<strong>Install alongside</strong> — boot USB, choose "Install alongside Windows" or manually partition<br>
<strong>GRUB</strong> — ensure it installs to the main disk for the OS selection menu

</div>

## 07 / Live and Persistent USB

Carry Linux in your pocket. Test, repair, or run a portable OS without touching the host computer.

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>Live Mode</strong> — runs in RAM, all changes vanish on shutdown. Ideal for recovery and testing.<br>
<strong>Persistent Mode</strong> — saves files, updates, and configs to flash storage across reboots.

</div>

## 08 / Installation Methods Comparison

| Method        | Performance     | Host Risk           | Setup Time | Best For                 |
| ------------- | --------------- | ------------------- | ---------- | ------------------------ |
| Bare Metal    | 100% (Maximum)  | High (Erase Disk)   | 15–30 min  | Dedicated Linux machines |
| VirtualBox VM | 60–80% (Shared) | None (Isolated)     | 10–20 min  | Testing, development     |
| Dual Boot     | 100% (Native)   | Medium (Partitions) | 30–45 min  | Needing both OSes        |
| Live USB      | Limited by USB  | Zero (Non-invasive) | 5–10 min   | Recovery, portable OS    |

## 09 / Summary

You now have the vocabulary to understand what an operating system does and the practical knowledge to install Linux on any hardware setup. Choose bare metal for dedicated machines, virtual machines for safe experimentation, dual boot when you need both worlds, or a live USB for portability and recovery.

<table>
  <thead>
    <tr>
      <th>Concept</th>
      <th>What to remember</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>OS Functions</strong></td>
      <td>Process, memory, file, device management plus security and UI</td>
    </tr>
    <tr>
      <td><strong>OS Families</strong></td>
      <td>Unix, DOS, Windows, macOS, Linux — different philosophies for different needs</td>
    </tr>
    <tr>
      <td><strong>Bare Metal</strong></td>
      <td>Maximum performance, requires dedicated hardware and careful partitioning</td>
    </tr>
    <tr>
      <td><strong>Virtual Machine</strong></td>
      <td>Zero host risk, great for testing and learning new distributions</td>
    </tr>
    <tr>
      <td><strong>Dual Boot</strong></td>
      <td>Full native performance for both OSes, requires disk partitioning</td>
    </tr>
    <tr>
      <td><strong>Live USB</strong></td>
      <td>Portable and non-invasive, ideal for recovery and quick testing</td>
    </tr>
  </tbody>
</table>
