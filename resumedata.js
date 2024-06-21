const level = {
    beginner: 'Beginner - exposure to skill and basic implementation',
    intermediate: 'Intermediate - interacted and leveraged on a rudementry basis',
    advanced: 'Advanced - regualr use and understanding',
    expert: 'Expert - deep understanding of skill'
};

const emptype = {
    prem: 'Permanent',
    contract: 'Contract'
}

const skill = {
    backend: 'Backend',
    frontend: 'Frontend',
    middle: 'Between Frontend and Backend',
    persist: 'Persistence layer',
    devops: 'DevOps',
    misc: 'Other Tools/Applications',
}

const company = {
    bayer: 'Bayer (Monsanto)',
    olive: 'Olive AI (Startup)',
    jpmc: 'JPMorgan Chase',
    bhi: 'Baker Hughes',
    emi: 'eMunications Inc.',
};

const skills = {
    js: { title: 'JavaScript', type: skill.frontend, level: level.expert },
    html: { title: 'HTML', type: skill.frontend, level: level.expert },
    css: { title: 'CSS', type: skill.frontend, level: level.advanced },
    maps: { title: 'Leaflet/Turf', type: skill.frontend, level: level.intermediate },
    tailwind: { title: 'Tailwind', type: skill.frontend, level: level.intermediate },
    sass: { title: 'SASS/SCSS', type: skill.frontend, level: level.intermediate },
    react: { title: 'React', type: skill.frontend, level: level.advanced },
    redux: { title: 'Redux', type: skill.frontend, level: level.intermediate },
    d3: { title: 'D3/ReChart', type: skill.frontend, level: level.beginner },
    jquery: { title: 'jQuery', type: skill.frontend, level: level.intermediate },
    boot: { title: 'Bootstrap', type: skill.frontend, level: level.intermediate },
    mui: { title: 'Material UI (React components)', type: skill.frontend, level: level.intermediate },
    xml: { title: 'XML/XSLT/XPATH', type: skill.frontend, level: level.advanced },
    flash: { title: 'Flash/ActionScript', type: skill.frontend, level: level.intermediate },

    node: { title: 'Node.JS', type: skill.backend, level: level.advanced },
    ts: { title: 'TypeScript', type: skill.backend, level: level.intermediate },
    jest: { title: 'Jest', type: skill.backend, level: level.intermediate },
    react_testing: { title: 'React-Testing', type: skill.backend, level: level.intermediate },
    webdriver: { title: 'Selenium WebDriver', type: skill.backend, level: level.beginner },
    net: { title: '.Net', type: skill.backend, level: level.intermediate },
    csharp: { title: 'c#', type: skill.backend, level: level.intermediate },
    opencv: { title: 'OpenCV', type: skill.backend, level: level.beginner },
    sp: { title: 'SharePoint', type: skill.backend, level: level.advanced },
    wp: { title: 'WordPress', type: skill.backend, level: level.intermediate },
    drupal: { title: 'Drupal', type: skill.backend, level: level.intermediate },
    cakephp: { title: 'CakePHP', type: skill.backend, level: level.intermediate },
    php: { title: 'PHP', type: skill.backend, level: level.intermediate },
    vba: { title: 'VBA', type: skill.backend, level: level.intermediate },

    web_services: { title: 'Web Services (REST/SOAP/JSON)', type: skill.middle, level: level.advanced },
    openapi: { title: "OpenAPI (Swagger)", type: skill.middle, level: level.intermediate },
    gql: { title: 'GraphQL', type: skill.middle, level: level.intermediate },

    postgres: { title: 'PostgreSQL', type: skill.persist, level: level.intermediate },
    mysql: { title: 'MariaDB/MySQL', type: skill.persist, level: level.advanced },
    mssql: { title: 'MSSQL/SSIS/SSMS', type: skill.persist, level: level.advanced },

    ecs: { title: 'AWS ECS', type: skill.devops, level: level.intermediate },
    codebuild: { title: 'AWS CodeBuild', type: skill.devops, level: level.intermediate },
    s3: { title: 'AWS S3', type: skill.devops, level: level.intermediate },
    lambda: { title: 'AWS Lambda', type: skill.devops, level: level.intermediate },
    cf: { title: 'AWS CloudFormation', type: skill.devops, level: level.intermediate },
    bitBucket: { title: 'BitBucket', type: skill.devops, level: level.intermediate },
    git: { title: 'GIT/GitHub/Git Actions', type: skill.devops, level: level.intermediate },
    jenkins: { title: 'Jenkins', type: skill.devops, level: level.intermediate },
    svn: { title: 'Subversion', type: skill.devops, level: level.beginner },
    iis: { title: 'Microsoft IIS', type: skill.devops, level: level.beginner },
    apach_http: { title: 'Apache httpd', type: skill.devops, level: level.beginner },

    miro: { title: 'Miro', type: skill.misc, level: level.beginner },
    figma: { title: 'Figma', type: skill.misc, level: level.beginner },
    adobe: { title: 'Adobe Suite', type: skill.misc, level: level.beginner },
    infopath: { title: 'InfoPath', type: skill.misc, level: level.advanced },
    jira: { title: 'Jira', type: skill.misc, level: level.intermediate },
    aha: { title: 'Aha!', type: skill.misc, level: level.intermediate },
    confluance: { title: 'Confluence', type: skill.misc, level: level.intermediate },
    taleo: { title: 'Taleo', type: skill.misc, level: level.intermediate },
}

