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
          {
            id: 6,
            marks: "10 Marks",
            text: "Explain the phases of hacking in detail.",
            answer: {
        text: "Hacking has 5 phases: 1) Reconnaissance — gathering information about target (active/passive).",
        points: [
          "2) Scanning — identifying open ports, services, vulnerabilities using tools like Nmap.",
          "3) Gaining Access — exploiting vulnerabilities to enter the system.",
          "4) Maintaining Access — installing backdoors to retain access.",
          "5) Covering Tracks — deleting logs to hide evidence of intrusion."
        ]
      }
          },
          {
            id: 7,
            marks: "10 Marks",
            text: "Discuss ethical hacking, types of hackers, and cyber laws.",
            answer: {
        text: "Ethical hacking is authorized security testing.",
        points: [
          "Types of hackers: White Hat (ethical, authorized), Black Hat (malicious, unauthorized), Grey Hat (sometimes unauthorized but not malicious).",
          "Cyber laws in India include IT Act 2000 which covers unauthorized access, data theft, and cybercrime penalties."
        ]
      }
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
            answer: {
        text: "Footprinting is the first step of ethical hacking — gathering information about target.",
        points: [
          "Types: Active footprinting (direct interaction with target) and Passive footprinting (using public sources).",
          "Tools include WHOIS (domain info), Nslookup (DNS info), Google Dorking (advanced search), Maltego (relationship mapping), and Shodan (internet-connected devices)."
        ]
      }
          },
          {
            id: 9,
            marks: "10 Marks",
            text: "Describe scanning and enumeration techniques.",
            answer: {
        text: "Scanning identifies active hosts, open ports, and services.",
        points: [
          "Types: Network scanning (find active devices), Port scanning (find open ports), Vulnerability scanning (find weaknesses).",
          "Enumeration extracts detailed info like usernames, shares, and services.",
          "Tools: Nmap (port scanning), Netstat (network connections), enum4linux (Linux enumeration)."
        ]
      }
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
            answer: {
        text: "Password cracking techniques: 1) Dictionary attack — uses wordlist of common passwords. 2) Brute force — tries all combinations. 3) Rainbow table — uses precomputed hash values. 4) Social engineering — tricks users into revealing passwords.",
        points: [
          "Tools: John the Ripper, Hashcat.",
          "Privilege escalation is gaining higher access rights than initially granted, either vertically (user to admin) or horizontally (same level different user)."
        ]
      }
          },
          {
            id: 11,
            marks: "10 Marks",
            text: "Discuss malware types and common exploitation techniques.",
            answer: {
        text: "Malware types: Virus (attaches to files), Worm (self-replicating), Trojan (disguised as legitimate software), Ransomware (encrypts files for ransom), Spyware (secretly monitors user).",
        points: [
          "Exploitation techniques: Buffer overflow, SQL injection, Cross-site scripting (XSS), Zero-day exploits.",
          "Tools: Metasploit Framework is commonly used for exploitation."
        ]
      }
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
            answer: {
        text: "Penetration testing phases: 1) Planning — define scope and goals. 2) Reconnaissance — gather information. 3) Scanning — identify vulnerabilities. 4) Exploitation — attempt to exploit vulnerabilities. 5) Post-exploitation — determine impact. 6) Reporting — document findings.",
        points: [
          "Report includes Executive Summary (for management), Technical Details (for IT team), Risk Rating, and Remediation steps."
        ]
      }
          }
        ]
      }
    },
    yearWise: {
      2026: [
        { id: 1, section: "Compulsory Question", marks: "2 Marks", text: "Define ethical hacking and mention one role of an ethical hacker.", answer: "Ethical hacking is authorized security testing to find vulnerabilities before malicious hackers." },
        { id: 2, section: "Compulsory Question", marks: "2 Marks", text: "What is DNS interrogation?", answer: "Querying DNS servers to gather domain information like IP addresses and mail servers." },
        { id: 3, section: "Compulsory Question", marks: "2 Marks", text: "What is a brute force attack?", answer: "Trial-and-error method to decode passwords by trying all possible combinations." },
        { id: 4, section: "Compulsory Question", marks: "2 Marks", text: "Define SQL Injection.", answer: "Inserting malicious SQL into input fields to manipulate database." },
        { id: 5, section: "Compulsory Question", marks: "2 Marks", text: "What is phishing in social engineering?", answer: "Sending fraudulent messages disguised as legitimate to steal sensitive information." },
        { id: 6, section: "Unit 1", marks: "10 Marks", text: "Explain the phases of hacking in detail.", answer: "5 phases: Reconnaissance, Scanning, Gaining Access, Maintaining Access, Covering Tracks." },
        { id: 7, section: "Unit 1", marks: "10 Marks", text: "Discuss ethical hacking, types of hackers, and cyber laws.", answer: {
        text: "White Hat, Black Hat, Grey Hat hackers.",
        points: [
          "IT Act 2000 covers cybercrime in India."
        ]
      } },
        { id: 8, section: "Unit 2", marks: "10 Marks", text: "Explain footprinting techniques and tools.", answer: "Active and passive footprinting using WHOIS, Nslookup, Google Dorking, Maltego." },
        { id: 9, section: "Unit 2", marks: "10 Marks", text: "Describe scanning and enumeration techniques.", answer: "Network, port, vulnerability scanning using Nmap, Netstat, enum4linux." },
        { id: 10, section: "Unit 3", marks: "10 Marks", text: "Explain password cracking techniques and privilege escalation.", answer: {
        text: "Dictionary attack, brute force, rainbow table, social engineering.",
        points: [
          "Tools: John the Ripper, Hashcat.",
          "Privilege escalation gains higher access rights."
        ]
      } },
        { id: 11, section: "Unit 3", marks: "10 Marks", text: "Discuss malware types and common exploitation techniques.", answer: {
        text: "Virus, Worm, Trojan, Ransomware, Spyware.",
        points: [
          "Exploitation: Buffer overflow, SQL injection, XSS, Zero-day.",
          "Tool: Metasploit."
        ]
      } },
        { id: 12, section: "Unit 4", marks: "10 Marks", text: "Explain OWASP Top 10 vulnerabilities.", answer: "Broken Access Control, Cryptographic Failures, Injection, Insecure Design, Security Misconfiguration, and more." },
        { id: 13, section: "Unit 4", marks: "10 Marks", text: "Describe penetration testing phases and report writing.", answer: "Planning, Reconnaissance, Scanning, Exploitation, Post-exploitation, Reporting." }
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
          { id: 4, marks: "10 Marks", text: "How Digital Forensic is used in Incident Response?", answer: {
        text: "Digital forensics in incident response involves: 1) Identification — detect the incident.",
        points: [
          "2) Collection — gather evidence without altering it.",
          "3) Preservation — maintain chain of custody.",
          "4) Analysis — examine evidence for clues.",
          "5) Documentation — record all findings.",
          "6) Presentation — present findings in court if needed."
        ]
      } },
          { id: 5, marks: "10 Marks", text: "Differentiate between Incident Response and Digital Forensics.", answer: {
        text: "Incident Response focuses on containing and recovering from security incidents quickly.",
        points: [
          "Digital Forensics focuses on collecting and analyzing evidence after an incident.",
          "IR is reactive and time-sensitive; forensics is methodical and evidence-focused."
        ]
      } }
        ]
      },
      2: {
        title: "Forensic Cloning & Data Acquisition",
        questions: [
          { id: 6, marks: "10 Marks", text: "Explain crucial components in Cloning and key Forensic Cloning techniques & methods of Data acquisition.", answer: {
        text: "Forensic cloning creates exact bit-by-bit copy of storage media.",
        points: [
          "Key components: Write blocker (prevents modification), Hash verification (ensures integrity).",
          "Techniques: Disk imaging (dd command), Live acquisition (from running system).",
          "Tools: FTK Imager, Autopsy, dd."
        ]
      } },
          { id: 7, marks: "10 Marks", text: "What are the key features and benefits of NTFS? Give comparison between NTFS with FAT.", answer: {
        text: "NTFS features: Large file support (>4GB), Encryption (EFS), Compression, Access control lists, Journaling.",
        points: [
          "FAT vs NTFS: FAT has no encryption/permissions, simpler structure.",
          "NTFS is more secure and reliable for modern systems."
        ]
      } }
        ]
      },
      3: {
        title: "Data Ownership & Network Forensics",
        questions: [
          { id: 8, marks: "10 Marks", text: "What are the key issues in Data Ownership and Jurisdiction? Explain the legal and technical hurdles.", answer: {
        text: "Data ownership issues: Who owns cloud data? Legal jurisdiction varies by country.",
        points: [
          "Technical hurdles: Encrypted data, cloud storage across borders, volatile data loss.",
          "Legal hurdles: Different cybercrime laws in different countries, privacy regulations like GDPR."
        ]
      } },
          { id: 9, marks: "10 Marks", text: "Define Wireshark. Explain in detail the working of Wireshark.", answer: {
        text: "Wireshark is a network protocol analyzer used to capture and analyze network traffic in real-time.",
        points: [
          "Working: Captures packets from network interface, decodes protocols (TCP/IP, HTTP, DNS), displays packet details (source, destination, payload).",
          "Used for troubleshooting, security analysis, and forensic investigation."
        ]
      } }
        ]
      },
      4: {
        title: "Incident Response & Forensic Reporting",
        questions: [
          { id: 10, marks: "10 Marks", text: "Write short note on Incident Response lifecycle.", answer: {
        text: "Incident Response lifecycle has 6 phases: 1) Preparation — policies, tools ready.",
        points: [
          "2) Identification — detect incident.",
          "3) Containment — limit damage.",
          "4) Eradication — remove threat.",
          "5) Recovery — restore systems.",
          "6) Lessons Learned — improve for future."
        ]
      } },
          { id: 11, marks: "10 Marks", text: "Define Forensic report writing and presenting evidence. What are the key principles?", answer: {
        text: "Forensic report must be: Accurate (factual only), Clear (understandable to non-technical), Complete (all findings included), Objective (unbiased).",
        points: [
          "Key principles: Chain of custody maintained, Evidence integrity verified through hashing, All steps documented."
        ]
      } }
        ]
      }
    },
    yearWise: {
      2026: [
        { id: 1, section: "Compulsory Question", marks: "2 Marks", text: "Define Digital Forensics.", answer: "Process of collecting, preserving, analyzing digital evidence in legally acceptable manner." },
        { id: 2, section: "Compulsory Question", marks: "2 Marks", text: "What is Hashing?", answer: "Converting data into fixed-size string to verify integrity using MD5 or SHA." },
        { id: 3, section: "Compulsory Question", marks: "2 Marks", text: "What is NTFS?", answer: "New Technology File System supporting large files, encryption and access permissions." },
        { id: 4, section: "Compulsory Question", marks: "2 Marks", text: "What is FTK Imager?", answer: "A free digital forensic imaging and evidence preview tool used to create forensic copies of storage devices without altering original data." },
        { id: 5, section: "Compulsory Question", marks: "2 Marks", text: "What is Forensic Cloning?", answer: "Creating an exact bit-by-bit copy of a storage device, including deleted data and free space, without modifying original evidence." },
        { id: 6, section: "Unit 1", marks: "10 Marks", text: "How Digital Forensic is used in Incident Response?", answer: "Identification, Collection, Preservation, Analysis, Documentation, Presentation." },
        { id: 7, section: "Unit 1", marks: "10 Marks", text: "Differentiate between Incident Response and Digital Forensics.", answer: "IR is reactive and time-sensitive; forensics is methodical and evidence-focused." },
        { id: 8, section: "Unit 2", marks: "10 Marks", text: "Explain crucial components in Cloning and key Forensic Cloning techniques & methods of Data acquisition.", answer: {
        text: "Write blocker, hash verification, disk imaging, live acquisition.",
        points: [
          "Tools: FTK Imager, Autopsy, dd."
        ]
      } },
        { id: 9, section: "Unit 2", marks: "10 Marks", text: "What are the key features and benefits of NTFS? Give comparison between NTFS with FAT.", answer: "NTFS supports large files, encryption, compression, journaling — more secure than FAT." },
        { id: 10, section: "Unit 3", marks: "10 Marks", text: "What are the key issues in Data Ownership and Jurisdiction? Explain the legal and technical hurdles.", answer: "Cloud data ownership, cross-border jurisdiction, encryption challenges, differing cybercrime laws." },
        { id: 11, section: "Unit 3", marks: "10 Marks", text: "Define Wireshark. Explain in detail the working of Wireshark.", answer: "Network protocol analyzer capturing and decoding packets in real-time for troubleshooting and forensic investigation." },
        { id: 12, section: "Unit 4", marks: "10 Marks", text: "Write short note on Incident Response lifecycle.", answer: "Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned." },
        { id: 13, section: "Unit 4", marks: "10 Marks", text: "Define Forensic report writing and presenting evidence. What are the key principles?", answer: "Accurate, Clear, Complete, Objective reporting with chain of custody maintained." }
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
          { id: 1, marks: "2 Marks", text: "Define cloud deployment models.", answer: {
        text: "Cloud deployment models define how cloud infrastructure is set up and who has access.",
        points: [
          "Main types: Public (shared infrastructure), Private (dedicated), Hybrid (mix of both), Multi-cloud (multiple providers)."
        ]
      } },
          { id: 2, marks: "2 Marks", text: "What is Infrastructure as Code (IaC)?", answer: {
        text: "IaC is the practice of managing and provisioning computing infrastructure through machine-readable configuration files rather than manual processes.",
        points: [
          "Tools: Terraform, AWS CloudFormation."
        ]
      } },
          { id: 3, marks: "10 Marks", text: "Explain cloud deployment models with advantages and use cases. Also compare AWS and Azure.", answer: {
        text: "Public cloud: Cost-effective, scalable (AWS, Azure).",
        points: [
          "Private cloud: More control, security (on-premises).",
          "Hybrid: Flexibility.",
          "Multi-cloud: Avoids vendor lock-in.",
          "AWS vs Azure: AWS has wider service range, Azure better integrates with Microsoft products.",
          "Both offer compute, storage, and networking services."
        ]
      } },
          { id: 4, marks: "10 Marks", text: "Describe Storage options: Azure Blob, file & block storage. Also explain Subnets & load balancer.", answer: {
        text: "Azure Blob: Unstructured data (images, videos).",
        points: [
          "File storage: Shared file system.",
          "Block storage: High-performance databases.",
          "Subnet divides network into smaller segments for security.",
          "Load balancer distributes incoming traffic across multiple servers to ensure availability and reliability."
        ]
      } }
        ]
      },
      2: {
        title: "AWS & Azure CLI",
        questions: [
          { id: 5, marks: "10 Marks", text: "Explain AWS Cloud Formation with Stacks and Templates.", answer: {
        text: "AWS CloudFormation allows infrastructure as code.",
        points: [
          "Template: JSON/YAML file defining resources.",
          "Stack: Collection of AWS resources created from template.",
          "Benefits: Automated deployment, version control, rollback capability."
        ]
      } },
          { id: 6, marks: "10 Marks", text: "Explain AWS CLI and Azure CLI with automation use cases.", answer: {
        text: "AWS CLI: Command-line tool to manage AWS services.",
        points: [
          "Azure CLI: Command-line tool for Azure.",
          "Use cases: Automated deployment scripts, batch operations, CI/CD pipeline integration.",
          "Both support scripting in Bash and PowerShell for automation."
        ]
      } }
        ]
      },
      3: {
        title: "Configuration Management & CI/CD",
        questions: [
          { id: 7, marks: "10 Marks", text: "Explain configuration management tools: Ansible, Chef, Puppet.", answer: {
        text: "Ansible: Agentless, uses YAML playbooks, simple to learn.",
        points: [
          "Chef: Uses Ruby-based recipes, agent-based.",
          "Puppet: Declarative language, agent-based, good for large scale.",
          "All three automate server configuration and application deployment."
        ]
      } },
          { id: 8, marks: "10 Marks", text: "Write short note on CI/CD concepts and AWS CodePipeline & CodeBuild.", answer: {
        text: "CI (Continuous Integration): Automatically test and merge code changes.",
        points: [
          "CD (Continuous Deployment): Automatically deploy tested code.",
          "AWS CodePipeline: Orchestrates build, test, deploy stages.",
          "AWS CodeBuild: Compiles code, runs tests, produces deployable packages."
        ]
      } }
        ]
      },
      4: {
        title: "Cloud Monitoring & Security",
        questions: [
          { id: 9, marks: "10 Marks", text: "Explain cloud monitoring tools: AWS CloudWatch and Azure Monitor.", answer: {
        text: "AWS CloudWatch: Monitors AWS resources, collects metrics and logs, sets alarms, creates dashboards.",
        points: [
          "Azure Monitor: Collects data from Azure resources, provides analytics, alerts, and visualization.",
          "Both help in proactive monitoring and troubleshooting."
        ]
      } },
          { id: 10, marks: "10 Marks", text: "Explain IAM roles & policies and Disaster recovery planning.", answer: {
        text: "IAM (Identity Access Management): Controls who can access what resources.",
        points: [
          "Roles: Define permissions.",
          "Policies: JSON documents defining allowed actions.",
          "Disaster Recovery: RPO (Recovery Point Objective) defines data loss tolerance.",
          "RTO (Recovery Time Objective) defines downtime tolerance.",
          "Strategies: Backup & restore, Pilot light, Warm standby, Multi-site."
        ]
      } }
        ]
      }
    },
    yearWise: {
      2026: [
        { id: 1, section: "Compulsory Question", marks: "2 Marks", text: "Define cloud deployment models.", answer: "Public, private, hybrid, multi-cloud models defining infrastructure setup and access." },
        { id: 2, section: "Compulsory Question", marks: "2 Marks", text: "What is Infrastructure as Code (IaC)?", answer: "Managing infrastructure through configuration files instead of manual processes." },
        { id: 3, section: "Unit 1", marks: "10 Marks", text: "Explain cloud deployment models with advantages and use cases. Also compare AWS and Azure.", answer: "Public, private, hybrid, multi-cloud models with AWS vs Azure comparison." },
        { id: 4, section: "Unit 1", marks: "10 Marks", text: "Describe Storage options: Azure Blob, file & block storage. Also explain Subnets & load balancer.", answer: "Blob, file, block storage types; subnet segmentation and load balancing explained." },
        { id: 5, section: "Unit 2", marks: "10 Marks", text: "Explain AWS Cloud Formation with Stacks and Templates.", answer: "Templates define resources; stacks are collections of resources created from templates." },
        { id: 6, section: "Unit 2", marks: "10 Marks", text: "Explain AWS CLI and Azure CLI with automation use cases.", answer: "Command-line tools for managing cloud resources, used in automation scripts and CI/CD." },
        { id: 7, section: "Unit 3", marks: "10 Marks", text: "Explain configuration management tools: Ansible, Chef, Puppet.", answer: "Ansible (agentless, YAML), Chef (Ruby recipes), Puppet (declarative, large scale)." },
        { id: 8, section: "Unit 3", marks: "10 Marks", text: "Write short note on CI/CD concepts and AWS CodePipeline & CodeBuild.", answer: "CI/CD automates testing and deployment; CodePipeline orchestrates stages, CodeBuild compiles and tests." },
        { id: 9, section: "Unit 4", marks: "10 Marks", text: "Explain cloud monitoring tools: AWS CloudWatch and Azure Monitor.", answer: "Both monitor resources, collect metrics/logs, provide alerts and dashboards." },
        { id: 10, section: "Unit 4", marks: "10 Marks", text: "Explain IAM roles & policies and Disaster recovery planning.", answer: "IAM controls access; DR planning uses RPO/RTO and strategies like backup, pilot light, warm standby." }
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
          { id: 1, marks: "2 Marks", text: "Define Distributed ledger.", answer: {
        text: "A distributed ledger is a database shared and synchronized across multiple locations.",
        points: [
          "No central authority controls it — all participants have equal access to the same data."
        ]
      } },
          { id: 2, marks: "2 Marks", text: "What is Ethereum Virtual Machine?", answer: {
        text: "EVM is a computation engine in Ethereum that executes smart contracts.",
        points: [
          "It provides an isolated environment where code runs without affecting the main network."
        ]
      } },
          { id: 3, marks: "2 Marks", text: "What is Consensus?", answer: {
        text: "Consensus is a mechanism by which all nodes in a blockchain network agree on the validity of transactions.",
        points: [
          "Examples: Proof of Work (PoW), Proof of Stake (PoS)."
        ]
      } },
          { id: 4, marks: "2 Marks", text: "What is Digital Signature?", answer: "A digital signature is a cryptographic technique that verifies the authenticity and integrity of a digital message or transaction using public-private key pairs." },
          { id: 5, marks: "2 Marks", text: "What is Mining Pool?", answer: "A mining pool is a group of cryptocurrency miners who combine their computational resources to increase their chances of mining a block and share the rewards." },
          { id: 6, marks: "10 Marks", text: "Explain Centralized and Decentralized Blockchain systems.", answer: {
        text: "Centralized: Single authority controls data (banks, traditional databases).",
        points: [
          "Fast but single point of failure.",
          "Decentralized (Blockchain): No single authority, data distributed across nodes.",
          "Advantages: Transparent, immutable, no single failure point.",
          "Disadvantages: Slower, energy intensive."
        ]
      } },
          { id: 7, marks: "10 Marks", text: "Explain the applications of Blockchain in Supply chain.", answer: {
        text: "Blockchain in supply chain: Product tracking from origin to consumer, prevents counterfeiting, real-time visibility.",
        points: [
          "Examples: Walmart uses blockchain for food traceability, Maersk for shipping.",
          "Benefits: Transparency, reduced fraud, faster recalls, automated payments via smart contracts."
        ]
      } }
        ]
      },
      2: {
        title: "Block Structure & Security",
        questions: [
          { id: 8, marks: "10 Marks", text: "Explain structure of block in detail.", answer: {
        text: "A block contains: Block Header (previous block hash, timestamp, nonce, merkle root), Transaction Data (list of all transactions), Block Hash (unique identifier).",
        points: [
          "Chain: Each block references previous block's hash, making tampering impossible without redoing all subsequent blocks."
        ]
      } },
          { id: 9, marks: "10 Marks", text: "Explain different security threats in Blockchain and measures for Protection and Mitigation.", answer: {
        text: "Threats: 51% attack (majority control of network), Sybil attack (fake identities), Smart contract vulnerabilities, Private key theft.",
        points: [
          "Protection: Consensus mechanisms, Regular audits, Multi-signature wallets, Hardware security modules."
        ]
      } }
        ]
      },
      3: {
        title: "Blockchain Layers & Bitcoin",
        questions: [
          { id: 10, marks: "10 Marks", text: "Briefly explain the different layers of Blockchain.", answer: {
        text: "Layer 0: Internet infrastructure.",
        points: [
          "Layer 1: Main blockchain (Bitcoin, Ethereum) — consensus, security.",
          "Layer 2: Built on top of Layer 1 for scalability (Lightning Network).",
          "Layer 3: Application layer (DApps, smart contracts).",
          "Each layer serves specific purpose."
        ]
      } },
          { id: 11, marks: "10 Marks", text: "Explain Transaction Workflow in Bitcoin.", answer: {
        text: "Bitcoin transaction: 1) User initiates transaction with recipient address and amount.",
        points: [
          "2) Transaction broadcast to network.",
          "3) Miners verify transaction.",
          "4) Transaction included in block.",
          "5) Block added to blockchain after proof of work.",
          "6) After 6 confirmations, transaction considered final."
        ]
      } }
        ]
      },
      4: {
        title: "Blockchain Limitations & Applications",
        questions: [
          { id: 12, marks: "10 Marks", text: "What are the different limitations of Blockchain?", answer: "Limitations: Scalability (limited transactions per second), Energy consumption (PoW mining), Irreversibility (mistakes cannot be undone), Regulatory uncertainty, Storage requirements (entire chain must be stored), Latency (slow confirmation times compared to traditional databases)." },
          { id: 13, marks: "10 Marks", text: "Explain any case study of e-Governance initiatives using Blockchain in any Indian state.", answer: {
        text: "Andhra Pradesh Blockchain initiative: Land records management using blockchain.",
        points: [
          "Benefits: Transparent ownership records, reduced fraud, faster property transfers, eliminated middlemen.",
          "Telangana uses blockchain for certificate verification.",
          "These initiatives reduce corruption and increase citizen trust in government services."
        ]
      } }
        ]
      }
    },
    yearWise: {
      2026: [
        { id: 1, section: "Compulsory Question", marks: "2 Marks", text: "Define Distributed ledger.", answer: "Database shared across multiple locations with no central authority." },
        { id: 2, section: "Compulsory Question", marks: "2 Marks", text: "What is Ethereum Virtual Machine?", answer: "Computation engine in Ethereum that executes smart contracts in isolated environment." },
        { id: 3, section: "Compulsory Question", marks: "2 Marks", text: "What is Consensus?", answer: "Mechanism for nodes to agree on validity of transactions, e.g. PoW, PoS." },
        { id: 4, section: "Compulsory Question", marks: "2 Marks", text: "What is Digital Signature?", answer: "Cryptographic technique verifying authenticity using public-private key pairs." },
        { id: 5, section: "Compulsory Question", marks: "2 Marks", text: "What is Mining Pool?", answer: "Group of miners combining resources to increase chances of mining a block." },
        { id: 6, section: "Unit 1", marks: "10 Marks", text: "Explain Centralized and Decentralized Blockchain systems.", answer: "Centralized has single authority; decentralized distributes data across nodes, more transparent but slower." },
        { id: 7, section: "Unit 1", marks: "10 Marks", text: "Explain the applications of Blockchain in Supply chain.", answer: "Product tracking, prevents counterfeiting, real-time visibility — used by Walmart, Maersk." },
        { id: 8, section: "Unit 2", marks: "10 Marks", text: "Explain structure of block in detail.", answer: "Block Header, Transaction Data, Block Hash — chained via previous block hash." },
        { id: 9, section: "Unit 2", marks: "10 Marks", text: "Explain different security threats in Blockchain and measures for Protection and Mitigation.", answer: "51% attack, Sybil attack, smart contract vulnerabilities — mitigated via audits, multi-sig wallets." },
        { id: 10, section: "Unit 3", marks: "10 Marks", text: "Briefly explain the different layers of Blockchain.", answer: "Layer 0 (internet), Layer 1 (main blockchain), Layer 2 (scalability), Layer 3 (applications)." },
        { id: 11, section: "Unit 3", marks: "10 Marks", text: "Explain Transaction Workflow in Bitcoin.", answer: "Initiate, broadcast, verify, include in block, add to chain, confirm after 6 confirmations." },
        { id: 12, section: "Unit 4", marks: "10 Marks", text: "What are the different limitations of Blockchain?", answer: "Scalability, energy consumption, irreversibility, regulatory uncertainty, storage, latency." },
        { id: 13, section: "Unit 4", marks: "10 Marks", text: "Explain any case study of e-Governance initiatives using Blockchain in any Indian state.", answer: "Andhra Pradesh land records, Telangana certificate verification using blockchain." }
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
          { id: 1, marks: "2 Marks", text: "Write any two differences between UI and UX.", answer: {
        text: "UI (User Interface) focuses on visual elements like buttons, colors, typography.",
        points: [
          "UX (User Experience) focuses on overall user journey and satisfaction.",
          "UI is about how it looks; UX is about how it works."
        ]
      } },
          { id: 2, marks: "2 Marks", text: "Why is user-centered design important in interface development?", answer: "User-centered design ensures the product meets actual user needs, reduces usability errors, increases satisfaction, and leads to higher adoption rates." },
          { id: 3, marks: "2 Marks", text: "What are frames and shapes in Figma?", answer: {
        text: "Frames in Figma are containers that hold design elements, similar to artboards.",
        points: [
          "Shapes are basic geometric elements (rectangle, circle, polygon) used to build UI components."
        ]
      } },
          { id: 4, marks: "2 Marks", text: "What is the role of transitions and animations in prototyping?", answer: "Transitions and animations simulate real app behaviour, help users understand navigation flow, and make prototypes feel more realistic during user testing." },
          { id: 5, marks: "2 Marks", text: "What is included in a mini design project presentation?", answer: "A mini design project presentation includes problem statement, user research, wireframes, prototype screens, and design decisions explanation." },
          { id: 6, marks: "10 Marks", text: "Define UI and UX design. Explain the major differences between UI and UX with examples.", answer: {
        text: "UI Design: Creating visual elements users interact with — buttons, icons, color schemes, typography.",
        points: [
          "Example: Instagram's like button design.",
          "UX Design: Entire user journey from discovering to using the product.",
          "Example: Instagram's smooth scrolling and easy posting flow.",
          "Key differences: UI is visual, UX is experiential.",
          "UI asks 'Does it look good?' UX asks 'Does it work well?' Both are essential for successful products."
        ]
      } },
          { id: 7, marks: "10 Marks", text: "Explain the basic design principles used in UI/UX design. How do these principles improve usability?", answer: {
        text: "Key principles: 1) Consistency — same elements look same everywhere. 2) Visual Hierarchy — important elements stand out. 3) Contrast — distinguish between elements. 4) Alignment — organized layout. 5) White Space — breathing room for elements. 6) Feedback — system responds to user actions.",
        points: [
          "These improve usability by reducing learning curve and making interfaces intuitive."
        ]
      } }
        ]
      },
      2: {
        title: "Figma as Design Tool",
        questions: [
          { id: 8, marks: "10 Marks", text: "Introduce Figma as a design tool. Explain its interface and commonly used tools.", answer: {
        text: "Figma is a web-based collaborative design tool.",
        points: [
          "Interface: Left panel (layers, assets), Center canvas, Right panel (properties).",
          "Tools: Frame tool (F), Rectangle (R), Text (T), Pen tool (P), Component creation.",
          "Key features: Real-time collaboration, Cloud-based, Components and variants, Auto-layout, Prototyping."
        ]
      } },
          { id: 9, marks: "10 Marks", text: "What is a wireframe? Explain how to draw wireframes for a simple website or mobile application using Figma.", answer: {
        text: "Wireframe is a low-fidelity skeleton of a design showing layout without visual details.",
        points: [
          "Steps in Figma: 1) Create frame (phone or web size). 2) Use rectangles for content blocks. 3) Add text placeholders. 4) Show navigation structure. 5) Mark interactive elements.",
          "Wireframes help validate layout before investing in visual design."
        ]
      } }
        ]
      },
      3: {
        title: "Multiple Screens & Interaction Testing",
        questions: [
          { id: 10, marks: "10 Marks", text: "Explain the process of creating multiple screens for a web or mobile application. Why is consistency important across screens?", answer: {
        text: "Creating multiple screens: 1) Define user flow. 2) Create individual frames for each screen. 3) Use same component library across screens. 4) Maintain consistent spacing and typography.",
        points: [
          "Consistency importance: Users learn patterns once and apply everywhere, reduces confusion, builds trust, professional appearance."
        ]
      } },
          { id: 11, marks: "10 Marks", text: "Explain how interaction testing is performed in Figma to check usability of a design.", answer: {
        text: "Interaction testing in Figma: 1) Create prototype connections between frames. 2) Set trigger (on click, hover). 3) Set animation (instant, dissolve, slide). 4) Share prototype link with users. 5) Observe user interactions. 6) Collect feedback. 7) Iterate design.",
        points: [
          "This validates whether design is intuitive before development."
        ]
      } }
        ]
      },
      4: {
        title: "Design Feedback & Export",
        questions: [
          { id: 12, marks: "10 Marks", text: "Describe how designers improve designs based on feedback with suitable examples.", answer: {
        text: "Design iteration process: 1) Share prototype with users or stakeholders. 2) Collect feedback through observation and interviews. 3) Identify pain points. 4) Prioritize changes. 5) Implement improvements. 6) Test again.",
        points: [
          "Example: If users cannot find the login button, move it to more prominent position.",
          "Continuous feedback loop leads to better user experience."
        ]
      } },
          { id: 13, marks: "10 Marks", text: "Describe the process of exporting assets and design files in Figma. Why is proper export important for developers?", answer: {
        text: "Exporting in Figma: Select element, click Export in right panel, choose format (PNG, SVG, PDF), set scale (1x, 2x for retina).",
        points: [
          "Developer handoff: Inspect panel shows CSS values, spacing, colors.",
          "Importance: Developers get exact specifications, reduces back-and-forth, maintains design quality in final product."
        ]
      } }
        ]
      }
    },
    yearWise: {
      2026: [
        { id: 1, section: "Compulsory Question", marks: "2 Marks", text: "Write any two differences between UI and UX.", answer: "UI focuses on visual elements; UX focuses on overall user experience and journey." },
        { id: 2, section: "Compulsory Question", marks: "2 Marks", text: "Why is user-centered design important?", answer: "Ensures product meets user needs, reduces errors, increases satisfaction." },
        { id: 3, section: "Compulsory Question", marks: "2 Marks", text: "What are frames and shapes in Figma?", answer: "Frames are containers like artboards; shapes are basic geometric UI elements." },
        { id: 4, section: "Compulsory Question", marks: "2 Marks", text: "What is the role of transitions and animations in prototyping?", answer: "Simulate real app behaviour and help users understand navigation flow." },
        { id: 5, section: "Compulsory Question", marks: "2 Marks", text: "What is included in a mini design project presentation?", answer: "Problem statement, user research, wireframes, prototype screens, design decisions." },
        { id: 6, section: "Unit 1", marks: "10 Marks", text: "Define UI and UX design. Explain the major differences between UI and UX with examples.", answer: {
        text: "UI is visual design; UX is the entire user journey.",
        points: [
          "Both essential for good products."
        ]
      } },
        { id: 7, section: "Unit 1", marks: "10 Marks", text: "Explain the basic design principles used in UI/UX design. How do these principles improve usability?", answer: "Consistency, Visual Hierarchy, Contrast, Alignment, White Space, Feedback." },
        { id: 8, section: "Unit 2", marks: "10 Marks", text: "Introduce Figma as a design tool. Explain its interface and commonly used tools.", answer: "Web-based collaborative tool with frames, shapes, components, prototyping features." },
        { id: 9, section: "Unit 2", marks: "10 Marks", text: "What is a wireframe? Explain how to draw wireframes for a simple website or mobile application using Figma.", answer: "Low-fidelity layout skeleton; created using frames, rectangles, and text placeholders." },
        { id: 10, section: "Unit 3", marks: "10 Marks", text: "Explain the process of creating multiple screens for a web or mobile application. Why is consistency important across screens?", answer: "Define user flow, create frames, use component library, maintain consistent spacing." },
        { id: 11, section: "Unit 3", marks: "10 Marks", text: "Explain how interaction testing is performed in Figma to check usability of a design.", answer: "Create prototype connections, set triggers/animations, share and collect feedback." },
        { id: 12, section: "Unit 4", marks: "10 Marks", text: "Describe how designers improve designs based on feedback with suitable examples.", answer: "Share prototype, collect feedback, identify pain points, implement improvements, retest." },
        { id: 13, section: "Unit 4", marks: "10 Marks", text: "Describe the process of exporting assets and design files in Figma. Why is proper export important for developers?", answer: "Select element, export in desired format and scale; gives developers exact specifications." }
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
      4: { title: "Deadlock & Security", questions: [{ id: 6, marks: "5 Marks", text: "What is Deadlock?", answer: {
        text: "Situation where processes block each other forever.",
        points: [
          "Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait."
        ]
      } }] }
    },
    yearWise: {
      2026: [
        { id: 1, section: "Unit 1", marks: "2 Marks", text: "What is an Operating System?", answer: "An OS is system software acting as interface between user and hardware, managing resources and providing services." },
        { id: 2, section: "Unit 1", marks: "5 Marks", text: "Explain CPU Scheduling with its types.", answer: "CPU Scheduling decides which process gets CPU. Types: FCFS, SJF, Priority, Round Robin, SRTF." },
        { id: 3, section: "Unit 1", marks: "10 Marks", text: "What is a Process? Explain Process States.", answer: "A process is a program in execution. 5 states: New, Ready, Running, Waiting, Terminated." },
        { id: 4, section: "Unit 2", marks: "2 Marks", text: "What is Paging?", answer: "Memory management dividing process into fixed-size pages mapped to physical frames." },
        { id: 5, section: "Unit 3", marks: "2 Marks", text: "What is a File System?", answer: "Method to organize, store, retrieve files on storage devices." },
        { id: 6, section: "Unit 4", marks: "5 Marks", text: "What is Deadlock?", answer: {
        text: "Situation where processes block each other forever.",
        points: [
          "Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait."
        ]
      } }
      ]
    }
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
      3: { title: "SQL", questions: [{ id: 3, marks: "2 Marks", text: "Difference between DDL and DML?", answer: {
        text: "DDL defines structure (CREATE, ALTER).",
        points: [
          "DML manipulates data (INSERT, UPDATE, DELETE)."
        ]
      } }] },
      4: { title: "Transactions", questions: [{ id: 4, marks: "5 Marks", text: "What is a Transaction? Explain ACID.", answer: {
        text: "Sequence of operations as single unit.",
        points: [
          "ACID: Atomicity, Consistency, Isolation, Durability."
        ]
      } }] }
    },
    yearWise: {
      2026: [
        { id: 1, section: "Unit 1", marks: "2 Marks", text: "What is DBMS?", answer: "Software managing databases for storage, retrieval, manipulation with security and reduced redundancy." },
        { id: 2, section: "Unit 2", marks: "5 Marks", text: "What is Normalization?", answer: "Organizing data to reduce redundancy. 1NF, 2NF, 3NF progressive normal forms." },
        { id: 3, section: "Unit 3", marks: "2 Marks", text: "Difference between DDL and DML?", answer: {
        text: "DDL defines structure (CREATE, ALTER).",
        points: [
          "DML manipulates data (INSERT, UPDATE, DELETE)."
        ]
      } },
        { id: 4, section: "Unit 4", marks: "5 Marks", text: "What is a Transaction? Explain ACID.", answer: {
        text: "Sequence of operations as single unit.",
        points: [
          "ACID: Atomicity, Consistency, Isolation, Durability."
        ]
      } }
      ]
    }
  },
  "c-programming": {
    name: "Computer Fundamentals & C++",
    code: "BCA-101",
    color: "#fbbf24",
    semester: "Semester 1",
    course: "BCA General",
    units: {
      1: { title: "Introduction & Control Structures", questions: [{ id: 1, marks: "2 Marks", text: "Difference between Compiler and Interpreter?", answer: {
        text: "Compiler converts whole code at once.",
        points: [
          "Interpreter executes line by line."
        ]
      } }] },
      2: { title: "Arrays & Strings", questions: [{ id: 2, marks: "2 Marks", text: "What is an Array?", answer: "Collection of same data type elements in contiguous memory locations." }] },
      3: { title: "Functions & Pointers", questions: [{ id: 3, marks: "5 Marks", text: "What is a Pointer?", answer: "Variable storing memory address of another variable." }] },
      4: { title: "Structures & File Handling", questions: [{ id: 4, marks: "5 Marks", text: "What is a Structure in C?", answer: "User-defined data type grouping different data types under one name." }] }
    },
    yearWise: {
      2026: [
        { id: 1, section: "Unit 1", marks: "2 Marks", text: "Difference between Compiler and Interpreter?", answer: {
        text: "Compiler converts whole code at once.",
        points: [
          "Interpreter executes line by line."
        ]
      } },
        { id: 2, section: "Unit 2", marks: "2 Marks", text: "What is an Array?", answer: "Collection of same data type elements in contiguous memory locations." },
        { id: 3, section: "Unit 3", marks: "5 Marks", text: "What is a Pointer?", answer: "Variable storing memory address of another variable." },
        { id: 4, section: "Unit 4", marks: "5 Marks", text: "What is a Structure in C?", answer: "User-defined data type grouping different data types under one name." }
      ]
    }
  },
  "web-technologies": {
  name: "Introduction to Web Technologies",
  code: "B23-CAP-202",
  color: "#22d3ee",
  semester: "Semester 2",
  course: "BCA (All Branches)",
  units: {
    1: {
      title: "Introduction to Web & Website Planning",
      questions: [
        { id: 1, marks: "5 Marks", text: "Define the term WWW. Explain the evolution and history of the WWW.", answer: {
        text: "WWW (World Wide Web) is a system of interlinked hypertext documents accessed via internet.",
        points: [
          "Invented by Tim Berners-Lee in 1989 at CERN. Evolution: Web 1.0 (static pages) → Web 2.0 (interactive, social media) → Web 3.0 (semantic, AI-driven)."
        ]
      } },
        { id: 2, marks: "5 Marks", text: "What do you mean by web client? Explain common types of Web Clients.", answer: {
        text: "A web client is software/device that requests services from a web server.",
        points: [
          "Types: Browsers (Chrome, Firefox), Mobile apps, Thin clients (server-dependent), Thick clients (more local processing)."
        ]
      } },
        { id: 3, marks: "10 Marks", text: "Before designing a website, is it necessary to plan a website? Justify your answer. Explain what steps are carried out during website planning process.", answer: {
        text: "Yes, planning is essential to avoid costly redesigns.",
        points: [
          "Steps: 1) Define purpose/goals, 2) Identify target audience, 3) Plan sitemap/structure, 4) Choose domain and hosting, 5) Design wireframes, 6) Gather content, 7) Choose technology stack, 8) Set timeline and budget."
        ]
      } },
        { id: 4, marks: "5 Marks", text: "What is a web browser and how does it function? Explain common types of Web Clients.", answer: {
        text: "A web browser is software used to access and display web pages by sending HTTP requests and rendering HTML/CSS/JS responses.",
        points: [
          "Common browsers: Chrome, Firefox, Edge, Safari."
        ]
      } },
        { id: 5, marks: "10 Marks", text: "What are the best practices for optimizing website performance and speed? What is HTTP? Explain the difference between HTTP and HTTPS.", answer: "Best practices: minimize HTTP requests, compress images, use caching, minify CSS/JS. HTTP transfers data in plain text; HTTPS encrypts data using SSL/TLS for secure communication." },
        { id: 6, marks: "5 Marks", text: "Discuss the importance of keywords and metadata in search engine indexing and ranking algorithms.", answer: "Keywords and metadata help search engines understand page content, improving indexing accuracy and search ranking through title tags, meta descriptions, and relevant keyword usage." },
        { id: 7, marks: "5 Marks", text: "What is URL? Describe the purpose of each component of a URL.", answer: {
        text: "URL is the web address locating a resource.",
        points: [
          "Components: Protocol (http/https), Domain name, Port (optional), Path, Query parameters."
        ]
      } },
        { id: 8, marks: "10 Marks", text: "What is a web browser, and how does it function? Name some popular web browsers and describe their key features.", answer: "Browser sends HTTP requests, receives and renders HTML/CSS/JS. Popular browsers: Chrome (fast, extensions), Firefox (privacy-focused), Edge (Windows integration)." },
        { id: 9, marks: "5 Marks", text: "Write a note on evolution of WWW.", answer: "WWW evolved from static Web 1.0 pages, to interactive Web 2.0 (social media, user content), to intelligent Web 3.0 (AI, semantic web)." },
        { id: 10, marks: "5 Marks", text: "Explain the concept of a search engine and discuss the key components of a search engine.", answer: {
        text: "A search engine finds and ranks web pages based on user queries.",
        points: [
          "Key components: Crawler (discovers pages), Indexer (stores page data), Ranking algorithm (orders results by relevance)."
        ]
      } },
        { id: 11, marks: "5 Marks", text: "What is a web browser? Name any two.", answer: {
        text: "Software used to access and display web pages.",
        points: [
          "Examples: Google Chrome, Mozilla Firefox."
        ]
      } }
      ]
    },
    2: {
      title: "HTML Structure, Tables & Forms",
      questions: [
        { id: 12, marks: "10 Marks", text: "Explain basic Structure of HTML document. Also explain various block level elements and associated attributes with examples.", answer: "Basic structure: <!DOCTYPE html>, <html>, <head>, <body>. Block-level elements take full width and start new line: <div>, <p>, <h1>-<h6>, <table>. Attributes: class, id, style customize elements." },
        { id: 13, marks: "5 Marks", text: "Design a simple Student Registration Form for University using various fields of <form> tag in HTML.", answer: "Form uses <form action='' method='post'> with <input type='text'> for name, <input type='email'>, <select> for course, <input type='radio'> for gender, <input type='submit'> for submission." },
        { id: 14, marks: "5 Marks", text: "Explain Ordered and Unordered List in HTML.", answer: "Ordered List (<ol>) numbers items sequentially using <li>. Unordered List (<ul>) displays bullet points using <li>." },
        { id: 15, marks: "10 Marks", text: "How can you merge cells in an HTML table? Provide examples. Describe the purpose of form attributes such as action and method in HTML forms.", answer: "Merge cells using colspan (columns) and rowspan (rows) attributes in <td>. Form 'action' specifies submission URL; 'method' specifies GET (data in URL) or POST (data in body, more secure)." },
        { id: 16, marks: "10 Marks", text: "Discuss the difference between <table>, <tr>, <td>, and <th> tags in HTML. Explain the difference between the GET and POST methods in HTML forms.", answer: {
        text: "<table> is the container, <tr> is a row, <td> is a data cell, <th> is a header cell.",
        points: [
          "GET appends data to URL (visible, limited); POST sends data in request body (secure, larger)."
        ]
      } },
        { id: 17, marks: "5 Marks", text: "Describe the structure of an unordered list in HTML. What elements are used to create list items within an unordered list? Illustrate.", answer: "Unordered list uses <ul> tag containing <li> elements for each item, displayed with bullet points by default." },
        { id: 18, marks: "5 Marks", text: "Explain the difference between block-level and inline HTML elements.", answer: {
        text: "Block-level elements take full width and start on a new line (div, p, h1).",
        points: [
          "Inline elements take only needed width and stay in line (span, a, strong)."
        ]
      } },
        { id: 19, marks: "5 Marks", text: "What is a web browser, and how does it function? Name some popular web browsers and describe their key features.", answer: {
        text: "Browser accesses and displays web content by sending HTTP requests and rendering responses.",
        points: [
          "Popular ones: Chrome, Firefox, Edge, Safari."
        ]
      } },
        { id: 20, marks: "5 Marks", text: "Write a note on evolution of WWW.", answer: "WWW evolved from static Web 1.0 to social Web 2.0 to intelligent, semantic Web 3.0." },
        { id: 21, marks: "10 Marks", text: "Explain the purpose of an ordered list in HTML. How does it differ from an unordered list? Illustrate.", answer: {
        text: "Ordered list (<ol>) numbers items sequentially, used when sequence matters.",
        points: [
          "Unordered list (<ul>) uses bullets, used when sequence doesn't matter."
        ]
      } },
        { id: 22, marks: "10 Marks", text: "Describe the process of creating hyperlinks in HTML. How do you create internal and external links?", answer: "Hyperlinks created using <a href='URL'>text</a>. External links point to other websites; internal links use # for same page sections or relative paths for other pages on the same site." }
      ]
    },
    3: {
      title: "CSS Styling, Box Model & Selectors",
      questions: [
        { id: 23, marks: "10 Marks", text: "What do you mean by CSS Box Model using suitable example? Explain various types of CSS.", answer: {
        text: "CSS Box Model: Content, Padding, Border, Margin.",
        points: [
          "Types of CSS: Inline (in tag), Internal (in <style> tag), External (separate .css file)."
        ]
      } },
        { id: 24, marks: "10 Marks", text: "Discuss CSS Box Model using suitable example. How does browser determine element appearance using the CSS Box Model.", answer: {
        text: "Box Model consists of content, padding, border, margin.",
        points: [
          "Browser calculates total element size as content + padding + border + margin to determine layout and spacing."
        ]
      } },
        { id: 25, marks: "10 Marks", text: "Discuss CSS Box Model using suitable example. How browser determines element appearance using CSS Box Model.", answer: "Same concept — total rendered size includes all four box model layers, affecting spacing and positioning on the page." },
        { id: 26, marks: "10 Marks", text: "Discuss CSS Box Model using suitable example. How browser determines element appearance using CSS Box Model.", answer: "Box model layers determine visual size and spacing of elements on a webpage." },
        { id: 27, marks: "5 Marks", text: "What are the differences between margin and padding in CSS?", answer: {
        text: "Margin is space OUTSIDE the border, between elements.",
        points: [
          "Padding is space INSIDE the border, between border and content."
        ]
      } },
        { id: 28, marks: "5 Marks", text: "What do you understand by the universal selector in CSS?", answer: "The universal selector (*) selects ALL elements on the page, commonly used for CSS resets." },
        { id: 29, marks: "10 Marks", text: "How does the descendant selector work in CSS, and when would you use it? What are the different CSS link states? Discuss using examples.", answer: "Descendant selector targets nested elements, e.g., div p {}. CSS link states: :link, :visited, :hover, :active (LVHA order)." },
        { id: 30, marks: "10 Marks", text: "Explain the concept of the CSS box-sizing property and how it affects the layout of elements. What is grouping of CSS selectors, and why is it useful in web development?", answer: {
        text: "box-sizing: content-box excludes padding/border from width; border-box includes them.",
        points: [
          "Grouping combines multiple selectors with commas for shared styles, e.g., h1, h2, p {}."
        ]
      } },
        { id: 31, marks: "10 Marks", text: "Describe the difference between content-box and border-box values for the box-sizing property. When would you use each?", answer: "content-box (default): width applies to content only. border-box: width includes padding and border, making layout predictable and easier to manage." },
        { id: 32, marks: "10 Marks", text: "Explain the difference between inline, internal, and external CSS.", answer: {
        text: "Inline CSS is written directly in the element's style attribute.",
        points: [
          "Internal CSS is written in <style> tag in head.",
          "External CSS is in a separate .css file linked via <link>."
        ]
      } },
        { id: 33, marks: "10 Marks", text: "What is the difference between class and id selectors in CSS? Illustrate.", answer: {
        text: "Class selector (.name) can apply to multiple elements.",
        points: [
          "ID selector (#name) is unique to one element per page, with higher specificity."
        ]
      } },
        { id: 34, marks: "10 Marks", text: "What are pseudo-classes and pseudo-elements in CSS? Discuss.", answer: {
        text: "Pseudo-classes (:hover, :first-child) target element states.",
        points: [
          "Pseudo-elements (::before, ::after) style specific parts of an element."
        ]
      } },
        { id: 35, marks: "10 Marks", text: "What do you mean by CSS Box Model using suitable example? Explain various types of CSS.", answer: {
        text: "Box model defines content, padding, border, margin layers.",
        points: [
          "CSS types: inline, internal, external."
        ]
      } },
        { id: 36, marks: "10 Marks", text: "Discuss CSS Box Model using suitable example. How browser determines element appearance using CSS Box Model.", answer: "Element's rendered size = content + padding + border + margin, determining spacing and layout." }
      ]
    },
    4: {
      title: "JavaScript & Dynamic Web Pages",
      questions: [
        { id: 37, marks: "10 Marks", text: "Explain the features and applications of Java-Script. How is Java-Script used to validate the data?", answer: {
        text: "JavaScript features: lightweight, interpreted, event-driven, supports DOM manipulation.",
        points: [
          "Applications: form validation, animations, dynamic content.",
          "Used for validation by checking input format/values before form submission using functions triggered on events."
        ]
      } },
        { id: 38, marks: "10 Marks", text: "Differentiate between static and dynamic web pages. Which type of web pages are more interactive? Explain with examples.", answer: {
        text: "Static pages have fixed content, same for all users (plain HTML).",
        points: [
          "Dynamic pages generate content based on user interaction/data, using JavaScript/server-side scripting.",
          "Dynamic pages are more interactive, e.g., e-commerce sites with live cart updates."
        ]
      } },
        { id: 39, marks: "5 Marks", text: "What is JavaScript?", answer: "JavaScript is a scripting language used to make web pages interactive and dynamic, running directly in the browser." },
        { id: 40, marks: "10 Marks", text: "Discuss the importance of JavaScript in building dynamic and interactive web applications. What is the difference between var, let, and const in terms of scope and hoisting?", answer: "JavaScript enables real-time updates without reload. var is function-scoped and hoisted; let is block-scoped, not hoisted the same way; const is block-scoped and cannot be reassigned." },
        { id: 41, marks: "5 Marks", text: "Discuss the use of comments in HTML. How do you add comments to an HTML document?", answer: {
        text: "Comments explain code, not shown in browser.",
        points: [
          "Added using <!-- comment text -->."
        ]
      } },
        { id: 42, marks: "10 Marks", text: "How do you define and call functions in JavaScript? Illustrate. What are the different types of loops in JavaScript? Discuss.", answer: {
        text: "Function defined as function name() {}, called as name().",
        points: [
          "Loop types: for, while, do-while, for-in (object properties), for-of (iterable values)."
        ]
      } },
        { id: 43, marks: "10 Marks", text: "Describe the role of the Document Object Model (DOM) in JavaScript. How do you manipulate HTML elements using JavaScript? What is the difference between for-in and for-of loop in JavaScript?", answer: "DOM represents HTML as a tree, allowing JavaScript to access/manipulate elements (document.getElementById()). for-in iterates property names/indexes; for-of iterates actual values (ES6)." },
        { id: 44, marks: "10 Marks", text: "Explain the difference between == and === operators in JavaScript. Describe the purpose of functions in JavaScript. How do you define and call functions in JavaScript?", answer: {
        text: "== compares with type conversion; === compares strictly (value + type).",
        points: [
          "Functions group reusable code, defined with function keyword, invoked by calling their name with ()."
        ]
      } }
      ]
    }
  },
  yearWise: {
    2026: [
      { id: 201, section: "Compulsory Question", marks: "1 Mark", text: "Define &reg; &copy; named entities in HTML.", answer: "&reg; displays the registered trademark symbol (®). &copy; displays the copyright symbol (©)." },
      { id: 202, section: "Compulsory Question", marks: "1 Mark", text: "What is a URL?", answer: "URL is the web address used to locate a resource on the internet." },
      { id: 203, section: "Compulsory Question", marks: "1 Mark", text: "What is a web browser? Name any two.", answer: {
        text: "Software to access and display web pages.",
        points: [
          "Examples: Google Chrome, Mozilla Firefox."
        ]
      } },
      { id: 204, section: "Compulsory Question", marks: "1 Mark", text: "Define two Empty Tags.", answer: {
        text: "Empty tags have no closing tag/content.",
        points: [
          "Examples: <br>, <img>, <hr>."
        ]
      } },
      { id: 205, section: "Compulsory Question", marks: "1 Mark", text: "Explain <pre> tag.", answer: "The <pre> tag displays preformatted text, preserving spaces and line breaks exactly as written." },
      { id: 206, section: "Compulsory Question", marks: "1 Mark", text: "What is JavaScript?", answer: "A scripting language used to make web pages interactive and dynamic, running in the browser." },
      { id: 207, section: "Compulsory Question", marks: "1 Mark", text: "Explain Priority of Inline, Internal and External CSS.", answer: "Inline CSS has highest priority, then Internal, then External CSS, unless !important is used." },
      { id: 208, section: "Compulsory Question", marks: "1 Mark", text: "Using which tag and attribute you can change background colour of a web page?", answer: "Using <body> tag with style attribute or CSS background-color property." },
      { id: 209, section: "Compulsory Question", marks: "1 Mark", text: "Differentiate between == and === in JavaScript.", answer: "== compares values with type conversion. === compares both value and type strictly." },
      { id: 210, section: "Compulsory Question", marks: "1 Mark", text: "Explain let, var and const in JavaScript.", answer: "var is function-scoped, redeclarable. let is block-scoped, reassignable. const is block-scoped, fixed value." },
      { id: 1, section: "Unit 1", marks: "5 Marks", text: "Define the term WWW. Explain the evolution and history of the WWW.", answer: "WWW is a system of interlinked documents, invented by Tim Berners-Lee in 1989, evolved from Web 1.0 to 2.0 to 3.0." },
      { id: 2, section: "Unit 1", marks: "5 Marks", text: "What do you mean by web client? Explain common types of Web Clients.", answer: {
        text: "Web client requests services from a server.",
        points: [
          "Types: browsers, mobile apps, thin/thick clients."
        ]
      } },
      { id: 3, section: "Unit 1", marks: "10 Marks", text: "Before designing a website, is it necessary to plan a website? Justify your answer. Explain what steps are carried out during website planning process.", answer: {
        text: "Yes.",
        points: [
          "Steps: define purpose, identify audience, plan sitemap, choose hosting, design wireframes, gather content, choose tech stack, set timeline."
        ]
      } },
      { id: 12, section: "Unit 2", marks: "10 Marks", text: "Explain basic Structure of HTML document. Also explain various block level elements and associated attributes with examples.", answer: {
        text: "DOCTYPE, html, head, body structure.",
        points: [
          "Block elements: div, p, h1-h6, table — full width, styled via class/id."
        ]
      } },
      { id: 13, section: "Unit 2", marks: "5 Marks", text: "Design a simple Student Registration Form for University using various fields of <form> tag in HTML.", answer: "Form with text, email, select, radio, submit fields using appropriate input types." },
      { id: 14, section: "Unit 2", marks: "5 Marks", text: "Explain Ordered and Unordered List in HTML.", answer: "Ordered list numbers items; unordered list uses bullets — both use <li> for items." },
      { id: 23, section: "Unit 3", marks: "10 Marks", text: "What do you mean by CSS Box Model? Explain various types of CSS.", answer: {
        text: "Box model: content, padding, border, margin.",
        points: [
          "CSS types: inline, internal, external."
        ]
      } },
      { id: 24, section: "Unit 3", marks: "10 Marks", text: "Discuss CSS Box Model using suitable example. How browser determines element appearance using CSS Box Model.", answer: "Total element size = content + padding + border + margin, determining layout." },
      { id: 37, section: "Unit 4", marks: "10 Marks", text: "Explain the features and applications of Java-Script. How is Java-Script used to validate the data?", answer: {
        text: "JavaScript is lightweight, event-driven, supports DOM manipulation.",
        points: [
          "Used for form validation checking input before submission."
        ]
      } },
      { id: 38, section: "Unit 4", marks: "10 Marks", text: "Differentiate between static and dynamic web pages. Which type of web pages are more interactive? Explain with examples.", answer: {
        text: "Static pages have fixed content; dynamic pages generate content based on interaction.",
        points: [
          "Dynamic pages are more interactive."
        ]
      } }
    ],
    2025: [
      { id: 301, section: "Compulsory Question", marks: "2 Marks", text: "Describe the process of linking external CSS and JavaScript files to an HTML document.", answer: "CSS linked using <link rel='stylesheet' href='style.css'>. JavaScript linked using <script src='script.js'></script>." },
      { id: 302, section: "Compulsory Question", marks: "2 Marks", text: "Explain the purpose of the HTML <meta> tag.", answer: "Provides metadata like character encoding, viewport settings, description, and keywords for SEO." },
      { id: 303, section: "Compulsory Question", marks: "2 Marks", text: "What do you understand by the universal selector in CSS?", answer: "The (*) selector applies styles to all elements, often used for CSS resets." },
      { id: 304, section: "Compulsory Question", marks: "2 Marks", text: "Write a note on client side validation using JavaScript.", answer: "Checks user input in browser before submission, providing instant feedback and reducing server load." },
      { id: 10, section: "Unit 1", marks: "5 Marks", text: "Discuss the importance of keywords and metadata in search engine indexing and ranking algorithms.", answer: "Keywords/metadata help search engines understand content, improving indexing and ranking." },
      { id: 7, section: "Unit 1", marks: "5 Marks", text: "What is URL? Describe the purpose of each component of a URL.", answer: {
        text: "URL locates resources online.",
        points: [
          "Components: protocol, domain, port, path, query parameters."
        ]
      } },
      { id: 8, section: "Unit 1", marks: "10 Marks", text: "What is a web browser, and how does it function? Name some popular web browsers and describe their key features.", answer: {
        text: "Browser sends HTTP requests and renders responses.",
        points: [
          "Popular: Chrome, Firefox, Edge."
        ]
      } },
      { id: 9, section: "Unit 1", marks: "5 Marks", text: "Write a note on evolution of WWW.", answer: "Evolved from static Web 1.0 to social Web 2.0 to intelligent Web 3.0." },
      { id: 15, section: "Unit 2", marks: "10 Marks", text: "How can you merge cells in an HTML table? Provide examples. Describe the purpose of form attributes such as action and method in HTML forms.", answer: {
        text: "Merge with colspan/rowspan.",
        points: [
          "Form action specifies URL, method specifies GET/POST."
        ]
      } },
      { id: 21, section: "Unit 2", marks: "10 Marks", text: "Explain the purpose of an ordered list in HTML. How does it differ from an unordered list? Illustrate. Describe the process of creating hyperlinks in HTML.", answer: {
        text: "Ordered numbers items; unordered uses bullets.",
        points: [
          "Hyperlinks created using <a href=''>."
        ]
      } },
      { id: 31, section: "Unit 3", marks: "10 Marks", text: "Describe the difference between content-box and border-box values for the box-sizing property. When would you use each?", answer: "content-box excludes padding/border; border-box includes them for predictable sizing." },
      { id: 32, section: "Unit 3", marks: "10 Marks", text: "Explain the difference between inline, internal, and external CSS.", answer: "Inline in element attribute, internal in <style> tag, external in separate .css file." },
      { id: 33, section: "Unit 3", marks: "10 Marks", text: "What is the difference between class and id selectors in CSS? Illustrate.", answer: "Class reusable across elements; id unique to one element with higher specificity." },
      { id: 34, section: "Unit 3", marks: "10 Marks", text: "What are pseudo-classes and pseudo-elements in CSS? Discuss.", answer: "Pseudo-classes target states; pseudo-elements target specific parts of elements." },
      { id: 43, section: "Unit 4", marks: "10 Marks", text: "Describe the role of the Document Object Model (DOM) in JavaScript. What is the difference between for-in and for-of loop in JavaScript? Discuss.", answer: "DOM lets JS manipulate HTML as tree. for-in iterates keys/indexes; for-of iterates values." },
      { id: 44, section: "Unit 4", marks: "10 Marks", text: "Explain the difference between == and === operators in JavaScript. Describe the purpose of functions in JavaScript. How do you define and call functions?", answer: {
        text: "== type-converts; === strict comparison.",
        points: [
          "Functions group reusable code, defined with function keyword."
        ]
      } }
    ],
    2024: [
      { id: 401, section: "Compulsory Question", marks: "2 Marks", text: "Discuss the difference between a URL and a URI.", answer: "URL locates a resource; URI identifies a resource by name, location, or both — every URL is a URI." },
      { id: 41, section: "Compulsory Question", marks: "2 Marks", text: "Discuss the use of comments in HTML. How do you add comments to an HTML document?", answer: {
        text: "Comments explain code, not displayed.",
        points: [
          "Added using <!-- comment -->."
        ]
      } },
      { id: 27, section: "Compulsory Question", marks: "2 Marks", text: "What are the differences between margin and padding in CSS?", answer: "Margin is outside the border; padding is inside the border." },
      { id: 402, section: "Compulsory Question", marks: "2 Marks", text: "How do you create and manipulate objects in JavaScript?", answer: "Objects created via object literals: let obj = {name: 'Arif'}, manipulated via dot/bracket notation." },
      { id: 10, section: "Unit 1", marks: "10 Marks", text: "Explain the concept of a search engine and discuss the key components of a search engine. What is a web browser? What are the common functions provided by it?", answer: {
        text: "Search engine: Crawler, Indexer, Ranking algorithm.",
        points: [
          "Web browser accesses/displays pages; functions: navigation, bookmarks, history."
        ]
      } },
      { id: 5, section: "Unit 1", marks: "10 Marks", text: "What are the best practices for optimizing website performance and speed? What is HTTP? Can you explain the difference between HTTP and HTTPS?", answer: {
        text: "Best practices: minimize requests, compress images, use caching.",
        points: [
          "HTTP is plain text; HTTPS is encrypted."
        ]
      } },
      { id: 16, section: "Unit 2", marks: "10 Marks", text: "Discuss the difference between <table>, <tr>, <td>, and <th> tags in HTML. Explain the difference between the GET and POST methods in HTML forms.", answer: {
        text: "<table> container, <tr> row, <td> cell, <th> header.",
        points: [
          "GET in URL; POST in body."
        ]
      } },
      { id: 17, section: "Unit 2", marks: "10 Marks", text: "Describe the structure of an unordered list in HTML. What elements are used to create list items within an unordered list? Illustrate. Explain the difference between block-level and inline HTML elements.", answer: "Unordered list uses <ul> and <li>. Block-level takes full width; inline takes only needed width." },
      { id: 29, section: "Unit 3", marks: "10 Marks", text: "How does the descendant selector work in CSS, and when would you use it? What are the different CSS link states? Discuss.", answer: {
        text: "Descendant selector targets nested elements.",
        points: [
          "Link states: :link, :visited, :hover, :active."
        ]
      } },
      { id: 30, section: "Unit 3", marks: "10 Marks", text: "Explain the concept of the CSS box-sizing property and how it affects the layout of elements. What is grouping of CSS selectors, and why is it useful in web development? Discuss.", answer: {
        text: "box-sizing controls whether padding/border are included in element width.",
        points: [
          "Grouping combines selectors with commas for efficiency."
        ]
      } },
      { id: 40, section: "Unit 4", marks: "10 Marks", text: "Discuss the importance of JavaScript in building dynamic and interactive web applications. What is the difference between var, let, and const in terms of scope and hoisting?", answer: "JavaScript adds interactivity without reload. var is function-scoped; let/const are block-scoped, const is fixed." },
      { id: 42, section: "Unit 4", marks: "10 Marks", text: "How do you define and call functions in JavaScript? Illustrate. What are the different types of loops in JavaScript? Discuss.", answer: {
        text: "Functions defined with function keyword, called by name().",
        points: [
          "Loops: for, while, do-while, for-in, for-of."
        ]
      } }
    ]
  },
},
"oop-cpp": {
  name: "Object Oriented Programming Using C++",
  code: "B23-CAP-201",
  color: "#F97316",
  semester: "Semester 2",
  course: "BCA (All Branches)",
  units: {
    1: {
      title: "Streams, Functions & Pointers",
      questions: [
        { id: 1, marks: "5 Marks", text: "Explain how overloaded shift operator and member functions are used for Input-Output Operations in C++.", answer: {
        text: "The stream insertion operator << and extraction operator >> are overloaded to handle standard data types by default.",
        points: [
          "For user-defined objects, these operators can be overloaded as friend functions to enable cout << obj and cin >> obj syntax, allowing custom objects to be displayed and read directly."
        ]
      } },
        { id: 2, marks: "10 Marks", text: "Write a program in C++ to calculate the area of circle, rectangle and triangle using function overloading.", answer: {
        text: "Function overloading allows multiple functions with the same name but different parameter lists.",
        points: [
          "Example: area(float r) for circle (πr²), area(float l, float b) for rectangle (l*b), area(float b, float h, bool triangle) for triangle (0.5*b*h).",
          "The compiler selects the correct function based on arguments passed at compile time."
        ]
      } }
      ]
    },
    2: {
      title: "Structures, Constructors & Cascaded I/O",
      questions: [
        { id: 3, marks: "5 Marks", text: "Explain the concept of structure and union in C++. Differentiate between structure and union.", answer: {
        text: "Structure allocates separate memory for each member, allowing simultaneous access to all members.",
        points: [
          "Union allocates shared memory equal to its largest member, so only one member can hold a valid value at a time.",
          "Structures are used when all fields are needed together; unions save memory when only one field is used at a time."
        ]
      } },
        { id: 4, marks: "5 Marks", text: "What do you mean by the data members and member functions of a class? Explain how you can define a member function outside a class by taking example.", answer: {
        text: "Data members are variables that hold the state of an object.",
        points: [
          "Member functions are methods that operate on data members.",
          "A member function can be defined outside the class using the scope resolution operator: ReturnType ClassName::functionName(parameters) { }. This declares the function inside the class and defines its body separately."
        ]
      } },
        { id: 5, marks: "5 Marks", text: "Write a program to demonstrate the use of cascaded insertion and extraction operators in C++.", answer: {
        text: "Cascading allows multiple insertion/extraction operations in a single statement since << and >> return a reference to the stream object.",
        points: [
          "Example: cout << \"Value: \" << x << \" and \" << y << endl; works because each << call returns cout itself, allowing chaining."
        ]
      } },
        { id: 6, marks: "10 Marks", text: "What do you mean by copy constructor in C++? What is the different situations in which copy constructor is applicable?", answer: {
        text: "A copy constructor creates a new object as a copy of an existing object of the same class, with signature ClassName(const ClassName &obj).",
        points: [
          "It is invoked: 1) When an object is initialized from another object, 2) When an object is passed by value to a function, 3) When an object is returned by value from a function."
        ]
      } }
      ]
    },
    3: {
      title: "Operator Overloading & Friend Functions",
      questions: [
        { id: 7, marks: "10 Marks", text: "What is inheritance? Explain various types of inheritance with suitable example.", answer: {
        text: "Inheritance allows a class (derived) to acquire properties and behavior of another class (base).",
        points: [
          "Types: Single (one base, one derived), Multiple (multiple base classes), Multilevel (chain of inheritance), Hierarchical (one base, multiple derived), Hybrid (combination of types).",
          "Example: class Animal (base) → class Dog (derived) inherits Animal's properties."
        ]
      } },
        { id: 8, marks: "10 Marks", text: "What do you mean by Operator Overloading? Which operators in C++ cannot be overloaded? Write syntax to overload binary operator with friend function.", answer: {
        text: "Operator overloading allows operators to work with user-defined types.",
        points: [
          "Operators that cannot be overloaded: :: (scope resolution), . (member access), .* (pointer to member), ?: (ternary), sizeof.",
          "Syntax for binary operator overload with friend: friend ReturnType operator+(const ClassName &obj1, const ClassName &obj2) { return ClassName(obj1.data + obj2.data); }."
        ]
      } },
        { id: 9, marks: "5 Marks", text: "Define Scope resolution operator in C++. Also list its uses using suitable examples.", answer: {
        text: "The scope resolution operator (::) accesses members outside their scope.",
        points: [
          "Uses: 1) Define member function outside class: void ClassName::func() {}, 2) Access global variable when local variable has same name: ::variableName, 3) Access static class members: ClassName::staticVar."
        ]
      } }
      ]
    },
    4: {
      title: "Exception Handling & Virtual Functions",
      questions: [
        { id: 10, marks: "5 Marks", text: "What do you mean by the data members and member functions of a class? Explain how you can define a member function outside a class by taking example.", answer: {
        text: "Data members hold object state; member functions define object behavior.",
        points: [
          "Defined outside class using scope resolution: void ClassName::methodName() { // body }."
        ]
      } },
        { id: 11, marks: "10 Marks", text: "Explain virtual function in C++. How it differs from Pure Virtual function?", answer: {
        text: "A virtual function is declared in base class using the virtual keyword and can be overridden in derived classes, enabling runtime polymorphism.",
        points: [
          "A pure virtual function has no implementation in the base class (virtual void func() = 0;) and makes the class abstract, forcing derived classes to provide an implementation."
        ]
      } },
        { id: 12, marks: "5 Marks", text: "Write a program to demonstrate use of Exception handling.", answer: {
        text: "Exception handling uses try, catch, and throw.",
        points: [
          "Code that might cause an error is placed in a try block; if an exception occurs, it is thrown and caught by a matching catch block: try { if(b==0) throw \"Division by zero\"; } catch(const char* msg) { cout << msg; }."
        ]
      } },
        { id: 13, marks: "10 Marks", text: "Explain nested try block in Exception Handling. Discuss the order in which exception handling mechanism takes place in C++. What are different type of polymorphism in C++? Explain with the help of proper example.", answer: {
        text: "A nested try block is a try block placed inside another try block, allowing localized exception handling within a larger try-catch structure.",
        points: [
          "Order: exception is thrown, control transfers to the nearest matching catch block, if not found it propagates outward.",
          "Types of polymorphism: Compile-time (function overloading, operator overloading) and Runtime (virtual functions).",
          "Example: A base class pointer calling an overridden virtual function in a derived class demonstrates runtime polymorphism."
        ]
      } }
      ]
    }
  },
  yearWise: {
    2026: [
      { id: 101, section: "Compulsory Question", marks: "1 Mark", text: "Define streams in C++.", answer: {
        text: "Streams represent a flow of data. cin is the input stream, cout is the output stream.",
        points: [
          "They are objects of istream and ostream classes used for input/output operations."
        ]
      } },
      { id: 102, section: "Compulsory Question", marks: "1 Mark", text: "What is inline function?", answer: {
        text: "An inline function requests the compiler to insert the complete function body wherever the function is called, avoiding function call overhead.",
        points: [
          "Declared using the inline keyword."
        ]
      } },
      { id: 103, section: "Compulsory Question", marks: "1 Mark", text: "Differentiate between pointer and reference.", answer: {
        text: "A pointer stores an address and can be reassigned or null.",
        points: [
          "A reference is an alias for an existing variable, must be initialized when declared, and cannot be changed to refer to another variable."
        ]
      } },
      { id: 104, section: "Compulsory Question", marks: "1 Mark", text: "What is abstraction?", answer: "Abstraction means hiding implementation details and showing only essential features of an object, typically achieved using classes and access specifiers." },
      { id: 105, section: "Compulsory Question", marks: "1 Mark", text: "Write short note on Static data members.", answer: "Static data members are shared among all objects of a class, declared with the static keyword, and exist independent of any object instance." },
      { id: 106, section: "Compulsory Question", marks: "1 Mark", text: "Write Syntax for Copy constructor.", answer: "ClassName(const ClassName &obj) { // copy data members from obj }" },
      { id: 107, section: "Compulsory Question", marks: "1 Mark", text: "Differentiate between Unary vs. Binary operators.", answer: {
        text: "Unary operators act on a single operand (e.g., ++, --, unary -).",
        points: [
          "Binary operators act on two operands (e.g., +, -, *, /)."
        ]
      } },
      { id: 108, section: "Compulsory Question", marks: "1 Mark", text: "Define Virtual base class.", answer: "A virtual base class prevents multiple copies of a base class from being inherited into a derived class in multiple inheritance, declared using the virtual keyword during inheritance." },
      { id: 109, section: "Compulsory Question", marks: "1 Mark", text: "What are uncaught exceptions?", answer: "An uncaught exception is one that is thrown but not handled by any matching catch block, causing the program to terminate abnormally via std::terminate()." },
      { id: 110, section: "Compulsory Question", marks: "1 Mark", text: "Explain Divide by zero error.", answer: {
        text: "Divide by zero is a runtime error that occurs when a number is divided by zero.",
        points: [
          "In C++, integer division by zero causes undefined behavior; it should be checked and handled using exception handling."
        ]
      } },
      { id: 1, section: "Unit 1", marks: "5 Marks", text: "Explain how overloaded shift operator and member functions are used for Input-Output Operations in C++.", answer: "Stream operators << and >> can be overloaded as friend functions to allow direct input/output of user-defined objects using cin and cout." }
    ],
    2025: [
      { id: 201, section: "Compulsory Question", marks: "2 Marks", text: "Differentiate between Private and public member.", answer: {
        text: "Private members are accessible only within the class.",
        points: [
          "Public members are accessible from outside the class as well."
        ]
      } },
      { id: 202, section: "Compulsory Question", marks: "2 Marks", text: "Multiple and Multilevel Inheritance.", answer: {
        text: "Multiple inheritance: a class inherits from more than one base class.",
        points: [
          "Multilevel inheritance: a class inherits from a derived class, forming a chain."
        ]
      } },
      { id: 203, section: "Compulsory Question", marks: "2 Marks", text: "Abstract and Virtual Class.", answer: {
        text: "An abstract class contains at least one pure virtual function and cannot be instantiated.",
        points: [
          "A virtual class is used in inheritance to avoid duplicate base class copies."
        ]
      } },
      { id: 204, section: "Compulsory Question", marks: "2 Marks", text: "Protected access specifier.", answer: "Protected members are accessible within the class and its derived classes, but not from outside." },
      { id: 205, section: "Compulsory Question", marks: "2 Marks", text: "Run-Time and Compile-Time Polymorphism.", answer: {
        text: "Compile-time polymorphism is achieved through function/operator overloading, resolved at compile time.",
        points: [
          "Run-time polymorphism is achieved through virtual functions, resolved during program execution."
        ]
      } },
      { id: 206, section: "Unit 1", marks: "10 Marks", text: "What are the formatted and unformatted input-output functions with appropriate examples?", answer: {
        text: "Formatted I/O uses manipulators like setw, setprecision for controlled output format.",
        points: [
          "Unformatted I/O uses functions like get(), put(), read(), write() for raw character/byte handling without formatting."
        ]
      } },
      { id: 7, section: "Unit 2", marks: "5 Marks", text: "Describe static data members and static member function with suitable example.", answer: "Static data members are shared across all objects; static member functions can access only static data members and are called using ClassName::functionName()." },
      { id: 8, section: "Unit 2", marks: "5 Marks", text: "Call by value and Call by reference.", answer: {
        text: "Call by value passes a copy of the argument; changes don't affect the original.",
        points: [
          "Call by reference passes the actual variable's address; changes affect the original."
        ]
      } },
      { id: 9, section: "Unit 2", marks: "5 Marks", text: "What is Destructor? State different rules needed to be considered while defining a destructor for a given class.", answer: {
        text: "A destructor cleans up an object when it goes out of scope, named ~ClassName().",
        points: [
          "Rules: no return type, no parameters, only one destructor per class, automatically called at object destruction."
        ]
      } },
      { id: 10, section: "Unit 3", marks: "5 Marks", text: "Explain scope resolution operator and its significance with suitable example.", answer: "The :: operator accesses class members outside their normal scope, essential for defining member functions outside the class body and accessing static members." },
      { id: 11, section: "Unit 3", marks: "5 Marks", text: "What is Constructor Overloading? Explain with example program.", answer: "Constructor overloading allows multiple constructors with different parameter lists in the same class, letting objects be initialized in different ways depending on arguments passed." },
      { id: 12, section: "Unit 4", marks: "10 Marks", text: "Explain the concept of Exception handling in C++ with suitable example.", answer: "Exception handling manages runtime errors using try, catch, throw blocks, allowing programs to handle unexpected situations gracefully instead of crashing." },
      { id: 13, section: "Unit 4", marks: "10 Marks", text: "What is virtual function? Explain its significance. What is virtual function? Explain its significance in C++ using virtual function.", answer: "A virtual function allows derived classes to override base class behavior, enabling runtime polymorphism through base class pointers/references pointing to derived class objects." },
      { id: 300, section: "Unit 2", marks: "5 Marks", text: "Differentiate between structure and union.", answer: {
        text: "Structure allocates separate memory for each member, so all members can hold values simultaneously.",
        points: [
          "Union shares memory equal to its largest member, so only one member holds a valid value at a time.",
          "Use struct when all fields are needed simultaneously; use union to save memory when only one field is active at a time."
        ]
      } },
      { id: 301, section: "Unit 3", marks: "10 Marks", text: "What is inheritance? Explain various types of inheritance with suitable example.", answer: {
        text: "Inheritance allows a derived class to acquire the properties and behaviour of a base class using the colon (:) syntax.",
        points: [
          "Types: 1) Single — one base class, one derived class. 2) Multiple — a derived class inherits from more than one base class. 3) Multilevel — chain of inheritance (A→B→C). 4) Hierarchical — one base class has multiple derived classes. 5) Hybrid — combination of two or more types.",
          "Example: class Animal (base) defines eat(); class Dog : public Animal inherits eat() and adds bark()."
        ]
      } },
      { id: 302, section: "Unit 3", marks: "10 Marks", text: "What do you mean by operator overloading? Explain how binary operator is overloaded with suitable example.", answer: {
        text: "Operator overloading redefines how an existing operator works for user-defined types.",
        points: [
          "Binary operator overloading using member function: ReturnType operator+(ClassName obj) { } defined inside the class.",
          "Using friend function: friend ReturnType operator+(ClassName a, ClassName b) { } defined outside class.",
          "Example — for Complex class: Complex operator+(Complex c) { return Complex(real + c.real, imag + c.imag); } — this allows c1 + c2 where c1 and c2 are Complex objects."
        ]
      } }
    ]
  }
},
"math-cs2": {
  name: "Mathematical Foundations for Computer Science-II",
  code: "B23-CAP-204",
  color: "#0EA5E9",
  semester: "Semester 2",
  course: "BCA (All Branches)",
  units: {
    1: {
      title: "Integration & Graphical Representation",
      questions: [
        { id: 1, marks: "4 Marks", text: "Solve the integral ∫ xeˣ dx.", answer: "Using integration by parts (∫u dv = uv − ∫v du) with u = x, dv = eˣ dx: du = dx, v = eˣ. So ∫xeˣ dx = xeˣ − ∫eˣ dx = xeˣ − eˣ + C = eˣ(x − 1) + C." },
        { id: 2, marks: "4 Marks", text: "Explain Pie diagrams, Histograms, Frequency polygons, and Ogives.", answer: {
        text: "Pie diagram: circular chart showing proportions as slices.",
        points: [
          "Histogram: bar chart of continuous frequency data with no gaps between bars.",
          "Frequency polygon: line graph connecting midpoints of histogram bar tops.",
          "Ogive: cumulative frequency curve, used to find median and quartiles graphically."
        ]
      } },
        { id: 3, marks: "4 Marks", text: "Evaluate ∫ 1/(√(x+1)+√(x+3)) dx.", answer: {
        text: "Rationalize by multiplying numerator and denominator by (√(x+1) − √(x+3)): denominator becomes (x+1)−(x+3) = −2.",
        points: [
          "So integral = −1/2 ∫(√(x+1) − √(x+3)) dx = −1/3[(x+1)^(3/2) − (x+3)^(3/2)] + C."
        ]
      } },
        { id: 4, marks: "4 Marks", text: "Construct a frequency polygon for the given data.", answer: "Plot class midpoints on x-axis against frequencies on y-axis, mark points, connect them with straight lines, and close the polygon by joining to zero frequency points at both ends of the data range." }
      ]
    },
    2: {
      title: "Measures of Central Tendency & Dispersion",
      questions: [
        { id: 5, marks: "4 Marks", text: "Find the mean deviation about mean for the data and their coefficients.", answer: "Mean Deviation = (Σf|x−mean|)/N. Calculate mean first using Σfx/N, then find absolute deviations of each value from mean, multiply by frequency, sum, and divide by total frequency N. Coefficient of MD = MD/Mean." },
        { id: 6, marks: "4 Marks", text: "The Median and Mode of a wage distribution are known. Find the missing frequency values.", answer: "Using the Median formula: Median = L + [(N/2 − cf)/f] × h, and Mode = L + [(f1−f0)/(2f1−f0−f2)] × h, set up equations with known median/mode values and solve simultaneously for missing frequencies f3, f4, f5." },
        { id: 7, marks: "4 Marks", text: "For a group of candidates, correct the mean and standard deviation after misread scores are identified.", answer: {
        text: "Corrected Sum = Original Sum − wrong values + correct values.",
        points: [
          "Corrected Mean = Corrected Sum/N. For SD, correct Σx² by removing wrong values² and adding correct values², then recompute SD = √(Σx²/N − Mean²)."
        ]
      } }
      ]
    },
    3: {
      title: "Correlation & Regression",
      questions: [
        { id: 8, marks: "4 Marks", text: "What is rank correlation? How can you handle repeated ranks? Obtain the rank correlation coefficient for given data.", answer: {
        text: "Rank correlation (Spearman's) measures association between ranked variables: R = 1 − (6Σd²)/(n(n²−1)), where d is the difference in ranks.",
        points: [
          "For repeated ranks, assign average rank to tied values and add a correction factor (m³−m)/12 to Σd² for each group of ties."
        ]
      } },
        { id: 9, marks: "4 Marks", text: "Discuss the various methods for finding correlation using suitable examples.", answer: "Methods: 1) Scatter diagram (visual method), 2) Karl Pearson's coefficient (r = Σ(x−x̄)(y−ȳ)/√(Σ(x−x̄)²Σ(y−ȳ)²)) for linear relationships, 3) Spearman's rank correlation for ranked/ordinal data, 4) Concurrent deviation method for quick approximate correlation." },
        { id: 10, marks: "4 Marks", text: "Find the Karl Pearson's coefficient of correlation between x and y from the data.", answer: {
        text: "r = [NΣxy − ΣxΣy] / √([NΣx² − (Σx)²][NΣy² − (Σy)²]).",
        points: [
          "Calculate Σx, Σy, Σxy, Σx², Σy² from the data table, substitute into the formula to get r, which ranges from -1 to +1."
        ]
      } }
      ]
    },
    4: {
      title: "Regression Analysis",
      questions: [
        { id: 11, marks: "4 Marks", text: "Find a linear regression equation for the given set of data.", answer: "Regression equation of Y on X: Y = a + bX, where b = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)², and a = ȳ − b·x̄. Calculate means of X and Y first, then compute b using deviations, then find a." },
        { id: 12, marks: "4 Marks", text: "Fit a straight line of the form Y = AX + B to the given data.", answer: "Using least squares method: A = [NΣxy − ΣxΣy]/[NΣx² − (Σx)²], B = [Σy − AΣx]/N. Calculate the required summations from the data table and solve for A and B." },
        { id: 13, marks: "4 Marks", text: "Determine the equation of a straight line which best fits the data.", answer: "Apply the least squares regression method: compute Σx, Σy, Σxy, Σx² from the table, then solve the normal equations Σy = nA + BΣx and Σxy = AΣx + BΣx² for A (intercept) and B (slope)." },
        { id: 14, marks: "4 Marks", text: "Find the line of regression of x on y for the data.", answer: "Regression equation of X on Y: X = a + bY, where b = Σ(x−x̄)(y−ȳ)/Σ(y−ȳ)², and a = x̄ − b·ȳ. This predicts X values based on given Y values." }
      ]
    }
  },
  yearWise: {
    2026: [
      { id: 101, section: "Unit 1", marks: "2 Marks", text: "Evaluate ∫ 1/(√(x+1)+√(x+3)) dx.", answer: "Rationalizing and integrating gives −1/3[(x+1)^(3/2) − (x+3)^(3/2)] + C." },
      { id: 102, section: "Unit 1", marks: "2 Marks", text: "Represent the following data by percentage sub-divided bar diagram.", answer: "Convert each category's values to percentages of the total, then draw a single bar divided into segments proportional to each percentage, stacked on top of each other." },
      { id: 3, section: "Unit 1", marks: "4 Marks", text: "Find the mean deviation about mean for the data and coefficients.", answer: "Calculate mean, then absolute deviations from mean weighted by frequency, sum and divide by N for MD; coefficient = MD/Mean." },
      { id: 4, section: "Unit 1", marks: "4 Marks", text: "Construct a frequency polygon for the given data.", answer: "Plot midpoints vs frequencies and connect with straight lines, closing at zero frequency points." },
      { id: 9, section: "Unit 3", marks: "4 Marks", text: "Calculate the median and mode of the data.", answer: "Median found using cumulative frequency and median class formula; Mode found using modal class formula." },
      { id: 10, section: "Unit 3", marks: "4 Marks", text: "Compute the coefficient of rank correlation from marks in two subjects.", answer: "Rank both sets of marks, find d (rank differences), apply Spearman's formula R = 1 − 6Σd²/(n(n²−1))." },
      { id: 13, section: "Unit 4", marks: "4 Marks", text: "Determine the equation of a straight line which best fits the data.", answer: "Use least squares method with normal equations to solve for slope and intercept." },
      { id: 14, section: "Unit 4", marks: "4 Marks", text: "Find the line of regression of x on y for the data.", answer: "X = a + bY using b = Σ(x−x̄)(y−ȳ)/Σ(y−ȳ)² and a = x̄ − b·ȳ." }
    ]
  }
},
"human-values": {
  name: "Human Values and Ethics",
  code: "B23-VAC-101",
  color: "#A855F7",
  semester: "Semester 2",
  course: "BCA (All Branches)",
  units: {
    1: {
      title: "Introduction to Human Values",
      questions: [
        { id: 1, marks: "10 Marks", text: "What are human values and how are they relevant in the contemporary world? Discuss.", answer: {
        text: "Human values are core principles that guide behavior and decision-making, such as honesty, respect, compassion, and responsibility.",
        points: [
          "In the contemporary world, they are relevant for maintaining ethical conduct in an increasingly complex, technology-driven, and interconnected society, helping individuals navigate moral dilemmas at work, in relationships, and in digital spaces."
        ]
      } },
        { id: 2, marks: "10 Marks", text: "How do personal, social, moral, and spiritual values shape an individual's personality? Explain.", answer: {
        text: "Personal values (self-discipline, integrity) shape individual character.",
        points: [
          "Social values (respect, cooperation) guide interaction with others.",
          "Moral values (honesty, justice) determine right and wrong conduct.",
          "Spiritual values (inner peace, mindfulness) shape one's sense of purpose.",
          "Together, they form a well-rounded, balanced personality."
        ]
      } }
      ]
    },
    2: {
      title: "Ethical Theories & Cultivation of Values",
      questions: [
        { id: 3, marks: "10 Marks", text: "Discuss various methods to cultivate ethical values among individuals and society.", answer: "Methods include: Education and moral instruction from a young age, Role modeling by leaders and elders, Reflection and self-awareness practices, Community engagement and social responsibility programs, and Reinforcement through consistent ethical practice in institutions and workplaces." },
        { id: 4, marks: "10 Marks", text: "Briefly explain deontology, virtue ethics and utilitarianism.", answer: {
        text: "Deontology (Kantian ethics) judges actions based on adherence to moral rules and duties, regardless of consequences.",
        points: [
          "Virtue ethics focuses on developing good character traits (virtues) like courage and honesty rather than following rules.",
          "Utilitarianism judges actions by their outcomes, aiming to maximize overall happiness or benefit for the greatest number of people."
        ]
      } }
      ]
    },
    3: {
      title: "Upanishadic Models & Yoga Philosophy",
      questions: [
        { id: 5, marks: "10 Marks", text: "Describe the Panchkosha model discussed in Upanishads and its relevance for human well-being.", answer: {
        text: "The Panchkosha model describes five layers (koshas) of human existence: Annamaya Kosha (physical body), Pranamaya Kosha (vital energy), Manomaya Kosha (mind), Vijnanamaya Kosha (intellect/wisdom), and Anandamaya Kosha (bliss).",
        points: [
          "Understanding and balancing all five layers promotes holistic well-being, integrating physical, mental, and spiritual health."
        ]
      } },
        { id: 6, marks: "10 Marks", text: "How can four Antah-Karanas of Yoga be helpful in understanding human personality? Discuss.", answer: {
        text: "The four Antah-Karanas (inner instruments) are: Manas (mind — processes sensory information), Buddhi (intellect — makes decisions and judgments), Chitta (memory/consciousness — stores impressions), and Ahamkara (ego — creates sense of individual identity).",
        points: [
          "Together they explain how thoughts, decisions, memory, and self-identity shape human personality and behavior."
        ]
      } }
      ]
    },
    4: {
      title: "Professional Ethics",
      questions: [
        { id: 7, marks: "10 Marks", text: "What are professional ethics? Are they relevant in contemporary situations? Analyze.", answer: {
        text: "Professional ethics are standards of conduct expected in a workplace or profession, including honesty, accountability, confidentiality, and fairness.",
        points: [
          "They remain highly relevant today due to increasing corporate scandals, data privacy concerns, and the need for trust in digital and remote work environments, ensuring professionals act responsibly toward clients, colleagues, and society."
        ]
      } },
        { id: 8, marks: "10 Marks", text: "Why are transparency and accountability significant in professional practices? Explain.", answer: {
        text: "Transparency ensures information and decision-making processes are open and understandable to stakeholders, building trust.",
        points: [
          "Accountability ensures individuals and organizations take responsibility for their actions and outcomes.",
          "Together, they prevent corruption, improve organizational credibility, and are essential for maintaining ethical standards in modern professional environments."
        ]
      } }
      ]
    }
  },
  yearWise: {
    2026: [
      { id: 201, section: "Compulsory Question", marks: "MCQ", text: "How can we best describe the relation between values and ethics?", answer: "Values and ethics are related but distinct: values are personal or social while ethics are guidelines for right/wrong conduct — ethics form the foundation of and guide the application of values." },
      { id: 202, section: "Compulsory Question", marks: "MCQ", text: "Which of the following defines 'human values' best?", answer: "Human values are best defined as guidelines for ethical behaviour, universal in nature, achieved and reinforced through effort — not monetary rewards or laws imposed by governments." },
      { id: 203, section: "Compulsory Question", marks: "MCQ", text: "Which of the following is an example of a social value?", answer: "Cultural traditions and practices passed down through generations, such as respect for community and shared customs, represent social values." },
      { id: 204, section: "Compulsory Question", marks: "MCQ", text: "Which of the following is an example of a social value in personal development?", answer: "Respect for diversity is a key example of a social value that shapes how individuals interact within a community." },
      { id: 205, section: "Compulsory Question", marks: "MCQ", text: "Which of the following best describes an integrated personality?", answer: "An integrated personality balances different aspects of the self harmoniously — physical, mental, moral, and spiritual — rather than focusing on only one dimension." },
      { id: 206, section: "Compulsory Question", marks: "MCQ", text: "What primarily distinguishes values from skills?", answer: "Values guide behaviour and decision-making, while skills help perform specific tasks — values relate to character, skills relate to capability." },
      { id: 207, section: "Compulsory Question", marks: "MCQ", text: "What is the main goal of Virtue Ethics?", answer: "The main goal of Virtue Ethics is building the character of a person, focusing on cultivating good traits rather than just following rules or maximizing outcomes." },
      { id: 1, section: "Unit 1", marks: "10 Marks", text: "What are human values and how are they relevant in the contemporary world? Discuss.", answer: "Human values guide ethical behaviour and decision-making, remaining essential in today's complex, technology-driven society for navigating moral challenges." },
      { id: 3, section: "Unit 2", marks: "10 Marks", text: "Discuss various methods to cultivate ethical values among individuals and society.", answer: "Education, role modeling, self-reflection, community engagement, and consistent reinforcement in institutions all help cultivate ethical values." },
      { id: 5, section: "Unit 3", marks: "10 Marks", text: "Describe the Panchkosha model discussed in Upanishads and its relevance for human well-being.", answer: "Five layers — physical, vital energy, mind, intellect, and bliss — together represent holistic human well-being in the Panchkosha model." },
      { id: 7, section: "Unit 4", marks: "10 Marks", text: "What are professional ethics? Are they relevant in contemporary situations? Analyze.", answer: "Professional ethics ensure honesty, accountability, and fairness at work, remaining highly relevant amid modern workplace and digital-era challenges." }
    ]
  }
},
"concepts-of-os": {
  name: "Concepts of Operating Systems",
  code: "B23-CAP/CTS/CAL/CDS-203",
  color: "#10b981",
  semester: "Semester 2",
  course: "BCA (All Branches)",
  units: {
    1: {
      title: "Introduction to Operating Systems",
      questions: [
        { id: 1, marks: "10 Marks", text: "What is an Operating System? Explain the concept of timesharing, distributed, and network operating system in detail.", answer: {
        text: "An Operating System (OS) is system software that acts as an intermediary between the user and hardware, managing all resources and providing a convenient environment for program execution.",
        points: [
          "Types: 1) Timesharing OS — allows multiple users to share CPU time simultaneously; each user gets a small time slice called a quantum (e.g., UNIX, Linux). 2) Distributed OS — manages a group of separate networked computers and presents them as a single coherent system; processes can run on any machine transparently (e.g., LOCUS, Amoeba). 3) Network OS — provides file sharing, printer sharing, and communication services over a network; each machine runs its own local OS independently (e.g., Windows Server, Novell NetWare)."
        ]
      } },
        { id: 2, marks: "5 Marks", text: "Write short note on system call and system program.", answer: {
        text: "System Call: A system call is the programmatic interface through which a user-level program requests a service from the OS kernel, such as creating a process, reading a file, or sending data over a network.",
        points: [
          "Examples: open(), read(), write(), fork(), exit().",
          "System Program: System programs provide a convenient environment for program development and execution.",
          "They sit above the kernel and include file management tools, compilers, editors, interpreters, and system-status utilities.",
          "They use system calls internally to access OS services."
        ]
      } },
        { id: 3, marks: "5 Marks", text: "Define multiprogramming. How does multiprogramming ensure effective utilization of main memory and CPU?", answer: {
        text: "Multiprogramming is a technique where multiple programs are simultaneously loaded in main memory.",
        points: [
          "When the currently running process waits for I/O, the CPU is immediately assigned to another ready process instead of remaining idle.",
          "This ensures: 1) CPU Utilization — CPU is always executing some process, never idle. 2) Memory Utilization — multiple programs share available RAM, making efficient use of memory. 3) Throughput — more jobs are completed per unit time.",
          "Result: both CPU and main memory are used effectively, dramatically reducing wasteful idle time."
        ]
      } }
      ]
    },
    2: {
      title: "Process Management & CPU Scheduling",
      questions: [
        { id: 4, marks: "10 Marks", text: "Explain Priority Scheduling and Round Robin CPU scheduling algorithms with a suitable example.", answer: {
        text: "Priority Scheduling: Each process is assigned a priority number; the process with highest priority (lowest number) runs first.",
        points: [
          "Non-preemptive: current process runs to completion before next starts.",
          "Preemptive: a newly arrived higher-priority process can interrupt the running one.",
          "Starvation of low-priority processes is a disadvantage, solved by aging.",
          "Round Robin (RR): Each process is given a fixed time quantum.",
          "If it does not complete within that time, it is placed at the end of the ready queue.",
          "This cycle repeats until all processes finish.",
          "It is fair and prevents starvation.",
          "Smaller quantum gives better response time but more context switch overhead."
        ]
      } },
        { id: 5, marks: "10 Marks", text: "Define deadlock. Explain Banker's algorithm with a suitable example.", answer: {
        text: "Deadlock is a state where a set of processes are blocked, each waiting for a resource held by another process in the set, creating a circular wait from which no process can proceed.",
        points: [
          "Four Necessary Conditions (all must hold): Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.",
          "Banker's Algorithm (Deadlock Avoidance): When a process requests resources, the algorithm temporarily grants them and runs a safety check.",
          "A system is in a safe state if there exists a safe sequence — an order in which every process can eventually get all its required resources, execute, and release them.",
          "If the state after granting is safe, the request is approved; otherwise the process must wait.",
          "The algorithm prevents deadlock by never leaving the system in an unsafe state."
        ]
      } }
      ]
    },
    3: {
      title: "Memory Management",
      questions: [
        { id: 6, marks: "10 Marks", text: "What is Virtual Memory? Explain various page replacement policies in detail.", answer: {
        text: "Virtual Memory allows the execution of processes that are larger than the available physical RAM by using disk space as an extension of memory.",
        points: [
          "Only the pages currently needed are kept in RAM (demand paging); the rest remain on disk.",
          "When a required page is not in RAM, a page fault occurs and the OS brings it in, possibly replacing an existing page.",
          "Page Replacement Policies: 1) FIFO — replace the page that was loaded into memory earliest; simple but may remove frequently-used pages. 2) LRU (Least Recently Used) — replace the page not used for the longest time; performs well in practice. 3) Optimal — replace the page that will not be needed for the longest time in the future; gives minimum page faults but is theoretical (requires future knowledge). 4) LFU (Least Frequently Used) — replace the page accessed the fewest number of times."
        ]
      } },
        { id: 7, marks: "5 Marks", text: "Explain the Critical Section problem.", answer: {
        text: "A critical section is a segment of code where a process accesses shared resources such as shared variables, files, or I/O devices.",
        points: [
          "The Critical Section Problem is ensuring that when one process is executing in its critical section, no other process is allowed to execute in theirs.",
          "A correct solution must satisfy three conditions: 1) Mutual Exclusion — only one process in critical section at a time. 2) Progress — if no process is in the critical section, selection of the next entering process cannot be postponed indefinitely. 3) Bounded Waiting — a process cannot be made to wait indefinitely (no starvation).",
          "Solutions: mutex locks, semaphores, and monitors."
        ]
      } },
        { id: 8, marks: "5 Marks", text: "Explain Segmentation in memory management.", answer: {
        text: "Segmentation is a memory management technique that divides a program into variable-sized segments based on logical units such as the main program, functions, arrays, and the stack.",
        points: [
          "Each segment has a segment number, a base address (where it starts in physical memory), and a limit (its size).",
          "The segment table maps each segment number to its physical base and limit.",
          "Advantages: Supports the logical structure of programs, enables easy sharing and protection at the segment level.",
          "Disadvantage: Causes external fragmentation because segments are variable in size, leaving irregular gaps in memory."
        ]
      } }
      ]
    },
    4: {
      title: "Storage Management & File Systems",
      questions: [
        { id: 9, marks: "10 Marks", text: "What is disk scheduling? Explain any four disk scheduling algorithms with a suitable example.", answer: {
        text: "Disk scheduling determines the order in which pending disk I/O requests are serviced, minimizing head movement (seek time) for better performance.",
        points: [
          "Algorithms: 1) FCFS (First Come First Served) — requests are served in the exact order they arrive; simple but may cause long unnecessary head movements. 2) SSTF (Shortest Seek Time First) — always serves the request closest to the current head position; reduces seek time but can cause starvation for far-away requests. 3) SCAN (Elevator Algorithm) — head moves in one direction servicing all requests in its path, then reverses; fair and no starvation. 4) C-SCAN (Circular SCAN) — head only services requests while moving in one direction, then jumps back to the beginning without servicing on the return trip; provides more uniform wait times than SCAN."
        ]
      } },
        { id: 10, marks: "5 Marks", text: "Explain disk structure in detail.", answer: {
        text: "A magnetic disk is organized as: Platters — circular magnetic disks stacked on a central spindle, each with two surfaces.",
        points: [
          "Tracks — concentric circles on each surface where data is stored.",
          "Cylinders — the set of all tracks at the same radial position across all platters.",
          "Sectors — the smallest physical storage unit on a track, typically 512 bytes or 4KB. Disk Access Time has three components: Seek Time (time to move the read/write arm to the correct track) + Rotational Latency (waiting for the desired sector to rotate under the head) + Transfer Time (time to read or write the actual data).",
          "Seek time is the dominant factor."
        ]
      } },
        { id: 11, marks: "5 Marks", text: "Explain various file protection mechanisms.", answer: {
        text: "File protection ensures that only authorized users can access or modify files.",
        points: [
          "Mechanisms: 1) Access Control Lists (ACL) — each file has a list specifying which users or groups have which permissions (read, write, execute). 2) Unix-style Permissions — three levels (owner, group, others) each with read/write/execute permission bits. 3) Password Protection — file access requires entering a correct password. 4) Encryption — file contents are encrypted; only users with the decryption key can read the data. 5) Capability Lists — each user has a list specifying which files they can access and what operations they are allowed to perform on each."
        ]
      } }
      ]
    }
  },
  yearWise: {
    2025: [
      { id: 101, section: "Compulsory Question", marks: "2 Marks", text: "Context Switching.", answer: {
        text: "Context switching is the process of saving the full state (PCB — Program Counter, registers, memory maps) of the currently running process and loading the saved state of the next scheduled process.",
        points: [
          "It enables multitasking but introduces overhead since no useful work is done during the switch itself."
        ]
      } },
      { id: 102, section: "Compulsory Question", marks: "2 Marks", text: "Deadlock prevention.", answer: "Deadlock prevention eliminates at least one of the four necessary conditions: (1) Deny Mutual Exclusion — not always possible. (2) Deny Hold & Wait — require processes to request all resources at once before starting. (3) Allow Preemption — forcibly take resources from a waiting process. (4) Impose resource ordering — number all resources and require processes to request them in increasing order, preventing circular wait." },
      { id: 103, section: "Compulsory Question", marks: "2 Marks", text: "Swapping.", answer: {
        text: "Swapping is a memory management technique where an entire process is moved from RAM to disk (swap out) to free physical memory, and brought back into RAM (swap in) when it is scheduled to run again.",
        points: [
          "It allows more processes to be managed than the physical memory can hold at one time, enabling better multiprogramming."
        ]
      } },
      { id: 104, section: "Compulsory Question", marks: "2 Marks", text: "First fit and Best fit.", answer: {
        text: "These are memory allocation strategies for variable-size partitions.",
        points: [
          "First Fit: scan from the beginning and allocate the first hole large enough — fast but may leave scattered gaps.",
          "Best Fit: scan all holes and allocate the smallest one that is still sufficient — minimizes wasted space but is slower due to full search and tends to create many tiny unusable fragments."
        ]
      } },
      { id: 105, section: "Compulsory Question", marks: "2 Marks", text: "Acyclic-Graph Directory Structure.", answer: {
        text: "An acyclic-graph directory structure allows directories to share files or subdirectories using hard links or symbolic links, enabling file sharing without duplication.",
        points: [
          "The structure must remain acyclic (no cycles) to prevent infinite loops during directory traversal.",
          "Deletion must be handled carefully — a file is deleted only when no more links point to it (using reference counting)."
        ]
      } },
      { id: 1, section: "Unit 1", marks: "10 Marks", text: "What is an Operating System? Explain the concept of timesharing, distributed, and network operating system in detail.", answer: {
        text: "OS is system software managing hardware/software resources.",
        points: [
          "Timesharing OS: multiple users share CPU time via time slices (e.g., UNIX).",
          "Distributed OS: manages networked computers as a single system (e.g., LOCUS).",
          "Network OS: provides file/printer sharing over a network, each machine has its own local OS (e.g., Windows Server)."
        ]
      } },
      { id: 2, section: "Unit 1", marks: "5 Marks", text: "Write short note on system call and system program.", answer: {
        text: "System calls are the interface for programs to request OS kernel services (open, read, write, fork, exit).",
        points: [
          "System programs provide development and execution environments above the kernel — compilers, editors, file managers — using system calls internally."
        ]
      } },
      { id: 3, section: "Unit 1", marks: "5 Marks", text: "Define multiprogramming. How does multiprogramming ensure effective utilization of main memory and CPU?", answer: {
        text: "Multiprogramming keeps multiple programs in RAM simultaneously.",
        points: [
          "When one process waits for I/O, the CPU immediately switches to another ready process, ensuring the CPU never stays idle.",
          "Memory is shared among all loaded programs, increasing both CPU and memory utilization and overall throughput."
        ]
      } },
      { id: 4, section: "Unit 2", marks: "10 Marks", text: "Consider processes P1(Burst=8, Priority=3), P2(Burst=4, Priority=1), P3(Burst=5, Priority=4), P4(Burst=9, Priority=2) arriving at time 0. Calculate Average Waiting Time and Average Turnaround Time for: (a) Priority Scheduling (b) Round Robin with time quantum = 5ms.", answer: {
        text: "(a) Priority Scheduling (lower number = higher priority, non-preemptive): Execution order: P2(priority 1) → P4(priority 2) → P1(priority 3) → P3(priority 4).",
        points: [
          "Waiting times: P2=0, P4=4, P1=13, P3=21.",
          "Avg WT = (0+4+13+21)/4 = 9.5ms.",
          "Turnaround times: P2=4, P4=13, P1=21, P3=26.",
          "Avg TAT = (4+13+21+26)/4 = 16ms. (b) Round Robin (quantum=5ms): Schedule — P1(0-5), P2(5-9, done), P3(9-14, done), P4(14-19), P1(19-22, done), P4(22-26, done).",
          "Completion: P1=22, P2=9, P3=14, P4=26.",
          "WT: P1=22-8=14, P2=9-4=5, P3=14-5=9, P4=26-9=17.",
          "Avg WT=(14+5+9+17)/4=11.25ms.",
          "Avg TAT=(22+9+14+26)/4=17.75ms."
        ]
      } },
      { id: 5, section: "Unit 2", marks: "10 Marks", text: "Define deadlock. Explain Banker's algorithm with a suitable example.", answer: {
        text: "Deadlock: A state where each process in a set waits for a resource held by another process in the same set, creating a circular dependency from which no process can proceed.",
        points: [
          "Four necessary conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.",
          "Banker's Algorithm: Before granting a resource request, the OS temporarily allocates the resources and runs a safety check.",
          "Safety Check: Try to find a safe sequence — an order in which every process can get all needed resources, finish, and release them, allowing the next to proceed.",
          "If a safe sequence exists, grant the request.",
          "If not, the process must wait.",
          "This ensures the system never enters an unsafe (deadlock-prone) state."
        ]
      } },
      { id: 6, section: "Unit 3", marks: "10 Marks", text: "What is Virtual Memory? Explain various page replacement policies in detail.", answer: {
        text: "Virtual memory extends available memory by using disk as an extension of RAM, loading only needed pages (demand paging).",
        points: [
          "Page faults occur when required pages are not in RAM. Page Replacement Policies: FIFO — remove oldest loaded page (simple, not always optimal).",
          "LRU — remove least recently used page (performs well, commonly used).",
          "Optimal — remove page needed farthest in future (best performance, theoretical only).",
          "LFU — remove least frequently accessed page."
        ]
      } },
      { id: 7, section: "Unit 3", marks: "5 Marks", text: "Critical Section problem.", answer: {
        text: "Critical section is a shared-resource code segment where only one process should execute at a time.",
        points: [
          "Solution requires: Mutual Exclusion, Progress, and Bounded Waiting.",
          "Implemented using semaphores, mutex locks, or monitors."
        ]
      } },
      { id: 8, section: "Unit 3", marks: "5 Marks", text: "Segmentation.", answer: {
        text: "Segmentation divides memory into variable-sized logical segments (code, data, stack).",
        points: [
          "Each segment has a base and limit in the segment table.",
          "Enables logical organization, sharing, and protection per segment but causes external fragmentation."
        ]
      } },
      { id: 9, section: "Unit 4", marks: "10 Marks", text: "What is disk scheduling? Explain any four disk scheduling algorithms with suitable example.", answer: {
        text: "Disk scheduling orders I/O requests to minimize head movement.",
        points: [
          "FCFS: serve in arrival order — simple but inefficient.",
          "SSTF: serve nearest request first — fast but may starve far requests.",
          "SCAN: head sweeps back and forth servicing all requests — no starvation.",
          "C-SCAN: head moves one way only, jumps back without servicing on return — uniform wait time."
        ]
      } },
      { id: 10, section: "Unit 4", marks: "5 Marks", text: "Disk structure.", answer: {
        text: "Disk has stacked platters with tracks divided into sectors.",
        points: [
          "Cylinders = same-position tracks across all platters.",
          "Access time = seek time + rotational latency + transfer time."
        ]
      } },
      { id: 11, section: "Unit 4", marks: "5 Marks", text: "File protection mechanisms.", answer: {
        text: "Protection methods: ACLs specify permissions per user/file.",
        points: [
          "Unix model: read/write/execute for owner/group/others.",
          "Password protection.",
          "Encryption secures file content.",
          "Capability lists define what each user can access and do."
        ]
      } }
    ],
    2026: [
      { id: 201, section: "Compulsory Question", marks: "2 Marks", text: "Define the real time operating system.", answer: {
        text: "A Real Time Operating System (RTOS) is designed to process data and respond to inputs within strict, guaranteed time limits, used in embedded and control systems (e.g., aircraft control, medical devices). Hard RTOS: deadlines must never be missed. Soft RTOS: deadlines are preferred but occasional misses are tolerable.",
        points: [
          "Hard Real-Time: deadlines must never be missed (e.g. aircraft control systems).",
          "Soft Real-Time: deadlines preferred but occasional misses are tolerable (e.g. video streaming)."
        ],
        tip: "Key idea: an RTOS is judged by correctness of timing, not just correctness of output."
      } },
      { id: 202, section: "Compulsory Question", marks: "2 Marks", text: "What is thread? How is it different from Process?", answer: {
        text: "A thread is the smallest unit of CPU execution within a process; multiple threads of the same process share its address space and resources, making them lightweight. A process is an independent program with its own separate memory space, so creating and switching processes is heavier and slower than threads.",
        points: [
          "Thread = smallest unit of CPU execution inside a process.",
          "Threads of the same process share code, data, and address space — lightweight to create/switch.",
          "A Process is an independent program with its own separate memory space — heavier to create/switch."
        ],
        tip: "Think of a process as a house, and threads as people living inside sharing the same rooms."
      } },
      { id: 203, section: "Compulsory Question", marks: "2 Marks", text: "What is Semaphore?", answer: {
        text: "A semaphore is an integer synchronization variable used to control access to shared resources among multiple processes using atomic wait() (P) and signal() (V) operations. A binary semaphore (0/1) works like a mutex lock, while a counting semaphore manages a resource with multiple instances.",
        points: [
          "wait() / P() operation: decrements the semaphore; blocks the process if value goes negative.",
          "signal() / V() operation: increments the semaphore; wakes up a waiting process.",
          "Binary semaphore (0/1): works like a mutex lock for mutual exclusion.",
          "Counting semaphore: manages access when multiple instances of a resource exist."
        ],
        tip: "Semaphores are the classic tool for solving synchronization problems like Producer-Consumer."
      } },
      { id: 204, section: "Compulsory Question", marks: "2 Marks", text: "What is Swapping?", answer: {
        text: "Swapping is a memory management technique where an entire process is moved out of RAM to disk (swap space) to free memory, and brought back into RAM when it needs to run again, increasing the degree of multiprogramming.",
        points: [
          "OS moves an entire process out of RAM into disk (swap space) to free memory.",
          "Swapped-out process is brought back into RAM when it's ready to run again.",
          "Increases the degree of multiprogramming by letting more processes share limited RAM."
        ]
      } },
      { id: 205, section: "Compulsory Question", marks: "2 Marks", text: "Define Seek Time.", answer: {
        text: "Seek time is the time taken by the disk's read/write head to move from its current track to the target track containing the required data. It is the dominant component of total disk access time.",
        points: [
          "Time taken by the disk's read/write head to move from its current track to the target track.",
          "It is the single largest component of total disk access time (compared to rotational latency and transfer time)."
        ]
      } },
      { id: 206, section: "Unit 1", marks: "10 Marks", text: "Explain Operating System Structure and compare Monolithic and Microkernel approaches.", answer: {
        text: "OS structure describes how internal components are organized into the system. Monolithic Kernel: the entire OS — process management, memory management, file system, device drivers — runs as one large program in kernel mode; fast since there is no message-passing overhead, but a bug in any component can crash the whole system and it is harder to maintain (e.g., traditional UNIX, Linux). Microkernel: the kernel contains only essential functions like basic IPC and minimal process/memory management; other services such as file systems and drivers run as user-mode server processes communicating via message passing; more stable and modular since a failing service does not crash the kernel, but slower due to IPC overhead (e.g., QNX, Minix).",
        points: [
          "Monolithic Kernel — entire OS (process mgmt, memory mgmt, file system, drivers) runs as one large program in kernel mode.",
          "Monolithic: fast (no message-passing overhead) but a bug in any part can crash the whole system; harder to maintain. Example: traditional UNIX, Linux.",
          "Microkernel — kernel keeps only essential functions (basic IPC, minimal process/memory mgmt); other services run as user-mode servers.",
          "Microkernel: more stable and modular since a failing service doesn't crash the kernel, but slower due to IPC overhead. Example: QNX, Minix."
        ],
        tip: "Exam trick: Monolithic = speed, Microkernel = stability. Mention this trade-off explicitly for full marks."
      } },
      { id: 207, section: "Unit 1", marks: "5 Marks", text: "What is Process Control Block? Explain different types of components of PCB.", answer: {
        text: "A Process Control Block (PCB) is a data structure maintained by the OS for each process, holding all information needed to manage it. Components: Process ID (unique identifier), Process State (new/ready/running/waiting/terminated), Program Counter (address of next instruction), CPU registers (saved during context switch), CPU scheduling information (priority, queue pointers), Memory management information (base/limit registers, page tables), Accounting information (CPU used, time limits), and I/O status information (open files, allocated devices).",
        points: [
          "Process ID — unique identifier for the process.",
          "Process State — new / ready / running / waiting / terminated.",
          "Program Counter — address of the next instruction to execute.",
          "CPU Registers — saved and restored during a context switch.",
          "CPU Scheduling Info — priority, queue pointers.",
          "Memory Management Info — base/limit registers, page tables.",
          "Accounting Info — CPU time used, time limits.",
          "I/O Status Info — open files, allocated devices."
        ],
        tip: "PCB is created when a process starts and destroyed when it terminates — it's how the OS 'remembers' a process."
      } },
      { id: 208, section: "Unit 1", marks: "5 Marks", text: "Explain inter process communication with different methods.", answer: {
        text: "Inter Process Communication (IPC) allows processes to exchange data and synchronize their actions. Methods: 1) Shared Memory — a region of memory is mapped into the address space of multiple processes; fast since the kernel is not involved after setup, but requires explicit synchronization. 2) Message Passing — processes exchange messages via send()/receive() through the kernel (pipes, message queues, sockets); simpler and safer but slower due to kernel overhead. 3) Pipes/Named Pipes (FIFOs) for related or unrelated processes. 4) Sockets for communication across a network.",
        points: [
          "Shared Memory — a memory region mapped into multiple processes' address space; fast (no kernel involvement after setup) but needs explicit synchronization.",
          "Message Passing — processes exchange messages via send()/receive() through the kernel; simpler and safer but slower due to kernel overhead.",
          "Pipes / Named Pipes (FIFOs) — for related or unrelated processes to communicate.",
          "Sockets — for communication across a network."
        ]
      } },
      { id: 209, section: "Unit 2", marks: "10 Marks", text: "Explain CPU Scheduling criteria and different levels of scheduling.", answer: {
        text: "Scheduling criteria used to evaluate algorithms: CPU utilization (keep CPU as busy as possible), Throughput (processes completed per unit time), Turnaround time (total time from submission to completion), Waiting time (time spent in the ready queue), and Response time (time from request until first response). Levels of scheduling: 1) Long-term scheduler (job scheduler) — selects which processes are admitted into the ready queue, controlling the degree of multiprogramming. 2) Short-term scheduler (CPU scheduler) — selects which ready process gets the CPU next; runs very frequently. 3) Medium-term scheduler — handles swapping, temporarily removing processes from memory to reduce the degree of multiprogramming and reintroducing them later.",
        points: [
          "CPU Utilization — keep the CPU as busy as possible.",
          "Throughput — number of processes completed per unit time.",
          "Turnaround Time — total time from submission to completion.",
          "Waiting Time — time spent sitting in the ready queue.",
          "Response Time — time from request until the first response.",
          "Long-term scheduler — admits processes into the ready queue, controls degree of multiprogramming.",
          "Short-term scheduler — picks which ready process runs next; runs very frequently.",
          "Medium-term scheduler — handles swapping to temporarily reduce the degree of multiprogramming."
        ],
        tip: "Remember the 3 schedulers by frequency: Long-term = rare, Short-term = very frequent, Medium-term = occasional."
      } },
      { id: 210, section: "Unit 2", marks: "5 Marks", text: "What is Deadlock? Discuss different necessary conditions of deadlock.", answer: {
        text: "Deadlock is a situation where a set of processes are permanently blocked, each holding a resource while waiting for another resource held by another process in the same set. Four necessary conditions (all must hold simultaneously): Mutual Exclusion (resources are non-shareable), Hold and Wait (a process holds a resource while waiting for another), No Preemption (a resource cannot be forcibly taken away), and Circular Wait (a closed chain of processes each waiting for a resource held by the next).",
        points: [
          "Mutual Exclusion — resource is non-shareable, only one process can use it at a time.",
          "Hold and Wait — a process holds one resource while waiting for another.",
          "No Preemption — a resource can't be forcibly taken away from a process.",
          "Circular Wait — a closed chain of processes, each waiting for a resource held by the next."
        ],
        tip: "All four conditions must hold simultaneously for deadlock to occur — breaking even one prevents it."
      } },
      { id: 211, section: "Unit 2", marks: "5 Marks", text: "Explain how semaphores is used to solve synchronization problem.", answer: {
        text: "Semaphores solve synchronization problems by controlling access to shared resources through atomic wait(S) — decrement, block if the value goes negative — and signal(S) — increment, wake a waiting process — operations. A binary semaphore (mutex, value 0/1) ensures mutual exclusion in a critical section. A counting semaphore manages access to a resource with multiple instances, e.g., in the producer-consumer problem, one semaphore tracks empty buffer slots and another tracks filled slots, ensuring the producer and consumer never access the buffer unsafely.",
        points: [
          "wait(S): decrement S; if S < 0, the process blocks.",
          "signal(S): increment S; wakes up a blocked process if any is waiting.",
          "Binary semaphore (mutex) ensures mutual exclusion inside a critical section.",
          "Counting semaphore example — Producer-Consumer: one semaphore tracks empty slots, another tracks filled slots, so the buffer is never accessed unsafely."
        ]
      } },
      { id: 212, section: "Unit 3", marks: "5 Marks", text: "Differentiate between Fixed and Variable Partitioning.", answer: {
        text: "Fixed Partitioning divides memory into a fixed number of partitions of fixed size at system startup; simple but causes internal fragmentation (wasted space inside a partition when the process is smaller than it). Variable Partitioning creates partitions dynamically matching the exact size of each process at load time; eliminates internal fragmentation but causes external fragmentation (scattered free holes too small individually to satisfy new requests), requiring compaction.",
        points: [
          "Fixed Partitioning — memory divided into a fixed number of partitions of fixed size at startup.",
          "Fixed: simple, but causes internal fragmentation (wasted space when a process is smaller than its partition).",
          "Variable Partitioning — partitions created dynamically to match each process's exact size at load time.",
          "Variable: no internal fragmentation, but causes external fragmentation (scattered free holes too small to use), needing compaction."
        ]
      } },
      { id: 213, section: "Unit 3", marks: "5 Marks", text: "Differentiate between Paging and Segmentation.", answer: {
        text: "Paging divides memory into fixed-size blocks — frames in physical memory and pages in logical memory; it eliminates external fragmentation but may cause internal fragmentation, and is invisible to the programmer (purely a physical view). Segmentation divides a program into variable-sized logical units such as functions, arrays, and the stack, matching the programmer's view; it avoids internal fragmentation but causes external fragmentation, and is visible to the programmer (a logical view).",
        points: [
          "Paging — memory split into fixed-size blocks (frames in physical memory, pages in logical memory).",
          "Paging: no external fragmentation, may cause internal fragmentation; invisible to the programmer.",
          "Segmentation — program split into variable-sized logical units (functions, arrays, stack).",
          "Segmentation: no internal fragmentation, causes external fragmentation; visible to the programmer (matches how they think about their program)."
        ]
      } },
      { id: 214, section: "Unit 3", marks: "10 Marks", text: "Consider the reference string 1,2,3,4,2,1,6,5,1,2,3,7,6,3,2,1,2,3,6 with 4 frames (initially all frames empty). How many page faults occur for (i) LRU Replacement and (ii) FIFO Replacement?", answer: {
        text: "With 4 frames, working through the 19-reference string: FIFO Replacement (evicts the page that arrived earliest, regardless of use) results in 14 page faults and 5 hits. LRU Replacement (evicts the page that was least recently used) results in 10 page faults and 9 hits, because it keeps recently reused pages like 1, 2, and 3 in memory instead of blindly evicting the oldest arrival. This shows LRU performing better than FIFO on this particular reference string, since it makes eviction decisions based on actual usage pattern rather than arrival order.",
        points: [
          "Reference string: 1,2,3,4,2,1,6,5,1,2,3,7,6,3,2,1,2,3,6 — 4 frames, initially all empty.",
          "FIFO evicts the page that arrived earliest, regardless of how recently it was used → 14 page faults, 5 hits.",
          "LRU evicts the page that was least recently used, based on actual access pattern → 10 page faults, 9 hits.",
          "LRU wins here because it keeps recently reused pages (like 1, 2, 3) in memory instead of blindly evicting the oldest arrival."
        ],
        tip: "In numericals like this, always draw the frame table step-by-step in the exam — examiners give partial marks for correct working even if the final count is off."
      } },
      { id: 215, section: "Unit 4", marks: "5 Marks", text: "Explain Directory Structures with advantages and disadvantages.", answer: {
        text: "Single-level: one directory shared by all users; simple but causes naming conflicts and no grouping. Two-level: a separate directory per user; avoids conflicts across users but no further subdivision within a user's own files. Tree-structured: directories can contain subdirectories, giving hierarchical organization; efficient searching and each user can have their own subdirectories, but path names can become long. Acyclic-graph: allows shared subdirectories/files via links, saving space, but complicates deletion (needs reference counting) and must avoid cycles. General graph: allows cycles too, the most flexible, but requires garbage collection to reclaim unreachable cyclic file space, making it the most complex.",
        points: [
          "Single-level — one shared directory for all users; simple but causes naming conflicts, no grouping.",
          "Two-level — a separate directory per user; avoids conflicts across users but no subdivision within a user's own files.",
          "Tree-structured — directories can contain subdirectories; efficient searching and hierarchy, but path names can get long.",
          "Acyclic-graph — allows shared files/subdirectories via links, saving space; deletion is trickier (needs reference counting).",
          "General graph — allows cycles too, most flexible; needs garbage collection to reclaim unreachable cyclic space, most complex."
        ]
      } },
      { id: 216, section: "Unit 4", marks: "5 Marks", text: "Explain different techniques of Free Space Management.", answer: {
        text: "Bit Vector (bitmap): each disk block is represented by one bit — 0 for free, 1 for allocated; simple and efficient for finding contiguous free blocks, but needs extra memory and scanning on large disks. Linked List: free blocks are linked together, each storing a pointer to the next free block; no wasted space but slow to traverse when searching for multiple contiguous blocks. Grouping: the first free block stores the addresses of several other free blocks, allowing many free blocks to be found quickly at once. Counting: since free space is often allocated/freed in contiguous chunks, this stores the address of the first free block plus a count of the following contiguous free blocks, making it compact for large runs of free space.",
        points: [
          "Bit Vector (bitmap) — each block is 1 bit (0=free, 1=allocated); simple, but needs scanning on large disks.",
          "Linked List — free blocks linked together via pointers; no wasted space but slow to find multiple contiguous blocks.",
          "Grouping — first free block stores addresses of several other free blocks, so many can be found at once.",
          "Counting — stores the address of the first free block plus a count of contiguous free blocks after it; compact for large free runs."
        ]
      } },
      { id: 217, section: "Unit 4", marks: "10 Marks", text: "What is Disk Scheduling? Describe the LOOK and C-LOOK algorithms with Example.", answer: {
        text: "Disk scheduling determines the order in which pending disk I/O requests are serviced, minimizing head movement to improve performance. LOOK: the head moves in one direction servicing all requests along the way, but reverses as soon as there are no more requests ahead in that direction — unlike SCAN, it does not travel all the way to the disk's physical end. C-LOOK (Circular LOOK): the head services requests in one direction only up to the last request in that direction, then jumps directly back to the closest request at the other end (without servicing anything on the return trip) and continues in the same original direction; this gives a more uniform wait time than LOOK/SCAN since requests near either end are not favoured. Example: for pending requests at tracks 38, 39, 18, 90, 150, 160, 184 with the head starting at 55 and moving toward higher tracks — LOOK services 90, 150, 160, 184, then reverses to service 39, 38, 18 (stopping at the last request, not the disk's end). C-LOOK would service 90, 150, 160, 184, then jump directly to 18 and continue upward through 38, 39.",
        points: [
          "Disk scheduling decides the order of servicing pending I/O requests to minimize total head movement.",
          "LOOK — head moves in one direction servicing requests, but reverses as soon as there are no more requests ahead (doesn't go all the way to the disk's physical end).",
          "C-LOOK (Circular LOOK) — services requests in one direction up to the last request, then jumps directly back to the closest request at the other end and continues in the same original direction.",
          "Example: requests at tracks 38, 39, 18, 90, 150, 160, 184; head starts at 55 moving upward — LOOK: 90→150→160→184, then reverses to 39→38→18. C-LOOK: 90→150→160→184, then jumps to 18→38→39."
        ],
        tip: "C-LOOK gives more uniform wait times than LOOK since it doesn't favour requests near either end of the disk."
      } }
    ]
  }
},
"environmental-studies": {
  name: "Environmental Studies",
  code: "B23-VAC-201",
  color: "#22C55E",
  semester: "Semester 1 & 2",
  course: "BCA (All Branches)",
  units: {
    1: {
      title: "Introduction to Environmental Studies & Ecosystems",
      questions: [
        { id: 1, marks: "1 Mark each", text: "Define: Scope/Importance of Environmental Studies, Consumers in an ecosystem, Endemic species, Biological invasions, Contaminants.", answer: {
          text: "Scope/Importance of Environmental Studies: the multidisciplinary study of the environment covering ecology, pollution, conservation and sustainable development, aimed at building awareness to protect natural resources for present and future generations. Consumers: organisms in an ecosystem that cannot produce their own food and depend on producers or other consumers for energy (herbivores, carnivores, omnivores). Endemic species: species found naturally in only one specific geographic region and nowhere else in the world. Biological invasions: the introduction and spread of a non-native species into an ecosystem where it causes ecological or economic harm. Contaminants: substances present in the environment (soil, water, air) at levels that can cause harm to living organisms.",
          points: [
            "Scope/Importance of Environmental Studies — multidisciplinary study of ecology, pollution, and conservation to protect resources for present & future generations.",
            "Consumers — organisms that can't produce their own food, depend on producers/other consumers (herbivores, carnivores, omnivores).",
            "Endemic species — found naturally in only one specific geographic region, nowhere else.",
            "Biological invasions — a non-native species spreading into an ecosystem, causing ecological/economic harm.",
            "Contaminants — substances in soil/water/air at levels harmful to living organisms."
          ],
          tip: "Definitions like these are 1-mark compulsory questions — keep answers crisp, one clear line each."
        } },
        { id: 2, marks: "7 Marks", text: "Describe the structure and function of a Desert ecosystem with example.", answer: {
          text: "Structure: A desert ecosystem has abiotic components (very low rainfall, high temperature variation, sandy/rocky soil, low humidity) and biotic components — producers (cacti, thorny shrubs, xerophytic plants adapted to conserve water), consumers (camels, desert foxes, snakes, lizards, insects adapted to heat and scarcity of water), and decomposers (bacteria and fungi, though limited due to dryness). Function: Energy flows from producers to consumers along a short, simple food chain since biodiversity is low; nutrient cycling is slow due to sparse vegetation and low decomposer activity. Example: the Thar Desert ecosystem, where khejri trees and cacti are primary producers supporting desert-adapted animals like the Indian gazelle and desert fox.",
          points: [
            "Abiotic factors: very low rainfall, extreme temperature swings, sandy/rocky soil, low humidity.",
            "Producers: cacti and xerophytic (water-conserving) plants adapted to scarcity.",
            "Consumers: camels, desert foxes, reptiles adapted to heat and water scarcity.",
            "Function: energy flows through a short, simple food chain due to low biodiversity; nutrient cycling is slow.",
            "Example: Thar Desert — khejri trees & cacti support gazelles and desert foxes."
          ]
        } },
        { id: 3, marks: "7 Marks", text: "Write notes on Energy flow in an ecosystem, and Sustainability and Sustainable development.", answer: {
          text: "Energy flow in an ecosystem: Energy enters an ecosystem through solar radiation captured by producers (plants) via photosynthesis, then flows unidirectionally through trophic levels — producers to primary consumers to secondary/tertiary consumers — following the 10% law, where only about 10% of energy at one trophic level is transferred to the next, the rest lost as heat. It does not cycle back, unlike nutrients. Sustainability and Sustainable development: Sustainability means meeting current needs without depleting resources for future use, balancing environmental, social, and economic factors. Sustainable development, as defined by the Brundtland Report, is development that meets the needs of the present without compromising the ability of future generations to meet their own needs — achieved through renewable resource use, pollution control, and equitable resource distribution.",
          points: [
            "Energy flow: enters via solar radiation → producers (photosynthesis) → consumers, following the 10% law (only ~10% transfers between trophic levels, rest lost as heat). Energy doesn't cycle back.",
            "Sustainability: meeting current needs without depleting resources needed by future generations.",
            "Sustainable development (Brundtland definition): development meeting present needs without compromising future generations' ability to meet theirs — via renewable resources, pollution control, equitable distribution."
          ],
          tip: "Good line to quote in exams: 'meets the needs of the present without compromising the ability of future generations to meet their own needs.'"
        } }
      ]
    },
    2: {
      title: "Biodiversity & Natural Resources",
      questions: [
        { id: 4, marks: "1 Mark each", text: "Define: Renewable energy sources, Endangered species, Importance of biodiversity conservation.", answer: {
          text: "Renewable energy sources: energy sources that are naturally replenished on a human timescale and do not deplete with use, such as solar, wind, hydro, geothermal, and biomass energy — used as cleaner alternatives to fossil fuels. Endangered species: species whose population has declined to a level where they face a high risk of extinction in the near future, often due to habitat loss, hunting, or pollution. Biodiversity conservation is important to maintain ecological balance, ensure genetic diversity, and preserve species that provide food, medicine, and ecosystem services.",
          points: [
            "Renewable energy sources — naturally replenished, don't deplete with use: solar, wind, hydro, geothermal, biomass.",
            "Endangered species — population declined to high risk of extinction, due to habitat loss/hunting/pollution.",
            "Biodiversity conservation matters for ecological balance, genetic diversity, and species that provide food/medicine/ecosystem services."
          ]
        } },
        { id: 5, marks: "7 Marks", text: "Explain different methods of ex-situ biodiversity conservation.", answer: {
          text: "Ex-situ conservation protects species outside their natural habitat. Methods: 1) Botanical Gardens and Zoological Parks — maintain living collections of plants/animals for breeding, research, and public education. 2) Seed Banks — store seeds of various plant species under controlled cold, dry conditions for long-term preservation and future cultivation. 3) Gene Banks (Cryopreservation) — store genetic material such as sperm, eggs, or embryos at very low temperatures to preserve genetic diversity. 4) Captive Breeding Programs — breed endangered species in controlled environments to increase population before reintroduction to the wild. 5) Tissue Culture Banks — preserve plant tissue samples that can be regenerated into full plants later.",
          points: [
            "Botanical Gardens/Zoos — living collections for breeding, research, and education.",
            "Seed Banks — store seeds under controlled cold/dry conditions for long-term preservation.",
            "Gene Banks (Cryopreservation) — store sperm/eggs/embryos at very low temperatures.",
            "Captive Breeding Programs — breed endangered species in controlled settings before reintroducing to the wild.",
            "Tissue Culture Banks — preserve plant samples that can be regenerated into full plants."
          ],
          tip: "Ex-situ = 'outside the natural habitat' (opposite of in-situ methods like National Parks/Sanctuaries)."
        } },
        { id: 6, marks: "7 Marks", text: "Describe different types of water resources present in India.", answer: {
          text: "Surface Water: rivers (Ganga, Yamuna, Godavari), lakes, ponds, and reservoirs fed by rainfall and glacial melt, used for irrigation, drinking, and hydroelectric power. Groundwater: water stored in aquifers beneath the earth's surface, accessed via wells and tube wells, a major source for agriculture and drinking water in India. Glacial/Snow-fed sources: Himalayan glaciers feed perennial rivers like the Ganga and Brahmaputra. Rainwater: collected through rainwater harvesting systems for direct use and groundwater recharge. Coastal/Marine water: seawater along India's coastline, a resource for fishing and increasingly for desalination projects.",
          points: [
            "Surface Water — rivers (Ganga, Yamuna, Godavari), lakes, reservoirs; used for irrigation, drinking, hydro power.",
            "Groundwater — accessed via wells/tube wells; major source for agriculture and drinking water.",
            "Glacial/Snow-fed sources — Himalayan glaciers feed perennial rivers like the Ganga and Brahmaputra.",
            "Rainwater — collected via harvesting for direct use and groundwater recharge.",
            "Coastal/Marine water — used for fishing and increasingly for desalination."
          ]
        } }
      ]
    },
    3: {
      title: "Pollution & Global Environmental Issues",
      questions: [
        { id: 7, marks: "1 Mark each", text: "Define: Primary and Secondary pollutants, Ozone layer, Greenhouse gases.", answer: {
          text: "Primary pollutants: pollutants emitted directly into the atmosphere from a source, such as carbon monoxide, sulphur dioxide, and particulate matter from vehicles and industries. Secondary pollutants: pollutants formed in the atmosphere through chemical reactions between primary pollutants, such as ozone (at ground level) and smog. Ozone layer: a region in the stratosphere with a high concentration of ozone (O3) molecules that absorbs most of the sun's harmful ultraviolet (UV) radiation, protecting life on Earth. Greenhouse gases: gases such as carbon dioxide, methane, and nitrous oxide that trap heat in the Earth's atmosphere, causing the greenhouse effect and contributing to global warming.",
          points: [
            "Primary pollutants — emitted directly (e.g. CO, SO2, particulate matter from vehicles/industry).",
            "Secondary pollutants — formed by chemical reactions between primary pollutants (e.g. ground-level ozone, smog).",
            "Ozone layer — stratospheric O3 layer that absorbs harmful UV radiation.",
            "Greenhouse gases — CO2, methane, nitrous oxide; trap heat, drive global warming."
          ]
        } },
        { id: 8, marks: "7 Marks", text: "Explain the Phenomenon and impacts of Global warming.", answer: {
          text: "Phenomenon: Global warming is the long-term rise in Earth's average surface temperature caused by increased concentrations of greenhouse gases (CO2, methane, nitrous oxide) from burning fossil fuels, deforestation, and industrial activity, which trap more heat in the atmosphere (enhanced greenhouse effect). Impacts: 1) Rising sea levels due to melting polar ice caps and glaciers, threatening coastal areas. 2) Changing weather patterns causing more frequent and intense heatwaves, droughts, floods, and cyclones. 3) Loss of biodiversity as species struggle to adapt to changing habitats and temperatures. 4) Impact on agriculture through altered rainfall patterns and crop yields. 5) Ocean acidification harming marine ecosystems and coral reefs.",
          points: [
            "Phenomenon: long-term rise in Earth's average surface temperature from increased greenhouse gases (fossil fuels, deforestation, industry) trapping more heat.",
            "Impact 1: rising sea levels from melting ice caps/glaciers, threatening coasts.",
            "Impact 2: more frequent/intense heatwaves, droughts, floods, cyclones.",
            "Impact 3: biodiversity loss, disrupted agriculture, ocean acidification harming marine life."
          ]
        } },
        { id: 9, marks: "7 Marks", text: "Write down the causes and health effects of Noise pollution, and the causes and effects of Soil pollution.", answer: {
          text: "Noise pollution: Causes include traffic, industrial machinery, construction, loudspeakers, and aircraft. Health effects: hearing loss/impairment, hypertension, stress, sleep disturbance, and reduced concentration and productivity. Soil pollution: Causes include indiscriminate use of chemical fertilizers and pesticides, industrial waste dumping, improper disposal of solid waste, and mining activities. Effects include reduced soil fertility, contamination of groundwater, harm to soil microorganisms, and entry of toxic substances into the food chain. Prevention includes organic farming, proper waste disposal/treatment, and afforestation.",
          points: [
            "Noise pollution causes: traffic, industrial machinery, construction, loudspeakers, aircraft.",
            "Noise pollution effects: hearing loss, hypertension, stress, sleep disturbance, reduced concentration.",
            "Soil pollution causes: excess fertilizers/pesticides, industrial waste dumping, improper solid waste disposal.",
            "Soil pollution effects: reduced fertility, groundwater contamination, harm to soil microorganisms, toxins entering the food chain."
          ]
        } }
      ]
    },
    4: {
      title: "Population, Disaster Management & Sustainability",
      questions: [
        { id: 10, marks: "1 Mark each", text: "Define: Disaster management, Types of Disasters, Cyclone.", answer: {
          text: "Disaster management: the organized process of planning, coordinating, and implementing measures to reduce the risk of disasters, respond effectively during them, and support recovery afterward. Types of Disasters: broadly classified as Natural (earthquakes, floods, cyclones, droughts, landslides) and Man-made (industrial accidents, fires, chemical spills, nuclear accidents). Cyclone: a large-scale system of rotating winds around a low-pressure center, forming over warm ocean waters, capable of causing severe destruction through high winds, storm surges, and heavy rainfall.",
          points: [
            "Disaster management — planning, coordinating & implementing measures to reduce disaster risk, respond effectively, and support recovery.",
            "Types of Disasters — Natural (earthquakes, floods, cyclones, droughts, landslides) vs Man-made (industrial accidents, fires, chemical spills).",
            "Cyclone — rotating wind system around a low-pressure center over warm oceans, causing destruction via high winds, storm surges, heavy rain."
          ]
        } },
        { id: 11, marks: "7 Marks", text: "Describe how Human population growth impacts Environment and Human health.", answer: {
          text: "Environmental impact: Rapid population growth increases demand for food, water, and land, leading to deforestation, overexploitation of natural resources, higher pollution and waste generation, and loss of biodiversity through habitat destruction and urban expansion. Human health impact: Overcrowding contributes to the spread of infectious diseases, inadequate sanitation and clean water access, higher air and water pollution exposure causing respiratory and waterborne illnesses, and greater strain on healthcare and food security systems, disproportionately affecting low-income populations.",
          points: [
            "Environmental impact: rising demand for food/water/land → deforestation, overexploitation of resources, more pollution/waste, biodiversity loss via habitat destruction.",
            "Health impact: overcrowding spreads infectious disease, strains sanitation/clean water access.",
            "Health impact: higher pollution exposure → respiratory & waterborne illness, strain on healthcare and food security — hits low-income populations hardest."
          ]
        } },
        { id: 12, marks: "7 Marks", text: "Write down the causes and management strategies of Landslides, and the causes and impacts of Drought.", answer: {
          text: "Landslides: Causes include heavy rainfall, deforestation, steep unstable slopes, earthquakes, and unplanned construction on hill slopes. Management strategies include afforestation on slopes, construction of retaining walls and proper drainage systems, restricting construction in vulnerable zones, and early warning/monitoring systems. Drought: Causes include prolonged deficiency in rainfall, poor water management, and over-extraction of groundwater. Impacts include crop failure and food shortages, drinking water scarcity, loss of livestock, and increased desertification of land over time.",
          points: [
            "Landslide causes: heavy rainfall, deforestation, steep unstable slopes, earthquakes, unplanned hill-slope construction.",
            "Landslide management: afforestation on slopes, retaining walls & drainage, restricting construction in vulnerable zones, early warning systems.",
            "Drought causes: prolonged rainfall deficiency, poor water management, over-extraction of groundwater.",
            "Drought impacts: crop failure, drinking water scarcity, livestock loss, desertification."
          ]
        } }
      ]
    }
  },
  yearWise: {
    2025: [
      { id: 301, section: "Compulsory Question", marks: "1 Mark", text: "Importance of Environmental studies.", answer: {
        text: "The multidisciplinary study of the environment — covering ecology, pollution, resource use, and conservation — that builds the awareness and skills needed to protect natural resources sustainably for present and future generations.",
        points: [
          "The multidisciplinary study of the environment — covering ecology, pollution, resource use, and conservation.",
          "Builds the awareness and skills needed to protect natural resources sustainably for present and future generations."
        ]
      } },
      { id: 302, section: "Compulsory Question", marks: "1 Mark", text: "Renewable energy sources.", answer: {
        text: "Energy sources that are naturally replenished and do not deplete with use, such as solar, wind, hydro, geothermal, and biomass energy, used as cleaner alternatives to fossil fuels.",
        points: [
          "Naturally replenished energy sources that don't deplete with use.",
          "Examples: solar, wind, hydro, geothermal, biomass.",
          "Used as cleaner alternatives to fossil fuels."
        ]
      } },
      { id: 303, section: "Compulsory Question", marks: "1 Mark", text: "Endangered species.", answer: {
        text: "Species whose population has declined to a level where they face a high risk of extinction in the near future, typically due to habitat loss, hunting, or pollution.",
        points: [
          "A species whose population has declined to a level of high extinction risk.",
          "Typically caused by habitat loss, hunting, or pollution."
        ]
      } },
      { id: 304, section: "Compulsory Question", marks: "1 Mark", text: "Primary and Secondary pollutants.", answer: {
        text: "Primary pollutants are emitted directly into the atmosphere from a source (e.g., carbon monoxide, sulphur dioxide). Secondary pollutants form in the atmosphere through chemical reactions between primary pollutants (e.g., ground-level ozone, smog).",
        points: [
          "Primary pollutants — emitted directly into the atmosphere (e.g. CO, SO2).",
          "Secondary pollutants — form in the atmosphere via reactions between primary pollutants (e.g. ground-level ozone, smog)."
        ]
      } },
      { id: 305, section: "Compulsory Question", marks: "1 Mark", text: "Ozone layer.", answer: {
        text: "A region in the stratosphere with a high concentration of ozone (O3) molecules that absorbs most of the sun's harmful ultraviolet (UV) radiation, protecting life on Earth.",
        points: [
          "A stratospheric region with high O3 concentration.",
          "Absorbs most of the sun's harmful UV radiation, protecting life on Earth."
        ]
      } },
      { id: 306, section: "Compulsory Question", marks: "1 Mark", text: "Disaster management.", answer: {
        text: "The organized process of planning, coordinating, and implementing measures to reduce the risk of disasters, respond effectively during them, and support recovery afterward.",
        points: [
          "The organized process of planning, coordinating, and implementing measures to reduce disaster risk.",
          "Covers effective response during a disaster and recovery support afterward."
        ]
      } },
      { id: 307, section: "Compulsory Question", marks: "1 Mark", text: "Types of Disasters.", answer: {
        text: "Broadly classified as Natural disasters (earthquakes, floods, cyclones, droughts, landslides) and Man-made disasters (industrial accidents, fires, chemical spills, nuclear accidents).",
        points: [
          "Natural disasters — earthquakes, floods, cyclones, droughts, landslides.",
          "Man-made disasters — industrial accidents, fires, chemical spills, nuclear accidents."
        ]
      } },
      { id: 308, section: "Unit 1", marks: "7 Marks", text: "Describe the structure and function of a Desert ecosystem with example.", answer: {
        text: "Structure includes abiotic factors (low rainfall, high temperature variation, sandy soil) and biotic components — producers (xerophytic plants like cacti), consumers (camels, desert foxes, reptiles adapted to heat and water scarcity), and limited decomposers. Function: energy flows through a short, simple food chain from producers to consumers; nutrient cycling is slow due to sparse vegetation. Example: the Thar Desert, where khejri trees support desert-adapted animals like gazelles and foxes.",
        points: [
          "Abiotic: low rainfall, high temperature variation, sandy soil.",
          "Biotic: producers (xerophytic plants like cacti), consumers (camels, desert foxes, reptiles), limited decomposers.",
          "Function: short simple food chain; slow nutrient cycling.",
          "Example: Thar Desert — khejri trees support gazelles and foxes."
        ]
      } },
      { id: 309, section: "Unit 1", marks: "3.5 Marks", text: "Energy flow in an Ecosystem.", answer: {
        text: "Energy enters via solar radiation captured by producers through photosynthesis, then flows unidirectionally through trophic levels following the 10% law — only about 10% of energy is transferred from one trophic level to the next, the rest lost as heat. Unlike nutrients, energy does not cycle back.",
        points: [
          "Enters via solar radiation captured by producers through photosynthesis.",
          "Flows unidirectionally through trophic levels, following the 10% law (~10% transferred each level, rest lost as heat).",
          "Unlike nutrients, energy does not cycle back."
        ]
      } },
      { id: 310, section: "Unit 1", marks: "3.5 Marks", text: "Sustainability and Sustainable development.", answer: {
        text: "Sustainability means meeting current needs without depleting resources needed by future generations, balancing environmental, social, and economic factors. Sustainable development is development that meets present needs without compromising the ability of future generations to meet their own needs, achieved through renewable resource use, pollution control, and equitable distribution.",
        points: [
          "Sustainability: meeting current needs without depleting resources needed by future generations.",
          "Sustainable development: meets present needs without compromising future generations' ability to meet theirs — via renewable resource use, pollution control, equitable distribution."
        ]
      } },
      { id: 311, section: "Unit 2", marks: "7 Marks", text: "Explain different methods of ex-situ biodiversity conservation.", answer: {
        text: "Botanical Gardens/Zoos maintain living collections for breeding and education. Seed Banks store seeds under controlled conditions for long-term preservation. Gene Banks (cryopreservation) store genetic material at very low temperatures. Captive Breeding Programs breed endangered species in controlled settings before reintroduction to the wild. Tissue Culture Banks preserve plant samples that can be regenerated later.",
        points: [
          "Botanical Gardens/Zoos — living collections for breeding and education.",
          "Seed Banks — long-term seed storage under controlled conditions.",
          "Gene Banks (cryopreservation) — genetic material stored at very low temperatures.",
          "Captive Breeding Programs — boost endangered populations before reintroduction.",
          "Tissue Culture Banks — preserve regenerable plant samples."
        ]
      } },
      { id: 312, section: "Unit 2", marks: "7 Marks", text: "Describe different types of Water resources present in India.", answer: {
        text: "Surface water (rivers, lakes, reservoirs) used for irrigation and drinking. Groundwater accessed via wells/tube wells, a major agricultural and drinking source. Glacial/snow-fed sources feeding perennial Himalayan rivers. Rainwater collected through harvesting systems. Coastal/marine water used for fishing and desalination.",
        points: [
          "Surface water — rivers, lakes, reservoirs for irrigation & drinking.",
          "Groundwater — via wells/tube wells, major agricultural/drinking source.",
          "Glacial/snow-fed sources — feed perennial Himalayan rivers.",
          "Rainwater — collected via harvesting systems.",
          "Coastal/marine water — for fishing and desalination."
        ]
      } },
      { id: 313, section: "Unit 3", marks: "7 Marks", text: "Explain the Phenomenon and impacts of Global warming.", answer: {
        text: "Global warming is the long-term rise in Earth's average surface temperature due to increased greenhouse gas concentrations from fossil fuel burning, deforestation, and industry, trapping more heat in the atmosphere. Impacts: rising sea levels from melting ice caps, more frequent heatwaves/droughts/floods/cyclones, biodiversity loss, disrupted agriculture, and ocean acidification harming marine ecosystems.",
        points: [
          "Long-term rise in Earth's average surface temperature due to increased greenhouse gases from fossil fuels, deforestation, industry.",
          "Impacts: rising sea levels, more frequent heatwaves/droughts/floods/cyclones.",
          "Impacts: biodiversity loss, disrupted agriculture, ocean acidification."
        ]
      } },
      { id: 314, section: "Unit 3", marks: "7 Marks", text: "Write down the causes and health effects of Noise pollution.", answer: {
        text: "Causes: traffic, industrial machinery, construction activity, loudspeakers, and aircraft. Health effects: hearing loss/impairment, hypertension, stress, sleep disturbance, and reduced concentration and productivity.",
        points: [
          "Causes: traffic, industrial machinery, construction activity, loudspeakers, aircraft.",
          "Health effects: hearing loss/impairment, hypertension, stress, sleep disturbance, reduced concentration and productivity."
        ]
      } },
      { id: 315, section: "Unit 4", marks: "7 Marks", text: "Describe how Human population growth impacts Environment and Human health.", answer: {
        text: "Environmental impact: rapid population growth increases demand for food, water, and land, leading to deforestation, overexploitation of resources, higher pollution/waste, and biodiversity loss through habitat destruction. Health impact: overcrowding spreads infectious disease, strains sanitation and clean water access, increases pollution-related illness, and burdens healthcare and food security, affecting low-income populations most.",
        points: [
          "Environmental: deforestation, overexploitation of resources, more pollution/waste, biodiversity loss.",
          "Health: spread of infectious disease, strain on sanitation/clean water access, more pollution-related illness.",
          "Burdens healthcare and food security, affecting low-income populations most."
        ]
      } },
      { id: 316, section: "Unit 4", marks: "7 Marks", text: "Write down the causes and management strategies of Landslides.", answer: {
        text: "Causes: heavy rainfall, deforestation, steep unstable slopes, earthquakes, and unplanned hill-slope construction. Management strategies: afforestation on slopes, retaining walls and proper drainage, restricting construction in vulnerable zones, and early warning/monitoring systems.",
        points: [
          "Causes: heavy rainfall, deforestation, steep unstable slopes, earthquakes, unplanned hill-slope construction.",
          "Management: afforestation on slopes, retaining walls & proper drainage, restricting construction in vulnerable zones, early warning/monitoring systems."
        ]
      } }
    ],
    2026: [
      { id: 401, section: "Compulsory Question", marks: "1 Mark", text: "Scope of environment studies.", answer: {
        text: "The scope of environmental studies covers the study of natural resources, ecosystems, biodiversity, pollution and its control, environmental policies, and sustainable development — providing an interdisciplinary understanding needed to address environmental problems at local and global levels.",
        points: [
          "Covers study of natural resources, ecosystems, biodiversity, pollution and its control, environmental policies, and sustainable development.",
          "Provides an interdisciplinary understanding to address environmental problems at local and global levels."
        ]
      } },
      { id: 402, section: "Compulsory Question", marks: "1 Mark", text: "Consumers in an ecosystem.", answer: {
        text: "Organisms in an ecosystem that cannot produce their own food and depend on producers or other consumers for energy — classified as herbivores (primary consumers), carnivores (secondary/tertiary consumers), and omnivores.",
        points: [
          "Organisms that cannot produce their own food, depend on producers or other consumers for energy.",
          "Classified as herbivores (primary consumers), carnivores (secondary/tertiary), and omnivores."
        ]
      } },
      { id: 403, section: "Compulsory Question", marks: "1 Mark", text: "Endemic species.", answer: {
        text: "Species that are found naturally in only one specific geographic region and occur nowhere else in the world, often due to geographic isolation.",
        points: [
          "Species found naturally in only one specific geographic region.",
          "Occur nowhere else in the world, often due to geographic isolation."
        ]
      } },
      { id: 404, section: "Compulsory Question", marks: "1 Mark", text: "Biological invasions.", answer: {
        text: "The introduction and spread of a non-native (alien) species into a new ecosystem where it establishes, spreads, and causes ecological harm by outcompeting native species or economic damage.",
        points: [
          "Introduction and spread of a non-native (alien) species into a new ecosystem.",
          "Causes ecological harm by outcompeting native species, or economic damage."
        ]
      } },
      { id: 405, section: "Compulsory Question", marks: "1 Mark", text: "Contaminants.", answer: {
        text: "Substances present in the environment — soil, water, or air — at levels that can cause harm to living organisms or disrupt normal ecosystem functioning.",
        points: [
          "Substances present in soil, water, or air at levels that can cause harm.",
          "Can disrupt normal ecosystem functioning."
        ]
      } },
      { id: 406, section: "Compulsory Question", marks: "1 Mark", text: "Greenhouse gases.", answer: {
        text: "Gases such as carbon dioxide, methane, and nitrous oxide that trap heat in the Earth's atmosphere, causing the greenhouse effect and contributing to global warming.",
        points: [
          "Gases like carbon dioxide, methane, and nitrous oxide that trap heat in the atmosphere.",
          "Cause the greenhouse effect and contribute to global warming."
        ]
      } },
      { id: 407, section: "Compulsory Question", marks: "1 Mark", text: "Cyclone.", answer: {
        text: "A large-scale system of rotating winds around a low-pressure center that forms over warm ocean waters, capable of causing severe destruction through high winds, storm surges, and heavy rainfall.",
        points: [
          "Large-scale rotating wind system around a low-pressure center.",
          "Forms over warm ocean waters; causes destruction via high winds, storm surges, heavy rainfall."
        ]
      } },
      { id: 408, section: "Unit 1", marks: "7 Marks", text: "Describe the structure and function of a desert ecosystem with example.", answer: {
        text: "Structure: abiotic factors (very low rainfall, extreme temperature variation, sandy/rocky soil) and biotic components — producers (cacti and xerophytic plants adapted to conserve water), consumers (camels, desert foxes, reptiles adapted to heat and scarcity), and limited decomposers. Function: energy flows through a short, simple food chain due to low biodiversity; nutrient cycling is slow. Example: the Thar Desert, where khejri trees and cacti support desert-adapted animals such as the Indian gazelle and desert fox.",
        points: [
          "Structure: very low rainfall, extreme temperature variation, sandy/rocky soil.",
          "Producers: cacti and xerophytic plants adapted to conserve water.",
          "Consumers: camels, desert foxes, reptiles adapted to heat and scarcity.",
          "Example: Thar Desert — khejri trees & cacti support the Indian gazelle and desert fox."
        ]
      } },
      { id: 409, section: "Unit 1", marks: "3.5 Marks", text: "Energy flow in an ecosystem.", answer: {
        text: "Energy enters an ecosystem through solar radiation captured by producers via photosynthesis, then flows unidirectionally through successive trophic levels following the 10% law — only about 10% of the energy at one level is transferred to the next, the remainder lost as heat. Unlike nutrients, energy does not cycle back through the ecosystem.",
        points: [
          "Energy enters via solar radiation captured by producers through photosynthesis.",
          "Flows unidirectionally through trophic levels, following the 10% law.",
          "Energy does not cycle back, unlike nutrients."
        ]
      } },
      { id: 410, section: "Unit 1", marks: "3.5 Marks", text: "Role of sustainable development in environment conservation.", answer: {
        text: "Sustainable development promotes meeting present human needs — food, energy, housing — without depleting natural resources or damaging ecosystems needed by future generations. It supports environment conservation through renewable energy adoption, pollution control, resource-efficient practices, and policies that balance economic growth with ecological protection.",
        points: [
          "Promotes meeting present human needs (food, energy, housing) without depleting resources for future generations.",
          "Supports conservation through renewable energy adoption, pollution control, resource-efficient practices."
        ],
        tip: "This exact sub-question appeared twice with 3.5 & 7 marks in different paper sections — double check against the physical paper which one your version needs."
      } },
      { id: 411, section: "Unit 2", marks: "7 Marks", text: "Explain different methods of biodiversity conservation.", answer: {
        text: "In-situ methods (within natural habitat): National Parks, Wildlife Sanctuaries, and Biosphere Reserves that protect species in their natural environment. Ex-situ methods (outside natural habitat): Botanical Gardens and Zoos for living collections, Seed Banks for long-term seed storage, Gene Banks (cryopreservation) for genetic material storage, and Captive Breeding Programs to boost endangered populations before reintroduction to the wild.",
        points: [
          "In-situ (within natural habitat): National Parks, Wildlife Sanctuaries, Biosphere Reserves.",
          "Ex-situ (outside natural habitat): Botanical Gardens/Zoos, Seed Banks, Gene Banks, Captive Breeding Programs."
        ]
      } },
      { id: 412, section: "Unit 2", marks: "7 Marks", text: "Role of sustainable development in environment conservation.", answer: {
        text: "Sustainable development balances economic growth, social equity, and environmental protection by promoting renewable energy use, efficient and responsible use of natural resources, pollution reduction, and policies (like afforestation and waste management) that conserve ecosystems for future generations while still meeting present-day human needs.",
        points: [
          "Balances economic growth, social equity, and environmental protection.",
          "Promotes renewable energy use, efficient resource use, pollution reduction.",
          "Policies like afforestation and waste management conserve ecosystems while meeting present-day needs."
        ],
        tip: "This exact sub-question appeared twice with 3.5 & 7 marks in different paper sections — double check against the physical paper which one your version needs."
      } },
      { id: 413, section: "Unit 3", marks: "7 Marks", text: "What do you understand by waste incineration? Write down its advantages and disadvantages.", answer: {
        text: "Waste incineration is the controlled combustion of solid waste at high temperature to reduce its volume and generate energy (waste-to-energy). Advantages: significantly reduces waste volume and land needed for landfills, can generate electricity/heat, destroys pathogens and hazardous organic waste. Disadvantages: releases air pollutants and greenhouse gases if not properly filtered, high setup and operating cost, produces toxic ash requiring safe disposal, and can discourage recycling efforts if over-relied upon.",
        points: [
          "Controlled combustion of solid waste at high temperature to reduce volume and generate energy (waste-to-energy).",
          "Advantages: reduces waste volume/land needed, generates electricity/heat, destroys pathogens.",
          "Disadvantages: releases pollutants/greenhouse gases if unfiltered, high cost, produces toxic ash, may discourage recycling."
        ]
      } },
      { id: 414, section: "Unit 3", marks: "7 Marks", text: "Mention the causes and effects of soil pollution and write down ways to prevent it.", answer: {
        text: "Causes: excessive use of chemical fertilizers and pesticides, industrial and mining waste dumping, improper solid waste disposal, and deforestation-driven erosion. Effects: reduced soil fertility, contamination of groundwater, harm to soil microorganisms, and entry of toxic substances into the food chain. Prevention: promoting organic farming, proper treatment and disposal of industrial/solid waste, afforestation, and controlled use of agrochemicals.",
        points: [
          "Causes: excess fertilizers/pesticides, industrial/mining waste dumping, improper solid waste disposal, deforestation-driven erosion.",
          "Effects: reduced fertility, groundwater contamination, harm to soil microorganisms, toxins entering the food chain.",
          "Prevention: organic farming, proper waste treatment/disposal, afforestation, controlled agrochemical use."
        ]
      } },
      { id: 415, section: "Unit 4", marks: "7 Marks", text: "Describe the role of religions and cultures in environmental conservation.", answer: {
        text: "Many religions and cultural traditions promote environmental conservation through reverence for nature — sacred groves protected under local customs, worship of rivers, trees, and animals encouraging their protection, festivals promoting tree planting, and religious teachings emphasizing restraint, non-violence, and respect for all living beings, which indirectly encourage sustainable resource use and biodiversity protection.",
        points: [
          "Sacred groves protected under local customs.",
          "Worship of rivers, trees, and animals encouraging their protection.",
          "Festivals promoting tree planting; teachings emphasizing restraint and respect for living beings."
        ]
      } },
      { id: 416, section: "Unit 4", marks: "7 Marks", text: "Explain the causes and impacts of drought.", answer: {
        text: "Causes: prolonged deficiency in rainfall, poor water management practices, over-extraction of groundwater, and deforestation reducing the water table. Impacts: crop failure and food shortages, scarcity of drinking water, loss of livestock, migration from affected areas, and long-term desertification of agricultural land.",
        points: [
          "Causes: prolonged rainfall deficiency, poor water management, over-extraction of groundwater, deforestation reducing the water table.",
          "Impacts: crop failure/food shortages, drinking water scarcity, livestock loss, migration, long-term desertification."
        ]
      } }
    ]
  }
}
};