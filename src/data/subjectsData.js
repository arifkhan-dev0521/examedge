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
        { id: 1, section: "Compulsory Question", marks: "2 Marks", text: "Define ethical hacking and mention one role of an ethical hacker.", answer: "Ethical hacking is authorized security testing to find vulnerabilities before malicious hackers." },
        { id: 2, section: "Compulsory Question", marks: "2 Marks", text: "What is DNS interrogation?", answer: "Querying DNS servers to gather domain information like IP addresses and mail servers." },
        { id: 3, section: "Compulsory Question", marks: "2 Marks", text: "What is a brute force attack?", answer: "Trial-and-error method to decode passwords by trying all possible combinations." },
        { id: 4, section: "Compulsory Question", marks: "2 Marks", text: "Define SQL Injection.", answer: "Inserting malicious SQL into input fields to manipulate database." },
        { id: 5, section: "Compulsory Question", marks: "2 Marks", text: "What is phishing in social engineering?", answer: "Sending fraudulent messages disguised as legitimate to steal sensitive information." },
        { id: 6, section: "Unit 1", marks: "10 Marks", text: "Explain the phases of hacking in detail.", answer: "5 phases: Reconnaissance, Scanning, Gaining Access, Maintaining Access, Covering Tracks." },
        { id: 7, section: "Unit 1", marks: "10 Marks", text: "Discuss ethical hacking, types of hackers, and cyber laws.", answer: "White Hat, Black Hat, Grey Hat hackers. IT Act 2000 covers cybercrime in India." },
        { id: 8, section: "Unit 2", marks: "10 Marks", text: "Explain footprinting techniques and tools.", answer: "Active and passive footprinting using WHOIS, Nslookup, Google Dorking, Maltego." },
        { id: 9, section: "Unit 2", marks: "10 Marks", text: "Describe scanning and enumeration techniques.", answer: "Network, port, vulnerability scanning using Nmap, Netstat, enum4linux." },
        { id: 10, section: "Unit 3", marks: "10 Marks", text: "Explain password cracking techniques and privilege escalation.", answer: "Dictionary attack, brute force, rainbow table, social engineering. Tools: John the Ripper, Hashcat. Privilege escalation gains higher access rights." },
        { id: 11, section: "Unit 3", marks: "10 Marks", text: "Discuss malware types and common exploitation techniques.", answer: "Virus, Worm, Trojan, Ransomware, Spyware. Exploitation: Buffer overflow, SQL injection, XSS, Zero-day. Tool: Metasploit." },
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
        { id: 1, section: "Compulsory Question", marks: "2 Marks", text: "Define Digital Forensics.", answer: "Process of collecting, preserving, analyzing digital evidence in legally acceptable manner." },
        { id: 2, section: "Compulsory Question", marks: "2 Marks", text: "What is Hashing?", answer: "Converting data into fixed-size string to verify integrity using MD5 or SHA." },
        { id: 3, section: "Compulsory Question", marks: "2 Marks", text: "What is NTFS?", answer: "New Technology File System supporting large files, encryption and access permissions." },
        { id: 4, section: "Compulsory Question", marks: "2 Marks", text: "What is FTK Imager?", answer: "A free digital forensic imaging and evidence preview tool used to create forensic copies of storage devices without altering original data." },
        { id: 5, section: "Compulsory Question", marks: "2 Marks", text: "What is Forensic Cloning?", answer: "Creating an exact bit-by-bit copy of a storage device, including deleted data and free space, without modifying original evidence." },
        { id: 6, section: "Unit 1", marks: "10 Marks", text: "How Digital Forensic is used in Incident Response?", answer: "Identification, Collection, Preservation, Analysis, Documentation, Presentation." },
        { id: 7, section: "Unit 1", marks: "10 Marks", text: "Differentiate between Incident Response and Digital Forensics.", answer: "IR is reactive and time-sensitive; forensics is methodical and evidence-focused." },
        { id: 8, section: "Unit 2", marks: "10 Marks", text: "Explain crucial components in Cloning and key Forensic Cloning techniques & methods of Data acquisition.", answer: "Write blocker, hash verification, disk imaging, live acquisition. Tools: FTK Imager, Autopsy, dd." },
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
        { id: 1, section: "Compulsory Question", marks: "2 Marks", text: "Write any two differences between UI and UX.", answer: "UI focuses on visual elements; UX focuses on overall user experience and journey." },
        { id: 2, section: "Compulsory Question", marks: "2 Marks", text: "Why is user-centered design important?", answer: "Ensures product meets user needs, reduces errors, increases satisfaction." },
        { id: 3, section: "Compulsory Question", marks: "2 Marks", text: "What are frames and shapes in Figma?", answer: "Frames are containers like artboards; shapes are basic geometric UI elements." },
        { id: 4, section: "Compulsory Question", marks: "2 Marks", text: "What is the role of transitions and animations in prototyping?", answer: "Simulate real app behaviour and help users understand navigation flow." },
        { id: 5, section: "Compulsory Question", marks: "2 Marks", text: "What is included in a mini design project presentation?", answer: "Problem statement, user research, wireframes, prototype screens, design decisions." },
        { id: 6, section: "Unit 1", marks: "10 Marks", text: "Define UI and UX design. Explain the major differences between UI and UX with examples.", answer: "UI is visual design; UX is the entire user journey. Both essential for good products." },
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
      4: { title: "Deadlock & Security", questions: [{ id: 6, marks: "5 Marks", text: "What is Deadlock?", answer: "Situation where processes block each other forever. Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait." }] }
    },
    yearWise: {
      2026: [
        { id: 1, section: "Unit 1", marks: "2 Marks", text: "What is an Operating System?", answer: "An OS is system software acting as interface between user and hardware, managing resources and providing services." },
        { id: 2, section: "Unit 1", marks: "5 Marks", text: "Explain CPU Scheduling with its types.", answer: "CPU Scheduling decides which process gets CPU. Types: FCFS, SJF, Priority, Round Robin, SRTF." },
        { id: 3, section: "Unit 1", marks: "10 Marks", text: "What is a Process? Explain Process States.", answer: "A process is a program in execution. 5 states: New, Ready, Running, Waiting, Terminated." },
        { id: 4, section: "Unit 2", marks: "2 Marks", text: "What is Paging?", answer: "Memory management dividing process into fixed-size pages mapped to physical frames." },
        { id: 5, section: "Unit 3", marks: "2 Marks", text: "What is a File System?", answer: "Method to organize, store, retrieve files on storage devices." },
        { id: 6, section: "Unit 4", marks: "5 Marks", text: "What is Deadlock?", answer: "Situation where processes block each other forever. Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait." }
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
      3: { title: "SQL", questions: [{ id: 3, marks: "2 Marks", text: "Difference between DDL and DML?", answer: "DDL defines structure (CREATE, ALTER). DML manipulates data (INSERT, UPDATE, DELETE)." }] },
      4: { title: "Transactions", questions: [{ id: 4, marks: "5 Marks", text: "What is a Transaction? Explain ACID.", answer: "Sequence of operations as single unit. ACID: Atomicity, Consistency, Isolation, Durability." }] }
    },
    yearWise: {
      2026: [
        { id: 1, section: "Unit 1", marks: "2 Marks", text: "What is DBMS?", answer: "Software managing databases for storage, retrieval, manipulation with security and reduced redundancy." },
        { id: 2, section: "Unit 2", marks: "5 Marks", text: "What is Normalization?", answer: "Organizing data to reduce redundancy. 1NF, 2NF, 3NF progressive normal forms." },
        { id: 3, section: "Unit 3", marks: "2 Marks", text: "Difference between DDL and DML?", answer: "DDL defines structure (CREATE, ALTER). DML manipulates data (INSERT, UPDATE, DELETE)." },
        { id: 4, section: "Unit 4", marks: "5 Marks", text: "What is a Transaction? Explain ACID.", answer: "Sequence of operations as single unit. ACID: Atomicity, Consistency, Isolation, Durability." }
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
      1: { title: "Introduction & Control Structures", questions: [{ id: 1, marks: "2 Marks", text: "Difference between Compiler and Interpreter?", answer: "Compiler converts whole code at once. Interpreter executes line by line." }] },
      2: { title: "Arrays & Strings", questions: [{ id: 2, marks: "2 Marks", text: "What is an Array?", answer: "Collection of same data type elements in contiguous memory locations." }] },
      3: { title: "Functions & Pointers", questions: [{ id: 3, marks: "5 Marks", text: "What is a Pointer?", answer: "Variable storing memory address of another variable." }] },
      4: { title: "Structures & File Handling", questions: [{ id: 4, marks: "5 Marks", text: "What is a Structure in C?", answer: "User-defined data type grouping different data types under one name." }] }
    },
    yearWise: {
      2026: [
        { id: 1, section: "Unit 1", marks: "2 Marks", text: "Difference between Compiler and Interpreter?", answer: "Compiler converts whole code at once. Interpreter executes line by line." },
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
        { id: 1, marks: "5 Marks", text: "Define the term WWW. Explain the evolution and history of the WWW.", answer: "WWW (World Wide Web) is a system of interlinked hypertext documents accessed via internet. Invented by Tim Berners-Lee in 1989 at CERN. Evolution: Web 1.0 (static pages) → Web 2.0 (interactive, social media) → Web 3.0 (semantic, AI-driven)." },
        { id: 2, marks: "5 Marks", text: "What do you mean by web client? Explain common types of Web Clients.", answer: "A web client is software/device that requests services from a web server. Types: Browsers (Chrome, Firefox), Mobile apps, Thin clients (server-dependent), Thick clients (more local processing)." },
        { id: 3, marks: "10 Marks", text: "Before designing a website, is it necessary to plan a website? Justify your answer. Explain what steps are carried out during website planning process.", answer: "Yes, planning is essential to avoid costly redesigns. Steps: 1) Define purpose/goals, 2) Identify target audience, 3) Plan sitemap/structure, 4) Choose domain and hosting, 5) Design wireframes, 6) Gather content, 7) Choose technology stack, 8) Set timeline and budget." },
        { id: 4, marks: "5 Marks", text: "What is a web browser and how does it function? Explain common types of Web Clients.", answer: "A web browser is software used to access and display web pages by sending HTTP requests and rendering HTML/CSS/JS responses. Common browsers: Chrome, Firefox, Edge, Safari." },
        { id: 5, marks: "10 Marks", text: "What are the best practices for optimizing website performance and speed? What is HTTP? Explain the difference between HTTP and HTTPS.", answer: "Best practices: minimize HTTP requests, compress images, use caching, minify CSS/JS. HTTP transfers data in plain text; HTTPS encrypts data using SSL/TLS for secure communication." },
        { id: 6, marks: "5 Marks", text: "Discuss the importance of keywords and metadata in search engine indexing and ranking algorithms.", answer: "Keywords and metadata help search engines understand page content, improving indexing accuracy and search ranking through title tags, meta descriptions, and relevant keyword usage." },
        { id: 7, marks: "5 Marks", text: "What is URL? Describe the purpose of each component of a URL.", answer: "URL is the web address locating a resource. Components: Protocol (http/https), Domain name, Port (optional), Path, Query parameters." },
        { id: 8, marks: "10 Marks", text: "What is a web browser, and how does it function? Name some popular web browsers and describe their key features.", answer: "Browser sends HTTP requests, receives and renders HTML/CSS/JS. Popular browsers: Chrome (fast, extensions), Firefox (privacy-focused), Edge (Windows integration)." },
        { id: 9, marks: "5 Marks", text: "Write a note on evolution of WWW.", answer: "WWW evolved from static Web 1.0 pages, to interactive Web 2.0 (social media, user content), to intelligent Web 3.0 (AI, semantic web)." },
        { id: 10, marks: "5 Marks", text: "Explain the concept of a search engine and discuss the key components of a search engine.", answer: "A search engine finds and ranks web pages based on user queries. Key components: Crawler (discovers pages), Indexer (stores page data), Ranking algorithm (orders results by relevance)." },
        { id: 11, marks: "5 Marks", text: "What is a web browser? Name any two.", answer: "Software used to access and display web pages. Examples: Google Chrome, Mozilla Firefox." }
      ]
    },
    2: {
      title: "HTML Structure, Tables & Forms",
      questions: [
        { id: 12, marks: "10 Marks", text: "Explain basic Structure of HTML document. Also explain various block level elements and associated attributes with examples.", answer: "Basic structure: <!DOCTYPE html>, <html>, <head>, <body>. Block-level elements take full width and start new line: <div>, <p>, <h1>-<h6>, <table>. Attributes: class, id, style customize elements." },
        { id: 13, marks: "5 Marks", text: "Design a simple Student Registration Form for University using various fields of <form> tag in HTML.", answer: "Form uses <form action='' method='post'> with <input type='text'> for name, <input type='email'>, <select> for course, <input type='radio'> for gender, <input type='submit'> for submission." },
        { id: 14, marks: "5 Marks", text: "Explain Ordered and Unordered List in HTML.", answer: "Ordered List (<ol>) numbers items sequentially using <li>. Unordered List (<ul>) displays bullet points using <li>." },
        { id: 15, marks: "10 Marks", text: "How can you merge cells in an HTML table? Provide examples. Describe the purpose of form attributes such as action and method in HTML forms.", answer: "Merge cells using colspan (columns) and rowspan (rows) attributes in <td>. Form 'action' specifies submission URL; 'method' specifies GET (data in URL) or POST (data in body, more secure)." },
        { id: 16, marks: "10 Marks", text: "Discuss the difference between <table>, <tr>, <td>, and <th> tags in HTML. Explain the difference between the GET and POST methods in HTML forms.", answer: "<table> is the container, <tr> is a row, <td> is a data cell, <th> is a header cell. GET appends data to URL (visible, limited); POST sends data in request body (secure, larger)." },
        { id: 17, marks: "5 Marks", text: "Describe the structure of an unordered list in HTML. What elements are used to create list items within an unordered list? Illustrate.", answer: "Unordered list uses <ul> tag containing <li> elements for each item, displayed with bullet points by default." },
        { id: 18, marks: "5 Marks", text: "Explain the difference between block-level and inline HTML elements.", answer: "Block-level elements take full width and start on a new line (div, p, h1). Inline elements take only needed width and stay in line (span, a, strong)." },
        { id: 19, marks: "5 Marks", text: "What is a web browser, and how does it function? Name some popular web browsers and describe their key features.", answer: "Browser accesses and displays web content by sending HTTP requests and rendering responses. Popular ones: Chrome, Firefox, Edge, Safari." },
        { id: 20, marks: "5 Marks", text: "Write a note on evolution of WWW.", answer: "WWW evolved from static Web 1.0 to social Web 2.0 to intelligent, semantic Web 3.0." },
        { id: 21, marks: "10 Marks", text: "Explain the purpose of an ordered list in HTML. How does it differ from an unordered list? Illustrate.", answer: "Ordered list (<ol>) numbers items sequentially, used when sequence matters. Unordered list (<ul>) uses bullets, used when sequence doesn't matter." },
        { id: 22, marks: "10 Marks", text: "Describe the process of creating hyperlinks in HTML. How do you create internal and external links?", answer: "Hyperlinks created using <a href='URL'>text</a>. External links point to other websites; internal links use # for same page sections or relative paths for other pages on the same site." }
      ]
    },
    3: {
      title: "CSS Styling, Box Model & Selectors",
      questions: [
        { id: 23, marks: "10 Marks", text: "What do you mean by CSS Box Model using suitable example? Explain various types of CSS.", answer: "CSS Box Model: Content, Padding, Border, Margin. Types of CSS: Inline (in tag), Internal (in <style> tag), External (separate .css file)." },
        { id: 24, marks: "10 Marks", text: "Discuss CSS Box Model using suitable example. How does browser determine element appearance using the CSS Box Model.", answer: "Box Model consists of content, padding, border, margin. Browser calculates total element size as content + padding + border + margin to determine layout and spacing." },
        { id: 25, marks: "10 Marks", text: "Discuss CSS Box Model using suitable example. How browser determines element appearance using CSS Box Model.", answer: "Same concept — total rendered size includes all four box model layers, affecting spacing and positioning on the page." },
        { id: 26, marks: "10 Marks", text: "Discuss CSS Box Model using suitable example. How browser determines element appearance using CSS Box Model.", answer: "Box model layers determine visual size and spacing of elements on a webpage." },
        { id: 27, marks: "5 Marks", text: "What are the differences between margin and padding in CSS?", answer: "Margin is space OUTSIDE the border, between elements. Padding is space INSIDE the border, between border and content." },
        { id: 28, marks: "5 Marks", text: "What do you understand by the universal selector in CSS?", answer: "The universal selector (*) selects ALL elements on the page, commonly used for CSS resets." },
        { id: 29, marks: "10 Marks", text: "How does the descendant selector work in CSS, and when would you use it? What are the different CSS link states? Discuss using examples.", answer: "Descendant selector targets nested elements, e.g., div p {}. CSS link states: :link, :visited, :hover, :active (LVHA order)." },
        { id: 30, marks: "10 Marks", text: "Explain the concept of the CSS box-sizing property and how it affects the layout of elements. What is grouping of CSS selectors, and why is it useful in web development?", answer: "box-sizing: content-box excludes padding/border from width; border-box includes them. Grouping combines multiple selectors with commas for shared styles, e.g., h1, h2, p {}." },
        { id: 31, marks: "10 Marks", text: "Describe the difference between content-box and border-box values for the box-sizing property. When would you use each?", answer: "content-box (default): width applies to content only. border-box: width includes padding and border, making layout predictable and easier to manage." },
        { id: 32, marks: "10 Marks", text: "Explain the difference between inline, internal, and external CSS.", answer: "Inline CSS is written directly in the element's style attribute. Internal CSS is written in <style> tag in head. External CSS is in a separate .css file linked via <link>." },
        { id: 33, marks: "10 Marks", text: "What is the difference between class and id selectors in CSS? Illustrate.", answer: "Class selector (.name) can apply to multiple elements. ID selector (#name) is unique to one element per page, with higher specificity." },
        { id: 34, marks: "10 Marks", text: "What are pseudo-classes and pseudo-elements in CSS? Discuss.", answer: "Pseudo-classes (:hover, :first-child) target element states. Pseudo-elements (::before, ::after) style specific parts of an element." },
        { id: 35, marks: "10 Marks", text: "What do you mean by CSS Box Model using suitable example? Explain various types of CSS.", answer: "Box model defines content, padding, border, margin layers. CSS types: inline, internal, external." },
        { id: 36, marks: "10 Marks", text: "Discuss CSS Box Model using suitable example. How browser determines element appearance using CSS Box Model.", answer: "Element's rendered size = content + padding + border + margin, determining spacing and layout." }
      ]
    },
    4: {
      title: "JavaScript & Dynamic Web Pages",
      questions: [
        { id: 37, marks: "10 Marks", text: "Explain the features and applications of Java-Script. How is Java-Script used to validate the data?", answer: "JavaScript features: lightweight, interpreted, event-driven, supports DOM manipulation. Applications: form validation, animations, dynamic content. Used for validation by checking input format/values before form submission using functions triggered on events." },
        { id: 38, marks: "10 Marks", text: "Differentiate between static and dynamic web pages. Which type of web pages are more interactive? Explain with examples.", answer: "Static pages have fixed content, same for all users (plain HTML). Dynamic pages generate content based on user interaction/data, using JavaScript/server-side scripting. Dynamic pages are more interactive, e.g., e-commerce sites with live cart updates." },
        { id: 39, marks: "5 Marks", text: "What is JavaScript?", answer: "JavaScript is a scripting language used to make web pages interactive and dynamic, running directly in the browser." },
        { id: 40, marks: "10 Marks", text: "Discuss the importance of JavaScript in building dynamic and interactive web applications. What is the difference between var, let, and const in terms of scope and hoisting?", answer: "JavaScript enables real-time updates without reload. var is function-scoped and hoisted; let is block-scoped, not hoisted the same way; const is block-scoped and cannot be reassigned." },
        { id: 41, marks: "5 Marks", text: "Discuss the use of comments in HTML. How do you add comments to an HTML document?", answer: "Comments explain code, not shown in browser. Added using <!-- comment text -->." },
        { id: 42, marks: "10 Marks", text: "How do you define and call functions in JavaScript? Illustrate. What are the different types of loops in JavaScript? Discuss.", answer: "Function defined as function name() {}, called as name(). Loop types: for, while, do-while, for-in (object properties), for-of (iterable values)." },
        { id: 43, marks: "10 Marks", text: "Describe the role of the Document Object Model (DOM) in JavaScript. How do you manipulate HTML elements using JavaScript? What is the difference between for-in and for-of loop in JavaScript?", answer: "DOM represents HTML as a tree, allowing JavaScript to access/manipulate elements (document.getElementById()). for-in iterates property names/indexes; for-of iterates actual values (ES6)." },
        { id: 44, marks: "10 Marks", text: "Explain the difference between == and === operators in JavaScript. Describe the purpose of functions in JavaScript. How do you define and call functions in JavaScript?", answer: "== compares with type conversion; === compares strictly (value + type). Functions group reusable code, defined with function keyword, invoked by calling their name with ()." }
      ]
    }
  },
  yearWise: {
    2026: [
      { id: 201, section: "Compulsory Question", marks: "1 Mark", text: "Define &reg; &copy; named entities in HTML.", answer: "&reg; displays the registered trademark symbol (®). &copy; displays the copyright symbol (©)." },
      { id: 202, section: "Compulsory Question", marks: "1 Mark", text: "What is a URL?", answer: "URL is the web address used to locate a resource on the internet." },
      { id: 203, section: "Compulsory Question", marks: "1 Mark", text: "What is a web browser? Name any two.", answer: "Software to access and display web pages. Examples: Google Chrome, Mozilla Firefox." },
      { id: 204, section: "Compulsory Question", marks: "1 Mark", text: "Define two Empty Tags.", answer: "Empty tags have no closing tag/content. Examples: <br>, <img>, <hr>." },
      { id: 205, section: "Compulsory Question", marks: "1 Mark", text: "Explain <pre> tag.", answer: "The <pre> tag displays preformatted text, preserving spaces and line breaks exactly as written." },
      { id: 206, section: "Compulsory Question", marks: "1 Mark", text: "What is JavaScript?", answer: "A scripting language used to make web pages interactive and dynamic, running in the browser." },
      { id: 207, section: "Compulsory Question", marks: "1 Mark", text: "Explain Priority of Inline, Internal and External CSS.", answer: "Inline CSS has highest priority, then Internal, then External CSS, unless !important is used." },
      { id: 208, section: "Compulsory Question", marks: "1 Mark", text: "Using which tag and attribute you can change background colour of a web page?", answer: "Using <body> tag with style attribute or CSS background-color property." },
      { id: 209, section: "Compulsory Question", marks: "1 Mark", text: "Differentiate between == and === in JavaScript.", answer: "== compares values with type conversion. === compares both value and type strictly." },
      { id: 210, section: "Compulsory Question", marks: "1 Mark", text: "Explain let, var and const in JavaScript.", answer: "var is function-scoped, redeclarable. let is block-scoped, reassignable. const is block-scoped, fixed value." },
      { id: 1, section: "Unit 1", marks: "5 Marks", text: "Define the term WWW. Explain the evolution and history of the WWW.", answer: "WWW is a system of interlinked documents, invented by Tim Berners-Lee in 1989, evolved from Web 1.0 to 2.0 to 3.0." },
      { id: 2, section: "Unit 1", marks: "5 Marks", text: "What do you mean by web client? Explain common types of Web Clients.", answer: "Web client requests services from a server. Types: browsers, mobile apps, thin/thick clients." },
      { id: 3, section: "Unit 1", marks: "10 Marks", text: "Before designing a website, is it necessary to plan a website? Justify your answer. Explain what steps are carried out during website planning process.", answer: "Yes. Steps: define purpose, identify audience, plan sitemap, choose hosting, design wireframes, gather content, choose tech stack, set timeline." },
      { id: 12, section: "Unit 2", marks: "10 Marks", text: "Explain basic Structure of HTML document. Also explain various block level elements and associated attributes with examples.", answer: "DOCTYPE, html, head, body structure. Block elements: div, p, h1-h6, table — full width, styled via class/id." },
      { id: 13, section: "Unit 2", marks: "5 Marks", text: "Design a simple Student Registration Form for University using various fields of <form> tag in HTML.", answer: "Form with text, email, select, radio, submit fields using appropriate input types." },
      { id: 14, section: "Unit 2", marks: "5 Marks", text: "Explain Ordered and Unordered List in HTML.", answer: "Ordered list numbers items; unordered list uses bullets — both use <li> for items." },
      { id: 23, section: "Unit 3", marks: "10 Marks", text: "What do you mean by CSS Box Model? Explain various types of CSS.", answer: "Box model: content, padding, border, margin. CSS types: inline, internal, external." },
      { id: 24, section: "Unit 3", marks: "10 Marks", text: "Discuss CSS Box Model using suitable example. How browser determines element appearance using CSS Box Model.", answer: "Total element size = content + padding + border + margin, determining layout." },
      { id: 37, section: "Unit 4", marks: "10 Marks", text: "Explain the features and applications of Java-Script. How is Java-Script used to validate the data?", answer: "JavaScript is lightweight, event-driven, supports DOM manipulation. Used for form validation checking input before submission." },
      { id: 38, section: "Unit 4", marks: "10 Marks", text: "Differentiate between static and dynamic web pages. Which type of web pages are more interactive? Explain with examples.", answer: "Static pages have fixed content; dynamic pages generate content based on interaction. Dynamic pages are more interactive." }
    ],
    2025: [
      { id: 301, section: "Compulsory Question", marks: "2 Marks", text: "Describe the process of linking external CSS and JavaScript files to an HTML document.", answer: "CSS linked using <link rel='stylesheet' href='style.css'>. JavaScript linked using <script src='script.js'></script>." },
      { id: 302, section: "Compulsory Question", marks: "2 Marks", text: "Explain the purpose of the HTML <meta> tag.", answer: "Provides metadata like character encoding, viewport settings, description, and keywords for SEO." },
      { id: 303, section: "Compulsory Question", marks: "2 Marks", text: "What do you understand by the universal selector in CSS?", answer: "The (*) selector applies styles to all elements, often used for CSS resets." },
      { id: 304, section: "Compulsory Question", marks: "2 Marks", text: "Write a note on client side validation using JavaScript.", answer: "Checks user input in browser before submission, providing instant feedback and reducing server load." },
      { id: 10, section: "Unit 1", marks: "5 Marks", text: "Discuss the importance of keywords and metadata in search engine indexing and ranking algorithms.", answer: "Keywords/metadata help search engines understand content, improving indexing and ranking." },
      { id: 7, section: "Unit 1", marks: "5 Marks", text: "What is URL? Describe the purpose of each component of a URL.", answer: "URL locates resources online. Components: protocol, domain, port, path, query parameters." },
      { id: 8, section: "Unit 1", marks: "10 Marks", text: "What is a web browser, and how does it function? Name some popular web browsers and describe their key features.", answer: "Browser sends HTTP requests and renders responses. Popular: Chrome, Firefox, Edge." },
      { id: 9, section: "Unit 1", marks: "5 Marks", text: "Write a note on evolution of WWW.", answer: "Evolved from static Web 1.0 to social Web 2.0 to intelligent Web 3.0." },
      { id: 15, section: "Unit 2", marks: "10 Marks", text: "How can you merge cells in an HTML table? Provide examples. Describe the purpose of form attributes such as action and method in HTML forms.", answer: "Merge with colspan/rowspan. Form action specifies URL, method specifies GET/POST." },
      { id: 21, section: "Unit 2", marks: "10 Marks", text: "Explain the purpose of an ordered list in HTML. How does it differ from an unordered list? Illustrate. Describe the process of creating hyperlinks in HTML.", answer: "Ordered numbers items; unordered uses bullets. Hyperlinks created using <a href=''>." },
      { id: 31, section: "Unit 3", marks: "10 Marks", text: "Describe the difference between content-box and border-box values for the box-sizing property. When would you use each?", answer: "content-box excludes padding/border; border-box includes them for predictable sizing." },
      { id: 32, section: "Unit 3", marks: "10 Marks", text: "Explain the difference between inline, internal, and external CSS.", answer: "Inline in element attribute, internal in <style> tag, external in separate .css file." },
      { id: 33, section: "Unit 3", marks: "10 Marks", text: "What is the difference between class and id selectors in CSS? Illustrate.", answer: "Class reusable across elements; id unique to one element with higher specificity." },
      { id: 34, section: "Unit 3", marks: "10 Marks", text: "What are pseudo-classes and pseudo-elements in CSS? Discuss.", answer: "Pseudo-classes target states; pseudo-elements target specific parts of elements." },
      { id: 43, section: "Unit 4", marks: "10 Marks", text: "Describe the role of the Document Object Model (DOM) in JavaScript. What is the difference between for-in and for-of loop in JavaScript? Discuss.", answer: "DOM lets JS manipulate HTML as tree. for-in iterates keys/indexes; for-of iterates values." },
      { id: 44, section: "Unit 4", marks: "10 Marks", text: "Explain the difference between == and === operators in JavaScript. Describe the purpose of functions in JavaScript. How do you define and call functions?", answer: "== type-converts; === strict comparison. Functions group reusable code, defined with function keyword." }
    ],
    2024: [
      { id: 401, section: "Compulsory Question", marks: "2 Marks", text: "Discuss the difference between a URL and a URI.", answer: "URL locates a resource; URI identifies a resource by name, location, or both — every URL is a URI." },
      { id: 41, section: "Compulsory Question", marks: "2 Marks", text: "Discuss the use of comments in HTML. How do you add comments to an HTML document?", answer: "Comments explain code, not displayed. Added using <!-- comment -->." },
      { id: 27, section: "Compulsory Question", marks: "2 Marks", text: "What are the differences between margin and padding in CSS?", answer: "Margin is outside the border; padding is inside the border." },
      { id: 402, section: "Compulsory Question", marks: "2 Marks", text: "How do you create and manipulate objects in JavaScript?", answer: "Objects created via object literals: let obj = {name: 'Arif'}, manipulated via dot/bracket notation." },
      { id: 10, section: "Unit 1", marks: "10 Marks", text: "Explain the concept of a search engine and discuss the key components of a search engine. What is a web browser? What are the common functions provided by it?", answer: "Search engine: Crawler, Indexer, Ranking algorithm. Web browser accesses/displays pages; functions: navigation, bookmarks, history." },
      { id: 5, section: "Unit 1", marks: "10 Marks", text: "What are the best practices for optimizing website performance and speed? What is HTTP? Can you explain the difference between HTTP and HTTPS?", answer: "Best practices: minimize requests, compress images, use caching. HTTP is plain text; HTTPS is encrypted." },
      { id: 16, section: "Unit 2", marks: "10 Marks", text: "Discuss the difference between <table>, <tr>, <td>, and <th> tags in HTML. Explain the difference between the GET and POST methods in HTML forms.", answer: "<table> container, <tr> row, <td> cell, <th> header. GET in URL; POST in body." },
      { id: 17, section: "Unit 2", marks: "10 Marks", text: "Describe the structure of an unordered list in HTML. What elements are used to create list items within an unordered list? Illustrate. Explain the difference between block-level and inline HTML elements.", answer: "Unordered list uses <ul> and <li>. Block-level takes full width; inline takes only needed width." },
      { id: 29, section: "Unit 3", marks: "10 Marks", text: "How does the descendant selector work in CSS, and when would you use it? What are the different CSS link states? Discuss.", answer: "Descendant selector targets nested elements. Link states: :link, :visited, :hover, :active." },
      { id: 30, section: "Unit 3", marks: "10 Marks", text: "Explain the concept of the CSS box-sizing property and how it affects the layout of elements. What is grouping of CSS selectors, and why is it useful in web development? Discuss.", answer: "box-sizing controls whether padding/border are included in element width. Grouping combines selectors with commas for efficiency." },
      { id: 40, section: "Unit 4", marks: "10 Marks", text: "Discuss the importance of JavaScript in building dynamic and interactive web applications. What is the difference between var, let, and const in terms of scope and hoisting?", answer: "JavaScript adds interactivity without reload. var is function-scoped; let/const are block-scoped, const is fixed." },
      { id: 42, section: "Unit 4", marks: "10 Marks", text: "How do you define and call functions in JavaScript? Illustrate. What are the different types of loops in JavaScript? Discuss.", answer: "Functions defined with function keyword, called by name(). Loops: for, while, do-while, for-in, for-of." }
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
        { id: 1, marks: "5 Marks", text: "Explain how overloaded shift operator and member functions are used for Input-Output Operations in C++.", answer: "The stream insertion operator << and extraction operator >> are overloaded to handle standard data types by default. For user-defined objects, these operators can be overloaded as friend functions to enable cout << obj and cin >> obj syntax, allowing custom objects to be displayed and read directly." },
        { id: 2, marks: "10 Marks", text: "Write a program in C++ to calculate the area of circle, rectangle and triangle using function overloading.", answer: "Function overloading allows multiple functions with the same name but different parameter lists. Example: area(float r) for circle (πr²), area(float l, float b) for rectangle (l*b), area(float b, float h, bool triangle) for triangle (0.5*b*h). The compiler selects the correct function based on arguments passed at compile time." }
      ]
    },
    2: {
      title: "Structures, Constructors & Cascaded I/O",
      questions: [
        { id: 3, marks: "5 Marks", text: "Explain the concept of structure and union in C++. Differentiate between structure and union.", answer: "Structure allocates separate memory for each member, allowing simultaneous access to all members. Union allocates shared memory equal to its largest member, so only one member can hold a valid value at a time. Structures are used when all fields are needed together; unions save memory when only one field is used at a time." },
        { id: 4, marks: "5 Marks", text: "What do you mean by the data members and member functions of a class? Explain how you can define a member function outside a class by taking example.", answer: "Data members are variables that hold the state of an object. Member functions are methods that operate on data members. A member function can be defined outside the class using the scope resolution operator: ReturnType ClassName::functionName(parameters) { }. This declares the function inside the class and defines its body separately." },
        { id: 5, marks: "5 Marks", text: "Write a program to demonstrate the use of cascaded insertion and extraction operators in C++.", answer: "Cascading allows multiple insertion/extraction operations in a single statement since << and >> return a reference to the stream object. Example: cout << \"Value: \" << x << \" and \" << y << endl; works because each << call returns cout itself, allowing chaining." },
        { id: 6, marks: "10 Marks", text: "What do you mean by copy constructor in C++? What is the different situations in which copy constructor is applicable?", answer: "A copy constructor creates a new object as a copy of an existing object of the same class, with signature ClassName(const ClassName &obj). It is invoked: 1) When an object is initialized from another object, 2) When an object is passed by value to a function, 3) When an object is returned by value from a function." }
      ]
    },
    3: {
      title: "Operator Overloading & Friend Functions",
      questions: [
        { id: 7, marks: "10 Marks", text: "What is inheritance? Explain various types of inheritance with suitable example.", answer: "Inheritance allows a class (derived) to acquire properties and behavior of another class (base). Types: Single (one base, one derived), Multiple (multiple base classes), Multilevel (chain of inheritance), Hierarchical (one base, multiple derived), Hybrid (combination of types). Example: class Animal (base) → class Dog (derived) inherits Animal's properties." },
        { id: 8, marks: "10 Marks", text: "What do you mean by Operator Overloading? Which operators in C++ cannot be overloaded? Write syntax to overload binary operator with friend function.", answer: "Operator overloading allows operators to work with user-defined types. Operators that cannot be overloaded: :: (scope resolution), . (member access), .* (pointer to member), ?: (ternary), sizeof. Syntax for binary operator overload with friend: friend ReturnType operator+(const ClassName &obj1, const ClassName &obj2) { return ClassName(obj1.data + obj2.data); }" },
        { id: 9, marks: "5 Marks", text: "Define Scope resolution operator in C++. Also list its uses using suitable examples.", answer: "The scope resolution operator (::) accesses members outside their scope. Uses: 1) Define member function outside class: void ClassName::func() {}, 2) Access global variable when local variable has same name: ::variableName, 3) Access static class members: ClassName::staticVar." }
      ]
    },
    4: {
      title: "Exception Handling & Virtual Functions",
      questions: [
        { id: 10, marks: "5 Marks", text: "What do you mean by the data members and member functions of a class? Explain how you can define a member function outside a class by taking example.", answer: "Data members hold object state; member functions define object behavior. Defined outside class using scope resolution: void ClassName::methodName() { // body }" },
        { id: 11, marks: "10 Marks", text: "Explain virtual function in C++. How it differs from Pure Virtual function?", answer: "A virtual function is declared in base class using the virtual keyword and can be overridden in derived classes, enabling runtime polymorphism. A pure virtual function has no implementation in the base class (virtual void func() = 0;) and makes the class abstract, forcing derived classes to provide an implementation." },
        { id: 12, marks: "5 Marks", text: "Write a program to demonstrate use of Exception handling.", answer: "Exception handling uses try, catch, and throw. Code that might cause an error is placed in a try block; if an exception occurs, it is thrown and caught by a matching catch block: try { if(b==0) throw \"Division by zero\"; } catch(const char* msg) { cout << msg; }" },
        { id: 13, marks: "10 Marks", text: "Explain nested try block in Exception Handling. Discuss the order in which exception handling mechanism takes place in C++. What are different type of polymorphism in C++? Explain with the help of proper example.", answer: "A nested try block is a try block placed inside another try block, allowing localized exception handling within a larger try-catch structure. Order: exception is thrown, control transfers to the nearest matching catch block, if not found it propagates outward. Types of polymorphism: Compile-time (function overloading, operator overloading) and Runtime (virtual functions). Example: A base class pointer calling an overridden virtual function in a derived class demonstrates runtime polymorphism." }
      ]
    }
  },
  yearWise: {
    2026: [
      { id: 101, section: "Compulsory Question", marks: "1 Mark", text: "Define streams in C++.", answer: "Streams represent a flow of data. cin is the input stream, cout is the output stream. They are objects of istream and ostream classes used for input/output operations." },
      { id: 102, section: "Compulsory Question", marks: "1 Mark", text: "What is inline function?", answer: "An inline function requests the compiler to insert the complete function body wherever the function is called, avoiding function call overhead. Declared using the inline keyword." },
      { id: 103, section: "Compulsory Question", marks: "1 Mark", text: "Differentiate between pointer and reference.", answer: "A pointer stores an address and can be reassigned or null. A reference is an alias for an existing variable, must be initialized when declared, and cannot be changed to refer to another variable." },
      { id: 104, section: "Compulsory Question", marks: "1 Mark", text: "What is abstraction?", answer: "Abstraction means hiding implementation details and showing only essential features of an object, typically achieved using classes and access specifiers." },
      { id: 105, section: "Compulsory Question", marks: "1 Mark", text: "Write short note on Static data members.", answer: "Static data members are shared among all objects of a class, declared with the static keyword, and exist independent of any object instance." },
      { id: 106, section: "Compulsory Question", marks: "1 Mark", text: "Write Syntax for Copy constructor.", answer: "ClassName(const ClassName &obj) { // copy data members from obj }" },
      { id: 107, section: "Compulsory Question", marks: "1 Mark", text: "Differentiate between Unary vs. Binary operators.", answer: "Unary operators act on a single operand (e.g., ++, --, unary -). Binary operators act on two operands (e.g., +, -, *, /)." },
      { id: 108, section: "Compulsory Question", marks: "1 Mark", text: "Define Virtual base class.", answer: "A virtual base class prevents multiple copies of a base class from being inherited into a derived class in multiple inheritance, declared using the virtual keyword during inheritance." },
      { id: 109, section: "Compulsory Question", marks: "1 Mark", text: "What are uncaught exceptions?", answer: "An uncaught exception is one that is thrown but not handled by any matching catch block, causing the program to terminate abnormally via std::terminate()." },
      { id: 110, section: "Compulsory Question", marks: "1 Mark", text: "Explain Divide by zero error.", answer: "Divide by zero is a runtime error that occurs when a number is divided by zero. In C++, integer division by zero causes undefined behavior; it should be checked and handled using exception handling." },
      { id: 1, section: "Unit 1", marks: "5 Marks", text: "Explain how overloaded shift operator and member functions are used for Input-Output Operations in C++.", answer: "Stream operators << and >> can be overloaded as friend functions to allow direct input/output of user-defined objects using cin and cout." }
    ],
    2025: [
      { id: 201, section: "Compulsory Question", marks: "2 Marks", text: "Differentiate between Private and public member.", answer: "Private members are accessible only within the class. Public members are accessible from outside the class as well." },
      { id: 202, section: "Compulsory Question", marks: "2 Marks", text: "Multiple and Multilevel Inheritance.", answer: "Multiple inheritance: a class inherits from more than one base class. Multilevel inheritance: a class inherits from a derived class, forming a chain." },
      { id: 203, section: "Compulsory Question", marks: "2 Marks", text: "Abstract and Virtual Class.", answer: "An abstract class contains at least one pure virtual function and cannot be instantiated. A virtual class is used in inheritance to avoid duplicate base class copies." },
      { id: 204, section: "Compulsory Question", marks: "2 Marks", text: "Protected access specifier.", answer: "Protected members are accessible within the class and its derived classes, but not from outside." },
      { id: 205, section: "Compulsory Question", marks: "2 Marks", text: "Run-Time and Compile-Time Polymorphism.", answer: "Compile-time polymorphism is achieved through function/operator overloading, resolved at compile time. Run-time polymorphism is achieved through virtual functions, resolved during program execution." },
      { id: 206, section: "Unit 1", marks: "10 Marks", text: "What are the formatted and unformatted input-output functions with appropriate examples?", answer: "Formatted I/O uses manipulators like setw, setprecision for controlled output format. Unformatted I/O uses functions like get(), put(), read(), write() for raw character/byte handling without formatting." },
      { id: 7, section: "Unit 2", marks: "5 Marks", text: "Describe static data members and static member function with suitable example.", answer: "Static data members are shared across all objects; static member functions can access only static data members and are called using ClassName::functionName()." },
      { id: 8, section: "Unit 2", marks: "5 Marks", text: "Call by value and Call by reference.", answer: "Call by value passes a copy of the argument; changes don't affect the original. Call by reference passes the actual variable's address; changes affect the original." },
      { id: 9, section: "Unit 2", marks: "5 Marks", text: "What is Destructor? State different rules needed to be considered while defining a destructor for a given class.", answer: "A destructor cleans up an object when it goes out of scope, named ~ClassName(). Rules: no return type, no parameters, only one destructor per class, automatically called at object destruction." },
      { id: 10, section: "Unit 3", marks: "5 Marks", text: "Explain scope resolution operator and its significance with suitable example.", answer: "The :: operator accesses class members outside their normal scope, essential for defining member functions outside the class body and accessing static members." },
      { id: 11, section: "Unit 3", marks: "5 Marks", text: "What is Constructor Overloading? Explain with example program.", answer: "Constructor overloading allows multiple constructors with different parameter lists in the same class, letting objects be initialized in different ways depending on arguments passed." },
      { id: 12, section: "Unit 4", marks: "10 Marks", text: "Explain the concept of Exception handling in C++ with suitable example.", answer: "Exception handling manages runtime errors using try, catch, throw blocks, allowing programs to handle unexpected situations gracefully instead of crashing." },
      { id: 13, section: "Unit 4", marks: "10 Marks", text: "What is virtual function? Explain its significance. What is virtual function? Explain its significance in C++ using virtual function.", answer: "A virtual function allows derived classes to override base class behavior, enabling runtime polymorphism through base class pointers/references pointing to derived class objects." }
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
        { id: 2, marks: "4 Marks", text: "Explain Pie diagrams, Histograms, Frequency polygons, and Ogives.", answer: "Pie diagram: circular chart showing proportions as slices. Histogram: bar chart of continuous frequency data with no gaps between bars. Frequency polygon: line graph connecting midpoints of histogram bar tops. Ogive: cumulative frequency curve, used to find median and quartiles graphically." },
        { id: 3, marks: "4 Marks", text: "Evaluate ∫ 1/(√(x+1)+√(x+3)) dx.", answer: "Rationalize by multiplying numerator and denominator by (√(x+1) − √(x+3)): denominator becomes (x+1)−(x+3) = −2. So integral = −1/2 ∫(√(x+1) − √(x+3)) dx = −1/3[(x+1)^(3/2) − (x+3)^(3/2)] + C." },
        { id: 4, marks: "4 Marks", text: "Construct a frequency polygon for the given data.", answer: "Plot class midpoints on x-axis against frequencies on y-axis, mark points, connect them with straight lines, and close the polygon by joining to zero frequency points at both ends of the data range." }
      ]
    },
    2: {
      title: "Measures of Central Tendency & Dispersion",
      questions: [
        { id: 5, marks: "4 Marks", text: "Find the mean deviation about mean for the data and their coefficients.", answer: "Mean Deviation = (Σf|x−mean|)/N. Calculate mean first using Σfx/N, then find absolute deviations of each value from mean, multiply by frequency, sum, and divide by total frequency N. Coefficient of MD = MD/Mean." },
        { id: 6, marks: "4 Marks", text: "The Median and Mode of a wage distribution are known. Find the missing frequency values.", answer: "Using the Median formula: Median = L + [(N/2 − cf)/f] × h, and Mode = L + [(f1−f0)/(2f1−f0−f2)] × h, set up equations with known median/mode values and solve simultaneously for missing frequencies f3, f4, f5." },
        { id: 7, marks: "4 Marks", text: "For a group of candidates, correct the mean and standard deviation after misread scores are identified.", answer: "Corrected Sum = Original Sum − wrong values + correct values. Corrected Mean = Corrected Sum/N. For SD, correct Σx² by removing wrong values² and adding correct values², then recompute SD = √(Σx²/N − Mean²)." }
      ]
    },
    3: {
      title: "Correlation & Regression",
      questions: [
        { id: 8, marks: "4 Marks", text: "What is rank correlation? How can you handle repeated ranks? Obtain the rank correlation coefficient for given data.", answer: "Rank correlation (Spearman's) measures association between ranked variables: R = 1 − (6Σd²)/(n(n²−1)), where d is the difference in ranks. For repeated ranks, assign average rank to tied values and add a correction factor (m³−m)/12 to Σd² for each group of ties." },
        { id: 9, marks: "4 Marks", text: "Discuss the various methods for finding correlation using suitable examples.", answer: "Methods: 1) Scatter diagram (visual method), 2) Karl Pearson's coefficient (r = Σ(x−x̄)(y−ȳ)/√(Σ(x−x̄)²Σ(y−ȳ)²)) for linear relationships, 3) Spearman's rank correlation for ranked/ordinal data, 4) Concurrent deviation method for quick approximate correlation." },
        { id: 10, marks: "4 Marks", text: "Find the Karl Pearson's coefficient of correlation between x and y from the data.", answer: "r = [NΣxy − ΣxΣy] / √([NΣx² − (Σx)²][NΣy² − (Σy)²]). Calculate Σx, Σy, Σxy, Σx², Σy² from the data table, substitute into the formula to get r, which ranges from -1 to +1." }
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
        { id: 1, marks: "10 Marks", text: "What are human values and how are they relevant in the contemporary world? Discuss.", answer: "Human values are core principles that guide behavior and decision-making, such as honesty, respect, compassion, and responsibility. In the contemporary world, they are relevant for maintaining ethical conduct in an increasingly complex, technology-driven, and interconnected society, helping individuals navigate moral dilemmas at work, in relationships, and in digital spaces." },
        { id: 2, marks: "10 Marks", text: "How do personal, social, moral, and spiritual values shape an individual's personality? Explain.", answer: "Personal values (self-discipline, integrity) shape individual character. Social values (respect, cooperation) guide interaction with others. Moral values (honesty, justice) determine right and wrong conduct. Spiritual values (inner peace, mindfulness) shape one's sense of purpose. Together, they form a well-rounded, balanced personality." }
      ]
    },
    2: {
      title: "Ethical Theories & Cultivation of Values",
      questions: [
        { id: 3, marks: "10 Marks", text: "Discuss various methods to cultivate ethical values among individuals and society.", answer: "Methods include: Education and moral instruction from a young age, Role modeling by leaders and elders, Reflection and self-awareness practices, Community engagement and social responsibility programs, and Reinforcement through consistent ethical practice in institutions and workplaces." },
        { id: 4, marks: "10 Marks", text: "Briefly explain deontology, virtue ethics and utilitarianism.", answer: "Deontology (Kantian ethics) judges actions based on adherence to moral rules and duties, regardless of consequences. Virtue ethics focuses on developing good character traits (virtues) like courage and honesty rather than following rules. Utilitarianism judges actions by their outcomes, aiming to maximize overall happiness or benefit for the greatest number of people." }
      ]
    },
    3: {
      title: "Upanishadic Models & Yoga Philosophy",
      questions: [
        { id: 5, marks: "10 Marks", text: "Describe the Panchkosha model discussed in Upanishads and its relevance for human well-being.", answer: "The Panchkosha model describes five layers (koshas) of human existence: Annamaya Kosha (physical body), Pranamaya Kosha (vital energy), Manomaya Kosha (mind), Vijnanamaya Kosha (intellect/wisdom), and Anandamaya Kosha (bliss). Understanding and balancing all five layers promotes holistic well-being, integrating physical, mental, and spiritual health." },
        { id: 6, marks: "10 Marks", text: "How can four Antah-Karanas of Yoga be helpful in understanding human personality? Discuss.", answer: "The four Antah-Karanas (inner instruments) are: Manas (mind — processes sensory information), Buddhi (intellect — makes decisions and judgments), Chitta (memory/consciousness — stores impressions), and Ahamkara (ego — creates sense of individual identity). Together they explain how thoughts, decisions, memory, and self-identity shape human personality and behavior." }
      ]
    },
    4: {
      title: "Professional Ethics",
      questions: [
        { id: 7, marks: "10 Marks", text: "What are professional ethics? Are they relevant in contemporary situations? Analyze.", answer: "Professional ethics are standards of conduct expected in a workplace or profession, including honesty, accountability, confidentiality, and fairness. They remain highly relevant today due to increasing corporate scandals, data privacy concerns, and the need for trust in digital and remote work environments, ensuring professionals act responsibly toward clients, colleagues, and society." },
        { id: 8, marks: "10 Marks", text: "Why are transparency and accountability significant in professional practices? Explain.", answer: "Transparency ensures information and decision-making processes are open and understandable to stakeholders, building trust. Accountability ensures individuals and organizations take responsibility for their actions and outcomes. Together, they prevent corruption, improve organizational credibility, and are essential for maintaining ethical standards in modern professional environments." }
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
}
};