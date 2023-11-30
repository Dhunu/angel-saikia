export enum projectType {
    'Individual',
    'Group'
}

export enum projectScope {
    'FullStack',
    'FrontEnd',
    'BackEnd'
}

export const projects = [
    {
        scope: projectScope.FrontEnd,
        id: 1,
        title: 'Upload File',
        description: "This is a website for uploading all types of file. It is made using NextJS, Clerk, TailwindCSS and Firebase.Authenticated users can upload files and view their files. They can also delete their files, and rename them.",
        type: projectType.Individual,
        techStack: ['NextJS', 'Clerk', 'TailwindCSS', 'Firebase'],
        allTechStack: ['NextJS', 'ReactJS', 'Clerk', 'TailwindCSS', 'Firebase Firestore', 'Firebase Storage'],
        image: '/assets/images/upload-file.png',
        url: 'https://upload-file-drag-and-drop.vercel.app/dashboard',
        github: 'https://github.com/Dhunu/uploadFileDragAndDrop'
    },
    {
        scope: projectScope.FrontEnd,
        id: 2,
        title: 'BrightLine Clone',
        description: 'This is a clone of BrightLine website. Its a webiste of a company that provides mental health services. This website is made using HTML, CSS and Javascript.',
        type: projectType.Group,
        techStack: ['HTML', 'CSS', 'Javascript'],
        allTechStack: ['HTML', 'CSS', 'Javascript',],
        image: 'https://dhunu.github.io/resources/brightline.png',
        url: 'https://peppy-valkyrie-ddd5ab.netlify.app',
        github: 'https://github.com/Roshan-Patro/fallacious-company-8720'
    },
    {
        scope: projectScope.FrontEnd,
        id: 3,
        title: 'Headphone Zone Clone',
        description: 'This is a clone of Headphone Zone website. Its a webiste of a company that sells headphones. This website is made using HTML, CSS and Javascript.',
        type: projectType.Individual,
        techStack: ['HTML', 'CSS', 'Javascript'],
        allTechStack: ['HTML', 'CSS', 'Javascript',],
        image: 'https://dhunu.github.io/resources/headphoneZone.png',
        url: 'https://headphone-zone.netlify.app/',
        github: 'https://github.com/Dhunu/third-ice-7307'
    },
    {
        scope: projectScope.BackEnd,
        id: 4,
        title: 'Vegetable Store REST API',
        description: 'This is a SpringBoot REST API for a Vegetable Store. It has all the CRUD operations. It is made using SpringBoot, MySQL, Hibernate, JPA, Swagger and Lombok.',
        type: projectType.Group,
        techStack: ['Java', 'SpringBoot', 'MySQL'],
        allTechStack: ['Java', 'SpringBoot', 'MySQL', 'Hibernate', 'JPA', 'Swagger', 'Lombok'],
        image: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaDaZT3-0qSnu5_xNENyORagGyWQj-1NuN3DQf6Nc4pixtVJ_TKdlAPcFsAIEJuS9IP-limDKK6X5LVDv2PZGpVE_XTEog=w1920-h1080-k-pd',
        url: 'https://youtu.be/G7Gj7Xzaz5M',
        github: 'https://github.com/Dhunu/Sabzi-Bazar'
    },
    {
        scope: projectScope.BackEnd,
        id: 5,
        title: 'Covid Vaccination REST API',
        description: 'This is a SpringBoot REST API for Covid Vaccination. It has all the CRUD operations. It is made using SpringBoot, MySQL, Hibernate, JPA, Swagger and Lombok.',
        type: projectType.Group,
        techStack: ['Java', 'SpringBoot', 'MySQL'],
        allTechStack: ['Java', 'SpringBoot', 'MySQL', 'Hibernate', 'JPA', 'Swagger', 'Lombok'],
        image: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaANhw8-azVY4D-AMmwyEuHvPuYDajEE8k049jvXKmezd1hSxe_RpnQUp9SJSEcDV2yxph_hEWmrTSQx_B1H_ytXt57k=w1920-h1080-k-pd',
        url: 'https://youtu.be/mTRAeTU_k68',
        github: 'https://github.com/Dhunu/Covid_Vacination'
    },
]