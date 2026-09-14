---
title: "Basic Linux Commands"
topic: true
parent_course: "Operating System"
parent_url: "/courses/operating-systems/"
order: 3
summary: "Essential Linux commands for navigation, file operations, text processing, and system management."
---

A practical reference for the Linux commands you will use daily. Each section covers a focused set of operations with clear examples you can run immediately.

<div class="signal-grid">
<div>
<span class="signal-number">01 / Navigate</span>
<strong>Move around the filesystem</strong>
<p>pwd, ls, cd — know where you are and what is there.</p>
</div>
<div>
<span class="signal-number">02 / Manage</span>
<strong>Files and directories</strong>
<p>Create, copy, move, delete — the operations you repeat hundreds of times.</p>
</div>
<div>
<span class="signal-number">03 / Process</span>
<strong>Text and data</strong>
<p>grep, sed, awk, sort, cut — filter, search, and transform content without leaving the terminal.</p>
</div>
</div>

### How to use this guide

Run each command in your terminal. Change one flag or argument at a time to see how the output changes. That small experiment is where syntax becomes muscle memory.

## 01 / Linux Core Directories

Understanding the filesystem layout is the first step to navigating Linux confidently. Every path starts from root (`/`).

| Path | Purpose | Example |
|---|---|---|
| `/` | Root directory (everything starts here) | `/home`, `/etc` |
| `/bin` | Essential user binaries | `ls`, `cat` |
| `/usr` | User programs and libraries | `/usr/bin/python3` |
| `/etc` | System configuration files | `/etc/hosts` |
| `/home` | User home directories | `/home/alice` |
| `/root` | Root user's home | `/root/.bashrc` |
| `/tmp` | Temporary files | `/tmp/mydata.txt` |
| `/var` | Variable data (logs, caches) | `/var/log/syslog` |
| `/dev` | Device files | `/dev/sda` |
| `/proc` | Virtual filesystem (kernel info) | `/proc/cpuinfo` |
| `/sys` | Hardware/system interface | `/sys/class/` |

---

## 02 / Navigation and Listing

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>pwd</strong> — print your current working directory<br>
<strong>ls</strong> — list directory contents with flags for detail<br>
<strong>cd</strong> — change directory using absolute or relative paths

</div>

```bash
pwd                     # Print Working Directory - where am I?
ls                      # List directory contents
ls -la                  # Long format, show hidden files, all files
ls -lt                  # Sort by modification time
ls /path/to/dir         # List contents of a specific directory
cd /home                # Change directory
cd ..                   # Go up one level
cd ~                    # Go to home directory
cd -                    # Go back to previous directory
```

---

## 03 / File Operations

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>mkdir -p</strong> — create directories recursively<br>
<strong>cp -r</strong> — copy directories with all contents<br>
<strong>rm -rf</strong> — force remove (use with caution)

</div>

```bash
mkdir -p ~/newdir/subdir  # Create directory (recursive)
rmdir emptydir           # Remove empty directory
cp file1 file2           # Copy file
cp -r dir1 dir2          # Copy directory (recursive)
mv file1 file2           # Move/Rename file
rm file                  # Remove file
rm -rf dirname           # Force remove directory
touch filename           # Create empty file
```

---

## 04 / File Viewing and Editing

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>cat</strong> — dump entire file to terminal<br>
<strong>head / tail</strong> — view start or end of files, <code>tail -f</code> for live logs<br>
<strong>less</strong> — page through large files without loading everything into memory

</div>

```bash
cat file                 # Display file contents
head file                # Show first 10 lines
head -n 20 file          # Show first 20 lines
tail file                # Show last 10 lines
tail -f logfile          # Follow log file in real-time
less file                # Page through file
nano file                # Simple text editor
vim file                 # Full-featured text editor
```

---

## 05 / Text Processing

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>grep</strong> — search for patterns in files (supports regex)<br>
<strong>sed</strong> — stream editor for find-and-replace operations<br>
<strong>awk</strong> — column-based text processing and reporting

</div>

```bash
grep "pattern" file        # Search for text in files
grep -r "pattern" dir      # Recursive search through directory
grep -i "pattern" file     # Case insensitive
grep -n "pattern" file     # Show line numbers
grep -c "pattern" file     # Count matches
sed 's/old/new/g' file    # Stream editor (replace text)
sed -n '5,10p' file       # Print lines 5 through 10
awk '{print $1}' file     # Print first column
awk -F',' '{print $2}' file  # Print second field (comma delimiter)
cut -d',' -f1 file        # Cut specific field
sort file                 # Sort lines
sort -u file              # Sort and remove duplicates
uniq file                 # Remove consecutive duplicate lines
wc -l file                # Count lines
wc -w file                # Count words
```

---

## 06 / File Permissions

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>rwx</strong> — read, write, execute for owner, group, and others<br>
<strong>chmod</strong> — change permissions with symbolic or numeric mode<br>
<strong>chown</strong> — change file ownership

</div>

```bash
ls -la                    # View permissions (rwxr-xr-x format)
chmod 755 script.sh       # rwxr-xr-x (owner: full, others: read+execute)
chmod +x script.sh        # Add execute permission
chmod -R 644 directory    # Recursive permission change
chown user:group file     # Change owner and group
chown -R user:group dir   # Recursive ownership change
```

### Permission Numeric Reference

| Number | Permission | Meaning |
|---|---|---|
| 7 | rwx | Read + Write + Execute |
| 6 | rw- | Read + Write |
| 5 | r-x | Read + Execute |
| 4 | r-- | Read only |
| 0 | --- | No permissions |