const overview = {
    name: 'Matthew O&apos;Donnell',
    summary: `Full-stack developer focused on providing decision makers with clear, concise, actionable feedback on proposed
      and ongoing solutions. Implements solutions with efficiency, transparency and reliability. Continually acquiring
      knowledge and gaining understanding of new tools and techniques while implementing strategies and troubleshooting
      issues across integrated technologies.`,
    skills: [...skills]
}

const roles = [
    {
        company: company.bayer,
        title: 'Full-Stack Software Engineer',
        emptype: emptype.contract,
        location: 'Remote',
        start: 2022,
        end: 2024,
        description: `One of three Full Stack Developers who launched the crop chemical spray recording application augmenting the
          existing field sign safety process while meeting all regulatory responsibilities. Provides clear and concise
          information about crop (corn/soy/cotton) spray times, locations and all chemicals applied. Tailored to
          non&ndash;technical Bayer contracted seed growers accessing via a multitude of devices in remote and low
          bandwidth farming locations.`,
        highlights: [
            'Successful 0-1/greenfield application requirements gathering, design, development, and launch.',
            'Lead the enablement and integration of SAP Gigya SSO in the existing extranet environment and created the user onboarding pipeline with robust user management tools.',
            'Managed the collection, storage and surfacing of chemical label information for Bayer and non–Bayer pesticides',
            'Executed a less–is–more approach to UX enabling zero/minimum training for application users and managers.',
        ],
        skills: [
            skills.node, skills.ts, skills.react, skills.tailwind, skills.jest, skills.react_testing, skills.maps,
            skills.html, skills.js, skills.css, skills.mui, skills.web_services, skills.gql, skills.postgres,
            skills.ecs, skills.codebuild, skills.s3, skills.lambda, skills.git, skills.aha, skills.miro, skills.figma
        ],
        exit: {
            reason: 'End of contract',
            details: 'Tight budgets from the start that continued to get tighter',
        }
    },
    {
        company: company.olive,
        title: 'Software Automation Engineer',
        emptype: emptype.prem,
        location: 'Remote',
        start: 2020,
        end: 2022,
        description: `Developed, monitored, and maintained a multitude of fit&ndash;to&ndash;purpose resilient automations between
          hospitals, health insurers, and government agencies across a variety of systems including Epic (EHR), insurers
          and hospital portals (website interaction automations using OpenCV and WebDriver) and ETL activities across
          client hosted systems (sFTP, email, REST apis, etc).`,

        highlights: [
            'Implemented enhancements to the in–house automation toolkit while monitoring and maintaining existing automation workflows',
        ],
        skills: [
            skills.node, skills.ts, skills.webdriver, skills.opencv, skills.ecs, skills.s3, skills.lambda, skills.git,
            skills.jira, skills.confluance
        ],
        exit: {
            reason: 'Layoff',
            details: 'Layoff of all software engineers (400+ employees laidoff)',
        },
    },
    {
        company: company.jpmc,
        title: 'Lead Software Developer',
        start: 2018,
        end: 2020,
        description: `Lead full-stack engineer on the Blue Core team providing and maintaining unified ontology modules for code
          building and allow&ndash;listing of online telemetry implementation utilized by all customer banking web
          enabled systems (web, ios/android, third party integrations).`,
        emptype: emptype.perm,
        location: 'Columbus, OH',
        highlights: [
            'Build and maintain tools to support evolution of semantic models and delivery/integration of code artifacts',
            'Tool chain processes improvements supporting a wide audience of business and developer users',
            'Gather and disseminate repository contributors&apos; metrics and key performance indicators',
        ],
        skills: [
            skills.node, skills.ts, skills.react, skills.redux, skills.html, skills.js, skills.css, skills.mui, skills.boot,
            skills.d3, skills.openapi, skills.mysql, skills.jenkins, skills.cf, skills.ecs, skills.s3, skills.bitBucket,
            skills.jira, skills.confluance
        ],
        exit: {
            reason: 'Voluntary exit',
            details: `Left to persue role at ${company.olive}`,
        },
    },
    {
        company: company.bhi,
        title: 'HR/IT Architect Advisor',
        start: 2013,
        end: 2017,
        description: `Team lead and SharePoint developer for the integration of SharePoint, MSSQL/SSIS, Taleo, and SAP
            creating a framework for multiple Human Resources systems allowing end&ndash;to&ndash;end automation,
            reporting, and records management`,
        exit: 'Layoff',
        exitdetails: `${company.bhi} merger with GE - role made redundent, in-house HR framework replaced with Workday`,
        emptype: emptype.perm,
        location: 'Hybrid - Houston, TX',
        skills: [
            skills.csharp, skills.sp, skills.html, skills.js, skills.css, skills.mssql, skills.net, skills.infopath,
            skills.svn, skills.web_services
        ],
        highlights: [
            'Developed and supported a global manager portal (Manage My Team) for submission, approval, and processing of payroll actions including end–to–end automation for the majority of HR transactions reducing support cost by $3mm upon release and $1mm annually',
            'Developed Hiring and Onboarding system for requests, approval, and tracking resulting in an annual savings of $2mm',
            'Designed and developed the 2016 Merit Cycle management system removing the need for 3rd party system',
        ]
    },
    {
        company: company.bhi,
        title: 'Marketing Specialist',
        start: 2008,
        end: 2013,
        description: `Developed and supported SharePoint based intranet, internet content support, and managed web-based
            tools for marketing department`,
        exit: 'Internal transfer',
        exitdetails: `Moved to the innovation team within HR with a title that aligned with my role`,
        emptype: emptype.perm,
        location: 'Houston, TX',
        skills: [
            skills.html, skills.js, skills.css, skills.jquery, skills.sp, skills.vba, skills.php, skills.wp, skills.cakephp,
            skills.drupal, skills.csharp, skills.iis, skills.svn, skills.web_services
        ],
        highlights: [
            'Analyzed business requirements and translated them to actionable project requirements',
            'Lead technical contact for third party developers of the corporate public facing website ensuring clear understanding of requirements facilitating an on time launch at quarter the cost of initial estimates',
            'SharePoint developer for intranet, eliminating legacy systems and content, with a successful on time and on budget launch',
            'Designed, implemented, and automated collaborative activities reducing overhead',
        ]
    },
    {
        company: company.emi,
        title: 'Systems Programming Manager',
        start: 2007,
        end: 2008,
        description: `Building and maintaining web presents for chamber of commerce businesses using Flash/ActionScript Drupal and
          WordPress site customizations, hosting, server and email administration`,
        exit: 'Voluntary exit',
        exitdetails: `Left to persue role at ${company.bhi}`,
        emptype: emptype.perm,
        location: 'Houston, TX',
        skills: [
            skills.html, skills.js, skills.css, skills.jquery, skills.flash, skills.php, skills.wp, skills.cakephp,
            skills.drupal, skills.apach_http, skills.web_services
        ],
        highlights: [
            'Systems administrator for email servers, DNS, and col-location hosting',
            'Full-stack LAMP (Linux via XServer w/homebrew, Apache, MySQL, PHP)',
            'Web design (Javascript, HTML, CSS, Flash/ActionScript)',
        ]
    },
    {
        company: company.bhi,
        title: 'Webmaster (HCC divsion)',
        start: 2005,
        end: 2006,
        description: `Migration and management of divisional intranet content manually from IIS/FrontPage to
          Interwoven/BroadVision platform utilizing VB/VBA, JavaScript, HTML, XML, IIS 6, Interwoven, BroadVision,
          Clarity`,
        exit: 'End of contract',
        exitdetails: `Decided to move to a small business environment at ${company.emi}`,
        emptype: emptype.contract,
        location: 'Houston, TX',
        skills: [
            skills.html, skills.js, skills.css, skills.xml, skills.web_services, skills.vba
        ],
        highlights: []
    },
];
