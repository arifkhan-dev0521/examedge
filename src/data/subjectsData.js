export const subjectsData = {
  "ethical-hacking": {
    name: "Ethical Hacking & Penetration Testing",
    code: "B23-CTS-601",
    color: "#f87171",
    semester: "Semester 6",
    course: "BCA CTIS",
    units: {
      1: {
        title: "Introduction to Ethical Hacking",
        questions: [
        //   {
        //     id: 1,
        //     marks: "2 Marks",
        //     text: "Define ethical hacking and mention one role of an ethical hacker.",
        //     answer: "Ethical hacking is the authorized practice of bypassing system security to identify vulnerabilities. An ethical hacker tests systems with permission to find weaknesses before malicious hackers do."
        //   },
        //   {
        //     id: 2,
        //     marks: "2 Marks",
        //     text: "What is DNS interrogation?",
        //     answer: "DNS interrogation is the process of querying DNS servers to gather information about a target's domain, such as IP addresses, mail servers, and subdomains."
        //   },
        //   {
        //     id: 3,
        //     marks: "2 Marks",
        //     text: "What is a brute force attack?",
        //     answer: "A brute force attack is a trial-and-error method used to decode passwords or encryption keys by systematically trying all possible combinations until the correct one is found."
        //   },
        //   {
        //     id: 4,
        //     marks: "2 Marks",
        //     text: "Define SQL Injection.",
        //     answer: "SQL Injection is a code injection attack where malicious SQL statements are inserted into input fields to manipulate the database, potentially gaining unauthorized access to data."
        //   },
        //   {
        //     id: 5,
        //     marks: "2 Marks",
        //     text: "What is phishing in social engineering?",
        //     answer: "Phishing is a social engineering technique where attackers send fraudulent emails or messages disguised as legitimate sources to trick users into revealing sensitive information."
        //   },
          {
            id: 6,
            marks: "10 Marks",
            text: "Explain the phases of hacking in detail.",
            answer: "Hacking has 5 phases: 1) Reconnaissance — gathering information about target (active/passive). 2) Scanning — identifying open ports, services, vulnerabilities using tools like Nmap. 3) Gaining Access — exploiting vulnerabilities to enter the system. 4) Maintaining Access — installing backdoors to retain access. 5) Covering Tracks — deleting logs to hide evidence of intrusion."
          },
          {
            id: 7,
            marks: "10 Marks",
            text: "Discuss ethical hacking, types of hackers, and cyber laws.",
            answer: "Ethical hacking is authorized security testing. Types of hackers: White Hat (ethical, authorized), Black Hat (malicious, unauthorized), Grey Hat (sometimes unauthorized but not malicious). Cyber laws in India include IT Act 2000 which covers unauthorized access, data theft, and cybercrime penalties."
          }
        ]
      },
      2: {
        title: "Footprinting & Scanning",
        questions: [
          {
            id: 8,
            marks: "10 Marks",
            text: "Explain footprinting techniques and tools.",
            answer: "Footprinting is the first step of ethical hacking — gathering information about target. Types: Active footprinting (direct interaction with target) and Passive footprinting (using public sources). Tools include WHOIS (domain info), Nslookup (DNS info), Google Dorking (advanced search), Maltego (relationship mapping), and Shodan (internet-connected devices)."
          },
          {
            id: 9,
            marks: "10 Marks",
            text: "Describe scanning and enumeration techniques.",
            answer: "Scanning identifies active hosts, open ports, and services. Types: Network scanning (find active devices), Port scanning (find open ports), Vulnerability scanning (find weaknesses). Enumeration extracts detailed info like usernames, shares, and services. Tools: Nmap (port scanning), Netstat (network connections), enum4linux (Linux enumeration)."
          }
        ]
      },
      3: {
        title: "Password Cracking & Exploitation",
        questions: [
          {
            id: 10,
            marks: "10 Marks",
            text: "Explain password cracking techniques and privilege escalation.",
            answer: "Password cracking techniques: 1) Dictionary attack — uses wordlist of common passwords. 2) Brute force — tries all combinations. 3) Rainbow table — uses precomputed hash values. 4) Social engineering — tricks users into revealing passwords. Tools: John the Ripper, Hashcat. Privilege escalation is gaining higher access rights than initially granted, either vertically (user to admin) or horizontally (same level different user)."
          },
          {
            id: 11,
            marks: "10 Marks",
            text: "Discuss malware types and common exploitation techniques.",
            answer: "Malware types: Virus (attaches to files), Worm (self-replicating), Trojan (disguised as legitimate software), Ransomware (encrypts files for ransom), Spyware (secretly monitors user). Exploitation techniques: Buffer overflow, SQL injection, Cross-site scripting (XSS), Zero-day exploits. Tools: Metasploit Framework is commonly used for exploitation."
          }
        ]
      },
      4: {
        title: "OWASP & Penetration Testing",
        questions: [
          {
            id: 12,
            marks: "10 Marks",
            text: "Explain OWASP Top 10 vulnerabilities.",
            answer: "OWASP Top 10 are most critical web security risks: 1) Broken Access Control, 2) Cryptographic Failures, 3) Injection (SQL, NoSQL), 4) Insecure Design, 5) Security Misconfiguration, 6) Vulnerable Components, 7) Authentication Failures, 8) Software Integrity Failures, 9) Logging Failures, 10) Server-Side Request Forgery (SSRF)."
          },
          {
            id: 13,
            marks: "10 Marks",
            text: "Describe penetration testing phases and report writing.",
            answer: "Penetration testing phases: 1) Planning — define scope and goals. 2) Reconnaissance — gather information. 3) Scanning — identify vulnerabilities. 4) Exploitation — attempt to exploit vulnerabilities. 5) Post-exploitation — determine impact. 6) Reporting — document findings. Report includes Executive Summary (for management), Technical Details (for IT team), Risk Rating, and Remediation steps."
          }
        ]
      }
    },
    yearWise: {
      2026: [
        { id: 1, marks: "2 Marks", text: "Define ethical hacking and mention one role of an ethical hacker.", answer: "Ethical hacking is authorized security testing to find vulnerabilities before malicious hackers." },
        { id: 2, marks: "2 Marks", text: "What is DNS interrogation?", answer: "Querying DNS servers to gather domain information like IP addresses and mail servers." },
        { id: 3, marks: "2 Marks", text: "What is a brute force attack?", answer: "Trial-and-error method to decode passwords by trying all possible combinations." },
        { id: 4, marks: "2 Marks", text: "Define SQL Injection.", answer: "Inserting malicious SQL into input fields to manipulate database." },
        { id: 5, marks: "2 Marks", text: "What is phishing in social engineering?", answer: "Sending fraudulent messages disguised as legitimate to steal sensitive information." },
        { id: 6, marks: "10 Marks", text: "Explain the phases of hacking in detail.", answer: "5 phases: Reconnaissance, Scanning, Gaining Access, Maintaining Access, Covering Tracks." },
        { id: 7, marks: "10 Marks", text: "Discuss ethical hacking, types of hackers, and cyber laws.", answer: "White Hat, Black Hat, Grey Hat hackers. IT Act 2000 covers cybercrime in India." },
        { id: 8, marks: "10 Marks", text: "Explain footprinting techniques and tools.", answer: "Active and passive footprinting using WHOIS, Nslookup, Google Dorking, Maltego." },
        { id: 9, marks: "10 Marks", text: "Describe scanning and enumeration techniques.", answer: "Network, port, vulnerability scanning using Nmap, Netstat, enum4linux." },
        {
            id: 10,
            marks: "10 Marks",
            text: "Explain password cracking techniques and privilege escalation.",
            answer: "Password cracking techniques: 1) Dictionary attack — uses wordlist of common passwords. 2) Brute force — tries all combinations. 3) Rainbow table — uses precomputed hash values. 4) Social engineering — tricks users into revealing passwords. Tools: John the Ripper, Hashcat. Privilege escalation is gaining higher access rights than initially granted, either vertically (user to admin) or horizontally (same level different user)."
          },
          {
            id: 11,
            marks: "10 Marks",
            text: "Discuss malware types and common exploitation techniques.",
            answer: "Malware types: Virus (attaches to files), Worm (self-replicating), Trojan (disguised as legitimate software), Ransomware (encrypts files for ransom), Spyware (secretly monitors user). Exploitation techniques: Buffer overflow, SQL injection, Cross-site scripting (XSS), Zero-day exploits. Tools: Metasploit Framework is commonly used for exploitation."
          },
          {
            id: 12,
            marks: "10 Marks",
            text: "Explain OWASP Top 10 vulnerabilities.",
            answer: "OWASP Top 10 are most critical web security risks: 1) Broken Access Control, 2) Cryptographic Failures, 3) Injection (SQL, NoSQL), 4) Insecure Design, 5) Security Misconfiguration, 6) Vulnerable Components, 7) Authentication Failures, 8) Software Integrity Failures, 9) Logging Failures, 10) Server-Side Request Forgery (SSRF)."
          },
          {
            id: 13,
            marks: "10 Marks",
            text: "Describe penetration testing phases and report writing.",
            answer: "Penetration testing phases: 1) Planning — define scope and goals. 2) Reconnaissance — gather information. 3) Scanning — identify vulnerabilities. 4) Exploitation — attempt to exploit vulnerabilities. 5) Post-exploitation — determine impact. 6) Reporting — document findings. Report includes Executive Summary (for management), Technical Details (for IT team), Risk Rating, and Remediation steps."
          }
      ]
    }
  },
  "cyber-forensics": {
    name: "Cyber Forensics & Incident Response",
    code: "B23-CTS-602",
    color: "#a78bfa",
    semester: "Semester 6",
    course: "BCA CTIS",
    units: {
      1: {
        title: "Introduction to Cyber Forensics",
        questions: [
        //   { id: 1, marks: "2 Marks", text: "Define Digital Forensics.", answer: "Digital Forensics is the process of collecting, preserving, analyzing, and presenting digital evidence from electronic devices in a legally acceptable manner." },
        //   { id: 2, marks: "2 Marks", text: "What is Hashing?", answer: "Hashing is a process of converting data into a fixed-size string using algorithms like MD5 or SHA. In forensics, it verifies data integrity — if hash matches, data is unmodified." },
        //   { id: 3, marks: "2 Marks", text: "What is NTFS?", answer: "NTFS (New Technology File System) is Microsoft's advanced file system that supports large files, encryption, compression, and detailed access permissions." },
          { id: 4, marks: "10 Marks", text: "How Digital Forensic is used in Incident Response?", answer: "Digital forensics in incident response involves: 1) Identification — detect the incident. 2) Collection — gather evidence without altering it. 3) Preservation — maintain chain of custody. 4) Analysis — examine evidence for clues. 5) Documentation — record all findings. 6) Presentation — present findings in court if needed." },
          { id: 5, marks: "10 Marks", text: "Differentiate between Incident Response and Digital Forensics.", answer: "Incident Response focuses on containing and recovering from security incidents quickly. Digital Forensics focuses on collecting and analyzing evidence after an incident. IR is reactive and time-sensitive; forensics is methodical and evidence-focused." }
        ]
      },
      2: {
        title: "Forensic Cloning & Data Acquisition",
        questions: [
          { id: 6, marks: "10 Marks", text: "Explain crucial components in Cloning and key Forensic Cloning techniques & methods of Data acquisition.", answer: "Forensic cloning creates exact bit-by-bit copy of storage media. Key components: Write blocker (prevents modification), Hash verification (ensures integrity). Techniques: Disk imaging (dd command), Live acquisition (from running system). Tools: FTK Imager, Autopsy, dd." },
          { id: 7, marks: "10 Marks", text: "What are the key features and benefits of NTFS? Give comparison between NTFS with FAT.", answer: "NTFS features: Large file support (>4GB), Encryption (EFS), Compression, Access control lists, Journaling. FAT vs NTFS: FAT has no encryption/permissions, simpler structure. NTFS is more secure and reliable for modern systems." }
        ]
      },
      3: {
        title: "Data Ownership & Network Forensics",
        questions: [
          { id: 8, marks: "10 Marks", text: "What are the key issues in Data Ownership and Jurisdiction? Explain the legal and technical hurdles.", answer: "Data ownership issues: Who owns cloud data? Legal jurisdiction varies by country. Technical hurdles: Encrypted data, cloud storage across borders, volatile data loss. Legal hurdles: Different cybercrime laws in different countries, privacy regulations like GDPR." },
          { id: 9, marks: "10 Marks", text: "Define Wireshark. Explain in detail the working of Wireshark.", answer: "Wireshark is a network protocol analyzer used to capture and analyze network traffic in real-time. Working: Captures packets from network interface, decodes protocols (TCP/IP, HTTP, DNS), displays packet details (source, destination, payload). Used for troubleshooting, security analysis, and forensic investigation." }
        ]
      },
      4: {
        title: "Incident Response & Forensic Reporting",
        questions: [
          { id: 10, marks: "10 Marks", text: "Write short note on Incident Response lifecycle.", answer: "Incident Response lifecycle has 6 phases: 1) Preparation — policies, tools ready. 2) Identification — detect incident. 3) Containment — limit damage. 4) Eradication — remove threat. 5) Recovery — restore systems. 6) Lessons Learned — improve for future." },
          { id: 11, marks: "10 Marks", text: "Define Forensic report writing and presenting evidence. What are the key principles?", answer: "Forensic report must be: Accurate (factual only), Clear (understandable to non-technical), Complete (all findings included), Objective (unbiased). Key principles: Chain of custody maintained, Evidence integrity verified through hashing, All steps documented." }
        ]
      }
    },
    yearWise: {
      2026: [
        { id: 1, marks: "2 Marks", text: "Define Digital Forensics.", answer: "Process of collecting, preserving, analyzing digital evidence in legally acceptable manner." },
        { id: 2, marks: "2 Marks", text: "What is Hashing?", answer: "Converting data into fixed-size string to verify integrity using MD5 or SHA." },
        { id: 3, marks: "2 Marks", text: "What is NTFS?", answer: "New Technology File System supporting large files, encryption and access permissions." },
        { id: 4, marks: "2 Marks", text: "What is FTK Imager?", answer: "FTK Imager is a free digital forensic imaging and evidence preview tool developed by Exterro. It is widely used by digital forensic investigators, cybersecurity professionals, law enforcement agencies, and incident response teams to create forensic copies (images) of storage devices without altering the original data." },
        { id: 5, marks: "2 Marks", text: "What is Forensic Cloning?", answer: "Forensic Cloning is the process of creating an exact bit-by-bit copy of a storage device, including all files, deleted data, free space, and system information, without modifying the original evidence. It is used in digital forensics to preserve data integrity for investigation and legal purposes." },
        { id: 6, marks: "10 Marks", text: "How Digital Forensic is used in Incident Response?", answer: "Digital forensics in incident response involves: 1) Identification — detect the incident. 2) Collection — gather evidence without altering it. 3) Preservation — maintain chain of custody. 4) Analysis — examine evidence for clues. 5) Documentation — record all findings. 6) Presentation — present findings in court if needed." },
        { id: 7, marks: "10 Marks", text: "Differentiate between Incident Response and Digital Forensics.", answer: "Incident Response focuses on containing and recovering from security incidents quickly. Digital Forensics focuses on collecting and analyzing evidence after an incident. IR is reactive and time-sensitive; forensics is methodical and evidence-focused." },
        { id: 8, marks: "10 Marks", text: "Explain crucial components in Cloning and key Forensic Cloning techniques & methods of Data acquisition.", answer: "Forensic cloning creates exact bit-by-bit copy of storage media. Key components: Write blocker (prevents modification), Hash verification (ensures integrity). Techniques: Disk imaging (dd command), Live acquisition (from running system). Tools: FTK Imager, Autopsy, dd." },
        { id: 9, marks: "10 Marks", text: "What are the key features and benefits of NTFS? Give comparison between NTFS with FAT.", answer: "NTFS features: Large file support (>4GB), Encryption (EFS), Compression, Access control lists, Journaling. FAT vs NTFS: FAT has no encryption/permissions, simpler structure. NTFS is more secure and reliable for modern systems." },
        { id: 10, marks: "10 Marks", text: "What are the key issues in Data Ownership and Jurisdiction? Explain the legal and technical hurdles.", answer: "Data ownership issues: Who owns cloud data? Legal jurisdiction varies by country. Technical hurdles: Encrypted data, cloud storage across borders, volatile data loss. Legal hurdles: Different cybercrime laws in different countries, privacy regulations like GDPR." },
        { id: 11, marks: "10 Marks", text: "Define Wireshark. Explain in detail the working of Wireshark.", answer: "Wireshark is a network protocol analyzer used to capture and analyze network traffic in real-time. Working: Captures packets from network interface, decodes protocols (TCP/IP, HTTP, DNS), displays packet details (source, destination, payload). Used for troubleshooting, security analysis, and forensic investigation." },
        { id: 12, marks: "10 Marks", text: "Write short note on Incident Response lifecycle.", answer: "Incident Response lifecycle has 6 phases: 1) Preparation — policies, tools ready. 2) Identification — detect incident. 3) Containment — limit damage. 4) Eradication — remove threat. 5) Recovery — restore systems. 6) Lessons Learned — improve for future." },
        { id: 13, marks: "10 Marks", text: "Define Forensic report writing and presenting evidence. What are the key principles?", answer: "Forensic report must be: Accurate (factual only), Clear (understandable to non-technical), Complete (all findings included), Objective (unbiased). Key principles: Chain of custody maintained, Evidence integrity verified through hashing, All steps documented." }
      ]
    }
  },
  "cloud-deployment": {
    name: "Cloud Deployment & Automation",
    code: "B23-CTS-603",
    color: "#34d399",
    semester: "Semester 6",
    course: "BCA CTIS",
    units: {
      1: {
        title: "Cloud Deployment Models",
        questions: [
          { id: 1, marks: "2 Marks", text: "Define cloud deployment models.", answer: "Cloud deployment models define how cloud infrastructure is set up and who has access. Main types: Public (shared infrastructure), Private (dedicated), Hybrid (mix of both), Multi-cloud (multiple providers)." },
          { id: 2, marks: "2 Marks", text: "What is Infrastructure as Code (IaC)?", answer: "IaC is the practice of managing and provisioning computing infrastructure through machine-readable configuration files rather than manual processes. Tools: Terraform, AWS CloudFormation." },
          { id: 3, marks: "10 Marks", text: "Explain cloud deployment models with advantages and use cases. Also compare AWS and Azure.", answer: "Public cloud: Cost-effective, scalable (AWS, Azure). Private cloud: More control, security (on-premises). Hybrid: Flexibility. Multi-cloud: Avoids vendor lock-in. AWS vs Azure: AWS has wider service range, Azure better integrates with Microsoft products. Both offer compute, storage, and networking services." },
          { id: 4, marks: "10 Marks", text: "Describe Storage options: Azure Blob, file & block storage. Also explain Subnets & load balancer.", answer: "Azure Blob: Unstructured data (images, videos). File storage: Shared file system. Block storage: High-performance databases. Subnet divides network into smaller segments for security. Load balancer distributes incoming traffic across multiple servers to ensure availability and reliability." }
        ]
      },
      2: {
        title: "AWS & Azure CLI",
        questions: [
          { id: 5, marks: "10 Marks", text: "Explain AWS Cloud Formation with Stacks and Templates.", answer: "AWS CloudFormation allows infrastructure as code. Template: JSON/YAML file defining resources. Stack: Collection of AWS resources created from template. Benefits: Automated deployment, version control, rollback capability." },
          { id: 6, marks: "10 Marks", text: "Explain AWS CLI and Azure CLI with automation use cases.", answer: "AWS CLI: Command-line tool to manage AWS services. Azure CLI: Command-line tool for Azure. Use cases: Automated deployment scripts, batch operations, CI/CD pipeline integration. Both support scripting in Bash and PowerShell for automation." }
        ]
      },
      3: {
        title: "Configuration Management & CI/CD",
        questions: [
          { id: 7, marks: "10 Marks", text: "Explain configuration management tools: Ansible, Chef, Puppet.", answer: "Ansible: Agentless, uses YAML playbooks, simple to learn. Chef: Uses Ruby-based recipes, agent-based. Puppet: Declarative language, agent-based, good for large scale. All three automate server configuration and application deployment." },
          { id: 8, marks: "10 Marks", text: "Write short note on CI/CD concepts and AWS CodePipeline & CodeBuild.", answer: "CI (Continuous Integration): Automatically test and merge code changes. CD (Continuous Deployment): Automatically deploy tested code. AWS CodePipeline: Orchestrates build, test, deploy stages. AWS CodeBuild: Compiles code, runs tests, produces deployable packages." }
        ]
      },
      4: {
        title: "Cloud Monitoring & Security",
        questions: [
          { id: 9, marks: "10 Marks", text: "Explain cloud monitoring tools: AWS CloudWatch and Azure Monitor.", answer: "AWS CloudWatch: Monitors AWS resources, collects metrics and logs, sets alarms, creates dashboards. Azure Monitor: Collects data from Azure resources, provides analytics, alerts, and visualization. Both help in proactive monitoring and troubleshooting." },
          { id: 10, marks: "10 Marks", text: "Explain IAM roles & policies and Disaster recovery planning.", answer: "IAM (Identity Access Management): Controls who can access what resources. Roles: Define permissions. Policies: JSON documents defining allowed actions. Disaster Recovery: RPO (Recovery Point Objective) defines data loss tolerance. RTO (Recovery Time Objective) defines downtime tolerance. Strategies: Backup & restore, Pilot light, Warm standby, Multi-site." }
        ]
      }
    },
    yearWise: {
      2026: [
        { id: 1, marks: "2 Marks", text: "Define cloud deployment models.", answer: "Public, private, hybrid, multi-cloud models defining infrastructure setup and access." },
        { id: 2, marks: "2 Marks", text: "What is Infrastructure as Code (IaC)?", answer: "Managing infrastructure through configuration files instead of manual processes." }
      ]
    }
  },
  "blockchain": {
    name: "Basics of Blockchain",
    code: "B23-CTS-604",
    color: "#fbbf24",
    semester: "Semester 6",
    course: "BCA CTIS",
    units: {
      1: {
        title: "Introduction to Blockchain",
        questions: [
          { id: 1, marks: "2 Marks", text: "Define Distributed ledger.", answer: "A distributed ledger is a database shared and synchronized across multiple locations. No central authority controls it — all participants have equal access to the same data." },
          { id: 2, marks: "2 Marks", text: "What is Ethereum Virtual Machine?", answer: "EVM is a computation engine in Ethereum that executes smart contracts. It provides an isolated environment where code runs without affecting the main network." },
          { id: 3, marks: "2 Marks", text: "What is Consensus?", answer: "Consensus is a mechanism by which all nodes in a blockchain network agree on the validity of transactions. Examples: Proof of Work (PoW), Proof of Stake (PoS)." },
          { id: 4, marks: "2 Marks", text: "What is Digital Signature?", answer: "A digital signature is a cryptographic technique that verifies the authenticity and integrity of a digital message or transaction using public-private key pairs." },
          { id: 5, marks: "2 Marks", text: "What is Mining Pool?", answer: "A mining pool is a group of cryptocurrency miners who combine their computational resources to increase their chances of mining a block and share the rewards." },
          { id: 6, marks: "10 Marks", text: "Explain Centralized and Decentralized Blockchain systems.", answer: "Centralized: Single authority controls data (banks, traditional databases). Fast but single point of failure. Decentralized (Blockchain): No single authority, data distributed across nodes. Advantages: Transparent, immutable, no single failure point. Disadvantages: Slower, energy intensive." },
          { id: 7, marks: "10 Marks", text: "Explain the applications of Blockchain in Supply chain.", answer: "Blockchain in supply chain: Product tracking from origin to consumer, prevents counterfeiting, real-time visibility. Examples: Walmart uses blockchain for food traceability, Maersk for shipping. Benefits: Transparency, reduced fraud, faster recalls, automated payments via smart contracts." }
        ]
      },
      2: {
        title: "Block Structure & Security",
        questions: [
          { id: 8, marks: "10 Marks", text: "Explain structure of block in detail.", answer: "A block contains: Block Header (previous block hash, timestamp, nonce, merkle root), Transaction Data (list of all transactions), Block Hash (unique identifier). Chain: Each block references previous block's hash, making tampering impossible without redoing all subsequent blocks." },
          { id: 9, marks: "10 Marks", text: "Explain different security threats in Blockchain and measures for Protection and Mitigation.", answer: "Threats: 51% attack (majority control of network), Sybil attack (fake identities), Smart contract vulnerabilities, Private key theft. Protection: Consensus mechanisms, Regular audits, Multi-signature wallets, Hardware security modules." }
        ]
      },
      3: {
        title: "Blockchain Layers & Bitcoin",
        questions: [
          { id: 10, marks: "10 Marks", text: "Briefly explain the different layers of Blockchain.", answer: "Layer 0: Internet infrastructure. Layer 1: Main blockchain (Bitcoin, Ethereum) — consensus, security. Layer 2: Built on top of Layer 1 for scalability (Lightning Network). Layer 3: Application layer (DApps, smart contracts). Each layer serves specific purpose." },
          { id: 11, marks: "10 Marks", text: "Explain Transaction Workflow in Bitcoin.", answer: "Bitcoin transaction: 1) User initiates transaction with recipient address and amount. 2) Transaction broadcast to network. 3) Miners verify transaction. 4) Transaction included in block. 5) Block added to blockchain after proof of work. 6) After 6 confirmations, transaction considered final." }
        ]
      },
      4: {
        title: "Blockchain Limitations & Applications",
        questions: [
          { id: 12, marks: "10 Marks", text: "What are the different limitations of Blockchain?", answer: "Limitations: Scalability (limited transactions per second), Energy consumption (PoW mining), Irreversibility (mistakes cannot be undone), Regulatory uncertainty, Storage requirements (entire chain must be stored), Latency (slow confirmation times compared to traditional databases)." },
          { id: 13, marks: "10 Marks", text: "Explain any case study of e-Governance initiatives using Blockchain in any Indian state.", answer: "Andhra Pradesh Blockchain initiative: Land records management using blockchain. Benefits: Transparent ownership records, reduced fraud, faster property transfers, eliminated middlemen. Telangana uses blockchain for certificate verification. These initiatives reduce corruption and increase citizen trust in government services." }
        ]
      }
    },
    yearWise: {
      2026: [
        { id: 1, marks: "2 Marks", text: "Define Distributed ledger.", answer: "Database shared across multiple locations with no central authority." },
        { id: 2, marks: "2 Marks", text: "What is Ethereum Virtual Machine?", answer: "Computation engine in Ethereum that executes smart contracts in isolated environment." }
      ]
    }
  },
  "uiux-figma": {
    name: "UI/UX Design Using Figma",
    code: "BAO/M-26",
    color: "#f472b6",
    semester: "Semester 6",
    course: "BCA CTIS",
    units: {
      1: {
        title: "Introduction to UI/UX",
        questions: [
          { id: 1, marks: "2 Marks", text: "Write any two differences between UI and UX.", answer: "UI (User Interface) focuses on visual elements like buttons, colors, typography. UX (User Experience) focuses on overall user journey and satisfaction. UI is about how it looks; UX is about how it works." },
          { id: 2, marks: "2 Marks", text: "Why is user-centered design important in interface development?", answer: "User-centered design ensures the product meets actual user needs, reduces usability errors, increases satisfaction, and leads to higher adoption rates." },
          { id: 3, marks: "2 Marks", text: "What are frames and shapes in Figma?", answer: "Frames in Figma are containers that hold design elements, similar to artboards. Shapes are basic geometric elements (rectangle, circle, polygon) used to build UI components." },
          { id: 4, marks: "2 Marks", text: "What is the role of transitions and animations in prototyping?", answer: "Transitions and animations simulate real app behaviour, help users understand navigation flow, and make prototypes feel more realistic during user testing." },
          { id: 5, marks: "2 Marks", text: "What is included in a mini design project presentation?", answer: "A mini design project presentation includes problem statement, user research, wireframes, prototype screens, and design decisions explanation." },
          { id: 6, marks: "10 Marks", text: "Define UI and UX design. Explain the major differences between UI and UX with examples.", answer: "UI Design: Creating visual elements users interact with — buttons, icons, color schemes, typography. Example: Instagram's like button design. UX Design: Entire user journey from discovering to using the product. Example: Instagram's smooth scrolling and easy posting flow. Key differences: UI is visual, UX is experiential. UI asks 'Does it look good?' UX asks 'Does it work well?' Both are essential for successful products." },
          { id: 7, marks: "10 Marks", text: "Explain the basic design principles used in UI/UX design. How do these principles improve usability?", answer: "Key principles: 1) Consistency — same elements look same everywhere. 2) Visual Hierarchy — important elements stand out. 3) Contrast — distinguish between elements. 4) Alignment — organized layout. 5) White Space — breathing room for elements. 6) Feedback — system responds to user actions. These improve usability by reducing learning curve and making interfaces intuitive." }
        ]
      },
      2: {
        title: "Figma as Design Tool",
        questions: [
          { id: 8, marks: "10 Marks", text: "Introduce Figma as a design tool. Explain its interface and commonly used tools.", answer: "Figma is a web-based collaborative design tool. Interface: Left panel (layers, assets), Center canvas, Right panel (properties). Tools: Frame tool (F), Rectangle (R), Text (T), Pen tool (P), Component creation. Key features: Real-time collaboration, Cloud-based, Components and variants, Auto-layout, Prototyping." },
          { id: 9, marks: "10 Marks", text: "What is a wireframe? Explain how to draw wireframes for a simple website or mobile application using Figma.", answer: "Wireframe is a low-fidelity skeleton of a design showing layout without visual details. Steps in Figma: 1) Create frame (phone or web size). 2) Use rectangles for content blocks. 3) Add text placeholders. 4) Show navigation structure. 5) Mark interactive elements. Wireframes help validate layout before investing in visual design." }
        ]
      },
      3: {
        title: "Multiple Screens & Interaction Testing",
        questions: [
          { id: 10, marks: "10 Marks", text: "Explain the process of creating multiple screens for a web or mobile application. Why is consistency important across screens?", answer: "Creating multiple screens: 1) Define user flow. 2) Create individual frames for each screen. 3) Use same component library across screens. 4) Maintain consistent spacing and typography. Consistency importance: Users learn patterns once and apply everywhere, reduces confusion, builds trust, professional appearance." },
          { id: 11, marks: "10 Marks", text: "Explain how interaction testing is performed in Figma to check usability of a design.", answer: "Interaction testing in Figma: 1) Create prototype connections between frames. 2) Set trigger (on click, hover). 3) Set animation (instant, dissolve, slide). 4) Share prototype link with users. 5) Observe user interactions. 6) Collect feedback. 7) Iterate design. This validates whether design is intuitive before development." }
        ]
      },
      4: {
        title: "Design Feedback & Export",
        questions: [
          { id: 12, marks: "10 Marks", text: "Describe how designers improve designs based on feedback with suitable examples.", answer: "Design iteration process: 1) Share prototype with users or stakeholders. 2) Collect feedback through observation and interviews. 3) Identify pain points. 4) Prioritize changes. 5) Implement improvements. 6) Test again. Example: If users cannot find the login button, move it to more prominent position. Continuous feedback loop leads to better user experience." },
          { id: 13, marks: "10 Marks", text: "Describe the process of exporting assets and design files in Figma. Why is proper export important for developers?", answer: "Exporting in Figma: Select element, click Export in right panel, choose format (PNG, SVG, PDF), set scale (1x, 2x for retina). Developer handoff: Inspect panel shows CSS values, spacing, colors. Importance: Developers get exact specifications, reduces back-and-forth, maintains design quality in final product." }
        ]
      }
    },
    yearWise: {
      2026: [
        { id: 1, marks: "2 Marks", text: "Write any two differences between UI and UX.", answer: "UI focuses on visual elements; UX focuses on overall user experience and journey." },
        { id: 2, marks: "2 Marks", text: "Why is user-centered design important?", answer: "Ensures product meets user needs, reduces errors, increases satisfaction." }
      ]
    }
  },
  "os": {
    name: "Operating System",
    code: "BCA-301",
    color: "#4f8ef7",
    semester: "Semester 3",
    course: "BCA General",
    units: {
      1: {
        title: "Introduction & Process Management",
        questions: [
          { id: 1, marks: "2 Marks", text: "What is an Operating System?", answer: "An OS is system software acting as interface between user and hardware, managing resources and providing services." },
          { id: 2, marks: "5 Marks", text: "Explain CPU Scheduling with its types.", answer: "CPU Scheduling decides which process gets CPU. Types: FCFS, SJF, Priority, Round Robin, SRTF." },
          { id: 3, marks: "10 Marks", text: "What is a Process? Explain Process States.", answer: "A process is a program in execution. 5 states: New, Ready, Running, Waiting, Terminated." }
        ]
      },
      2: { title: "Memory Management", questions: [{ id: 4, marks: "2 Marks", text: "What is Paging?", answer: "Memory management dividing process into fixed-size pages mapped to physical frames." }] },
      3: { title: "File System", questions: [{ id: 5, marks: "2 Marks", text: "What is a File System?", answer: "Method to organize, store, retrieve files on storage devices." }] },
      4: { title: "Deadlock & Security", questions: [{ id: 6, marks: "5 Marks", text: "What is Deadlock?", answer: "Situation where processes block each other forever. Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait." }] }
    },
    yearWise: {}
  },
  "dbms": {
    name: "DBMS",
    code: "BCA-302",
    color: "#34d399",
    semester: "Semester 3",
    course: "BCA General",
    units: {
      1: { title: "Introduction & ER Model", questions: [{ id: 1, marks: "2 Marks", text: "What is DBMS?", answer: "Software managing databases for storage, retrieval, manipulation with security and reduced redundancy." }] },
      2: { title: "Normalization", questions: [{ id: 2, marks: "5 Marks", text: "What is Normalization?", answer: "Organizing data to reduce redundancy. 1NF, 2NF, 3NF progressive normal forms." }] },
      3: { title: "SQL", questions: [{ id: 3, marks: "2 Marks", text: "Difference between DDL and DML?", answer: "DDL defines structure (CREATE, ALTER). DML manipulates data (INSERT, UPDATE, DELETE)." }] },
      4: { title: "Transactions", questions: [{ id: 4, marks: "5 Marks", text: "What is a Transaction? Explain ACID.", answer: "Sequence of operations as single unit. ACID: Atomicity, Consistency, Isolation, Durability." }] }
    },
    yearWise: {}
  },
  "c-programming": {
    name: "Computer Fundamentals & C++",
    code: "BCA-101",
    color: "#fbbf24",
    semester: "Semester 1",
    course: "BCA General",
    units: {
      1: { title: "Introduction & Control Structures", questions: [{ id: 1, marks: "2 Marks", text: "Difference between Compiler and Interpreter?", answer: "Compiler converts whole code at once. Interpreter executes line by line." }] },
      2: { title: "Arrays & Strings", questions: [{ id: 2, marks: "2 Marks", text: "What is an Array?", answer: "Collection of same data type elements in contiguous memory locations." }] },
      3: { title: "Functions & Pointers", questions: [{ id: 3, marks: "5 Marks", text: "What is a Pointer?", answer: "Variable storing memory address of another variable." }] },
      4: { title: "Structures & File Handling", questions: [{ id: 4, marks: "5 Marks", text: "What is a Structure in C?", answer: "User-defined data type grouping different data types under one name." }] }
    },
    yearWise: {}
  }
};