---

## 07 / Process Management

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>ps</strong> — snapshot of current processes<br>
<strong>top / htop</strong> — real-time process monitoring<br>
<strong>kill</strong> — send signals to terminate or control processes

</div>

```bash
ps aux                    # List all running processes
ps aux | grep python      # Filter processes by name
top                       # Interactive process viewer
htop                      # Enhanced process viewer (if installed)
kill PID                  # Terminate process by PID
kill -9 PID               # Force kill (SIGKILL)
kill -STOP PID            # Pause process
kill -CONT PID            # Resume process
bg                        # Resume stopped process in background
fg                        # Bring background process to foreground
jobs                      # List background jobs
```

---

## 08 / System Information

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>uname</strong> — kernel and system details<br>
<strong>free</strong> — memory usage at a glance<br>
<strong>df</strong> — disk space on mounted filesystems

</div>

```bash
uname -a                 # Kernel version and architecture
uname -r                 # Kernel release only
whoami                   # Current logged-in user
hostname                 # System hostname
date                     # Current date and time
uptime                   # System uptime and load averages
free -h                  # Human-readable memory usage
df -h                    # Disk space usage (human-readable)
du -sh /path/to/dir      # Directory size summary
lsb_release -a           # Linux distribution info
```

---

## 09 / Package Management

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>apt</strong> — Debian/Ubuntu package manager<br>
<strong>dnf</strong> — Fedora/RHEL package manager<br>
Always update the package index before installing new software.

</div>

### APT (Debian/Ubuntu)

```bash
sudo apt update                    # Refresh package index
sudo apt upgrade -y                # Upgrade all installed packages
sudo apt install -y package_name   # Install a package
sudo apt remove -y package_name    # Remove a package
sudo apt search keyword            # Search for packages
sudo apt show package_name         # Show package details
sudo apt list --installed          # List installed packages
```

### DNF (Fedora/RHEL)

```bash
sudo dnf update                    # Update all packages
sudo dnf install -y package_name   # Install a package
sudo dnf remove package_name       # Remove a package
sudo dnf search keyword            # Search for packages
sudo dnf info package_name         # Show package details
sudo dnf list installed            # List installed packages
```

---

## 10 / Networking

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>ip / ifconfig</strong> — view and configure network interfaces<br>
<strong>ping</strong> — test connectivity to a host<br>
<strong>ss</strong> — inspect active sockets and connections

</div>

```bash
ip addr show             # Display all network interfaces
ip route show            # Display routing table
ping google.com          # Test connectivity (Ctrl+C to stop)
ping -c 4 google.com     # Send exactly 4 packets
curl https://example.com # Fetch URL content
wget https://example.com/file  # Download a file
ss -tulnp                # Show listening TCP/UDP ports
netstat -tulnp           # Alternative port listing
ssh user@host            # Secure shell login
scp file user@host:/path # Secure copy to remote host
```

---

## 11 / Searching Files

<div style="border-left: 3px solid var(--color-orange); padding: 0.75rem 1rem; margin: 1.5rem 0; background: var(--paper-deep);">

<strong>find</strong> — locate files by name, size, time, or type<br>
<strong>which</strong> — find the path of an executable<br>
<strong>locate</strong> — fast file search using a prebuilt index

</div>

```bash
find /path -name "*.txt"           # Find files by name
find . -type f -size +100M         # Find files larger than 100MB
find . -mtime -7                   # Files modified in last 7 days
find . -empty                      # Find empty files/directories
find . -name "*.log" -delete       # Find and delete all .log files
which python3                      # Path to executable
locate filename                    # Fast index-based search
```

---

## 12 / Summary

<table>
  <thead>
    <tr>
      <th>Category</th>
      <th>Key Commands</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Navigation</strong></td>
      <td><code>pwd</code>, <code>ls -la</code>, <code>cd</code></td>
    </tr>
    <tr>
      <td><strong>Files</strong></td>
      <td><code>mkdir -p</code>, <code>cp -r</code>, <code>mv</code>, <code>rm -rf</code>, <code>touch</code></td>
    </tr>
    <tr>
      <td><strong>Viewing</strong></td>
      <td><code>cat</code>, <code>head</code>, <code>tail -f</code>, <code>less</code></td>
    </tr>
    <tr>
      <td><strong>Text Processing</strong></td>
      <td><code>grep -r</code>, <code>sed</code>, <code>awk</code>, <code>sort</code>, <code>wc</code></td>
    </tr>
    <tr>
      <td><strong>Permissions</strong></td>
      <td><code>chmod</code>, <code>chown</code></td>
    </tr>
    <tr>
      <td><strong>Processes</strong></td>
      <td><code>ps aux</code>, <code>top</code>, <code>kill</code>, <code>jobs</code></td>
    </tr>
    <tr>
      <td><strong>System Info</strong></td>
      <td><code>uname -a</code>, <code>free -h</code>, <code>df -h</code></td>
    </tr>
    <tr>
      <td><strong>Packages</strong></td>
      <td><code>apt update/install</code>, <code>dnf install</code></td>
    </tr>
    <tr>
      <td><strong>Networking</strong></td>
      <td><code>ip addr</code>, <code>ping</code>, <code>ss -tulnp</code>, <code>ssh</code></td>
    </tr>
    <tr>
      <td><strong>Searching</strong></td>
      <td><code>find</code>, <code>which</code>, <code>locate</code></td>
    </tr>
  </tbody>
</table>
