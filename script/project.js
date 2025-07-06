export function projectsSectionFunctionality(){
  const projects = [
        {
        image: 'it.jpeg',
        title: 'Networking Technologies and Administration',
        description: '    GNS3: building and configuring network topologies.    VLAN, static routing, DHCP, DNS.    SIP networks based on MicroSIP and Asterisk.    SSH access, basic configuration of network service.  Confident work in Linux terminal (bash)',
        role: '',
        clientSatisfaction: '95%'
    },
    {
        image: 'iti.jpeg',
        title: 'System Administration and DevOps',
        description: 'Installation and configuration of Linux servers (Debian, Ubuntu)  VMware Workstation Pro 17, Oracle VirtualBox',
        role: '',
        clientSatisfaction: '95%'
    },
       {
        image: 'itit.jpeg',
        title: 'Databases',
        description: 'MySQL: working via terminal and MySQL Workbench.   Creating tables, databases, executing SQL queries.   Remote connection to databases, access configuration',
        role: '',
        clientSatisfaction: '95%'
    },
        {
        image: 'ititi.jpeg',
        title: 'Hardware',
        description: 'PC assembly, diagnostics, component replacement.   BIOS/UEFI configuration, OS installation (Windows, Linux).  Installation of power and low-voltage wiring (field experience)',
        role: '',
        clientSatisfaction: '95%'
    },
            {
        image: 'ititit.jpeg',
        title: 'Other Skills',
        description: 'MS Office: Excel, Word, PowerPoint (confident user).   WinSCP, PuTTY, working with logs.   Basic knowledge of HTML and CSS.   PC architecture, basics of logic elements',
        role: 'Designer',
        clientSatisfaction: '95%'
    },
  ];

  let projectHTML = '';

  projects.forEach(project => {
    projectHTML+= `
      <div class="project-card">
          <div class="container title-and-description">
            <h2 class="project-title">${project.title}</h2>
            <p class="project-description semi-transparent-word">
              ${project.description}
            </p>
          </div>
          <div class="fade-bgColor"></div>
          <div class="container image-and-result">   
            <img class="project-image" src="images and icons/icons/${project.image}" alt="proj-img" />
          </div>
       </div>
    `
  });
  
  document.querySelector('.projects-container').innerHTML = projectHTML


}
